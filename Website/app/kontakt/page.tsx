import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Ring, når du er klar",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt · Premium Care",
    description: "Ring, når du er klar",
    url: "https://premiumcare.dk/kontakt",
  },
};

const PHONE_DISPLAY = "+45 00 00 00 00";
const PHONE_HREF = "tel:+4500000000";

type ContactPageProps = {
  searchParams: Promise<{ sendt?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { sendt } = await searchParams;
  const formSent = sendt === "1";

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Ring til os
          </h1>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column text-center">
          <p className="text-[30px] leading-normal text-ivory">
            Hvis din mor er faldet, eller hvis du er bekymret for hendes sikkerhed i
            dag.
          </p>
          <a
            href={PHONE_HREF}
            className="text-[48px] leading-tight text-gold font-body mt-8 inline-block hover:opacity-80 transition-opacity duration-300 focus-ring"
          >
            {PHONE_DISPLAY}
          </a>
          <p className="text-[13px] text-ivory/60 mt-6 uppercase tracking-wide">
            Akutlinje — svar med det samme
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding text-center">
        <div className="reading-column">
          {formSent && (
            <p
              className="text-[17px] leading-body text-midnight mb-8"
              role="status"
            >
              Tak. Vi ringer tilbage, uanset hvad.
            </p>
          )}
          <p className="text-[17px] leading-body text-midnight/80">
            Du behøver ikke at vide, hvad du vil spørge om. Du behøver ikke at have
            besluttet dig. Du behøver bare at ringe. Vi finder ud af resten sammen.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column max-w-[480px]">
          <form className="space-y-8" action="/api/contact" method="POST">
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
            Alle felter er valgfrie. Vi ringer tilbage, uanset hvad.
          </p>
          <p className="text-[13px] text-midnight/50 mt-4 text-center">
            <a
              href="mailto:kontakt@premiumcare.dk"
              className="text-midnight/60 hover:text-midnight"
            >
              kontakt@premiumcare.dk
            </a>
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column text-center">
          <p className="text-[19px] leading-body text-ivory">
            Vi besvarer alle opkald inden for to timer i dagtimerne. Hvis du ringer
            uden for åbningstid, ringer vi tilbage næste morgen.
          </p>
          <p className="text-[13px] text-ivory/60 mt-8 uppercase tracking-wide">
            Man–Fre: 08.00–18.00 · Akut: 24 timer
          </p>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Kontakt Premium Care",
            url: "https://premiumcare.dk/kontakt",
            about: {
              "@type": "Organization",
              name: "Premium Care ApS",
              telephone: "+45-00-00-00-00",
              email: "kontakt@premiumcare.dk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Frederiksberg Allé 00",
                postalCode: "1820",
                addressLocality: "Frederiksberg C",
                addressCountry: "DK",
              },
            },
          }),
        }}
      />
    </div>
  );
}
