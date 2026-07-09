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
      className={`object-contain object-left ${className}`}
      style={{ height, width: "auto" }}
      sizes={`${width}px`}
    />
  );
}
