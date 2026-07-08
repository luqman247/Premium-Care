# PREMIUM CARE
## Master Asset Production & Brand Implementation Specification
### Version 1.0 · Confidential

*The technical implementation standard for the Premium Care brand.*
*Governed by the Brand Bible v1.0 and the Editorial Design System v1.0.*
*This document supersedes and absorbs the Brand Asset Production Specification (now archived). It is the sole technical source of truth for production and implementation.*

---

# 01 · Purpose

This Specification exists so that any competent supplier — designer, developer, printer, sign fabricator, embroiderer, vehicle wrapper or agency — can reproduce the Premium Care identity **perfectly, without a single clarifying phone call**.

**The document hierarchy:**

| Document | Governs | Question it answers |
|---|---|---|
| **Brand Bible v1.0** | Strategy, meaning, doctrine | *Why does the brand look and speak this way?* |
| **Editorial Design System v1.0** | Publication and page design | *How is a Premium Care page composed?* |
| **Brand Identity Manual** (in production) | The complete identity, taught | *What is the identity and how is it used?* |
| **This Specification** | Production and implementation | *How is it physically and digitally reproduced, exactly?* |

This document contains no strategy. Where a supplier needs to understand *why*, they are referred to the Bible; where they need to know *what artwork, what ink, what thread, what pixel*, the answer is here. In any conflict, the Brand Bible prevails on doctrine; this Specification prevails on production tolerance.

---

# 02 · Master Logo System

All assets derive from a single approved master vector (`_MASTER`), originated as a faithful reproduction of the approved logo — never redrawn from memory, raster files or screenshots. Origination is reproduction, not redesign, and is approved side-by-side against the master at 25%, 100% and 400%.

| Code | Asset | Composition | Purpose & when to use |
|---|---|---|---|
| **VT** | Primary Logo (vertical/stacked) | Crowned shield above wordmark above strapline | The reference mark. Default for stationery, tender covers, presentations, signage face, any context where height permits. "Vertical" and "Stacked" are one asset — a single master prevents drift. |
| **HZ** | Secondary Logo (horizontal) | Shield left; wordmark + strapline right, centred on the shield's optical middle | Co-primary. Wide formats: website header, vehicle sides, email signature, banners, lanyards. |
| **SH** | Shield Only | Crowned shield, no type | Supporting mark. Only where the full logo is already established in context (Bible §10.3): social avatar, app icon, wayfinding, wall supergraphic, embroidery ≥ 25 mm. |
| **WM** | Wordmark Only | PREMIUM CARE + strapline | Restricted. Extremely narrow formats (document spines, pen barrels). Each use requires Custodian approval. |
| **MG** | Monogram | Interlocked P C beneath crown | Premium accent. Certificates (foil corner), watermark, small luxury items ≥ 12 mm. Never a substitute for the logo. |
| **CR** | Crown Icon | Crown alone | Micro-format mark: favicon, embroidery accents 15–25 mm, foil details ≥ 5 mm. |
| **FV** | Favicon | Pixel-fitted CR | 16/32/48 px browser identity. A dedicated micro master (see §03.6) — never a scaled print vector. |
| **AP** | App Icon | SH on navy tile | 180 px (iOS), 192/512 px (Android, incl. maskable). Gold shield, navy ground, 12% internal safe margin. |

**Deployment hierarchy:** VT → HZ → SH → CR/MG → WM. Each step down assumes the step above is present elsewhere in the same context or approved as an exception. Municipal tender documents always carry VT or HZ in full.

**Colourways (all lockups where meaningful):** FC full colour · NV navy · WH white · BK black · GD gold · 1C single colour. Doctrine: FC never on navy; GD never on white; BK for mono/legal reproduction only; 1C by approval for co-branded municipal contexts.

---

# 03 · Construction System

## 3.1 The unit
The construction unit is **X = the height of the crown** in the lockup in use. All proportions, clear space and placement are expressed in X. This keeps every rule scale-independent and verifiable with a ruler.

## 3.2 Proportions (VT reference lockup)
```
            ┌── crown ──┐              height X
        ┌───┴───────────┴───┐
        │      SHIELD       │          height 5X · width 4.2X
        │   (cross + figures)│
        └───────┬───────────┘
                │ 1.5X space
        P R E M I U M  C A R E          cap height 1.1X
                │ 0.6X space
   — OMSORG • TRYGHED • HVER DAG —      cap height 0.45X
```
- Wordmark width defines total lockup width; shield centred on the wordmark's optical centre (the geometric centre of "PREMIUM CARE" adjusted −0.05X left for the serif M/C asymmetry).
- HZ lockup: shield height = 3.4X; type block centred on the shield's optical middle (54% of shield height, not 50% — the crown lifts the visual centre).

## 3.3 Geometry & optical corrections
The master honours the original artwork's optical judgements; production artists must not "correct" them to pure geometry:
- The shield's side walls have a 1.5° entasis (barely perceptible swell) — flattening them makes the shield look pinched.
- The cross bar sits 2% above geometric centre (heraldic convention; centring it reads as drooping).
- The crown's centre jewel overhangs its band by 0.1X; the star finial is optically, not mathematically, centred.
- Wordmark letterspacing is optically kerned in the master; type may never be re-set from fonts.

## 3.4 Clear space
**X on all four sides, all lockups, no exceptions.** Doubled to 2X on transparent substrates (glass, vehicle windows) and cluttered photographic grounds. Nothing enters clear space: no type, rules, icons, folds, seams, stitching or trim edges.

## 3.5 Minimum sizes

| Mark | Print | Digital | Embroidery | Notes |
|---|---|---|---|---|
| VT with strapline | 30 mm w | 110 px w | 80 mm w | Below this, strapline drops automatically |
| VT without strapline | 25 mm | 90 px | 60 mm | |
| HZ | 40 mm | 120 px | 100 mm | |
| SH | 8 mm | 24 px | 25 mm | |
| CR | 5 mm | 16 px | 15 mm | |
| MG | 6 mm | 20 px | — (foil ≥ 12 mm) | |

## 3.6 Scaling rules
1. Proportional scaling only; any non-uniform scaling, rotation, skew or perspective is prohibited.
2. Vector masters scale infinitely upward; downward, the minimums above are hard floors.
3. At 16–48 px, only the pixel-fitted micro masters (FV, small SH) may be used. Scaling print vectors to favicon sizes produces mush; mush violates Faglighed.
4. Large-format (> 2 m): scale from vector, then review the 1.5° entasis and stroke weights at full size on proof plot before fabrication.

---

# 04 · Colour Specifications

## 4.1 Master colour table

| | **Premium Navy** | **Champagne Gold** | **Dannebrog Red** | **Porcelain White** |
|---|---|---|---|---|
| Role | Ground, authority | Accent, craft (≤ 8%) | Shield only (Bible §21.2) | Air, clarity |
| Pantone (coated) | 282 C | 871 C metallic / 4515 C litho | 186 C | — |
| Pantone (uncoated) | 282 U | 4515 U | 186 U | — |
| CMYK | 100 · 85 · 35 · 60 | 25 · 30 · 65 · 10 | 0 · 100 · 80 · 5 | 0 · 0 · 2 · 0 |
| RGB | 4 · 30 · 66 | 185 · 162 · 106 | 200 · 16 · 46 | 250 · 250 · 247 |
| HEX | #041E42 | #B9A26A | #C8102E | #FAFAF7 |
| RAL (nearest) | 5011 Steel Blue | 1036 Pearl Gold | 3027 Raspberry Red | 9016 Traffic White |
| Metallic equivalent | — | Pantone 871 C | — | — |
| Foil | Navy pigment foil, matt | **Kurz Luxor/Alufin antique gold matched to 871 — physical sample approval mandatory** | Not foiled | — |
| Vinyl (cast grade, 3M 2080 / Avery SWF class) | Match RAL 5011; gloss for vehicles, matt for interiors | Metallic gold cast vinyl matched to 871 under daylight *and* sodium light | Match 186 C — shield print/wrap only | Gloss white |
| Embroidery thread (polyester, Madeira Polyneon or equal) | Lab-dip to 282 C | **Non-metallic** antique gold lab-dipped to 871 (metallic thread is prohibited: it abrades skin and fails infection-control laundering) | Lab-dip to 186 C | Optical white |

## 4.2 Production considerations
- **Navy is our black.** It never builds as rich black; in mono contexts BK artwork (100 K) replaces it.
- **Gold is the volatile colour.** It shifts most across substrates: litho 4515, metallic 871, foil, thread and vinyl are *five different materials* approved against one printed master swatch card, issued by the Custodian. No supplier ever matches gold from a screen.
- Total ink limit 300%; gold traps 0.1 mm into navy; white knockouts on navy carry 0.05 mm spread.
- Uncoated stocks: use U references with drawdown approval — 282 U drifts violet on some uncoated papers; the drawdown decides.
- Fleet and signage: RAL/vinyl samples approved outdoors in daylight before any production run.

---

# 05 · File Formats

| Format | Purpose | Colour space | Resolution | Transparency | Use / never use |
|---|---|---|---|---|---|
| **AI** | Master artwork | Per colourway (spot/CMYK/RGB set as swatch library) | Vector | n/a | Custodian repository only; never sent to end clients |
| **SVG** | Digital vector | sRGB | Vector | Yes | Web, apps; never in email signatures (client support), never for print |
| **EPS** | Legacy supplier exchange | CMYK/spot | Vector | Via clipping | Only when a supplier cannot accept PDF; never for web |
| **PDF** | Print exchange | PDF/X-4, CMYK + spot | Vector + 300 ppi images | Live | All print artwork; one colourway per file |
| **PNG** | Digital raster | sRGB | @1× and @2× of stated size | Yes | Email signatures, Office documents, social; never for print |
| **JPG** | Photography only | sRGB (digital) / CMYK (print) | 144 ppi screen / 300 ppi print | No | Photographs; **never flat logo art** — compression halos the mark |
| **WEBP** | Web performance | sRGB | Build-time export | Yes | Generated from PNG masters by the web build; never stored as a master |
| **ICO** | Favicon container | sRGB | 16/32/48 multi-res | Yes | Browser favicon only |
| **TIFF** | Print raster (photography, large format) | CMYK / Adobe RGB masters | 300 ppi at final size; LZW | Via alpha | Repro and large-format photography; never for logos (use vector) |

**Doctrine:** vector is the source of truth. Every raster file is an export, regenerated from the master — never opened and edited.

**Naming (all formats):**
```
PC_[Category]-[Lockup]_[Colourway]_[ColourSpace]_[Size/Use]_v[major-minor].[ext]
```
Long-form names in the client's preferred style are permitted as distribution aliases (e.g. `PremiumCare_PrimaryLogo_CMYK_Print_v1-0.pdf`) but the coded token structure above governs the repository. One system internally; a readable alias externally; the version number is never optional in either.

---

# 06 · Folder Structure

```
PremiumCare_BrandAssets/
├── 00_README + Asset_Register.csv
├── 01_Logos/
│   ├── Primary_VT/  Secondary_HZ/  Shield_SH/  Wordmark_WM/
│   ├── Monogram_MG/  Crown_CR/
│   └── (within each: AI/ EPS/ SVG/ PDF/ PNG/ — by colourway)
├── 02_Icons/            Service_Suite/ Corporate/ Navigation/ Favicons_AppIcons/
├── 03_Stationery/       BusinessCards/ Letterhead/ Envelopes/ Folders/ Certificates/
├── 04_Presentations/    PowerPoint/ Keynote/ TenderCovers/
├── 05_Website/          Logos/ OG_ShareCards/ UI_Tokens/ Type_Web/
├── 06_Social_Media/     Avatars/ Covers/ Post_Templates/
├── 07_Signage/          Reception/ Exterior/ Monolith/ Wayfinding/ ShopDrawings/
├── 08_Vehicles/         Liveries_by_Model/ Vinyl_Cutfiles/ PlacementDrawings/
├── 09_Uniforms/         Embroidery_DST_EMB/ Placement/ Badge_Artwork/
├── 10_Templates/        Word/ PowerPoint/ Excel/ Email/ Report/
├── 11_Photography/      Masters_RAW/ Graded_TIFF/ Web_JPG/ Consents/
├── 12_Brand_Guidelines/ Brand_Bible/ EDS/ Identity_Manual/ This_Specification/
├── 13_Legal/            Trademark/ Font_Licences/ Photo_Licences/ Supplier_NDAs/
└── 14_Archive/          Superseded_Releases_by_version/
```

**Hierarchy logic:** 01–02 are identity source; 03–09 are applications ordered from paper to fleet; 10–11 are working materials; 12–13 are governance; 14 is memory. Suppliers receive only the folders relevant to their commission, as read-only releases.

---

# 07 · Naming Convention & Versioning

**Standard:** `PC_[Category]-[Lockup]_[Colourway]_[ColourSpace]_[Size/Use]_v[major-minor].[ext]`

```
PC_Logo-VT_FC_CMYK_Print_v1-0.pdf
PC_Logo-HZ_WH_RGB_WebHeader-2x_v1-0.png
PC_Logo-SH_GD_Spot871_Foil-30mm_v1-0.ai
PC_Emb-VT_GD_Thread282-871_60mm_v1-0.dst
PC_Icon-Favicon_CR_NV_16-32-48_v1-0.ico
```

**Rules:** no spaces; no Danish characters in filenames (server safety); underscores between tokens, hyphens within them; lowercase extensions; a file without a version number is unreleased by definition.

**Version numbering:**
- **v1-0 → v1-1:** correction (technical fix, no visible change) — Custodian approval.
- **v1-x → v2-0:** governed change to the mark, palette or type — Executive Tier 3 approval (Bible §20), recorded as a Bible amendment first.
- Releases are immutable: corrections generate a complete new release folder; files are never edited in place.

**Archive procedure:** superseded releases move intact to `14_Archive/` with a transmittal note (date, reason, approver) and are retained for **twenty years** — signage, fleet and embroidered garments outlive campaigns, and disputes are settled against the release that was current at production date.

---

# 08 · Print Production

**Universal:** 3 mm bleed; safe area 12 mm (EDS §02); PDF/X-4; total ink ≤ 300%; Fogra contract proof for any first run with a new supplier; grain long on folded items.

| Item | Size | Stock | Print & finish |
|---|---|---|---|
| **Business card** | 85 × 55 mm | 540 gsm triplex: Porcelain outer plies, navy core | Front: gold foil VT + name in 282; reverse: navy solid with WH logo. No lamination — the uncoated hand *is* the luxury. Foil die from SH/VT foil master |
| **Letterhead** | A4 portrait | 120 gsm premium uncoated | Litho 282 + 4515; laser-guaranteed stock (it must survive office printers); follow-on sheet carries CR only |
| **Envelopes** | DL, C5, C4 | 120 gsm matching | 282 single colour; HZ on flap |
| **Tender documents** | A4 portrait | 100 gsm uncoated body; 250 gsm cover | Cover: navy, WH logo, *no foil* (procurement optics — quiet premium, Bible §21.1); body mono-safe, greyscale-verified |
| **Brochures** | A5/A4 | 170 gsm silk body, 300 gsm cover | CMYK + 282 spot; matt laminate cover; spot UV permitted on the shield only, one element per cover |
| **Certificates** | A4 landscape | 300 gsm felt-marked | Gold foil MG corner + blind emboss SH; presented in navy folder |
| **Folders** | A4 + 5 mm capacity | 350 gsm, matt laminate | Navy outer, gold foil VT; interior Porcelain with Cross Grid at 4%; glued pocket, business-card slits |
| **Corporate reports** | Landscape A4 (EDS format) | 150 gsm uncoated; 300 gsm cover | Per EDS §12: matt laminate + 871 foil cover; Otabind/thread-sewn lay-flat |

**Finish doctrine:** one speciality finish per item (foil *or* emboss *or* spot UV) — except certificates, which combine foil and blind emboss by explicit rule. Stacked finishes read as costume, not confidence.

---

# 09 · Embroidery

**Files:** digitised DST/EMB produced from the embroidery masters only (§05 of the superseded spec carried forward here); never auto-digitised from PNG.
**Threads:** polyester (Madeira Polyneon or equal), lab-dipped: navy → 282 C, gold → **non-metallic antique gold** matched to 871, red → 186 C, white → optical white. Metallic thread is prohibited on garments: it abrades skin and fails 85 °C infection-control laundering.
**Technique:** satin stitch lettering; fill stitch shield; strapline only at ≥ 80 mm logo width; underlay and density adjusted per fabric; cut-away backing on knits, tear-away on wovens; test sew-out approved on the actual garment fabric before any production run.

**Minimums:** VT 60 mm · SH 25 mm · CR 15 mm · lettering x-height never below 4 mm.

| Garment | Mark & size | Position |
|---|---|---|
| Scrubs / tunics | VT (no strapline) 60 mm, GD on navy / NV on light grey | Left chest, 190–200 mm below shoulder seam, centred on chest panel |
| Polo shirts | VT 60 mm | Left chest as above; sleeve CR 15 mm optional |
| Jackets / softshell | VT 70 mm left chest; **HZ 240 mm across back yoke** | Back logo centred, 90 mm below collar seam |
| Fleeces | VT 65 mm left chest | Avoid high-pile fills: use appliqué badge if pile > 3 mm |
| Caps / beanies | SH 45 mm | Front centre panel |
| Vehicle/field jackets | HZ 260 mm back; VT 70 mm chest | Back clear of seams and reflective banding |
| High-visibility (EN ISO 20471) | **NV single-colour** VT 60 mm on chest pocket zone; HZ on back *only* where certified zones permit | Branding must never reduce certified reflective area; navy on yellow verified ≥ 4.5:1; garment certification takes precedence over branding — safety is Tryghed |
| Woven badges (alternative) | VT 70 × 45 mm badge, merrowed edge, navy ground | For delicate or laundering-critical garments |

---

# 10 · Signage

**Universal:** shop drawings approved against clear-space and minimum-size rules before fabrication; materials palette — brushed brass, navy acrylic/aluminium, Porcelain surfaces, light oak; illumination 3000 K warm white only; mechanical fixings concealed; D-class fire-rated materials in care environments.

| Sign | Specification |
|---|---|
| **Reception** | Built-up brushed brass letters + FC shield (printed/enamelled inset), 10 mm stand-off from navy or Porcelain feature wall; letter height 120–180 mm; optional halo illumination 3000 K |
| **Building fascia** | Built-up aluminium letters, navy PPC (RAL 5011) or brass; HZ lockup; halo-lit; sized to street viewing distance (cap height ≥ 25 mm per 10 m viewing distance) |
| **Monolith** | 2200 × 600 mm navy PPC monolith, gold VT face (cut vinyl or fret-cut back-lit acrylic), Porcelain plinth reveal; strapline at base in WH |
| **Wayfinding** | Navy panels, Porcelain Sans lettering (Berlingske Sans per licence, tender-fallback Verdana on municipal sites), gold interpunct as the directional bullet; icons from the navigation suite at 32 px equivalents |
| **Door signs** | 150 × 150 mm navy acrylic, 3 mm, radius corners 2 mm, Porcelain text, stand-off locators; braille per DS/ISO 17049 on client-facing rooms |
| **Window graphics** | Frost-etch vinyl manifestation: Cross Grid pattern band 140–160 mm at 850–1000 mm *and* 1400–1600 mm heights (Danish BR18 manifestation compliance); SH in frost at entrances; 2X clear space on glass |
| **Internal signage** | Porcelain panels, navy text; gold keyline top edge (the EDS signature, made physical) |
| **Illuminated** | Halo only. **Face-lit box signs are prohibited** — they read as retail, not care |
| **Laser-cut metal** | 3–5 mm brass or navy PPC aluminium; SH minimum 100 mm; internal counters respect 1 mm bridge minimum |
| **Glass manifestation** | As window graphics; safety-critical zones take precedence over brand preference |

**Vehicle graphics:** navy body (RAL 5011 paint or full cast wrap); HZ in gold cast vinyl ≥ 350 mm on both sides, aligned to body feature line; SH on bonnet ≥ 200 mm; rear: HZ + website in WH; legal text and CVR in WH 25 mm; reflective WH detailing permitted for night visibility (Tryghed extends to traffic); placement drawing per vehicle model approved before fleet application; no gradients, no supergraphics sweeping across panels — the livery is calm.

---

# 11 · Digital Assets

**Web logos:** header HZ — SVG, 40 px height desktop / 32 px mobile, NV on Porcelain (WH variant for navy header state); footer VT or SH — SVG, WH on navy, 64 px @2×; clear space enforced in CSS as padding tokens.

**Favicons & app icons:** ICO 16/32/48 (CR pixel-fitted) · apple-touch-icon 180 px · Android 192/512 + maskable 512 (SH within 80% safe circle) · PWA manifest colours: theme #041E42, background #FAFAF7.

**Social media**

| Platform | Avatar | Cover/format notes |
|---|---|---|
| LinkedIn | SH gold-on-navy, 400 px master | Cover 1128 × 191: navy, HZ right-aligned, strapline |
| Facebook | Same avatar | Cover 820 × 312 |
| Instagram | Same avatar (tested at 40 px) | Grid templates per EDS colour doctrine; 1:1 and 4:5 |
| X | Same avatar | Header 1500 × 500 |
| YouTube | Same avatar 800 px | Banner 2560 × 1440 with 1546 × 423 safe zone — HZ inside safe zone only |

One avatar everywhere; recognition is built by repetition, not variety.

**Email signature:** HTML table-based (no CSS positioning), HZ as PNG @2× rendered 160 px wide, ≤ 40 KB; Sans stack `Verdana, Arial`; name in navy bold, details in navy 70%; gold rule as a 1 px navy-gold table border; no banners, no quotes, no social icons beyond LinkedIn.

**Microsoft Office templates (fallback stack Georgia/Verdana embedded — municipal machines will not have Berlingske):**
- **Word:** letterhead, report, tender-response and memo templates; styles mapped to the EDS hierarchy; navy headings, 12 pt-equivalent line grid.
- **PowerPoint:** 16:9 master per EDS grid translated to 12-column slide layout; navy title slide with gold VT; Porcelain content slides; chart templates pre-built in the navy tonal scale + gold accent.
- **Excel:** report workbook with branded header row (navy band, Porcelain text), table styles per EDS §08, print-area presets to landscape A4.

**PDF documents:** exported tagged and bookmarked (see §12); logo always vector within the PDF, never a pasted screenshot.

---

# 12 · Accessibility

**Contrast floors (WCAG 2.2):** body text ≥ 7:1 (AAA target; 4.5:1 absolute floor) · large text/furniture ≥ 4.5:1 · UI components ≥ 3:1. Verified pairings: navy on Porcelain 14.9:1 ✓ · Porcelain on navy 14.9:1 ✓ · gold on navy 5.4:1 ✓ (large text and rules) · **gold on white 2.9:1 ✗ — prohibited for text**, permitted only for keylines ≥ 0.5 pt with no informational role.

**Logo visibility:** the mark always sits in a contrast-verified zone; on photography, a minimum 4.5:1 local contrast is measured, not judged by eye.

**Digital:** WCAG 2.2 AA minimum across web and PDF; PDFs tagged, bookmarked to H2, logical reading order, alt text on every image and diagram, language tagging per passage (da/en), PDF/UA export profile; focus states in gold-on-navy meet 3:1 non-text contrast; no information conveyed by colour alone (every gold-coded data point is labelled — EDS §04).

**Print:** body 9.5 pt minimum; client-facing clinical materials 11 pt+; matte stocks preferred (glare impairs older readers); left-aligned ragged-right throughout.

**Large format:** cap height ≥ 25 mm per 10 m viewing distance; wayfinding at 1400–1600 mm centreline; braille and tactile per DS/ISO standards on client-facing door signs.

**Government tenders:** all tender PDFs delivered accessible (tagged, mono-safe, screen-reader verified) — accessibility compliance is itself a scored criterion in Danish public procurement, making this section commercially material, not merely ethical.

---

# 13 · Quality Assurance — Supplier Release Checklist

No artwork is released to production until every line is initialled:

**Colour** □ Swatches from brand library only, correctly named □ Spot/CMYK per §04 for the process in hand □ Gold material sample approved against master swatch card □ Total ink ≤ 300% □ Overprint preview checked
**Logo integrity** □ Derived from current release master (version confirmed against Asset Register) □ No redrawing, re-setting, distortion, effects □ Correct lockup for context per §02 hierarchy □ Colourway permitted on this ground
**Spacing & size** □ Clear space X (2X on glass) verified with measurement, not eye □ At or above minimum size □ Placement per application drawing
**Typography** □ Berlingske weights per EDS §03, or approved fallback stack □ Danish characters æ ø å render correctly □ No invented styles
**Files** □ Correct format for process (§05) □ Correct naming incl. version □ Fonts outlined in print files; live-type companion archived
**Resolution** □ Vector where required; raster 300 ppi print / @2× digital □ No upsampled images
**Accessibility** □ Contrast pairs verified □ Tagged/alt-texted if PDF □ Greyscale-safe if tender
**Print readiness** □ 3 mm bleed □ PDF/X-4 □ Proof approved (Fogra contract proof for first runs) □ Stock and finish per §08
**Approvals** □ Test sample approved where physical (sew-out, foil pull, vinyl swatch, sign shop drawing) □ Custodian sign-off recorded in Asset Register with date and reference

**Final sign-off:** Supplier QA signature + Premium Care Custodian counter-signature. Undocumented approval is no approval.

---

# 14 · Asset Governance

**Brand Custodian:** named individual holding the master repository, the swatch cards, and Tier 2 approval authority. Deputised backup named at all times.

**Approval tiers (per Bible §20):** Tier 1 — correct use of released assets and templates: self-service. Tier 2 — new applications of existing assets: Custodian. Tier 3 — any change touching logo, palette, typography, strapline or architecture: Executive Board, recorded first as a Bible amendment, then as a v2-0 asset release.

**Version control:** immutable releases; corrections as new releases; the Asset Register (CSV, custodian-held) is the authoritative index of what is current.

**Distribution:** suppliers receive read-only, commission-relevant folders with a transmittal note (release version, permitted use, expiry). Assets are never emailed loose; links expire.

**Supplier approval:** every new supplier completes onboarding — receives the four governing documents, returns signed compliance confirmation, and produces an approved physical sample (proof, sew-out, foil pull or shop drawing) before first production.

**Archive:** twenty-year retention of all releases and signed approvals (§07).

**Change management:** requests logged with the Custodian; assessed against the Bible; approved changes cascade in order — Bible amendment → this Specification → Manual → templates → supplier notification with sunset date for superseded assets.

**Review cycle:** this Specification is reviewed every 12 months for technical currency (formats, platform sizes, standards) — technical review may update §05 and §11 sizes at Custodian level without touching doctrine.

---

# 15 · Production Checklist — The Implementation Gate

A supplier holding the **Brand Bible**, the **Editorial Design System**, the **Brand Identity Manual** and **this Specification** completes any Premium Care commission by walking this gate:

**1. Commission** □ Written scope · □ Correct release version received via transmittal · □ Onboarding compliance signed
**2. Select** □ Lockup chosen per §02 hierarchy · □ Colourway legal on the intended ground · □ Application specs located (§08–11)
**3. Build** □ Master-derived artwork only · □ Grid, type and spacing per EDS · □ Colour from swatch library · □ Naming per §07
**4. Verify** □ Full §13 checklist initialled · □ Accessibility floors met (§12) · □ Physical sample approved where applicable
**5. Approve** □ Custodian counter-signature · □ Asset Register entry
**6. Produce** □ Contract proof / test run retained · □ Production matched to approved sample
**7. Close** □ Final files returned to Custodian for repository · □ Approvals archived · □ Superseded material destroyed or returned

If any step cannot be completed from the four governing documents alone, that is a defect in the documents — it is reported to the Custodian and corrected in the next release, so the system converges on its purpose: **perfect reproduction, zero clarification.**

---

*End of the Master Asset Production & Brand Implementation Specification v1.0. Upon approval it is frozen alongside the Brand Bible v1.0 and Editorial Design System v1.0; the earlier Brand Asset Production Specification moves to 14_Archive as superseded. The Brand Identity Manual (Phase 3, Part 00) awaits your instruction.*
