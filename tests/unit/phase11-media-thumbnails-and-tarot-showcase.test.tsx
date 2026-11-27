import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Phase 11: Media thumbnails USP & Tarot cards showcase", () => {
  it("registers the Soulful Moms podcast WebP thumbnail in ASSET_MANIFEST and renders it inside LazyVideo", async () => {
    const { ASSET_MANIFEST, PODCAST_THUMBNAIL } = await import("@/lib/assets");
    expect(PODCAST_THUMBNAIL.src).toBe(
      "/images/media/soulful-moms-podcast-thumb.webp",
    );
    expect(
      ASSET_MANIFEST.some((a) => a.id === PODCAST_THUMBNAIL.id),
    ).toBe(true);

    const { LazyVideo } = await import("@/components/media/lazy-video");
    const { FEATURED_PODCAST } = await import("@/lib/media");

    const { container } = render(
      <LazyVideo
        videoId={FEATURED_PODCAST.videoId}
        title={FEATURED_PODCAST.title}
        publisher={FEATURED_PODCAST.publisher}
        watchUrl={FEATURED_PODCAST.watchUrl}
      />,
    );

    expect(container.querySelector("iframe")).toBeNull();
    const thumb = screen.getByRole("img", {
      name: /soulful moms of india/i,
    });
    expect(thumb.getAttribute("src")).toContain(
      "soulful-moms-podcast-thumb.webp",
    );
  });

  it("renders thumbnails across podcast, YouTube, Instagram, and Ultimate Path Facebook page posts on Media page without personal profile", async () => {
    const { MediaHubContent } = await import(
      "@/components/media/media-hub-content"
    );

    const { container } = render(
      <MediaHubContent
        youtubeVideos={[
          {
            videoId: "cATa2rVxRG4",
            title: "Birthday Vibes November 10th",
            publishedLabel: "10 Nov 2026",
            watchUrl: "https://www.youtube.com/watch?v=cATa2rVxRG4",
            thumbnailUrl: "https://i.ytimg.com/vi_webp/cATa2rVxRG4/hqdefault.webp",
          },
        ]}
        instagramItems={[]}
        facebookPosts={[]}
      />,
    );

    expect(container.querySelectorAll("iframe")).toHaveLength(0);

    // Shows curated The Ultimate Path Facebook Page posts with title & thumbnail, and excludes Personal Profile on /media
    expect(screen.queryByText(/^Personal Profile$/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Tarot Guidance for Quiet Clarity/i,
      }),
    ).toBeInTheDocument();

    const imgs = screen.getAllByRole("img");
    const srcs = imgs.map((img) => decodeURIComponent(img.getAttribute("src") ?? ""));

    expect(
      srcs.some((s) => s.includes("soulful-moms-podcast-thumb.webp")),
    ).toBe(true);
    expect(
      srcs.some((s) => s.includes("i.ytimg.com/vi_webp/cATa2rVxRG4/hqdefault.webp")),
    ).toBe(true);
    expect(
      srcs.some((s) => s.includes("archana-reading-cards.webp")),
    ).toBe(true);
    expect(
      srcs.some((s) => s.includes("archana-consultation-desk.webp")),
    ).toBe(true);
    expect(
      srcs.some((s) => s.includes("tarot-cards-crystals.webp")),
    ).toBe(true);
  });

  it("showcases tarot cards interactively and explains what tarot is and how it impacts us", async () => {
    const user = userEvent.setup();
    const { TarotShowcaseSection } = await import(
      "@/components/tarot/tarot-showcase"
    );

    const { container } = render(<TarotShowcaseSection />);

    expect(
      screen.getByRole("heading", { name: /what tarot cards are/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/78-card deck/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Major Arcana/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Minor Arcana/i).length).toBeGreaterThanOrEqual(1);

    const cardImgs = container.querySelectorAll("img");
    const cardSrcs = Array.from(cardImgs).map((img) =>
      decodeURIComponent(img.getAttribute("src") ?? ""),
    );
    expect(cardSrcs.some((s) => s.includes("card-the-star.webp"))).toBe(true);
    expect(cardSrcs.some((s) => s.includes("card-high-priestess.webp"))).toBe(
      true,
    );
    expect(cardSrcs.some((s) => s.includes("card-two-of-pentacles.webp"))).toBe(
      true,
    );
    expect(cardSrcs.some((s) => s.includes("card-six-of-swords.webp"))).toBe(
      true,
    );

    expect(
      screen.getByRole("heading", { name: /how tarot impacts us/i }),
    ).toBeInTheDocument();

    const highPriestessBtn = screen.getByRole("button", {
      name: /high priestess/i,
    });
    expect(highPriestessBtn).toHaveAttribute("aria-pressed", "false");
    await user.click(highPriestessBtn);
    expect(highPriestessBtn).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByText(/quiet discernment before speaking or acting/i),
    ).toBeInTheDocument();
  });

  it("includes the tarot cards showcase on Home and Consultations pages", async () => {
    const [{ default: HomePage }, { default: ConsultationsPage }] =
      await Promise.all([
        import("@/app/page"),
        import("@/app/consultations/page"),
      ]);

    const homeRender = render(<HomePage />);
    expect(
      homeRender.getByRole("heading", { name: /what tarot cards are/i }),
    ).toBeInTheDocument();
    homeRender.unmount();

    render(<ConsultationsPage />);
    expect(
      screen.getByRole("heading", { name: /what tarot cards are/i }),
    ).toBeInTheDocument();
  });
});
