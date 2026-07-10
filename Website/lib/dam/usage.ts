import { ASSET_IDS } from "@/lib/dam/asset-ids";
import type { DamAsset, UsageChannel } from "@/lib/dam/types";

/** Explicit site usage map — single source for automatic usage tracking */
export const SITE_USAGE_MAP: Record<string, UsageChannel[]> = {
  [ASSET_IDS.homepageHero]: [
    { key: "homepage", label: "Homepage", used: true },
    { key: "seo", label: "SEO Pages", used: true },
    { key: "social", label: "Social Cards", used: false },
  ],
  [ASSET_IDS.homepageCompass]: [
    { key: "homepage", label: "Homepage", used: true },
  ],
  [ASSET_IDS.aboutClosing]: [
    { key: "about", label: "About", used: true },
  ],
  [ASSET_IDS.servicesPersonalCare]: [
    { key: "services", label: "Services", used: true },
  ],
  [ASSET_IDS.servicesCompanionship]: [
    { key: "services", label: "Services", used: true },
  ],
  [ASSET_IDS.servicesPalliative]: [
    { key: "services", label: "Services", used: true },
  ],
  [ASSET_IDS.servicesPhysiotherapy]: [
    { key: "services", label: "Services", used: true },
  ],
  [ASSET_IDS.servicesOccupational]: [
    { key: "services", label: "Services", used: true },
  ],
  [ASSET_IDS.servicesAddon]: [
    { key: "services", label: "Services", used: true },
  ],
  [ASSET_IDS.municipalHero]: [
    { key: "kommuner", label: "Municipality", used: true },
  ],
  [ASSET_IDS.careersHero]: [
    { key: "karriere", label: "Careers", used: true },
  ],
  [ASSET_IDS.contactEditorial]: [
    { key: "kontakt", label: "Contact", used: true },
  ],
  [ASSET_IDS.trustEditorial]: [
    { key: "tillid", label: "Trust", used: true },
  ],
  [ASSET_IDS.documentationEditorial]: [
    { key: "dokumentation", label: "Documentation", used: true },
  ],
  [ASSET_IDS.leadershipSection]: [
    { key: "ledelse", label: "Ledelse", used: true },
  ],
  [ASSET_IDS.founderStory]: [
    { key: "min-historie", label: "Founder Story", used: true },
    { key: "seo", label: "SEO Pages", used: true },
  ],
  [ASSET_IDS.leadershipFormal]: [
    { key: "about", label: "About", used: true },
  ],
  [ASSET_IDS.leadershipSmiling]: [
    { key: "ledelse", label: "Ledelse", used: true },
  ],
  [ASSET_IDS.leadershipPress]: [
    { key: "ledelse", label: "Ledelse", used: true },
    { key: "seo", label: "SEO Pages", used: true },
    { key: "social", label: "Social Cards", used: true },
  ],
  [ASSET_IDS.brandWordmarkNavy]: [
    { key: "all", label: "Not Found", used: true },
  ],
  [ASSET_IDS.brandWordmarkWhite]: [
    { key: "dam", label: "DAM Catalogue", used: true },
  ],
  [ASSET_IDS.brandWordmarkGold]: [
    { key: "dam", label: "DAM Catalogue", used: true },
  ],
  [ASSET_IDS.brandCrest]: [
    { key: "all", label: "All Pages", used: true },
  ],
  [ASSET_IDS.brandOpenGraph]: [
    { key: "seo", label: "SEO Pages", used: true },
    { key: "social", label: "Social Cards", used: true },
  ],
  [ASSET_IDS.brandCrestGold]: [
    { key: "all", label: "All Pages", used: false },
  ],
  [ASSET_IDS.brandCrestNavy]: [
    { key: "all", label: "All Pages", used: true },
  ],
  [ASSET_IDS.brandCrestWhite]: [
    { key: "all", label: "All Pages", used: true },
  ],
  [ASSET_IDS.brandHorizontalNavy]: [
    { key: "seo", label: "SEO Pages", used: true },
  ],
  [ASSET_IDS.brandHorizontalWhite]: [
    { key: "all", label: "All Pages", used: false },
  ],
  [ASSET_IDS.brandMaster]: [
    { key: "seo", label: "SEO Pages", used: true },
  ],
  [ASSET_IDS.brandFavicon16]: [
    { key: "all", label: "All Pages", used: true },
  ],
  [ASSET_IDS.brandFavicon32]: [
    { key: "all", label: "All Pages", used: true },
  ],
  [ASSET_IDS.brandAppIcon180]: [
    { key: "all", label: "All Pages", used: true },
  ],
  [ASSET_IDS.brandAppIcon192]: [
    { key: "all", label: "All Pages", used: true },
  ],
  [ASSET_IDS.brandAppIcon512]: [
    { key: "all", label: "All Pages", used: true },
  ],
};

export function getAssetUsage(assetId: string): UsageChannel[] {
  if (SITE_USAGE_MAP[assetId]) {
    return SITE_USAGE_MAP[assetId];
  }

  return [
    { key: "homepage", label: "Homepage", used: false },
    { key: "about", label: "About", used: false },
    { key: "services", label: "Services", used: false },
    { key: "karriere", label: "Careers", used: false },
    { key: "kommuner", label: "Municipality", used: false },
    { key: "blog", label: "Blog", used: false },
    { key: "seo", label: "SEO Pages", used: false },
    { key: "emails", label: "Emails", used: false },
    { key: "social", label: "Social Cards", used: false },
    { key: "pdfs", label: "PDFs", used: false },
  ];
}

export function isAssetUsed(asset: DamAsset): boolean {
  const usage = getAssetUsage(asset.id);
  if (usage.some((channel) => channel.used)) return true;
  return asset.websitePages.length > 0 && asset.status === "published";
}

export function getPagesUsedLabel(asset: DamAsset): string {
  const usage = getAssetUsage(asset.id).filter((c) => c.used);
  if (usage.length > 0) {
    return usage.map((c) => c.label).join(", ");
  }
  if (asset.websitePages.length === 0) return "—";
  return asset.websitePages.join(", ");
}
