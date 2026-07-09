import "server-only";

import fs from "node:fs";
import path from "node:path";
import { buildAssetProfile } from "@/lib/dam/asset-profile";
import { persistAssetToCatalog } from "@/lib/dam/catalog-persist";
import { invalidateFilesystemCache } from "@/lib/dam/filesystem-sync";
import { buildImagePrompt } from "@/lib/dam/image-prompt";
import { buildGlobalImageIndex, formatPromptSlug } from "@/lib/dam/prompt-index";
import { buildPromptDocument, renderPromptMarkdown } from "@/lib/dam/prompt-document";
import { writePromptFile } from "@/lib/dam/prompt-files";
import { getAllAssets } from "@/lib/dam/registry";
import {
  absolutePathToPublicUrl,
  getMediaRootsForAsset,
  getPublicRoot,
  type VersionLifecycleStatus,
} from "@/lib/dam/paths";
import type { AssetProfile, DamAsset } from "@/lib/dam/types";
import {
  generateAssetVariants,
  generateBlurPlaceholder,
  processMasterImage,
} from "@/lib/dam/variant-generator";

const EXT_BY_MIME: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/avif": ".avif",
};

export type PublishResult = {
  publicPath: string;
  profile: AssetProfile;
};

function syncPromptFileAfterPublish(assetId: string): void {
  const assets = getAllAssets();
  const index = buildGlobalImageIndex(assets);
  const globalIndex = index.get(assetId);
  if (!globalIndex) return;

  const published = getAllAssets().find((entry) => entry.id === assetId);
  if (!published) return;

  const document = buildPromptDocument(
    { ...published, status: "published" },
    globalIndex,
  );
  if (!document) return;

  writePromptFile(formatPromptSlug(globalIndex), renderPromptMarkdown(document));
}

/** Write, optimise, and publish an asset image — full DAM lifecycle */
export async function publishAssetImage(
  asset: DamAsset,
  input: Buffer,
  options: {
    mime?: string;
    version?: VersionLifecycleStatus;
    source?: "upload" | "generated";
  } = {},
): Promise<PublishResult> {
  const version = options.version ?? "published";
  const mediaRoot = getMediaRootsForAsset(asset)[0] ?? "images/editorial";
  const versionDir = path.join(getPublicRoot(), mediaRoot, asset.id);

  fs.mkdirSync(versionDir, { recursive: true });

  const masterBuffer = await processMasterImage(input, asset);
  const masterFilename = `${version}.jpg`;
  const masterAbsolutePath = path.join(versionDir, masterFilename);

  fs.writeFileSync(masterAbsolutePath, masterBuffer);

  const publicPath = absolutePathToPublicUrl(masterAbsolutePath);
  const variants = await generateAssetVariants(masterAbsolutePath, asset);
  const blurPlaceholder = await generateBlurPlaceholder(masterAbsolutePath);
  const now = new Date().toISOString();
  const versionNote =
    options.source === "generated"
      ? "AI-generated from Editorial Photography Guide prompt"
      : "Uploaded via DAM";

  persistAssetToCatalog(asset.id, {
    src: publicPath,
    status: "published",
    uploadDate: now,
    dateShot: now.split("T")[0],
    filename: path.basename(publicPath),
    variants,
    blurPlaceholder,
    versionNumber: (asset.versionNumber ?? 0) + 1,
    versions: [
      ...asset.versions,
      {
        versionNumber: (asset.versionNumber ?? 0) + 1,
        src: publicPath,
        uploadDate: now,
        note: versionNote,
        status: version,
      },
    ],
    creativeBrief: asset.creativeBrief
      ? {
          ...asset.creativeBrief,
          imagePrompt: buildImagePrompt(asset) ?? asset.creativeBrief.imagePrompt,
        }
      : undefined,
  });

  syncPromptFileAfterPublish(asset.id);

  invalidateFilesystemCache();

  const profile = buildAssetProfile(asset.id);
  if (!profile) {
    throw new Error(`Failed to build profile for ${asset.id}`);
  }

  return { publicPath, profile };
}

export function detectMime(buffer: Buffer): string {
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return "image/jpeg";
  if (buffer[0] === 0x89 && buffer[1] === 0x50) return "image/png";
  if (buffer.slice(0, 4).toString() === "RIFF") return "image/webp";
  return "image/jpeg";
}

export function extensionForMime(mime: string): string {
  return EXT_BY_MIME[mime] ?? ".jpg";
}
