import "server-only";

import { getAllAssets as getCatalogAssets, getAssetById as getCatalogAssetById } from "@/lib/dam/registry";
import { enrichAssetFromFilesystem } from "@/lib/dam/filesystem-sync";
import type { DamAsset } from "@/lib/dam/types";

export function getAssetById(id: string): DamAsset | undefined {
  const asset = getCatalogAssetById(id);
  if (!asset) return undefined;
  return enrichAssetFromFilesystem(asset);
}

export function getAllAssets(): DamAsset[] {
  return getCatalogAssets().map((asset) => enrichAssetFromFilesystem(asset));
}
