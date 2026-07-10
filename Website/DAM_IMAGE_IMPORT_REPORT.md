# RC22 — DAM Image Import and Publication Report

**Date:** 2026-07-10  
**Source ZIP:** `High quality Danish images.zip`  
**Pipeline:** `publishAssetImage` → `public/images/.../{ASSET_ID}/published.jpg` + variants

---

## 1. Total images uploaded

**107** PNG files (excluding `__MACOSX`)

## 2. Total images matched

**36** matched to Planned DAM assets and published

## 3. Total assets changed to Published

**36** (catalog now **67 / 67 published**, **0 Planned remaining**)

## 4. Total images still unmatched

**71** uploaded files not assigned to a DAM asset (see §6 and unmatched list below)

## 5. Total Planned assets still missing

**0**

## 6. Uncertain matches needing human review

| Uploaded filename | Asset ID | Scene / title | Confidence | Action |
|---|---|---|---|---|
| `caregiver_portrait.png` | PC-01-005 | The Window Light Portrait | high | Published — confirm vs `hero_morning_light.png` |
| `lifestyle_kitchen.png` | PC-02-007 | Practical Help — The Right Tool | medium | Published — best kitchen brief fit; no exact `practical_help` file |
| `uniform_detail_flat.png` | PC-06-034 | Uniform — The Detail | high | Published — confirm vs embroidery-only preference |
| `garden_season_v2.png` | PC-08-046 | Garden — The Season | high | Published — preferred over `garden_season.png` |

### Exact / high matches published (no review required)

| Uploaded filename | Asset ID | Confidence | Action |
|---|---|---|---|
| `walking_together_side_by_side.png` | PC-01-003 | exact | Published |
| `nursing_quiet_expertise.png` | PC-02-008 | exact | Published |
| `physiotherapy.png` | PC-02-009 | exact | Published |
| `occupational_therapy.png` | PC-02-010 | exact | Published |
| `medication_precise_calm.png` | PC-02-011 | exact | Published |
| `dementia_support.png` | PC-02-012 | exact | Published |
| `meal_preparation.png` | PC-02-014 | exact | Published |
| `family_support.png` | PC-02-015 | exact | Published |
| `leadership_meeting.png` | PC-03-018 | exact | Published |
| `staff_discussion.png` | PC-03-019 | exact | Published |
| `office_space.png` | PC-03-020 | exact | Published |
| `documentation_care_record.png` | PC-04-021 | exact | Published |
| `care_planning.png` | PC-04-022 | exact | Published |
| `quality_review.png` | PC-04-023 | exact | Published |
| `team_briefing.png` | PC-04-024 | exact | Published |
| `home_visit_arrival.png` | PC-04-025 | exact | Published |
| `reporting_transparency.png` | PC-05-027 | exact | Published |
| `collaboration_bridge.png` | PC-05-028 | exact | Published |
| `community_care.png` | PC-05-029 | exact | Published |
| `new_employee_welcome.png` | PC-06-031 | exact | Published |
| `team_culture.png` | PC-06-032 | exact | Published |
| `mentoring_guide.png` | PC-06-033 | exact | Published |
| `quiet_reflection.png` | PC-07-037 | exact | Published |
| `gratitude_letter.png` | PC-07-038 | exact | Published |
| `legacy_next_generation.png` | PC-07-039 | exact | Published |
| `hands_caregiver_touch.png` | PC-08-040 | exact | Published |
| `uniform_embroidery.png` | PC-08-041 | exact | Published |
| `coffee_table_ritual.png` | PC-08-042 | exact | Published |
| `walking_together.png` | PC-08-043 | exact | Published |
| `door_greeting.png` | PC-08-044 | exact | Published |
| `reading_together.png` | PC-08-045 | exact | Published |
| `living_room_conversation.png` | PC-08-048 | exact | Published |

### Unmatched uploads (not imported — no Planned slot / brand already published)

Left unmatched on purpose: logo/brand files (do not overwrite published brand assets), alternate hero/lifestyle/detail/investor/tech frames, and duplicates (`garden_season.png` superseded by v2).

Examples: `logo_*`, `hero_*`, `lifestyle_*` (except kitchen), `detail_*`, `investor_*`, `muni_*`, `op_*`, `tech_*`, `ceo_portrait.png`, `gentle_arrival.png` (PC-01-002 already published), `staff_training.png` (PC-06-030 already published).

## 7. Public pages updated

Wiring updated via `ASSET_IDS` / `PHOTOGRAPHY` / site usage maps (no page redesign):

| Route | Image wiring |
|---|---|
| `/` | Hero rotation uses 6 RC22 imports + PC-01-001 |
| `/services` | Six service categories use dedicated published assets |
| `/om-os` | Existing about/leadership assets; leadership section → PC-03-018 |
| `/min-historie` | Founder assets unchanged (already published) |
| `/vores-loefte` | Crest / existing DAM resolution |
| `/priser` | No dedicated Planned slot; inherits site imagery |
| `/kontakt` | Companionship / personal-care published image |
| `/tillid` | PC-04-021 documentation |
| `/dokumentation` | PC-04-021 documentation |
| `/karriere` | Careers hero → PC-06-032; training → PC-06-030 |
| `/whistleblowing` | No dedicated Planned editorial slot |

## 8. Hero rotation images now used

| Order | Asset ID | Source |
|---|---|---|
| 1 | PC-01-001 | Existing published |
| 2 | PC-01-003 | RC22 import |
| 3 | PC-01-005 | RC22 import |
| 4 | PC-04-025 | RC22 import |
| 5 | PC-08-043 | RC22 import |
| 6 | PC-08-044 | RC22 import |
| 7 | PC-08-048 | RC22 import |

**6 of 7** rotation frames are from the imported set (≥5 required).

## 9. Services images now used

| Service | Asset ID | Upload / note |
|---|---|---|
| Praktisk hjælp | PC-02-007 | `lifestyle_kitchen.png` |
| Personlig pleje | PC-02-006 | Existing published morning ritual |
| Sygeplejeydelser | PC-02-008 | `nursing_quiet_expertise.png` |
| Fysioterapi | PC-02-009 | `physiotherapy.png` |
| Ergoterapi | PC-02-010 | `occupational_therapy.png` |
| Tilkøbsydelser | PC-02-015 | `family_support.png` |

## 10. Optimisation still required

Completed by existing DAM pipeline for all 36 imports:

- Master JPEG (`published.jpg`)
- Responsive variants (via `generateAssetVariants`)
- Blur placeholder
- Catalog metadata (`src`, `filename`, `status`, `uploadDate`, `versionNumber`, variants)

Not invented / not batch-applied to the **71 unmatched** ZIP files:

- No new assets created for surplus lifestyle/hero/detail frames
- Brand logo PNGs not re-imported over published brand assets
- Optional human review of the four medium/high uncertain matches above
- Optional second-pass: promote strongest unmatched frames into future Planned slots if the photography guide expands

---

## Re-run

```bash
npm run dam:import -- "/path/to/High quality Danish images"
```
