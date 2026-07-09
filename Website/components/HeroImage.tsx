"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type HeroImageProps = Omit<ImageProps, "className"> & {
  className?: string;
  objectPosition?: string;
};

export function HeroImage({
  className = "",
  alt,
  objectPosition = "center center",
  priority = false,
  ...props
}: HeroImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      alt={alt}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={`object-cover image-fade ${loaded ? "loaded" : ""} ${className}`.trim()}
      style={{ objectPosition, ...(props.style ?? {}) }}
      onLoad={() => setLoaded(true)}
    />
  );
}
