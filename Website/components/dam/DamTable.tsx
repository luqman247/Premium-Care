"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DamFiltersBar } from "@/components/dam/DamFiltersBar";
import { STATUS_COLOURS, STATUS_LABELS } from "@/lib/dam/constants";
import { assetMatchesSearch, type DamLibraryAsset } from "@/lib/dam/library-asset";
import type { AssetSummary, DamFilters } from "@/lib/dam/types";

type DamTableProps = {
  assets: DamLibraryAsset[];
  summaries: Record<string, AssetSummary>;
  categories: string[];
  pages: string[];
  photographers: string[];
  colours: string[];
};

export function DamTable({
  assets,
  summaries,
  categories,
  pages,
  photographers,
  colours,
}: DamTableProps) {
  const [filters, setFilters] = useState<DamFilters>({
    sort: "scene",
    sortDir: "asc",
  });

  const filtered = useMemo(() => {
    let results = [...assets];
    if (filters.search?.trim()) {
      results = results.filter((a) => assetMatchesSearch(a, filters.search!));
    }
    if (filters.status && filters.status !== "all") {
      results = results.filter((a) => a.status === filters.status);
    }
    return results;
  }, [assets, filters]);

  return (
    <div className="dam-page">
      <div className="dam-page-header">
        <h1 className="dam-page-title">Table</h1>
        <p className="dam-page-description">{filtered.length} assets</p>
      </div>

      <DamFiltersBar
        filters={filters}
        onChange={setFilters}
        categories={categories}
        pages={pages}
        photographers={photographers}
        colours={colours}
      />

      <div className="dam-table-wrap">
        <table className="dam-table">
          <thead>
            <tr>
              <th>Preview</th>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Pages</th>
              <th>Alt text</th>
              <th>SEO</th>
              <th>A11y</th>
              <th>Size</th>
              <th>WebP</th>
              <th>AVIF</th>
              <th>Optimised</th>
              <th>Modified</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((asset) => {
              const summary = summaries[asset.id];
              return (
                <tr key={asset.id}>
                  <td>
                    <Link href={`/media/assets/${asset.id}`} className="dam-table-preview">
                      {asset.src ? (
                        <Image
                          src={summary?.previewUrl ?? `/api/dam/image/${asset.id}`}
                          alt=""
                          width={64}
                          height={42}
                          className="dam-table-thumb"
                          unoptimized
                        />
                      ) : (
                        <span className="dam-table-thumb-empty">—</span>
                      )}
                    </Link>
                  </td>
                  <td className="dam-table-mono">{asset.id}</td>
                  <td>
                    <Link href={`/media/assets/${asset.id}`} className="dam-table-link">
                      {asset.title}
                    </Link>
                  </td>
                  <td>
                    <span className={`dam-badge ${STATUS_COLOURS[asset.status]}`}>
                      {STATUS_LABELS[asset.status]}
                    </span>
                  </td>
                  <td>{summary?.pageCount ?? 0}</td>
                  <td className="dam-table-truncate">{asset.altText || "—"}</td>
                  <td>{summary ? `${summary.seoScore}%` : "—"}</td>
                  <td>{summary ? `${summary.accessibilityScore}%` : "—"}</td>
                  <td>{summary?.fileSizeLabel ?? "—"}</td>
                  <td>{summary?.webpAvailable ? "✓" : "—"}</td>
                  <td>{summary?.avifAvailable ? "✓" : "—"}</td>
                  <td className="dam-table-truncate">{summary?.optimisationStatus ?? "—"}</td>
                  <td>
                    {asset.lastModified
                      ? new Date(asset.lastModified).toLocaleDateString("da-DK")
                      : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
