import type { Metadata } from "next";
import { resolveAsset } from "@/lib/dam/resolve";
import { getAssetById } from "@/lib/dam/registry";

export type DamMetadataImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * Prefer crawlable public paths for social metadata.
 * Robots disallow `/api/`, so crawlers must not rely on `/api/dam/image/...`.
 * When an explicit open-graph variant exists, prefer it (typically 1200 × 630).
 */
export function damMetadataImage(assetId: string): DamMetadataImage {
  const asset = resolveAsset(assetId);
  const catalog = getAssetById(assetId);
  const explicitOg = catalog?.variants?.["open-graph"];
  const url = explicitOg ?? asset.publicSrc ?? asset.src;
  const usesOgVariant = Boolean(explicitOg);

  return {
    url,
    width: usesOgVariant ? 1200 : asset.width,
    height: usesOgVariant ? 630 : asset.height,
    alt: asset.alt,
  };
}

export function damAbsoluteUrl(assetId: string, siteUrl: string): string {
  const image = damMetadataImage(assetId);
  return `${siteUrl}${image.url}`;
}

export function damOpenGraphImages(assetId: string) {
  return [damMetadataImage(assetId)];
}

export function damTwitterImages(assetId: string) {
  return [damMetadataImage(assetId).url];
}

export function damLayoutIcons(assetIds: {
  favicon16: string;
  favicon32: string;
  apple: string;
}): Metadata["icons"] {
  const favicon16 = resolveAsset(assetIds.favicon16);
  const favicon32 = resolveAsset(assetIds.favicon32);
  const apple = resolveAsset(assetIds.apple);

  return {
    icon: [
      { url: favicon32.src, sizes: "32x32" },
      { url: favicon16.src, sizes: "16x16" },
    ],
    apple: apple.src,
  };
}
