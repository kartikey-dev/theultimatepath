import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { HOME_CONTENT } from "@/lib/content";

export function FaqPreviewSection() {
  const { faq } = HOME_CONTENT;

  return (
    <section className="editorial-band">
      <div className="container split-band">
        <div>
          <SectionHeading eyebrow={faq.eyebrow} heading={faq.heading} />
          <p>
            <Link href={faq.ctaHref} className="inline-link">
              {faq.ctaLabel} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>

        <div className="faq-list">
          {faq.items.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
