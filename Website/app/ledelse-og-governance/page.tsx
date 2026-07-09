import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { HeroImage } from "@/components/HeroImage";
import { COMPANY } from "@/lib/company";
import { LEADERSHIP_IMAGES } from "@/lib/leadership-images";
import { PHOTOGRAPHY, PHOTO_SIZES } from "@/lib/photography";

export const metadata: Metadata = {
  title: {
    absolute: "Ledelse og ansvar | Premium Care",
  },
  description:
    "Premium Care ApS — ledelse og ansvar, mission, vision og kvalitetsforpligtelse. Grundlagt på synlig ledelse, dokumenteret ansvar og dansk plejetradition.",
  alternates: { canonical: "/ledelse-og-governance" },
  openGraph: {
    title: "Ledelse og ansvar | Premium Care",
    description:
      "Premium Care ApS — ledelse og ansvar, mission, vision og kvalitetsforpligtelse. Grundlagt på synlig ledelse, dokumenteret ansvar og dansk plejetradition.",
    url: "https://premiumcare.dk/ledelse-og-governance",
    images: [
      {
        url: LEADERSHIP_IMAGES.pressPortrait.src,
        width: LEADERSHIP_IMAGES.pressPortrait.width,
        height: LEADERSHIP_IMAGES.pressPortrait.height,
        alt: LEADERSHIP_IMAGES.pressPortrait.alt,
      },
    ],
  },
};

const CORE_VALUES = [
  {
    title: "Faglig ekspertise",
    body: "Vi er uddannede, kompetente og forberedte. Vi følger vores procedurer, fordi de beskytter borgere — og os.",
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
    body: "Intet — ingen tidsplan, ingen vane, ingen instruktion — overtrumfer borgerens sikkerhed.",
  },
  {
    title: "Løbende forbedring",
    body: "Vi siger fra, vi lærer, og vi gør næste måned bedre end denne.",
  },
];

const LEADERSHIP_PRINCIPLES = [
  {
    title: "Synlig ledelse",
    body: "Ledelse er en adfærd, ikke en titel. Som administrerende direktør deltager jeg i opstartssamtaler, besøger hjem, udfører kvalitetsopfølgning og træder selv til, når en borger har brug for hjælp — også sent om aftenen, hvis det kræves.",
  },
  {
    title: "Respekt",
    body: "Respekt skabes ved at gå forrest. Kolleger mødes med værdighed. Borgere og pårørende mødes med varme og respekt — uanset alder, baggrund eller situation.",
  },
  {
    title: "Kvalitet",
    body: "Ekspertise er ikke en ambition — det er vores standard. Premium Care Standard går ud over kommunale minimumskrav: punktlighed, kontinuitet og målbar plejekvalitet.",
  },
  {
    title: "Ansvarlighed",
    body: "Hver standard har et navn knyttet til sig. Beslutninger træffes på oplyst grundlag. Fejl indberettes tidligt under en just culture — læring før skyld.",
  },
  {
    title: "Løbende forbedring",
    body: "Forbedringsforslag læses og besvares. Hver hændelse, klage og auditfinding har en ejer, en handling og en verifikation. Intet logges uden opfølgning.",
  },
  {
    title: "Medfølelse",
    body: "Medfølelse gælder borgere og kolleger. En arbejdsplads, hvor mennesker trives, skaber trygge borgere.",
  },
  {
    title: "Professionalisme",
    body: "Premium i vores navn er et løfte om adfærd — rolig kompetence, forberedelse, punktlighed, dokumentation og respekt for borgerens hjem.",
  },
  {
    title: "Integritet",
    body: "Principper styrer enhver beslutning. Vi går aldrig på kompromis med det rigtige for det bekvemme — hverken over for borgere, medarbejdere eller kommuner.",
  },
];

const LEDELSE_OMRAADER = [
  {
    title: "Bestyrelse",
    body: "Bestyrelsen ejer ledelsesprogrammet, godkender strategiske beslutninger og modtager løbende rapportering om kvalitet, risiko og compliance. Årligt ledelses- og sikkerhedserklæring præsenteres for bestyrelsen.",
  },
  {
    title: "Ledelse",
    body: "Den administrerende direktør er program sponsor og ansvarlig for daglig drift, personaleledelse, borgerpleje, regelefterlevelse og virksomhedens udvikling — med endelig beslutningskompetence i alle driftsspørgsmål.",
  },
  {
    title: "Beslutninger",
    body: "Væsentlige beslutninger træffes på dokumenteret grundlag gennem definerede godkendelsesniveauer. Kliniske vurderinger, beskyttelsesbeslutninger og delegerede sundhedsopgaver hviler altid hos kvalificerede, ansvarlige personer — aldrig automatiseret væk.",
  },
  {
    title: "Kvalitetssikring",
    body: "Én samlet forbedringsmotor: klinisk audit, intern audit, borgerfeedback, klager, hændelser og KPI-afvigelser fører til handling, verifikation og læring — afsluttet med årlig ledelsesgennemgang.",
  },
  {
    title: "Risikostyring",
    body: "Risici identificeres, ejes og overvåges løbende. Arbejdsmiljø, patientsikkerhed, databeskyttelse og operationel risiko vurderes proportionalt med organisationens størrelse og vokser med den.",
  },
  {
    title: "Løbende forbedring",
    body: "Hver fundne afvigelse har ejer, rodårsag, handling, frist og effektivitetskontrol. Temaer ekstraheres kvartalsvis som læring og indgår i uddannelse og teammøder.",
  },
  {
    title: "Politikker",
    body: "Et kontrolleret dokumentbibliotek med én autoritativ kilde pr. emne — klinisk, kvalitet, HR, informationssikkerhed og arbejdsmiljø. Politikker revideres årligt og ved væsentlige lovændringer.",
  },
  {
    title: "Etik",
    body: "Værdierne operationaliseres — ikke reciteres. Accountability som navngivne ejere, transparency som dashboards og rapportering, patientsikkerhed som hændelsesloop og just culture.",
  },
];

const QUALITY_COMMITMENTS = [
  {
    title: "Klinisk ledelse",
    body: "Delegerede sundhedsopgaver udføres kun efter uddannelse og formel godkendelse, præcis som den skriftlige instruks beskriver. Klinisk ledelse bærer det faglige ansvar.",
  },
  {
    title: "Audits",
    body: "Årligt auditprogram dækker dokumentation, delegation, medicinhåndtering, GDPR, klager, hændelser og arbejdsmiljø — med fund sporret til lukning.",
  },
  {
    title: "Uddannelse",
    body: "Ingen arbejder ud over sin uddannelse. Obligatorisk oplæring i betalt tid. Kompetencevurdering er porten til hver delegeret opgave.",
  },
  {
    title: "Dokumentation",
    body: "Plejenotater udfyldes samme dag. Journalen er overleveringen — næste kollega var ikke i rummet. Faktuel, respektfuld og dignitetsskabende dokumentation.",
  },
  {
    title: "Kommunikation med familier",
    body: "Gennemsigtig rapportering og åbne kanaler for tilbagemelding. Pårørende guides til klagevejen — vi opfordrer aldrig til at lade være.",
  },
  {
    title: "Kommunal rapportering",
    body: "Åben rapportering til kommunalpartnere. Evidence fra live registre og dashboards — ikke parallelle regneark.",
  },
  {
    title: "Hændelseslæring",
    body: "Utilsigtede hændelser indberettes straks under just culture. Ærlige fejl mødes med støtte og læring — skjulelse behandles alvorligt.",
  },
  {
    title: "Løbende forbedring",
    body: "Borgertilfredshed, klager, audits og medarbejderforslag indgår i samme forbedringsmaskineri med kvartalsvis læring og årlig ledelsesgennemgang.",
  },
];

const TRUST_LIBRARY = [
  { href: "/privatliv", label: "Privatlivspolitik" },
  { href: "/klager", label: "Klageprocedure" },
  { href: "/beskyttelse", label: "Beskyttelse af sårbare borgere" },
  { href: "/kvalitet", label: "Kvalitetsforpligtelse" },
  { href: "/ligebehandling", label: "Ligebehandling og inklusion" },
  { href: "/whistleblowing", label: "Whistleblower-ordning" },
  { href: "/ledelsesansvar", label: "Ledelseserklæring" },
  { href: "/tillid", label: "Tillidscenter" },
];

function pageJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Hjem",
          item: COMPANY.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ledelse og ansvar",
          item: `${COMPANY.url}/ledelse-og-governance`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Bibi Naziyh Dowezai",
      jobTitle: "Administrerende direktør",
      worksFor: {
        "@type": "Organization",
        name: COMPANY.legalName,
        url: COMPANY.url,
      },
      image: `${COMPANY.url}${LEADERSHIP_IMAGES.pressPortrait.src}`,
      url: `${COMPANY.url}/ledelse-og-governance`,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Ledelse og ansvar",
      description:
        "Premium Care ApS — ledelse og ansvar, mission, vision og kvalitetsforpligtelse.",
      url: `${COMPANY.url}/ledelse-og-governance`,
      isPartOf: {
        "@type": "WebSite",
        name: COMPANY.brandName,
        url: COMPANY.url,
      },
      about: {
        "@type": "Organization",
        name: COMPANY.legalName,
      },
    },
  ];
}

export default function LeadershipGovernancePage() {
  return (
    <article className="bg-ivory pb-24">
      <header className="section-padding page-margin">
        <div className="reading-column">
          <CrestSeal size={96} decorative className="!p-0 mb-10 justify-start" />
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Ledelse og ansvar
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Bygget på tillid. Styret af principper. Skabt til at bestå.
          </p>
          <p className="text-[13px] text-midnight/60 mt-6">
            {COMPANY.legalName} · CVR {COMPANY.cvr}
          </p>
        </div>
      </header>

      <div className="reading-column page-margin">
        {/* 1. CEO Profile */}
        <section className="section-padding pt-0" aria-labelledby="ceo-profile">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,240px)_1fr] gap-10 items-start">
            <figure>
              <div className="relative w-full aspect-[16/10] max-w-[400px]">
                <HeroImage
                  src={LEADERSHIP_IMAGES.ceoSmiling.src}
                  alt={LEADERSHIP_IMAGES.ceoSmiling.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover object-[center_20%]"
                />
              </div>
            </figure>
            <div>
              <h2 id="ceo-profile" className="text-[30px] leading-normal text-midnight">
                Bibi Naziyh Dowezai
              </h2>
              <p className="text-[13px] uppercase tracking-wide text-midnight/60 mt-3">
                Administrerende direktør og grundlægger
              </p>
              <div className="mt-8 space-y-6 text-[17px] leading-body text-midnight/90">
                <p>
                  Driftsmæssig ekspertise og lokalkendskab — med ledelse tæt på driften,
                  ikke på afstand. Ansvarlig for den daglige drift, personaleledelse,
                  borgerpleje, regelefterlevelse og virksomhedens udvikling.
                </p>
                <p>
                  Grundlægger af Premium Care ApS. Baggrund i hjemmepleje i Aarhus, Vejle
                  og Fredericia, ledelse og drift af hjemmeplejevirksomhed, og uddannelse
                  som tandplejer.
                </p>
                <p>
                  <strong className="font-medium text-midnight">
                    Over for borgere:
                  </strong>{" "}
                  Den rigtige pleje, de rigtige mennesker, den rigtige adfærd — og en åben
                  vej til at sige fra.
                </p>
                <p>
                  <strong className="font-medium text-midnight">
                    Over for medarbejdere:
                  </strong>{" "}
                  En arbejdsplads med klare rammer, høj faglighed, struktur og respekt for
                  forskellighed.
                </p>
                <p>
                  <strong className="font-medium text-midnight">
                    Over for kvalitet:
                  </strong>{" "}
                  Målbar standard, løbende revision og synlig ledelse i praksis — ikke kun
                  på papiret.
                </p>
              </div>
              <p className="mt-10">
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

        {/* 2. Why Premium Care Exists */}
        <section className="section-padding" aria-labelledby="why-exists">
          <h2 id="why-exists" className="text-[30px] leading-normal text-midnight">
            Hvorfor Premium Care findes
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-body text-midnight/90">
            <p>
              Nogle virksomheder bliver skabt ud fra en forretningsidé. Andre bliver skabt
              ud fra en livshistorie. Premium Care er resultatet af en livshistorie — fra
              Sønderborg, en farmors sidste kapitel i Danmark, og erfaringen af, hvad god
              omsorg kan betyde for en hel familie.
            </p>
            <p>
              Jeg ønskede ikke blot at drive en hjemmepleje. Jeg ønskede at skabe en kultur
              fra bunden — hvor medarbejdere mødes med tillid og respekt, hvor borgeren
              aldrig bliver et CPR-nummer, og hvor ordentlighed, nærvær og faglighed går
              hånd i hånd.
            </p>
            <p>
              Da vi en fredag eftermiddag overtog ansvaret for omkring 250 borgere, lærte
              jeg, hvor afgørende struktur, ledelse og stærke medarbejdere er. Ingen
              borger må blive glemt. Det princip har fulgt mig siden.
            </p>
          </div>
        </section>

        {/* 3. Mission */}
        <section className="section-padding" aria-labelledby="mission">
          <h2 id="mission" className="text-[30px] leading-normal text-midnight">
            Mission
          </h2>
          <p className="text-[19px] leading-body text-midnight/90 mt-8">
            At levere hjemmepleje af kompromisløs kvalitet — sikker, værdig og personlig —
            til hver borger, der vælger os. At støtte familier med ærlighed og pålidelighed.
            At skabe en arbejdsplads, hvor medarbejdere værdsættes og udvikles.
          </p>
        </section>

        {/* 4. Vision */}
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

        {/* 5. Core Values */}
        <section className="section-padding" aria-labelledby="values">
          <h2 id="values" className="text-[30px] leading-normal text-midnight">
            Kerneværdier
          </h2>
          <ul className="mt-10 space-y-8 list-none">
            {CORE_VALUES.map((value) => (
              <li key={value.title}>
                <h3 className="text-[19px] text-midnight">{value.title}</h3>
                <p className="text-[17px] leading-body text-midnight/70 mt-3">
                  {value.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Ledelsesdivider with crest */}
        <div className="section-padding py-12 flex justify-center" aria-hidden="true">
          <CrestSeal size={96} decorative className="!p-0" />
        </div>

        {/* 6. Leadership Principles */}
        <section className="section-padding" aria-labelledby="leadership-principles">
          <h2
            id="leadership-principles"
            className="text-[30px] leading-normal text-midnight"
          >
            Ledelsesprincipper
          </h2>
          <ul className="mt-10 space-y-8 list-none">
            {LEADERSHIP_PRINCIPLES.map((principle) => (
              <li key={principle.title}>
                <h3 className="text-[19px] text-midnight">{principle.title}</h3>
                <p className="text-[17px] leading-body text-midnight/70 mt-3">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* 7. Ledelse og styring */}
        <section
          className="section-padding bg-midnight -mx-[8%] px-[8%]"
          aria-labelledby="ledelse-styring"
        >
          <div className="reading-column mx-auto">
            <h2 id="ledelse-styring" className="text-[30px] leading-normal text-ivory">
              Ledelse og styring
            </h2>
            <p className="text-[17px] leading-body text-ivory/80 mt-8">
              Premium Care er bygget omkring et kontrolleret dokumentbibliotek — fra
              dag ét designet til dokumenteret ansvar, målbar kvalitet og audit-klar drift.
              Nedenfor er den offentlige forklaring af, hvordan vi er styret.
            </p>
            <ul className="mt-10 space-y-8 list-none">
              {LEDELSE_OMRAADER.map((area) => (
                <li key={area.title}>
                  <h3 className="text-[19px] text-gold">{area.title}</h3>
                  <p className="text-[17px] leading-body text-ivory/80 mt-3">
                    {area.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Institutional image */}
        <section className="section-padding" aria-hidden="true">
          <figure>
            <div className="relative w-full aspect-[16/9]">
              <HeroImage
                src={PHOTOGRAPHY.ledelse.src}
                alt={PHOTOGRAPHY.ledelse.alt}
                fill
                sizes={PHOTO_SIZES.section}
                objectPosition={PHOTOGRAPHY.ledelse.objectPosition}
              />
            </div>
          </figure>
        </section>

        {/* 8. Quality Commitment */}
        <section className="section-padding" aria-labelledby="quality">
          <h2 id="quality" className="text-[30px] leading-normal text-midnight">
            Kvalitetsforpligtelse
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-6">
            Kvalitet kører som én samlet forbedringsmotor — mange input, én maskineri,
            lukkede loops.
          </p>
          <ul className="mt-10 space-y-8 list-none">
            {QUALITY_COMMITMENTS.map((item) => (
              <li key={item.title}>
                <h3 className="text-[19px] text-midnight">{item.title}</h3>
                <p className="text-[17px] leading-body text-midnight/70 mt-3">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link
              href="/kvalitet"
              className="text-[17px] leading-body text-midnight underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
            >
              Læs kvalitetsforpligtelsen i fuld længde
            </Link>
          </p>
        </section>

        {/* 9. Trust Library */}
        <section className="section-padding" aria-labelledby="trust-library">
          <h2 id="trust-library" className="text-[30px] leading-normal text-midnight">
            Tillidsbibliotek
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-6">
            Politikker, procedurer og erklæringer — offentligt tilgængelige resuméer med
            link til autoritative dokumenter.
          </p>
          <ul className="mt-10 space-y-0 list-none">
            {TRUST_LIBRARY.map((item) => (
              <li key={item.href} className="border-b border-midnight/10">
                <Link
                  href={item.href}
                  className="block py-5 text-[17px] text-midnight hover:tracking-wide transition-all duration-300 focus-ring"
                >
                  {item.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Company details */}
        <section className="section-padding border-t border-midnight/10">
          <p className="text-[17px] leading-body text-midnight/80">
            {COMPANY.legalName} · CVR {COMPANY.cvr}
            <br />
            {COMPANY.address.street}, {COMPANY.address.postalCode}{" "}
            {COMPANY.address.locality}
          </p>
          <p className="text-[17px] leading-body text-midnight/80 mt-4">
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

      {/* 10. Closing Statement - Kompasset */}
      <section
        className="section-padding bg-midnight"
        aria-labelledby="compass"
      >
        <div className="reading-column page-margin text-center">
          <p
            id="compass"
            className="text-[13px] uppercase tracking-wide text-gold mb-10"
          >
            Kompasset
          </p>
          <blockquote className="text-[30px] sm:text-[34px] leading-snug text-ivory max-w-[28ch] mx-auto">
            &ldquo;Hvis det var min farmor, der sad i den stol, hvad ville jeg ønske, vi
            gjorde?&rdquo;
          </blockquote>
          <p className="text-[17px] leading-body text-ivory/70 mt-12 max-w-[42ch] mx-auto">
            Det er virksomhedens kompas — ikke en plakat, men en påmindelse om, hvorfor vi
            begyndte, og hvad der aldrig må glemmes.
          </p>
          <p className="mt-10">
            <Link
              href="/vores-loefte"
              className="text-[17px] leading-body text-gold underline underline-offset-4 hover:text-gold-light transition-colors focus-ring"
            >
              Læs vores offentlige løfte
            </Link>
          </p>
        </div>
      </section>

      <footer className="section-padding pt-0" aria-hidden="true">
        <CrestSeal size={96} decorative className="mx-auto !p-4" />
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageJsonLd()),
        }}
      />
    </article>
  );
}
