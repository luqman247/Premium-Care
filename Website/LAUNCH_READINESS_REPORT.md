# RC23 — Launch Readiness Report

**Date:** 2026-07-10  
**Scope:** Final visual QA after RC22 DAM image import  
**Commit message:** RC23 Final Visual QA and Launch Readiness

---

## 1. Public pages checked

| Route | Status | Notes |
|---|---|---|
| `/` | Pass | Hero + compass + pathways + trust + contact |
| `/services` | Pass | Six service pathways with distinct DAM images |
| `/om-os` | Pass | Closing image deduplicated from hero |
| `/min-historie` | Pass | Founder image retained (PC-07-036) |
| `/vores-loefte` | Pass | Text-led; no editorial conflict |
| `/priser` (Gratis hjemmepleje) | Pass | Text-led |
| `/kontakt` | Pass | Distinct editorial banner |
| `/tillid` | Pass | Documentation status labels only |
| `/dokumentation` | Pass | Distinct from tillid banner |
| `/whistleblowing` | Pass | Policy text; no Planned copy |
| `/karriere` (Bliv en del af teamet) | Pass | Team-culture editorial band |
| `/ledelse-og-ansvar` | Pass | Renamed from `/ledelse-og-governance` |
| `/media/library` | Pass | Admin only; Planned filter label OK |

Aliases: `/ledelse` → `/ledelse-og-ansvar`; `/ledelse-og-governance` → 308 → `/ledelse-og-ansvar`

---

## 2. Images fixed

- Homepage compass: `PC-07-037` (was same as founder `PC-07-036`)
- About closing: `PC-08-046` (was hero `PC-01-001`)
- Contact banner: `PC-08-045` (was services `PC-02-006`)
- Documentation banner: `PC-04-022` (was same as tillid `PC-04-021`)
- Careers band: `PC-06-032` (was training-only `PC-06-030`)
- Hero focal points per frame for cover crop
- Stronger cinematic veil for text contrast
- Slower hero pacing (20s / 4.2s fade / 8s initial delay)
- Service pathway mobile media height reduced
- Editorial banners shorter on mobile

---

## 3. Hero images used

| Order | Asset | Role |
|---|---|---|
| 1 | PC-01-001 | Morning light (existing) |
| 2 | PC-01-003 | Walking together |
| 3 | PC-01-005 | Window portrait |
| 4 | PC-04-025 | Home visit arrival |
| 5 | PC-08-043 | Walking path |
| 6 | PC-08-044 | Door greeting |
| 7 | PC-08-048 | Living room conversation |

**7 published frames** (6 from RC22 import). Ticker sits directly under the cinematic hero.

---

## 4. Remaining weak images (if any)

- Subjective: individual frames may still benefit from a future photography pass (faces, light balance)
- 71 unmatched ZIP files remain unused by design (no Planned slots; brand already published)
- No public Planned placeholders remain

---

## 5. Broken links fixed

- Leadership URL renamed to Danish `/ledelse-og-ansvar`
- Permanent redirect from `/ledelse-og-governance`
- Internal links, sitemap, and `/ledelse` redirect updated

---

## 6. Empty documents remaining

- Empty 431-byte PDFs **removed** from `public/documents/`
- Public catalogue still shows status **«Under udarbejdelse»** / **«Kommer snart»** / **«Ikke offentliggjort endnu»** — no fake downloads

---

## 7. Remaining placeholders

- Public pages: **none** (Planned / Missing / planned.jpg)
- DAM `/media/library`: Planned status filter label only (admin)
- Form `placeholder=` attributes on kontakt (Danish UX — not image placeholders)

---

## 8. Mobile issues fixed

- Hero veil strengthened for readable ivory type
- Per-frame object-position for safer face/subject crops
- Service pathway media height capped on small screens
- Editorial banner height reduced on mobile
- CTA stack already column → row at 640px (retained)

---

## 9. Build result

| Check | Result |
|---|---|
| `npm run lint` | Pass |
| `npm run build` | Pass |
| `npm run dev` | Pass (`:3001`) |
| Public pages HTTP | 200 |
| Image API samples | 200 |
| `/media/library` | Loads |
| Forbidden public strings | Clear (except intentional «Under udarbejdelse») |

---

## 10. Final launch score

**9.2 / 10**

Ready for launch with imported photography wired, repetition reduced, Danish leadership URL, empty PDFs removed, and build verified. Remaining tenth is subjective photography refinement and optional promotion of unmatched ZIP frames into future Planned slots — not blockers.
