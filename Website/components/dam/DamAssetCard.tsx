import Link from "next/link";
import Image from "next/image";
import type { AssetSummary } from "@/lib/dam/types";
import type { DamLibraryAsset } from "@/lib/dam/library-asset";
import { STATUS_COLOURS, STATUS_LABELS } from "@/lib/dam/constants";

type DamAssetCardProps = {
  asset: DamLibraryAsset;
  summary?: AssetSummary;
};

export function DamAssetCard({ asset, summary }: DamAssetCardProps) {
  const hasPreview = Boolean(asset.src);
  const previewUrl = summary?.previewUrl ?? `/api/dam/image/${asset.id}`;

  return (
    <article className="dam-asset-card">
      <Link href={`/media/assets/${asset.id}`} className="dam-asset-card-preview">
        {hasPreview ? (
          <Image
            src={previewUrl}
            alt=""
            width={400}
            height={260}
            className="dam-asset-card-image"
            sizes="(max-width: 768px) 100vw, 280px"
            unoptimized
          />
        ) : (
          <div className="dam-asset-card-placeholder">
            <span>Scene {String(asset.sceneNumber).padStart(2, "0")}</span>
            <span>Image {String(asset.imageNumber).padStart(3, "0")}</span>
          </div>
        )}
        <span className={`dam-badge ${STATUS_COLOURS[asset.status]}`}>
          {STATUS_LABELS[asset.status]}
        </span>
      </Link>

      <div className="dam-asset-card-body">
        <p className="dam-asset-card-scene">
          {asset.id} · S{String(asset.sceneNumber).padStart(2, "0")}
        </p>
        <h3 className="dam-asset-card-title">{asset.title}</h3>
        <p className="dam-asset-card-filename">{asset.filename}</p>

        {summary ? (
          <div className="dam-asset-card-metrics">
            <span>{summary.pageCount} pages</span>
            <span>SEO {summary.seoScore}%</span>
            <span>A11y {summary.accessibilityScore}%</span>
            <span>{summary.fileSizeLabel}</span>
          </div>
        ) : null}

        <p className="dam-asset-card-meta">
          {summary?.optimisationStatus ?? asset.priority}
          {asset.lastModified ? (
            <span>
              {new Date(asset.lastModified).toLocaleDateString("da-DK")}
            </span>
          ) : null}
        </p>
        <div className="dam-asset-card-tags">
          {summary?.webpAvailable ? <span className="dam-tag">WebP</span> : null}
          {summary?.avifAvailable ? <span className="dam-tag">AVIF</span> : null}
          {summary?.hasBlur ? <span className="dam-tag">Blur</span> : null}
          {summary?.lazyLoading ? <span className="dam-tag">Lazy</span> : null}
        </div>
      </div>

      <div className="dam-asset-card-actions">
        <Link href={`/media/assets/${asset.id}`} className="dam-action-btn">
          Control centre
        </Link>
        <Link href={`/media/assets/${asset.id}`} className="dam-action-btn">
          Replace
        </Link>
      </div>
    </article>
  );
}
