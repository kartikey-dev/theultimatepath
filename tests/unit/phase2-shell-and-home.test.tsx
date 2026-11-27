import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Phase 2: SiteHeader and MobileNavigation", () => {
  it("renders brand link to Home, primary nav routes, and enquiry CTA without dead # links", async () => {
    const { SiteHeader } = await import("@/components/layout/site-header");
    render(<SiteHeader />);

    const header = screen.getByRole("banner");
    const homeBrandLink = within(header).getByRole("link", {
      name: /the ultimate path/i,
    });
    expect(homeBrandLink).toHaveAttribute("href", "/");

    const desktopNav = within(header).getByRole("navigation", {
      name: /main navigation/i,
    });
    const expectedRoutes = [
      { name: "Home", href: "/" },
      { name: "About Archana", href: "/about-archana" },
      { name: "Consultations", href: "/consultations" },
      { name: "Media", href: "/media" },
    ];
    for (const item of expectedRoutes) {
      const link = within(desktopNav).getByRole("link", { name: item.name });
      expect(link).toHaveAttribute("href", item.href);
    }

    // Header must keep only ONE link to /connect (the Enquire CTA), not duplicate Connect + Enquire
    const connectLinksInHeader = within(header)
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href") === "/connect");
    expect(connectLinksInHeader).toHaveLength(1);
    expect(connectLinksInHeader[0]).toHaveTextContent(/enquire/i);

    const allLinks = within(header).getAllByRole("link");
    for (const link of allLinks) {
      expect(link.getAttribute("href")).not.toBe("#");
    }
  });

  it("opens mobile menu, closes on Escape, and returns focus to trigger", async () => {
    const user = userEvent.setup();
    const { MobileNavigation } = await import(
      "@/components/layout/mobile-navigation"
    );
    const { NAV_ITEMS } = await import("@/lib/site-config");

    render(<MobileNavigation items={NAV_ITEMS} />);

    const trigger = screen.getByRole("button", {
      name: /open navigation menu/i,
    });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    const dialog = screen.getByRole("dialog", { name: /navigation menu/i });
    expect(within(dialog).getByRole("link", { name: "Consultations" })).toHaveAttribute(
      "href",
      "/consultations",
    );

    await user.keyboard("{Escape}");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("dialog", { name: /navigation menu/i })).toBeNull();
    expect(trigger).toHaveFocus();
  });
});

describe("Phase 2: SiteFooter contact, social, and disclaimer rules", () => {
  it("renders verified tel: links, zero unconfirmed WhatsApp links, distinct Facebook labels, and disclaimer", async () => {
    const { SiteFooter } = await import("@/components/layout/site-footer");
    render(<SiteFooter />);

    const footer = screen.getByRole("contentinfo");

    const phone1 = within(footer).getByRole("link", {
      name: /\+91 90769 77905/i,
    });
    const phone2 = within(footer).getByRole("link", {
      name: /\+91 80526 23615/i,
    });
    expect(phone1).toHaveAttribute("href", "tel:+919076977905");
    expect(phone2).toHaveAttribute("href", "tel:+918052623615");

    // No WhatsApp CTA until owner confirms which number supports WhatsApp
    const allLinks = within(footer).getAllByRole("link");
    for (const link of allLinks) {
      expect(link.getAttribute("href")).not.toMatch(/wa\.me|whatsapp/i);
    }

    // All 4 official social destinations distinctly labelled
    expect(
      within(footer).getByRole("link", { name: /youtube/i }),
    ).toHaveAttribute("href", "https://www.youtube.com/@ArchanaMahajan-rg5hq");
    expect(
      within(footer).getByRole("link", { name: /instagram/i }),
    ).toHaveAttribute("href", "https://www.instagram.com/the_ultimate_path/");
    expect(
      within(footer).getByRole("link", { name: /personal profile/i }),
    ).toHaveAttribute("href", "https://www.facebook.com/archana.mahajan.98/");
    expect(
      within(footer).getByRole("link", { name: /business page/i }),
    ).toHaveAttribute(
      "href",
      "https://www.facebook.com/people/The-Ultimate-Path/61552959415479/",
    );

    expect(
      within(footer).getByRole("link", { name: /privacy/i }),
    ).toHaveAttribute("href", "/privacy");
    expect(
      within(footer).getByRole("link", { name: /disclaimer/i }),
    ).toHaveAttribute("href", "/disclaimer");

    expect(
      within(footer).getByText(/not a substitute for qualified medical/i),
    ).toBeInTheDocument();
  });
});

describe("Phase 2: LazyVideo click-to-load behaviour", () => {
  it("does not mount iframe until clicked, keeps outbound YouTube link, and avoids autoplay", async () => {
    const user = userEvent.setup();
    const { LazyVideo } = await import("@/components/media/lazy-video");

    const { container } = render(
      <LazyVideo
        videoId="2B01dacOGwM"
        title="Soulful Moms of India podcast episode"
        publisher="Soulful Moms of India"
        watchUrl="https://youtu.be/2B01dacOGwM"
      />,
    );

    expect(container.querySelector("iframe")).toBeNull();
    const watchLink = screen.getByRole("link", { name: /watch on youtube/i });
    expect(watchLink).toHaveAttribute("href", "https://youtu.be/2B01dacOGwM");

    const playBtn = screen.getByRole("button", { name: /play/i });
    await user.click(playBtn);

    const iframe = container.querySelector("iframe");
    expect(iframe).not.toBeNull();
    expect(iframe?.getAttribute("src")).toContain("youtube-nocookie.com/embed/2B01dacOGwM");
    expect(iframe?.getAttribute("src")).not.toContain("autoplay=1");
  });
});

describe("Phase 2: Homepage content and structure", () => {
  it("renders H1, portrait, featured podcast, social links without auto-iframes, FAQ, and enquiry CTA", async () => {
    const { default: HomePage } = await import("@/app/page");
    const { container } = render(<HomePage />);

    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(/clarity for the path ahead/i);

    const portrait = screen.getAllByRole("img", { name: /archana mahajan/i })[0];
    expect(portrait.getAttribute("src")).toContain("archana-mahajan.webp");

    const poster = screen.getByRole("img", {
      name: /printed signboard/i,
    });
    expect(poster.getAttribute("src")).toContain(
      "the-ultimate-path-poster-reference.webp",
    );

    // Zero third-party iframes on initial page render
    expect(container.querySelectorAll("iframe")).toHaveLength(0);

    // Featured collaboration present with Soulful Moms of India link
    expect(screen.getAllByText(/Soulful Moms of India/i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("link", { name: /watch on youtube/i }),
    ).toHaveAttribute("href", "https://youtu.be/2B01dacOGwM");

    // Confirmed consultation guidance without fabricated prices or unconfirmed numerology booking
    expect(container.textContent).not.toMatch(/₹|\$\d+|per session|book numerology/i);

    // Nature and community teaser stays high-level with no invented NGO name
    expect(
      screen.getByRole("heading", { name: /beyond the cards/i }),
    ).toBeInTheDocument();

    // FAQ preview items present
    expect(
      screen.getByText(/who offers tarot readings at the ultimate path/i),
    ).toBeInTheDocument();
  });
});
