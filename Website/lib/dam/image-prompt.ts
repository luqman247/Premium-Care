import type { CreativeBrief, DamAsset } from "@/lib/dam/types";
import { getCreativeBriefForAsset } from "@/lib/dam/photography-guide";

const EDITORIAL_CONSTRAINTS = [
  "Editorial photography for PremiumCare — a Danish home care institution",
  "Scandinavian aesthetic: calm, dignified, human, never performative",
  "Natural Nordic light, muted film-like colour rendering",
  "No direct eye contact with camera unless the brief specifies otherwise",
  "No exaggerated smiles, no clinical or hospital aesthetics",
  "No visible medical equipment unless explicitly described",
  "Subjects treated with dignity — never pitied",
  "Photorealistic, medium-format digital camera quality",
].join(". ");

function formatColourPalette(asset: DamAsset): string {
  if (asset.colourPalette.length === 0) return "";
  return `Colour palette: ${asset.colourPalette.join(", ")}. Dominant tones: ${asset.dominantColours.join(", ")}.`;
}

function formatDimensions(asset: DamAsset): string {
  const ratio = asset.aspectRatio.toFixed(2);
  return `${asset.orientation} composition, ${asset.width}×${asset.height}px (${ratio}:1 aspect ratio).`;
}

/** Build a production-quality image generation prompt from brief fields and asset metadata */
export function buildImagePromptFromBrief(
  brief: CreativeBrief,
  asset: DamAsset,
): string {
  const sections = [
    `“${asset.title}” — ${brief.purpose ?? asset.description}`,
    brief.sceneDescription,
    brief.environment ? `Environment: ${brief.environment}` : null,
    `Emotional objective: ${brief.emotionalObjective}`,
    brief.emotion ? `Mood: ${brief.emotion}` : null,
    `Composition: ${brief.composition}`,
    `Lighting: ${brief.lighting}`,
    `Wardrobe: ${brief.wardrobe}`,
    `Camera: ${brief.cameraNotes}`,
    formatColourPalette(asset),
    formatDimensions(asset),
    EDITORIAL_CONSTRAINTS,
  ];

  return sections.filter(Boolean).join("\n\n");
}

export function buildImagePrompt(asset: DamAsset): string | null {
  const brief = getCreativeBriefForAsset(asset);
  if (!brief) return null;
  return buildImagePromptFromBrief(brief, asset);
}
