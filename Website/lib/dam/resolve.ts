import { getAssetById } from "@/lib/dam/registry";
import { damImageApiPath } from "@/lib/dam/api-path";
import { getVariantSrc } from "@/lib/dam/optimization";
import {
  resolvePublicAsset,
  type PublicImageCategory,
} from "@/lib/dam/public-image";
import type { ImageVariant, ResolvedAsset } from "@/lib/dam/types";
import type { EditorialPhoto } from "@/lib/dam/types";

export type { PublicImageCategory };

export function resolveAsset(
  assetId: string,
  variant: ImageVariant = "desktop",
): ResolvedAsset {
  const asset = getAssetById(assetId);
  if (!asset) {
    throw new Error(`DAM asset not found: ${assetId}`);
  }

  const apiSrc = damImageApiPath(assetId);
  const catalogSrc = asset.src || asset.versions.find((v) => v.src)?.src || null;

  return {
    id: asset.id,
    src: apiSrc,
    publicSrc: catalogSrc,
    alt: asset.altText,
    width: asset.width,
    height: asset.height,
    objectPosition: asset.objectPosition,
    blurDataURL: asset.blurPlaceholder,
    variants: asset.variants,
    resolvedVariantSrc: catalogSrc
      ? getVariantSrc({ ...asset, src: catalogSrc }, variant)
      : null,
  };
}

export {
  resolvePublicAsset,
  getPublicImageAssetId,
  getPublicImage,
} from "@/lib/dam/public-image";

export function resolveAssetSafe(
  assetId: string,
  variant: ImageVariant = "desktop",
): ResolvedAsset | null {
  try {
    return resolveAsset(assetId, variant);
  } catch {
    return null;
  }
}

export function resolveAsEditorialPhoto(
  assetId: string,
  category?: PublicImageCategory,
): EditorialPhoto {
  const resolved = resolvePublicAsset(assetId, category);
  return {
    assetId,
    src: resolved.src,
    alt: resolved.alt,
    width: resolved.width,
    height: resolved.height,
    objectPosition: resolved.objectPosition,
    authentic: Boolean(resolved.publicSrc),
  };
}

export function resolveMany(assetIds: string[]): EditorialPhoto[] {
  return assetIds.map((id) => resolveAsEditorialPhoto(id));
}

export function resolveAssetAbsoluteUrl(assetId: string, siteUrl: string): string {
  const normalized = siteUrl.replace(/\/$/, "");
  return `${normalized}${damImageApiPath(assetId)}`;
}
