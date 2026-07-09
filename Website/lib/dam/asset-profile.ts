import "server-only";

import fs from "node:fs";
import { damImageApiPath } from "@/lib/dam/api-path";
import { discoverAssetOnDisk, listFilesystemVersions } from "@/lib/dam/filesystem-sync";
import { generateVariants } from "@/lib/dam/optimization";
import { publicUrlToAbsolutePath } from "@/lib/dam/paths";
import {
  buildAccessibilityReport,
  buildPerformanceReport,
  buildSeoReport,
} from "@/lib/dam/reports";
import { getAssetById } from "@/lib/dam/registry.server";
import { getCreativeBriefForAsset } from "@/lib/dam/photography-guide";
import { buildImagePrompt } from "@/lib/dam/image-prompt";
import { countUniquePages, getAssetUsageLocations } from "@/lib/dam/site-locations";
import {
  countActiveDistributionChannels,
  getDistributionChannels,
} from "@/lib/dam/distribution-channels";
import type {
  AssetProfile,
  AssetSummary,
  AssetVersionEntry,
  CropPreview,
  DamAsset,
  OptimisationStatus,
  VariantAvailability,
} from "@/lib/dam/types";

const PRIORITY_ASSET_IDS = new Set([
  "PC-BR-001",
  "PC-BR-002",
  "PC-BR-003",
  "PC-01-001",
]);

function formatFileSize(bytes: number | null): string {
  if (bytes === null || bytes === 0) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getFileSizeKb(publicSrc: string | null): number | null {
  if (!publicSrc) return null;
  try {
    const stat = fs.statSync(publicUrlToAbsolutePath(publicSrc));
    return Math.round(stat.size / 1024);
  } catch {
    return null;
  }
}

function checkVariant(path: string | undefined): VariantAvailability {
  if (!path) return { available: false, path: null, sizeKb: null };
  try {
    const absolute = publicUrlToAbsolutePath(path);
    if (!fs.existsSync(absolute)) {
      return { available: false, path, sizeKb: null };
    }
    const sizeKb = Math.round(fs.statSync(absolute).size / 1024);
    return { available: true, path, sizeKb };
  } catch {
    return { available: false, path, sizeKb: null };
  }
}

function resolveOptimisationStatus(
  asset: DamAsset,
  webp: VariantAvailability,
  avif: VariantAvailability,
  fileSizeKb: number | null,
): OptimisationStatus {
  if (!asset.src && !fileSizeKb) return "missing";
  if (webp.available && avif.available && (fileSizeKb ?? 0) < 500) return "optimised";
  if (webp.available || avif.available) return "partial";
  return "unoptimised";
}

function buildCropPreviews(asset: DamAsset): CropPreview[] {
  const configured = asset.objectPosition || "center center";
  return [
    { label: "Configured", objectPosition: configured, aspectRatio: "3 / 2" },
    { label: "Hero crop", objectPosition: "center 35%", aspectRatio: "16 / 9" },
    { label: "Portrait", objectPosition: "center top", aspectRatio: "3 / 4" },
    { label: "Square", objectPosition: "center center", aspectRatio: "1 / 1" },
  ];
}

function buildVersionEntries(asset: DamAsset, activeSrc: string | null): AssetVersionEntry[] {
  const entries: AssetVersionEntry[] = [];
  const seen = new Set<string>();

  for (const version of asset.versions) {
    if (!version.src || seen.has(version.src)) continue;
    seen.add(version.src);
    entries.push({
      versionNumber: version.versionNumber,
      src: version.src,
      uploadDate: version.uploadDate,
      note: version.note,
      status: version.status,
      approvedBy: version.approvedBy,
      sizeKb: getFileSizeKb(version.src),
      isActive: version.src === activeSrc,
    });
  }

  for (const file of listFilesystemVersions(asset)) {
    if (seen.has(file.src)) continue;
    seen.add(file.src);
    entries.push({
      versionNumber: entries.length + 1,
      src: file.src,
      uploadDate: new Date(file.mtimeMs).toISOString(),
      note: `Filesystem · ${file.filename}`,
      status: file.status === "unknown" ? undefined : file.status,
      sizeKb: Math.round(file.sizeBytes / 1024),
      isActive: file.src === activeSrc,
    });
  }

  return entries.sort((a, b) => {
    const dateA = new Date(a.uploadDate).getTime();
    const dateB = new Date(b.uploadDate).getTime();
    return dateB - dateA;
  });
}

export function buildAssetProfile(assetId: string): AssetProfile | null {
  const asset = getAssetById(assetId);
  if (!asset) return null;

  const discovery = discoverAssetOnDisk(asset);
  const activeSrc = discovery?.src ?? asset.src ?? null;
  const enriched = activeSrc ? { ...asset, src: activeSrc } : asset;

  const variants = { ...generateVariants(enriched), ...enriched.variants };
  const webp = checkVariant(variants.webp);
  const avif = checkVariant(variants.avif);
  const fileSizeKb = activeSrc ? getFileSizeKb(activeSrc) : null;

  const accessibility = buildAccessibilityReport(enriched);
  const seo = buildSeoReport(enriched);
  const performance = buildPerformanceReport(enriched);

  const locations = getAssetUsageLocations(asset.id, asset.websitePages);
  const distribution = getDistributionChannels(asset.id);
  const isPriority = PRIORITY_ASSET_IDS.has(asset.id) || asset.websiteComponents.includes("BrandWordmark");

  return {
    asset: enriched,
    previewUrl: damImageApiPath(asset.id),
    usage: {
      locations,
      pageCount: countUniquePages(locations),
      distribution,
      distributionCount: countActiveDistributionChannels(distribution),
    },
    altText: enriched.altText || "",
    seoScore: seo.score,
    accessibilityScore: accessibility.score,
    fileSizeKb,
    fileSizeLabel: formatFileSize(fileSizeKb !== null ? fileSizeKb * 1024 : null),
    optimisationStatus: resolveOptimisationStatus(enriched, webp, avif, fileSizeKb),
    webp,
    avif,
    lazyLoading: {
      enabled: !isPriority,
      note: isPriority
        ? "Loaded with priority — above the fold"
        : "Lazy loaded via DamImage",
    },
    blurPlaceholder: {
      configured: Boolean(enriched.blurPlaceholder),
      value: enriched.blurPlaceholder || null,
    },
    crops: buildCropPreviews(enriched),
    lastModified: discovery
      ? new Date(discovery.mtimeMs).toISOString()
      : enriched.lastModified || null,
    versions: buildVersionEntries(enriched, activeSrc),
    reports: { accessibility, seo, performance },
    creativeBrief: (() => {
      const brief = getCreativeBriefForAsset(enriched);
      if (!brief) return null;
      return {
        ...brief,
        imagePrompt: brief.imagePrompt ?? buildImagePrompt(enriched) ?? undefined,
      };
    })(),
  };
}

export function buildAssetSummary(assetId: string): AssetSummary | null {
  const profile = buildAssetProfile(assetId);
  if (!profile) return null;

  return {
    id: profile.asset.id,
    previewUrl: profile.previewUrl,
    pageCount: profile.usage.pageCount,
    seoScore: profile.seoScore,
    accessibilityScore: profile.accessibilityScore,
    fileSizeLabel: profile.fileSizeLabel,
    optimisationStatus: profile.optimisationStatus,
    webpAvailable: profile.webp.available,
    avifAvailable: profile.avif.available,
    hasBlur: profile.blurPlaceholder.configured,
    lazyLoading: profile.lazyLoading.enabled,
  };
}
