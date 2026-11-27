import Image from "next/image";
import Link from "next/link";
import { POSTER_REFERENCE } from "@/lib/assets";
import { PHONE_CONTACTS, SITE_CONFIG } from "@/lib/site-config";

export function FinalEnquirySection() {
  return (
    <section className="editorial-band editorial-band--warm">
      <div className="container enquiry-banner enquiry-banner--with-poster">
        <figure className="brand-poster-card">
          <Image
            src={POSTER_REFERENCE.src}
            alt={POSTER_REFERENCE.alt}
            width={POSTER_REFERENCE.width}
            height={POSTER_REFERENCE.height}
            loading="lazy"
            sizes="(max-width: 720px) 88vw, 320px"
          />
          <figcaption className="brand-poster-card__caption">
            The Ultimate Path · Archana Mahajan
          </figcaption>
        </figure>

        <div className="enquiry-banner__body">
          <p className="eyebrow">08 · Start a Conversation</p>
          <h2>Ready to enquire about a personal reading?</h2>
          <p className="enquiry-banner__lead">
            Reach Archana Mahajan directly by phone or connect through her
            official Instagram or Facebook profiles. {SITE_CONFIG.locationSummary}.
          </p>
          <div className="enquiry-banner__actions">
            {PHONE_CONTACTS.map((phone) => (
              <a
                key={phone.id}
                href={phone.href}
                className="btn btn-primary"
              >
                Call {phone.display}
              </a>
            ))}
            <Link href="/connect#enquiry-form" className="btn btn-secondary">
              Consultation enquiry form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
