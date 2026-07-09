import { NextResponse } from "next/server";
import {
  filterAssets,
  getAllAssets,
  updateAsset,
} from "@/lib/dam/registry";
import type { DamFilters } from "@/lib/dam/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filters: DamFilters = {
    status: (searchParams.get("status") as DamFilters["status"]) ?? "all",
    page: searchParams.get("page") ?? "all",
    category: searchParams.get("category") ?? "all",
    orientation: (searchParams.get("orientation") as DamFilters["orientation"]) ?? "all",
    colour: searchParams.get("colour") ?? "all",
    photographer: searchParams.get("photographer") ?? "all",
    priority: (searchParams.get("priority") as DamFilters["priority"]) ?? "all",
    search: searchParams.get("search") ?? undefined,
    sort: (searchParams.get("sort") as DamFilters["sort"]) ?? "scene",
    sortDir: (searchParams.get("sortDir") as "asc" | "desc") ?? "asc",
  };

  const assets = searchParams.toString() ? filterAssets(filters) : getAllAssets();
  return NextResponse.json({ assets, total: assets.length });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { id, ...patch } = body;

  if (!id) {
    return NextResponse.json({ error: "Asset ID required" }, { status: 400 });
  }

  const updated = updateAsset(id, patch);
  if (!updated) {
    return NextResponse.json({ error: "Asset not found" }, { status: 404 });
  }

  return NextResponse.json({ asset: updated });
}
