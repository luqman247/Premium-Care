import { PHOTOGRAPHY } from "@/lib/photography";

export type ServiceCategory = {
  id: string;
  title: string;
  intro: string;
  items?: string[];
  photo?: (typeof PHOTOGRAPHY)[keyof typeof PHOTOGRAPHY];
};

/**
 * PLANNED SERVICES — NOT CURRENTLY OFFERED.
 * Sygeplejeydelser (herunder medicinhaandtering og saarpleje), fysioterapi og
 * ergoterapi er UNDER UDVIKLING og udbydes ikke paa nuvaerende tidspunkt.
 * De maa ikke fremstilles som nuvaerende ydelser, foer:
 *   (1) en autoriseret sygeplejefaglig ansvarlig er udpeget,
 *   (2) PremiumCare er registreret som behandlingssted hos Styrelsen for Patientsikkerhed, og
 *   (3) de kliniske SOP'er er fagligt godkendt.
 * Kontrol: AUD-2026-009 / R-37. Fjern ikke denne note uden en registreret beslutning.
 */
export const PLANNED_NOT_OFFERED = [
  "Sygeplejeydelser",
  "Fysioterapi",
  "Ergoterapi",
] as const;

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "praktisk-hjaelp",
    title: "Praktisk hjælp",
    intro:
      "Rengøring, indkøb, mad og de små ting i hverdagen, der gør det muligt at blive hjemme i et kendt miljø",
    photo: PHOTOGRAPHY.personalCare,
  },
  {
    id: "personlig-pleje",
    title: "Personlig pleje",
    intro:
      "Bad, påklædning og mobilitet i borgerens tempo. Vi respekterer vaner, grænser og det, der føles privat",
    photo: PHOTOGRAPHY.companionship,
  },
  {
    id: "tilkoebsydelser",
    title: "Tilkøbsydelser",
    intro:
      "Ekstra støtte, når det er aftalt med borger, familie og kommune",
    items: [
      "Ekstra rengøring",
      "Ledsagelse til ærinder og aftaler",
      "Sociale aktiviteter",
      "Praktisk støtte i hverdagen",
    ],
    photo: PHOTOGRAPHY.addonServices,
  },
];
