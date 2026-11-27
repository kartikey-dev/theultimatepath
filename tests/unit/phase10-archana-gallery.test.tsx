import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Phase 10: Archana consultation & Aparigraha Foundation NGO WebP photos", () => {
  it("registers all 9 new WebP photos in ASSET_MANIFEST", async () => {
    const { ASSET_MANIFEST } = await import("@/lib/assets");
    const srcs = ASSET_MANIFEST.map((a) => a.src);
    expect(srcs).toContain("/images/archana/archana-consultation-desk.webp");
    expect(srcs).toContain("/images/archana/archana-reading-cards.webp");
    expect(srcs).toContain("/images/archana/archana-lifestyle-portrait.webp");
    expect(srcs).toContain("/images/archana/archana-in-session.webp");
    expect(srcs).toContain("/images/community/aparigraha-foundation-outreach.webp");
    expect(srcs).toContain("/images/community/aparigraha-community-distribution.webp");
    expect(srcs).toContain("/images/community/aparigraha-group-moment.webp");
    expect(srcs).toContain("/images/community/aparigraha-volunteers.webp");
    expect(srcs).toContain("/images/community/aparigraha-care-sharing.webp");
  });

  it("displays Archana's lifestyle portrait in Home MeetArchana section and Aparigraha Foundation photo in CommunityPreview", async () => {
    const { MeetArchanaSection } = await import(
      "@/components/home/meet-archana"
    );
    const { CommunityPreviewSection } = await import(
      "@/components/home/community-preview"
    );

    const { unmount } = render(<MeetArchanaSection />);
    expect(
      screen.getByRole("img", { name: /archana mahajan/i }).getAttribute("src"),
    ).toContain("archana-lifestyle-portrait.webp");
    unmount();

    render(<CommunityPreviewSection />);
    expect(screen.getAllByText(/Aparigraha Foundation/i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("img", { name: /Aparigraha Foundation/i }).getAttribute("src"),
    ).toContain("aparigraha-foundation-outreach.webp");
  });

  it("displays Archana's photo gallery and Aparigraha Foundation NGO outreach on About Archana page", async () => {
    const { default: AboutArchanaPage } = await import(
      "@/app/about-archana/page"
    );
    render(<AboutArchanaPage />);

    expect(
      screen.getAllByText(/Aparigraha Foundation/i).length,
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText(/Less for me, More for we/i).length,
    ).toBeGreaterThanOrEqual(1);

    const imgs = screen.getAllByRole("img");
    const srcs = imgs.map((img) => img.getAttribute("src") ?? "");
    for (const expected of [
      "archana-lifestyle-portrait.webp",
      "archana-reading-cards.webp",
      "archana-consultation-desk.webp",
      "archana-in-session.webp",
      "aparigraha-foundation-outreach.webp",
      "aparigraha-community-distribution.webp",
      "aparigraha-group-moment.webp",
      "aparigraha-volunteers.webp",
      "aparigraha-care-sharing.webp",
    ]) {
      expect(srcs.some((s) => s.includes(expected))).toBe(true);
    }
  });

  it("displays Archana's reading and session photos on Consultations page", async () => {
    const { default: ConsultationsPage } = await import(
      "@/app/consultations/page"
    );
    render(<ConsultationsPage />);
    const imgs = screen.getAllByRole("img");
    const srcs = imgs.map((img) => img.getAttribute("src") ?? "");
    expect(srcs.some((s) => s.includes("archana-reading-cards.webp"))).toBe(
      true,
    );
    expect(srcs.some((s) => s.includes("archana-in-session.webp"))).toBe(true);
  });
});
