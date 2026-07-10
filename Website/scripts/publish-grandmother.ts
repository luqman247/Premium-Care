import fs from "node:fs";
import sharp from "sharp";
import catalogData from "../data/dam/assets.json";
import { publishAssetImage } from "../lib/dam/asset-publish";
import { persistAssetToCatalog } from "../lib/dam/catalog-persist";
import type { DamCatalog } from "../lib/dam/types";

async function main(): Promise<void> {
  const source =
    process.argv[2] ??
    "/tmp/pc-grandma/grandmother-memory.png";
  if (!fs.existsSync(source)) throw new Error(`Missing file: ${source}`);

  const catalog = catalogData as DamCatalog;
  const asset = catalog.assets.find((entry) => entry.id === "PC-07-035");
  if (!asset) throw new Error("PC-07-035 not found");

  const input = fs.readFileSync(source);
  const meta = await sharp(input).rotate().metadata();
  const width = meta.width ?? 900;
  const height = meta.height ?? 1200;

  // Preserve portrait geometry so processMasterImage does not force landscape cover-crop
  persistAssetToCatalog("PC-07-035", {
    width,
    height,
    aspectRatio: Number((width / height).toFixed(4)),
    orientation: "portrait",
    objectPosition: "center 18%",
  });

  const refreshed = (catalogData as DamCatalog).assets.find(
    (entry) => entry.id === "PC-07-035",
  );
  // Re-read from disk after persist
  const freshCatalog = JSON.parse(
    fs.readFileSync("data/dam/assets.json", "utf8"),
  ) as DamCatalog;
  const fresh = freshCatalog.assets.find((entry) => entry.id === "PC-07-035");
  if (!fresh) throw new Error("PC-07-035 missing after patch");

  const { publicPath } = await publishAssetImage(fresh, input, {
    mime: "image/jpeg",
    version: "published",
    source: "upload",
  });

  console.log(
    `PC-07-035 published → ${publicPath} (${width}×${height}, portrait)`,
  );
  void refreshed;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
