import { ASSET_IDS } from "@/lib/dam/asset-ids";
import type { SiteUsageLocation } from "@/lib/dam/types";

/** Canonical map of where each wired asset appears on the public site */
export const SITE_USAGE_LOCATIONS: Record<string, SiteUsageLocation[]> = {
  [ASSET_IDS.homepageHero]: [
    { route: "/", pageLabel: "Homepage", section: "Hero rotation", component: "RotatingHero" },
    { route: "/", pageLabel: "Homepage", section: "JSON-LD", component: "LocalBusiness schema" },
  ],
  [ASSET_IDS.homepageCompass]: [
    { route: "/", pageLabel: "Homepage", section: "Compass band", component: "DamImage" },
  ],
  [ASSET_IDS.aboutClosing]: [
    { route: "/om-os", pageLabel: "About", section: "Closing editorial image", component: "DamImage" },
  ],
  [ASSET_IDS.servicesPersonalCare]: [
    { route: "/services", pageLabel: "Services", section: "Praktisk hjælp", component: "DamImage" },
  ],
  [ASSET_IDS.servicesCompanionship]: [
    { route: "/services", pageLabel: "Services", section: "Personlig pleje", component: "DamImage" },
  ],
  [ASSET_IDS.servicesPalliative]: [
    { route: "/services", pageLabel: "Services", section: "Sygeplejeydelser", component: "DamImage" },
  ],
  [ASSET_IDS.servicesPhysiotherapy]: [
    { route: "/services", pageLabel: "Services", section: "Fysioterapi", component: "DamImage" },
  ],
  [ASSET_IDS.servicesOccupational]: [
    { route: "/services", pageLabel: "Services", section: "Ergoterapi", component: "DamImage" },
  ],
  [ASSET_IDS.servicesAddon]: [
    { route: "/services", pageLabel: "Services", section: "Tilkøbsydelser", component: "DamImage" },
  ],
  [ASSET_IDS.municipalHero]: [
    { route: "/kommuner", pageLabel: "Municipality", section: "Page hero", component: "DamImage" },
  ],
  [ASSET_IDS.careersHero]: [
    { route: "/karriere", pageLabel: "Careers", section: "Editorial band", component: "DamImage" },
  ],
  [ASSET_IDS.leadershipSection]: [
    { route: "/ledelse-og-ansvar", pageLabel: "Leadership", section: "Editorial image", component: "DamImage" },
  ],
  [ASSET_IDS.founderStory]: [
    { route: "/min-historie", pageLabel: "Founder Story", section: "Founder portrait", component: "DamImage" },
    { route: "/min-historie", pageLabel: "Founder Story", section: "Open Graph", component: "Metadata" },
  ],
  [ASSET_IDS.contactEditorial]: [
    { route: "/kontakt", pageLabel: "Contact", section: "Editorial banner", component: "EditorialBanner" },
  ],
  [ASSET_IDS.trustEditorial]: [
    { route: "/tillid", pageLabel: "Trust", section: "Editorial banner", component: "EditorialBanner" },
  ],
  [ASSET_IDS.documentationEditorial]: [
    { route: "/dokumentation", pageLabel: "Documentation", section: "Editorial banner", component: "EditorialBanner" },
  ],
  [ASSET_IDS.leadershipFormal]: [
    { route: "/om-os", pageLabel: "About", section: "CEO portrait", component: "DamImage" },
  ],
  [ASSET_IDS.leadershipSmiling]: [
    { route: "/ledelse-og-ansvar", pageLabel: "Leadership", section: "CEO portrait", component: "DamImage" },
  ],
  [ASSET_IDS.leadershipPress]: [
    { route: "/ledelse-og-ansvar", pageLabel: "Leadership", section: "Open Graph", component: "Metadata" },
    { route: "/ledelse-og-ansvar", pageLabel: "Leadership", section: "JSON-LD", component: "Person schema" },
  ],
  [ASSET_IDS.brandWordmarkNavy]: [
    { route: "/404", pageLabel: "Not found", section: "Brand mark", component: "BrandWordmark" },
  ],
  [ASSET_IDS.brandWordmarkWhite]: [
    { route: "/media", pageLabel: "DAM", section: "Brand catalogue", component: "BrandWordmark" },
  ],
  [ASSET_IDS.brandWordmarkGold]: [
    { route: "/media", pageLabel: "DAM", section: "Brand catalogue", component: "BrandWordmark" },
  ],
  [ASSET_IDS.brandCrest]: [
    { route: "/om-os", pageLabel: "About", section: "Section seal", component: "CrestSeal" },
  ],
  [ASSET_IDS.brandCrestNavy]: [
    { route: "/*", pageLabel: "All pages", section: "Header (light backgrounds)", component: "Wordmark" },
  ],
  [ASSET_IDS.brandCrestWhite]: [
    { route: "/*", pageLabel: "All pages", section: "Header (dark hero)", component: "Wordmark" },
    { route: "/*", pageLabel: "All pages", section: "Footer", component: "CrestSeal" },
    { route: "/om-os", pageLabel: "About", section: "Section seal", component: "CrestSeal" },
    { route: "/tillid", pageLabel: "Trust", section: "Section seal", component: "CrestSeal" },
    { route: "/min-historie", pageLabel: "Founder Story", section: "Section seal", component: "CrestSeal" },
    { route: "/ledelse-og-ansvar", pageLabel: "Leadership", section: "Section seal", component: "CrestSeal" },
    { route: "/karriere", pageLabel: "Careers", section: "Section seal", component: "CrestSeal" },
    { route: "/vores-loefte", pageLabel: "Our Promise", section: "Section seal", component: "CrestSeal" },
  ],
  [ASSET_IDS.brandOpenGraph]: [
    { route: "/*", pageLabel: "All pages", section: "Open Graph default", component: "Root layout metadata" },
    { route: "/*", pageLabel: "All pages", section: "Twitter card", component: "Root layout metadata" },
  ],
  [ASSET_IDS.brandHorizontalNavy]: [
    { route: "/*", pageLabel: "All pages", section: "JSON-LD logo", component: "Organization schema" },
  ],
  [ASSET_IDS.brandMaster]: [
    { route: "/*", pageLabel: "All pages", section: "JSON-LD image", component: "Organization schema" },
  ],
  [ASSET_IDS.brandFavicon16]: [
    { route: "/*", pageLabel: "All pages", section: "Favicon 16px", component: "Root layout icons" },
  ],
  [ASSET_IDS.brandFavicon32]: [
    { route: "/*", pageLabel: "All pages", section: "Favicon 32px", component: "Root layout icons" },
  ],
  [ASSET_IDS.brandAppIcon180]: [
    { route: "/*", pageLabel: "All pages", section: "Apple touch icon", component: "Root layout icons" },
  ],
  [ASSET_IDS.brandAppIcon192]: [
    { route: "/*", pageLabel: "All pages", section: "PWA icon 192", component: "Web manifest" },
  ],
  [ASSET_IDS.brandAppIcon512]: [
    { route: "/*", pageLabel: "All pages", section: "PWA icon 512", component: "Web manifest" },
  ],
  "PC-01-003": [
    { route: "/", pageLabel: "Homepage", section: "Hero rotation", component: "RotatingHero" },
  ],
  "PC-01-005": [
    { route: "/", pageLabel: "Homepage", section: "Hero rotation", component: "RotatingHero" },
  ],
  "PC-04-025": [
    { route: "/", pageLabel: "Homepage", section: "Hero rotation", component: "RotatingHero" },
  ],
  "PC-08-043": [
    { route: "/", pageLabel: "Homepage", section: "Hero rotation", component: "RotatingHero" },
  ],
  "PC-08-044": [
    { route: "/", pageLabel: "Homepage", section: "Hero rotation", component: "RotatingHero" },
  ],
  "PC-08-048": [
    { route: "/", pageLabel: "Homepage", section: "Hero rotation", component: "RotatingHero" },
  ],
};

const PAGE_ROUTE_MAP: Record<string, string> = {
  homepage: "/",
  about: "/om-os",
  services: "/services",
  tillid: "/tillid",
  dokumentation: "/dokumentation",
  karriere: "/karriere",
  kommuner: "/kommuner",
  "min-historie": "/min-historie",
  ledelse: "/ledelse-og-ansvar",
  kontakt: "/kontakt",
  priser: "/priser",
};

export function getAssetUsageLocations(assetId: string, websitePages: string[]): SiteUsageLocation[] {
  if (SITE_USAGE_LOCATIONS[assetId]) {
    return SITE_USAGE_LOCATIONS[assetId];
  }

  return websitePages.map((page) => ({
    route: PAGE_ROUTE_MAP[page] ?? `/${page}`,
    pageLabel: page.charAt(0).toUpperCase() + page.slice(1).replace(/-/g, " "),
    section: "Catalogue placement",
    component: "Catalog",
  }));
}

export function countUniquePages(locations: SiteUsageLocation[]): number {
  const routes = new Set(locations.map((l) => l.route));
  return routes.size;
}
