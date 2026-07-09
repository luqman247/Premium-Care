import { NextResponse } from "next/server";
import { publishAssetImage } from "@/lib/dam/asset-publish";
import { buildImagePrompt } from "@/lib/dam/image-prompt";
import { generateImageWithProvider, isImageProviderConfigured } from "@/lib/dam/image-provider";
import { getAssetById } from "@/lib/dam/registry.server";

type RouteParams = { params: Promise<{ id: string }> };

export const dynamic = "force-dynamic";

export async function POST(_request: Request, { params }: RouteParams) {
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

  if (!isImageProviderConfigured()) {
    return NextResponse.json(
      {
        error: "OPENAI_API_KEY is not configured",
        imagePrompt,
        providerConfigured: false,
      },
      { status: 503 },
    );
  }

  try {
    const generatedBuffer = await generateImageWithProvider(imagePrompt, {
      width: asset.width,
      height: asset.height,
      orientation: asset.orientation,
    });

    const { publicPath, profile } = await publishAssetImage(asset, generatedBuffer, {
      source: "generated",
      version: "published",
    });

    return NextResponse.json({
      success: true,
      path: publicPath,
      imagePrompt,
      profile,
      providerConfigured: true,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Generation failed";
    return NextResponse.json(
      { error: message, imagePrompt, providerConfigured: true },
      { status: 500 },
    );
  }
}
