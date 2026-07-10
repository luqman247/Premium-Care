"use client";

import { useEffect, useState } from "react";
import { DamImage } from "@/components/DamImage";
import {
  HERO_ROTATION_ASSET_IDS,
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
    if (reduceMotion || HERO_ROTATION_ASSET_IDS.length <= 1) return;

    let interval: number | undefined;

    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % HERO_ROTATION_ASSET_IDS.length);
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
      aria-label="PremiumCare hjemmepleje i rolige, nordiske omgivelser"
    >
      {HERO_ROTATION_ASSET_IDS.map((assetId, index) => {
        const isActive = index === activeIndex;
        return (
          <DamImage
            key={assetId}
            assetId={assetId}
            category="hero"
            alt=""
            aria-hidden
            fill
            priority={index === 0}
            sizes={PHOTO_SIZES.hero}
            className={`rotating-hero-image ${isActive ? "is-active" : ""}`}
            style={{
              transitionDuration: `${HERO_ROTATION_FADE_MS}ms`,
            }}
          />
        );
      })}
    </div>
  );
}
