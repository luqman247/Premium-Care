import "server-only";

import fs from "node:fs";
import path from "node:path";
import {
  absolutePathToPublicUrl,
  getMediaRootsForAsset,
  getPublicRoot,
  isImageFilename,
  publicUrlToAbsolutePath,
} from "@/lib/dam/paths";
import {
  findExactFilename,
  getVersionDirectory,
  selectFlatLifecycleFile,
  selectFromCatalogVersions,
  selectFromVersionDirectory,
} from "@/lib/dam/version-select";
import type { DamAsset } from "@/lib/dam/types";

export type FilesystemDiscovery = {
  src: string;
  source: "version-dir" | "flat-id" | "catalog-filename" | "catalog-src" | "catalog-version";
  mtimeMs: number;
};

let watchersStarted = false;

export function invalidateFilesystemCache(): void {
  /* Reserved for filesystem watcher callbacks */
}

function getFileMtimeMs(publicSrc: string): number {
  try {
    return fs.statSync(publicUrlToAbsolutePath(publicSrc)).mtimeMs;
  } catch {
    return 0;
  }
}

/**
 * Discover the best on-disk file for a DAM asset.
 * Priority: version folder (published → approved → draft → single file) → flat ID file →
 * catalog filename → catalog versions → catalog src (if file exists).
 */
export function discoverAssetOnDisk(asset: DamAsset): FilesystemDiscovery | null {
  const roots = getMediaRootsForAsset(asset);

  for (const mediaRoot of roots) {
    const versionDir = getVersionDirectory(mediaRoot, asset.id);
    const fromVersionDir = selectFromVersionDirectory(versionDir);
    if (fromVersionDir) {
      return {
        src: fromVersionDir,
        source: "version-dir",
        mtimeMs: getFileMtimeMs(fromVersionDir),
      };
    }
  }

  for (const mediaRoot of roots) {
    const directory = path.join(getPublicRoot(), mediaRoot);
    const fromFlatId = selectFlatLifecycleFile(directory, asset.id);
    if (fromFlatId) {
      return {
        src: fromFlatId,
        source: "flat-id",
        mtimeMs: getFileMtimeMs(fromFlatId),
      };
    }
  }

  for (const mediaRoot of roots) {
    const directory = path.join(getPublicRoot(), mediaRoot);
    const fromFilename = findExactFilename(directory, asset.filename);
    if (fromFilename) {
      return {
        src: fromFilename,
        source: "catalog-filename",
        mtimeMs: getFileMtimeMs(fromFilename),
      };
    }
  }

  const fromCatalogVersions = selectFromCatalogVersions(asset.versions);
  if (fromCatalogVersions) {
    return {
      src: fromCatalogVersions,
      source: "catalog-version",
      mtimeMs: getFileMtimeMs(fromCatalogVersions),
    };
  }

  if (asset.src && fs.existsSync(publicUrlToAbsolutePath(asset.src))) {
    return {
      src: asset.src,
      source: "catalog-src",
      mtimeMs: getFileMtimeMs(asset.src),
    };
  }

  return null;
}

export function enrichAssetFromFilesystem(asset: DamAsset): DamAsset {
  if (typeof window !== "undefined") {
    return asset;
  }

  const discovery = discoverAssetOnDisk(asset);
  if (!discovery) {
    return asset;
  }

  const shouldPublish =
    discovery.source === "version-dir" ||
    discovery.source === "flat-id" ||
    discovery.source === "catalog-filename";

  return {
    ...asset,
    src: discovery.src,
    uploadDate: asset.uploadDate ?? new Date(discovery.mtimeMs).toISOString(),
    lastModified: new Date(discovery.mtimeMs).toISOString(),
    status: shouldPublish && asset.status === "planned" ? "published" : asset.status,
  };
}

function watchDirectory(directory: string): void {
  if (!fs.existsSync(directory)) return;

  try {
    fs.watch(directory, { persistent: false }, () => {
      invalidateFilesystemCache();
    });
  } catch {
    /* ignore watch errors */
  }

  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(directory, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const child = path.join(directory, entry.name);
    try {
      fs.watch(child, { persistent: false }, () => {
        invalidateFilesystemCache();
      });
    } catch {
      /* ignore */
    }
  }
}

/** Start filesystem watchers (development) so new images are picked up instantly */
export function startFilesystemWatcher(): void {
  if (watchersStarted || typeof window !== "undefined") return;
  watchersStarted = true;

  const roots = [
    path.join(getPublicRoot(), "images", "editorial"),
    path.join(getPublicRoot(), "images", "leadership"),
    path.join(getPublicRoot(), "images", "press"),
    path.join(getPublicRoot(), "images"),
    path.join(getPublicRoot(), "assets", "brand"),
  ];

  for (const root of roots) {
    watchDirectory(root);
  }

  invalidateFilesystemCache();
}

export type FilesystemVersionFile = {
  src: string;
  filename: string;
  status: "draft" | "approved" | "published" | "unknown";
  mtimeMs: number;
  sizeBytes: number;
};

/** List every image file in version directories for an asset */
export function listFilesystemVersions(asset: DamAsset): FilesystemVersionFile[] {
  const results: FilesystemVersionFile[] = [];
  const roots = getMediaRootsForAsset(asset);

  for (const mediaRoot of roots) {
    const versionDir = getVersionDirectory(mediaRoot, asset.id);
    if (!fs.existsSync(versionDir)) continue;

    let files: string[];
    try {
      files = fs.readdirSync(versionDir).filter(isImageFilename);
    } catch {
      continue;
    }

    for (const filename of files) {
      const absolute = path.join(versionDir, filename);
      try {
        const stat = fs.statSync(absolute);
        const base = path.parse(filename).name.toLowerCase();
        let status: FilesystemVersionFile["status"] = "unknown";
        if (base === "published" || base.endsWith(".published")) status = "published";
        else if (base === "approved" || base.endsWith(".approved")) status = "approved";
        else if (base === "draft" || base.endsWith(".draft")) status = "draft";

        results.push({
          src: absolutePathToPublicUrl(absolute),
          filename,
          status,
          mtimeMs: stat.mtimeMs,
          sizeBytes: stat.size,
        });
      } catch {
        /* skip */
      }
    }
  }

  return results.sort((a, b) => b.mtimeMs - a.mtimeMs);
}
