import { PHOTOGRAPHY } from "@/lib/photography";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { damAbsoluteUrl } from "@/lib/dam/site-images";

export const COMPANY = {
  /** Legal entity — contracts, footer legal line, governance */
  legalName: "PremiumCare ApS",
  /** Public brand — headings, metadata, manifest, UI brand voice */
  brandName: "Premium Care",
  /**
   * CVR appears on the public legal line (Ed1.1):
   * “PremiumCare ApS · CVR 46542568”
   * Registered address is retained for internal/governance use only —
   * do not render postal locality in the global public footer.
   */
  cvr: "46542568",
  address: {
    postalCode: "8260",
    locality: "Viby J",
    country: "Danmark",
    countryCode: "DK",
  },
  email: "bibi@premiumcare.dk",
  phone: {
    display: "+45 42 26 44 21",
    href: "tel:+4542264421",
    schema: "+45-42-26-44-21",
  },
  openingHours: {
    display: "Man–fre 07:00–15:00",
    schema: ["Mo-Fr 07:00-15:00"],
  },
  /** Canonical production origin — used for metadata, OG, JSON-LD, sitemap, robots */
  url: "https://www.premiumcare.dk",
  foundedYear: 2026,
} as const;

/** Public locality line — retained for internal/governance pages only */
export function companyLocalityLine() {
  return `${COMPANY.address.postalCode} ${COMPANY.address.locality}`;
}

/** Ed1.1 public legal line for footers */
export function companyLegalLine(year = new Date().getFullYear()) {
  return `© ${year} ${COMPANY.legalName} · CVR ${COMPANY.cvr}`;
}

export function companyPostalAddress() {
  return {
    "@type": "PostalAddress" as const,
    postalCode: COMPANY.address.postalCode,
    addressLocality: COMPANY.address.locality,
    addressCountry: COMPANY.address.countryCode,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.legalName,
    alternateName: COMPANY.brandName,
    url: COMPANY.url,
    email: COMPANY.email,
    telephone: COMPANY.phone.schema,
    logo: damAbsoluteUrl(ASSET_IDS.brandHorizontalNavy, COMPANY.url),
    image: damAbsoluteUrl(ASSET_IDS.brandMaster, COMPANY.url),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone.schema,
      email: COMPANY.email,
      contactType: "customer service",
      areaServed: "DK",
      availableLanguage: ["Danish"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "15:00",
      },
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY.url}/#organization`,
    name: COMPANY.legalName,
    alternateName: COMPANY.brandName,
    image: damAbsoluteUrl(PHOTOGRAPHY.hero.assetId, COMPANY.url),
    url: COMPANY.url,
    telephone: COMPANY.phone.schema,
    email: COMPANY.email,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "15:00",
    },
  };
}
