"use client";

import { useMemo, useState } from "react";
import { DamAssetCard } from "@/components/dam/DamAssetCard";
import { DamFiltersBar } from "@/components/dam/DamFiltersBar";
import { assetMatchesSearch, type DamLibraryAsset } from "@/lib/dam/library-asset";
import type { AssetSummary, DamFilters } from "@/lib/dam/types";

type DamLibraryProps = {
  assets: DamLibraryAsset[];
  summaries: Record<string, AssetSummary>;
  categories: string[];
  pages: string[];
  photographers: string[];
  colours: string[];
};

export function DamLibrary({
  assets,
  summaries,
  categories,
  pages,
  photographers,
  colours,
}: DamLibraryProps) {
  const [filters, setFilters] = useState<DamFilters>({
    sort: "scene",
    sortDir: "asc",
  });

  const filtered = useMemo(() => {
    let results = [...assets];

    if (filters.status && filters.status !== "all") {
      results = results.filter((a) => a.status === filters.status);
    }
    if (filters.page && filters.page !== "all") {
      results = results.filter(
        (a) =>
          a.websitePages.includes(filters.page!) ||
          a.websitePages.includes("all"),
      );
    }
    if (filters.category && filters.category !== "all") {
      results = results.filter((a) => a.category === filters.category);
    }
    if (filters.orientation && filters.orientation !== "all") {
      results = results.filter((a) => a.orientation === filters.orientation);
    }
    if (filters.colour && filters.colour !== "all") {
      results = results.filter(
        (a) =>
          a.dominantColours.includes(filters.colour!) ||
          a.colourPalette.includes(filters.colour!),
      );
    }
    if (filters.photographer && filters.photographer !== "all") {
      results = results.filter((a) => a.photographer === filters.photographer);
    }
    if (filters.priority && filters.priority !== "all") {
      results = results.filter((a) => a.priority === filters.priority);
    }
    if (filters.search?.trim()) {
      results = results.filter((a) => assetMatchesSearch(a, filters.search!));
    }

    const dir = filters.sortDir === "desc" ? -1 : 1;
    results.sort((a, b) => {
      switch (filters.sort) {
        case "title":
          return a.title.localeCompare(b.title) * dir;
        case "date":
          return (a.uploadDate ?? "").localeCompare(b.uploadDate ?? "") * dir;
        case "status":
          return a.status.localeCompare(b.status) * dir;
        case "priority": {
          const order = { critical: 0, high: 1, medium: 2, low: 3 };
          return (order[a.priority] - order[b.priority]) * dir;
        }
        default:
          return (
            (a.sceneNumber - b.sceneNumber || a.imageNumber - b.imageNumber) * dir
          );
      }
    });

    return results;
  }, [assets, filters]);

  return (
    <div className="dam-page">
      <div className="dam-page-header">
        <h1 className="dam-page-title">Library</h1>
        <p className="dam-page-description">
          {filtered.length} assets · Editorial Photography Bible
        </p>
      </div>

      <DamFiltersBar
        filters={filters}
        onChange={setFilters}
        categories={categories}
        pages={pages}
        photographers={photographers}
        colours={colours}
      />

      <div className="dam-card-grid">
        {filtered.map((asset) => (
          <DamAssetCard key={asset.id} asset={asset} summary={summaries[asset.id]} />
        ))}
      </div>
    </div>
  );
}
