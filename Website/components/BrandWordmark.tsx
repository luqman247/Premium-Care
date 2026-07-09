import { DamImage } from "@/components/DamImage";
import {
  BRAND,
  BRAND_ASSET_IDS,
  WORDMARK_HEIGHT,
  type WordmarkVariant,
} from "@/lib/brand";

type BrandWordmarkProps = {
  variant?: WordmarkVariant;
  height?: number;
  className?: string;
  priority?: boolean;
};

export function BrandWordmark({
  variant = "navy",
  height = WORDMARK_HEIGHT.footer,
  className = "",
  priority = false,
}: BrandWordmarkProps) {
  const asset = BRAND.wordmark[variant];
  const assetId = BRAND_ASSET_IDS.wordmark[variant];
  const width = Math.round((height / asset.height) * asset.width);

  return (
    <DamImage
      assetId={assetId}
      priority={priority}
      quality={90}
      height={height}
      width={width}
      className={`brand-wordmark-img object-contain object-left ${className}`}
      style={{ height, width: "auto", maxWidth: width }}
      sizes={`(max-width: 768px) ${Math.round(width * 0.9)}px, ${width}px`}
    />
  );
}
