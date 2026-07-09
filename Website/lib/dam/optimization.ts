import type { DamAsset, ImageVariant } from "@/lib/dam/types";

/** Generate optimised variant paths for an asset */
export function generateVariants(asset: DamAsset): Partial<Record<ImageVariant, string>> {
  if (!asset.src) return {};

  const base = asset.src.replace(/\.[^.]+$/, "");
  const ext = asset.src.split(".").pop() ?? "jpg";

  return {
    desktop: asset.src,
    tablet: `${base}-tablet.${ext}`,
    mobile: `${base}-mobile.${ext}`,
    retina: `${base}@2x.${ext}`,
    thumbnail: `${base}-thumb.${ext}`,
    square: `${base}-square.${ext}`,
    portrait: `${base}-portrait.${ext}`,
    landscape: `${base}-landscape.${ext}`,
    "open-graph": `${base}-og.${ext}`,
    social: `${base}-social.${ext}`,
    blur: asset.blurPlaceholder,
    webp: `${base}.webp`,
    avif: `${base}.avif`,
  };
}

export function getVariantSrc(
  asset: DamAsset,
  variant: ImageVariant = "desktop",
): string {
  const variants = { ...generateVariants(asset), ...asset.variants };
  return variants[variant] ?? asset.src;
}

export function estimateFileSizeKb(asset: DamAsset): number {
  if (!asset.src) return 0;
  const pixels = asset.width * asset.height;
  return Math.round((pixels * 0.00015 + 80) / 10) * 10;
}
