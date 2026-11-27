import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Phase 4: Consultations page", () => {
  it("renders confirmed tarot consultation offerings, session steps, ethical boundaries, interactive FAQ, enquiry CTAs, and disclaimer", async () => {
    const user = userEvent.setup();
    const { default: ConsultationsPage } = await import(
      "@/app/consultations/page"
    );
    const { container } = render(<ConsultationsPage />);

    const h1s = screen.getAllByRole("heading", { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent(/personal tarot consultations/i);

    // Session steps present
    expect(
      screen.getByRole("heading", { name: /how an enquiry and session work/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/share what brings you here/i)).toBeInTheDocument();

    // Ethical boundaries & no unconfirmed pricing, duration, or numerology service claims
    expect(
      screen.getByRole("heading", { name: /what tarot can and cannot offer/i }),
    ).toBeInTheDocument();
    expect(container.textContent).not.toMatch(
      /₹|\$\d+|per session|book numerology|100% accurate|guaranteed outcome/i,
    );

    // Interactive FAQ accordion toggles aria-expanded
    const faqRegion = screen.getByRole("region", {
      name: /consultation frequently asked questions/i,
    });
    const firstFaqBtn = within(faqRegion).getAllByRole("button")[0];
    expect(firstFaqBtn).toHaveAttribute("aria-expanded", "false");
    await user.click(firstFaqBtn);
    expect(firstFaqBtn).toHaveAttribute("aria-expanded", "true");

    // Prominent tel: enquiry links and disclaimer
    expect(
      screen.getAllByRole("link", { name: /\+91 90769 77905/i }).length,
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("complementary", {
        name: /consultation scope and reflection notice/i,
      }),
    ).toBeInTheDocument();
  });
});

describe("Phase 4: Connect, Privacy, and Disclaimer pages", () => {
  it("renders Connect page with verified tel: links, zero unconfirmed WhatsApp CTAs, location, and distinct social profiles", async () => {
    const { default: ConnectPage } = await import("@/app/connect/page");
    const { container } = render(<ConnectPage />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(
      screen.getAllByRole("link", { name: /\+91 90769 77905/i })[0],
    ).toHaveAttribute("href", "tel:+919076977905");
    expect(
      screen.getAllByRole("link", { name: /\+91 80526 23615/i })[0],
    ).toHaveAttribute("href", "tel:+918052623615");

    const links = screen.getAllByRole("link");
    for (const link of links) {
      expect(link.getAttribute("href")).not.toMatch(/wa\.me|whatsapp/i);
    }

    expect(
      screen.getByText(/Gorakhnath Road, Gorakhpur, Uttar Pradesh/i),
    ).toBeInTheDocument();
    const poster = screen.getByRole("img", { name: /printed signboard/i });
    expect(poster.getAttribute("src")).toContain(
      "the-ultimate-path-poster-reference.webp",
    );
    expect(
      screen.getByRole("link", { name: /personal profile/i }),
    ).toHaveAttribute("href", "https://www.facebook.com/archana.mahajan.98/");
    expect(
      screen.getByRole("link", { name: /business page/i }),
    ).toHaveAttribute(
      "href",
      "https://www.facebook.com/people/The-Ultimate-Path/61552959415479/",
    );
    expect(container.querySelector("form")).not.toBeNull();
  });

  it("renders Privacy and Disclaimer pages cleanly", async () => {
    const { default: PrivacyPage } = await import("@/app/privacy/page");
    render(<PrivacyPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /privacy/i,
    );
    expect(screen.getAllByText(/youtube/i).length).toBeGreaterThanOrEqual(1);

    const { default: DisclaimerPage } = await import("@/app/disclaimer/page");
    render(<DisclaimerPage />);
    expect(
      screen.getByRole("heading", { name: /scope of tarot consultations/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/not a substitute for qualified medical/i),
    ).toBeInTheDocument();
  });
});

describe("Phase 4: Celestial & tarot graphics", () => {
  it("renders decorative celestial orbit and arcana emblem hidden from assistive technology", async () => {
    const { CelestialOrbit } = await import(
      "@/components/graphics/celestial-orbit"
    );
    const { ArcanaEmblem } = await import(
      "@/components/graphics/arcana-emblem"
    );
    const { container } = render(
      <>
        <CelestialOrbit />
        <ArcanaEmblem variant="star" />
      </>,
    );
    const decorative = container.querySelectorAll('[aria-hidden="true"]');
    expect(decorative.length).toBeGreaterThanOrEqual(2);
  });
});
