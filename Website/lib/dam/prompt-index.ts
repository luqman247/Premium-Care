import type { DamAsset } from "@/lib/dam/types";

/** Global editorial image number (IMG-001 … IMG-049) across the full photography guide */
export function buildGlobalImageIndex(assets: DamAsset[]): Map<string, number> {
  const indexed = assets
    .filter((asset) => asset.creativeBrief)
    .sort((a, b) => a.sceneNumber - b.sceneNumber || a.imageNumber - b.imageNumber);

  return new Map(indexed.map((asset, index) => [asset.id, index + 1]));
}

export function formatPromptSlug(globalIndex: number): string {
  return `IMG-${String(globalIndex).padStart(3, "0")}`;
}

export function getPromptSlugForAsset(assetId: string, index: Map<string, number>): string | null {
  const globalIndex = index.get(assetId);
  if (!globalIndex) return null;
  return formatPromptSlug(globalIndex);
}
