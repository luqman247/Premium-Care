"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { AssetProfile, CreativeBrief, UsageChannel } from "@/lib/dam/types";
import { STATUS_COLOURS, STATUS_LABELS, SCENE_NAMES } from "@/lib/dam/constants";
import { formatImageLabel } from "@/lib/dam/distribution-channels";

type DamAssetDetailProps = {
  profile: AssetProfile;
};

function ScoreRing({ score, label }: { score: number; label: string }) {
  const tone =
    score >= 80 ? "dam-score--good" : score >= 50 ? "dam-score--fair" : "dam-score--poor";

  return (
    <div className={`dam-score-ring ${tone}`}>
      <span className="dam-score-value">{score}%</span>
      <span className="dam-score-label">{label}</span>
    </div>
  );
}

function StatusPill({
  label,
  ok,
  detail,
}: {
  label: string;
  ok: boolean;
  detail?: string;
}) {
  return (
    <div className={`dam-status-pill${ok ? " is-ok" : " is-missing"}`}>
      <span className="dam-status-pill-label">{label}</span>
      <span className="dam-status-pill-value">{ok ? "Yes" : "No"}</span>
      {detail ? <span className="dam-status-pill-detail">{detail}</span> : null}
    </div>
  );
}

function BriefField({ label, value }: { label: string; value: string }) {
  if (!value?.trim()) return null;
  return (
    <div className="dam-brief-field">
      <h4 className="dam-brief-label">{label}</h4>
      <p className="dam-brief-value">{value}</p>
    </div>
  );
}

function DistributionChannelsPanel({ channels }: { channels: UsageChannel[] }) {
  const activeCount = channels.filter((channel) => channel.used).length;
  if (activeCount === 0) return null;

  return (
    <section className="dam-control-section">
      <h3 className="dam-section-title">Distribution</h3>
      <ul className="dam-usage-list">
        {channels.map((channel) => (
          <li key={channel.key} className={channel.used ? "is-used" : undefined}>
            <span>{channel.used ? "✓" : "—"}</span>
            <span>{channel.usageLabel ?? `Used in ${channel.label}`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CreativeBriefPanel({ brief }: { brief: CreativeBrief }) {
  return (
    <section className="dam-control-section dam-control-section--full dam-creative-brief">
      <div className="dam-brief-header">
        <h3 className="dam-section-title">Creative brief — Editorial Photography Guide</h3>
        <p className="dam-brief-source">Source: EDITORIAL_PHOTOGRAPHY_GUIDE.pdf</p>
      </div>
      <div className="dam-brief-grid">
        <BriefField label="Scene description" value={brief.sceneDescription} />
        <BriefField label="Emotional objective" value={brief.emotionalObjective} />
        <BriefField label="Camera notes" value={brief.cameraNotes} />
        <BriefField label="Composition" value={brief.composition} />
        <BriefField label="Lighting" value={brief.lighting} />
        <BriefField label="Wardrobe" value={brief.wardrobe} />
        <BriefField label="Usage notes" value={brief.usageNotes} />
        {brief.imagePrompt ? (
          <BriefField label="Image prompt" value={brief.imagePrompt} />
        ) : null}
        {brief.environment ? (
          <BriefField label="Environment" value={brief.environment} />
        ) : null}
        {brief.emotion ? <BriefField label="Emotion" value={brief.emotion} /> : null}
        {brief.purpose ? <BriefField label="Purpose" value={brief.purpose} /> : null}
      </div>
    </section>
  );
}

export function DamAssetDetail({ profile: initialProfile }: DamAssetDetailProps) {
  const [profile, setProfile] = useState(initialProfile);
  const [compareA, setCompareA] = useState<number>(0);
  const [compareB, setCompareB] = useState<number>(1);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { asset } = profile;
  const hasImage = Boolean(asset.src);

  const handleReplace = useCallback(
    async (file: File, version: string) => {
      setUploading(true);
      setUploadError(null);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("version", version);

      try {
        const response = await fetch(`/api/dam/assets/${asset.id}/replace`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const body = await response.json();
          throw new Error(body.error ?? "Upload failed");
        }

        const body = await response.json();
        if (body.profile) {
          setProfile(body.profile);
        }
      } catch (error) {
        setUploadError(error instanceof Error ? error.message : "Upload failed");
      } finally {
        setUploading(false);
      }
    },
    [asset.id],
  );

  const versionA = profile.versions[compareA];
  const versionB = profile.versions[compareB];

  return (
    <div className="dam-control-centre">
      <div className="dam-control-header">
        <div className="dam-control-header-main">
          <span className={`dam-badge ${STATUS_COLOURS[asset.status]}`}>
            {STATUS_LABELS[asset.status]}
          </span>
          <p className="dam-control-id">
            {formatImageLabel(asset.imageNumber)} · {asset.id}
          </p>
          <p className="dam-control-scene">
            {asset.sceneName || SCENE_NAMES[asset.sceneNumber] || `Scene ${asset.sceneNumber}`}
          </p>
          <h2 className="dam-control-title">{asset.title}</h2>
        </div>
        <div className="dam-control-actions">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            className="dam-file-input"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) handleReplace(file, "published");
              event.target.value = "";
            }}
          />
          <button
            type="button"
            className="dam-btn dam-btn--primary"
            disabled={uploading}
            onClick={() => fileInputRef.current?.click()}
          >
            {uploading ? "Uploading…" : "Replace image"}
          </button>
        </div>
      </div>

      {uploadError ? <p className="dam-upload-error">{uploadError}</p> : null}

      <div className="dam-metrics-row">
        <ScoreRing score={profile.seoScore} label="SEO" />
        <ScoreRing score={profile.accessibilityScore} label="Accessibility" />
        <div className="dam-metric-card">
          <span className="dam-metric-value">{profile.usage.pageCount}</span>
          <span className="dam-metric-label">Pages using</span>
        </div>
        <div className="dam-metric-card">
          <span className="dam-metric-value">{profile.usage.distributionCount}</span>
          <span className="dam-metric-label">Distribution uses</span>
        </div>
        <div className="dam-metric-card">
          <span className="dam-metric-value">{profile.fileSizeLabel}</span>
          <span className="dam-metric-label">File size</span>
        </div>
        <div className="dam-metric-card">
          <span className="dam-metric-value dam-metric-value--cap">
            {profile.optimisationStatus}
          </span>
          <span className="dam-metric-label">Optimisation</span>
        </div>
      </div>

      {profile.creativeBrief ? (
        <CreativeBriefPanel brief={profile.creativeBrief} />
      ) : (
        <section className="dam-control-section dam-control-section--full">
          <h3 className="dam-section-title">Creative brief</h3>
          <p className="dam-empty-note">
            No photography guide entry for this brand asset
          </p>
        </section>
      )}

      <div className="dam-control-grid">
        <section className="dam-control-section dam-control-section--preview">
          <h3 className="dam-section-title">Previews</h3>

          <div className="dam-preview-hero">
            {hasImage ? (
              <Image
                src={profile.previewUrl}
                alt={profile.altText}
                width={asset.width}
                height={asset.height}
                className="dam-detail-image"
                unoptimized
              />
            ) : (
              <div className="dam-detail-placeholder">Awaiting photography</div>
            )}
          </div>

          <div className="dam-device-row">
            <div className="dam-device-frame dam-device-frame--desktop">
              <p className="dam-device-label">Desktop</p>
              <div className="dam-device-screen dam-device-screen--desktop">
                {hasImage ? (
                  <Image
                    src={profile.previewUrl}
                    alt=""
                    fill
                    className="dam-device-image"
                    unoptimized
                    sizes="320px"
                  />
                ) : (
                  <div className="dam-device-empty" />
                )}
              </div>
            </div>
            <div className="dam-device-frame dam-device-frame--mobile">
              <p className="dam-device-label">Mobile</p>
              <div className="dam-device-screen dam-device-screen--mobile">
                {hasImage ? (
                  <Image
                    src={profile.previewUrl}
                    alt=""
                    fill
                    className="dam-device-image"
                    unoptimized
                    sizes="120px"
                  />
                ) : (
                  <div className="dam-device-empty" />
                )}
              </div>
            </div>
          </div>

          <h4 className="dam-subsection-title">Crop previews</h4>
          <div className="dam-crop-grid">
            {profile.crops.map((crop) => (
              <div key={crop.label} className="dam-crop-card">
                <p className="dam-crop-label">{crop.label}</p>
                <div
                  className="dam-crop-frame"
                  style={{ aspectRatio: crop.aspectRatio }}
                >
                  {hasImage ? (
                    <Image
                      src={profile.previewUrl}
                      alt=""
                      fill
                      className="dam-crop-image"
                      style={{ objectPosition: crop.objectPosition }}
                      unoptimized
                      sizes="160px"
                    />
                  ) : (
                    <div className="dam-device-empty" />
                  )}
                </div>
                <p className="dam-crop-meta">{crop.objectPosition}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="dam-control-sidebar">
          <DistributionChannelsPanel channels={profile.usage.distribution} />

          <section className="dam-control-section">
            <h3 className="dam-section-title">Where it is used</h3>
            <p className="dam-usage-count">
              {profile.usage.pageCount} page{profile.usage.pageCount === 1 ? "" : "s"}
            </p>
            <ul className="dam-usage-detail-list">
              {profile.usage.locations.map((location) => (
                <li key={`${location.route}-${location.section}`}>
                  <span className="dam-usage-route">{location.route}</span>
                  <span className="dam-usage-page">{location.pageLabel}</span>
                  <span className="dam-usage-section">{location.section}</span>
                  <span className="dam-usage-component">{location.component}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="dam-control-section">
            <h3 className="dam-section-title">Alt text</h3>
            <p className="dam-alt-text">{profile.altText || "Not set"}</p>
          </section>

          <section className="dam-control-section">
            <h3 className="dam-section-title">Delivery</h3>
            <div className="dam-status-grid">
              <StatusPill
                label="WebP"
                ok={profile.webp.available}
                detail={profile.webp.sizeKb ? `${profile.webp.sizeKb} KB` : undefined}
              />
              <StatusPill
                label="AVIF"
                ok={profile.avif.available}
                detail={profile.avif.sizeKb ? `${profile.avif.sizeKb} KB` : undefined}
              />
              <StatusPill
                label="Lazy loading"
                ok={profile.lazyLoading.enabled}
                detail={profile.lazyLoading.note}
              />
              <StatusPill
                label="Blur placeholder"
                ok={profile.blurPlaceholder.configured}
              />
            </div>
          </section>

          <section className="dam-control-section">
            <h3 className="dam-section-title">Last modified</h3>
            <p className="dam-last-modified">
              {profile.lastModified
                ? new Date(profile.lastModified).toLocaleString("da-DK", {
                    dateStyle: "long",
                    timeStyle: "short",
                  })
                : "—"}
            </p>
          </section>

          <section className="dam-control-section">
            <h3 className="dam-section-title">Reports</h3>
            <div className="dam-reports-compact">
              <div>
                <h4>SEO issues</h4>
                <ul>
                  {profile.reports.seo.issues.length > 0 ? (
                    profile.reports.seo.issues.map((issue) => (
                      <li key={issue} className="is-issue">
                        {issue}
                      </li>
                    ))
                  ) : (
                    <li className="is-pass">No issues</li>
                  )}
                </ul>
              </div>
              <div>
                <h4>Accessibility issues</h4>
                <ul>
                  {profile.reports.accessibility.issues.length > 0 ? (
                    profile.reports.accessibility.issues.map((issue) => (
                      <li key={issue} className="is-issue">
                        {issue}
                      </li>
                    ))
                  ) : (
                    <li className="is-pass">No issues</li>
                  )}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="dam-control-section dam-control-section--full">
        <h3 className="dam-section-title">Version history</h3>
        {profile.versions.length > 0 ? (
          <div className="dam-version-table-wrap">
            <table className="dam-version-table">
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Size</th>
                  <th>Note</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                {profile.versions.map((version, index) => (
                  <tr key={`${version.src}-${index}`}>
                    <td>v{version.versionNumber}</td>
                    <td>{version.status ?? "—"}</td>
                    <td>
                      {version.uploadDate
                        ? new Date(version.uploadDate).toLocaleDateString("da-DK")
                        : "—"}
                    </td>
                    <td>{version.sizeKb ? `${version.sizeKb} KB` : "—"}</td>
                    <td>{version.note}</td>
                    <td>{version.isActive ? "●" : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="dam-empty-note">No versions yet — replace image to create the first version</p>
        )}
      </section>

      {profile.versions.length >= 2 ? (
        <section className="dam-control-section dam-control-section--full">
          <h3 className="dam-section-title">Compare versions</h3>
          <div className="dam-compare-controls">
            <label>
              Version A
              <select
                value={compareA}
                onChange={(event) => setCompareA(Number(event.target.value))}
              >
                {profile.versions.map((version, index) => (
                  <option key={`a-${version.src}`} value={index}>
                    v{version.versionNumber} · {version.status ?? "file"}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Version B
              <select
                value={compareB}
                onChange={(event) => setCompareB(Number(event.target.value))}
              >
                {profile.versions.map((version, index) => (
                  <option key={`b-${version.src}`} value={index}>
                    v{version.versionNumber} · {version.status ?? "file"}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="dam-compare-grid">
            {[versionA, versionB].map((version, index) =>
              version ? (
                <div key={version.src} className="dam-compare-panel">
                  <p className="dam-compare-label">
                    {index === 0 ? "A" : "B"} · v{version.versionNumber}
                    {version.status ? ` · ${version.status}` : ""}
                  </p>
                  <div className="dam-compare-frame">
                    <Image
                      src={version.src}
                      alt=""
                      fill
                      className="dam-compare-image"
                      unoptimized
                      sizes="400px"
                    />
                  </div>
                  <p className="dam-compare-meta">
                    {version.sizeKb ? `${version.sizeKb} KB` : ""} · {version.note}
                  </p>
                </div>
              ) : null,
            )}
          </div>
        </section>
      ) : null}
    </div>
  );
}
