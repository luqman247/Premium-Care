import "server-only";

import { discoverAssetOnDisk } from "@/lib/dam/filesystem-sync";
import { getAssetById } from "@/lib/dam/registry.server";
import {
  GLOBAL_PUBLIC_FALLBACK,
  getPublicImageAssetId,
  inferPublicImageCategory,
  type PublicImageCategory,
} from "@/lib/dam/public-image";

export function assetHasPublicFile(assetId: string): boolean {
  const asset = getAssetById(assetId);
  if (!asset) return false;
  if (asset.status !== "published") return false;
  return Boolean(discoverAssetOnDisk(asset)?.src || asset.src);
}

export function resolvePublicDiskAssetId(
  requestedId: string,
  category?: PublicImageCategory,
): string {
  const asset = getAssetById(requestedId);
  if (asset && assetHasPublicFile(requestedId)) {
    return requestedId;
  }

  const resolvedCategory = category ?? inferPublicImageCategory(requestedId);
  return getPublicImageAssetId(requestedId, resolvedCategory);
}

export function resolvePublicDiskPath(
  requestedId: string,
  category?: PublicImageCategory,
): { assetId: string; publicSrc: string } | null {
  const resolvedId = resolvePublicDiskAssetId(requestedId, category);
  const asset = getAssetById(resolvedId);
  if (!asset) return null;

  const discovered = discoverAssetOnDisk(asset);
  const publicSrc = discovered?.src ?? asset.src;
  if (!publicSrc) return null;

  return { assetId: resolvedId, publicSrc };
}

export function globalFallbackDiskPath(): { assetId: string; publicSrc: string } | null {
  return resolvePublicDiskPath(GLOBAL_PUBLIC_FALLBACK, "hero");
}
