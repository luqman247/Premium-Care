import type { Metadata } from "next";
import { CrestSeal } from "@/components/CrestSeal";

export const metadata: Metadata = {
  title: "Tillid",
  description: "Gennemsigtighed, dokumentation og ansvarlighed",
  alternates: {
    canonical: "/tillid",
  },
  openGraph: {
    title: "Tillid · Premium Care",
    description: "Gennemsigtighed, dokumentation og ansvarlighed",
    url: "https://premiumcare.dk/tillid",
  },
};

const PHONE_DISPLAY = "+45 00 00 00 00";
const PHONE_HREF = "tel:+4500000000";

const QUALITY_FRAMEWORK = [
  {
    title: "Regelefterlevelse",
    body: "Fuld efterlevelse af dansk plejelovgivning og kommunale krav, med regelmæssige complianceaudits",
  },
  {
    title: "Plejestandarder",
    body: "Vi overgår minimumsstandarderne i hver del af leveringen — Premium Care er en målbar forpligtelse, ikke et mærkat",
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
    body: "Dokumenteret ejerskab af hver standard — kvaliteten har et navn knyttet til sig på alle niveauer",
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
  { area: "Dansk plejelovgivning", commitment: "Fuld efterlevelse af Serviceloven og kravene i hjemmeplejerammen" },
  { area: "Kommunale partnerskaber", commitment: "Samarbejdsaftaler med fokus på kvalitet, dokumentation og åben rapportering" },
  { area: "Arbejdsmiljø", commitment: "Efterlevelse af Arbejdsmiljøloven, risikovurderinger og sikkerhedsprocedurer" },
  { area: "Databeskyttelse (GDPR)", commitment: "Fuld efterlevelse for følsomme helbredsoplysninger, samtykkehåndtering og datasikkerhed" },
  { area: "Dokumentation", commitment: "Standarder for plejedokumentation og rapportering, der overgår lovmæssige minimumskrav" },
];

const DOCUMENTS = [
  { title: "Kvalitetshåndbog 2026", date: "Januar 2026", size: "4.2 MB" },
  { title: "Årlig kvalitetsrevisionsrapport", date: "December 2025", size: "2.8 MB" },
  { title: "Klagerapport 2025", date: "December 2025", size: "1.1 MB" },
  { title: "Persondata politik", date: "November 2025", size: "0.8 MB" },
  { title: "Whistleblower politik", date: "Oktober 2025", size: "0.6 MB" },
  { title: "Ligebehandlingspolitik", date: "September 2025", size: "0.5 MB" },
  { title: "Miljøpolitik", date: "August 2025", size: "0.4 MB" },
  { title: "Seneste årsregnskab", date: "Marts 2025", size: "3.5 MB" },
  { title: "Demens- og faldprotokol", date: "Januar 2026", size: "1.9 MB" },
  { title: "Sikkerhedsvurdering skabelon", date: "Januar 2026", size: "0.7 MB" },
];

function documentHref(title: string) {
  return `/documents/${title.replace(/\s+/g, "_").toLowerCase()}.pdf`;
}

export default function TrustPage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Tillid
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Tillid bygges ikke af ord. Den bygges af dokumenter. Her er vores.
          </p>
          <div className="mt-8">
            <CrestSeal size={80} className="!p-4 !justify-start" />
          </div>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">
            Hvis det ikke føles rigtigt
          </h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8">
            Hvis din mor ikke føler sig tryg efter den første uge, finder vi en
            anden caregiver. Hvis det stadig ikke føles rigtigt, hjælper vi dig
            med at finde en anden løsning — også hvis det ikke er hos os.
          </p>
          <p className="text-[17px] leading-body text-ivory/80 mt-6">
            Vi er ikke bange for at miste en kunde. Vi er bange for at holde
            fast i en, der ikke er tilfreds.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Vores kvalitetsramme
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-6">
            Ekspertise er ikke en ambition — det er vores standard
          </p>
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

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Regelefterlevelse
          </h2>
          <div className="mt-10 space-y-0">
            {COMPLIANCE_AREAS.map((row) => (
              <div
                key={row.area}
                className="py-5 border-b border-midnight/10"
              >
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
          <h2 className="text-[30px] leading-normal text-midnight">Dokumenter</h2>
          <div className="mt-12 space-y-0">
            {DOCUMENTS.map((doc) => (
              <a
                key={doc.title}
                href={documentHref(doc.title)}
                className="flex items-center justify-between py-5 border-b border-midnight/10 group hover:bg-midnight/[0.02] transition-colors duration-300 focus-ring"
                download
                aria-label={`Download ${doc.title}`}
              >
                <div>
                  <p className="text-[17px] text-midnight group-hover:tracking-wide transition-all duration-300">
                    {doc.title}
                  </p>
                  <p className="text-[13px] text-midnight/50 mt-1">
                    {doc.date} · {doc.size}
                  </p>
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

      <section className="snap-section bg-ivory section-padding text-center">
        <div className="reading-column">
          <p className="text-[64px] leading-tight text-gold font-body">100%</p>
          <p className="text-[16px] text-midnight/60 uppercase tracking-wide mt-4">
            Klager besvaret inden for 48 timer
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column text-center">
          <p className="text-[19px] leading-body text-ivory">
            Hver eneste dokument på denne side er verificeret af uafhængig part.
            Hvis du har spørgsmål, ringer du til os. Vi svarer inden for to timer.
          </p>
          <a
            href={PHONE_HREF}
            className="text-[30px] leading-normal text-gold font-body mt-8 inline-block hover:opacity-80 transition-opacity duration-300 focus-ring"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="snap-section bg-ivory">
        <CrestSeal size={180} className="mx-auto" />
      </section>
    </div>
  );
}
