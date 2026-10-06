import type { MetadataRoute } from "next";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { COMPANY } from "@/lib/company";
import { resolveAsset } from "@/lib/dam/resolve";

export default function manifest(): MetadataRoute.Manifest {
  const icon192 = resolveAsset(ASSET_IDS.brandAppIcon192);
  const icon512 = resolveAsset(ASSET_IDS.brandAppIcon512);
  const src192 = icon192.publicSrc ?? icon192.src;
  const src512 = icon512.publicSrc ?? icon512.src;

  return {
    name: COMPANY.brandName,
    short_name: COMPANY.brandName,
    description: "Hjemmepleje i Aarhus og Østjylland",
    lang: "da",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#16222F",
    theme_color: "#16222F",
    icons: [
      { src: src192, sizes: "192x192", type: "image/png" },
      { src: src512, sizes: "512x512", type: "image/png" },
      {
        src: src512,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
