/**
 * PremiumCare editorial photography registry.
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
  about: photo(ASSET_IDS.aboutClosing, "details"),
  personalCare: photo(ASSET_IDS.servicesPersonalCare, "services"),
  companionship: photo(ASSET_IDS.servicesCompanionship, "services"),
  palliative: photo(ASSET_IDS.servicesPalliative, "services"),
  physiotherapy: photo(ASSET_IDS.servicesPhysiotherapy, "services"),
  occupational: photo(ASSET_IDS.servicesOccupational, "services"),
  addonServices: photo(ASSET_IDS.servicesAddon, "services"),
  municipal: photo(ASSET_IDS.municipalHero, "municipality"),
  calmInterior: photo(ASSET_IDS.aboutHero, "details"),
  professionalTraining: photo(ASSET_IDS.careersTraining, "careers"),
  careers: photo(ASSET_IDS.careersHero, "careers"),
  ledelse: photo(ASSET_IDS.leadershipSection, "about"),
  founderGrandmother: photo(ASSET_IDS.founderGrandmother, "founder"),
  founder: photo(ASSET_IDS.founderStory, "founder"),
  founderReflection: photo(ASSET_IDS.founderReflection, "founder"),
  founderGratitude: photo(ASSET_IDS.founderGratitude, "founder"),
  founderLegacy: photo(ASSET_IDS.founderLegacy, "founder"),
  compass: photo(ASSET_IDS.homepageCompass, "founder"),
  contact: photo(ASSET_IDS.contactEditorial, "contact"),
  priserHero: photo(ASSET_IDS.priserHero, "hero"),
  priserSplit: photo(ASSET_IDS.priserSplit, "details"),
  aboutPageHero: photo(ASSET_IDS.aboutPageHero, "hero"),
  founderPageHero: photo(ASSET_IDS.founderPageHero, "founder"),
  trust: photo(ASSET_IDS.trustEditorial, "trust"),
  documentation: photo(ASSET_IDS.documentationEditorial, "trust"),
} as const;

/** Responsive sizes hints for common layouts */
export const PHOTO_SIZES = {
  hero: "100vw",
  section: "(max-width: 768px) 100vw, 680px",
  service: "(max-width: 768px) 100vw, 960px",
  portrait: "(max-width: 768px) 60vw, 200px",
} as const;
