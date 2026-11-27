import type { Metadata } from "next";
import Link from "next/link";
import { TAROT_DISCLAIMER } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consultation Disclaimer — The Ultimate Path",
  description:
    "Plain-language scope and limitations of tarot consultations at The Ultimate Path by Archana Mahajan.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <section className="editorial-band">
      <div className="container page-intro prose-column">
        <p className="eyebrow">Disclaimer</p>
        <h1>Scope of tarot consultations</h1>
        <p>{TAROT_DISCLAIMER}</p>
        <p>
          If you are facing a medical emergency, mental-health crisis, legal
          dispute, or financial hardship, please seek qualified professional
          assistance in those fields.
        </p>
        <p>
          <Link href="/consultations" className="inline-link">
            Read consultation guide <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
