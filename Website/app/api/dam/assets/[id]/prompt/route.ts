import { NextResponse } from "next/server";
import { buildGenerationPackage } from "@/lib/dam/generation-package";
import { buildImagePrompt } from "@/lib/dam/image-prompt";
import { isImageProviderConfigured } from "@/lib/dam/image-provider";
import { getAssetById } from "@/lib/dam/registry.server";

type RouteParams = { params: Promise<{ id: string }> };

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  const asset = getAssetById(id);

  if (!asset) {
    return NextResponse.json({ error: "Asset not found" }, { status: 404 });
  }

  const imagePrompt = buildImagePrompt(asset);
  if (!imagePrompt) {
    return NextResponse.json(
      { error: "No creative brief available for this asset" },
      { status: 400 },
    );
  }

  const providerConfigured = isImageProviderConfigured();
  const generationPackage = buildGenerationPackage(asset, providerConfigured);

  return NextResponse.json({
    assetId: id,
    imagePrompt,
    generationPackage,
    providerConfigured,
  });
}
