/**
 * Premium Care editorial photography registry.
 * Curated for restraint — each image earns its place.
 */

export type EditorialPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Suggested object-position for responsive crops */
  objectPosition?: string;
  /** Authentic Premium Care photograph (not editorial stock) */
  authentic?: boolean;
};

export const PHOTOGRAPHY = {
  hero: {
    src: "/images/editorial/hero-authentic-care.jpg",
    alt: "En Premium Care-medarbejder i navy uniform og blå handsker sidder ved siden af en ældre kvinde i hendes hjem og hjælper hende med at læse et dokument",
    width: 2200,
    height: 1467,
    objectPosition: "center 35%",
    authentic: true,
  },
  about: {
    src: "/images/editorial/hero-authentic-care.jpg",
    alt: "En Premium Care-medarbejder yder rolig, professionel støtte til en ældre kvinde i hendes eget hjem",
    width: 2200,
    height: 1467,
    objectPosition: "center 35%",
    authentic: true,
  },
  personalCare: {
    src: "/images/editorial/personal-care.jpg",
    alt: "En omsorgsgiver hjælper en ældre kvinde med rolig morgenpleje i et lyst, nordisk soveværelse",
    width: 2200,
    height: 1467,
    objectPosition: "center center",
  },
  companionship: {
    src: "/images/editorial/companionship.jpg",
    alt: "En omsorgsgiver og en ældre kvinde læser sammen i en rolig stue med udsigt til vinterlandskab",
    width: 2200,
    height: 1467,
    objectPosition: "center 40%",
  },
  palliative: {
    src: "/images/editorial/palliative-dignity.jpg",
    alt: "En ældre persons hænder hviler roligt på et tæppe i morgenlys - et øjeblik af værdighed og ro",
    width: 2200,
    height: 1467,
    objectPosition: "center center",
  },
  municipal: {
    src: "/images/editorial/municipal-institution.jpg",
    alt: "Et dansk rådhus med Dannebrog - symbol på offentlig tillid og lokalt samarbejde",
    width: 2200,
    height: 1467,
    objectPosition: "center center",
  },
  calmInterior: {
    src: "/images/editorial/calm-interior.jpg",
    alt: "Et roligt, nordisk opholdsrum med naturligt lys - et hjem, hvor ældre kan føle sig trygge",
    width: 2200,
    height: 1467,
    objectPosition: "center center",
  },
  professionalTraining: {
    src: "/images/editorial/professional-training.jpg",
    alt: "Premium Care medarbejdere i faglig oplæring - struktur, nærvær og faglighed",
    width: 2200,
    height: 1467,
    objectPosition: "center center",
    authentic: true,
  },
  ledelse: {
    src: "/images/editorial/palliative-dignity.jpg",
    alt: "En ældre persons hænder hviler roligt på et tæppe i morgenlys - et øjeblik af værdighed og ro",
    width: 2200,
    height: 1467,
    objectPosition: "center center",
  },
  founder: {
    src: "/images/founder-tandsbjerg-aquarium.png",
    alt: "Akvariet og opholdsrum på plejehjemmet i Tandsbjerg i Sønderborg — stedet, hvor grundlæggeren som barn oplevede dansk omsorg",
    width: 1600,
    height: 1067,
    objectPosition: "center center",
    authentic: true,
  },
} as const satisfies Record<string, EditorialPhoto>;

/** Responsive sizes hints for common layouts */
export const PHOTO_SIZES = {
  hero: "100vw",
  section: "(max-width: 768px) 100vw, 680px",
  service: "(max-width: 768px) 100vw, 960px",
  portrait: "(max-width: 768px) 60vw, 200px",
} as const;
