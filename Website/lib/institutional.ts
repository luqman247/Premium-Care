import { COMPANY } from "@/lib/company";

/**
 * Municipal document catalogue — only entries that reduce doubt.
 * Do not list certificates or reports that are not actually available.
 * Empty PDFs are never offered as downloads.
 */
export const MUNICIPAL_DOCUMENTS = [
  {
    label: "Privatlivs- og persondatapolitik",
    status: "Offentlig oversigt",
    summaryHref: "/privatliv",
  },
  {
    label: "Klageprocedure",
    status: "Offentlig oversigt",
    summaryHref: "/klager",
  },
  {
    label: "Kvalitetsforpligtelse",
    status: "Offentlig oversigt",
    summaryHref: "/kvalitet",
  },
  {
    label: "Whistleblower-ordning",
    status: "Offentlig oversigt",
    summaryHref: "/whistleblowing",
  },
  {
    label: "Ledelse og kvalitetsansvar",
    status: "Offentlig oversigt",
    summaryHref: "/ledelsesansvar",
  },
  {
    label: "Kommunalt beslutningsgrundlag",
    status: "Udarbejdes til den enkelte kommune efter forespørgsel",
  },
  {
    label: "Årsregnskab og øvrige bilag",
    status: "Kan rekvireres af kommunal indkøb",
  },
] as const;

export const COMPANY_IDENTITY_LINE = `${COMPANY.legalName} · CVR ${COMPANY.cvr}`;

export const MUNICIPAL_CONTACT_SUBJECT = "Kommunal indkøb - PremiumCare ApS";
