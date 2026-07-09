import { NextResponse } from "next/server";
import { buildAssetProfile } from "@/lib/dam/asset-profile";
import { updateAsset } from "@/lib/dam/registry";

type RouteParams = { params: Promise<{ id: string }> };

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  const profile = buildAssetProfile(id);

  if (!profile) {
    return NextResponse.json({ error: "Asset not found" }, { status: 404 });
  }

  return NextResponse.json({ profile });
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const { id } = await params;
  const patch = await request.json();
  const updated = updateAsset(id, patch);

  if (!updated) {
    return NextResponse.json({ error: "Asset not found" }, { status: 404 });
  }

  const profile = buildAssetProfile(id);
  return NextResponse.json({ asset: updated, profile });
}
