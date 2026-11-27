import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Notice — The Ultimate Path",
  description:
    "Privacy notice for The Ultimate Path by Archana Mahajan covering website enquiries and click-to-load YouTube media.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="editorial-band">
      <div className="container page-intro prose-column">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy notice</h1>
        <p>
          {SITE_CONFIG.fullBrandTitle} operates this website as an informational
          portfolio and consultation guide. We do not embed advertising pixels,
          analytics trackers, or hidden third-party scripts on initial page
          load.
        </p>
        <p>
          <strong>Consultation enquiries:</strong> When you submit the
          consultation enquiry form, call Archana Mahajan, or message her via
          an official social platform, your name, contact information, and note
          are used solely to respond to your enquiry. We never sell, rent, or
          share enquiry details with third-party advertisers.
        </p>
        <p>
          <strong>Embedded YouTube media:</strong> Video players on the Home and
          Media pages use YouTube&apos;s privacy-enhanced domain (
          <code>youtube-nocookie.com</code>) and load only after you click to
          play. Once activated, YouTube&apos;s own privacy policy applies.
        </p>
        <p>
          <Link href="/connect" className="inline-link">
            Return to Connect <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
