import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { APARIGRAHA_OUTREACH } from "@/lib/assets";
import { ABOUT_CONTENT, HOME_CONTENT } from "@/lib/content";

export function CommunityPreviewSection() {
  const { community } = HOME_CONTENT;

  return (
    <section className="editorial-band editorial-band--ivory">
      <div className="container split-band">
        <div className="prose-column">
          <SectionHeading
            eyebrow={community.eyebrow}
            heading={community.heading}
          />
          <p>{community.copy}</p>
          <p className="ngo-motto">
            <strong>{ABOUT_CONTENT.values.ngoName}</strong> · &ldquo;
            {ABOUT_CONTENT.values.ngoMotto}&rdquo;
          </p>
          <p>
            <Link href={community.ctaHref} className="inline-link">
              {community.ctaLabel} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>

        <figure className="portrait-frame portrait-frame--compact">
          <Image
            src={APARIGRAHA_OUTREACH.src}
            alt={APARIGRAHA_OUTREACH.alt}
            width={APARIGRAHA_OUTREACH.width}
            height={APARIGRAHA_OUTREACH.height}
            loading="lazy"
            sizes="(max-width: 820px) 90vw, 380px"
          />
          <figcaption className="portrait-frame__caption">
            Community outreach with Aparigraha Foundation
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
