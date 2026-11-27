import { TarotIllustration } from "@/components/graphics/tarot-illustration";
import { SectionHeading } from "@/components/shared/section-heading";
import { HOME_CONTENT } from "@/lib/content";

export function IntroductionSection() {
  const { intro } = HOME_CONTENT;

  return (
    <section className="editorial-band editorial-band--ivory">
      <div className="container split-band">
        <div>
          <SectionHeading eyebrow={intro.eyebrow} heading={intro.heading} />
          <TarotIllustration variant="spread" className="section-illustration" />
        </div>
        <div className="prose-column">
          {intro.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
