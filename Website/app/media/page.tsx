import Link from "next/link";
import { DamStatCard } from "@/components/dam/DamStatCard";
import { DamAssetCard } from "@/components/dam/DamAssetCard";
import { toLibraryAsset } from "@/lib/dam/library-asset";
import { getGlobalAccessibilityIssues } from "@/lib/dam/reports";
import { filterAssets, getDashboardStats } from "@/lib/dam/registry";

export default function MediaDashboardPage() {
  const stats = getDashboardStats();
  const issues = getGlobalAccessibilityIssues();
  const recent = filterAssets({ sort: "date", sortDir: "desc" })
    .filter((a) => a.uploadDate)
    .slice(0, 6);

  return (
    <div className="dam-page">
      <div className="dam-page-header">
        <h1 className="dam-page-title">Dashboard</h1>
        <p className="dam-page-description">
          Editorial asset overview across the Premium Care ecosystem
        </p>
      </div>

      <div className="dam-stat-grid">
        <DamStatCard label="Total Images" value={stats.totalImages} />
        <DamStatCard label="Uploaded" value={stats.uploaded} accent="positive" />
        <DamStatCard label="Missing" value={stats.missing} accent="warning" />
        <DamStatCard label="Awaiting Shoot" value={stats.awaitingShoot} />
        <DamStatCard label="In Editing" value={stats.inEditing} />
        <DamStatCard label="Published" value={stats.published} accent="positive" />
        <DamStatCard label="Unused" value={stats.unused} accent="muted" />
        <DamStatCard label="Recently Added" value={stats.recentlyAdded} />
        <DamStatCard
          label="Storage Used"
          value={`${stats.storageUsedMb.toFixed(1)} MB`}
          accent="muted"
        />
      </div>

      {issues.length > 0 ? (
        <section className="dam-panel">
          <h2 className="dam-panel-title">Accessibility & integrity</h2>
          <ul className="dam-issue-list">
            {issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="dam-panel">
        <div className="dam-panel-header">
          <h2 className="dam-panel-title">Recently added</h2>
          <Link href="/media/library" className="dam-text-link">
            View library
          </Link>
        </div>
        <div className="dam-card-grid">
          {recent.map((asset) => (
            <DamAssetCard key={asset.id} asset={toLibraryAsset(asset)} />
          ))}
        </div>
      </section>
    </div>
  );
}
