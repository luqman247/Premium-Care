import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { HeroImage } from "@/components/HeroImage";

export const metadata: Metadata = {
  title: {
    absolute: "Min historie | Premium Care",
  },
  description:
    "Historien bag Premium Care — fra Sønderborg, dansk omsorg og en farmors sidste kapitel til ønsket om at skabe en hjemmepleje med værdighed, struktur og nærvær.",
  alternates: {
    canonical: "/min-historie",
  },
  openGraph: {
    title: "Min historie | Premium Care",
    description:
      "Historien bag Premium Care — fra Sønderborg, dansk omsorg og en farmors sidste kapitel til ønsket om at skabe en hjemmepleje med værdighed, struktur og nærvær.",
    url: "https://premiumcare.dk/min-historie",
    images: [
      {
        url: "/images/about-caregiver.jpg",
        width: 2200,
        height: 1467,
        alt: "En Premium Care caregiver i omsorgsfuld kontakt med en ældre klient",
      },
    ],
  },
};

const LEADERSHIP_PRINCIPLES = [
  "Synlig ledelse",
  "Tæt på borgerne",
  "Respekt for medarbejdere",
  "Struktur og faglighed",
  "Omsorg uden afstand",
  "Ingen borger må blive glemt",
];

export default function FounderStoryPage() {
  return (
    <article className="bg-ivory pb-24">
      <header className="section-padding page-margin">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Min historie
          </h1>
          <p className="text-[13px] uppercase tracking-wide text-midnight/60 mt-8">
            Grundlæggerens brev
          </p>
        </div>
      </header>

      <div className="reading-column page-margin space-y-0">
        <section className="section-padding pt-0" aria-labelledby="section-opening">
          <CrestSeal size={96} className="!p-0 mb-12 justify-start" />
          <h2
            id="section-opening"
            className="text-[30px] leading-normal text-midnight"
          >
            En livshistorie, ikke kun en forretningsidé
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Nogle virksomheder bliver skabt ud fra en forretningsidé. Andre bliver
              skabt ud fra en livshistorie.
            </p>
            <p>PremiumCare ApS er resultatet af min.</p>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="section-sonderborg">
          <h2
            id="section-sonderborg"
            className="text-[30px] leading-normal text-midnight"
          >
            Danmark, Sønderborg og min farmor
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Jeg kom til Danmark i 2001 som 1. generationsindvandrer sammen med min
              familie. Vi blev sendt til Sønderborg, hvor vi skabte et nyt liv.
              Danmark blev landet, der gav os tryghed, muligheder og en fremtid.
            </p>
            <p>
              Nogle år senere mistede vi min ældste onkel i Afghanistan. Tilbage stod
              min farmor alene. Hun blev inviteret til Danmark, hvor hun — ligesom os
              — blev mødt med åbne arme. Mine forældre arbejdede begge hårdt for at
              skabe en tilværelse, mens min mor samtidig passede min farmor og min
              lillebror, som på daværende tidspunkt led af svær kolik.
            </p>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="section-omsorg">
          <h2
            id="section-omsorg"
            className="text-[30px] leading-normal text-midnight"
          >
            Det første møde med dansk omsorg
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Da min farmors helbred forværredes, blev hun visiteret til plejehjemmet i
              Tandsbjerg i Sønderborg. Her oplevede jeg for første gang den danske
              velfærdsmodel helt tæt på.
            </p>
            <p>
              Vi besøgte hende hver eneste dag. Nogle gange overnattede vi hos hende.
              Personalet blev langt mere end medarbejderne — de blev en del af vores
              familie. Da min farmor gik bort efter to år i Danmark, deltog flere af
              plejepersonalet i hendes begravelse. Den omsorg og medmenneskelighed, de
              viste os, er noget, jeg aldrig vil glemme.
            </p>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="section-barn">
          <h2
            id="section-barn"
            className="text-[30px] leading-normal text-midnight"
          >
            Fra barn på plejehjemmet til medarbejder
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Som barn var jeg fascineret af livet på plejehjemmet. Jeg sad ofte foran
              akvariet, så fiskene svømmede rundt, og talte med beboerne. Jeg var den
              nysgerrige pige, der altid havde tid til en samtale.
            </p>
            <p>
              Dengang vidste jeg ikke, at netop dét sted mange år senere skulle blive
              begyndelsen på mit arbejdsliv.
            </p>
          </div>
          <figure className="mt-12">
            <div className="relative w-full aspect-[3/2]">
              <HeroImage
                src="/images/founder-tandsbjerg-aquarium.png"
                alt="Akvariet og opholdsrum på plejehjemmet i Tandsbjerg i Sønderborg — stedet, hvor grundlæggeren som barn oplevede dansk omsorg"
                fill
                sizes="(max-width: 680px) 100vw, 680px"
              />
            </div>
            <figcaption className="text-[13px] text-midnight/60 mt-4 leading-body">
              Tandsbjerg, Sønderborg — hvor min farmor boede, og hvor jeg som barn
              lærte, hvad omsorg kan betyde
            </figcaption>
          </figure>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              I 2017 fik jeg studiejob på det samme plejehjem. Mange af medarbejderne
              kunne stadig huske mig — og de kunne stadig huske min farmor. Det gjorde
              et stort indtryk på mig. Det var her, ønsket om at give noget tilbage for
              alvor voksede frem. Tilbage til det Danmark, der ikke alene tog imod min
              familie, men også gav min syge farmor værdighed, omsorg og et trygt sidste
              kapitel af hendes liv.
            </p>
            <p>
              Selvom jeg senere uddannede mig til tandplejer, slap ældreområdet aldrig
              sit tag i mig.
            </p>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="section-hjemmepleje">
          <h2
            id="section-hjemmepleje"
            className="text-[30px] leading-normal text-midnight"
          >
            Erfaring fra hjemmeplejen
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Jeg arbejdede både deltid og fuldtid i hjemmeplejen i flere kommuner —
              blandt andet i Aarhus, Vejle og Fredericia. Jeg oplevede både de gode
              dage og de svære. Jeg oplevede medarbejdere, der hver eneste dag gjorde
              deres ypperste for at skabe tryghed for borgerne, ofte under stort pres.
            </p>
            <p>
              En oplevelse står særligt klart. Sammen med mine kolleger overtog vi en
              fredag eftermiddag ansvaret for omkring 250 borgere, som fra den ene dag
              til den anden skulle overgå til en ny leverandør. Ingen borgere måtte
              blive glemt. Ingen måtte stå uden hjælp. Det var en enorm opgave, men
              også en oplevelse, der lærte mig, hvor afgørende struktur, ledelse og
              stærke medarbejdere er i hjemmeplejen.
            </p>
            <p className="text-[17px] text-midnight/70">
              Den erfaring præger stadig vores arbejde med{" "}
              <Link href="/services" className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring">
                pleje i hjemmet
              </Link>{" "}
              og vores{" "}
              <Link href="/tillid" className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring">
                kvalitetsarbejde
              </Link>
            </p>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="section-ledelse">
          <h2
            id="section-ledelse"
            className="text-[30px] leading-normal text-midnight"
          >
            Ledelse, drift og læring
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Senere blev Luksuspleje ApS min vej ind i ledelse og drift af en
              hjemmeplejevirksomhed. Da muligheden opstod for at overtage virksomheden,
              valgte jeg at gribe den. Jeg fik værdifuld erfaring med økonomi,
              kvalitetsarbejde, personaleledelse, kommunalt samarbejde og drift.
            </p>
            <p>Vi skabte stabile resultater og opbyggede et stærkt team.</p>
            <p>
              Men med tiden blev det tydeligt for mig, at en virksomhed med mange års
              kultur og historik også har rammer, som kan være svære at forandre. Jeg
              ønskede ikke blot at drive en hjemmepleje. Jeg ønskede at skabe en kultur
              fra bunden.
            </p>
            <p className="text-[17px] text-midnight/70">
              Erfaringen med{" "}
              <Link href="/kommuner" className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring">
                kommunalt samarbejde
              </Link>{" "}
              lærte mig, hvad der skal til for at være en pålidelig partner
            </p>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="section-hvorfor">
          <h2
            id="section-hvorfor"
            className="text-[30px] leading-normal text-midnight"
          >
            Hvorfor Premium Care blev skabt
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>En kultur, hvor medarbejdere bliver mødt med tillid, udvikling og respekt.</p>
            <p>
              En kultur, hvor borgeren aldrig bliver et CPR-nummer eller en opgave, men
              et menneske.
            </p>
            <p>
              En kultur, hvor ordentlighed, nærvær og faglighed går hånd i hånd.
            </p>
            <p>Derfor stiftede jeg PremiumCare ApS.</p>
            <p>Ikke fordi jeg giver op. Tværtimod.</p>
            <p>
              Jeg gør det, fordi jeg nu har den erfaring, de kompetencer og den
              ledelsesmæssige ballast, der skal til for at skabe præcis den virksomhed,
              jeg altid har drømt om.
            </p>
            <p>
              Premium Care bygger på alt det, jeg har lært gennem årene — både det, der
              virkede, og det, der kunne gøres bedre.
            </p>
            <p className="text-[17px] text-midnight/70">
              Læs mere om{" "}
              <Link href="/om-os" className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring">
                mission, vision og værdier
              </Link>
            </p>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="section-synlig">
          <h2
            id="section-synlig"
            className="text-[30px] leading-normal text-midnight"
          >
            Synlig ledelse
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Jeg ønsker ikke en virksomhed præget af afstand mellem ledelse og
              medarbejdere. Som direktør sidder jeg ikke kun bag et skrivebord. Jeg
              deltager i opstartssamtaler med nye borgere, besøger hjemmene, udfører
              kvalitetsopfølgning og stikprøvekontroller og træder selv til, når en
              borger har brug for hjælp — også hvis det betyder, at jeg en sen aften
              skal ud med en Raizer for at hjælpe en borger sikkert op efter et fald.
            </p>
            <p>Jeg tror på synlig ledelse.</p>
            <p>Jeg tror på, at respekt skabes ved at gå forrest.</p>
            <p>Jeg tror på, at de bedste beslutninger træffes tæt på virkeligheden.</p>
            <p>
              Mange spørger mig, hvorfor jeg stadig selv tager telefonen, hvorfor jeg
              tager med til opstartssamtaler, hvorfor jeg kører ud til borgere, eller
              hvorfor jeg står klar midt om natten, hvis en borger er faldet og har
              brug for hjælp.
            </p>
            <p>Svaret er enkelt.</p>
            <p>
              Fordi jeg aldrig ønsker at blive en direktør, der leder på afstand.
            </p>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="section-arbejdsplads">
          <h2
            id="section-arbejdsplads"
            className="text-[30px] leading-normal text-midnight"
          >
            En arbejdsplads med respekt
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Premium Care skal være en arbejdsplads, hvor mennesker føler sig velkomne
              — uanset alder, køn, hudfarve, tro, uddannelse eller baggrund. En
              arbejdsplads med klare rammer, høj faglighed, struktur og plads til
              forskellighed.
            </p>
            <p>For medarbejdere, der trives, skaber trygge borgere.</p>
            <p className="text-[17px] text-midnight/70">
              Læs om{" "}
              <Link href="/karriere" className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring">
                rekruttering og oplæring
              </Link>
            </p>
          </div>
        </section>

        <section
          className="section-padding bg-midnight -mx-[8%] px-[8%]"
          aria-labelledby="section-principper"
        >
          <div className="reading-column mx-auto">
            <h2
              id="section-principper"
              className="text-[30px] leading-normal text-ivory"
            >
              Ledelsesprincipper
            </h2>
            <ul className="mt-10 space-y-4 list-none">
              {LEADERSHIP_PRINCIPLES.map((principle) => (
                <li
                  key={principle}
                  className="text-[19px] leading-body text-ivory/90"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="section-tilbage">
          <h2
            id="section-tilbage"
            className="text-[30px] leading-normal text-midnight"
          >
            Min måde at give tilbage
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Mit logo er inspireret af den taknemmelighed, jeg bærer med mig over for
              Danmark. Et land, der gav min familie en ny begyndelse og gav min farmor
              mulighed for at afslutte sit liv med værdighed, omsorg og respekt.
            </p>
            <p>Premium Care er derfor mere end en virksomhed.</p>
            <p>Det er min måde at give tilbage.</p>
            <p>
              Mit mål er ikke blot at være endnu en privat hjemmeplejeleverandør.
            </p>
            <p>
              Mit mål er at være den samarbejdspartner, kommunerne kan have tillid til,
              den arbejdsplads medarbejderne er stolte af, og den tryghed, borgerne
              fortjener at mødes med, hver eneste gang vi træder ind ad døren.
            </p>
            <p>
              Jeg kender følelsen af at være den familie, der står ved siden af en
              hospitalsseng eller en plejeseng og håber, at den person, der træder ind
              ad døren, møder ens kære med varme, respekt og værdighed.
            </p>
            <p>Det gjorde Danmark for min familie.</p>
            <p>
              Den følelse ønsker jeg, at alle de borgere og pårørende, vi møder, skal
              opleve.
            </p>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="section-fremtiden">
          <h2
            id="section-fremtiden"
            className="text-[30px] leading-normal text-midnight"
          >
            Kompasset for fremtiden
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Hvis jeg en dag mister kontakten til borgerne eller mine medarbejdere,
              mister jeg samtidig kontakten til årsagen til, at Premium Care blev
              skabt.
            </p>
            <p>Det må aldrig ske.</p>
            <p>
              Min historie om farmor er ikke kun historien om Premium Care. Den er
              virksomhedens kompas. En dag kan vi have 20 medarbejdere. Så 50. Så 100.
              Og den dag bliver den største risiko ikke økonomien eller kommunen. Den
              største risiko bliver, at man glemmer, hvorfor man begyndte.
            </p>
            <p className="text-[17px] text-midnight/70">
              Har du spørgsmål til historien eller virksomheden, er du velkommen til at{" "}
              <Link href="/kontakt" className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring">
                kontakte os
              </Link>
            </p>
          </div>
        </section>
      </div>

      <section
        className="section-padding bg-midnight"
        aria-labelledby="section-kompasset"
      >
        <div className="reading-column page-margin text-center">
          <p
            id="section-kompasset"
            className="text-[13px] uppercase tracking-wide text-gold mb-10"
          >
            Kompasset
          </p>
          <blockquote className="text-[30px] sm:text-[34px] leading-snug text-ivory max-w-[28ch] mx-auto">
            &ldquo;Hvis det var min farmor, der sad i den stol, hvad ville jeg ønske,
            vi gjorde?&rdquo;
          </blockquote>
        </div>
      </section>

      <footer className="section-padding pt-0">
        <CrestSeal size={120} className="mx-auto" />
      </footer>
    </article>
  );
}
