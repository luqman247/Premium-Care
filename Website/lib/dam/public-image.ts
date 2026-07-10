import { getAssetById } from "@/lib/dam/registry";
import { damImageApiPath } from "@/lib/dam/api-path";
import { getVariantSrc } from "@/lib/dam/optimization";
import type { ImageVariant, ResolvedAsset } from "@/lib/dam/types";

export type PublicImageCategory =
  | "hero"
  | "services"
  | "about"
  | "founder"
  | "trust"
  | "careers"
  | "municipality"
  | "contact"
  | "details"
  | "brand";

export const GLOBAL_PUBLIC_FALLBACK = "PC-01-001";

/** Published assets with files, in priority order per category */
export const CATEGORY_FALLBACKS: Record<PublicImageCategory, string[]> = {
  hero: [
    "PC-01-001",
    "PC-01-003",
    "PC-01-005",
    "PC-04-025",
    "PC-08-043",
    "PC-08-044",
    "PC-08-048",
  ],
  services: [
    "PC-02-007",
    "PC-02-006",
    "PC-02-008",
    "PC-02-009",
    "PC-02-010",
    "PC-02-015",
    "PC-02-013",
  ],
  about: ["PC-03-018", "PC-03-016", "PC-03-017", "PC-01-001", "PC-02-006"],
  founder: ["PC-07-036", "PC-07-037", "PC-01-001", "PC-08-047"],
  trust: ["PC-04-021", "PC-04-025", "PC-01-004", "PC-02-006"],
  careers: ["PC-06-032", "PC-06-030", "PC-BR-006", "PC-03-017"],
  municipality: ["PC-05-026", "PC-05-028", "PC-05-029", "PC-01-001"],
  contact: ["PC-02-006", "PC-08-044", "PC-01-001", "PC-08-047"],
  details: ["PC-08-047", "PC-08-043", "PC-08-048", "PC-01-001"],
  brand: ["PC-BR-004", "PC-BR-002", "PC-BR-005"],
};

const ASSET_CATEGORY_MAP: Record<string, PublicImageCategory> = {
  "PC-01-001": "hero",
  "PC-01-002": "hero",
  "PC-01-004": "services",
  "PC-02-006": "services",
  "PC-02-013": "services",
  "PC-03-016": "about",
  "PC-03-017": "about",
  "PC-05-026": "municipality",
  "PC-06-030": "hero",
  "PC-07-036": "founder",
  "PC-08-047": "details",
  "PC-BR-006": "careers",
};

export function inferPublicImageCategory(assetId: string): PublicImageCategory {
  if (ASSET_CATEGORY_MAP[assetId]) return ASSET_CATEGORY_MAP[assetId];
  if (assetId.startsWith("PC-BR-")) return "brand";

  const asset = getAssetById(assetId);
  if (!asset) return "details";

  if (asset.category.includes("hero")) return "hero";
  if (asset.category.includes("service")) return "services";
  if (asset.category.includes("about") || asset.category.includes("leadership")) return "about";
  if (asset.category.includes("founder")) return "founder";
  if (asset.category.includes("trust")) return "trust";
  if (asset.category.includes("career")) return "careers";
  if (asset.category.includes("municipal")) return "municipality";
  if (asset.websitePages.includes("kontakt")) return "contact";

  return "details";
}

export function isPublishedCatalogAsset(assetId: string): boolean {
  const asset = getAssetById(assetId);
  if (!asset) return false;
  return asset.status === "published" && Boolean(asset.src?.trim());
}

/** Resolve a public-facing asset ID — exact published, category fallback, or global fallback */
export function getPublicImage(
  assetId: string,
  fallbackCategory?: PublicImageCategory,
): string {
  return getPublicImageAssetId(assetId, fallbackCategory);
}

export function getPublicImageAssetId(
  requestedId: string,
  category?: PublicImageCategory,
): string {
  if (isPublishedCatalogAsset(requestedId)) {
    return requestedId;
  }

  const resolvedCategory = category ?? inferPublicImageCategory(requestedId);
  const candidates = [
    requestedId,
    ...CATEGORY_FALLBACKS[resolvedCategory],
    GLOBAL_PUBLIC_FALLBACK,
  ];

  const seen = new Set<string>();
  for (const candidate of candidates) {
    if (seen.has(candidate)) continue;
    seen.add(candidate);
    if (isPublishedCatalogAsset(candidate)) {
      return candidate;
    }
  }

  return GLOBAL_PUBLIC_FALLBACK;
}

export type PublicImageResolution = {
  requestedId: string;
  resolvedId: string;
  category: PublicImageCategory;
  source: "exact" | "category" | "global";
};

export function resolvePublicImage(
  requestedId: string,
  category?: PublicImageCategory,
): PublicImageResolution {
  const resolvedCategory = category ?? inferPublicImageCategory(requestedId);
  const resolvedId = getPublicImageAssetId(requestedId, resolvedCategory);
  const source =
    resolvedId === requestedId
      ? "exact"
      : resolvedId === GLOBAL_PUBLIC_FALLBACK
        ? "global"
        : "category";

  return { requestedId, resolvedId, category: resolvedCategory, source };
}

export function resolvePublicAsset(
  assetId: string,
  category?: PublicImageCategory,
  variant: ImageVariant = "desktop",
): ResolvedAsset & PublicImageResolution {
  const resolution = resolvePublicImage(assetId, category);
  const asset = getAssetById(resolution.resolvedId);

  if (!asset) {
    throw new Error(`Public DAM asset not found: ${resolution.resolvedId}`);
  }

  const apiSrc = damImageApiPath(resolution.requestedId);
  const catalogSrc = asset.src || asset.versions.find((v) => v.src)?.src || null;

  return {
    ...resolution,
    id: resolution.resolvedId,
    src: apiSrc,
    publicSrc: catalogSrc,
    alt: asset.altText,
    width: asset.width,
    height: asset.height,
    objectPosition: asset.objectPosition,
    blurDataURL: asset.blurPlaceholder,
    variants: asset.variants,
    resolvedVariantSrc: catalogSrc
      ? getVariantSrc({ ...asset, src: catalogSrc }, variant)
      : null,
  };
}

export function listPublishedAssetIds(): string[] {
  return CATEGORY_FALLBACKS.hero.filter((id) => isPublishedCatalogAsset(id));
}
