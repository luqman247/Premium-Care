import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { DamImage } from "@/components/DamImage";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { COMPANY } from "@/lib/company";
import {
  OPEN_POSITIONS,
  RECRUITMENT_EMAIL,
  RECRUITMENT_PHILOSOPHY,
  RECRUITMENT_REGION,
  RECRUITMENT_RESPONSE_DAYS,
  TRAINING_PROGRAMME,
  WORKPLACE_BENEFITS,
  WORKPLACE_PROMISES,
} from "@/lib/recruitment";

export const metadata: Metadata = {
  title: "Bliv en del af PremiumCare",
  description:
    "Arbejd med værdighed, struktur og faglighed i Aarhus og Østjylland. Betalt oplæring, mentorordning og synlig ledelse.",
  alternates: {
    canonical: "/karriere",
  },
  openGraph: {
    title: "Bliv en del af PremiumCare",
    description:
      "Arbejd med værdighed, struktur og faglighed i Aarhus og Østjylland. Betalt oplæring, mentorordning og synlig ledelse.",
    url: `${COMPANY.url}/karriere`,
  },
};

export default function CareersPage() {
  return (
    <div className="page-flow">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <p className="text-[13px] uppercase tracking-wide text-midnight/60">
            {RECRUITMENT_REGION}
          </p>
          <h1 className="type-page-title text-midnight tracking-tight mt-4">
            Bliv en del af PremiumCare
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8 max-w-[55ch]">
            Vi søger folk, der vil gøre arbejdet ordentligt - med tid til borgeren
            og respekt for kollegerne
          </p>
          <p className="text-[13px] text-midnight/60 mt-6">
            {COMPANY.legalName} · CVR {COMPANY.cvr} · {COMPANY.address.locality}
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Hvad du kan forvente
          </h2>
          <ul className="mt-10 space-y-8 list-none">
            {WORKPLACE_PROMISES.map((item) => (
              <li key={item.title}>
                <h3 className="text-[19px] text-midnight">{item.title}</h3>
                <p className="text-[17px] leading-body text-midnight/70 mt-2 max-w-[55ch]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">Hvad du får</h2>
          <ul className="mt-10 space-y-4 list-none">
            {WORKPLACE_BENEFITS.map((benefit) => (
              <li key={benefit} className="text-[17px] leading-body text-ivory/85">
                {benefit}
              </li>
            ))}
          </ul>
          <p className="text-[15px] leading-body text-ivory/60 mt-8 max-w-[55ch]">
            Løn og vilkår følger gældende overenskomst og aftales ved ansættelse
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory">
        <div className="w-full h-[50vh] relative">
          <DamImage
            assetId={ASSET_IDS.careersTraining}
            category="careers"
            fill
            sizes="100vw"
          />
        </div>
        <div className="section-padding reading-column text-center">
          <CrestSeal size={48} decorative className="!p-0 mx-auto mb-4" />
          <p className="text-[13px] uppercase tracking-wide text-midnight/60">
            Oplæring og mentor - fra første dag
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Oplæring og mentorordning
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8 max-w-[55ch]">
            Ingen ny medarbejder starter alene. Du gennemgår fire ugers oplæring.
            Derefter følger du en mentor i otte uger. Kvaliteten i hjemmet afhænger
            af, at du er forberedt
          </p>
          <ul className="mt-10 space-y-3 list-none">
            {TRAINING_PROGRAMME.map((item) => (
              <li key={item} className="text-[17px] leading-body text-midnight/80">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Hvem vi søger</h2>
          <ul className="mt-10 space-y-6 list-none">
            {RECRUITMENT_PHILOSOPHY.map((item) => (
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

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Ledelse du kan møde
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8 max-w-[55ch]">
            Bibi Naziyh Dowezai, administrerende direktør, har baggrund i hjemmepleje
            i Aarhus, Vejle og Fredericia. Ledelsen deltager i opstart, kvalitetsopfølgning
            og sparring - ikke kun i rapporter
          </p>
          <p className="mt-8">
            <Link
              href="/ledelse-og-governance"
              className="text-[17px] underline underline-offset-4 focus-ring"
            >
              Læs om ledelse og ansvar
            </Link>
            {" · "}
            <Link
              href="/vores-loefte"
              className="text-[17px] underline underline-offset-4 focus-ring"
            >
              Læs vores løfte
            </Link>
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Ledige stillinger</h2>
          <p className="text-[17px] leading-body text-midnight/70 mt-6">
            Vi ansætter løbende i {RECRUITMENT_REGION}. Uopfordret ansøgning er
            velkommen
          </p>
          <div className="mt-12 space-y-6">
            {OPEN_POSITIONS.map((position) => (
              <a
                key={position.title}
                href={`mailto:${RECRUITMENT_EMAIL}?subject=${encodeURIComponent(position.subject)}`}
                className="block border-b border-midnight/10 pb-6 group focus-ring"
              >
                <p className="text-[19px] text-midnight group-hover:opacity-75 transition-opacity duration-300">
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
            Send en ansøgning eller skriv til os om arbejde
          </p>
          <a
            href={`mailto:${RECRUITMENT_EMAIL}?subject=${encodeURIComponent("Ansøgning")}`}
            className="text-[30px] leading-normal text-gold font-body mt-4 inline-block hover:opacity-80 transition-opacity duration-300 focus-ring"
          >
            {RECRUITMENT_EMAIL}
          </a>
          <p className="text-[17px] leading-body text-ivory/80 mt-6">
            Har du spørgsmål før du søger? Ring{" "}
            <a href={COMPANY.phone.href} className="underline underline-offset-4 focus-ring">
              {COMPANY.phone.display}
            </a>
          </p>
          <p className="text-[13px] text-ivory/60 mt-6 uppercase tracking-wide">
            Vi svarer på ansøgninger inden for {RECRUITMENT_RESPONSE_DAYS} arbejdsdage
          </p>
          <p className="text-[13px] text-ivory/60 mt-6">
            <Link
              href="/tillid"
              className="underline underline-offset-4 hover:text-ivory focus-ring"
            >
              Tillidscenter
            </Link>
            {" · "}
            <Link
              href="/whistleblowing"
              className="underline underline-offset-4 hover:text-ivory focus-ring"
            >
              Whistleblower-ordning
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
