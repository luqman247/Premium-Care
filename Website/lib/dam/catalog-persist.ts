import "server-only";

import fs from "node:fs";
import path from "node:path";
import type { DamAsset, DamCatalog } from "@/lib/dam/types";
import { updateAsset } from "@/lib/dam/registry";

const CATALOG_PATH = path.join(process.cwd(), "data/dam/assets.json");

export function persistAssetToCatalog(
  assetId: string,
  patch: Partial<DamAsset>,
): DamAsset | null {
  const raw = fs.readFileSync(CATALOG_PATH, "utf8");
  const catalog = JSON.parse(raw) as DamCatalog;
  const index = catalog.assets.findIndex((asset) => asset.id === assetId);

  if (index === -1) return null;

  const updated: DamAsset = {
    ...catalog.assets[index],
    ...patch,
    lastModified: new Date().toISOString(),
  };

  catalog.assets[index] = updated;
  catalog.generatedAt = new Date().toISOString();

  fs.writeFileSync(CATALOG_PATH, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
  updateAsset(assetId, patch);

  return updated;
}
