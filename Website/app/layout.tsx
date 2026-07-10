import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Cinzel } from "next/font/google";
import "./globals.css";
import { TrustBar } from "@/components/TrustBar";
import { PageTransition } from "@/components/PageTransition";
import { Wordmark } from "@/components/Wordmark";
import { MenuTrigger, NavigationProvider } from "@/components/Navigation";
import { CookieConsent } from "@/components/CookieConsent";
import { SiteChrome } from "@/components/SiteChrome";
import { COMPANY, localBusinessJsonLd, organizationJsonLd } from "@/lib/company";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import {
  damLayoutIcons,
  damMetadataImage,
  damTwitterImages,
} from "@/lib/dam/site-images";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const defaultOgImage = damMetadataImage(ASSET_IDS.brandOpenGraph);

export const metadata: Metadata = {
  title: {
    default: COMPANY.brandName,
    template: `%s · ${COMPANY.brandName}`,
  },
  description: "Hjemmepleje i Aarhus og Østjylland",
  metadataBase: new URL(COMPANY.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Premium Care",
    locale: "da_DK",
    title: "Premium Care",
    description: "Hjemmepleje i Aarhus og Østjylland",
    url: COMPANY.url,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Care",
    description: "Hjemmepleje i Aarhus og Østjylland",
    images: damTwitterImages(ASSET_IDS.brandOpenGraph),
  },
  icons: damLayoutIcons({
    favicon16: ASSET_IDS.brandFavicon16,
    favicon32: ASSET_IDS.brandFavicon32,
    apple: ASSET_IDS.brandAppIcon180,
  }),
};

export const viewport: Viewport = {
  themeColor: "#061D37",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${cormorant.variable} ${cinzel.variable}`}>
      <body>
        <NavigationProvider>
          <PageTransition />
          <SiteChrome>
            <Wordmark />
            <MenuTrigger variant="fixed" />
          </SiteChrome>
          <main>{children}</main>
          <SiteChrome>
            <TrustBar />
          </SiteChrome>
          <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        </NavigationProvider>
      </body>
    </html>
  );
}
