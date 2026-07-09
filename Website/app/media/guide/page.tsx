import { DamGuideBrowser } from "@/components/dam/DamGuideBrowser";
import { getAllAssets } from "@/lib/dam/registry.server";

export default function PhotographyGuidePage() {
  return <DamGuideBrowser assets={getAllAssets()} />;
}
