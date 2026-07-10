# RC24 — Missing DAM Image Mapping Fix Report

**Date:** 2026-07-10  
**Focus asset:** PC-07-035 / IMG 035 — “Grandmother Memory — The Photograph”

---

## 1. PC-07-035 diagnosis

| Check | Result |
|---|---|
| Exists in catalogue | Yes |
| Status | **Published** (already) |
| Valid `src` | `/images/PC-07-035/published.jpg` |
| File on disk | Yes (2200×1467 JPEG, variants present) |
| `/media/library` | Shows as Published |
| `/media/assets/PC-07-035` | Loads |
| `/api/dam/image/PC-07-035` | HTTP 200 |
| Used on `/min-historie` before RC24 | **No** |

**Root cause:** Not a missing file or Planned status. The asset was published in the DAM but **never wired** into the Founder Story page. `/min-historie` only rendered `PC-07-036` (Danish Home / aquarium).

No matching `grandmother*` filename existed in the RC22 ZIP; the published master was already on disk from an earlier DAM publish.

---

## 2. PC-07-035 fix

- Added `ASSET_IDS.founderGrandmother = "PC-07-035"`
- Placed `DamImage` in the **«Danmark, Sønderborg og min farmor»** section on `/min-historie`
- Updated DAM site-locations + usage maps to mark Min historie usage
- Status remains **Published** (no re-import required)

---

## 3. All other mismatched / unused published assets found

| Asset ID | Img # | Title | Expected page | Expected filename | Actual file | Status | Problem | Fix applied |
|---|---|---|---|---|---|---|---|---|
| PC-07-035 | 035 | Grandmother Memory — The Photograph | min-historie | grandmother-memory… | `published.jpg` on disk | Published | Not wired to page | Wired to farmor section |
| PC-07-038 | 038 | Gratitude — The Letter | min-historie | gratitude_letter.png | `published.jpg` | Published | Not wired to page | Wired to «give tilbage» |
| PC-07-039 | 039 | Legacy — The Next Generation | min-historie | legacy_next_generation.png | `published.jpg` | Published | Not wired to page | Wired to closing section |
| PC-07-036 | 036 | Danish Home — The Roots | min-historie | (existing) | `founder-tandsbjerg-aquarium.png` | Published | Already used | Kept at Tandsbjerg figure |
| PC-07-037 | 037 | Quiet Reflection — The Moment | min-historie / homepage | quiet_reflection.png | `published.jpg` | Published | Used on homepage compass | Left on homepage (intentional; avoid double use) |
| PC-02-011 | 011 | Medication — Precise Calm | services | medication_precise_calm.png | on disk | Published | Catalogue depth; not a page slot | No page change (human decision) |
| PC-02-012 | 012 | Dementia Support | services | dementia_support.png | on disk | Published | Catalogue depth | Deferred |
| PC-02-014 | 014 | Meal Preparation | services | meal_preparation.png | on disk | Published | Catalogue depth | Deferred |
| PC-03-019 | 019 | Staff Discussion | about/ledelse | staff_discussion.png | on disk | Published | Not on page | Deferred |
| PC-03-020 | 020 | Office Space | about/ledelse | office_space.png | on disk | Published | Not on page | Deferred |
| PC-04-023 | 023 | Quality Review | tillid/dokumentation | quality_review.png | on disk | Published | Not on page | Deferred |
| PC-04-024 | 024 | Team Briefing | tillid/dokumentation | team_briefing.png | on disk | Published | Not on page | Deferred |
| PC-05-027 | 027 | Reporting | kommuner | reporting_transparency.png | on disk | Published | Not on page | Deferred |
| PC-06-031/033/034 | — | Careers extras | karriere | matched | on disk | Published | Not on page | Deferred |
| PC-08-040–042, 049 | — | Detail shots | homepage/services | matched | on disk | Published | Catalogue / optional detail | Deferred |

**No Planned assets remain.** All 67 catalogue assets are Published with files on disk.

---

## 4. Uploaded images that were not connected

Still **71** surplus files from the RC22 ZIP (logos, alternate heroes, lifestyle/detail/investor/tech). No Planned slots remain to attach them to. Listed in `DAM_IMAGE_IMPORT_REPORT.md`.

---

## 5. DAM assets still missing real images

**None.** Published count = 67/67. Zero broken `src` paths.

---

## 6. Public pages fixed

| Page | Change |
|---|---|
| `/min-historie` | Added PC-07-035, PC-07-038, PC-07-039; kept PC-07-036 |
| Other public pages | No placeholder regressions |

---

## 7. Founder Story image mapping (after RC24)

| Section | Asset |
|---|---|
| Danmark, Sønderborg og min farmor | **PC-07-035** Grandmother Memory |
| Fra barn på plejehjemmet… | **PC-07-036** Danish Home / Tandsbjerg |
| Min måde at give tilbage | **PC-07-038** Gratitude |
| Det, vi ikke må glemme | **PC-07-039** Legacy |
| Homepage compass (related) | **PC-07-037** Quiet Reflection |

---

## 8. Remaining human decisions

1. Whether to place additional published service/careers/detail assets on their claimed pages (currently catalogue-only)
2. Whether any of the 71 unmatched ZIP files should become new Planned assets
3. Visual QA of PC-07-035 content vs the grandmother brief (file was pre-existing; no `grandmother*` name in ZIP)

---

## Final answers

1. **Was PC-07-035 found?** Yes  
2. **Was the image file found?** Yes — `public/images/PC-07-035/published.jpg`  
3. **What filename was matched?** Existing DAM master `published.jpg` (variants: webp/avif/mobile/tablet/thumb)  
4. **Is it now Published?** Yes (was already; now also **used**)  
5. **Where does it now appear?** `/min-historie` farmor section; `/media/library`; `/media/assets/PC-07-035`  
6. **Which other assets had the same issue?** PC-07-038, PC-07-039 (published, unused) — now wired. Others deferred as catalogue depth  
7. **Are any images still unmatched?** 71 ZIP surplus files; 0 Planned slots  
8. **Are any public pages still using placeholders?** No
