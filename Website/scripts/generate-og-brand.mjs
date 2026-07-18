/**
 * Generate the PremiumCare ApS institutional Open Graph image (1200 × 630).
 * Uses licensed DAM photography + official crest + brand tokens.
 *
 * Run: node scripts/generate-og-brand.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;
const PHOTO_WIDTH = 580; // ~48% — within 45–55% preferred range

const COLORS = {
  midnight: "#061d37",
  midnightDeep: "#04152a",
  ivory: "#f7f5f0",
  ivoryMuted: "rgba(247, 245, 240, 0.72)",
  gold: "#c4a05f",
  goldSoft: "rgba(196, 160, 95, 0.55)",
};

const COPY = {
  eyebrow: "PREMIUMCARE APS",
  headline: "Pleje, der føles trygt",
  supporting:
    "Professionel, nærværende og værdig omsorg med udgangspunkt i det enkelte menneske",
  footer: "premiumcare.dk",
};

const photoPath = path.join(
  root,
  "public/images/editorial/PC-08-048/published.jpg",
);
const crestPath = path.join(root, "public/assets/brand/crest-gold.png");
const outPath = path.join(root, "public/assets/brand/og-brand.jpg");
const fontsDir = path.join(__dirname, ".og-fonts");

const FONT_SOURCES = [
  {
    name: "Cinzel-Variable.ttf",
    url: "https://github.com/google/fonts/raw/main/ofl/cinzel/Cinzel%5Bwght%5D.ttf",
  },
  {
    name: "CormorantGaramond-Variable.ttf",
    url: "https://github.com/google/fonts/raw/main/ofl/cormorantgaramond/CormorantGaramond%5Bwght%5D.ttf",
  },
];

async function ensureFonts() {
  fs.mkdirSync(fontsDir, { recursive: true });
  for (const font of FONT_SOURCES) {
    const dest = path.join(fontsDir, font.name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 10_000) continue;
    const response = await fetch(font.url);
    if (!response.ok) {
      throw new Error(`Failed to download ${font.name}: ${response.status}`);
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.slice(0, 15).toString("utf8").includes("<!DOCTYPE")) {
      throw new Error(`Font download returned HTML for ${font.name}`);
    }
    fs.writeFileSync(dest, buffer);
  }
}

function fontDataUri(filename) {
  const file = path.join(fontsDir, filename);
  const buf = fs.readFileSync(file);
  return `data:font/ttf;base64,${buf.toString("base64")}`;
}

function escapeXml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function wrapLines(text, maxChars) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function main() {
  await ensureFonts();

  if (!fs.existsSync(photoPath)) {
    throw new Error(`Photo not found: ${photoPath}`);
  }
  if (!fs.existsSync(crestPath)) {
    throw new Error(`Crest not found: ${crestPath}`);
  }

  const cinzel = fontDataUri("Cinzel-Variable.ttf");
  const cormorant = fontDataUri("CormorantGaramond-Variable.ttf");

  const photoPanel = await sharp(photoPath)
    .rotate()
    .resize(PHOTO_WIDTH, HEIGHT, {
      fit: "cover",
      position: "centre",
    })
    .modulate({ brightness: 0.96, saturation: 0.92 })
    .toBuffer();

  const crest = await sharp(crestPath)
    .resize(52, null, { fit: "inside" })
    .png()
    .toBuffer();

  const supportingLines = wrapLines(COPY.supporting, 34);
  const supportingTspans = supportingLines
    .map(
      (line, i) =>
        `<tspan x="0" dy="${i === 0 ? 0 : 28}">${escapeXml(line)}</tspan>`,
    )
    .join("");

  const panelX = PHOTO_WIDTH;
  const contentX = panelX + 56;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style type="text/css"><![CDATA[
      @font-face {
        font-family: 'CinzelOG';
        src: url('${cinzel}') format('truetype');
        font-weight: 400 700;
      }
      @font-face {
        font-family: 'CormorantOG';
        src: url('${cormorant}') format('truetype');
        font-weight: 400 600;
      }
    ]]></style>
    <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${COLORS.midnight}"/>
      <stop offset="100%" stop-color="${COLORS.midnightDeep}"/>
    </linearGradient>
    <linearGradient id="softLight" x1="0.2" y1="0" x2="0.9" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.06"/>
      <stop offset="55%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="100%" stop-color="${COLORS.gold}" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <rect x="${panelX}" y="0" width="${WIDTH - panelX}" height="${HEIGHT}" fill="url(#panelGrad)"/>
  <rect x="${panelX}" y="0" width="${WIDTH - panelX}" height="${HEIGHT}" fill="url(#softLight)"/>
  <rect x="${panelX}" y="0" width="1" height="${HEIGHT}" fill="${COLORS.gold}" opacity="0.35"/>

  <g transform="translate(${contentX}, 118)">
    <text
      x="0"
      y="0"
      font-family="CinzelOG, Georgia, serif"
      font-size="15"
      letter-spacing="0.28em"
      fill="${COLORS.gold}"
    >${escapeXml(COPY.eyebrow)}</text>

    <line
      x1="0"
      y1="28"
      x2="48"
      y2="28"
      stroke="${COLORS.goldSoft}"
      stroke-width="1"
    />

    <text
      x="0"
      y="92"
      font-family="CormorantOG, Georgia, serif"
      font-size="46"
      font-weight="500"
      fill="${COLORS.ivory}"
      letter-spacing="-0.01em"
    >${escapeXml(COPY.headline)}</text>

    <text
      x="0"
      y="168"
      font-family="CormorantOG, Georgia, serif"
      font-size="22"
      fill="${COLORS.ivoryMuted}"
      letter-spacing="0.01em"
    >${supportingTspans}</text>
  </g>

  <text
    x="${contentX}"
    y="${HEIGHT - 56}"
    font-family="CinzelOG, Georgia, serif"
    font-size="13"
    letter-spacing="0.22em"
    fill="${COLORS.gold}"
    opacity="0.9"
  >${escapeXml(COPY.footer)}</text>
</svg>`;

  const textOverlay = await sharp(Buffer.from(svg)).png().toBuffer();

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: COLORS.midnight,
    },
  })
    .composite([
      { input: photoPanel, left: 0, top: 0 },
      {
        input: Buffer.from(
          `<svg width="${PHOTO_WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="photoVeil" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="${COLORS.midnight}" stop-opacity="0"/>
                <stop offset="70%" stop-color="${COLORS.midnight}" stop-opacity="0"/>
                <stop offset="100%" stop-color="${COLORS.midnight}" stop-opacity="0.4"/>
              </linearGradient>
            </defs>
            <rect width="${PHOTO_WIDTH}" height="${HEIGHT}" fill="url(#photoVeil)"/>
          </svg>`,
        ),
        left: 0,
        top: 0,
      },
      { input: textOverlay, left: 0, top: 0 },
      { input: crest, left: WIDTH - 52 - 48, top: HEIGHT - 68 - 36 },
    ])
    .jpeg({
      quality: 88,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    })
    .toFile(outPath);

  const meta = await sharp(outPath).metadata();
  console.log(
    JSON.stringify(
      {
        out: path.relative(root, outPath),
        width: meta.width,
        height: meta.height,
        sizeBytes: fs.statSync(outPath).size,
        copy: COPY,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
