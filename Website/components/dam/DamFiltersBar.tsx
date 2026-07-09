"use client";

import type { DamFilters } from "@/lib/dam/types";
import { ASSET_STATUSES } from "@/lib/dam/types";
import { STATUS_LABELS } from "@/lib/dam/constants";

type DamFiltersBarProps = {
  filters: DamFilters;
  onChange: (filters: DamFilters) => void;
  categories: string[];
  pages: string[];
  photographers: string[];
  colours: string[];
};

export function DamFiltersBar({
  filters,
  onChange,
  categories,
  pages,
  photographers,
  colours,
}: DamFiltersBarProps) {
  const update = (patch: Partial<DamFilters>) => onChange({ ...filters, ...patch });

  return (
    <div className="dam-filters">
      <input
        type="search"
        className="dam-filter-search"
        placeholder="Search assets and photography guide…"
        value={filters.search ?? ""}
        onChange={(e) => update({ search: e.target.value })}
        aria-label="Search assets"
      />

      <select
        className="dam-filter-select"
        value={filters.status ?? "all"}
        onChange={(e) => update({ status: e.target.value as DamFilters["status"] })}
        aria-label="Filter by status"
      >
        <option value="all">All statuses</option>
        {ASSET_STATUSES.map((s) => (
          <option key={s} value={s}>
            {STATUS_LABELS[s]}
          </option>
        ))}
      </select>

      <select
        className="dam-filter-select"
        value={filters.page ?? "all"}
        onChange={(e) => update({ page: e.target.value })}
        aria-label="Filter by page"
      >
        <option value="all">All pages</option>
        {pages.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <select
        className="dam-filter-select"
        value={filters.category ?? "all"}
        onChange={(e) => update({ category: e.target.value })}
        aria-label="Filter by category"
      >
        <option value="all">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        className="dam-filter-select"
        value={filters.orientation ?? "all"}
        onChange={(e) =>
          update({ orientation: e.target.value as DamFilters["orientation"] })
        }
        aria-label="Filter by orientation"
      >
        <option value="all">All orientations</option>
        <option value="landscape">Landscape</option>
        <option value="portrait">Portrait</option>
        <option value="square">Square</option>
      </select>

      <select
        className="dam-filter-select"
        value={filters.colour ?? "all"}
        onChange={(e) => update({ colour: e.target.value })}
        aria-label="Filter by colour"
      >
        <option value="all">All colours</option>
        {colours.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        className="dam-filter-select"
        value={filters.photographer ?? "all"}
        onChange={(e) => update({ photographer: e.target.value })}
        aria-label="Filter by photographer"
      >
        <option value="all">All photographers</option>
        {photographers.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <select
        className="dam-filter-select"
        value={filters.priority ?? "all"}
        onChange={(e) => update({ priority: e.target.value as DamFilters["priority"] })}
        aria-label="Filter by priority"
      >
        <option value="all">All priorities</option>
        <option value="critical">Critical</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <select
        className="dam-filter-select"
        value={filters.sort ?? "scene"}
        onChange={(e) => update({ sort: e.target.value as DamFilters["sort"] })}
        aria-label="Sort by"
      >
        <option value="scene">Scene</option>
        <option value="title">Title</option>
        <option value="date">Date</option>
        <option value="status">Status</option>
        <option value="priority">Priority</option>
      </select>

      <select
        className="dam-filter-select"
        value={filters.sortDir ?? "asc"}
        onChange={(e) => update({ sortDir: e.target.value as "asc" | "desc" })}
        aria-label="Sort direction"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}
