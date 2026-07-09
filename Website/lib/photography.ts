/**
 * Premium Care editorial photography registry.
 * All images resolve through the DAM — no hardcoded paths.
 */

import { ASSET_IDS } from "@/lib/dam/asset-ids";
import type { PublicImageCategory } from "@/lib/dam/public-image";
import { resolveAsEditorialPhoto } from "@/lib/dam/resolve";
import type { EditorialPhoto } from "@/lib/dam/types";

export type { EditorialPhoto };

function photo(assetId: string, category?: PublicImageCategory): EditorialPhoto {
  return resolveAsEditorialPhoto(assetId, category);
}

export const PHOTOGRAPHY = {
  hero: photo(ASSET_IDS.homepageHero, "hero"),
  about: photo(ASSET_IDS.aboutHero, "about"),
  personalCare: photo(ASSET_IDS.servicesPersonalCare, "services"),
  companionship: photo(ASSET_IDS.servicesCompanionship, "services"),
  palliative: photo(ASSET_IDS.servicesPalliative, "services"),
  physiotherapy: photo("PC-06-030", "services"),
  occupational: photo("PC-08-047", "details"),
  addonServices: photo(ASSET_IDS.servicesCompanionship, "services"),
  municipal: photo(ASSET_IDS.municipalHero, "municipality"),
  calmInterior: photo(ASSET_IDS.homepageHeroRotation[4], "details"),
  professionalTraining: photo(ASSET_IDS.homepageHeroRotation[5], "careers"),
  ledelse: photo(ASSET_IDS.leadershipSection, "trust"),
  founder: photo(ASSET_IDS.founderStory, "founder"),
  contact: photo(ASSET_IDS.servicesCompanionship, "contact"),
  trust: photo(ASSET_IDS.servicesPalliative, "trust"),
  documentation: photo(ASSET_IDS.servicesPersonalCare, "trust"),
} as const;

/** Responsive sizes hints for common layouts */
export const PHOTO_SIZES = {
  hero: "100vw",
  section: "(max-width: 768px) 100vw, 680px",
  service: "(max-width: 768px) 100vw, 960px",
  portrait: "(max-width: 768px) 60vw, 200px",
} as const;
