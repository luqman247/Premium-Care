import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Cinzel } from "next/font/google";
import "./globals.css";
import { TrustBar } from "@/components/TrustBar";
import { PageTransition } from "@/components/PageTransition";
import { Wordmark } from "@/components/Wordmark";
import { Navigation } from "@/components/Navigation";

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

export const metadata: Metadata = {
  title: {
    default: "Premium Care",
    template: "%s · Premium Care",
  },
  description: "Omsorg · Tryghed · Hver Dag",
  metadataBase: new URL("https://premiumcare.dk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Premium Care",
    locale: "da_DK",
    title: "Premium Care",
    description: "Omsorg · Tryghed · Hver Dag",
    url: "https://premiumcare.dk",
    images: [
      {
        url: "/images/hero-stillness.jpg",
        width: 2200,
        height: 2200,
        alt: "En caregiver og en ældre kvinde sidder sammen i et dansk hjem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Care",
    description: "Omsorg · Tryghed · Hver Dag",
    images: ["/images/hero-stillness.jpg"],
  },
  icons: {
    icon: [
      { url: "/assets/brand/favicon-32.png", sizes: "32x32" },
      { url: "/assets/brand/favicon-16.png", sizes: "16x16" },
    ],
    apple: "/assets/brand/app-icon-180.png",
  },
  manifest: "/site.webmanifest",
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
        <PageTransition />
        <Wordmark />
        <Navigation />
        <main>{children}</main>
        <TrustBar />
      </body>
    </html>
  );
}
