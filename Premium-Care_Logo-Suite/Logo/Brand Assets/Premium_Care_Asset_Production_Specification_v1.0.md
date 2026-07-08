# PREMIUM CARE
## Brand Asset Production Specification
### The Complete Asset Library — Master Artwork Brief & Technical Standards

*Version 1.0 · Confidential*
*Governed by the Brand Bible v1.0 and the Editorial Design System v1.0. This specification enables any professional studio or production artist to originate, name, file and release every Premium Care brand asset without further instruction.*

---

# 00 · Production Note (Read First)

The approved logo is the master brand asset and is final. The first production step — **vector origination** — is the faithful redrawing of the approved artwork, at full fidelity, in a professional vector application by a production artist, followed by side-by-side approval against the approved logo at 100%, 400% and 25% scale. Origination is *reproduction, not redesign*: no proportion, angle, figure gesture or crown detail may deviate. Every asset in this library derives from that single approved master vector (`_MASTER`). Nothing may ever be rebuilt from a raster file, a screenshot or memory.

**Master artwork requirements:**
- Drawn at 100 mm logo width, art-boarded with clear-space guides on a locked layer
- All paths closed; no open strokes in final outlines; text converted to outlines *and* a live-type companion file retained under lock
- Colour set exclusively from the brand swatch library (§05); no unnamed swatches may exist in the file
- One master per lockup (§02–03); colourways generated as layer states, never as separate drawings

---

# 01 · The Asset Matrix — Primary Logo

The primary logo (shield + crown + wordmark + strapline) exists in **six colourways**. Each is produced in every relevant format (§06).

| Code | Colourway | Composition | Permitted grounds | Primary use |
|---|---|---|---|---|
| FC | **Full Colour** | Red/white shield, gold crown & figures, navy wordmark, gold strapline | Porcelain, white, light photography | Default on light grounds; stationery, documents, tenders |
| NV | **Navy** | Entire mark Pantone 282 | White/Porcelain only | Single-colour workhorse: fax-grade documents, forms, mono print |
| WH | **White** | Entire mark Porcelain/white | Navy, dark photography (contrast-verified) | Navy covers, dark digital surfaces, signage |
| BK | **Black** | Entire mark 100 K | White | Newsprint, legal, photocopy-critical municipal reproduction |
| GD | **Gold** | Entire mark Champagne Gold (871/#B9A26A) | Navy only | Premium contexts: covers, foil, vehicles, embroidery on navy |
| 1C | **Single Colour (variable)** | Entire mark in one approved ink | Per approval | Co-branded municipal documents, engraving, etching |

**Doctrine:** FC never appears on navy (the red/gold conflict fails the calm test). GD never appears on white (insufficient contrast; Bible accessibility floor). The strapline *Omsorg • Tryghed • Hver Dag* is integral to the primary logo and is removed only in the secondary lockups defined below — never by local decision.

---

# 02 · Secondary Logos

All secondary lockups derive from the master vector. Each exists in the same six colourways where technically meaningful.

| Code | Lockup | Contents | Status & rules |
|---|---|---|---|
| HZ | **Horizontal** | Shield left, wordmark + strapline right, vertically centred on shield optical middle | Co-primary; default for website headers, vehicle sides, wide formats |
| VT | **Vertical / Stacked** | Shield above wordmark above strapline (the approved primary composition) | The reference lockup; "Stacked" and "Vertical" are the same asset — one master, avoiding drift |
| SH | **Shield Only** | Crowned shield, no type | Supporting mark: appears only where the full logo is already established (Bible §10.3); social avatars, app icon, wayfinding |
| WM | **Wordmark Only** | PREMIUM CARE + strapline, no shield | Restricted: narrow formats (pen barrels, spine of documents); Custodian approval per use |
| CR | **Crown Only** | Crown alone | Micro-format mark: favicon, embroidery accents ≤ 15 mm, foil details |
| MG | **Monogram PC** | Interlocked P C with crown | Premium accents: cufflink-scale items, watermark, pattern seed, foil corner of certificates |

**Hierarchy of deployment:** VT → HZ → SH → CR/MG → WM. Each step down requires the step above to be present elsewhere in the same context or an approved exception.

---

# 03 · Digital Assets

| Asset | Mark | Sizes / spec | Format | Notes |
|---|---|---|---|---|
| Favicon | CR (crown) | 16×16, 32×32, 48×48 px | ICO (multi-res) + PNG | Crown redrawn as pixel-fitted micro master (see below); navy on transparent + white-on-navy variants |
| Apple Touch Icon | SH | 180×180 px | PNG | Navy ground, gold shield, 12% corner-safe margin; no transparency |
| Android / PWA icons | SH | 192×192, 512×512 px + maskable 512 | PNG | Maskable version keeps shield within 80% safe circle |
| Website header | HZ | Height 40 px (desktop), 32 px (mobile), @1×/@2× | SVG preferred, PNG fallback | Navy version on Porcelain header; white version for navy header state |
| Website footer | VT or SH | Height 64 px @2× | SVG | White on navy footer |
| Email signature | HZ | 320×~90 px @2× (render 160 px wide) | PNG (email-client safe) | FC on white; never SVG in email; file ≤ 40 KB |
| Social avatar | SH | 1024×1024 master; platform crops | PNG | Gold shield on navy disc; tested at 40 px |
| Social cover/banner | HZ + strapline | Per platform, from 2560×1440 master | PNG/JPG | Templates in 08_Templates/Digital |
| Open Graph / share card | HZ | 1200×630 px | PNG | Navy field, gold HZ, title zone per EDS type styles |

**Micro-master doctrine:** at 16–32 px the crown and shield are *pixel-fitted* — stroke positions nudged to whole pixels — as dedicated micro masters. They are optical translations, approved once against the master, then frozen. Scaling the print vector down to 16 px is prohibited (it produces mush and violates Faglighed).

---

# 04 · Print Assets

| Version | Colour build | Use |
|---|---|---|
| **CMYK** | Navy C100 M85 Y35 K60 · Red C0 M100 Y80 K5 · Gold C25 M30 Y65 K10 (litho gold) | General four-colour print |
| **Pantone (spot)** | Navy 282 C/U · Red 186 C/U · Gold 871 C (metallic) or 4515 C (matte litho) | Stationery, covers, premium print |
| **Spot + CMYK hybrid** | 282 spot + CMYK imagery | The manual itself; brochures with photography |
| **Black** | 100 K only — never rich black (EDS §12) | Mono reproduction, legal, newsprint |
| **White** | Knockout/reverse artwork with trapping notes | Dark grounds, screen print, foil carrier |

**Ink & proofing rules:** total ink ≤ 300%; overprint previews mandatory; gold 871 always trapped 0.1 mm into navy; Fogra contract proof required for any first print of a colourway with a new supplier; uncoated stocks use U references with drawdown approval.

---

# 05 · Speciality Versions

Each speciality master is a **technique-specific redrawing of tolerances, not of design** — details are opened, strokes thickened and counters enlarged to survive the process, then approved against the master.

| Technique | Mark & minimums | Specification |
|---|---|---|
| **Foil stamping** | VT ≥ 30 mm wide; MG ≥ 12 mm | Foil: Kurz Luxor gold matched to 871 (sample approval mandatory); minimum line 0.25 mm; counters ≥ 0.4 mm; strapline drops below 40 mm width — foil masters exist with and without strapline |
| **Emboss / deboss** | SH ≥ 25 mm | Single-level die, brass; blind emboss on covers, deboss on leather goods; combined foil-emboss reserved for certificates |
| **Laser engraving** | SH or MG ≥ 15 mm | 1C outline master, minimum line 0.2 mm; depth per material sample |
| **Etching (glass/metal)** | SH ≥ 40 mm on glass | Frost-etch positive; clear-space doubled on transparent substrates |
| **Embroidery** | VT ≥ 60 mm wide; SH ≥ 25 mm; CR ≥ 15 mm | Digitised stitch file (DST/EMB) from embroidery master; satin stitch strapline only ≥ 80 mm width, otherwise omitted; threads: polyester (e.g. Madeira Polyneon) lab-dipped to Pantone 282 (navy), 186 (red), and a metallic-free antique gold matched to 871 — **physical thread approval against printed swatch is mandatory**; max stitch density per uniform fabric spec; backing per garment |
| **Vinyl cutting** | HZ ≥ 120 mm; single-colour masters only | Cast vinyl (3M/Avery premium cast grade), colours matched to RAL 5011 (navy) and metallic gold — samples approved before any fleet or signage run; weeding tolerance 1 mm minimum internal detail |
| **Signage** | Per EDS §09 | Built-up brushed brass letters (gold contexts) or navy acrylic; halo illumination 3000 K only; shop drawings approved against clear-space rules before fabrication |
| **Vehicle graphics** | HZ on sides ≥ 350 mm; SH on bonnet | Placement drawings per model; navy body RAL 5011 or wrap equivalent; gold cast vinyl + reflective white legal text; night-visibility check mandatory (Tryghed extends to traffic) |

---

# 06 · File Formats & Resolution Standards

| Format | Role | Standard |
|---|---|---|
| **AI** | Master artwork | CC-compatible, layers named, swatch library embedded, fonts outlined + live companion |
| **EPS** | Legacy supplier exchange | Level 2, outlined, one colourway per file |
| **SVG** | Digital vector | Optimised, presentation attributes, no embedded raster, title/desc tags for accessibility |
| **PDF** | Print exchange | PDF/X-4, bleed where relevant; one page per colourway |
| **PNG** | Digital raster | Transparent; @1× and @2×; sRGB |
| **JPG** | Photography contexts only | Quality 10+, sRGB; never for flat logo art (compression halos) |
| **ICO** | Favicon | Multi-resolution container 16/32/48 |
| **WEBP** | Web performance | Generated from PNG masters at build time; not stored as masters |
| **High res** | Print raster where vector impossible | 300 ppi at final size, CMYK TIFF/PDF |
| **Low res** | Screen/preview | 144 ppi sRGB PNG |

**Rule:** vector is the source of truth; raster files are exports, regenerated—never edited.

---

# 07 · Technical Specification Template

Every asset in the library carries this record (stored as a sidecar text block in `10_Guidelines/Asset_Register.csv`):

```
Asset:            PC_Logo-VT_FC (Primary vertical, full colour)
Usage:            Default mark on light grounds — stationery, documents, tenders
Minimum size:     Print 25 mm wide (with strapline 30 mm) · Digital 90 px
Clear space:      X = crown height; X on all sides, no exceptions
Colour version:   FC — Pantone 282/186/871 · CMYK per §04 · HEX per Bible §11
File types:       AI (master) · SVG, PDF/X-4, PNG @1×/@2×, EPS (exports)
Resolution:       Vector; PNG exports 90/180/360 px heights
Ground rules:     Porcelain, white, light imagery ≥ 4.5:1 contrast zone
Prohibited:       Navy grounds, photography without contrast check, any scaling below minimum
Version:          v1-0 · Released 2026-07 · Custodian approval ref BB§10/EDS§—
```

**Global minimum-size table (summary):**

| Mark | Print min | Digital min | Embroidery min |
|---|---|---|---|
| VT with strapline | 30 mm | 110 px | 80 mm |
| VT without strapline | 25 mm | 90 px | 60 mm |
| HZ | 40 mm | 120 px | — |
| SH | 8 mm | 24 px | 25 mm |
| CR | 5 mm | 16 px | 15 mm |
| MG | 6 mm | 20 px | 12 mm (foil) |

**Clear space (all marks):** X = height of the crown of the mark in use, applied to all four sides. On transparent substrates (glass, vehicle windows), 2X.

---

# 08 · Naming Convention

```
PC _ [Category] - [Lockup] _ [Colourway] _ [ColourSpace] _ [Size/Use] _ v[major-minor] . [ext]

PC_Logo-VT_FC_CMYK_Print_v1-0.pdf
PC_Logo-HZ_WH_RGB_WebHeader-2x_v1-0.png
PC_Logo-SH_GD_Spot871_Foil-30mm_v1-0.ai
PC_Icon-Favicon_CR_NV_16-32-48_v1-0.ico
PC_Emb-VT_GD_Thread282-871_60mm_v1-0.dst
```

**Rules:** no spaces, no Danish characters in filenames (server safety), hyphens within tokens, underscores between tokens, lowercase extensions, version always present. A file without a version number is treated as unreleased.

---

# 09 · Folder Structure & Version Control

The library ships as the scaffold `PremiumCare_BrandAssets_v1-0/` (provided alongside this document):

```
PremiumCare_BrandAssets_v1-0/
├── 01_Logo_Primary/          AI · EPS · SVG · PDF · PNG · JPG
├── 02_Logo_Secondary/        Horizontal · Vertical · Stacked · Shield_Only ·
│                             Wordmark_Only · Crown_Only · Monogram_PC
├── 03_Digital/               Favicons · Touch_Icons · Web · Email · Social
├── 04_Print/                 CMYK · Pantone_Spot · Black · White
├── 05_Speciality/            Foil · Emboss_Deboss · Engraving_Etching ·
│                             Embroidery · Vinyl_Cutting · Signage · Vehicle_Graphics
├── 06_Colour/                Swatches (ASE/ACO) · Specifications
├── 07_Typography/            Licences · Specimens
├── 08_Templates/             Stationery · Office_Suite · Digital
├── 09_Presentation_Boards/
└── 10_Guidelines/            Asset_Register.csv · this specification · Brand Bible · EDS
```

**Version control doctrine:**
1. Semantic versions: v1-0, v1-1 (correction), v2-0 (governed change via Bible §20 Tier 3).
2. The library is immutable per release; corrections produce a new full release folder — files are never edited in place.
3. One custodian-held master repository; suppliers receive read-only releases with an expiry-dated transmittal note.
4. Superseded releases move to `_ARCHIVE/` and remain retrievable for twenty years (signage and fleet outlive campaigns).
5. Every release logs: date, contents changed, approver, and the approval tier under Bible §20.

---

# 10 · Presentation Board Programme

Fourteen boards, each a landscape A3 plate built on EDS templates, assembled into the identity presentation deck. Boards 01–04 are artwork plates; 05–14 are photographic application plates produced under EDS §09 mockup standards.

| Board | Template | Content |
|---|---|---|
| 01 | T8 | Primary logo — six colourways on split Porcelain/Navy field |
| 02 | T8 | Secondary lockups — full deployment hierarchy with codes |
| 03 | T3 | Construction, clear space and minimum sizes (the doctrine plate) |
| 04 | T9 | Correct / incorrect — twelve misuses, navy-40% crosses per EDS |
| 05 | T5 | Logo on photography — contrast-zone demonstration |
| 06 | T2 | Business card — in-hand, foil catching light, detail crop |
| 07 | T2 | Letterhead & envelope flat-lay, 90° |
| 08 | T2 | Vehicle — ¾ view + side elevation drawing with dimensions |
| 09 | T2 | Uniform — embroidery on navy scrubs, stitch detail crop |
| 10 | T2 | Reception signage — brushed brass, human scale |
| 11 | T2 | Office wall — SH supergraphic, blind-embossed navy panel |
| 12 | T2 | Website & social — device frames, header/avatar states |
| 13 | T2 | PowerPoint & tender covers — the municipal-facing pair |
| 14 | T2 | Email signature + closing plate, gold VT on navy |

Each board carries the running furniture, folio and caption system of the EDS, so the presentation itself demonstrates the system it delivers.

---

*End of Brand Asset Production Specification v1.0. With the master vector origination approved, this document is sufficient for any professional studio to produce, name and release the complete Premium Care asset library without further briefing.*
