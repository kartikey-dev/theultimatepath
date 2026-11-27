import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

const SAMPLE_YOUTUBE_ATOM = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns:yt="http://www.youtube.com/xml/schemas/2015" xmlns:media="http://search.yahoo.com/mrss/" xmlns="http://www.w3.org/2005/Atom">
 <entry>
  <yt:videoId>cATa2rVxRG4</yt:videoId>
  <title>Birthday Vibes November 10th</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=cATa2rVxRG4"/>
  <published>2026-11-10T06:37:25+00:00</published>
 </entry>
 <entry>
  <yt:videoId>89gMZlxocAk</yt:videoId>
  <title>Angel &amp; Tarot Reflection</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=89gMZlxocAk"/>
  <published>2026-10-20T09:00:00+00:00</published>
 </entry>
</feed>`;

describe("Phase 9: Parallax tarot band, business graphics, and YouTube Atom parser", () => {
  it("parses YouTube Atom XML safely and decodes XML entities", async () => {
    const { parseYouTubeAtomFeed } = await import("@/lib/social-feeds");
    const items = parseYouTubeAtomFeed(SAMPLE_YOUTUBE_ATOM, 4);

    expect(items).toHaveLength(2);
    expect(items[0]).toMatchObject({
      videoId: "cATa2rVxRG4",
      title: "Birthday Vibes November 10th",
      watchUrl: "https://www.youtube.com/watch?v=cATa2rVxRG4",
    });
    expect(items[1].title).toBe("Angel & Tarot Reflection");
  });

  it("renders ParallaxTarotBand with WebP background image and accessible foreground content", async () => {
    const { ParallaxTarotBand } = await import(
      "@/components/graphics/parallax-tarot-band"
    );
    const { TAROT_READING } = await import("@/lib/assets");

    const { container } = render(
      <ParallaxTarotBand
        eyebrow="Tarot Reflection"
        heading="Pause before your next step."
        copy="Quiet reflection guided by the cards."
        image={TAROT_READING}
        ctaLabel="Explore consultations"
        ctaHref="/consultations"
      />,
    );

    expect(
      screen.getByRole("heading", { name: /pause before your next step/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /explore consultations/i }),
    ).toHaveAttribute("href", "/consultations");

    const bgImg = container.querySelector("img");
    expect(bgImg?.getAttribute("src")).toContain("tarot-cards-reading.webp");
    expect(bgImg).toHaveAttribute("alt", "");
  });

  it("renders TarotIllustration and TarotDivider hidden from screen readers", async () => {
    const { TarotIllustration } = await import(
      "@/components/graphics/tarot-illustration"
    );
    const { TarotDivider } = await import(
      "@/components/graphics/tarot-divider"
    );

    const { container } = render(
      <>
        <TarotIllustration variant="spread" />
        <TarotDivider />
      </>,
    );

    expect(
      container.querySelectorAll('[aria-hidden="true"]').length,
    ).toBeGreaterThanOrEqual(2);
    const spreadImgs = container.querySelectorAll("img");
    expect(spreadImgs.length).toBe(3);
    expect(spreadImgs[1].getAttribute("src")).toContain("card-the-star.webp");
  });
});
