import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priser",
  description: "Hvad koster det?",
  alternates: {
    canonical: "/priser",
  },
  openGraph: {
    title: "Priser · Premium Care",
    description: "Hvad koster det?",
    url: "https://premiumcare.dk/priser",
  },
};

export default function PricingPage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Hvad koster det?
          </h1>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <p className="text-[19px] leading-body text-midnight">
            Det afhænger af din mors behov. Nogle har brug for to timer om dagen.
            Andre har brug for to timer om ugen. Vi laver ikke pakkeløsninger. Vi
            laver løsninger.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding text-center">
        <div className="reading-column">
          <p className="text-[38px] leading-snug text-gold font-body">2.400 kr.</p>
          <p className="text-[16px] text-midnight/60 mt-4">
            om ugen for de fleste private løsninger
          </p>
          <p className="text-[17px] leading-body text-midnight/80 mt-12">
            Hvis kommunen dækker omkostningerne, hjælper vi med papirarbejdet. Præcis
            pris får du efter den første samtale — aldrig før.
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column text-center">
          <p className="text-[19px] leading-body text-ivory">
            Der er ingen binding. Ingen skjulte gebyrer. Ingen overraskelser.
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
    </div>
  );
}
