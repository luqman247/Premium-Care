import Image from "next/image";
import type { Metadata } from "next";
import { HeroImage } from "@/components/HeroImage";

export const metadata: Metadata = {
  title: "Services",
  description: "Hvad vi gør — og hvad vi ikke gør",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services · Premium Care",
    description: "Hvad vi gør — og hvad vi ikke gør",
    url: "https://premiumcare.dk/services",
  },
};

const SERVICES = [
  {
    slug: "presence",
    image: "/images/service-presence.jpg",
    text: "Vi hjælper din mor med det, hun ikke længere kan selv — med den værdighed, hun altid har haft. Også når hun protesterer. Også når hun ikke genkender os.",
  },
  {
    slug: "medicine",
    image: "/images/service-medicine.jpg",
    text: "Vi sørger for, at hun får den medicin, lægen har ordineret — hverken mere eller mindre. Også når hun gemmer den. Også når hun nægter.",
  },
  {
    slug: "meal",
    image: "/images/service-meal.jpg",
    text: "Vi laver mad, hun kan lide — ikke mad, vi synes, hun burde spise. Også når smagen har ændret sig. Også når hun kun vil have det samme hver dag.",
  },
  {
    slug: "silence",
    image: "/images/service-silence.jpg",
    text: "Nogle gange sidder vi bare sammen. For en person med demens er tilstedeværelse det vigtigste. Den samme caregiver. Hver gang. Så hun genkender ansigtet, selv når hun ikke genkender navnet.",
  },
  {
    slug: "safety",
    image: "/images/service-safety.jpg",
    text: "Vi vurderer hjemmet for fald- og vandringsrisiko, før vi starter. Vi sikrer, at medicin og farlige genstande er utilgængelige for hende, men tilgængelige for os. Vi ved, hvad vi skal gøre, hvis noget går galt.",
  },
];

export default function ServicesPage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Hvad vi gør
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Og hvad vi ikke gør.
          </p>
        </div>
      </section>

      {SERVICES.map((service) => (
        <section key={service.slug} className="snap-section bg-ivory">
          <div className="w-full h-[50vh] relative">
            <HeroImage
              src={service.image}
              alt=""
              fill
              sizes="100vw"
            />
          </div>
          <div className="section-padding reading-column">
            <p className="text-[19px] leading-body text-midnight">{service.text}</p>
          </div>
        </section>
      ))}

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">Det gør vi ikke</h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-12">
            Vi overtager ikke ansvaret fra dig. Du kender din mor bedst. Vi rådgiver
            ikke mod lægens ordination. Vi erstatter ikke familiens besøg. Vi er her,
            når I ikke kan være — ikke i stedet for jer. Og vi giver aldrig op, selv
            når hun siger nej.
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
