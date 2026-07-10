import { COMPANY } from "@/lib/company";

/** Factual KPIs shown to kommunal indkøb — each includes measurement context */
export const MUNICIPAL_KPIS = [
  {
    value: "94%",
    label: "Årlig borger-/pårørendetilfredshed",
    context:
      "Uafhængig måling, seneste tilgængelige år. Metode og scope beskrives i kommunalt beslutningsgrundlag",
  },
  {
    value: "87%",
    label: "Medarbejderfastholdelse (12 måneder)",
    context: "Intern HR-rapport. Definition og periode i kvalitetsrevisionsrapporten",
  },
  {
    value: "0",
    label: "Alvorlige hændelser (2025)",
    context:
      "Registrerede alvorlige hændelser efter intern klassifikation. Indberetning følger gældende tilsynskrav",
  },
] as const;

/**
 * Municipal document catalogue.
 * Empty placeholder PDFs are not offered as downloads — status only until real files exist.
 */
export const MUNICIPAL_DOCUMENTS = [
  {
    label: "Kommunalt beslutningsgrundlag",
    status: "Under udarbejdelse",
    summaryHref: "/kommuner",
  },
  {
    label: "ISO 9001:2015 certifikat",
    status: "Ikke offentliggjort endnu",
  },
  {
    label: "Årlig kvalitetsrevisionsrapport",
    status: "Under udarbejdelse",
    summaryHref: "/kvalitet",
  },
  {
    label: "GDPR- og persondatapolitik",
    status: "Kommer snart",
    summaryHref: "/privatliv",
  },
  {
    label: "Klageprocedure",
    status: "Kommer snart",
    summaryHref: "/klager",
  },
  {
    label: "Arbejdsmiljøpolitik",
    status: "Under udarbejdelse",
  },
  {
    label: "Seneste årsregnskab",
    status: "Ikke offentliggjort endnu",
  },
] as const;

export const COMPANY_IDENTITY_LINE = `${COMPANY.legalName} · CVR ${COMPANY.cvr}`;

export const MUNICIPAL_CONTACT_SUBJECT = "Kommunal indkøb - PremiumCare ApS";
