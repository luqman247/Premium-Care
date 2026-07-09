export type PricingRate = {
  period: string;
  amount: string;
};

export type PricingSchedule = {
  title: string;
  rates: PricingRate[];
};

export const EXTRA_CARE_PRICING = {
  title: "Gratis hjemmepleje",
  titleAccent: "med ekstra muligheder",
  intro:
    "Har du fået visiteret hjemmepleje af kommunen, er hjælpen helt gratis. Ønsker du ekstra ydelser ud over det visiterede, kan du købe yderligere ydelser hos os fx ekstra rengøring, en gåtur, havearbejde eller hyggeligt samvær med et fotoalbum eller et spil kort over en kop kaffe",
  scopeNote:
    "Priserne nedenfor gælder kun tilkøbsydelserne – den kommunalt visiterede hjemmepleje forbliver gratis",
  vatNote: "Alle priser er inklusive moms",
  closing:
    "Vi er klar til at imødekomme dine specifikke behov, så kontakt os, så vi sammen kan finde en løsning på det, du har brug for hjælp til",
} as const;

export const EXTRA_CARE_SCHEDULES: PricingSchedule[] = [
  {
    title: "Priser på hverdage og lørdage",
    rates: [
      { period: "7:00 – 15:00", amount: "399 kr. pr. time" },
      { period: "15:00 – 7:00", amount: "485 kr. pr. time" },
    ],
  },
  {
    title: "Priser på søndage og helligdage",
    rates: [
      { period: "7:00 – 15:00", amount: "520 kr. pr. time" },
      { period: "15:00 – 7:00", amount: "670 kr. pr. time" },
    ],
  },
];
