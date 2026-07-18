import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CrisisHelp } from "@/components/CrisisHelp";
import { EditorialBanner } from "@/components/EditorialBanner";
import { FreeCareMessage } from "@/components/FreeCareMessage";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { COMPANY, companyLocalityLine } from "@/lib/company";
import { PHOTOGRAPHY } from "@/lib/photography";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Kontakt",
  description: `Kontakt ${COMPANY.legalName}. Telefon, e-mail og åbningstider`,
  path: "/kontakt",
  imageAssetId: ASSET_IDS.contactEditorial,
});

export default function ContactPage() {
  return (
    <div className="page-flow">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <CrisisHelp />
          <h1 className="type-page-title text-midnight tracking-tight mt-8">
            Kontakt
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            {COMPANY.legalName} · CVR {COMPANY.cvr}
          </p>
        </div>
      </section>

      <EditorialBanner
        assetId={PHOTOGRAPHY.contact.assetId}
        category="contact"
        alt="Omsorgsfuld hjemmepleje i trygge omgivelser"
      />

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column text-center">
          <h2 className="text-[30px] leading-normal text-ivory">Kontakt os</h2>
          <p className="text-[19px] leading-body text-ivory/80 mt-8">
            Ring til os i åbningstiden. Ved akut livstruende situationer: ring 112
          </p>
          <a
            href={COMPANY.phone.href}
            className="text-[48px] leading-tight text-gold font-body mt-8 inline-block hover:opacity-80 transition-opacity duration-300 focus-ring"
          >
            {COMPANY.phone.display}
          </a>
          <p className="mt-6">
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-[24px] leading-normal text-ivory/90 hover:text-ivory transition-colors focus-ring"
            >
              {COMPANY.email}
            </a>
          </p>
          <p className="text-[13px] text-ivory/60 mt-6 uppercase tracking-wide">
            {COMPANY.openingHours.display}
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Gratis hjemmepleje gennem frit valg
          </h2>
          <FreeCareMessage
            className="mt-8"
            showLink
            linkHref="/priser"
            linkLabel="Sådan fungerer frit valg"
          />
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Adresse</h2>
          <address className="text-[19px] leading-body text-midnight/90 mt-8 not-italic">
            {COMPANY.legalName}
            <br />
            {companyLocalityLine()}
            <br />
            {COMPANY.address.country}
          </address>
          <p className="text-[17px] leading-body text-midnight/70 mt-8">
            Kontor efter aftale. Pleje leveres i borgernes hjem, ikke på kontoret
          </p>
        </div>
      </section>

      <section id="kontaktformular" className="snap-section bg-ivory section-padding">
        <div className="page-margin flex justify-center">
          <ContactForm />
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">Akut hjælp</h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8">
            Ved livstruende akutte situationer: ring 112. PremiumCare leverer planlagt
            hjemmepleje, ikke akut hospitalsberedskab
          </p>
          <p className="text-[17px] leading-body text-ivory/80 mt-6">
            Bekymringer om en borgers sikkerhed uden for åbningstid: kontakt den
            kommunale vagtcentral eller 112, hvis situationen er akut
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
              href="/tillid"
              className="underline underline-offset-4 text-gold hover:text-gold-light transition-colors focus-ring"
            >
              Tillidscenter
            </Link>
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: `Kontakt ${COMPANY.brandName}`,
            url: `${COMPANY.url}/kontakt`,
            about: {
              "@type": "Organization",
              name: COMPANY.legalName,
              telephone: COMPANY.phone.schema,
              email: COMPANY.email,
              taxID: `CVR ${COMPANY.cvr}`,
              address: {
                "@type": "PostalAddress",
                postalCode: COMPANY.address.postalCode,
                addressLocality: COMPANY.address.locality,
                addressCountry: COMPANY.address.countryCode,
              },
            },
          }),
        }}
      />
    </div>
  );
}
