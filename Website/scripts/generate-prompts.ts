import catalogData from "../data/dam/assets.json";
import type { DamCatalog } from "../lib/dam/types";
import { writePlannedPromptFiles } from "../lib/dam/prompt-files";

const catalog = catalogData as DamCatalog;
const results = writePlannedPromptFiles(catalog.assets);

console.log(`Wrote ${results.length} prompt files to content/media/prompts/`);
for (const result of results) {
  console.log(`  ${result.slug}.md → ${result.assetId}`);
}
