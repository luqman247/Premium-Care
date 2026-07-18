import type { Metadata } from "next";
import Link from "next/link";
import { DamImage } from "@/components/DamImage";
import { PageHero } from "@/components/PageHero";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { COMPANY } from "@/lib/company";
import { FREE_CARE_MESSAGE, FREE_CARE_NOTE } from "@/lib/free-care";
import { PHOTO_SIZES } from "@/lib/photography";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Gratis hjemmepleje gennem frit valg",
  description:
    "Hvis du er visiteret til hjemmepleje af din kommune, kan du som udgangspunkt vælge en privat leverandør uden ekstra betaling",
  path: "/priser",
  imageAssetId: ASSET_IDS.priserHero,
});

const STEPS = [
  "Kommunen visiterer dig til hjemmepleje",
  "Du vælger selv leverandør",
  "PremiumCare ApS hjælper dig trygt i gang",
] as const;

const REASSURANCE = [
  "Ingen ekstra betaling for den kommunalt visiterede hjemmepleje, når frit valg gælder",
  "PremiumCare ApS hjælper med at forklare processen - uden pres",
  "Familien kan kontakte os, hvis I er usikre på visitation eller skift",
  "Klar vejledning. Rolig samtale. Ingen salgstale",
] as const;

const FAQ = [
  {
    q: "Koster privat hjemmepleje ekstra?",
    a: "Når du er visiteret af kommunen, betaler du som udgangspunkt ikke ekstra for den visiterede ydelse hos en privat leverandør. Muligheden følger kommunens regler",
  },
  {
    q: "Hvordan skifter man leverandør?",
    a: "Processen aftales med kommunen. Vi forklarer gerne trinnene og hjælper med det praktiske, så skiftet føles overskueligt",
  },
  {
    q: "Kan familien kontakte jer?",
    a: "Ja. Pårørende er velkomne til at ringe eller skrive, hvis I er i tvivl om visitation, frit valg eller, hvordan vi arbejder",
  },
  {
    q: "Hvad hvis jeg er i tvivl om visitation?",
    a: "Så starter vi med en rolig samtale. Vi hjælper med at forstå, hvad visitation betyder, og hvad der skal være på plads",
  },
  {
    q: "Hvornår kan PremiumCare hjælpe?",
    a: "Når der er en kommunal visitation til hjemmepleje, eller når I ønsker at forstå muligheden for frit valg. Vi presser ikke - vi vejleder",
  },
] as const;

export default function FreeCarePage() {
  return (
    <div className="page-flow">
      <PageHero
        eyebrow="Frit valg"
        title="Gratis hjemmepleje gennem frit valg"
        subtitle="Mange ved ikke, at man frit kan vælge en privat hjemmeplejeleverandør, når man er visiteret af kommunen"
        assetId={ASSET_IDS.priserHero}
        category="hero"
        objectPosition="center 32%"
      />

      <section className="act-fritvalg" aria-labelledby="priser-core">
        <div className="page-margin">
          <div className="act-fritvalg-stage">
            <h2 id="priser-core" className="act-fritvalg-statement">
              {FREE_CARE_MESSAGE}
            </h2>
            <p className="text-[17px] leading-body text-midnight/65 mt-8 max-w-[40ch] mx-auto">
              {FREE_CARE_NOTE}
            </p>
          </div>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding section-rule">
        <div className="page-margin act-pathways-layout">
          <div className="act-pathways-intro">
            <p className="type-eyebrow">Processen</p>
            <h2 className="type-section-title text-midnight mt-4">
              Sådan fungerer frit valg
            </h2>
          </div>
          <ol className="pathway-list mt-10 md:mt-0">
            {STEPS.map((step, index) => (
              <li key={step} className="pathway-item pathway-item--title">
                <span className="pathway-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="pathway-title">{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="editorial-split">
        <div className="editorial-split-media editorial-split-media--tall">
          <DamImage
            assetId={ASSET_IDS.priserSplit}
            category="details"
            fill
            sizes={PHOTO_SIZES.service}
            objectPosition="center 40%"
          />
        </div>
        <div className="editorial-split-copy">
          <p className="type-eyebrow">I hjemmet</p>
          <h2 className="type-section-title text-midnight mt-4">
            Pleje i hjemmet - uden unødig uro
          </h2>
          <p className="text-[17px] leading-body text-midnight/75 mt-6 max-w-[38ch]">
            Når visitationen er på plads, handler det om tryghed i hverdagen. Den samme
            medarbejder, når det er muligt. Tydelig besked til familien. Rolig start
          </p>
          <p className="mt-10">
            <Link href="/services" className="signature-link">
              Se vores ydelser
            </Link>
          </p>
        </div>
      </section>

      <section
        className="editorial-bleed"
        aria-labelledby="priser-relief"
        data-header-tone="dark"
      >
        <div className="editorial-bleed-media" aria-hidden="true">
          <DamImage
            assetId={ASSET_IDS.priserBleed}
            category="details"
            fill
            sizes={PHOTO_SIZES.hero}
            objectPosition="center 42%"
          />
        </div>
        <div className="editorial-bleed-veil" aria-hidden="true" />
        <div className="editorial-bleed-content page-margin">
          <p id="priser-relief" className="editorial-bleed-quote">
            Tryghed før beslutning
          </p>
          <p className="editorial-bleed-lede">
            Vi forklarer. Vi presser ikke. Familien er velkommen
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <p className="type-eyebrow">Ro</p>
          <h2 className="type-section-title text-midnight mt-4">
            Det, I kan forvente
          </h2>
          <ul className="editorial-reassure mt-12">
            {REASSURANCE.map((line) => (
              <li key={line} className="editorial-reassure-item">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding section-rule">
        <div className="reading-column">
          <p className="type-eyebrow">Spørgsmål</p>
          <h2 className="type-section-title text-midnight mt-4">
            Det, vi ofte bliver spurgt om
          </h2>
          <ul className="editorial-faq mt-12">
            {FAQ.map((item) => (
              <li key={item.q} className="editorial-faq-item">
                <details>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="editorial-pull">
        <div className="page-margin text-center">
          <p className="editorial-pull-quote text-midnight max-w-[16ch]">
            Vil du høre, hvordan frit valg fungerer i jeres situation?
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Kontakt os om frit valg
            </Link>
            <Link href="/services" className="btn-secondary">
              Se vores ydelser
            </Link>
          </div>
          <p className="text-[13px] text-midnight/50 mt-10">
            Eller ring{" "}
            <a href={COMPANY.phone.href} className="underline underline-offset-4 focus-ring">
              {COMPANY.phone.display}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
