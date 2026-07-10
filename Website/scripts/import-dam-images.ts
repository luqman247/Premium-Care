/**
 * RC22 — Import matched ZIP images into Planned DAM assets via publishAssetImage.
 *
 * Usage:
 *   npx tsx scripts/import-dam-images.ts [/path/to/extracted/images]
 */
import fs from "node:fs";
import path from "node:path";
import catalogData from "../data/dam/assets.json";
import { publishAssetImage } from "../lib/dam/asset-publish";
import type { DamCatalog } from "../lib/dam/types";

type MatchConfidence = "exact" | "high" | "medium";

type ImportMatch = {
  assetId: string;
  filename: string;
  confidence: MatchConfidence;
  note: string;
};

/**
 * Filename → Planned asset matches.
 * Exact/high only for clear title/slug alignment. Medium for best-fit kitchen/portrait.
 */
export const IMPORT_MATCHES: ImportMatch[] = [
  {
    assetId: "PC-01-003",
    filename: "walking_together_side_by_side.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-01-005",
    filename: "caregiver_portrait.png",
    confidence: "high",
    note: "Window Light Portrait — portrait by natural light; hero_morning_light.png is alternate",
  },
  {
    assetId: "PC-02-007",
    filename: "lifestyle_kitchen.png",
    confidence: "medium",
    note: "Practical Help kitchen brief — no exact practical_help filename",
  },
  {
    assetId: "PC-02-008",
    filename: "nursing_quiet_expertise.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-02-009",
    filename: "physiotherapy.png",
    confidence: "exact",
    note: "Exact service title match",
  },
  {
    assetId: "PC-02-010",
    filename: "occupational_therapy.png",
    confidence: "exact",
    note: "Exact service title match",
  },
  {
    assetId: "PC-02-011",
    filename: "medication_precise_calm.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-02-012",
    filename: "dementia_support.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-02-014",
    filename: "meal_preparation.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-02-015",
    filename: "family_support.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-03-018",
    filename: "leadership_meeting.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-03-019",
    filename: "staff_discussion.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-03-020",
    filename: "office_space.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-04-021",
    filename: "documentation_care_record.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-04-022",
    filename: "care_planning.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-04-023",
    filename: "quality_review.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-04-024",
    filename: "team_briefing.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-04-025",
    filename: "home_visit_arrival.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-05-027",
    filename: "reporting_transparency.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-05-028",
    filename: "collaboration_bridge.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-05-029",
    filename: "community_care.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-06-031",
    filename: "new_employee_welcome.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-06-032",
    filename: "team_culture.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-06-033",
    filename: "mentoring_guide.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-06-034",
    filename: "uniform_detail_flat.png",
    confidence: "high",
    note: "Uniform detail — flat lay matches careers uniform brief",
  },
  {
    assetId: "PC-07-037",
    filename: "quiet_reflection.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-07-038",
    filename: "gratitude_letter.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-07-039",
    filename: "legacy_next_generation.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-08-040",
    filename: "hands_caregiver_touch.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-08-041",
    filename: "uniform_embroidery.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-08-042",
    filename: "coffee_table_ritual.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-08-043",
    filename: "walking_together.png",
    confidence: "exact",
    note: "Exact title slug match (distinct from PC-01-003 side-by-side)",
  },
  {
    assetId: "PC-08-044",
    filename: "door_greeting.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-08-045",
    filename: "reading_together.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
  {
    assetId: "PC-08-046",
    filename: "garden_season_v2.png",
    confidence: "high",
    note: "Garden season — preferred v2 over garden_season.png",
  },
  {
    assetId: "PC-08-048",
    filename: "living_room_conversation.png",
    confidence: "exact",
    note: "Exact title slug match",
  },
];

async function main(): Promise<void> {
  const sourceDir =
    process.argv[2] ??
    "/tmp/pc-dam-import/High quality Danish images";

  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Source directory not found: ${sourceDir}`);
  }

  const catalog = catalogData as DamCatalog;
  const byId = new Map(catalog.assets.map((asset) => [asset.id, asset]));

  const results: Array<{
    assetId: string;
    filename: string;
    confidence: MatchConfidence;
    publicPath: string;
  }> = [];

  for (const match of IMPORT_MATCHES) {
    const asset = byId.get(match.assetId);
    if (!asset) {
      throw new Error(`Asset not found in catalog: ${match.assetId}`);
    }
    if (asset.status === "published" && asset.src) {
      console.log(`SKIP ${match.assetId} — already published at ${asset.src}`);
      continue;
    }

    const filePath = path.join(sourceDir, match.filename);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Missing upload file: ${filePath}`);
    }

    const buffer = fs.readFileSync(filePath);
    console.log(
      `Publishing ${match.assetId} ← ${match.filename} (${match.confidence})…`,
    );
    const { publicPath } = await publishAssetImage(asset, buffer, {
      mime: "image/png",
      version: "published",
      source: "upload",
    });
    results.push({
      assetId: match.assetId,
      filename: match.filename,
      confidence: match.confidence,
      publicPath,
    });
    console.log(`  → ${publicPath}`);
  }

  console.log(`\nPublished ${results.length} assets.`);
  for (const result of results) {
    console.log(
      `  ${result.assetId}  ${result.confidence.padEnd(6)}  ${result.filename} → ${result.publicPath}`,
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
