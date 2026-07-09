import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { HeroImage } from "@/components/HeroImage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Ledelse | Premium Care",
  description:
    "Premium Cares ledelse — synlig ledelse, kvalitetsforpligtelse og ansvar over for borgere, medarbejdere og kommuner.",
  alternates: { canonical: "/ledelse" },
  openGraph: {
    title: "Ledelse | Premium Care",
    description:
      "Premium Cares ledelse — synlig ledelse, kvalitetsforpligtelse og ansvar over for borgere, medarbejdere og kommuner.",
    url: "https://premiumcare.dk/ledelse",
    images: [
      {
        url: "/images/leadership-bibi-dowezai.png",
        width: 800,
        height: 1200,
        alt: "Bibi Naziyh Dowezai, administrerende direktør for Premium Care ApS",
      },
    ],
  },
};

const LEADERSHIP_PRINCIPLES = [
  "Synlig ledelse — tæt på borgerne og medarbejderne, ikke på afstand",
  "Respekt skabes ved at gå forrest",
  "De bedste beslutninger træffes tæt på virkeligheden",
  "Struktur og faglighed i hver del af leveringen",
  "Omsorg uden afstand — ingen borger må blive glemt",
  "Integritet og etik styrer enhver beslutning",
];

const CORE_VALUES = [
  {
    title: "Faglig ekspertise",
    body: "Vi er uddannede, kompetente og forberedte. Vi følger procedurer, fordi de beskytter borgere og medarbejdere.",
  },
  {
    title: "Medfølelse",
    body: "Vi ser mennesket, ikke opgavelisten. Vi er aldrig for travle til venlighed.",
  },
  {
    title: "Integritet",
    body: "Vi gør det rigtige, når ingen ser det — og vi taler sandt, når det er svært.",
  },
  {
    title: "Ansvarlighed",
    body: "Vi ejer vores arbejde, vores journaler og vores fejl. Problemer indberettet tidligt er halvt løst.",
  },
  {
    title: "Patientsikkerhed",
    body: "Intet — ingen tidsplan, ingen vane — overtrumfer borgerens sikkerhed.",
  },
  {
    title: "Løbende forbedring",
    body: "Vi siger fra, vi lærer, og vi gør næste måned bedre end denne.",
  },
];

export default function LeadershipPage() {
  return (
    <article className="bg-ivory pb-24">
      <header className="section-padding page-margin">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Ledelse
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Bygget på tillid, styret af principper, skabt til at bestå
          </p>
        </div>
      </header>

      <div className="reading-column page-margin">
        <section className="section-padding pt-0" aria-labelledby="ceo-profile">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,240px)_1fr] gap-10 items-start">
            <figure>
              <div className="relative w-full aspect-[3/4] max-w-[240px]">
                <HeroImage
                  src="/images/leadership-bibi-dowezai.png"
                  alt="Bibi Naziyh Dowezai, administrerende direktør for Premium Care ApS"
                  fill
                  sizes="240px"
                  priority
                />
              </div>
            </figure>
            <div>
              <h2 id="ceo-profile" className="text-[30px] leading-normal text-midnight">
                Bibi Naziyh Dowezai
              </h2>
              <p className="text-[13px] uppercase tracking-wide text-midnight/60 mt-3">
                Administrerende direktør
              </p>
              <div className="mt-8 space-y-4 text-[17px] leading-body text-midnight/90">
                <p>
                  Driftsmæssig ekspertise og lokalkendskab — med ledelse tæt på
                  driften, ikke på afstand.
                </p>
                <p>
                  Ansvarlig for den daglige drift, personaleledelse, borgerpleje,
                  regelefterlevelse og virksomhedens udvikling. Har den endelige
                  ledelsesmæssige beslutningskompetence i alle driftsspørgsmål.
                </p>
                <p>
                  Grundlægger af Premium Care ApS. Baggrund i hjemmepleje i Aarhus,
                  Vejle og Fredericia, ledelse og drift af hjemmeplejevirksomhed, og
                  uddannelse som tandplejer.
                </p>
              </div>
              <p className="mt-8">
                <Link
                  href="/min-historie"
                  className="text-[17px] leading-body text-midnight underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
                >
                  Læs grundlæggerens historie
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="why-exists">
          <h2 id="why-exists" className="text-[30px] leading-normal text-midnight">
            Hvorfor Premium Care findes
          </h2>
          <p className="text-[19px] leading-body text-midnight/90 mt-8">
            Premium Care blev skabt for at levere hjemmepleje, der er varm og
            stringent, personlig og professionel — drevet af mennesker, der respekteres,
            uddannes og støttes af organisationen bag dem.
          </p>
          <p className="text-[17px] leading-body text-midnight/80 mt-6">
            <Link
              href="/om-os"
              className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
            >
              Mission, vision og værdier
            </Link>
          </p>
        </section>

        <section
          className="section-padding bg-midnight -mx-[8%] px-[8%]"
          aria-labelledby="visible-leadership"
        >
          <div className="reading-column mx-auto">
            <h2 id="visible-leadership" className="text-[30px] leading-normal text-ivory">
              Synlig ledelse
            </h2>
            <div className="mt-8 space-y-6 text-[17px] leading-body text-ivory/90">
              <p>
                Som administrerende direktør sidder jeg ikke kun bag et skrivebord. Jeg
                deltager i opstartssamtaler, besøger hjem, udfører kvalitetsopfølgning og
                træder selv til, når en borger har brug for hjælp.
              </p>
              <p>
                Jeg ønsker aldrig at blive en direktør, der leder på afstand. Respekt
                skabes ved at gå forrest — og de bedste beslutninger træffes tæt på
                virkeligheden.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="leadership-principles">
          <h2
            id="leadership-principles"
            className="text-[30px] leading-normal text-midnight"
          >
            Ledelsesprincipper
          </h2>
          <ul className="mt-10 space-y-4 list-none">
            {LEADERSHIP_PRINCIPLES.map((principle) => (
              <li key={principle} className="text-[17px] leading-body text-midnight/90">
                {principle}
              </li>
            ))}
          </ul>
        </section>

        <section className="section-padding" aria-labelledby="mission">
          <h2 id="mission" className="text-[30px] leading-normal text-midnight">
            Mission
          </h2>
          <p className="text-[19px] leading-body text-midnight/90 mt-8">
            At levere hjemmepleje af kompromisløs kvalitet — sikker, værdig og personlig
            — til hver borger, der vælger os. At støtte familier med ærlighed og
            pålidelighed. At skabe en arbejdsplads, hvor medarbejdere værdsættes og
            udvikles.
          </p>
        </section>

        <section className="section-padding" aria-labelledby="vision">
          <h2 id="vision" className="text-[30px] leading-normal text-midnight">
            Vision
          </h2>
          <p className="text-[19px] leading-body text-midnight/90 mt-8">
            At blive anerkendt som Danmarks referencestandard for privat hjemmepleje —
            den udbyder kommunerne stoler mest på, borgere vælger først, og fagfolk er
            stoltest af at arbejde for.
          </p>
        </section>

        <section className="section-padding" aria-labelledby="values">
          <h2 id="values" className="text-[30px] leading-normal text-midnight">
            Kerneværdier
          </h2>
          <ul className="mt-10 space-y-6 list-none">
            {CORE_VALUES.map((value) => (
              <li key={value.title}>
                <h3 className="text-[19px] text-midnight">{value.title}</h3>
                <p className="text-[17px] leading-body text-midnight/70 mt-2">
                  {value.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-padding" aria-labelledby="commitments">
          <h2 id="commitments" className="text-[30px] leading-normal text-midnight">
            Forpligtelser
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-body text-midnight/90">
            <p>
              <strong className="font-medium text-midnight">Over for borgere:</strong>{" "}
              Den rigtige pleje, de rigtige mennesker, den rigtige adfærd — og en åben
              vej til at sige fra, når noget er galt.{" "}
              <Link
                href="/services"
                className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
              >
                Vores ydelser
              </Link>
            </p>
            <p>
              <strong className="font-medium text-midnight">Over for medarbejdere:</strong>{" "}
              En arbejdsplads med klare rammer, høj faglighed og respekt for forskellighed.{" "}
              <Link
                href="/karriere"
                className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
              >
                Karriere og oplæring
              </Link>
            </p>
            <p>
              <strong className="font-medium text-midnight">Over for kommuner:</strong>{" "}
              Gennemsigtig rapportering, dokumenteret kvalitet og ansvarlig drift.{" "}
              <Link
                href="/kommuner"
                className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
              >
                Kommunalt samarbejde
              </Link>
            </p>
            <p>
              <strong className="font-medium text-midnight">Over for kvalitet:</strong>{" "}
              Målbar standard, løbende revision og åbenhed om resultater.{" "}
              <Link
                href="/tillid"
                className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
              >
                Tillidscenter
              </Link>
            </p>
          </div>
        </section>

        <section className="section-padding border-t border-midnight/10">
          <p className="text-[17px] leading-body text-midnight/80">
            {COMPANY.legalName} · CVR {COMPANY.cvr}
          </p>
          <p className="text-[17px] leading-body text-midnight/80 mt-2">
            <a
              href={`mailto:${COMPANY.email}`}
              className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
            >
              {COMPANY.email}
            </a>
            {" · "}
            <a
              href={COMPANY.phone.href}
              className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
            >
              {COMPANY.phone.display}
            </a>
          </p>
        </section>
      </div>

      <footer className="section-padding pt-0">
        <CrestSeal size={120} className="mx-auto" />
      </footer>
    </article>
  );
}
