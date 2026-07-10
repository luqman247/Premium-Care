import type { Metadata } from "next";
import Link from "next/link";
import { CrisisHelp } from "@/components/CrisisHelp";
import { EditorialBanner } from "@/components/EditorialBanner";
import { FreeCareMessage } from "@/components/FreeCareMessage";
import { COMPANY } from "@/lib/company";
import { PHOTOGRAPHY } from "@/lib/photography";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt ${COMPANY.legalName}. Telefon, e-mail og åbningstider.`,
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: `Kontakt · ${COMPANY.brandName}`,
    description: `Kontakt ${COMPANY.legalName}. Telefon, e-mail og åbningstider.`,
    url: "https://premiumcare.dk/kontakt",
  },
};

type ContactPageProps = {
  searchParams: Promise<{ sendt?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { sendt } = await searchParams;
  const formSent = sendt === "1";

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
          <p className="text-[19px] leading-body text-ivory">
            Ring til os i åbningstiden. Ved akut livstruende situationer: ring 112
          </p>
          <a
            href={COMPANY.phone.href}
            className="text-[48px] leading-tight text-gold font-body mt-8 inline-block hover:opacity-80 transition-opacity duration-300 focus-ring"
          >
            {COMPANY.phone.display}
          </a>
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
          <h2 className="text-[30px] leading-normal text-midnight">E-mail</h2>
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-[24px] leading-normal text-midnight mt-6 inline-block hover:opacity-80 transition-opacity duration-300 focus-ring"
          >
            {COMPANY.email}
          </a>
          <p className="text-[17px] leading-body text-midnight/80 mt-8">
            Ved akut behov: ring. E-mail besvares inden for to arbejdsdage i
            åbningstiden
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Besøgsadresse</h2>
          <address className="text-[19px] leading-body text-midnight/90 mt-8 not-italic">
            {COMPANY.legalName}
            <br />
            {COMPANY.address.street}
            <br />
            {COMPANY.address.postalCode} {COMPANY.address.locality}
            <br />
            {COMPANY.address.country}
          </address>
          <p className="text-[17px] leading-body text-midnight/70 mt-8">
            Kontor efter aftale. Pleje leveres i borgernes hjem, ikke på kontoret
          </p>
        </div>
      </section>

      <section id="kontaktformular" className="snap-section bg-ivory section-padding">
        <div className="reading-column max-w-[480px]">
          {formSent && (
            <p className="text-[17px] leading-body text-midnight mb-8" role="status">
              Tak. Vi vender tilbage inden for to arbejdsdage
            </p>
          )}
          <h2 className="text-[30px] leading-normal text-midnight">
            Skriv til os
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-6">
            Du behøver ikke at vide, hvad du vil spørge om. Skriv eller ring - vi
            finder ud af resten sammen
          </p>
          <form className="space-y-8 mt-10" action="/api/contact" method="POST">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Dit navn"
                aria-label="Dit navn"
                className="w-full"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Dit telefonnummer"
                aria-label="Dit telefonnummer"
                className="w-full"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Hvad vil du gerne tale om? (valgfri)"
                aria-label="Hvad vil du gerne tale om?"
                rows={4}
                className="w-full resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send
            </button>
          </form>
          <p className="text-[13px] text-midnight/50 mt-6 text-center">
            Navn eller telefon gør det lettere for os at vende tilbage
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">Akut hjælp</h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8">
            Ved livstruende akutte situationer: ring 112. Premium Care leverer planlagt
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
                streetAddress: COMPANY.address.street,
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
