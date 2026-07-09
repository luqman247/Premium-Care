export type TrustPolicy = {
  slug: string;
  title: string;
  description: string;
  purpose: string;
  whyItMatters: string;
  commitments: string[];
  documentHref?: string;
  documentLabel?: string;
  contactNote?: string;
};

export const TRUST_POLICIES: TrustPolicy[] = [
  {
    slug: "privatliv",
    title: "Privatlivspolitik",
    description:
      "Sådan beskytter Premium Care personoplysninger og helbredsdata i overensstemmelse med GDPR og dansk lovgivning.",
    purpose:
      "At sikre, at alle oplysninger om borgere, pårørende og medarbejdere behandles lovligt, sikkert og med respekt for privatlivets fred.",
    whyItMatters:
      "Hjemmepleje handler om tillid i det mest private rum. Borgere og familier skal kunne dele følsomme oplysninger uden frygt for misbrug eller utroværdig håndtering.",
    commitments: [
      "Fuld efterlevelse af GDPR og databeskyttelsesloven for følsomme helbredsoplysninger",
      "Samtykke og tydelig information, før data behandles eller deles",
      "Adgangskontrol, kryptering og sikker dokumentation i godkendte systemer",
      "Borgere og pårørende kan anmode om indsigt i relevante oplysninger",
      "Databrud indberettes til Datatilsynet, når loven kræver det",
    ],
    documentHref: "/documents/persondata_politik.pdf",
    documentLabel: "Persondata politik (PDF)",
    contactNote:
      "Spørgsmål om databeskyttelse rettes til administrerende direktør via kontaktoplysningerne nederst på siden.",
  },
  {
    slug: "klager",
    title: "Klageprocedure",
    description:
      "Sådan indgiver borgere, pårørende og samarbejdspartnere klager — og hvordan Premium Care håndterer dem.",
    purpose:
      "At give en klar, tilgængelig vej til at udtrykke utilfredshed, få svar og sikre, at fejl og bekymringer fører til handling.",
    whyItMatters:
      "En klage er ikke et angreb. Den er et signal om, at noget skal rettes — og en mulighed for at genoprette tillid.",
    commitments: [
      "Alle klager modtages og registreres uden forsinkelse",
      "Borgere og pårørende guides til klagevejen — vi opfordrer aldrig til at lade være",
      "Svar inden for 48 timer på første kontakt; fuld behandling efter procedurens faser",
      "Læring fra klager indgår i kvalitetsarbejdet og løbende forbedring",
      "Uafhængig dokumentation af klagebehandling til kommuner og tilsyn",
    ],
    documentHref: "/documents/Klageprocedure.pdf",
    documentLabel: "Klageprocedure (PDF)",
    contactNote:
      "Klager kan indgives telefonisk, skriftligt eller via kontaktformularen. Akutte sikkerhedsproblemer: ring 112 først.",
  },
  {
    slug: "beskyttelse",
    title: "Beskyttelse af sårbare borgere",
    description:
      "Premium Cares forpligtelse til at beskytte borgere mod mishandling, forsømmelse og utrygge forhold.",
    purpose:
      "At sikre, at medarbejdere ser, hører og reagerer på tegn på risiko — og at bekymringer behandles hurtigt og fagligt.",
    whyItMatters:
      "Medarbejdere i hjemmeplejen er ofte de eneste øjne, der besøger, når ingen andre gør. Beskyttelse er en kerneopgave, ikke en ekstra opgave.",
    commitments: [
      "Bekymringer indberettes samme dag — sikkerhed kræver ikke sikkerhed",
      "Samtykke og kapacitetsvurdering før enhver plejehandling",
      "Særskilt håndtering af magtanvendelse efter dansk lov — aldrig en ensidig beslutning",
      "Koordinering med klinisk ledelse og relevante myndigheder ved behov",
      "Bekræftelse til indberetter, at bekymringen er modtaget",
    ],
    documentHref: "/documents/demens-_og_faldprotokol.pdf",
    documentLabel: "Demens- og faldprotokol (PDF)",
  },
  {
    slug: "kvalitet",
    title: "Kvalitetsforpligtelse",
    description:
      "Premium Cares løfte om målbar, dokumenteret og løbende forbedret plejekvalitet.",
    purpose:
      "At sikre, at hver borger modtager pleje, der overgår minimumskrav — og at kvalitet kan dokumenteres for familier og kommuner.",
    whyItMatters:
      "Borgere vælger os frit. Kvalitet er ikke et løfte på en hjemmeside — det er det, de oplever i deres eget hjem, hver dag.",
    commitments: [
      "Premium Care Standard — skriftlig servicestandard ud over kommunale minimumskrav",
      "Små, stabile teams og kontinuitet som sikkerhedsforanstaltning",
      "Tre lag af verifikation: egenkontrol, supervision og ekstern kontrol",
      "Løbende uddannelse, kompetencevurdering og kvalitetsaudits",
      "Datadrevet forbedring og åben rapportering til partnere",
    ],
    documentHref: "/documents/kvalitetshåndbog_2026.pdf",
    documentLabel: "Kvalitetshåndbog 2026 (PDF)",
  },
  {
    slug: "ligebehandling",
    title: "Ligebehandling og inklusion",
    description:
      "Premium Cares forpligtelse til respekt, ligebehandling og inklusion for borgere og medarbejdere.",
    purpose:
      "At sikre, at alle mennesker — uanset alder, køn, etnicitet, tro, handicap eller baggrund — mødes med værdighed i vores arbejde.",
    whyItMatters:
      "Vores borgere og medarbejdere afspejler Danmark. En arbejdsplads og en plejeorganisation uden inklusion kan ikke levere tryg omsorg.",
    commitments: [
      "Nultolerance over for diskrimination, chikane og mobning",
      "Lige adgang til udvikling, ansvar og respekt i hverdagen",
      "Medfølelse gælder kolleger såvel som borgere",
      "Klare sanktioner ved overtrædelse af adfærdsstandarder",
      "Løbende opmærksomhed på strukturelle barrierer og forbedring",
    ],
    documentHref: "/documents/ligebehandlingspolitik.pdf",
    documentLabel: "Ligebehandlingspolitik (PDF)",
  },
  {
    slug: "whistleblowing",
    title: "Whistleblower-ordning",
    description:
      "Fortrolig indberetning af alvorlige forhold — beskyttet efter dansk lovgivning.",
    purpose:
      "At give medarbejdere og samarbejdspartnere en sikker kanal til alvorlige bekymringer, der ikke kan løses gennem den daglige ledelse.",
    whyItMatters:
      "Alvorlige brud på lov, sikkerhed eller etik skal kunne indberettes uden frygt for repressalier. Organisationer, der beskytter indberettere, beskytter borgere.",
    commitments: [
      "Fortrolig kanal uafhængig af ordinær linjeledelse",
      "Anerkendelse inden for syv dage; svar inden for tre måneder",
      "Beskyttelse mod repressalier efter danske whistleblower-regler",
      "Eksterne myndighedskanaler er altid lovlige at bruge",
      "God tro beskytter — fejlvalg af kanal medfører aldrig sanktion",
    ],
    documentHref: "/documents/whistleblower_politik.pdf",
    documentLabel: "Whistleblower politik (PDF)",
  },
  {
    slug: "governance",
    title: "Governance og ledelsesansvar",
    description:
      "Hvordan Premium Care er styret, dokumenteret og revideret som en ansvarlig plejeorganisation.",
    purpose:
      "At sikre én samlet governance-arkitektur med tydeligt ejerskab, godkendelse og revision af alle væsentlige politikker og procedurer.",
    whyItMatters:
      "Kommuner, borgere og medarbejdere skal kunne se, hvem der er ansvarlig, hvordan beslutninger træffes, og hvordan kvalitet overvåges over tid.",
    commitments: [
      "Fem-niveau governance-bibliotek med én autoritativ kilde pr. emne",
      "Navngivne ejere og godkendelsesmyndigheder for hvert dokument",
      "Årlig revision og opdatering ved lovændringer eller væsentlige ændringer",
      "Audit-klar struktur til kommunal indkøb, tilsyn og akkreditering",
      "Etisk ledelse og synlig ledelse som designprincip — ikke eftertanke",
    ],
    documentHref: "/documents/årlig_kvalitetsrevisionsrapport.pdf",
    documentLabel: "Årlig kvalitetsrevisionsrapport (PDF)",
  },
];

export function getTrustPolicy(slug: string) {
  return TRUST_POLICIES.find((policy) => policy.slug === slug);
}
