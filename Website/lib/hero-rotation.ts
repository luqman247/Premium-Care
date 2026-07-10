import { ASSET_IDS } from "@/lib/dam/asset-ids";

/** Curated hero rotation asset IDs — resolved at render time via DamImage */
export const HERO_ROTATION_ASSET_IDS = [...ASSET_IDS.homepageHeroRotation];

/** Focal points tuned for cinematic cover crop (desktop + mobile) */
export const HERO_FOCAL_POINTS: Record<string, string> = {
  "PC-01-001": "center 35%",
  "PC-01-003": "center 42%",
  "PC-01-005": "center 28%",
  "PC-04-025": "center 38%",
  "PC-08-043": "center 45%",
  "PC-08-044": "center 32%",
  "PC-08-048": "center 40%",
};

/** Slow, cinematic pacing — never rushed */
export const HERO_ROTATION_INTERVAL_MS = 20_000;
export const HERO_ROTATION_FADE_MS = 4_200;
export const HERO_ROTATION_INITIAL_DELAY_MS = 8_000;
