import type { MetadataRoute } from "next";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { resolveAsset } from "@/lib/dam/resolve";

export default function manifest(): MetadataRoute.Manifest {
  const icon192 = resolveAsset(ASSET_IDS.brandAppIcon192);
  const icon512 = resolveAsset(ASSET_IDS.brandAppIcon512);

  return {
    name: "Premium Care",
    short_name: "Premium Care",
    description: "Hjemmepleje i Aarhus og Østjylland",
    lang: "da",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#061D37",
    theme_color: "#061D37",
    icons: [
      { src: icon192.src, sizes: "192x192", type: "image/png" },
      { src: icon512.src, sizes: "512x512", type: "image/png" },
      {
        src: icon512.src,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
