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

function iconPublicUrl(assetId: string): string {
  const asset = resolveAsset(assetId);
  // Prefer crawlable static brand paths so browsers/CDNs are not stuck on
  // cached `/api/dam/image/...` favicon responses.
  return asset.publicSrc ?? asset.src;
}

export function damLayoutIcons(assetIds: {
  favicon16: string;
  favicon32: string;
  favicon48?: string;
  apple: string;
}): Metadata["icons"] {
  const favicon16 = iconPublicUrl(assetIds.favicon16);
  const favicon32 = iconPublicUrl(assetIds.favicon32);
  const favicon48 = assetIds.favicon48
    ? iconPublicUrl(assetIds.favicon48)
    : null;
  const apple = iconPublicUrl(assetIds.apple);

  return {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/assets/brand/favicon-ed11.svg", type: "image/svg+xml" },
      { url: favicon32, sizes: "32x32", type: "image/png" },
      { url: favicon16, sizes: "16x16", type: "image/png" },
      ...(favicon48
        ? [{ url: favicon48, sizes: "48x48", type: "image/png" as const }]
        : []),
    ],
    apple,
  };
}
