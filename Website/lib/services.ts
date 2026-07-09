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
      "Vi holder hjemmet sikkert og velkendt - rengøring, indkøb, mad og de daglige opgaver, der gør det muligt at blive i de trygge rammer af eget hjem",
    photo: PHOTOGRAPHY.personalCare,
  },
  {
    id: "personlig-pleje",
    title: "Personlig pleje",
    intro:
      "Vi hjælper med bad, påklædning, mobilitet og den personlige pleje, der skal ske i borgerens tempo - med respekt for vaner, grænser og værdighed",
    photo: PHOTOGRAPHY.companionship,
  },
  {
    id: "sygeplejeydelser",
    title: "Sygeplejeydelser",
    intro:
      "Faglig sygepleje i hjemmet, koordineret med læger og andre sundhedsudbydere",
    items: [
      "Medicinering og administration af medicin",
      "Sårpleje og bandageskift",
      "Overvågning af vitale tegn og helbredstilstand",
      "Støtte ved kroniske sygdomme og rehabilitering",
      "Koordination med læger og sundhedsudbydere",
    ],
    photo: PHOTOGRAPHY.palliative,
  },
  {
    id: "fysioterapi",
    title: "Fysioterapi",
    intro:
      "Genoptræning, mobilitetsstøtte og faldforebyggelse efter indlæggelse eller ved nedsat funktionsevne - så borgeren kan bevare tryghed og bevægelse i eget hjem",
  },
  {
    id: "ergoterapi",
    title: "Ergoterapi",
    intro:
      "Praktisk støtte til hverdagslivet - tilpasning af hjemmet, hjælpemidler og øvelser, der styrker selvstændighed og sikkerhed",
  },
  {
    id: "tilkoebsydelser",
    title: "Tilkøbsydelser",
    intro:
      "Yderligere støtte efter individuelle ønsker og behov, når det er aftalt med borger, familie og kommune",
    items: [
      "Ekstra rengøring og hjemlige opgaver",
      "Ledsagelse til aktiviteter og ærinder",
      "Sociale aktiviteter og fællesskab",
      "Motivering og praktisk støtte i hverdagen",
      "Tilpasning efter individuelle ønsker",
    ],
  },
];
