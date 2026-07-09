import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { COMPANY } from "@/lib/company";
import {
  VORES_LOFTE_COMPASS,
  VORES_LOFTE_HERO,
  VORES_LOFTE_PROMISES,
} from "@/lib/vores-lofte";

export const metadata: Metadata = {
  title: {
    absolute: "Vores løfte | Premium Care",
  },
  description:
    "Premium Cares offentlige løfte om værdighed, ærlig kommunikation, medarbejderudvikling, læring, kvalitet og menneskelig omsorg.",
  alternates: {
    canonical: "/vores-loefte",
  },
  openGraph: {
    title: "Vores løfte | Premium Care",
    description:
      "Premium Cares offentlige løfte om værdighed, ærlig kommunikation, medarbejderudvikling, læring, kvalitet og menneskelig omsorg.",
    url: "https://premiumcare.dk/vores-loefte",
  },
};

export default function VoresLoftePage() {
  return (
    <article className="bg-ivory pb-24">
      <header className="section-padding page-margin">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Vores løfte
          </h1>
          <p className="text-[13px] uppercase tracking-wide text-midnight/60 mt-8">
            Et offentligt tilsagn til borgere, familier, medarbejdere og kommuner
          </p>
          <p className="text-[13px] text-midnight/60 mt-4">
            {COMPANY.legalName} · CVR {COMPANY.cvr}
          </p>
        </div>
      </header>

      <div className="reading-column page-margin">
        <section className="section-padding pt-0" aria-labelledby="lofte-hero">
          <p
            id="lofte-hero"
            className="text-[30px] sm:text-[34px] leading-snug text-midnight max-w-[32ch]"
          >
            {VORES_LOFTE_HERO}
          </p>
          <p className="text-[19px] leading-body text-midnight/80 mt-10 max-w-[55ch]">
            Dette er ikke en reklame. Det er ikke en politik. Det er et løfte, vi
            giver offentligt — og som vi forventer at kunne stå inde for i
            hverdagen.
          </p>
        </section>

        <section className="section-padding" aria-labelledby="lofte-liste">
          <h2 id="lofte-liste" className="sr-only">
            Vores seks løfter
          </h2>
          <ol className="space-y-16 list-none">
            {VORES_LOFTE_PROMISES.map((promise, index) => (
              <li key={promise.id}>
                <p className="text-[13px] uppercase tracking-wide text-midnight/50">
                  Løfte {index + 1}
                </p>
                <p className="text-[30px] leading-normal text-midnight mt-4 max-w-[36ch]">
                  {promise.statement}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section-padding" aria-labelledby="lofte-praksis">
          <h2
            id="lofte-praksis"
            className="text-[30px] leading-normal text-midnight"
          >
            Sådan lever vi løftet
          </h2>
          <div className="mt-12 space-y-12">
            {VORES_LOFTE_PROMISES.map((promise) => (
              <div key={promise.id}>
                <h3 className="text-[19px] text-midnight">{promise.statement}</h3>
                <p className="text-[17px] leading-body text-midnight/80 mt-4 max-w-[55ch]">
                  {promise.practice}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding" aria-labelledby="lofte-tillid">
          <h2
            id="lofte-tillid"
            className="text-[30px] leading-normal text-midnight"
          >
            Løftet er forankret i dokumentation
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8 max-w-[55ch]">
            Et løfte uden ansvarlighed er kun ord. Vores løfte understøttes af
            politikker, ledelse og ansvar, kvalitetsarbejde og dokumentation - tilgængelig
            for familier og kommuner i vores tillidscenter.
          </p>
          <p className="mt-10">
            <Link
              href="/tillid"
              className="text-[17px] leading-body text-midnight underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
            >
              Gå til tillidscenteret
            </Link>
          </p>
        </section>

        <section className="section-padding" aria-labelledby="lofte-historie">
          <h2
            id="lofte-historie"
            className="text-[30px] leading-normal text-midnight"
          >
            Løftet har en historie
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8 max-w-[55ch]">
            Premium Care blev ikke grundlagt ud fra en forretningsplan alene. Det
            blev grundlagt ud fra en livshistorie — og et ønske om at give
            tilbage det, Danmark gav en familie. Vores løfte er forankret i den
            historie.
          </p>
          <p className="mt-10">
            <Link
              href="/min-historie"
              className="text-[17px] leading-body text-midnight underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
            >
              Læs grundlæggerens historie
            </Link>
          </p>
        </section>
      </div>

      <section
        className="section-padding bg-midnight"
        aria-labelledby="lofte-kompasset"
      >
        <div className="reading-column page-margin text-center">
          <p
            id="lofte-kompasset"
            className="text-[13px] uppercase tracking-wide text-gold mb-10"
          >
            Kompasset
          </p>
          <blockquote className="text-[30px] sm:text-[34px] leading-snug text-ivory max-w-[28ch] mx-auto">
            &ldquo;{VORES_LOFTE_COMPASS}&rdquo;
          </blockquote>
          <p className="text-[17px] leading-body text-ivory/70 mt-12 max-w-[42ch] mx-auto">
            Det er det spørgsmål, vi stiller os selv — hver dag, i hvert hjem, bag
            hver beslutning.
          </p>
        </div>
      </section>

      <footer className="section-padding pt-0" aria-hidden="true">
        <CrestSeal size={96} decorative className="mx-auto !p-4" />
      </footer>
    </article>
  );
}
