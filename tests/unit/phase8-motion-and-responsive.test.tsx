import fs from "node:fs";
import path from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  usePathname: () => "/consultations",
}));

beforeEach(() => {
  vi.resetModules();
});

describe("Phase 8: Page transitions and active navigation", () => {
  it("wraps route content in PageTransition keyed to the current pathname", async () => {
    const { PageTransition } = await import(
      "@/components/motion/page-transition"
    );
    const { container } = render(
      <PageTransition>
        <h1>Consultations</h1>
      </PageTransition>,
    );

    expect(
      screen.getByRole("heading", { level: 1, name: "Consultations" }),
    ).toBeInTheDocument();
    const wrapper = container.querySelector(".page-transition");
    expect(wrapper).not.toBeNull();
    expect(wrapper).toHaveAttribute("data-route", "/consultations");
  });

  it("marks the active navigation link with aria-current='page'", async () => {
    const { DesktopNav } = await import("@/components/layout/desktop-nav");
    const { NAV_ITEMS } = await import("@/lib/site-config");

    render(<DesktopNav items={NAV_ITEMS} />);

    const activeLink = screen.getByRole("link", { name: "Consultations" });
    expect(activeLink).toHaveAttribute("aria-current", "page");

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).not.toHaveAttribute("aria-current", "page");
  });

  it("defines page transition keyframes, drawer animations, mobile video stage sizing, and reduced-motion guards in globals.css", () => {
    const css = fs.readFileSync(
      path.join(process.cwd(), "app/globals.css"),
      "utf8",
    );
    expect(css).toContain("@keyframes page-enter");
    expect(css).toContain("@keyframes drawer-slide-in");
    expect(css).toContain("data-reveal-pending");
    expect(css).toContain("min-height: 270px");
    expect(css).toContain("prefers-reduced-motion: reduce");
  });
});
