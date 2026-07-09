import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { HeroImage } from "@/components/HeroImage";
import { COMPANY } from "@/lib/company";

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

const PARTNER_COMMITMENTS = [
  "Gennemsigtighed — ingen skjulte dagsordener, åbenhed i alle forhold",
  "Levering — forpligtelse på aftalte standarder, vi leverer hvad vi lover",
  "Kommunikation — regelmæssige opdateringer og ærlig dialog",
  "Fælles succes — når vi vokser, vokser vores partnere",
  "Etisk adfærd — principper styrer enhver forretningsbeslutning",
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
          <p className="text-[13px] text-midnight/60 mt-6">
            {COMPANY.legalName} · CVR {COMPANY.cvr}
          </p>
          <div className="mt-8">
            <CrestSeal size={80} className="!p-4 !justify-start" />
          </div>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Registreret leverandør
          </h2>
          <div className="mt-8 space-y-4 text-[17px] leading-body text-midnight/80">
            <p>
              <strong className="text-midnight font-medium">Selskab:</strong>{" "}
              {COMPANY.legalName}
            </p>
            <p>
              <strong className="text-midnight font-medium">CVR:</strong> {COMPANY.cvr}
            </p>
            <p>
              <strong className="text-midnight font-medium">Adresse:</strong>{" "}
              {COMPANY.address.street}, {COMPANY.address.postalCode}{" "}
              {COMPANY.address.locality}
            </p>
            <p>
              <strong className="text-midnight font-medium">Ledelse:</strong> Bibi
              Naziyh Dowezai, administrerende direktør
            </p>
          </div>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">
            Markedsmuligheden
          </h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8">
            Danmarks aldrende befolkning skaber vedvarende efterspørgsel i årtier.
            Offentligt finansieret hjemmepleje giver stabile, tilbagevendende
            kontrakter — og familier søger aktivt alternativer til uensartet
            kvalitet
          </p>
          <p className="text-[17px] leading-body text-ivory/80 mt-6">
            Premium Care er positioneret som en pålidelig partner, der overgår
            compliance-standarderne — med gennemsigtig rapportering, uddannet
            medarbejderstab og teknologidrevet effektivitet
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

      <section className="snap-section bg-ivory">
        <div className="w-full h-[40vh] relative">
          <HeroImage
            src="/images/municipal-technology.jpg"
            alt="Digital plejekoordinering og kvalitetsovervågning"
            fill
            sizes="100vw"
          />
        </div>
        <div className="section-padding reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Teknologi i plejens tjeneste
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8">
            Teknologi styrker den menneskelige forbindelse — den erstatter den
            aldrig. Vores platform understøtter plejekoordinering i realtid,
            sikker kommunikation med familier og datadrevet kvalitetsovervågning
          </p>
          <ul className="mt-8 space-y-3 text-[17px] leading-body text-midnight/80 list-none">
            <li>Intelligent planlægning og disponering med optimerede ruter</li>
            <li>Elektroniske plejeplaner og digitale plejenotater</li>
            <li>Kommunalt integrationslag for rapportering og compliance</li>
            <li>Datadrevet indsigt til løbende forbedring af plejens kvalitet</li>
          </ul>
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
          <h2 className="text-[30px] leading-normal text-midnight">
            Vores forpligtelse over for partnere
          </h2>
          <ul className="mt-10 space-y-4 list-none">
            {PARTNER_COMMITMENTS.map((item) => (
              <li key={item} className="text-[17px] leading-body text-midnight/80">
                {item}
              </li>
            ))}
          </ul>
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
            href={`mailto:${COMPANY.email}?subject=${encodeURIComponent("Kommunal henvendelse")}`}
            className="text-[30px] leading-normal text-gold font-body mt-8 inline-block hover:opacity-80 transition-opacity duration-300 focus-ring"
          >
            {COMPANY.email}
          </a>
          <p className="text-[13px] text-ivory/60 mt-6 uppercase tracking-wide">
            {COMPANY.openingHours.display} · Svar inden for to arbejdsdage
          </p>
          <p className="text-[13px] text-ivory/60 mt-4">
            <Link
              href="/tillid"
              className="underline underline-offset-4 hover:text-ivory transition-colors focus-ring"
            >
              Tillidscenter og governance
            </Link>
            {" · "}
            <Link
              href="/ledelse-og-governance"
              className="underline underline-offset-4 hover:text-ivory transition-colors focus-ring"
            >
              Ledelse og governance
            </Link>
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory">
        <CrestSeal size={180} className="mx-auto" />
      </section>
    </div>
  );
}
