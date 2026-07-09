import { ASSET_IDS } from "@/lib/dam/asset-ids";
import type { SiteUsageLocation } from "@/lib/dam/types";

/** Canonical map of where each wired asset appears on the public site */
export const SITE_USAGE_LOCATIONS: Record<string, SiteUsageLocation[]> = {
  [ASSET_IDS.homepageHero]: [
    { route: "/", pageLabel: "Homepage", section: "Hero rotation", component: "RotatingHero" },
    { route: "/om-os", pageLabel: "About", section: "Closing editorial image", component: "DamImage" },
    { route: "/", pageLabel: "Homepage", section: "JSON-LD", component: "LocalBusiness schema" },
  ],
  [ASSET_IDS.servicesPersonalCare]: [
    { route: "/", pageLabel: "Homepage", section: "Hero rotation", component: "RotatingHero" },
    { route: "/services", pageLabel: "Services", section: "Praktisk hjælp", component: "DamImage" },
  ],
  [ASSET_IDS.servicesCompanionship]: [
    { route: "/", pageLabel: "Homepage", section: "Hero rotation", component: "RotatingHero" },
    { route: "/services", pageLabel: "Services", section: "Personlig pleje", component: "DamImage" },
  ],
  [ASSET_IDS.servicesPalliative]: [
    { route: "/", pageLabel: "Homepage", section: "Hero rotation", component: "RotatingHero" },
    { route: "/services", pageLabel: "Services", section: "Sygeplejeydelser", component: "DamImage" },
    { route: "/ledelse-og-governance", pageLabel: "Leadership", section: "Editorial image", component: "DamImage" },
  ],
  [ASSET_IDS.municipalHero]: [
    { route: "/kommuner", pageLabel: "Municipality", section: "Page hero", component: "DamImage" },
  ],
  [ASSET_IDS.careersHero]: [
    { route: "/karriere", pageLabel: "Careers", section: "Page hero", component: "DamImage" },
    { route: "/karriere", pageLabel: "Careers", section: "Training image", component: "DamImage" },
    { route: "/", pageLabel: "Homepage", section: "Recruitment CTA", component: "RecruitmentSection" },
  ],
  [ASSET_IDS.founderStory]: [
    { route: "/min-historie", pageLabel: "Founder Story", section: "Founder portrait", component: "DamImage" },
    { route: "/min-historie", pageLabel: "Founder Story", section: "Open Graph", component: "Metadata" },
  ],
  [ASSET_IDS.leadershipFormal]: [
    { route: "/om-os", pageLabel: "About", section: "CEO portrait", component: "DamImage" },
  ],
  [ASSET_IDS.leadershipSmiling]: [
    { route: "/ledelse-og-governance", pageLabel: "Leadership", section: "CEO portrait", component: "DamImage" },
  ],
  [ASSET_IDS.leadershipPress]: [
    { route: "/ledelse-og-governance", pageLabel: "Leadership", section: "Open Graph", component: "Metadata" },
    { route: "/ledelse-og-governance", pageLabel: "Leadership", section: "JSON-LD", component: "Person schema" },
  ],
  [ASSET_IDS.brandWordmarkNavy]: [
    { route: "/*", pageLabel: "All pages", section: "Header (light backgrounds)", component: "BrandWordmark" },
  ],
  [ASSET_IDS.brandWordmarkWhite]: [
    { route: "/*", pageLabel: "All pages", section: "Header (dark hero)", component: "BrandWordmark" },
  ],
  [ASSET_IDS.brandWordmarkGold]: [
    { route: "/*", pageLabel: "All pages", section: "Header (scrolled)", component: "BrandWordmark" },
  ],
  [ASSET_IDS.brandCrest]: [
    { route: "/", pageLabel: "Homepage", section: "Hero trust anchor", component: "CrestSeal" },
  ],
  [ASSET_IDS.brandCrestWhite]: [
    { route: "/*", pageLabel: "All pages", section: "Footer", component: "CrestSeal" },
    { route: "/om-os", pageLabel: "About", section: "Section seal", component: "CrestSeal" },
    { route: "/tillid", pageLabel: "Trust", section: "Section seal", component: "CrestSeal" },
    { route: "/min-historie", pageLabel: "Founder Story", section: "Section seal", component: "CrestSeal" },
    { route: "/ledelse-og-governance", pageLabel: "Leadership", section: "Section seal", component: "CrestSeal" },
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
  "PC-08-047": [
    { route: "/", pageLabel: "Homepage", section: "Hero rotation", component: "RotatingHero" },
  ],
  "PC-06-030": [
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
  ledelse: "/ledelse-og-governance",
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
    section: "Planned placement",
    component: "Catalog",
  }));
}

export function countUniquePages(locations: SiteUsageLocation[]): number {
  const routes = new Set(locations.map((l) => l.route));
  return routes.size;
}
