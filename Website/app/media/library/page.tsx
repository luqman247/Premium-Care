import { DamLibrary } from "@/components/dam/DamLibrary";
import { buildAssetSummary } from "@/lib/dam/asset-profile";
import { toLibraryAsset } from "@/lib/dam/library-asset";
import {
  getCategories,
  getDominantColours,
  getPhotographers,
  getWebsitePages,
} from "@/lib/dam/registry";
import { getAllAssets } from "@/lib/dam/registry.server";

export const dynamic = "force-dynamic";

export default function MediaLibraryPage() {
  const fullAssets = getAllAssets();
  const assets = fullAssets.map(toLibraryAsset);
  const summaries = Object.fromEntries(
    fullAssets
      .map((asset) => [asset.id, buildAssetSummary(asset.id)] as const)
      .filter((entry): entry is [string, NonNullable<ReturnType<typeof buildAssetSummary>>] =>
        Boolean(entry[1]),
      ),
  );

  return (
    <DamLibrary
      assets={assets}
      summaries={summaries}
      categories={getCategories()}
      pages={getWebsitePages()}
      photographers={getPhotographers()}
      colours={getDominantColours()}
    />
  );
}
