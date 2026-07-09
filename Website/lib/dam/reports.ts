import type {
  AccessibilityReport,
  DamAsset,
  PerformanceReport,
  SeoReport,
} from "@/lib/dam/types";
import { estimateFileSizeKb } from "@/lib/dam/optimization";
import { isAssetUsed } from "@/lib/dam/usage";
import { getAllAssets } from "@/lib/dam/registry";

export function buildAccessibilityReport(asset: DamAsset): AccessibilityReport {
  const issues: string[] = [];
  const passed: string[] = [];

  if (!asset.altText?.trim()) {
    issues.push("Missing alt text");
  } else if (asset.altText.length < 20) {
    issues.push("Alt text is too short for meaningful description");
  } else {
    passed.push("Alt text present and descriptive");
  }

  if (!asset.src && asset.status === "published") {
    issues.push("Published asset has no source file");
  } else if (asset.src) {
    passed.push("Source file available");
  }

  if (asset.width > 3000 || asset.height > 3000) {
    issues.push("Image dimensions exceed recommended 3000px");
  } else {
    passed.push("Dimensions within recommended limits");
  }

  const score = Math.round((passed.length / (passed.length + issues.length)) * 100);
  return { score, issues, passed };
}

export function buildSeoReport(asset: DamAsset): SeoReport {
  const issues: string[] = [];
  const passed: string[] = [];

  if (!asset.seoTitle?.trim()) issues.push("Missing SEO title");
  else passed.push("SEO title defined");

  if (!asset.seoDescription?.trim()) issues.push("Missing SEO description");
  else if (asset.seoDescription.length < 50)
    issues.push("SEO description is too short");
  else passed.push("SEO description adequate");

  if (!asset.openGraphDescription?.trim())
    issues.push("Missing Open Graph description");
  else passed.push("Open Graph description defined");

  if (!asset.altText?.trim()) issues.push("Alt text missing — affects image SEO");
  else passed.push("Alt text supports image SEO");

  const score = Math.round((passed.length / (passed.length + issues.length)) * 100);
  return { score, issues, passed };
}

export function buildPerformanceReport(asset: DamAsset): PerformanceReport {
  const issues: string[] = [];
  const passed: string[] = [];
  const estimatedLoadKb = estimateFileSizeKb(asset);

  if (estimatedLoadKb > 500) issues.push(`Large file estimate (~${estimatedLoadKb}KB)`);
  else passed.push(`Reasonable file size (~${estimatedLoadKb}KB)`);

  if (!asset.variants.webp && asset.src) {
    issues.push("WebP variant not generated");
  } else if (asset.variants.webp) {
    passed.push("WebP variant available");
  }

  if (!asset.variants.avif && asset.src) {
    issues.push("AVIF variant not generated");
  } else if (asset.variants.avif) {
    passed.push("AVIF variant available");
  }

  if (!asset.blurPlaceholder) issues.push("No blur placeholder for lazy loading");
  else passed.push("Blur placeholder configured");

  const score = Math.round((passed.length / (passed.length + issues.length)) * 100);
  return { score, issues, passed, estimatedLoadKb };
}

export function getGlobalAccessibilityIssues(): string[] {
  const issues: string[] = [];
  const assets = getAllAssets();

  const missingAlt = assets.filter((a) => !a.altText?.trim() && a.src);
  if (missingAlt.length > 0) {
    issues.push(`${missingAlt.length} assets missing alt text`);
  }

  const oversized = assets.filter((a) => a.width > 3000 || a.height > 3000);
  if (oversized.length > 0) {
    issues.push(`${oversized.length} oversized images`);
  }

  const filenames = assets.map((a) => a.filename).filter(Boolean);
  const dupes = filenames.filter((f, i) => filenames.indexOf(f) !== i);
  if (dupes.length > 0) {
    issues.push(`${new Set(dupes).size} duplicate filenames`);
  }

  const unused = assets.filter((a) => a.status === "published" && !isAssetUsed(a));
  if (unused.length > 0) {
    issues.push(`${unused.length} published but unused assets`);
  }

  const broken = assets.filter((a) => a.status === "published" && !a.src);
  if (broken.length > 0) {
    issues.push(`${broken.length} broken references (published without file)`);
  }

  return issues;
}
