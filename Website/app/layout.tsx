import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { TrustBar } from "@/components/TrustBar";
import { PageTransition } from "@/components/PageTransition";
import { Wordmark } from "@/components/Wordmark";
import { MenuTrigger, NavigationProvider } from "@/components/Navigation";
import { CookieConsent } from "@/components/CookieConsent";
import { SiteChrome } from "@/components/SiteChrome";
import { localBusinessJsonLd, organizationJsonLd } from "@/lib/company";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { damLayoutIcons } from "@/lib/dam/site-images";
import { defaultSiteMetadata } from "@/lib/seo";

/** Ed1.1 editorial serif — display and brand-led reading */
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

/** Ed1.1 UI sans — navigation, labels, forms, controls */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...defaultSiteMetadata(),
  icons: damLayoutIcons({
    favicon16: ASSET_IDS.brandFavicon16,
    favicon32: ASSET_IDS.brandFavicon32,
    favicon48: ASSET_IDS.brandFavicon48,
    apple: ASSET_IDS.brandAppIcon180,
  }),
};

export const viewport: Viewport = {
  themeColor: "#16222F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${ebGaramond.variable} ${inter.variable}`}>
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
