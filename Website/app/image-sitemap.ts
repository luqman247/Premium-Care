import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/company";
import { damImageApiPath } from "@/lib/dam/api-path";
import { getAllAssets } from "@/lib/dam/registry.server";

export default function imageSitemap(): MetadataRoute.Sitemap {
  const assets = getAllAssets().filter((a) => a.src && a.status === "published");

  return assets.map((asset) => ({
    url: `${COMPANY.url}${damImageApiPath(asset.id)}`,
    lastModified: asset.lastModified ? new Date(asset.lastModified) : new Date(),
    changeFrequency: "monthly",
    priority: asset.priority === "high" || asset.priority === "critical" ? 0.8 : 0.5,
  }));
}
