import catalogData from "@/data/dam/assets.json";
import type {
  DamAsset,
  DamCatalog,
  DamDashboardStats,
  DamFilters,
} from "@/lib/dam/types";
import { getCreativeBriefForAsset } from "@/lib/dam/photography-guide";
import { buildImagePrompt } from "@/lib/dam/image-prompt";
import { estimateFileSizeKb } from "@/lib/dam/optimization";
import { isAssetUsed } from "@/lib/dam/usage";

const catalog = catalogData as DamCatalog;

const runtimeOverrides: Record<string, Partial<DamAsset>> = {};

export function getCatalog(): DamCatalog {
  return catalog;
}

export function getAllAssets(): DamAsset[] {
  return catalog.assets.map((asset) => ({
    ...asset,
    ...runtimeOverrides[asset.id],
  }));
}

export function getAssetById(id: string): DamAsset | undefined {
  const base = catalog.assets.find((a) => a.id === id);
  if (!base) return undefined;
  return { ...base, ...runtimeOverrides[id] };
}

export function updateAsset(id: string, patch: Partial<DamAsset>): DamAsset | null {
  const existing = getAssetById(id);
  if (!existing) return null;
  runtimeOverrides[id] = {
    ...runtimeOverrides[id],
    ...patch,
    lastModified: new Date().toISOString(),
  };
  return getAssetById(id) ?? null;
}

export function filterAssets(filters: DamFilters = {}): DamAsset[] {
  let results = getAllAssets();

  if (filters.status && filters.status !== "all") {
    results = results.filter((a) => a.status === filters.status);
  }

  if (filters.page && filters.page !== "all") {
    results = results.filter(
      (a) =>
        a.websitePages.includes(filters.page!) ||
        a.websitePages.includes("all"),
    );
  }

  if (filters.category && filters.category !== "all") {
    results = results.filter((a) => a.category === filters.category);
  }

  if (filters.orientation && filters.orientation !== "all") {
    results = results.filter((a) => a.orientation === filters.orientation);
  }

  if (filters.colour && filters.colour !== "all") {
    results = results.filter(
      (a) =>
        a.dominantColours.includes(filters.colour!) ||
        a.colourPalette.includes(filters.colour!),
    );
  }

  if (filters.photographer && filters.photographer !== "all") {
    results = results.filter((a) => a.photographer === filters.photographer);
  }

  if (filters.priority && filters.priority !== "all") {
    results = results.filter((a) => a.priority === filters.priority);
  }

  if (filters.search?.trim()) {
    const q = filters.search.toLowerCase().trim();
    results = results.filter((a) => {
      const brief = getCreativeBriefForAsset(a);
      return (
        a.title.toLowerCase().includes(q) ||
        a.id.toLowerCase().includes(q) ||
        a.filename.toLowerCase().includes(q) ||
        a.altText.toLowerCase().includes(q) ||
        a.tags.some((t) => t.includes(q)) ||
        a.searchKeywords.some((k) => k.toLowerCase().includes(q)) ||
        (brief?.sceneDescription.toLowerCase().includes(q) ?? false) ||
        (brief?.cameraNotes.toLowerCase().includes(q) ?? false) ||
        (brief?.emotionalObjective.toLowerCase().includes(q) ?? false) ||
        (brief?.composition.toLowerCase().includes(q) ?? false) ||
        (brief?.lighting.toLowerCase().includes(q) ?? false) ||
        (brief?.wardrobe.toLowerCase().includes(q) ?? false) ||
        (brief?.usageNotes.toLowerCase().includes(q) ?? false) ||
        (brief?.imagePrompt?.toLowerCase().includes(q) ?? false) ||
        (buildImagePrompt(a)?.toLowerCase().includes(q) ?? false)
      );
    });
  }

  const sort = filters.sort ?? "scene";
  const dir = filters.sortDir === "desc" ? -1 : 1;

  results.sort((a, b) => {
    switch (sort) {
      case "title":
        return a.title.localeCompare(b.title) * dir;
      case "date":
        return (
          ((a.uploadDate ?? "").localeCompare(b.uploadDate ?? "")) * dir
        );
      case "status":
        return a.status.localeCompare(b.status) * dir;
      case "priority": {
        const order = { critical: 0, high: 1, medium: 2, low: 3 };
        return (order[a.priority] - order[b.priority]) * dir;
      }
      case "scene":
      default:
        return (
          (a.sceneNumber - b.sceneNumber || a.imageNumber - b.imageNumber) * dir
        );
    }
  });

  return results;
}

export function getDashboardStats(): DamDashboardStats {
  const assets = getAllAssets().filter((a) => a.mediaType === "photography");
  const uploaded = assets.filter((a) => a.src).length;
  const published = assets.filter((a) => a.status === "published").length;
  const awaitingShoot = assets.filter(
    (a) => a.status === "planned" || a.status === "scheduled",
  ).length;
  const inEditing = assets.filter((a) =>
    ["shot", "selected", "editing", "colour-grading", "approved"].includes(
      a.status,
    ),
  ).length;
  const unused = assets.filter(
    (a) => a.status === "published" && !isAssetUsed(a),
  ).length;
  const recentlyAdded = assets.filter((a) => {
    if (!a.uploadDate) return false;
    const uploadedAt = new Date(a.uploadDate).getTime();
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return uploadedAt >= weekAgo;
  }).length;
  const storageUsedMb =
    Math.round(
      assets
        .filter((a) => a.src)
        .reduce((sum, a) => sum + estimateFileSizeKb(a), 0) / 1024,
    ) * 10;

  return {
    totalImages: assets.length,
    uploaded,
    missing: assets.length - uploaded,
    awaitingShoot,
    inEditing,
    published,
    unused,
    recentlyAdded,
    storageUsedMb: storageUsedMb / 10,
  };
}

export function getCategories(): string[] {
  return [...new Set(getAllAssets().map((a) => a.category))].sort();
}

export function getPhotographers(): string[] {
  return [...new Set(getAllAssets().map((a) => a.photographer))].sort();
}

export function getWebsitePages(): string[] {
  const pages = new Set<string>();
  for (const asset of getAllAssets()) {
    for (const page of asset.websitePages) pages.add(page);
  }
  return [...pages].sort();
}

export function getDominantColours(): string[] {
  const colours = new Set<string>();
  for (const asset of getAllAssets()) {
    for (const c of asset.dominantColours) colours.add(c);
  }
  return [...colours];
}
