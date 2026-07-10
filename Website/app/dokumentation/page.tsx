import type { Metadata } from "next";
import Link from "next/link";
import { EditorialBanner } from "@/components/EditorialBanner";
import { DOCUMENTATION_LINKS } from "@/lib/documentation";
import { COMPANY } from "@/lib/company";
import { MUNICIPAL_DOCUMENTS } from "@/lib/institutional";
import { PHOTOGRAPHY } from "@/lib/photography";

export const metadata: Metadata = {
  title: "Dokumentation",
  description:
    "Politikker, procedurer og offentlige dokumenter fra PremiumCare ApS.",
  alternates: { canonical: "/dokumentation" },
  openGraph: {
    title: "Dokumentation · PremiumCare",
    description:
      "Politikker, procedurer og offentlige dokumenter fra PremiumCare ApS.",
    url: `${COMPANY.url}/dokumentation`,
  },
};

export default function DocumentationPage() {
  return (
    <article className="bg-ivory pb-24">
      <header className="section-padding page-margin">
        <div className="reading-column">
          <h1 className="type-page-title text-midnight tracking-tight">
            Dokumentation
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8 max-w-[55ch]">
            Offentlige politikker, procedurer og erklæringer fra {COMPANY.legalName}.
            Det fulde dokument gælder ved uoverensstemmelse med resuméer på
            hjemmesiden
          </p>
          <p className="text-[13px] text-midnight/60 mt-6">
            CVR {COMPANY.cvr}
          </p>
        </div>
      </header>

      <EditorialBanner
        assetId={PHOTOGRAPHY.documentation.assetId}
        category="trust"
        alt="Kvalitetsdokumentation og faglig pleje"
      />

      <div className="reading-column page-margin">
        <section className="section-padding pt-0" aria-labelledby="doc-municipal">
          <h2 id="doc-municipal" className="text-[30px] leading-normal text-midnight">
            Kommunal indkøb
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-6 max-w-[55ch]">
            Beslutningsgrundlag og dokumenter til kommunal indkøb og samarbejdspartnere
          </p>
          <ul className="mt-8 space-y-4 list-none">
            {MUNICIPAL_DOCUMENTS.slice(0, 3).map((doc) => (
              <li key={doc.href}>
                <a
                  href={doc.href}
                  className="text-[17px] text-midnight underline underline-offset-4 focus-ring"
                  download
                >
                  {doc.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/kommuner" className="text-[17px] underline underline-offset-4 focus-ring">
              Kommunal indkøb og samarbejde
            </Link>
          </p>
        </section>

        <section className="section-padding pt-0" aria-labelledby="doc-links">
          <h2 id="doc-links" className="sr-only">
            Dokumenter og politikker
          </h2>
          <ul className="space-y-0 list-none">
            {DOCUMENTATION_LINKS.map((item) => (
              <li key={item.href} className="border-b border-midnight/10">
                <Link
                  href={item.href}
                  className="block py-5 text-[17px] text-midnight hover:tracking-wide transition-all duration-300 focus-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-padding" aria-labelledby="doc-ledelse">
          <h2 id="doc-ledelse" className="text-[30px] leading-normal text-midnight">
            Ledelse og ansvar
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-6 max-w-[55ch]">
            Læs om ledelse, ansvar, kvalitetsforpligtelse og virksomhedens
            struktur
          </p>
          <p className="mt-8">
            <Link
              href="/ledelse-og-governance"
              className="text-[17px] leading-body text-midnight underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
            >
              Ledelse og ansvar
            </Link>
          </p>
        </section>

        <section className="section-padding" aria-labelledby="doc-cta">
          <h2 id="doc-cta" className="sr-only">
            Kontakt
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="btn-primary">
              Kontakt os om frit valg
            </Link>
            <Link href="/tillid" className="btn-secondary">
              Se vores dokumentation
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
