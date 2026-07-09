import Image from "next/image";
import { BRAND, CREST_SIZES, type CrestVariant } from "@/lib/brand";

type CrestSealProps = {
  size?: number;
  variant?: CrestVariant;
  className?: string;
  decorative?: boolean;
};

export function CrestSeal({
  size = CREST_SIZES.lg,
  variant = "fullcolour",
  className = "",
  decorative = false,
}: CrestSealProps) {
  const asset = BRAND.crest[variant];
  const aspect = asset.height / asset.width;
  const height = Math.round(size * aspect);

  return (
    <div
      className={`brand-crest flex items-center justify-center ${className}`}
      aria-hidden={decorative ? true : undefined}
    >
      <Image
        src={asset.src}
        alt={decorative ? "" : asset.alt}
        width={size}
        height={height}
        className="object-contain"
        style={{
          width: size,
          height: "auto",
          maxHeight: height,
        }}
        sizes={`${size}px`}
      />
    </div>
  );
}
