import "server-only";

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import type { DamAsset, ImageVariant } from "@/lib/dam/types";
import { absolutePathToPublicUrl } from "@/lib/dam/paths";

type VariantSpec = {
  suffix: string;
  width: number;
  quality?: number;
};

const RESPONSIVE_SPECS: VariantSpec[] = [
  { suffix: "-tablet", width: 1200, quality: 82 },
  { suffix: "-mobile", width: 768, quality: 80 },
  { suffix: "-thumb", width: 400, quality: 78 },
  { suffix: "@2x", width: 0, quality: 85 },
];

function writeBuffer(filePath: string, buffer: Buffer): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, buffer);
}

async function resizeToWidth(
  source: Buffer,
  targetWidth: number,
  quality: number,
): Promise<Buffer> {
  return sharp(source)
    .resize({ width: targetWidth, withoutEnlargement: false })
    .jpeg({ quality, mozjpeg: true })
    .toBuffer();
}

/** Generate WebP, AVIF, and responsive JPEG variants from a published master image */
export async function generateAssetVariants(
  masterAbsolutePath: string,
  asset: DamAsset,
): Promise<Partial<Record<ImageVariant, string>>> {
  const masterBuffer = fs.readFileSync(masterAbsolutePath);
  const dir = path.dirname(masterAbsolutePath);
  const baseName = path.basename(masterAbsolutePath, path.extname(masterAbsolutePath));
  const metadata = await sharp(masterBuffer).metadata();
  const masterWidth = metadata.width ?? asset.width;

  const variants: Partial<Record<ImageVariant, string>> = {
    desktop: absolutePathToPublicUrl(masterAbsolutePath),
  };

  const webpPath = path.join(dir, `${baseName}.webp`);
  await sharp(masterBuffer)
    .resize({ width: asset.width, height: asset.height, fit: "cover" })
    .webp({ quality: 82 })
    .toFile(webpPath);
  variants.webp = absolutePathToPublicUrl(webpPath);

  const avifPath = path.join(dir, `${baseName}.avif`);
  await sharp(masterBuffer)
    .resize({ width: asset.width, height: asset.height, fit: "cover" })
    .avif({ quality: 65 })
    .toFile(avifPath);
  variants.avif = absolutePathToPublicUrl(avifPath);

  for (const spec of RESPONSIVE_SPECS) {
    const targetWidth =
      spec.suffix === "@2x" ? Math.min(masterWidth * 2, asset.width * 2) : spec.width;
    const variantPath = path.join(dir, `${baseName}${spec.suffix}.jpg`);
    const resized = await resizeToWidth(masterBuffer, targetWidth, spec.quality ?? 82);
    writeBuffer(variantPath, resized);

    if (spec.suffix === "-tablet") variants.tablet = absolutePathToPublicUrl(variantPath);
    if (spec.suffix === "-mobile") variants.mobile = absolutePathToPublicUrl(variantPath);
    if (spec.suffix === "-thumb") variants.thumbnail = absolutePathToPublicUrl(variantPath);
    if (spec.suffix === "@2x") variants.retina = absolutePathToPublicUrl(variantPath);
  }

  const ogPath = path.join(dir, `${baseName}-og.jpg`);
  await sharp(masterBuffer)
    .resize({ width: 1200, height: 630, fit: "cover" })
    .jpeg({ quality: 82 })
    .toFile(ogPath);
  variants["open-graph"] = absolutePathToPublicUrl(ogPath);

  const squarePath = path.join(dir, `${baseName}-square.jpg`);
  await sharp(masterBuffer)
    .resize({ width: 1080, height: 1080, fit: "cover" })
    .jpeg({ quality: 82 })
    .toFile(squarePath);
  variants.square = absolutePathToPublicUrl(squarePath);

  return variants;
}

export async function processMasterImage(
  input: Buffer,
  asset: DamAsset,
): Promise<Buffer> {
  return sharp(input)
    .rotate()
    .resize({
      width: asset.width,
      height: asset.height,
      fit: "cover",
      position: "centre",
    })
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();
}

export async function generateBlurPlaceholder(masterAbsolutePath: string): Promise<string> {
  const buffer = await sharp(masterAbsolutePath)
    .resize(16, 10, { fit: "cover" })
    .webp({ quality: 20 })
    .toBuffer();

  return `data:image/webp;base64,${buffer.toString("base64")}`;
}
