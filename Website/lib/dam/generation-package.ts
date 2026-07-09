import { buildImagePrompt } from "@/lib/dam/image-prompt";
import { getCreativeBriefForAsset } from "@/lib/dam/photography-guide";
import type { DamAsset, GenerationPackage } from "@/lib/dam/types";

export function buildGenerationPackage(
  asset: DamAsset,
  providerConfigured: boolean,
): GenerationPackage | null {
  const brief = getCreativeBriefForAsset(asset);
  const imagePrompt = buildImagePrompt(asset);

  if (!brief || !imagePrompt) return null;

  return {
    assetId: asset.id,
    title: asset.title,
    sceneNumber: asset.sceneNumber,
    imageNumber: asset.imageNumber,
    sceneName: asset.sceneName,
    status: asset.status,
    imagePrompt,
    hasBrief: true,
    providerConfigured,
    orientation: asset.orientation,
    width: asset.width,
    height: asset.height,
    colourPalette: asset.colourPalette,
  };
}

export function buildGenerationPackages(
  assets: DamAsset[],
  providerConfigured: boolean,
): GenerationPackage[] {
  return assets
    .filter((asset) => asset.status === "planned")
    .map((asset) => buildGenerationPackage(asset, providerConfigured))
    .filter((pkg): pkg is GenerationPackage => pkg !== null)
    .sort((a, b) => a.sceneNumber - b.sceneNumber || a.imageNumber - b.imageNumber);
}
