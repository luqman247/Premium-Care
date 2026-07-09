import "server-only";

import fs from "node:fs";
import path from "node:path";
import {
  absolutePathToPublicUrl,
  getPublicRoot,
  isImageFilename,
  publicUrlToAbsolutePath,
  VERSION_STATUSES,
  type VersionLifecycleStatus,
} from "@/lib/dam/paths";
import type { AssetVersion } from "@/lib/dam/types";

function fileExistsAtPublicUrl(publicSrc: string): boolean {
  if (!publicSrc?.startsWith("/")) return false;
  try {
    return fs.existsSync(publicUrlToAbsolutePath(publicSrc));
  } catch {
    return false;
  }
}

function parseVersionStatus(filename: string): VersionLifecycleStatus | null {
  const base = path.parse(filename).name.toLowerCase();
  for (const status of VERSION_STATUSES) {
    if (base === status || base.endsWith(`.${status}`) || base.endsWith(`-${status}`)) {
      return status;
    }
  }
  return null;
}

const MASTER_FORMAT_PRIORITY = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function masterFormatRank(publicSrc: string): number {
  const ext = path.extname(publicSrc).toLowerCase();
  const rank = MASTER_FORMAT_PRIORITY.indexOf(ext);
  return rank === -1 ? MASTER_FORMAT_PRIORITY.length : rank;
}

function pickByLifecyclePriority(
  entries: { publicSrc: string; status: VersionLifecycleStatus | null }[],
): string | null {
  if (entries.length === 0) return null;

  for (const preferred of VERSION_STATUSES) {
    const matches = entries.filter((entry) => entry.status === preferred);
    if (matches.length === 1) return matches[0].publicSrc;
    if (matches.length > 1) {
      return [...matches].sort(
        (a, b) => masterFormatRank(a.publicSrc) - masterFormatRank(b.publicSrc),
      )[0].publicSrc;
    }
  }

  if (entries.length === 1) {
    return entries[0].publicSrc;
  }

  return null;
}

/** Select the best on-disk file inside a per-asset version directory */
export function selectFromVersionDirectory(versionDir: string): string | null {
  if (!fs.existsSync(versionDir)) return null;

  let files: string[];
  try {
    files = fs.readdirSync(versionDir).filter(isImageFilename);
  } catch {
    return null;
  }

  if (files.length === 0) return null;

  const entries = files.map((filename) => ({
    publicSrc: absolutePathToPublicUrl(path.join(versionDir, filename)),
    status: parseVersionStatus(filename),
  }));

  const resolved = pickByLifecyclePriority(entries);
  if (resolved) return resolved;

  if (files.length === 1) {
    return absolutePathToPublicUrl(path.join(versionDir, files[0]));
  }

  // Multiple files without lifecycle names — prefer highest version number in filename
  const sorted = [...files].sort((a, b) => {
    const av = Number(path.parse(a).name.match(/v?(\d+)/)?.[1] ?? 0);
    const bv = Number(path.parse(b).name.match(/v?(\d+)/)?.[1] ?? 0);
    return bv - av;
  });

  return absolutePathToPublicUrl(path.join(versionDir, sorted[0]));
}

/** Select the best version declared in the DAM catalog */
export function selectFromCatalogVersions(versions: AssetVersion[]): string | null {
  const onDisk = versions.filter((version) => version.src && fileExistsAtPublicUrl(version.src));
  if (onDisk.length === 0) return null;

  const withStatus = onDisk.map((version) => ({
    publicSrc: version.src,
    status: version.status ?? null,
  }));

  const resolved = pickByLifecyclePriority(
    withStatus.filter((entry): entry is { publicSrc: string; status: VersionLifecycleStatus } =>
      entry.status !== null ? true : false,
    ),
  );
  if (resolved) return resolved;

  if (onDisk.length === 1) {
    return onDisk[0].src;
  }

  const published = onDisk.find((version) => version.status === "published");
  if (published) return published.src;

  const approved = onDisk.find((version) => version.status === "approved");
  if (approved) return approved.src;

  const draft = onDisk.find((version) => version.status === "draft");
  if (draft) return draft.src;

  const sorted = [...onDisk].sort((a, b) => b.versionNumber - a.versionNumber);
  return sorted[0]?.src ?? null;
}

export function selectFlatLifecycleFile(
  directory: string,
  assetId: string,
): string | null {
  if (!fs.existsSync(directory)) return null;

  let files: string[];
  try {
    files = fs.readdirSync(directory).filter(isImageFilename);
  } catch {
    return null;
  }

  const idLower = assetId.toLowerCase();
  const matches = files.filter((filename) => {
    const lower = filename.toLowerCase();
    return (
      lower.startsWith(`${idLower}.`) ||
      lower.startsWith(`${idLower}-`) ||
      lower.startsWith(`${idLower}_`)
    );
  });

  if (matches.length === 0) return null;

  const entries = matches.map((filename) => ({
    publicSrc: absolutePathToPublicUrl(path.join(directory, filename)),
    status: parseVersionStatus(filename),
  }));

  const resolved = pickByLifecyclePriority(entries);
  if (resolved) return resolved;

  if (matches.length === 1) {
    return absolutePathToPublicUrl(path.join(directory, matches[0]));
  }

  return null;
}

export function findExactFilename(directory: string, filename: string): string | null {
  if (!filename || !fs.existsSync(directory)) return null;
  const absolute = path.join(directory, filename);
  if (fs.existsSync(absolute) && fs.statSync(absolute).isFile()) {
    return absolutePathToPublicUrl(absolute);
  }
  return null;
}

export function getVersionDirectory(mediaRoot: string, assetId: string): string {
  return path.join(getPublicRoot(), mediaRoot, assetId);
}
