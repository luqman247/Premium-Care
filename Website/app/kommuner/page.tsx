import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kommunalt samarbejde",
  description: "Kommunalt beslutningsgrundlag, kvalitetsdata og dokumentation",
  alternates: {
    canonical: "/kommuner",
  },
  openGraph: {
    title: "Kommunalt samarbejde · Premium Care",
    description: "Kommunalt beslutningsgrundlag, kvalitetsdata og dokumentation",
    url: "https://premiumcare.dk/kommuner",
  },
};

const GOVERNANCE_DOCS = [
  { href: "/documents/ISO_9001_2015.pdf", label: "ISO 9001:2015 certifikat" },
  { href: "/documents/GDPR_Politik.pdf", label: "GDPR compliance" },
  { href: "/documents/Klageprocedure.pdf", label: "Klageprocedure" },
  { href: "/documents/Arbejdsmiljoe.pdf", label: "Arbejdstilsynets godkendelse" },
  { href: "/documents/Aarsregnskab.pdf", label: "Seneste årsregnskab" },
];

export default function MunicipalPage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Til kommuner
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Vi ved, at kommunal indkøb ikke handler om brochurer. Den handler om
            dokumentation, priser og resultater. Her er begge dele.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Kommunalt beslutningsgrundlag
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8">
            Et dokument på 24 sider. Historie, standarder, kvalitetsmålinger,
            økonomi og garanti. Download det her.
          </p>
          <a
            href="/documents/Premium_Care_Kommunalt_Beslutningsgrundlag.pdf"
            className="btn-secondary mt-8 inline-flex"
            download
          >
            Download PDF
          </a>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding text-center">
        <div className="reading-column">
          <p className="text-[64px] leading-tight text-gold font-body">94%</p>
          <p className="text-[16px] text-midnight/60 uppercase tracking-wide mt-4">
            Årlig klienttilfredshed
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding text-center">
        <div className="reading-column">
          <p className="text-[64px] leading-tight text-gold font-body">87%</p>
          <p className="text-[16px] text-midnight/60 uppercase tracking-wide mt-4">
            Caregiver retention (12 måneder)
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding text-center">
        <div className="reading-column">
          <p className="text-[64px] leading-tight text-gold font-body">0</p>
          <p className="text-[16px] text-midnight/60 uppercase tracking-wide mt-4">
            Alvorlige hændelser (2025)
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">Kvalitetsdashboard</h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8">
            Et password-beskyttet område for kommunalpartnere. Live data. Ingen
            markedsføring. Kun tal.
          </p>
          <a
            href="https://dashboard.premiumcare.dk"
            className="btn-primary mt-8 inline-flex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gå til kvalitetsdashboard (åbner i nyt vindue)"
          >
            Gå til dashboard
          </a>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Dokumentation</h2>
          <ul className="mt-8 space-y-4 list-none">
            {GOVERNANCE_DOCS.map((doc) => (
              <li key={doc.href}>
                <a
                  href={doc.href}
                  className="text-[17px] text-midnight hover:tracking-wide transition-all duration-300 focus-ring"
                  download
                >
                  {doc.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column text-center">
          <p className="text-[19px] leading-body text-ivory">
            Spørgsmål til indkøb? Kontakt vores kommunale partnerskabsteam.
          </p>
          <a
            href="mailto:kommune@premiumcare.dk"
            className="text-[30px] leading-normal text-gold font-body mt-8 inline-block hover:opacity-80 transition-opacity duration-300 focus-ring"
          >
            kommune@premiumcare.dk
          </a>
          <p className="text-[13px] text-ivory/60 mt-6 uppercase tracking-wide">
            Svar inden for to timer
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory flex items-center justify-center">
        <Image
          src="/images/crest-monumental.png"
          alt="Premium Care våbenskjold"
          width={180}
          height={180}
          className="mx-auto"
          priority
        />
      </section>
    </div>
  );
}
