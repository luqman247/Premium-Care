"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { assetMatchesGuideSearch, getPhotographyGuide } from "@/lib/dam/photography-guide";
import type { DamAsset } from "@/lib/dam/types";

type DamGuideBrowserProps = {
  assets: DamAsset[];
};

export function DamGuideBrowser({ assets }: DamGuideBrowserProps) {
  const guide = getPhotographyGuide();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return assets
      .filter((a) => a.creativeBrief)
      .filter((a) => assetMatchesGuideSearch(a, search));
  }, [assets, search]);

  return (
    <div className="dam-page">
      <div className="dam-page-header">
        <h1 className="dam-page-title">Photography Guide</h1>
        <p className="dam-page-description">
          {guide.imageCount} creative briefs · {guide.sectionCount} scenes · searchable
        </p>
      </div>

      <input
        type="search"
        className="dam-filter-search dam-guide-search"
        placeholder="Search scene description, lighting, wardrobe, emotional objective…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search photography guide"
      />

      <div className="dam-guide-sections">
        {guide.sections.map((section) => {
          const sectionAssets = filtered.filter((a) => a.sceneNumber === section.number);
          if (sectionAssets.length === 0) return null;

          return (
            <section key={section.number} className="dam-guide-section">
              <h2 className="dam-guide-section-title">
                Scene {String(section.number).padStart(2, "0")} — {section.name}
              </h2>
              <ul className="dam-guide-list">
                {sectionAssets.map((asset) => {
                  const brief = asset.creativeBrief!;
                  return (
                    <li key={asset.id} className="dam-guide-item">
                      <Link href={`/media/assets/${asset.id}`} className="dam-guide-item-link">
                        <span className="dam-guide-item-id">{asset.id}</span>
                        <span className="dam-guide-item-title">{asset.title}</span>
                        <p className="dam-guide-item-excerpt">{brief.emotionalObjective}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
