import type { DamAsset } from "@/lib/dam/types";
import { getDistributionChannels } from "@/lib/dam/distribution-channels";
import { buildImagePrompt } from "@/lib/dam/image-prompt";
import { getCreativeBriefForAsset } from "@/lib/dam/photography-guide";
import { getAssetUsageLocations } from "@/lib/dam/site-locations";
import { formatPromptSlug } from "@/lib/dam/prompt-index";

export const EDITORIAL_NEGATIVE_PROMPT = [
  "Clinical hospital aesthetic",
  "fluorescent lighting",
  "saturated colours",
  "pure white backgrounds (#FFFFFF)",
  "clinical blue (#0077C8)",
  "hospital green",
  "stock photo performative smiles",
  "direct camera stare unless specified",
  "unrequested medical equipment",
  "pitying composition",
  "harsh shadows",
  "wide-angle distortion",
  "fisheye lens",
  "low resolution",
  "watermarks",
  "text overlays",
  "visible logos",
  "illustration",
  "anime",
  "CGI artifacts",
  "oversaturated skin",
  "plastic retouched skin",
  "crowded backgrounds",
  "American healthcare stock photography",
  "urgency or conversion marketing tone",
].join(", ");

export type PromptDocument = {
  slug: string;
  assetId: string;
  title: string;
  emotionalObjective: string;
  imagePrompt: string;
  negativePrompt: string;
  aspectRatio: string;
  resolution: string;
  websitePlacement: string;
  altText: string;
  seoDescription: string;
  status: string;
};

function formatAspectRatio(asset: DamAsset): string {
  const ratio = asset.aspectRatio.toFixed(2);
  return `${asset.orientation} · ${ratio}:1`;
}

function formatWebsitePlacement(asset: DamAsset): string {
  const locations = getAssetUsageLocations(asset.id, asset.websitePages);
  const brief = getCreativeBriefForAsset(asset);
  const distribution = getDistributionChannels(asset.id)
    .filter((channel) => channel.used)
    .map((channel) => channel.usageLabel ?? channel.label);

  const lines: string[] = [];

  if (locations.length > 0) {
    for (const location of locations) {
      lines.push(
        `${location.pageLabel} — ${location.section} (${location.route}, ${location.component})`,
      );
    }
  }

  if (asset.websiteComponents.length > 0) {
    lines.push(`Components: ${asset.websiteComponents.join(", ")}`);
  }

  if (brief?.usageNotes) {
    lines.push(`Guide usage: ${brief.usageNotes.split("|")[0]?.trim() ?? brief.usageNotes}`);
  }

  if (distribution.length > 0) {
    lines.push(`Distribution: ${distribution.join(" · ")}`);
  }

  if (lines.length === 0) {
    return asset.description || "Catalog placement — awaiting publish";
  }

  return lines.join("\n");
}

export function buildPromptDocument(
  asset: DamAsset,
  globalIndex: number,
): PromptDocument | null {
  const brief = getCreativeBriefForAsset(asset);
  const imagePrompt = buildImagePrompt(asset);

  if (!brief || !imagePrompt) return null;

  return {
    slug: formatPromptSlug(globalIndex),
    assetId: asset.id,
    title: asset.title,
    emotionalObjective: brief.emotionalObjective,
    imagePrompt,
    negativePrompt: EDITORIAL_NEGATIVE_PROMPT,
    aspectRatio: formatAspectRatio(asset),
    resolution: `${asset.width}×${asset.height}px`,
    websitePlacement: formatWebsitePlacement(asset),
    altText: asset.altText,
    seoDescription: asset.seoDescription || asset.openGraphDescription || asset.description,
    status: asset.status,
  };
}

export function renderPromptMarkdown(document: PromptDocument): string {
  return `# ${document.slug} — ${document.title}

**Asset ID:** ${document.assetId}  
**Status:** ${document.status}  
**Source:** Editorial Photography Guide

## Title

${document.title}

## Emotional objective

${document.emotionalObjective}

## Final image generation prompt

${document.imagePrompt}

## Negative prompt

${document.negativePrompt}

## Recommended aspect ratio

${document.aspectRatio}

## Suggested resolution

${document.resolution}

## Intended website placement

${document.websitePlacement}

## Alt text

${document.altText}

## SEO description

${document.seoDescription}
`;
}
