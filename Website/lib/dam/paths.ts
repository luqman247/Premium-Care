import "server-only";

import path from "node:path";
import type { DamAsset } from "@/lib/dam/types";

export const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"] as const;

export const VERSION_STATUSES = ["published", "approved", "draft"] as const;
export type VersionLifecycleStatus = (typeof VERSION_STATUSES)[number];

export const EDITORIAL_MEDIA_ROOTS = [
  "images/editorial",
  "images/leadership",
  "images/press",
  "images",
  "assets/brand",
] as const;

export function getPublicRoot(): string {
  return path.join(process.cwd(), "public");
}

export function publicUrlToAbsolutePath(publicSrc: string): string {
  return path.join(getPublicRoot(), publicSrc.replace(/^\//, ""));
}

export function absolutePathToPublicUrl(absolutePath: string): string {
  const relative = path.relative(getPublicRoot(), absolutePath);
  return `/${relative.split(path.sep).join("/")}`;
}

export function isImageFilename(filename: string): boolean {
  const lower = filename.toLowerCase();
  return IMAGE_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

/** Directories to scan when resolving an asset from disk */
export function getMediaRootsForAsset(asset: DamAsset): string[] {
  if (asset.mediaType === "brand-icon" || asset.id.startsWith("PC-BR-")) {
    return ["assets/brand"];
  }

  if (asset.category === "editorial-founder") {
    return ["images", "images/editorial"];
  }

  if (
    asset.category === "editorial-about" ||
    asset.id.startsWith("PC-03-") ||
    asset.filename.includes("ceo-") ||
    asset.filename.includes("careers-training")
  ) {
    return ["images/leadership", "images/press", "images/editorial"];
  }

  if (asset.category.startsWith("editorial-")) {
    return ["images/editorial", "images/leadership", "images/press"];
  }

  return [...EDITORIAL_MEDIA_ROOTS];
}
