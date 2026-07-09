import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { resolvePublicDiskPath } from "@/lib/dam/public-image.server";
import { getAssetById } from "@/lib/dam/registry.server";
import { publicUrlToAbsolutePath } from "@/lib/dam/paths";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type RouteParams = { params: Promise<{ id: string }> };

const MIME_BY_EXT: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
};

function mimeForPath(filePath: string): string {
  return MIME_BY_EXT[path.extname(filePath).toLowerCase()] ?? "application/octet-stream";
}

function resolveDiskPath(assetId: string): { publicSrc: string; resolvedId: string } | null {
  const resolved = resolvePublicDiskPath(assetId);
  if (!resolved) return null;
  return { publicSrc: resolved.publicSrc, resolvedId: resolved.assetId };
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  const asset = getAssetById(id);

  if (!asset) {
    return NextResponse.json({ error: "Asset not found" }, { status: 404 });
  }

  const resolved = resolveDiskPath(id);

  if (!resolved) {
    return NextResponse.json({ error: "Image unavailable" }, { status: 404 });
  }

  const absolutePath = publicUrlToAbsolutePath(resolved.publicSrc);

  let file: Buffer;
  let mtimeMs = 0;
  try {
    const stat = fs.statSync(absolutePath);
    mtimeMs = stat.mtimeMs;
    file = fs.readFileSync(absolutePath);
  } catch {
    return NextResponse.json({ error: "Image unavailable" }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(file), {
    status: 200,
    headers: {
      "Content-Type": mimeForPath(absolutePath),
      "Cache-Control": "no-store, must-revalidate",
      ETag: `"${resolved.resolvedId}-${mtimeMs}"`,
      "X-DAM-Source": resolved.publicSrc,
      "X-DAM-Resolved-From": id,
      ...(resolved.resolvedId !== id ? { "X-DAM-Fallback": resolved.resolvedId } : {}),
    },
  });
}
