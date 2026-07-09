import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { DamImage } from "@/components/DamImage";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { damAbsoluteUrl, damMetadataImage } from "@/lib/dam/site-images";
import { COMPANY } from "@/lib/company";
import { LEADERSHIP_IMAGES } from "@/lib/leadership-images";
import { PHOTOGRAPHY, PHOTO_SIZES } from "@/lib/photography";

export const metadata: Metadata = {
  title: {
    absolute: "Ledelse og ansvar | Premium Care",
  },
  description:
    "Ledelse, ansvar og kvalitetsarbejde i Premium Care ApS. Grundlagt af Bibi Naziyh Dowezai.",
  alternates: { canonical: "/ledelse-og-governance" },
  openGraph: {
    title: "Ledelse og ansvar | Premium Care",
    description:
      "Ledelse, ansvar og kvalitetsarbejde i Premium Care ApS. Grundlagt af Bibi Naziyh Dowezai.",
    url: "https://premiumcare.dk/ledelse-og-governance",
    images: [damMetadataImage(ASSET_IDS.leadershipPress)],
  },
};

const CORE_VALUES = [
  {
    title: "Faglighed",
    body: "Vi er uddannede og forberedte. Procedurerne er til for at beskytte borgere og os selv.",
  },
  {
    title: "Ærlighed",
    body: "Vi siger fra, når noget halter, også når det er ubehageligt.",
  },
  {
    title: "Sikkerhed",
    body: "Ingen tidsplan vejer tungere end borgerens sikkerhed.",
  },
  {
    title: "Kontinuitet",
    body: "Den samme medarbejder, når det er muligt. Det gør en forskel.",
  },
];

const LEADERSHIP_PRINCIPLES = [
  {
    title: "Ledelse i praksis",
    body: "Jeg deltager i opstart, besøger hjem, følger kvaliteten og træder til, når en borger har brug for hjælp. Også en sen aften, hvis det kræves.",
  },
  {
    title: "Navngivet ansvar",
    body: "Hver standard har en ejer. Beslutninger kan forklares. Fejl indberettes tidligt og følges op.",
  },
  {
    title: "Respekt i hverdagen",
    body: "Kolleger, borgere og pårørende mødes med værdighed. Det gælder også de svære dage.",
  },
  {
    title: "Kvalitet man kan dokumentere",
    body: "Vi arbejder ud over kommunale minimumskrav med punktlighed, kontinuitet og målbar pleje.",
  },
];

const LEDELSE_OMRAADER = [
  {
    title: "Bestyrelse",
    body: "Bestyrelsen godkender strategiske beslutninger og modtager løbende rapportering om kvalitet og risiko.",
  },
  {
    title: "Daglig ledelse",
    body: "Den administrerende direktør har ansvar for drift, personale, borgerpleje og regelefterlevelse.",
  },
  {
    title: "Beslutninger",
    body: "Væsentlige beslutninger dokumenteres. Kliniske vurderinger og delegerede opgaver ligger hos kvalificerede personer.",
  },
  {
    title: "Kvalitet",
    body: "Audits, borgerfeedback, klager og hændelser fører til handling og opfølgning. Årlig ledelsesgennemgang.",
  },
  {
    title: "Risiko",
    body: "Risici inden for arbejdsmiljø, patientsikkerhed og databeskyttelse vurderes løbende.",
  },
  {
    title: "Politikker",
    body: "Én gældende version pr. emne. Årlig revision og opdatering ved lovændringer.",
  },
];

const QUALITY_COMMITMENTS = [
  {
    title: "Klinisk ledelse",
    body: "Delegerede sundhedsopgaver udføres kun efter uddannelse og formel godkendelse.",
  },
  {
    title: "Audits",
    body: "Årligt program dækker dokumentation, medicin, GDPR, klager og arbejdsmiljø. Fund følges til lukning.",
  },
  {
    title: "Oplæring",
    body: "Ingen arbejder ud over sin uddannelse. Obligatorisk oplæring i betalt tid.",
  },
  {
    title: "Dokumentation",
    body: "Plejenotater udfyldes samme dag. Journalen er overleveringen til næste kollega.",
  },
  {
    title: "Familier",
    body: "Vi fortæller, hvad vi ser og planlægger. Pårørende guides til klagevejen.",
  },
  {
    title: "Kommuner",
    body: "Åben rapportering til kommunalpartnere fra fælles registre, ikke parallelle regneark.",
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
      image: damAbsoluteUrl(ASSET_IDS.leadershipPress, COMPANY.url),
      url: `${COMPANY.url}/ledelse-og-governance`,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Ledelse og ansvar",
      description:
        "Ledelse og ansvar i Premium Care ApS.",
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
          <h1 className="type-page-title text-midnight tracking-tight">
            Ledelse og ansvar
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Hvem der står bag, og hvordan vi arbejder
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
                <DamImage
                  assetId={LEADERSHIP_IMAGES.ceoSmiling.assetId}
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
                  Driftsmæssig ekspertise og lokalkendskab, med ledelse tæt på driften,
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
                  Den rigtige pleje, de rigtige mennesker, og en åben vej til at
                  klage.
                </p>
                <p>
                  <strong className="font-medium text-midnight">
                    Over for medarbejdere:
                  </strong>{" "}
                  Klare rammer, oplæring og ledelse, der kan findes.
                </p>
                <p>
                  <strong className="font-medium text-midnight">
                    Over for kvalitet:
                  </strong>{" "}
                  Målbar standard, årlig revision og ledelse, der også er ude i
                  hjemmene.
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
              Premium Care kom ud af en livshistorie. Min farmor fik værdig pleje i
              Danmark. Senere arbejdede jeg i hjemmeplejen i Aarhus, Vejle og
              Fredericia og lærte, hvad der skal til, når mange borgere skal passes
              på samme tid.
            </p>
            <p>
              Da vi en fredag overtog ansvaret for omkring 250 borgere, lærte jeg,
              hvor afgørende struktur og stærke medarbejdere er. Ingen borger må
              blive glemt. Det princip har fulgt mig siden.
            </p>
          </div>
        </section>

        {/* 3. Mission */}
        <section className="section-padding" aria-labelledby="mission">
          <h2 id="mission" className="text-[30px] leading-normal text-midnight">
            Mission
          </h2>
          <p className="text-[19px] leading-body text-midnight/90 mt-8">
            At levere hjemmepleje, borgere kan leve med i eget hjem. At støtte
            familier med ærlig besked. At være en arbejdsplads, medarbejdere gider
            blive i.
          </p>
        </section>

        {/* 4. Vision */}
        <section className="section-padding" aria-labelledby="vision">
          <h2 id="vision" className="text-[30px] leading-normal text-midnight">
            Vision
          </h2>
          <p className="text-[19px] leading-body text-midnight/90 mt-8">
            At blive en hjemmepleje, kommuner kan samarbejde med, borgere vælger, og
            medarbejdere gerne arbejder for.
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
              Vi har et dokumentbibliotek med én gældende version pr. emne. Her er
              den offentlige forklaring på, hvordan vi er styret.
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
              <DamImage
                assetId={PHOTOGRAPHY.ledelse.assetId}
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
            Audits, klager, hændelser og tilbagemeldinger fører til handling og
            opfølgning.
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
            Politikker, procedurer og erklæringer. Offentlige resuméer med link til
            de fulde dokumenter.
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
            Det spørgsmål stillede jeg mig selv, da min farmor sad i plejestolen. Det
            bruger vi stadig, når vi er i tvivl.
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
