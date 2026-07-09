/**
 * Premium Care brand asset registry — canonical web paths.
 * Source: logo-suite v1.0 (PNG; no SVG masters in release).
 */

export const BRAND = {
  wordmark: {
    navy: {
      src: "/assets/brand/wordmark-navy.png",
      width: 897,
      height: 473,
      alt: "Premium Care",
    },
    white: {
      src: "/assets/brand/wordmark-white.png",
      width: 897,
      height: 473,
      alt: "Premium Care",
    },
    gold: {
      src: "/assets/brand/wordmark-gold.png",
      width: 897,
      height: 473,
      alt: "Premium Care",
    },
  },
  crest: {
    fullcolour: {
      src: "/assets/brand/crest-fullcolour.png",
      width: 365,
      height: 465,
      alt: "Premium Care våbenskjold",
    },
    gold: {
      src: "/assets/brand/crest-gold.png",
      width: 365,
      height: 465,
      alt: "Premium Care våbenskjold",
    },
    navy: {
      src: "/assets/brand/crest-navy.png",
      width: 365,
      height: 465,
      alt: "Premium Care våbenskjold",
    },
    white: {
      src: "/assets/brand/crest-white.png",
      width: 365,
      height: 465,
      alt: "Premium Care våbenskjold",
    },
  },
  horizontal: {
    navy: {
      src: "/assets/brand/horizontal-navy.png",
      width: 2299,
      height: 982,
      alt: "Premium Care",
    },
    white: {
      src: "/assets/brand/horizontal-white.png",
      width: 2299,
      height: 982,
      alt: "Premium Care",
    },
  },
  master: {
    src: "/assets/brand/master-transparent.png",
    width: 695,
    height: 633,
    alt: "Premium Care",
  },
  og: {
    src: "/assets/brand/og-brand.jpg",
    width: 1200,
    height: 630,
    alt: "Premium Care — Omsorg · Tryghed · Hver dag",
  },
} as const;

/** Institutional seal sizes — generous clear space built into CrestSeal padding */
export const CREST_SIZES = {
  xs: 48,
  sm: 64,
  md: 96,
  lg: 120,
  xl: 160,
} as const;

/** Wordmark display heights in pixels */
export const WORDMARK_HEIGHT = {
  header: 22,
  footer: 16,
} as const;

export type CrestVariant = keyof typeof BRAND.crest;
export type WordmarkVariant = keyof typeof BRAND.wordmark;
