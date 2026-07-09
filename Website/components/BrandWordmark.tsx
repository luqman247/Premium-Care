import Image from "next/image";
import { BRAND, WORDMARK_HEIGHT, type WordmarkVariant } from "@/lib/brand";

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
  const width = Math.round((height / asset.height) * asset.width);

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={width}
      height={height}
      priority={priority}
      quality={90}
      className={`brand-wordmark-img object-contain object-left ${className}`}
      style={{ height, width: "auto", maxWidth: width }}
      sizes={`(max-width: 768px) ${Math.round(width * 0.9)}px, ${width}px`}
    />
  );
}
