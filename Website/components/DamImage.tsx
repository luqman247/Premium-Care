"use client";

import type { ImageProps } from "next/image";
import Image from "next/image";
import { useState } from "react";
import { resolvePublicAsset } from "@/lib/dam/resolve";
import type { PublicImageCategory } from "@/lib/dam/public-image";
import type { ImageVariant } from "@/lib/dam/types";

type DamImageProps = Omit<ImageProps, "src" | "alt"> & {
  assetId: string;
  category?: PublicImageCategory;
  variant?: ImageVariant;
  className?: string;
  objectPosition?: string;
  alt?: string;
};

export function DamImage({
  assetId,
  category,
  variant = "desktop",
  className = "",
  objectPosition,
  alt,
  priority = false,
  fill,
  ...props
}: DamImageProps) {
  const [loaded, setLoaded] = useState(false);
  const asset = resolvePublicAsset(assetId, category, variant);

  return (
    <Image
      {...props}
      src={asset.src}
      alt={alt ?? asset.alt}
      fill={fill}
      {...(fill
        ? {}
        : {
            width: props.width ?? asset.width,
            height: props.height ?? asset.height,
          })}
      placeholder={asset.blurDataURL ? "blur" : "empty"}
      blurDataURL={asset.blurDataURL}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={`object-cover image-fade ${loaded ? "loaded" : ""} ${className}`.trim()}
      style={{
        objectPosition: objectPosition ?? asset.objectPosition ?? "center center",
        ...(props.style ?? {}),
      }}
      onLoad={() => setLoaded(true)}
    />
  );
}
