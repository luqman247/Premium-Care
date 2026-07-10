import { ASSET_IDS } from "@/lib/dam/asset-ids";

/** Curated hero rotation asset IDs — resolved at render time via DamImage */
export const HERO_ROTATION_ASSET_IDS = [...ASSET_IDS.homepageHeroRotation];

export const HERO_ROTATION_INTERVAL_MS = 18_000;
export const HERO_ROTATION_FADE_MS = 3_600;
export const HERO_ROTATION_INITIAL_DELAY_MS = 7_000;
