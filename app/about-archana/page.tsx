import type { Metadata } from "next";
import Link from "next/link";
import { ArchanaStory } from "@/components/about/archana-story";
import { ValuesGallery } from "@/components/about/values-gallery";
import { Disclaimer } from "@/components/shared/disclaimer";

export const metadata: Metadata = {
  title: "About Archana Mahajan — The Ultimate Path",
  description:
    "Learn about Archana Mahajan, her reflective approach to tarot consultations at The Ultimate Path, her public media voice, and her appreciation for nature and community.",
  alternates: { canonical: "/about-archana" },
  openGraph: {
    title: "About Archana Mahajan — The Ultimate Path",
    description:
      "Meet Archana Mahajan, tarot reader behind The Ultimate Path in Gorakhpur.",
    url: "/about-archana",
    images: ["/images/brand/og-the-ultimate-path.webp"],
  },
};

export default function AboutArchanaPage() {
  return (
    <>
      <ArchanaStory />
      <ValuesGallery />

      <section className="editorial-band editorial-band--warm">
        <div className="container enquiry-banner">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Explore a consultation or reach out directly.</h2>
            <p className="enquiry-banner__lead">
              Read how a one-to-one tarot session works, or contact Archana
              Mahajan to start an enquiry.
            </p>
          </div>
          <div className="enquiry-banner__actions">
            <Link href="/consultations" className="btn btn-secondary">
              Explore consultations
            </Link>
            <Link href="/connect" className="btn btn-primary">
              Connect with Archana
            </Link>
          </div>
        </div>
      </section>

      <section className="editorial-band">
        <div className="container">
          <Disclaimer />
        </div>
      </section>
    </>
  );
}
