/**
 * PremiumCare brand asset registry — resolved from DAM.
 */
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { getAssetById } from "@/lib/dam/registry";
import { damImageApiPath } from "@/lib/dam/api-path";

type BrandAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  damId: string;
};

function fromDam(damId: string): BrandAsset {
  const asset = getAssetById(damId);
  if (!asset) {
    throw new Error(`Brand DAM asset missing: ${damId}`);
  }
  return {
    src: damImageApiPath(damId),
    width: asset.width,
    height: asset.height,
    alt: asset.altText,
    damId,
  };
}

export const BRAND_ASSET_IDS = {
  wordmark: {
    navy: ASSET_IDS.brandWordmarkNavy,
    white: ASSET_IDS.brandWordmarkWhite,
    gold: ASSET_IDS.brandWordmarkGold,
  },
  crest: {
    fullcolour: ASSET_IDS.brandCrest,
    gold: ASSET_IDS.brandCrestGold,
    navy: ASSET_IDS.brandCrestNavy,
    white: ASSET_IDS.brandCrestWhite,
  },
  horizontal: {
    navy: ASSET_IDS.brandHorizontalNavy,
    white: ASSET_IDS.brandHorizontalWhite,
  },
  master: ASSET_IDS.brandMaster,
  og: ASSET_IDS.brandOpenGraph,
  favicon: {
    size16: ASSET_IDS.brandFavicon16,
    size32: ASSET_IDS.brandFavicon32,
    apple180: ASSET_IDS.brandAppIcon180,
    pwa192: ASSET_IDS.brandAppIcon192,
    pwa512: ASSET_IDS.brandAppIcon512,
  },
} as const;

export const BRAND = {
  wordmark: {
    navy: fromDam(BRAND_ASSET_IDS.wordmark.navy),
    white: fromDam(BRAND_ASSET_IDS.wordmark.white),
    gold: fromDam(BRAND_ASSET_IDS.wordmark.gold),
  },
  crest: {
    fullcolour: fromDam(BRAND_ASSET_IDS.crest.fullcolour),
    gold: fromDam(BRAND_ASSET_IDS.crest.gold),
    navy: fromDam(BRAND_ASSET_IDS.crest.navy),
    white: fromDam(BRAND_ASSET_IDS.crest.white),
  },
  horizontal: {
    navy: fromDam(BRAND_ASSET_IDS.horizontal.navy),
    white: fromDam(BRAND_ASSET_IDS.horizontal.white),
  },
  master: fromDam(BRAND_ASSET_IDS.master),
  og: fromDam(BRAND_ASSET_IDS.og),
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
  header: 32,
  footer: 16,
} as const;

export type CrestVariant = keyof typeof BRAND.crest;
export type WordmarkVariant = keyof typeof BRAND.wordmark;
