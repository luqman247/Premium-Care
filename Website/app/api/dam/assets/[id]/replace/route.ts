import "server-only";

import { NextResponse } from "next/server";
import { publishAssetImage } from "@/lib/dam/asset-publish";
import { invalidateFilesystemCache } from "@/lib/dam/filesystem-sync";
import { getAssetById } from "@/lib/dam/registry.server";

export const dynamic = "force-dynamic";

type RouteParams = { params: Promise<{ id: string }> };

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

export async function POST(request: Request, { params }: RouteParams) {
  const { id } = await params;
  const asset = getAssetById(id);

  if (!asset) {
    return NextResponse.json({ error: "Asset not found" }, { status: 404 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json(
      { error: "Unsupported file type. Use JPEG, PNG, WebP, or AVIF" },
      { status: 400 },
    );
  }

  const versionStatus = String(formData.get("version") ?? "published");
  const validStatuses = ["published", "approved", "draft"] as const;
  const status = validStatuses.includes(versionStatus as (typeof validStatuses)[number])
    ? (versionStatus as (typeof validStatuses)[number])
    : "published";

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const { publicPath, profile } = await publishAssetImage(asset, buffer, {
      mime: file.type,
      version: status,
      source: "upload",
    });

    invalidateFilesystemCache();

    return NextResponse.json({
      success: true,
      path: publicPath,
      profile,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
