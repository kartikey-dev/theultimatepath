import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConsultationCard } from "@/components/consultations/consultation-card";
import { ConsultationFaq } from "@/components/consultations/consultation-faq";
import { SessionSteps } from "@/components/consultations/session-steps";
import { CelestialOrbit } from "@/components/graphics/celestial-orbit";
import { ParallaxTarotBand } from "@/components/graphics/parallax-tarot-band";
import { TarotDivider } from "@/components/graphics/tarot-divider";
import { Disclaimer } from "@/components/shared/disclaimer";
import { ConsultationEnquiryForm } from "@/components/shared/enquiry-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { TarotShowcaseSection } from "@/components/tarot/tarot-showcase";
import {
  ARCHANA_IN_SESSION,
  ARCHANA_READING_CARDS,
  TAROT_CRYSTALS,
} from "@/lib/assets";
import { CONSULTATIONS_CONTENT, HOME_CONTENT } from "@/lib/content";
import { PHONE_CONTACTS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consultations — The Ultimate Path by Archana Mahajan",
  description:
    "Learn how personal tarot consultations work with Archana Mahajan at The Ultimate Path, what to expect, ethical boundaries, and how to enquire.",
  alternates: { canonical: "/consultations" },
  openGraph: {
    title: "Consultations — The Ultimate Path by Archana Mahajan",
    description:
      "Personal tarot consultation process, ethical scope, FAQs, and enquiry guidance.",
    url: "/consultations",
    images: ["/images/brand/og-the-ultimate-path.webp"],
  },
};

const CARD_EMBLEMS = ["star", "moon", "sun"] as const;

export default function ConsultationsPage() {
  return (
    <>
      <section className="editorial-band">
        <div className="container hero-editorial__grid">
          <div>
            <p className="eyebrow">{CONSULTATIONS_CONTENT.eyebrow}</p>
            <h1>{CONSULTATIONS_CONTENT.headline}</h1>
            <p className="hero-editorial__lead">
              {CONSULTATIONS_CONTENT.lead}
            </p>
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
              <Link href="/connect" className="inline-link">
                All contact options <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="tarot-visual-showcase">
            <CelestialOrbit tone="paper" className="tarot-visual-showcase__orbit" />
            <figure className="portrait-frame tarot-visual-showcase__frame">
              <Image
                src={ARCHANA_READING_CARDS.src}
                alt={ARCHANA_READING_CARDS.alt}
                width={ARCHANA_READING_CARDS.width}
                height={ARCHANA_READING_CARDS.height}
                priority
                sizes="(max-width: 820px) 92vw, 440px"
              />
              <figcaption className="portrait-frame__caption">
                Archana Mahajan with tarot cards at her consultation desk
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <TarotShowcaseSection />

      <section className="editorial-band editorial-band--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="Themes"
            heading={CONSULTATIONS_CONTENT.offeringsHeading}
            lead={CONSULTATIONS_CONTENT.offeringsLead}
          />
          <div className="card-grid card-grid--three">
            {HOME_CONTENT.consultations.items.map((item, idx) => (
              <ConsultationCard
                key={item.number}
                number={item.number}
                title={item.title}
                summary={item.summary}
                suitableFor={item.suitableFor}
                emblem={CARD_EMBLEMS[idx % CARD_EMBLEMS.length]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-band">
        <div className="container">
          <div className="split-band session-intro-band">
            <SectionHeading
              eyebrow="Session flow"
              heading={CONSULTATIONS_CONTENT.stepsHeading}
            />
            <figure className="portrait-frame portrait-frame--compact">
              <Image
                src={ARCHANA_IN_SESSION.src}
                alt={ARCHANA_IN_SESSION.alt}
                width={ARCHANA_IN_SESSION.width}
                height={ARCHANA_IN_SESSION.height}
                loading="lazy"
                sizes="(max-width: 820px) 92vw, 420px"
              />
              <figcaption className="portrait-frame__caption">
                One-to-one tarot reading in progress
              </figcaption>
            </figure>
          </div>
          <SessionSteps steps={CONSULTATIONS_CONTENT.steps} />
        </div>
      </section>

      <section className="editorial-band editorial-band--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="Scope & Ethics"
            heading={CONSULTATIONS_CONTENT.boundariesHeading}
          />
          <div className="card-grid card-grid--two">
            <article className="surface-card">
              <span className="surface-card__index">What a reading offers</span>
              <h3>Reflective guidance</h3>
              <ul className="editorial-list">
                {CONSULTATIONS_CONTENT.canOffer.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
            <article className="surface-card">
              <span className="surface-card__index">Clear boundaries</span>
              <h3>What a reading does not replace</h3>
              <ul className="editorial-list">
                {CONSULTATIONS_CONTENT.cannotOffer.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="editorial-band">
        <div className="container split-band">
          <SectionHeading
            eyebrow="FAQ"
            heading="Questions visitors often ask before booking."
          />
          <ConsultationFaq items={CONSULTATIONS_CONTENT.faqs} />
        </div>
      </section>

      <ParallaxTarotBand
        eyebrow="Personal Reflection"
        heading="Bring the question on your mind—at your own pace."
        copy="Consultations are private, unhurried conversations with Archana Mahajan where your own judgment remains central."
        image={TAROT_CRYSTALS}
        ctaLabel="Enquire by phone or social"
        ctaHref="/connect"
      />

      <TarotDivider />

      <section id="enquiry" className="editorial-band editorial-band--ivory">
        <div className="container">
          <ConsultationEnquiryForm idPrefix="consultations-enquiry" />
        </div>
      </section>

      <section className="editorial-band editorial-band--warm">
        <div className="container enquiry-banner">
          <div>
            <p className="eyebrow">Enquire directly</p>
            <h2>Ready to discuss a personal tarot reading?</h2>
            <p className="enquiry-banner__lead">
              Call Archana Mahajan directly or view her official Instagram and
              Facebook profiles on the Connect page.
            </p>
          </div>
          <div className="enquiry-banner__actions">
            <a href={PHONE_CONTACTS[0].href} className="btn btn-primary">
              Call {PHONE_CONTACTS[0].display}
            </a>
            <Link href="/connect" className="btn btn-secondary">
              Go to Connect
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
