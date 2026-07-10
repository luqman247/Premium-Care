import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { EditorialBanner } from "@/components/EditorialBanner";
import { InstitutionalIdentity } from "@/components/InstitutionalIdentity";
import { COMPANY } from "@/lib/company";
import { PHOTOGRAPHY } from "@/lib/photography";
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
    url: `${COMPANY.url}/tillid`,
  },
};

const QUALITY_FRAMEWORK = [
  {
    title: "Loven",
    body: "Vi følger dansk plejelovgivning og kommunale krav",
  },
  {
    title: "Vores standard",
    body: "Punktlighed, kontinuitet og dokumenteret pleje - også ud over minimumskrav",
  },
  {
    title: "Opfølgning",
    body: "Vi følger op, når noget halter. Borgere og pårørende kan sige til",
  },
  {
    title: "Medarbejdernes fag",
    body: "Oplæring før første besøg alene. Løbende efteruddannelse",
  },
  {
    title: "Familier",
    body: "Vi fortæller, hvad vi ser. Pårørende kan altid kontakte os",
  },
  {
    title: "Ansvar",
    body: "Hver standard har en navngivet ejer. Kvaliteten kan forklares",
  },
];

const VERIFICATION_LAYERS = [
  {
    layer: "Daglig dokumentation",
    body: "Plejenotater ved hvert besøg. Bekymringer indberettes med det samme",
  },
  {
    layer: "Supervision",
    body: "Stikprøver og uanmeldte besøg. Ugentlig gennemgang af plejeplaner",
  },
  {
    layer: "Ekstern kontrol",
    body: "Tilsyn, kommunale gennemgange og uafhængige tilfredshedsundersøgelser",
  },
];

const COMPLIANCE_AREAS = [
  {
    area: "Dansk plejelovgivning",
    commitment: "Efterlevelse af Serviceloven og kravene i hjemmeplejerammen",
  },
  {
    area: "Kommunal samarbejde",
    commitment: "Aftaler med fokus på kvalitet, dokumentation og åben rapportering",
  },
  {
    area: "Arbejdsmiljø",
    commitment: "Efterlevelse af Arbejdsmiljøloven, risikovurderinger og sikkerhedsprocedurer",
  },
  {
    area: "Databeskyttelse",
    commitment: "GDPR for følsomme helbredsoplysninger, samtykke og datasikkerhed",
  },
  {
    area: "Dokumentation",
    commitment: "Plejedokumentation og rapportering ud over lovmæssige minimumskrav",
  },
];

const DOCUMENTS = [
  { title: "Kvalitetshåndbog 2026", date: "Januar 2026", href: "/documents/kvalitetshåndbog_2026.pdf" },
  {
    title: "Årlig kvalitetsrevisionsrapport",
    date: "Januar 2026",
    href: "/documents/årlig_kvalitetsrevisionsrapport.pdf",
  },
  { title: "Klagerapport", date: "Januar 2026", href: "/documents/klagerapport_2025.pdf" },
  { title: "Persondata politik", date: "Januar 2026", href: "/documents/persondata_politik.pdf" },
  { title: "Whistleblower politik", date: "Januar 2026", href: "/documents/whistleblower_politik.pdf" },
  { title: "Ligebehandlingspolitik", date: "Januar 2026", href: "/documents/ligebehandlingspolitik.pdf" },
  { title: "Miljøpolitik", date: "Januar 2026", href: "/documents/miljøpolitik.pdf" },
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
          <h1 className="type-page-title text-midnight tracking-tight">
            Tillidscenter
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Politikker, procedurer og dokumenter for {COMPANY.legalName}. Det fulde
            dokument gælder, hvis noget her og i PDF&apos;en ikke stemmer overens.
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

      <EditorialBanner
        assetId={PHOTOGRAPHY.trust.assetId}
        category="trust"
        alt="Dokumenteret pleje og faglig omsorg i hjemmet"
      />

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Whistleblower-ordning</h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-6 max-w-[55ch]">
            Alvorlige forhold skal kunne indberettes uden frygt for repressalier.
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
            En klage får en ansvarlig, en frist og et svar. Familien og kommunen får
            besked, når det er relevant
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
            Sådan tjekker vi kvaliteten
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
            åbningstiden. Vi svarer inden for to arbejdsdage.
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
