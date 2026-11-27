import type { Metadata } from "next";
import Image from "next/image";
import { ArcanaEmblem } from "@/components/graphics/arcana-emblem";
import { CelestialOrbit } from "@/components/graphics/celestial-orbit";
import { Disclaimer } from "@/components/shared/disclaimer";
import { ConsultationEnquiryForm } from "@/components/shared/enquiry-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { POSTER_REFERENCE } from "@/lib/assets";
import { CONNECT_CONTENT } from "@/lib/content";
import {
  PHONE_CONTACTS,
  SITE_CONFIG,
  SOCIAL_PROFILES,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Connect — The Ultimate Path by Archana Mahajan",
  description:
    "Contact Archana Mahajan for personal tarot consultation enquiries by phone or official YouTube, Instagram, and Facebook channels.",
  alternates: { canonical: "/connect" },
  openGraph: {
    title: "Connect — The Ultimate Path by Archana Mahajan",
    description:
      "Direct phone numbers and verified social profiles for consultation enquiries with Archana Mahajan.",
    url: "/connect",
    images: ["/images/brand/og-the-ultimate-path.webp"],
  },
};

export default function ConnectPage() {
  return (
    <>
      <section className="editorial-band editorial-band--relative">
        <CelestialOrbit tone="paper" className="connect-orbit-bg" />
        <div className="container connect-hero-grid">
          <div className="page-intro">
            <p className="eyebrow">{CONNECT_CONTENT.eyebrow}</p>
            <h1>{CONNECT_CONTENT.headline}</h1>
            <p className="hero-editorial__lead">{CONNECT_CONTENT.lead}</p>
          </div>

          <figure className="brand-poster-card">
            <Image
              src={POSTER_REFERENCE.src}
              alt={POSTER_REFERENCE.alt}
              width={POSTER_REFERENCE.width}
              height={POSTER_REFERENCE.height}
              priority
              sizes="(max-width: 820px) 88vw, 340px"
            />
            <figcaption className="brand-poster-card__caption">
              The Ultimate Path · Brand Signboard
            </figcaption>
          </figure>
        </div>

        <div className="container card-grid card-grid--two connect-cards-row">
          <article className="surface-card">
            <div className="surface-card__top">
              <span className="surface-card__index">Phone enquiries</span>
              <ArcanaEmblem variant="sun" />
            </div>
            <h2>{CONNECT_CONTENT.callHeading}</h2>
            <p>{CONNECT_CONTENT.callNote}</p>
            <div className="hero-editorial__actions">
              {PHONE_CONTACTS.map((phone, idx) => (
                <a
                  key={phone.id}
                  href={phone.href}
                  className={`btn ${idx === 0 ? "btn-primary" : "btn-secondary"}`}
                >
                  Call {phone.display}
                </a>
              ))}
            </div>
          </article>

          <article className="surface-card">
            <div className="surface-card__top">
              <span className="surface-card__index">Location</span>
              <ArcanaEmblem variant="leaf" />
            </div>
            <h2>{CONNECT_CONTENT.locationHeading}</h2>
            <p>{SITE_CONFIG.locationSummary}</p>
            <p className="surface-card__meta">
              Consultations are arranged by prior enquiry. Exact address or
              online session options are shared directly when you connect.
            </p>
          </article>
        </div>
      </section>

      <section id="enquiry-form" className="editorial-band editorial-band--ivory">
        <div className="container">
          <ConsultationEnquiryForm idPrefix="connect-enquiry" />
        </div>
      </section>

      <section className="editorial-band">
        <div className="container">
          <SectionHeading
            eyebrow="Verified profiles"
            heading={CONNECT_CONTENT.socialHeading}
            lead={CONNECT_CONTENT.socialNote}
          />

          <div className="card-grid card-grid--two">
            {SOCIAL_PROFILES.map((profile) => (
              <article key={profile.id} className="surface-card">
                <span className="surface-card__index">{profile.platform}</span>
                <h3>{profile.label}</h3>
                <p>{profile.handle}</p>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  Open {profile.label} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-band editorial-band--ivory">
        <div className="container">
          <Disclaimer />
        </div>
      </section>
    </>
  );
}
