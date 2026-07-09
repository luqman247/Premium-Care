import Image from "next/image";
import type { Metadata } from "next";

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
