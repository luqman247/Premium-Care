import { NextResponse } from "next/server";
import { writePlannedPromptFiles } from "@/lib/dam/prompt-files";
import { getAllAssets } from "@/lib/dam/registry.server";

export const dynamic = "force-dynamic";

export async function POST() {
  const results = writePlannedPromptFiles(getAllAssets());

  return NextResponse.json({
    success: true,
    count: results.length,
    files: results.map((result) => ({
      slug: result.slug,
      assetId: result.assetId,
    })),
  });
}

export async function GET() {
  const results = writePlannedPromptFiles(getAllAssets());

  return NextResponse.json({
    success: true,
    count: results.length,
    files: results.map((result) => ({
      slug: result.slug,
      assetId: result.assetId,
    })),
  });
}
