import Image from "next/image";
import Link from "next/link";
import { TarotIllustration } from "@/components/graphics/tarot-illustration";
import { SectionHeading } from "@/components/shared/section-heading";
import { ARCHANA_LIFESTYLE_PORTRAIT } from "@/lib/assets";
import { HOME_CONTENT } from "@/lib/content";

export function MeetArchanaSection() {
  const { meetArchana } = HOME_CONTENT;

  return (
    <section className="editorial-band editorial-band--ivory">
      <div className="container split-band">
        <figure className="portrait-frame portrait-frame--compact">
          <Image
            src={ARCHANA_LIFESTYLE_PORTRAIT.src}
            alt={ARCHANA_LIFESTYLE_PORTRAIT.alt}
            width={ARCHANA_LIFESTYLE_PORTRAIT.width}
            height={ARCHANA_LIFESTYLE_PORTRAIT.height}
            loading="lazy"
            sizes="(max-width: 820px) 90vw, 380px"
          />
          <figcaption className="portrait-frame__caption">
            Archana Mahajan · Founder, The Ultimate Path
          </figcaption>
        </figure>

        <div className="prose-column">
          <SectionHeading
            eyebrow={meetArchana.eyebrow}
            heading={meetArchana.heading}
          />
          <p>{meetArchana.copy}</p>
          <p>
            <Link href={meetArchana.ctaHref} className="btn btn-secondary">
              {meetArchana.ctaLabel}
            </Link>
          </p>
          <TarotIllustration
            variant="botanical"
            className="section-illustration"
          />
        </div>
      </div>
    </section>
  );
}
