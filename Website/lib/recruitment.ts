import { COMPANY } from "@/lib/company";

export const RECRUITMENT_REGION = "Aarhus og Østjylland";

export const WORKPLACE_PROMISES = [
  {
    title: "Dit fag tæller",
    body: "Du er uddannet plejepersonale. Vi forventer faglighed og giver dig oplæring, struktur og tid nok til at gøre arbejdet ordentligt",
  },
  {
    title: "Ledelse du kan finde",
    body: "Når noget er svært, ved du, hvem du ringer til. Du skal ikke gå hjem med bekymringer, du skal bære alene",
  },
  {
    title: "Fire uger plus otte uger mentor",
    body: "Du starter ikke alene i komplekse situationer. Betalt tid til at lære borgerens hjem og rutiner",
  },
  {
    title: "Du kan sige fra",
    body: "Arbejdsmiljø, whistleblower-ordning og procedurer, der beskytter borgere og dig",
  },
] as const;

export const WORKPLACE_BENEFITS = [
  "Fast månedsløn",
  "Pension efter gældende overenskomst",
  "Betalt oplæring og efteruddannelse",
  "Uniform og udstyr",
  "Planlagte vagter og tydelig besked fra planlægning",
  "Kollegaer, der kender borgerne",
] as const;

export const TRAINING_PROGRAMME = [
  "Daglig pleje og kerneprocedurer",
  "Demens og kommunikation, når hukommelsen svigter",
  "Inddragelse af borgere og pårørende",
  "Nødsituationer i hjemmet",
  "Fortrolighed og faglig etik",
  "Supervision og faglig sparring",
] as const;

export const OPEN_POSITIONS = [
  {
    title: "Social- og sundhedsassistent",
    location: `${RECRUITMENT_REGION} · Fuldtid`,
    subject: "Ansøgning: Social- og sundhedsassistent",
  },
  {
    title: "Social- og sundhedshjælper",
    location: `${RECRUITMENT_REGION} · Fuldtid og deltid`,
    subject: "Ansøgning: Social- og sundhedshjælper",
  },
  {
    title: "Omsorgschef",
    location: `${RECRUITMENT_REGION} · Ledelse`,
    subject: "Ansøgning: Omsorgschef",
  },
] as const;

export const RECRUITMENT_EMAIL = COMPANY.email;
export const RECRUITMENT_RESPONSE_DAYS = 3;

export const RECRUITMENT_PHILOSOPHY = [
  {
    title: "Du kan lide mennesker",
    body: "Og stadig arbejde professionelt og sætte grænser",
  },
  {
    title: "Du har papirerne i orden",
    body: "Uddannelse, attester og vilje til at følge procedurer",
  },
  {
    title: "Du møder op",
    body: "Du dokumenterer, og du siger til, når noget ikke hænger sammen",
  },
  {
    title: "Du arbejder sammen med andre",
    body: "Med kolleger, pårørende og borgere, også på de svære dage",
  },
] as const;
