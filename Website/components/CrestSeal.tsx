import { DamImage } from "@/components/DamImage";
import { BRAND, BRAND_ASSET_IDS, CREST_SIZES, type CrestVariant } from "@/lib/brand";

type CrestSealProps = {
  size?: number;
  variant?: CrestVariant;
  className?: string;
  decorative?: boolean;
  /** Override DAM alt when the crest is the sole brand identifier */
  alt?: string;
};

export function CrestSeal({
  size = CREST_SIZES.lg,
  variant = "fullcolour",
  className = "",
  decorative = false,
  alt,
}: CrestSealProps) {
  const asset = BRAND.crest[variant];
  const assetId = BRAND_ASSET_IDS.crest[variant];
  const aspect = asset.height / asset.width;
  const height = Math.round(size * aspect);

  return (
    <div
      className={`brand-crest flex items-center justify-center ${className}`}
      aria-hidden={decorative ? true : undefined}
    >
      <DamImage
        assetId={assetId}
        alt={decorative ? "" : (alt ?? asset.alt)}
        width={size}
        height={height}
        className="!object-contain object-contain"
        style={{
          width: size,
          height: "auto",
          maxHeight: height,
          objectFit: "contain",
        }}
        sizes={`${size}px`}
      />
    </div>
  );
}
