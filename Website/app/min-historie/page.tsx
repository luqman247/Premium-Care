import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { DamImage } from "@/components/DamImage";
import { PageHero } from "@/components/PageHero";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { COMPANY } from "@/lib/company";
import { damMetadataImage } from "@/lib/dam/site-images";
import { PHOTOGRAPHY, PHOTO_SIZES } from "@/lib/photography";
import { VORES_LOFTE_COMPASS } from "@/lib/vores-lofte";

export const metadata: Metadata = {
  title: {
    absolute: "Min historie | PremiumCare",
  },
  description:
    "Historien bag PremiumCare. Fra Sønderborg og en farmors sidste kapitel til hjemmepleje med værdighed i Aarhus og Østjylland",
  alternates: {
    canonical: "/min-historie",
  },
  openGraph: {
    title: "Min historie | PremiumCare",
    description:
      "Historien bag PremiumCare. Fra Sønderborg og en farmors sidste kapitel til hjemmepleje med værdighed i Aarhus og Østjylland",
    url: `${COMPANY.url}/min-historie`,
    images: [damMetadataImage(ASSET_IDS.founderStory)],
  },
};

const LEADERSHIP_PRINCIPLES = [
  "Synlig ledelse",
  "Tæt på borgerne",
  "Respekt for medarbejdere",
  "Struktur og faglighed",
  "Omsorg uden afstand",
  "Ingen borger må blive glemt",
] as const;

export default function FounderStoryPage() {
  return (
    <article className="page-flow bg-ivory">
      <PageHero
        eyebrow="Grundlæggerens brev"
        title="Min historie"
        subtitle="PremiumCare ApS blev ikke kun skabt ud fra en idé. Det blev skabt ud fra en livshistorie"
        assetId={ASSET_IDS.founderPageHero}
        category="founder"
        objectPosition="center 35%"
      />

      <section className="editorial-pull">
        <div className="page-margin">
          <p className="editorial-pull-quote text-midnight">
            Nogle virksomheder bliver skabt ud fra en forretningsidé. Andre bliver
            skabt ud fra en livshistorie
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding pt-0">
        <div className="reading-column">
          <CrestSeal size={72} decorative className="!p-0 mb-10 justify-start" />
          <p className="text-[19px] leading-body text-midnight/90 max-w-[42ch]">
            PremiumCare startede med en farmor, dansk pleje og et ønske om at give
            noget tilbage
          </p>
        </div>
      </section>

      <section
        className="snap-section bg-ivory section-padding section-rule"
        aria-labelledby="section-sonderborg"
      >
        <div className="reading-column">
          <p className="type-eyebrow">Kapitel</p>
          <h2
            id="section-sonderborg"
            className="type-section-title text-midnight mt-4"
          >
            Danmark, Sønderborg og min farmor
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Jeg kom til Danmark i 2001 som 1. generationsindvandrer sammen med min
              familie. Vi blev sendt til Sønderborg, hvor vi skabte et nyt liv.
              Danmark blev landet, der gav os tryghed, muligheder og en fremtid
            </p>
            <p>
              Nogle år senere mistede vi min onkel i Afghanistan. Tilbage stod min
              farmor alene. Hun blev inviteret til Danmark, hvor hun, ligesom os,
              blev mødt med åbne arme. Mine forældre arbejdede begge hårdt for at
              skabe en tilværelse, mens min mor samtidig passede min farmor
            </p>
          </div>
          <figure className="editorial-chapter-figure mt-12">
            <div className="relative w-full max-w-[22rem] mx-auto aspect-[3/4]">
              <DamImage
                assetId={ASSET_IDS.founderGrandmother}
                category="founder"
                fill
                sizes="(max-width: 680px) 88vw, 352px"
                objectPosition="center 18%"
              />
            </div>
            <figcaption className="text-center max-w-[36ch] mx-auto">
              Farmors fotografi. Det minde, PremiumCare stadig måler sig på
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="snap-section bg-ivory section-padding section-rule"
        aria-labelledby="section-omsorg"
      >
        <div className="reading-column">
          <p className="type-eyebrow">Kapitel</p>
          <h2 id="section-omsorg" className="type-section-title text-midnight mt-4">
            Det første møde med dansk omsorg
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Da min farmors helbred forværredes, blev hun visiteret til plejehjemmet i
              Tandsbjerg i Sønderborg. Her oplevede jeg for første gang den danske
              velfærdsmodel helt tæt på
            </p>
            <p>
              Vi besøgte hende hver eneste dag. Nogle gange overnattede vi hos hende.
              Personalet blev langt mere end medarbejdere. De blev en del af vores
              familie. Da min farmor gik bort, deltog flere af plejepersonalet i
              hendes begravelse. Den omsorg og medmenneskelighed, de viste os, er
              noget, jeg aldrig vil glemme
            </p>
          </div>
        </div>
      </section>

      <section
        className="editorial-bleed"
        aria-hidden="true"
        data-header-tone="dark"
      >
        <div className="editorial-bleed-media">
          <DamImage
            assetId={ASSET_IDS.founderStoryBleed}
            category="details"
            fill
            sizes={PHOTO_SIZES.hero}
            objectPosition="center 40%"
          />
        </div>
        <div className="editorial-bleed-veil" />
      </section>

      <section className="editorial-pull editorial-pull--midnight">
        <div className="page-margin">
          <p className="editorial-pull-quote text-ivory">
            PremiumCare er min måde at give tilbage
          </p>
        </div>
      </section>

      <section
        className="snap-section bg-ivory section-padding"
        aria-labelledby="section-barn"
      >
        <div className="reading-column">
          <p className="type-eyebrow">Kapitel</p>
          <h2 id="section-barn" className="type-section-title text-midnight mt-4">
            Fra barn på plejehjemmet til medarbejder
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Som barn var jeg fascineret af livet på plejehjemmet. Jeg sad ofte foran
              akvariet, så fiskene svømmede rundt, og talte med beboerne. Jeg var den
              nysgerrige pige, der altid havde tid til en samtale
            </p>
            <p className="founder-letter-quote">
              Dengang vidste jeg ikke, at netop dét sted mange år senere skulle blive
              begyndelsen på mit arbejdsliv
            </p>
          </div>
          <figure className="editorial-chapter-figure">
            <div className="relative w-full aspect-[3/2]">
              <DamImage
                assetId={ASSET_IDS.founderStory}
                category="founder"
                fill
                sizes={PHOTO_SIZES.section}
                objectPosition={PHOTOGRAPHY.founder.objectPosition}
              />
            </div>
            <figcaption>
              Tandsbjerg, Sønderborg. Her boede min farmor, og her lærte jeg som barn,
              hvad omsorg kan betyde
            </figcaption>
          </figure>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              I 2017 fik jeg studiejob på det samme plejehjem. Mange af medarbejderne
              kunne stadig huske mig, og de kunne stadig huske min farmor. Det gjorde
              et stort indtryk på mig. Det var her, ønsket om at give noget tilbage for
              alvor voksede frem. Tilbage til det Danmark, der ikke alene tog imod min
              familie, men også gav min syge farmor værdighed, omsorg og et trygt sidste
              kapitel af hendes liv
            </p>
            <p>
              Selvom jeg senere uddannede mig til tandplejer, slap ældreområdet aldrig
              sit tag i mig
            </p>
          </div>
        </div>
      </section>

      <section
        className="snap-section bg-ivory section-padding section-rule"
        aria-labelledby="section-hjemmepleje"
      >
        <div className="reading-column">
          <p className="type-eyebrow">Kapitel</p>
          <h2
            id="section-hjemmepleje"
            className="type-section-title text-midnight mt-4"
          >
            Erfaring fra hjemmeplejen
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Jeg arbejdede både deltid og fuldtid i hjemmeplejen i flere kommuner,
              blandt andet i Aarhus, Vejle og Fredericia. Jeg oplevede både de gode
              dage og de svære. Jeg oplevede medarbejdere, der hver eneste dag gjorde
              deres ypperste for at skabe tryghed for borgerne, ofte under stort pres
            </p>
            <p>
              En oplevelse står særligt klart. Sammen med mine kolleger overtog vi en
              fredag eftermiddag ansvaret for omkring 250 borgere, som fra den ene dag
              til den anden skulle overgå til en ny leverandør. Ingen borgere måtte
              blive glemt. Ingen måtte stå uden hjælp. Det var en enorm opgave, men
              også en oplevelse, der lærte mig, hvor afgørende struktur, ledelse og
              stærke medarbejdere er i hjemmeplejen
            </p>
            <p className="text-[17px] text-midnight/70">
              Den erfaring præger stadig vores arbejde med{" "}
              <Link
                href="/services"
                className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
              >
                pleje i hjemmet
              </Link>{" "}
              og vores{" "}
              <Link
                href="/tillid"
                className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
              >
                kvalitetsarbejde
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section
        className="snap-section bg-ivory section-padding section-rule"
        aria-labelledby="section-hvorfor"
      >
        <div className="reading-column">
          <p className="type-eyebrow">Kapitel</p>
          <h2 id="section-hvorfor" className="type-section-title text-midnight mt-4">
            Hvorfor PremiumCare ApS blev skabt
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Senere blev Luksuspleje ApS min vej ind i ledelse og drift af en
              hjemmeplejevirksomhed. Da muligheden opstod for at overtage virksomheden,
              valgte jeg at gribe den. Jeg fik værdifuld erfaring med økonomi,
              kvalitetsarbejde, personaleledelse, kommunalt samarbejde og drift
            </p>
            <p>
              Men med tiden blev det tydeligt for mig, at en virksomhed med mange års
              kultur og historik også har rammer, som kan være svære at forandre. Jeg
              ønskede ikke blot at drive en hjemmepleje. Jeg ønskede at skabe en kultur
              fra bunden
            </p>
            <p>
              Jeg ville bygge en arbejdsplads, hvor medarbejdere mødes med respekt, og
              hvor borgeren aldrig bare bliver et nummer på en liste
            </p>
            <p>Derfor stiftede jeg PremiumCare ApS</p>
            <p>
              Ikke fordi jeg gav op. Fordi jeg nu havde erfaringen til at gøre det,
              jeg altid havde tænkt på
            </p>
            <p className="text-[17px] text-midnight/70">
              <Link
                href="/om-os"
                className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
              >
                Om mission, vision og værdier
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="editorial-pull">
        <div className="page-margin">
          <p className="editorial-pull-quote text-midnight">
            Jeg tror på synlig ledelse
          </p>
        </div>
      </section>

      <section className="editorial-split">
        <div className="editorial-split-media">
          <DamImage
            assetId={ASSET_IDS.leadershipSection}
            category="about"
            fill
            sizes={PHOTO_SIZES.service}
            objectPosition="center 28%"
          />
        </div>
        <div className="editorial-split-copy">
          <p className="type-eyebrow">Kapitel</p>
          <h2 className="type-section-title text-midnight mt-4">Synlig ledelse</h2>
          <p className="text-[17px] leading-body text-midnight/75 mt-6 max-w-[42ch]">
            Jeg vil ikke lede på afstand. Derfor deltager jeg i opstart, besøger hjem,
            følger kvaliteten og tager telefonen, når noget haster. Nogle gange kører
            jeg selv ud midt om natten, hvis en borger er faldet
          </p>
          <p className="text-[17px] leading-body text-midnight/75 mt-4 max-w-[42ch]">
            Mange spørger, hvorfor jeg stadig selv tager telefonen. Svaret er enkelt:
            Fordi jeg ikke vil blive den direktør, der kun sidder bag et skrivebord
          </p>
          <p className="text-[17px] leading-body text-midnight/75 mt-4 max-w-[42ch]">
            PremiumCare skal være et sted, hvor man er velkommen - med klare rammer,
            ordentlig faglighed og plads til forskellighed. For medarbejdere, der
            trives, skaber trygge borgere
          </p>
          <p className="mt-8">
            <Link href="/karriere" className="signature-link">
              Rekruttering og oplæring
            </Link>
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <p className="type-eyebrow text-ivory/50">Principper</p>
          <h2 className="type-section-title text-ivory mt-4">
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

      <section
        className="snap-section bg-ivory section-padding"
        aria-labelledby="section-tilbage"
      >
        <div className="reading-column">
          <p className="type-eyebrow">Kapitel</p>
          <h2 id="section-tilbage" className="type-section-title text-midnight mt-4">
            Min måde at give tilbage
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Mit logo er inspireret af den taknemmelighed, jeg bærer med mig over for
              Danmark. Et land, der gav min familie en ny begyndelse og gav min farmor
              mulighed for at afslutte sit liv med værdighed, omsorg og respekt
            </p>
          </div>
          <figure className="editorial-chapter-figure">
            <div className="relative w-full aspect-[3/2]">
              <DamImage
                assetId={ASSET_IDS.founderGratitude}
                category="founder"
                fill
                sizes={PHOTO_SIZES.section}
                objectPosition="center 40%"
              />
            </div>
            <figcaption>
              Taknemmelighed. Den følelse, der stadig former vores arbejde
            </figcaption>
          </figure>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Jeg vil ikke bare være endnu en på listen. Jeg vil være en, kommuner
              kan stole på - og som borgere møder med ro, når vi kommer ind
            </p>
            <p>
              Jeg kender følelsen af at være den familie, der står ved siden af en
              hospitalsseng eller en plejeseng og håber, at den person, der træder ind
              ad døren, møder ens kære med varme, respekt og værdighed
            </p>
            <p>Det gjorde Danmark for min familie</p>
            <p>
              Den følelse ønsker jeg, at alle de borgere og pårørende, vi møder, skal
              opleve
            </p>
          </div>
        </div>
      </section>

      <section className="editorial-pull editorial-pull--midnight">
        <div className="page-margin">
          <p className="editorial-pull-quote text-ivory max-w-[22ch]">
            Hvis jeg mister kontakten til borgerne og medarbejderne, mister jeg
            kontakten til årsagen til, at PremiumCare blev skabt
          </p>
        </div>
      </section>

      <section
        className="snap-section bg-ivory section-padding"
        aria-labelledby="section-fremtiden"
      >
        <div className="reading-column">
          <p className="type-eyebrow">Kapitel</p>
          <h2
            id="section-fremtiden"
            className="type-section-title text-midnight mt-4"
          >
            Mit kompas for fremtiden
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Hvis jeg en dag mister kontakten til borgerne eller mine medarbejdere,
              mister jeg samtidig kontakten til årsagen til, at PremiumCare blev
              skabt
            </p>
            <p>Det må aldrig ske</p>
            <p>
              Historien om farmor er ikke kun baggrund. Den er det, vi måler os på -
              også hvis vi vokser
            </p>
          </div>
          <figure className="editorial-chapter-figure">
            <div className="relative w-full aspect-[3/2]">
              <DamImage
                assetId={ASSET_IDS.founderLegacy}
                category="founder"
                fill
                sizes={PHOTO_SIZES.section}
                objectPosition="center 38%"
              />
            </div>
            <figcaption>
              Den næste generation. Det, vi bygger videre på
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="wow-compass"
        aria-labelledby="section-kompasset"
        data-header-tone="dark"
      >
        <div className="wow-compass-media" aria-hidden="true">
          <DamImage
            assetId={ASSET_IDS.founderCompass}
            category="details"
            fill
            sizes={PHOTO_SIZES.hero}
            objectPosition="center 45%"
          />
        </div>
        <div className="wow-compass-veil" aria-hidden="true" />
        <div className="wow-compass-content page-margin">
          <CrestSeal size={56} variant="white" decorative className="!p-0 mb-10" />
          <p id="section-kompasset" className="wow-compass-eyebrow mb-8">
            Kompasset
          </p>
          <blockquote className="wow-compass-quote">
            {VORES_LOFTE_COMPASS}
          </blockquote>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column text-center">
          <p className="text-[19px] leading-body text-midnight max-w-[40ch] mx-auto">
            Har du spørgsmål til historien eller virksomheden?
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Kontakt PremiumCare
            </Link>
            <Link href="/vores-lofte" className="btn-secondary">
              Læs vores løfte
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
