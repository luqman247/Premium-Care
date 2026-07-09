import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/company";
import { TRUST_POLICIES } from "@/lib/trust-policies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.url;
  const lastModified = new Date();

  const staticPages = [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/services`, priority: 0.9 },
    { url: `${baseUrl}/priser`, priority: 0.8 },
    { url: `${baseUrl}/om-os`, priority: 0.8 },
    { url: `${baseUrl}/ledelse-og-governance`, priority: 0.9 },
    { url: `${baseUrl}/min-historie`, priority: 0.8 },
    { url: `${baseUrl}/kontakt`, priority: 0.9 },
    { url: `${baseUrl}/kommuner`, priority: 0.8 },
    { url: `${baseUrl}/karriere`, priority: 0.7 },
    { url: `${baseUrl}/tillid`, priority: 0.9 },
  ];

  const policyPages = TRUST_POLICIES.map((policy) => ({
    url: `${baseUrl}/${policy.slug}`,
    priority: 0.7,
  }));

  return [...staticPages, ...policyPages].map((page) => ({
    url: page.url,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));
}
