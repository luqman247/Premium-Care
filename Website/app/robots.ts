import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/company";

const productionHost = new URL(COMPANY.url).host;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/media/", "/api/"],
    },
    sitemap: `${COMPANY.url}/sitemap.xml`,
    host: productionHost,
  };
}
