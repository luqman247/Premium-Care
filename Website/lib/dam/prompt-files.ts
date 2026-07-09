import fs from "node:fs";
import path from "node:path";
import type { DamAsset } from "@/lib/dam/types";
import { buildGlobalImageIndex } from "@/lib/dam/prompt-index";
import { buildPromptDocument, renderPromptMarkdown } from "@/lib/dam/prompt-document";

export const PROMPTS_DIR = path.join(process.cwd(), "content/media/prompts");

export function ensurePromptsDirectory(): void {
  fs.mkdirSync(PROMPTS_DIR, { recursive: true });
}

export function listPromptSlugs(): string[] {
  ensurePromptsDirectory();
  return fs
    .readdirSync(PROMPTS_DIR)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => filename.replace(/\.md$/, ""))
    .sort();
}

export function readPromptFile(slug: string): string | null {
  const filePath = path.join(PROMPTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

export function writePromptFile(slug: string, markdown: string): string {
  ensurePromptsDirectory();
  const filePath = path.join(PROMPTS_DIR, `${slug}.md`);
  fs.writeFileSync(filePath, markdown, "utf8");
  return filePath;
}

export type PromptFileWriteResult = {
  slug: string;
  assetId: string;
  path: string;
};

/** Write markdown prompt files for every planned asset */
export function writePlannedPromptFiles(assets: DamAsset[]): PromptFileWriteResult[] {
  const index = buildGlobalImageIndex(assets);
  const results: PromptFileWriteResult[] = [];

  for (const asset of assets) {
    if (asset.status !== "planned") continue;

    const globalIndex = index.get(asset.id);
    if (!globalIndex) continue;

    const document = buildPromptDocument(asset, globalIndex);
    if (!document) continue;

    const filePath = writePromptFile(document.slug, renderPromptMarkdown(document));
    results.push({ slug: document.slug, assetId: asset.id, path: filePath });
  }

  return results;
}

export function buildPlannedPromptDocuments(assets: DamAsset[]) {
  const index = buildGlobalImageIndex(assets);

  return assets
    .filter((asset) => asset.status === "planned")
    .map((asset) => {
      const globalIndex = index.get(asset.id);
      if (!globalIndex) return null;
      return buildPromptDocument(asset, globalIndex);
    })
    .filter((document): document is NonNullable<typeof document> => document !== null)
    .sort((a, b) => a.slug.localeCompare(b.slug));
}
