import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { MotionObserver } from "@/components/motion-observer";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Ultimate Path — Tarot Readings in Gorakhpur",
  description:
    "Tarot readings with Archana Mahajan in Gorakhpur. A welcoming space to pause, reflect, and find your own way forward.",
  openGraph: {
    title: "The Ultimate Path — Tarot Readings in Gorakhpur",
    description: "A moment of clarity for the path ahead.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4eee5",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <MotionObserver />
        {children}
      </body>
    </html>
  );
}
