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
      "Sådan beskytter PremiumCare personoplysninger og helbredsdata i overensstemmelse med GDPR og dansk lovgivning",
    purpose:
      "At alle oplysninger om borgere, pårørende og medarbejdere behandles lovligt, sikkert og med respekt for privatlivets fred",
    whyItMatters:
      "Hjemmepleje foregår i det mest private rum. Borgere og familier skal kunne dele følsomme oplysninger uden at frygte misbrug",
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
      "Spørgsmål om databeskyttelse rettes til administrerende direktør via kontaktoplysningerne nederst på siden",
  },
  {
    slug: "klager",
    title: "Klageprocedure",
    description:
      "Sådan indgiver borgere, pårørende og samarbejdspartnere klager, og hvordan PremiumCare håndterer dem",
    purpose:
      "At give en klar vej til at udtrykke utilfredshed, få svar og sikre, at fejl fører til handling",
    whyItMatters:
      "En klage fortæller os, at noget skal rettes. Vi tager den alvorligt",
    commitments: [
      "Alle klager modtages og registreres uden forsinkelse",
      "Borgere og pårørende guides til klagevejen",
      "Svar inden for 48 timer på første kontakt; fuld behandling efter procedurens faser",
      "Læring fra klager indgår i kvalitetsarbejdet",
      "Dokumentation af klagebehandling til kommuner og tilsyn",
    ],
    documentHref: "/documents/Klageprocedure.pdf",
    documentLabel: "Klageprocedure (PDF)",
    contactNote:
      "Klager kan indgives telefonisk, skriftligt eller via kontaktformularen. Akutte sikkerhedsproblemer: ring 112 først",
  },
  {
    slug: "beskyttelse",
    title: "Beskyttelse af sårbare borgere",
    description:
      "PremiumCare ApS' forpligtelse til at beskytte borgere mod mishandling, forsømmelse og utrygge forhold",
    purpose:
      "At medarbejdere ser, hører og reagerer på tegn på risiko, og at bekymringer behandles hurtigt og fagligt",
    whyItMatters:
      "Vi er ofte de eneste, der kommer forbi. At se og reagere hører til arbejdet",
    commitments: [
      "Bekymringer indberettes samme dag",
      "Samtykke og kapacitetsvurdering før enhver plejehandling",
      "Magtanvendelse håndteres efter dansk lov og aldrig som ensidig beslutning",
      "Koordinering med klinisk ledelse og myndigheder ved behov",
      "Bekræftelse til indberetter, at bekymringen er modtaget",
    ],
    documentHref: "/documents/demens-_og_faldprotokol.pdf",
    documentLabel: "Demens- og faldprotokol (PDF)",
  },
  {
    slug: "kvalitet",
    title: "Kvalitetsforpligtelse",
    description:
      "PremiumCare ApS' løfte om dokumenteret og løbende forbedret plejekvalitet",
    purpose:
      "At hver borger modtager pleje, der holder, og at kvalitet kan dokumenteres for familier og kommuner",
    whyItMatters:
      "Borgere vælger os frit. Det, der tæller, er det, de oplever i deres eget hjem",
    commitments: [
      "Skriftlig servicestandard ud over kommunale minimumskrav",
      "Små, stabile teams og kontinuitet, når det er muligt",
      "Egenkontrol, supervision og ekstern kontrol",
      "Løbende uddannelse, kompetencevurdering og kvalitetsgennemgange",
      "Åben rapportering til kommunalpartnere",
    ],
    documentHref: "/documents/kvalitetshåndbog_2026.pdf",
    documentLabel: "Kvalitetshåndbog 2026 (PDF)",
  },
  {
    slug: "ligebehandling",
    title: "Ligebehandling og inklusion",
    description:
      "PremiumCare ApS' forpligtelse til respekt og ligebehandling for borgere og medarbejdere",
    purpose:
      "At alle mennesker mødes med værdighed i vores arbejde, uanset baggrund",
    whyItMatters:
      "Vores borgere og medarbejdere afspejler Danmark. Respekt er en forudsætning for tryg pleje",
    commitments: [
      "Nultolerance over for diskrimination, chikane og mobning",
      "Lige adgang til udvikling og ansvar i hverdagen",
      "Klare sanktioner ved overtrædelse af adfærdsstandarder",
      "Løbende opmærksomhed på barrierer og forbedring",
    ],
    documentHref: "/documents/ligebehandlingspolitik.pdf",
    documentLabel: "Ligebehandlingspolitik (PDF)",
  },
  {
    slug: "cookiepolitik",
    title: "Cookiepolitik",
    description:
      "Sådan bruger PremiumCare cookies på hjemmesiden, og hvordan du styrer dit samtykke",
    purpose:
      "At give gennemsigtighed om nødvendige og valgfrie cookies, og at respektere brugerens valg",
    whyItMatters:
      "Besøgende skal kunne forstå, hvilke cookies der bruges, og hvordan de kan fravælge dem",
    commitments: [
      "Nødvendige cookies bruges for at få hjemmesiden til at fungere",
      "Valgfrie cookies aktiveres kun efter samtykke",
      "Samtykke kan tilbagekaldes ved at slette cookies eller kontakte os",
      "Ingen markedsførings- eller målecookies uden aktivt valg",
      "Politikken opdateres ved væsentlige ændringer i cookie-brug",
    ],
    contactNote:
      "Spørgsmål om cookies rettes til administrerende direktør via kontaktoplysningerne på siden",
  },
  {
    slug: "whistleblowing",
    title: "Whistleblower-ordning",
    description:
      "Fortrolig indberetning af alvorlige forhold, beskyttet efter dansk lovgivning",
    purpose:
      "At give medarbejdere og samarbejdspartnere en sikker kanal til alvorlige bekymringer, der ikke kan løses i den daglige ledelse",
    whyItMatters:
      "Alvorlige brud på lov, sikkerhed eller etik skal kunne indberettes uden frygt for repressalier",
    commitments: [
      "Fortrolig kanal uafhængig af ordinær linjeledelse",
      "Anerkendelse inden for syv dage; svar inden for tre måneder",
      "Beskyttelse mod repressalier efter danske whistleblower-regler",
      "Eksterne myndighedskanaler er altid lovlige at bruge",
      "God tro beskytter. Fejlvalg af kanal medfører aldrig sanktion",
    ],
    contactNote:
      "Alvorlige bekymringer kan indberettes fortroligt til bibi@premiumcare.dk. Du kan også bruge eksterne myndighedskanaler, når det er relevant",
    documentHref: "/documents/whistleblower_politik.pdf",
    documentLabel: "Whistleblower politik (PDF)",
  },
  {
    slug: "ledelsesansvar",
    title: "Ledelse og kvalitetsansvar",
    description:
      "Hvordan PremiumCare er styret, dokumenteret og revideret som plejeorganisation",
    purpose:
      "Én ledelsesstruktur med tydeligt ejerskab, godkendelse og revision af politikker og procedurer",
    whyItMatters:
      "Kommuner, borgere og medarbejdere skal kunne se, hvem der er ansvarlig, og hvordan kvalitet følges op",
    commitments: [
      "Dokumentbibliotek med én gældende version pr. emne",
      "Navngivne ejere og godkendelsesmyndigheder for hvert dokument",
      "Årlig revision og opdatering ved lovændringer",
      "Struktur, der kan redegøres for over for kommune og tilsyn",
      "Ledelse, der er synlig i driften, ikke kun i rapporter",
    ],
    documentHref: "/documents/årlig_kvalitetsrevisionsrapport.pdf",
    documentLabel: "Årlig kvalitetsrevisionsrapport (PDF)",
  },
];

export function getTrustPolicy(slug: string) {
  return TRUST_POLICIES.find((policy) => policy.slug === slug);
}
