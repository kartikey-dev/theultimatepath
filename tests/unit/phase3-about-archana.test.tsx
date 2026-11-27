import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Phase 3: About Archana page", () => {
  it("renders a grounded personal profile with single H1, WebP portrait, approach, public voice, values, and disclaimer", async () => {
    const { default: AboutArchanaPage } = await import(
      "@/app/about-archana/page"
    );
    const { container } = render(<AboutArchanaPage />);

    const h1s = screen.getAllByRole("heading", { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent(/archana mahajan/i);

    const portrait = screen.getAllByRole("img", { name: /archana mahajan/i })[0];
    expect(portrait.getAttribute("src")).toContain("archana-mahajan.webp");

    // Approach & ethical framing
    expect(screen.getByText(/reflective approach/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /listening first, with clear boundaries/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/decisions remain your own/i).length,
    ).toBeGreaterThanOrEqual(1);

    // Public voice & featured collaboration
    expect(
      screen.getByRole("link", { name: /watch.*soulful moms of india/i }),
    ).toHaveAttribute("href", "https://youtu.be/2B01dacOGwM");

    // Nature and community section with #values anchor
    const valuesHeading = screen.getByRole("heading", {
      name: /nature and community/i,
    });
    expect(valuesHeading.closest("section")).toHaveAttribute("id", "values");

    // Must not invent experience counts, certifications, NGO names, or guaranteed outcomes
    expect(container.textContent).not.toMatch(
      /years of experience|certified by|100% accurate|guaranteed future|guaranteed healing|guaranteed result/i,
    );

    // Navigation to consultations & connect + disclaimer
    expect(
      screen.getByRole("link", { name: /explore consultations/i }),
    ).toHaveAttribute("href", "/consultations");
    expect(
      screen.getByRole("link", { name: /connect with archana/i }),
    ).toHaveAttribute("href", "/connect");
    expect(
      screen.getByRole("complementary", {
        name: /consultation scope and reflection notice/i,
      }),
    ).toBeInTheDocument();
  });
});
