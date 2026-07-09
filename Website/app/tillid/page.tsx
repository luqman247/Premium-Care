import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { InstitutionalIdentity } from "@/components/InstitutionalIdentity";
import { COMPANY } from "@/lib/company";
import { TRUST_POLICIES } from "@/lib/trust-policies";

export const metadata: Metadata = {
  title: "Tillidscenter",
  description:
    "Gennemsigtighed, dokumentation og ansvarlighed - politikker, kvalitetsramme og ledelsesansvar for Premium Care ApS.",
  alternates: { canonical: "/tillid" },
  openGraph: {
    title: "Tillidscenter · Premium Care",
    description:
      "Gennemsigtighed, dokumentation og ansvarlighed - politikker, kvalitetsramme og ledelsesansvar for Premium Care ApS.",
    url: "https://premiumcare.dk/tillid",
  },
};

const QUALITY_FRAMEWORK = [
  {
    title: "Regelefterlevelse",
    body: "Fuld efterlevelse af dansk plejelovgivning og kommunale krav, med regelmæssige complianceaudits",
  },
  {
    title: "Plejestandarder",
    body: "Vi overgår minimumsstandarderne i hver del af leveringen - Premium Care Standard er en målbar forpligtelse, ikke et mærkat",
  },
  {
    title: "Løbende overvågning",
    body: "Regelmæssige kvalitetsaudits, tilbagemeldinger fra klienter og resultatmål, der sikrer ensartet ekspertise",
  },
  {
    title: "Medarbejdernes kompetence",
    body: "Grundig uddannelse og løbende faglig udvikling for hver medarbejder",
  },
  {
    title: "Kommunikation med familien",
    body: "Gennemsigtig rapportering, regelmæssige opfølgninger og åbne kanaler for tilbagemelding",
  },
  {
    title: "Ansvarlighed",
    body: "Dokumenteret ejerskab af hver standard - kvaliteten har et navn knyttet til sig på alle niveauer",
  },
];

const VERIFICATION_LAYERS = [
  {
    layer: "Lag 1 · Egenkontrol",
    body: "Medarbejderne udfylder daglige plejenotater ved hvert besøg. Bekymringer indberettes straks. Dokumentation i realtid skaber ansvarlighed.",
  },
  {
    layer: "Lag 2 · Supervision",
    body: "Regelmæssige stikprøver og uanmeldte besøg. Ugentlige gennemgange af plejeplaner og vurderinger af klienternes trivsel.",
  },
  {
    layer: "Lag 3 · Ekstern kontrol",
    body: "Complianceaudits fra tilsynsmyndigheder, kommunale tilsyn og uafhængige tilfredshedsundersøgelser blandt klienter.",
  },
];

const COMPLIANCE_AREAS = [
  {
    area: "Dansk plejelovgivning",
    commitment: "Fuld efterlevelse af Serviceloven og kravene i hjemmeplejerammen",
  },
  {
    area: "Kommunale partnerskaber",
    commitment: "Samarbejdsaftaler med fokus på kvalitet, dokumentation og åben rapportering",
  },
  {
    area: "Arbejdsmiljø",
    commitment: "Efterlevelse af Arbejdsmiljøloven, risikovurderinger og sikkerhedsprocedurer",
  },
  {
    area: "Databeskyttelse (GDPR)",
    commitment: "Fuld efterlevelse for følsomme helbredsoplysninger, samtykkehåndtering og datasikkerhed",
  },
  {
    area: "Dokumentation",
    commitment: "Standarder for plejedokumentation og rapportering, der overgår lovmæssige minimumskrav",
  },
];

const DOCUMENTS = [
  { title: "Kvalitetshåndbog 2026", date: "Januar 2026", href: "/documents/kvalitetshåndbog_2026.pdf" },
  {
    title: "Årlig kvalitetsrevisionsrapport",
    date: "December 2025",
    href: "/documents/årlig_kvalitetsrevisionsrapport.pdf",
  },
  { title: "Klagerapport 2025", date: "December 2025", href: "/documents/klagerapport_2025.pdf" },
  { title: "Persondata politik", date: "November 2025", href: "/documents/persondata_politik.pdf" },
  { title: "Whistleblower politik", date: "Oktober 2025", href: "/documents/whistleblower_politik.pdf" },
  { title: "Ligebehandlingspolitik", date: "September 2025", href: "/documents/ligebehandlingspolitik.pdf" },
  { title: "Miljøpolitik", date: "August 2025", href: "/documents/miljøpolitik.pdf" },
  { title: "Seneste årsregnskab", date: "Marts 2025", href: "/documents/seneste_årsregnskab.pdf" },
  { title: "Demens- og faldprotokol", date: "Januar 2026", href: "/documents/demens-_og_faldprotokol.pdf" },
  {
    title: "Sikkerhedsvurdering skabelon",
    date: "Januar 2026",
    href: "/documents/sikkerhedsvurdering_skabelon.pdf",
  },
];

export default function TrustPage() {
  return (
    <div className="page-flow">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Tillidscenter
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Tillid bygges ikke af ord. Den bygges af dokumenter, procedurer og
            ansvarlighed. Her finder du politikker, kvalitetsramme og ledelsesansvar for{" "}
            {COMPANY.legalName}.
          </p>
          <p className="text-[17px] leading-body text-midnight/80 mt-6">
            <Link
              href="/kommuner"
              className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
            >
              Kommunal indkøb og beslutningsgrundlag
            </Link>
            {" · "}
            <Link
              href="/dokumentation"
              className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
            >
              Dokumentation
            </Link>
          </p>
          <InstitutionalIdentity className="mt-6" />
          <div className="mt-8">
            <CrestSeal size={80} decorative className="!p-4 !justify-start" />
          </div>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Whistleblower-ordning</h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-6 max-w-[55ch]">
            Alvorlige bekymringer skal kunne indberettes sikkert. Vores whistleblower-ordning
            understøtter åbenhed, ansvarlighed og beskyttelse af indberettere.
          </p>
          <Link
            href="/whistleblowing"
            className="block py-5 mt-6 text-[17px] text-midnight hover:tracking-wide transition-all duration-300 focus-ring border-t border-midnight/10"
          >
            Whistleblower-ordning →
          </Link>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Politikker</h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-6">
            Offentlige resuméer af vores kontrollerede dokumenter. Det fulde dokument
            gælder ved uoverensstemmelse.
          </p>
          <ul className="mt-10 space-y-0 list-none">
            {TRUST_POLICIES.map((policy) => (
              <li key={policy.slug} className="border-b border-midnight/10">
                <Link
                  href={`/${policy.slug}`}
                  className="block py-5 group hover:bg-midnight/[0.02] transition-colors duration-300 focus-ring"
                >
                  <p className="text-[19px] text-midnight group-hover:tracking-wide transition-all duration-300">
                    {policy.title}
                  </p>
                  <p className="text-[15px] leading-body text-midnight/70 mt-2">
                    {policy.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">
            Klager og eskalering
          </h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8 max-w-[55ch]">
            Klager tages alvorligt og behandles efter dokumenteret procedure med
            navngivet ansvarlig, tidsfrister og opfølgning til borger, pårørende og
            kommune, når det er relevant
          </p>
          <p className="text-[17px] leading-body text-ivory/80 mt-6">
            <Link
              href="/klager"
              className="underline underline-offset-4 text-gold hover:text-gold-light transition-colors focus-ring"
            >
              Klageprocedure
            </Link>
            {" · "}
            <Link
              href="/whistleblowing"
              className="underline underline-offset-4 text-gold hover:text-gold-light transition-colors focus-ring"
            >
              Whistleblower-ordning
            </Link>
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Vores kvalitetsramme
          </h2>
          <ul className="mt-10 space-y-6 list-none">
            {QUALITY_FRAMEWORK.map((item) => (
              <li key={item.title}>
                <h3 className="text-[19px] text-midnight">{item.title}</h3>
                <p className="text-[17px] leading-body text-midnight/70 mt-2">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">
            Tre lag af verifikation
          </h2>
          <div className="mt-10 space-y-8">
            {VERIFICATION_LAYERS.map((layer) => (
              <div key={layer.layer}>
                <h3 className="text-[19px] text-gold">{layer.layer}</h3>
                <p className="text-[17px] leading-body text-ivory/80 mt-3">
                  {layer.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="brand-divider" aria-hidden="true">
        <CrestSeal size={64} decorative className="!p-0" />
      </div>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Regelefterlevelse
          </h2>
          <div className="mt-10 space-y-0">
            {COMPLIANCE_AREAS.map((row) => (
              <div key={row.area} className="py-5 border-b border-midnight/10">
                <p className="text-[17px] text-midnight font-medium">{row.area}</p>
                <p className="text-[15px] leading-body text-midnight/70 mt-2">
                  {row.commitment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Dokumentbibliotek</h2>
          <div className="mt-12 space-y-0">
            {DOCUMENTS.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                className="flex items-center justify-between py-5 border-b border-midnight/10 group hover:bg-midnight/[0.02] transition-colors duration-300 focus-ring"
                download
                aria-label={`Download ${doc.title}`}
              >
                <div>
                  <p className="text-[17px] text-midnight group-hover:tracking-wide transition-all duration-300">
                    {doc.title}
                  </p>
                  <p className="text-[13px] text-midnight/50 mt-1">{doc.date} · PDF</p>
                </div>
                <span
                  className="text-[13px] text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                >
                  Download →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column text-center">
          <p className="text-[19px] leading-body text-ivory">
            Spørgsmål til politikker, kvalitet eller dokumentation? Kontakt os i
            åbningstiden — vi svarer inden for to arbejdsdage.
          </p>
          <a
            href={COMPANY.phone.href}
            className="text-[30px] leading-normal text-gold font-body mt-8 inline-block hover:opacity-80 transition-opacity duration-300 focus-ring"
          >
            {COMPANY.phone.display}
          </a>
          <p className="text-[13px] text-ivory/60 mt-4">
            <a
              href={`mailto:${COMPANY.email}`}
              className="underline underline-offset-4 hover:text-ivory transition-colors focus-ring"
            >
              {COMPANY.email}
            </a>
          </p>
          <p className="text-[13px] text-ivory/60 mt-6 uppercase tracking-wide">
            {COMPANY.openingHours.display}
          </p>
        </div>
      </section>
    </div>
  );
}
