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
    "Gennemsigtighed, dokumentation og ansvarlighed - politikker, kvalitetsramme og ledelsesansvar for PremiumCare ApS.",
  alternates: { canonical: "/tillid" },
  openGraph: {
    title: "Tillidscenter · PremiumCare",
    description:
      "Gennemsigtighed, dokumentation og ansvarlighed - politikker, kvalitetsramme og ledelsesansvar for PremiumCare ApS.",
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
    body: "Punktlighed, kontinuitet og dokumenteret pleje — også ud over minimumskrav",
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
      <section className="bg-ivory section-padding">
        <div className="reading-column">
          <p className="type-eyebrow">Tillid</p>
          <h1 className="type-page-title text-midnight tracking-tight mt-4">
            Tillidscenter
          </h1>
          <p className="type-lead text-midnight/75 mt-8 max-w-[40ch]">
            Politikker, kvalitet og dokumentation for {COMPANY.legalName}. Det
            fulde dokument gælder ved uoverensstemmelse
          </p>
          <InstitutionalIdentity className="mt-8" />
          <div className="mt-10">
            <CrestSeal size={64} decorative className="!p-0 !justify-start" />
          </div>
        </div>
      </section>

      <EditorialBanner
        assetId={PHOTOGRAPHY.trust.assetId}
        category="trust"
        alt="Dokumenteret pleje og faglig omsorg i hjemmet"
      />

      <section className="bg-ivory section-padding section-rule">
        <div className="page-margin trust-page-shell">
          <p className="type-eyebrow">Ansvarlighed</p>
          <h2 className="type-section-title text-midnight mt-4">
            Når noget skal kunne siges
          </h2>
          <div className="trust-module-grid mt-10">
            <div className="trust-module">
              <h3 className="trust-module-title">Klager</h3>
              <p className="trust-module-body">
                En klage får en ansvarlig, en frist og et svar
              </p>
              <p className="mt-4">
                <Link href="/klager" className="signature-link">
                  Klageprocedure
                </Link>
              </p>
            </div>
            <div className="trust-module">
              <h3 className="trust-module-title">Whistleblower</h3>
              <p className="trust-module-body">
                Alvorlige forhold skal kunne indberettes uden frygt
              </p>
              <p className="mt-4">
                <Link href="/whistleblowing" className="signature-link">
                  Whistleblower-ordning
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory section-padding section-rule">
        <div className="reading-column">
          <p className="type-eyebrow">Politikker</p>
          <h2 className="type-section-title text-midnight mt-4">
            Offentlige resuméer
          </h2>
          <ul className="mt-10 space-y-0 list-none">
            {TRUST_POLICIES.map((policy) => (
              <li key={policy.slug}>
                <Link
                  href={`/${policy.slug}`}
                  className="trust-library-item focus-ring"
                >
                  <span>
                    <span className="block text-[18px] leading-snug">{policy.title}</span>
                    <span className="block text-[15px] leading-body text-midnight/60 mt-2">
                      {policy.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-midnight section-padding">
        <div className="page-margin trust-page-shell">
          <p className="type-eyebrow act-trust-eyebrow">Kvalitet</p>
          <h2 className="type-section-title text-ivory mt-4">Vores ramme</h2>
          <div className="trust-module-grid mt-10">
            {QUALITY_FRAMEWORK.map((item) => (
              <div key={item.title} className="trust-module trust-module--on-dark">
                <h3 className="trust-module-title">{item.title}</h3>
                <p className="trust-module-body">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <h3 className="text-[24px] leading-snug text-ivory tracking-tight">
              Sådan tjekker vi
            </h3>
            <div className="mt-8 space-y-6">
              {VERIFICATION_LAYERS.map((layer) => (
                <div key={layer.layer}>
                  <p className="text-[15px] tracking-wide uppercase text-gold">
                    {layer.layer}
                  </p>
                  <p className="text-[17px] leading-body text-ivory/75 mt-2 max-w-[48ch]">
                    {layer.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory section-padding">
        <div className="reading-column">
          <p className="type-eyebrow">Bibliotek</p>
          <h2 className="type-section-title text-midnight mt-4">
            Dokumenter
          </h2>
          <div className="mt-10">
            {DOCUMENTS.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                className="trust-library-item focus-ring"
                download
                aria-label={`Download ${doc.title}`}
              >
                <span className="text-[17px] leading-snug">{doc.title}</span>
                <span className="trust-library-meta">{doc.date} · PDF</span>
              </a>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/dokumentation" className="signature-link">
              Se også dokumentationssiden
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-midnight section-padding">
        <div className="reading-column text-center">
          <p className="type-lead text-ivory/80 mx-auto max-w-[36ch]">
            Spørgsmål til politikker eller dokumentation? Ring i åbningstiden
          </p>
          <a
            href={COMPANY.phone.href}
            className="text-[28px] leading-normal text-gold mt-8 inline-block focus-ring"
          >
            {COMPANY.phone.display}
          </a>
          <p className="text-[13px] text-ivory/50 mt-4">
            {COMPANY.openingHours.display}
          </p>
        </div>
      </section>
    </div>
  );
}
