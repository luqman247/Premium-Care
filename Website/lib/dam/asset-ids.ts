/**
 * Canonical asset IDs for website integration.
 * Every image on the public site resolves through these IDs.
 */
export const ASSET_IDS = {
  homepageHero: "PC-01-001",
  homepageHeroRotation: [
    "PC-01-001",
    "PC-01-002",
    "PC-02-006",
    "PC-02-013",
    "PC-01-004",
    "PC-08-047",
    "PC-06-030",
  ],
  aboutHero: "PC-01-001",
  servicesPersonalCare: "PC-02-006",
  servicesCompanionship: "PC-02-013",
  servicesPalliative: "PC-01-004",
  municipalHero: "PC-05-026",
  careersHero: "PC-BR-006",
  careersTraining: "PC-BR-006",
  founderStory: "PC-07-036",
  leadershipFormal: "PC-03-016",
  leadershipSmiling: "PC-03-017",
  leadershipPress: "PC-BR-007",
  leadershipSection: "PC-01-004",
  brandWordmarkNavy: "PC-BR-001",
  brandWordmarkWhite: "PC-BR-002",
  brandWordmarkGold: "PC-BR-003",
  brandCrest: "PC-BR-004",
  brandOpenGraph: "PC-BR-005",
  brandCrestGold: "PC-BR-008",
  brandCrestNavy: "PC-BR-009",
  brandCrestWhite: "PC-BR-010",
  brandHorizontalNavy: "PC-BR-011",
  brandHorizontalWhite: "PC-BR-012",
  brandMaster: "PC-BR-013",
  brandFavicon16: "PC-BR-014",
  brandFavicon32: "PC-BR-015",
  brandAppIcon180: "PC-BR-016",
  brandAppIcon192: "PC-BR-017",
  brandAppIcon512: "PC-BR-018",
} as const;

export type AssetId =
  | (typeof ASSET_IDS)[Exclude<keyof typeof ASSET_IDS, "homepageHeroRotation">]
  | (typeof ASSET_IDS.homepageHeroRotation)[number];
