import type { Metadata } from "next";
import Link from "next/link";
import { DamImage } from "@/components/DamImage";
import { PageHero } from "@/components/PageHero";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { COMPANY } from "@/lib/company";
import { FREE_CARE_MESSAGE, FREE_CARE_NOTE } from "@/lib/free-care";
import { PHOTO_SIZES } from "@/lib/photography";

export const metadata: Metadata = {
  title: "Gratis hjemmepleje gennem frit valg",
  description:
    "Hvis du er visiteret til hjemmepleje af din kommune, kan du som udgangspunkt vælge en privat leverandør uden ekstra betaling",
  alternates: {
    canonical: "/priser",
  },
  openGraph: {
    title: "Gratis hjemmepleje gennem frit valg · PremiumCare",
    description:
      "Hvis du er visiteret til hjemmepleje af din kommune, kan du som udgangspunkt vælge en privat leverandør uden ekstra betaling",
    url: `${COMPANY.url}/priser`,
  },
};

const STEPS = [
  {
    title: "Kommunen visiterer dig til hjemmepleje",
  },
  {
    title: "Du vælger selv leverandør",
  },
  {
    title: "PremiumCare ApS hjælper dig trygt i gang",
  },
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

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <p className="type-lead text-midnight max-w-[42ch]">{FREE_CARE_MESSAGE}</p>
          <p className="text-[17px] leading-body text-midnight/68 mt-6 max-w-[48ch]">
            {FREE_CARE_NOTE}
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding section-rule">
        <div className="page-margin">
          <h2 className="type-section-title text-midnight">
            Sådan fungerer frit valg
          </h2>
          <ol className="editorial-steps mt-12">
            {STEPS.map((step, index) => (
              <li key={step.title}>
                <span className="editorial-step-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="editorial-step-title">{step.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="editorial-split editorial-split--reverse">
        <div className="editorial-split-media">
          <DamImage
            assetId={ASSET_IDS.priserSplit}
            category="details"
            fill
            sizes={PHOTO_SIZES.service}
            objectPosition="center 40%"
          />
        </div>
        <div className="editorial-split-copy">
          <h2 className="type-section-title text-midnight">
            Pleje i hjemmet - uden unødig uro
          </h2>
          <p className="text-[17px] leading-body text-midnight/75 mt-6 max-w-[42ch]">
            Når visitationen er på plads, handler det om tryghed i hverdagen. Den samme
            medarbejder, når det er muligt. Tydelig besked til familien. Rolig start
          </p>
          <p className="mt-8">
            <Link href="/services" className="signature-link">
              Se vores ydelser
            </Link>
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="type-section-title text-ivory">Tryghed før beslutning</h2>
          <ul className="mt-10 space-y-6 list-none">
            <li className="text-[17px] leading-body text-ivory/80 max-w-[48ch]">
              Ingen ekstra betaling for den kommunalt visiterede hjemmepleje, når frit
              valg gælder
            </li>
            <li className="text-[17px] leading-body text-ivory/80 max-w-[48ch]">
              PremiumCare ApS hjælper med at forklare processen - uden pres
            </li>
            <li className="text-[17px] leading-body text-ivory/80 max-w-[48ch]">
              Familien kan kontakte os, hvis I er usikre på visitation eller skift
            </li>
            <li className="text-[17px] leading-body text-ivory/80 max-w-[48ch]">
              Klar vejledning. Rolig samtale. Ingen salgstale
            </li>
          </ul>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="type-section-title text-midnight">Spørgsmål, vi ofte får</h2>
          <div className="mt-10">
            <ul className="editorial-faq">
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
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding section-rule">
        <div className="reading-column text-center">
          <p className="type-pullquote text-midnight mx-auto">
            Vil du høre, hvordan frit valg fungerer i jeres situation?
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Kontakt os om frit valg
            </Link>
            <Link href="/services" className="btn-secondary">
              Se vores ydelser
            </Link>
          </div>
          <p className="text-[13px] text-midnight/50 mt-8">
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
