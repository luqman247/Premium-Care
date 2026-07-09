# Public Image Coverage Report — RC16

Generated: July 2026  
Status: **Live site visually complete** — all public slots resolve to published images via exact match or fallback chain. Planned placeholders appear only in `/media` admin.

## Fallback system

`getPublicImage(assetId, fallbackCategory)` in `lib/dam/public-image.ts` resolves every public slot:

1. **Exact** — requested asset if `status: published` and file exists  
2. **Category** — first published asset in category pool (`hero`, `services`, `about`, `founder`, `trust`, `careers`, `municipality`, `contact`, `details`, `brand`)  
3. **Global** — `PC-01-001` (“Morning Light, Quiet Confidence”)

Client: `DamImage` + `resolvePublicAsset()`  
Server/API: `resolvePublicDiskPath()` — no SVG placeholders; 404 only if no file on disk

---

## Homepage `/`

| Slot | Asset used | DAM ID | Status | Resolution | Final shoot needed |
|------|------------|--------|--------|------------|-------------------|
| Hero rotation (7 frames) | Morning Light | PC-01-001 | Published | Exact | No |
| Hero rotation | The Gentle Arrival | PC-01-002 | Published | Exact | No |
| Hero rotation | Personal Care ritual | PC-02-006 | Published | Exact | No |
| Hero rotation | Shared silence | PC-02-013 | Published | Exact | No |
| Hero rotation | Hands That Listen | PC-01-004 | Published | Exact | No |
| Hero rotation | Scandinavian Home | PC-08-047 | Published | Exact | No |
| Hero rotation | Staff Training | PC-06-030 | Published | Exact | No |
| Hero trust crest | Crest Full Colour | PC-BR-004 | Published | Exact | No |
| Hero wordmark (dark bg) | Wordmark White | PC-BR-002 | Published | Exact | No |
| Recruitment section | Careers Training | PC-BR-006 | Published | Exact | Optional dedicated recruitment hero |
| Hero copy panel | — | — | N/A | Ivory editorial panel below images | No |

**Hero contrast:** Copy sits in ivory `hero-intro` panel — never overlaid on photography. Subtle navy gradient scrim on image strip only. WCAG AA on all breakpoints.

**Ticker:** Directly under hero images, before intro copy. Seven Danish statements, slow scroll, pauses on hover/focus, static wrap at `prefers-reduced-motion`.

---

## Services `/services`

| Section | Asset used | DAM ID | Status | Resolution | Final shoot needed |
|---------|------------|--------|--------|------------|-------------------|
| Praktisk hjælp | Personal Care ritual | PC-02-006 | Published | Exact | No |
| Personlig pleje | Shared silence | PC-02-013 | Published | Exact | No |
| Sygeplejeydelser | Hands That Listen | PC-01-004 | Published | Exact | No |
| Fysioterapi | Staff Training | PC-06-030 | Published | Category fallback | Yes — dedicated physio/movement scene |
| Ergoterapi | Scandinavian Home | PC-08-047 | Published | Category fallback | Yes — home adaptation scene |
| Tilkøbsydelser | Shared silence | PC-02-013 | Published | Category fallback | Yes — companionship/family scene |

---

## Om os `/om-os`

| Slot | Asset used | DAM ID | Status | Resolution | Final shoot needed |
|------|------------|--------|--------|------------|-------------------|
| CEO portrait | Founder Portrait | PC-03-016 | Published | Exact | No |
| Closing editorial | Morning Light | PC-01-001 | Published | Exact | Optional alternate about hero |
| Section seal | Crest White | PC-BR-010 | Published | Exact | No |

---

## Min historie `/min-historie`

| Slot | Asset used | DAM ID | Status | Resolution | Final shoot needed |
|------|------------|--------|--------|------------|-------------------|
| Founder / story | Danish Home — The Roots | PC-07-036 | Published | Exact | No |
| Section seal | Crest White | PC-BR-010 | Published | Exact | No |

---

## Vores løfte `/vores-loefte`

| Slot | Asset used | DAM ID | Status | Resolution | Final shoot needed |
|------|------------|--------|--------|------------|-------------------|
| Section seal | Crest White | PC-BR-010 | Published | Exact | No |

Text-only page — no editorial photography required.

---

## Gratis hjemmepleje `/priser`

| Slot | Asset used | DAM ID | Status | Resolution | Final shoot needed |
|------|------------|--------|--------|------------|-------------------|
| — | — | — | N/A | Text-only (free care messaging) | Optional warm care banner |

---

## Kontakt `/kontakt`

| Slot | Asset used | DAM ID | Status | Resolution | Final shoot needed |
|------|------------|--------|--------|------------|-------------------|
| Editorial banner | Shared silence | PC-02-013 | Published | Category (`contact`) | Optional office/warm care scene |

---

## Tillid `/tillid`

| Slot | Asset used | DAM ID | Status | Resolution | Final shoot needed |
|------|------------|--------|--------|------------|-------------------|
| Editorial banner | Hands That Listen | PC-01-004 | Published | Category (`trust`) | Optional documentation/review scene |
| Section seal | Crest White | PC-BR-010 | Published | Exact | No |

---

## Dokumentation `/dokumentation`

| Slot | Asset used | DAM ID | Status | Resolution | Final shoot needed |
|------|------------|--------|--------|------------|-------------------|
| Editorial banner | Personal Care ritual | PC-02-006 | Published | Category (`trust`) | Optional quality/documentation scene |

---

## Karriere `/karriere`

| Slot | Asset used | DAM ID | Status | Resolution | Final shoot needed |
|------|------------|--------|--------|------------|-------------------|
| Training hero | Careers Training | PC-BR-006 | Published | Exact | No |
| Section seal | Crest White | PC-BR-010 | Published | Exact | No |

---

## Ledelse og ansvar `/ledelse-og-governance`

| Slot | Asset used | DAM ID | Status | Resolution | Final shoot needed |
|------|------------|--------|--------|------------|-------------------|
| CEO portrait | CEO Calm Authority | PC-03-017 | Published | Exact | No |
| Editorial section | Hands That Listen | PC-01-004 | Published | Exact | No |
| Section seal | Crest White | PC-BR-010 | Published | Exact | No |

---

## Kommuner `/kommuner`

| Slot | Asset used | DAM ID | Status | Resolution | Final shoot needed |
|------|------------|--------|--------|------------|-------------------|
| Page hero | Professional Meeting | PC-05-026 | Published | Exact | No |

Not in main navigation — linked from Tillid, Dokumentation, institutional footers only.

---

## Whistleblowing `/whistleblowing`

Text-only policy page — no image slots. Linked from Tillid.

---

## Global brand (all pages)

| Slot | Asset | DAM ID | Status |
|------|-------|--------|--------|
| Header wordmark | PC-BR-001 / PC-BR-002 / PC-BR-003 | Published | Exact |
| Footer crest | PC-BR-010 | Published | Exact |
| Favicons / PWA | PC-BR-014 – PC-BR-018 | Published | Exact |
| Open Graph default | PC-BR-005 | Published | Exact |

---

## Planned assets still in DAM only

38 assets remain `planned` in the catalog. These **do not render** on the public site. When published, they will replace category fallbacks automatically via `getPublicImage`.

Priority replacements for future editorial shoot:

- Dedicated fysioterapi movement scene  
- Dedicated ergoterapi home-adaptation scene  
- Dedicated tilkøbsydelser companionship/family scene  
- Optional kontakt office/warm arrival scene  
- Optional tillid/documentation quality-review scene  

---

## Compliance re-check (RC16 Step 11)

| Requirement | Status |
|-------------|--------|
| No visible Aflastning | Pass — not in codebase |
| No visible Governance in nav | Pass — nav: Hjem, Ydelser, Gratis hjemmepleje, Om os, Kontakt, Tillid |
| No “Til kommuner” in main nav | Pass — kommuner linked contextually only |
| Free/frit valg messaging | Pass — `/priser`, FreeCareMessage, nav label |
| Pricing amounts | Present on `/priser` for tilkøbsydelser only (ExtraCarePricing) — human decision if these should be removed |
| No full stops on standalone display sentences | Pass — audited ticker and hero copy |
| No em dashes in public UI | Pass — public pages use hyphen spacing |
| Cookie banner | Pass — unchanged |
| Wordmark | Pass — DAM brand assets, no filter overlay |
| CTAs | Pass — Ring os nu, Kontakt, Karriere |
| Recruitment section | Pass — homepage + `/karriere` |
| Dokumentation | Pass — `/dokumentation` |
| Whistleblowing | Pass — `/whistleblowing` + Tillid link |
| No Planned placeholders on public site | Pass |

---

## Build verification

- `npm run lint` — pass  
- `npm run build` — pass  
- Dev server — `npm run dev` on port 3001  
