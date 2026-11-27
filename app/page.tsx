import { ParallaxTarotBand } from "@/components/graphics/parallax-tarot-band";
import { TarotDivider } from "@/components/graphics/tarot-divider";
import { CommunityPreviewSection } from "@/components/home/community-preview";
import { ConsultationPreview } from "@/components/home/consultation-preview";
import { FaqPreviewSection } from "@/components/home/faq-preview";
import { FeaturedPodcastSection } from "@/components/home/featured-podcast";
import { FinalEnquirySection } from "@/components/home/final-enquiry";
import { HeroSection } from "@/components/home/hero";
import { IntroductionSection } from "@/components/home/introduction";
import { MeetArchanaSection } from "@/components/home/meet-archana";
import { SocialHighlightsSection } from "@/components/home/social-highlights";
import { TarotShowcaseSection } from "@/components/tarot/tarot-showcase";
import { TAROT_READING } from "@/lib/assets";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <TarotShowcaseSection />
      <TarotDivider />
      <ConsultationPreview />
      <ParallaxTarotBand
        eyebrow="Reflective Spread · Tarot & Intuition"
        heading="Quiet guidance, rooted in attentive listening."
        copy="Every reading creates space to pause, look at your question with calm honesty, and move forward at your own pace."
        image={TAROT_READING}
        ctaLabel="Explore how sessions work"
        ctaHref="/consultations"
      />
      <MeetArchanaSection />
      <FeaturedPodcastSection />
      <SocialHighlightsSection />
      <TarotDivider />
      <CommunityPreviewSection />
      <FaqPreviewSection />
      <FinalEnquirySection />
    </>
  );
}
