import Image from "next/image";
import type { Metadata } from "next";
import { HeroImage } from "@/components/HeroImage";

export const metadata: Metadata = {
  title: "Karriere",
  description: "Vi leder ikke efter ansatte. Vi leder efter mennesker.",
  alternates: {
    canonical: "/karriere",
  },
  openGraph: {
    title: "Karriere · Premium Care",
    description: "Vi leder ikke efter ansatte. Vi leder efter mennesker.",
    url: "https://premiumcare.dk/karriere",
  },
};

const POSITIONS = [
  {
    title: "Social- og sundhedsassistent",
    location: "København · Fuldtid",
    subject: "Ansøgning: Social- og sundhedsassistent",
  },
  {
    title: "Social- og sundhedshjælper",
    location: "København · Deltid",
    subject: "Ansøgning: Social- og sundhedshjælper",
  },
  {
    title: "Omsorgschef",
    location: "København · Ledelse",
    subject: "Ansøgning: Omsorgschef",
  },
];

export default function CareersPage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Karriere
          </h1>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <p className="text-[19px] leading-body text-midnight">
            Vi leder ikke efter ansatte. Vi leder efter mennesker, der ikke kan
            lade være med at passe på andre. Hvis du genkender det i dig selv, er
            du allerede en af os.
          </p>
          <p className="text-[13px] text-midnight/50 mt-12 uppercase tracking-wide">
            — Omsorgschefen
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Hvad du får</h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8">
            En fast månedsløn. Ikke timeløn. Pension efter overenskomst. Betalt
            videreuddannelse. En uniform, du er stolt af at bære. Og kolleger,
            der ved, hvad det vil sige at gøre en forskel.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory">
        <div className="w-full h-[60vh] relative">
          <HeroImage
            src="/images/uniform-sleeve.jpg"
            alt="Premium Care uniformærme med våbenskjold"
            fill
            sizes="100vw"
          />
        </div>
        <div className="section-padding reading-column text-center">
          <p className="text-[13px] uppercase tracking-wide text-midnight/60">
            Uniformen er et løfte. Båret på kroppen.
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">Uddannelse</h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8">
            Ingen caregiver starter alene. Du gennemgår fire ugers oplæring.
            Derefter følger du en mentor i otte uger. Vi investerer i dig, fordi
            du investerer i dem, vi passer på.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Ledige stillinger
          </h2>
          <div className="mt-12 space-y-6">
            {POSITIONS.map((position) => (
              <a
                key={position.title}
                href={`mailto:karriere@premiumcare.dk?subject=${encodeURIComponent(position.subject)}`}
                className="block border-b border-midnight/10 pb-6 group focus-ring"
              >
                <p className="text-[19px] text-midnight group-hover:tracking-wide transition-all duration-300">
                  {position.title}
                </p>
                <p className="text-[13px] text-midnight/60 mt-2 uppercase tracking-wide">
                  {position.location}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column text-center">
          <p className="text-[19px] leading-body text-ivory">
            Send din ansøgning til
          </p>
          <a
            href="mailto:karriere@premiumcare.dk"
            className="text-[30px] leading-normal text-gold font-body mt-4 inline-block hover:opacity-80 transition-opacity duration-300 focus-ring"
          >
            karriere@premiumcare.dk
          </a>
          <p className="text-[13px] text-ivory/60 mt-6 uppercase tracking-wide">
            Vi svarer alle ansøgninger inden for tre dage
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
