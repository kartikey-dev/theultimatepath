import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageTransition } from "@/components/motion/page-transition";
import { OG_IMAGE } from "@/lib/assets";
import { buildSiteStructuredData, serializeJsonLd } from "@/lib/schema";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theultimatepath.vercel.app"),
  title: "The Ultimate Path — Tarot Readings by Archana Mahajan",
  description:
    "Personal tarot readings with Archana Mahajan at The Ultimate Path in Gorakhpur. Call +91 90769 77905 or +91 80526 23615 for consultation enquiries.",
  applicationName: "The Ultimate Path",
  category: "Tarot readings",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Ultimate Path — Tarot Readings by Archana Mahajan",
    description:
      "Personal tarot readings with Archana Mahajan at The Ultimate Path on Gorakhnath Road, Gorakhpur.",
    type: "website",
    url: "/",
    siteName: "The Ultimate Path",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE.src,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ultimate Path — Tarot Readings by Archana Mahajan",
    description:
      "Personal tarot readings with Archana Mahajan at The Ultimate Path on Gorakhnath Road, Gorakhpur.",
    images: [OG_IMAGE.src],
  },
};

export const viewport: Viewport = {
  themeColor: "#344A3A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const structuredDataJson = serializeJsonLd(buildSiteStructuredData());

  return (
    <html
      lang="en-IN"
      className={`${displayFont.variable} ${sansFont.variable}`}
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
