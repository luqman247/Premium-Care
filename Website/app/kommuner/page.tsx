import type { Metadata } from "next";
import Link from "next/link";
import { FreeCareMessage } from "@/components/FreeCareMessage";
import { DamImage } from "@/components/DamImage";
import { COMPANY, companyLocalityLine } from "@/lib/company";
import {
  MUNICIPAL_CONTACT_SUBJECT,
  MUNICIPAL_DOCUMENTS,
  MUNICIPAL_KPIS,
} from "@/lib/institutional";
import { PHOTOGRAPHY, PHOTO_SIZES } from "@/lib/photography";

export const metadata: Metadata = {
  title: "Kommunalt samarbejde",
  description:
    "Beslutningsgrundlag, dokumentation, kvalitetsdata og virksomhedsoplysninger for kommunal indkøb - PremiumCare ApS",
  alternates: {
    canonical: "/kommuner",
  },
  openGraph: {
    title: "Kommunalt samarbejde · PremiumCare",
    description:
      "Beslutningsgrundlag, dokumentation, kvalitetsdata og virksomhedsoplysninger for kommunal indkøb",
    url: `${COMPANY.url}/kommuner`,
  },
};

const PARTNER_COMMITMENTS = [
  "Åben rapportering og dokumenteret kvalitet",
  "Aftalte standarder og opfølgning, når noget halter",
  "Faste kontaktpunkter og tydelig eskalering",
  "Efterlevelse af Serviceloven, GDPR og kommunale krav",
  "Navngivne ejere af kvalitet, klager og hændelser",
];

export default function MunicipalPage() {
  return (
    <div className="page-flow">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="type-page-title text-midnight tracking-tight">
            Kommunal indkøb og samarbejde
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8 max-w-[55ch]">
            Denne side er for kommunal indkøb, udbud og faglige samarbejdspartnere.
            Her finder du beslutningsgrundlag, virksomhedsoplysninger, dokumentation og
            kontaktpunkt - uden markedsføring
          </p>
          <p className="text-[13px] text-midnight/60 mt-6">
            {COMPANY.legalName} · CVR {COMPANY.cvr}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/tillid" className="btn-primary inline-flex">
              Tillidscenter og dokumenter
            </Link>
            <Link href="/dokumentation" className="btn-secondary inline-flex">
              Dokumentation
            </Link>
          </div>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Virksomhedsoplysninger
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
              {companyLocalityLine()}, {COMPANY.address.country}
            </p>
            <p>
              <strong className="text-midnight font-medium">Ledelse:</strong> Bibi
              Naziyh Dowezai, administrerende direktør
            </p>
            <p>
              <strong className="text-midnight font-medium">Kontakt:</strong>{" "}
              <a href={`mailto:${COMPANY.email}`} className="underline underline-offset-4 focus-ring">
                {COMPANY.email}
              </a>
              {" · "}
              <a href={COMPANY.phone.href} className="underline underline-offset-4 focus-ring">
                {COMPANY.phone.display}
              </a>
            </p>
          </div>
          <p className="text-[15px] leading-body text-midnight/60 mt-8 max-w-[55ch]">
            Leverandørstatus og konkrete samarbejdsaftaler afhænger af den enkelte
            kommunes godkendelse og indgåede aftaler. Spørgsmål til autorisation og
            dækningsområde rettes direkte til os
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">
            Samarbejde med kommuner
          </h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8 max-w-[55ch]">
            PremiumCare leverer hjemmepleje efter gældende lovgivning og kommunale
            aftaler. Vi dokumenterer kvalitet, indberetter afvigelser og rapporterer åbent
            til samarbejdspartnere
          </p>
          <p className="text-[17px] leading-body text-ivory/80 mt-6 max-w-[55ch]">
            Vi arbejder ud fra Servicelovens krav, kommunale kvalitetsstandarder og
            gældende databeskyttelse ved levering i borgernes hjem
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight text-center">
            Nøgletal
          </h2>
          <p className="text-[15px] leading-body text-midnight/60 mt-4 text-center max-w-[50ch] mx-auto">
            Tal med metode og periode. Det fulde grundlag findes i beslutningsgrundlaget
            og kvalitetsrevisionsrapporten
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {MUNICIPAL_KPIS.map((kpi) => (
              <div key={kpi.label}>
                <p className="text-[48px] leading-tight text-gold font-body">{kpi.value}</p>
                <p className="text-[13px] text-midnight/60 uppercase tracking-wide mt-2">
                  {kpi.label}
                </p>
                <p className="kpi-context">{kpi.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Frit valg for borgere
          </h2>
          <FreeCareMessage className="mt-8" showLink={false} />
        </div>
      </section>

      <section className="snap-section bg-ivory">
        <div className="w-full h-[40vh] relative">
          <DamImage
            assetId={PHOTOGRAPHY.municipal.assetId}
            fill
            sizes={PHOTO_SIZES.service}
            objectPosition={PHOTOGRAPHY.municipal.objectPosition}
          />
        </div>
        <div className="section-padding reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Dokumentation og rapportering
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8 max-w-[55ch]">
            Vi dokumenterer elektronisk og rapporterer til kommunen. Systemerne
            hjælper - de erstatter ikke den faglige vurdering
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">Kvalitetsdashboard</h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8 max-w-[55ch]">
            Adgang til live kvalitetsdata gives efter aftale med kommunal samarbejdspartner.
            Kontakt os for oprettelse af adgang og orientering i datastrukturen
          </p>
          <a
            href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(MUNICIPAL_CONTACT_SUBJECT)}`}
            className="btn-primary mt-8 inline-flex"
          >
            Anmod om dashboard-adgang
          </a>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Forpligtelser over for kommuner
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
          <h2 className="text-[30px] leading-normal text-midnight">Dokumenter til indkøb</h2>
          <ul className="mt-8 space-y-5 list-none">
            {MUNICIPAL_DOCUMENTS.map((doc) => (
              <li key={doc.label} className="text-[17px] leading-body text-midnight">
                <span>{doc.label}</span>
                <span className="block text-[14px] text-midnight/55 mt-1">
                  {doc.status}
                </span>
                {"summaryHref" in doc && doc.summaryHref ? (
                  <Link
                    href={doc.summaryHref}
                    className="inline-block mt-2 text-[15px] underline underline-offset-4 focus-ring"
                  >
                    Læs oversigt
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href="/dokumentation"
              className="text-[17px] text-midnight underline underline-offset-4 focus-ring"
            >
              Se fuld dokumentationsoversigt
            </Link>
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column text-center">
          <p className="text-[19px] leading-body text-ivory">
            Spørgsmål til indkøb, udbud eller samarbejdsaftale?
          </p>
          <a
            href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(MUNICIPAL_CONTACT_SUBJECT)}`}
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
              Tillidscenter
            </Link>
            {" · "}
            <Link
              href="/ledelse-og-governance"
              className="underline underline-offset-4 hover:text-ivory transition-colors focus-ring"
            >
              Ledelse og ansvar
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
