import { PHOTOGRAPHY } from "@/lib/photography";

export type ServiceCategory = {
  id: string;
  title: string;
  intro: string;
  items?: string[];
  photo?: (typeof PHOTOGRAPHY)[keyof typeof PHOTOGRAPHY];
};

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
    id: "sygeplejeydelser",
    title: "Sygeplejeydelser",
    intro:
      "Sygepleje i hjemmet, koordineret med læge og andre, der er involveret i borgerens forløb",
    items: [
      "Medicinering",
      "Sårpleje og bandageskift",
      "Observation af helbredstilstand",
      "Støtte ved kronisk sygdom og genoptræning",
      "Samarbejde med læge og andre sundhedsudbydere",
    ],
    photo: PHOTOGRAPHY.palliative,
  },
  {
    id: "fysioterapi",
    title: "Fysioterapi",
    intro:
      "Genoptræning og faldforebyggelse efter indlæggelse eller når kroppen ikke længere bærer som før",
    photo: PHOTOGRAPHY.physiotherapy,
  },
  {
    id: "ergoterapi",
    title: "Ergoterapi",
    intro:
      "Hjælpemidler, tilpasning af hjemmet og øvelser, så borgeren kan klare mere selv",
    photo: PHOTOGRAPHY.occupational,
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
