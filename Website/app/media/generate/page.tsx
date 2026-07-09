import { DamGenerate } from "@/components/dam/DamGenerate";
import { buildGenerationPackages } from "@/lib/dam/generation-package";
import { isImageProviderConfigured } from "@/lib/dam/image-provider";
import { getAllAssets } from "@/lib/dam/registry.server";

export default function MediaGeneratePage() {
  const assets = getAllAssets();
  const providerConfigured = isImageProviderConfigured();
  const packages = buildGenerationPackages(assets, providerConfigured);

  return <DamGenerate packages={packages} providerConfigured={providerConfigured} />;
}
