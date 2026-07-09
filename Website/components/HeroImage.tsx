"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type HeroImageProps = Omit<ImageProps, "className"> & {
  className?: string;
};

export function HeroImage({ className = "", alt, ...props }: HeroImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      alt={alt}
      className={`object-cover image-fade ${loaded ? "loaded" : ""} ${className}`.trim()}
      onLoad={() => setLoaded(true)}
    />
  );
}
