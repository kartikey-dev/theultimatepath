import Link from "next/link";
import { BrandWordmark } from "@/components/brand/brand-wordmark";
import {
  NAV_ITEMS,
  PHONE_CONTACTS,
  SITE_CONFIG,
  SOCIAL_PROFILES,
  TAROT_DISCLAIMER,
} from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link href="/">
            <BrandWordmark compact />
          </Link>
          <p className="site-footer__summary">
            Personal tarot consultations with Archana Mahajan, creating calm
            space for reflection and clarity.
          </p>
          <p className="site-footer__location">{SITE_CONFIG.locationSummary}</p>
        </div>

        <div>
          <h2 className="site-footer__heading">Pages</h2>
          <ul className="site-footer__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Consultation Enquiries</h2>
          <ul className="site-footer__list">
            {PHONE_CONTACTS.map((phone) => (
              <li key={phone.id}>
                <a href={phone.href}>Call {phone.display}</a>
              </li>
            ))}
          </ul>
          <p className="site-footer__note">
            Please call or message via official social channels to discuss a
            reading.
          </p>
        </div>

        <div>
          <h2 className="site-footer__heading">Official Channels</h2>
          <ul className="site-footer__list">
            {SOCIAL_PROFILES.map((profile) => (
              <li key={profile.id}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container site-footer__disclaimer">
        <p>{TAROT_DISCLAIMER}</p>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.brandName} ·{" "}
          {SITE_CONFIG.practitionerName} ·{" "}
          <Link href="/privacy" className="inline-link">
            Privacy
          </Link>{" "}
          ·{" "}
          <Link href="/disclaimer" className="inline-link">
            Disclaimer
          </Link>
        </p>
        <p>
          Designed &amp; developed by{" "}
          <a
            href={SITE_CONFIG.developerCredit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            {SITE_CONFIG.developerCredit.label}
          </a>
        </p>
      </div>
    </footer>
  );
}
