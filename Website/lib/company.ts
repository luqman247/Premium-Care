export const COMPANY = {
  legalName: "Premium Care ApS",
  brandName: "Premium Care",
  cvr: "46542568",
  address: {
    street: "Rosenhøj Alle 34, 1. th.",
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
    display: "Man–Fre: 07.00–15.00",
    schema: ["Mo-Fr 07:00-15:00"],
  },
  url: "https://premiumcare.dk",
  foundedYear: 2026,
} as const;

export function companyPostalAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: COMPANY.address.street,
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
    taxID: `CVR ${COMPANY.cvr}`,
    address: companyPostalAddress(),
    logo: `${COMPANY.url}/assets/brand/horizontal-navy.png`,
    image: `${COMPANY.url}/assets/brand/master-transparent.png`,
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
    image: `${COMPANY.url}/images/hero-stillness.jpg`,
    url: COMPANY.url,
    telephone: COMPANY.phone.schema,
    email: COMPANY.email,
    address: companyPostalAddress(),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "15:00",
    },
    priceRange: "$$",
  };
}
