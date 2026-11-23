import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { MotionObserver } from "@/components/motion-observer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://theultimatepath.vercel.app"),
  title: "The Ultimate Path — Tarot Readings in Gorakhpur",
  description:
    "Book a tarot reading with Archana Mahajan at The Ultimate Path on Gorakhnath Road, Gorakhpur. Call +91 90769 77905 or +91 80526 23615.",
  applicationName: "The Ultimate Path",
  category: "Tarot readings",
  keywords: [
    "tarot reading Gorakhpur",
    "tarot reader Gorakhpur",
    "Archana Mahajan tarot",
    "tarot reading Gorakhnath Road",
    "The Ultimate Path Gorakhpur",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "The Ultimate Path — Tarot Readings in Gorakhpur",
    description:
      "Tarot readings with Archana Mahajan on Gorakhnath Road, Gorakhpur, Uttar Pradesh.",
    type: "website",
    url: "/",
    siteName: "The Ultimate Path",
    locale: "en_IN",
    images: [
      {
        url: "/the-ultimate-path-poster.jpg",
        width: 640,
        height: 640,
        alt: "The Ultimate Path tarot reading and healing centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ultimate Path — Tarot Readings in Gorakhpur",
    description:
      "Tarot readings with Archana Mahajan on Gorakhnath Road, Gorakhpur, Uttar Pradesh.",
    images: ["/the-ultimate-path-poster.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#171321",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN">
      <body suppressHydrationWarning>
        <MotionObserver />
        {children}
      </body>
    </html>
  );
}
