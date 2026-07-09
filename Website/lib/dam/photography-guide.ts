import guideData from "@/data/dam/photography-guide.json";
import { distributionMatchesSearch, getDistributionChannels } from "@/lib/dam/distribution-channels";
import type { CreativeBrief } from "@/lib/dam/types";

export type GuideBriefEntry = CreativeBrief & {
  assetId: string;
  imageNumber: number;
  sceneNumber: number;
  sceneName: string;
  title: string;
  purpose: string;
};

export type PhotographyGuide = {
  title: string;
  version: number;
  sourceFile: string;
  generatedAt: string;
  sectionCount: number;
  imageCount: number;
  sections: { number: number; name: string }[];
  briefs: Record<string, GuideBriefEntry>;
};

const guide = guideData as PhotographyGuide;

export function getPhotographyGuide(): PhotographyGuide {
  return guide;
}

export function getCreativeBrief(assetId: string): CreativeBrief | null {
  const entry = guide.briefs[assetId];
  if (!entry) return null;
  return {
    sceneDescription: entry.sceneDescription,
    cameraNotes: entry.cameraNotes,
    emotionalObjective: entry.emotionalObjective,
    composition: entry.composition,
    lighting: entry.lighting,
    wardrobe: entry.wardrobe,
    usageNotes: entry.usageNotes,
    environment: entry.environment,
    emotion: entry.emotion,
    purpose: entry.purpose,
  };
}

export function getCreativeBriefForAsset(asset: { id: string; creativeBrief?: CreativeBrief }): CreativeBrief | null {
  if (asset.creativeBrief) return asset.creativeBrief;
  return getCreativeBrief(asset.id);
}

/** Search the photography guide across all brief fields */
export function searchPhotographyGuide(query: string): string[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const matches: string[] = [];
  for (const [assetId, brief] of Object.entries(guide.briefs)) {
    const haystack = [
      assetId,
      brief.title,
      brief.sceneName,
      brief.sceneDescription,
      brief.cameraNotes,
      brief.emotionalObjective,
      brief.composition,
      brief.lighting,
      brief.wardrobe,
      brief.usageNotes,
      brief.environment,
      brief.emotion,
      brief.purpose,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    if (haystack.includes(q)) {
      matches.push(assetId);
    }
  }

  return matches;
}

export function assetMatchesGuideSearch(
  asset: {
    id: string;
    title: string;
    filename: string;
    tags: string[];
    searchKeywords: string[];
    creativeBrief?: CreativeBrief;
  },
  query: string,
): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;

  const brief = getCreativeBriefForAsset(asset);
  if (!brief) {
    return (
      asset.title.toLowerCase().includes(q) ||
      asset.id.toLowerCase().includes(q) ||
      asset.filename.toLowerCase().includes(q) ||
      asset.tags.some((t) => t.includes(q)) ||
      asset.searchKeywords.some((k) => k.toLowerCase().includes(q))
    );
  }

  const haystack = [
    asset.id,
    asset.title,
    asset.filename,
    brief.sceneDescription,
    brief.cameraNotes,
    brief.emotionalObjective,
    brief.composition,
    brief.lighting,
    brief.wardrobe,
    brief.usageNotes,
    brief.environment,
    brief.emotion,
    brief.purpose,
    brief.imagePrompt,
    ...asset.tags,
    ...asset.searchKeywords,
    ...getDistributionChannels(asset.id)
      .filter((channel) => channel.used)
      .flatMap((channel) => [channel.label, channel.usageLabel ?? ""]),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(q) || distributionMatchesSearch(getDistributionChannels(asset.id), q);
}
