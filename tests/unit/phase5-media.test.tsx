import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Phase 5: Media & Social hub with separate YouTube, Instagram, and Facebook sections", () => {
  it("renders separate YouTube, Instagram, and Facebook sections with zero initial iframes and click-to-load embeds", async () => {
    const user = userEvent.setup();
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
          },
        ]}
        instagramItems={[]}
        facebookPosts={[]}
      />,
    );

    const h1s = screen.getAllByRole("heading", { level: 1 });
    expect(h1s).toHaveLength(1);

    // Zero third-party iframes on initial paint
    expect(container.querySelectorAll("iframe")).toHaveLength(0);

    // Separate sections for YouTube, Instagram, and Facebook
    expect(
      screen.getByRole("heading", { name: /latest from youtube/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /latest from instagram/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /updates from facebook/i }),
    ).toBeInTheDocument();

    // Latest YouTube RSS item rendered
    expect(
      screen.getByText(/Birthday Vibes November 10th/i),
    ).toBeInTheDocument();

    // Click-to-load YouTube playlist
    const playlistBtn = screen.getByRole("button", {
      name: /load youtube uploads playlist/i,
    });
    await user.click(playlistBtn);
    expect(container.querySelectorAll("iframe")).toHaveLength(1);

    // Click-to-load Facebook timeline embed
    const fbBtn = screen.getByRole("button", {
      name: /load facebook page timeline/i,
    });
    await user.click(fbBtn);
    const iframes = container.querySelectorAll("iframe");
    expect(iframes).toHaveLength(2);
    expect(iframes[1].getAttribute("src")).toContain("facebook.com/plugins/page.php");
  });
});
