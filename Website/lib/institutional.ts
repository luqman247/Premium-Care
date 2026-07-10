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

export const MUNICIPAL_DOCUMENTS = [
  {
    href: "/documents/Premium_Care_Kommunalt_Beslutningsgrundlag.pdf",
    label: "Kommunalt beslutningsgrundlag (PDF)",
  },
  { href: "/documents/ISO_9001_2015.pdf", label: "ISO 9001:2015 certifikat" },
  { href: "/documents/årlig_kvalitetsrevisionsrapport.pdf", label: "Årlig kvalitetsrevisionsrapport" },
  { href: "/documents/GDPR_Politik.pdf", label: "GDPR- og persondatapolitik" },
  { href: "/documents/Klageprocedure.pdf", label: "Klageprocedure" },
  { href: "/documents/Arbejdsmiljoe.pdf", label: "Arbejdsmiljøpolitik" },
  { href: "/documents/Aarsregnskab.pdf", label: "Seneste årsregnskab" },
] as const;

export const COMPANY_IDENTITY_LINE = `${COMPANY.legalName} · CVR ${COMPANY.cvr}`;

export const MUNICIPAL_CONTACT_SUBJECT = "Kommunal indkøb - PremiumCare ApS";
