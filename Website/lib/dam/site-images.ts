import type { Metadata } from "next";
import { resolveAsset } from "@/lib/dam/resolve";

export type DamMetadataImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export function damMetadataImage(assetId: string): DamMetadataImage {
  const asset = resolveAsset(assetId);
  return {
    url: asset.src,
    width: asset.width,
    height: asset.height,
    alt: asset.alt,
  };
}

export function damAbsoluteUrl(assetId: string, siteUrl: string): string {
  return `${siteUrl}${resolveAsset(assetId).src}`;
}

export function damOpenGraphImages(assetId: string) {
  return [damMetadataImage(assetId)];
}

export function damTwitterImages(assetId: string) {
  return [resolveAsset(assetId).src];
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
