"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HERO_ROTATION,
  HERO_ROTATION_FADE_MS,
  HERO_ROTATION_INITIAL_DELAY_MS,
  HERO_ROTATION_INTERVAL_MS,
} from "@/lib/hero-rotation";
import { PHOTO_SIZES } from "@/lib/photography";

export function RotatingHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);
    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (reduceMotion || HERO_ROTATION.length <= 1) return;

    let interval: number | undefined;

    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % HERO_ROTATION.length);
      }, HERO_ROTATION_INTERVAL_MS);
    }, HERO_ROTATION_INITIAL_DELAY_MS);

    return () => {
      window.clearTimeout(start);
      if (interval) window.clearInterval(interval);
    };
  }, [reduceMotion]);

  return (
    <div
      className="rotating-hero"
      role="img"
      aria-label="Premium Care hjemmepleje i rolige, nordiske omgivelser"
    >
      {HERO_ROTATION.map((photo, index) => {
        const isActive = index === activeIndex;
        return (
          <Image
            key={photo.src}
            src={photo.src}
            alt=""
            aria-hidden
            fill
            priority={index === 0}
            sizes={PHOTO_SIZES.hero}
            className={`rotating-hero-image ${isActive ? "is-active" : ""}`}
            style={{
              objectPosition: photo.objectPosition ?? "center center",
              transitionDuration: `${HERO_ROTATION_FADE_MS}ms`,
            }}
          />
        );
      })}
    </div>
  );
}
