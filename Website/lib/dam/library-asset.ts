import type { DamAsset } from "@/lib/dam/types";
import { getDistributionChannels } from "@/lib/dam/distribution-channels";
import { getCreativeBriefForAsset } from "@/lib/dam/photography-guide";

/** Lightweight asset record for DAM library/table client views */
export type DamLibraryAsset = {
  id: string;
  sceneNumber: number;
  imageNumber: number;
  title: string;
  filename: string;
  category: string;
  websitePages: string[];
  photographer: string;
  status: DamAsset["status"];
  priority: DamAsset["priority"];
  orientation: DamAsset["orientation"];
  dominantColours: string[];
  colourPalette: string[];
  src: string;
  lastModified: string;
  uploadDate: string | null;
  altText: string;
  searchHaystack: string;
};

export function buildSearchHaystack(asset: DamAsset): string {
  const brief = getCreativeBriefForAsset(asset);

  return [
    asset.id,
    asset.title,
    asset.filename,
    asset.description,
    asset.sceneName,
    ...asset.tags,
    ...asset.searchKeywords,
    brief?.sceneDescription,
    brief?.cameraNotes,
    brief?.emotionalObjective,
    brief?.composition,
    brief?.lighting,
    brief?.wardrobe,
    brief?.usageNotes,
    brief?.environment,
    brief?.emotion,
    brief?.purpose,
    brief?.imagePrompt,
    ...getDistributionChannels(asset.id)
      .filter((channel) => channel.used)
      .flatMap((channel) => [channel.label, channel.usageLabel ?? ""]),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function toLibraryAsset(asset: DamAsset): DamLibraryAsset {
  return {
    id: asset.id,
    sceneNumber: asset.sceneNumber,
    imageNumber: asset.imageNumber,
    title: asset.title,
    filename: asset.filename,
    category: asset.category,
    websitePages: asset.websitePages,
    photographer: asset.photographer,
    status: asset.status,
    priority: asset.priority,
    orientation: asset.orientation,
    dominantColours: asset.dominantColours,
    colourPalette: asset.colourPalette,
    src: asset.src,
    lastModified: asset.lastModified,
    uploadDate: asset.uploadDate,
    altText: asset.altText,
    searchHaystack: buildSearchHaystack(asset),
  };
}

export function assetMatchesSearch(asset: DamLibraryAsset, query: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;
  return asset.searchHaystack.includes(q);
}
