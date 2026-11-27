import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PUBLIC_ROUTES = [
  "/",
  "/about-archana",
  "/consultations",
  "/media",
  "/connect",
  "/privacy",
  "/disclaimer",
];

test.describe("User journeys and responsive layout", () => {
  test("discovery journey navigates across Home, About Archana, Consultations, Media, and Connect", async ({
    page,
    isMobile,
  }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    if (isMobile) {
      const trigger = page.getByRole("button", { name: /open navigation menu/i });
      await trigger.click();
      const dialog = page.getByRole("dialog", { name: /navigation menu/i });
      await dialog.getByRole("link", { name: "About Archana" }).click();
    } else {
      await page
        .getByRole("navigation", { name: /main navigation/i })
        .getByRole("link", { name: "About Archana" })
        .click();
    }

    await expect(page).toHaveURL(/\/about-archana$/, { timeout: 15_000 });
    await expect(
      page.locator(".page-transition[data-route='/about-archana']"),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 1, name: /archana mahajan/i }),
    ).toBeVisible();

    await page.getByRole("link", { name: /explore consultations/i }).click();
    await expect(page).toHaveURL(/\/consultations$/, { timeout: 15_000 });

    const faqTrigger = page
      .getByRole("region", { name: /consultation frequently asked questions/i })
      .getByRole("button")
      .first();
    await faqTrigger.click();
    await expect(faqTrigger).toHaveAttribute("aria-expanded", "true");

    await page.getByRole("link", { name: /go to connect/i }).click();
    await expect(page).toHaveURL(/\/connect$/);
    await expect(
      page.getByRole("main").getByRole("link", { name: /\+91 90769 77905/i }).first(),
    ).toHaveAttribute("href", "tel:+919076977905");
  });

  test("mobile menu closes with Escape and returns focus to trigger", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "Mobile menu trigger is hidden on desktop viewports");
    await page.goto("/");
    const trigger = page.getByRole("button", { name: /open navigation menu/i });
    await trigger.click();
    await expect(
      page.getByRole("dialog", { name: /navigation menu/i }),
    ).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("dialog", { name: /navigation menu/i }),
    ).toHaveCount(0);
    await expect(trigger).toBeFocused();
  });

  test("media page defers YouTube iframes until clicked and stays usable when blocked", async ({
    page,
  }) => {
    await page.route("**/youtube-nocookie.com/**", (route) => route.abort());
    await page.goto("/media");

    await expect(page.locator("iframe")).toHaveCount(0);
    const watchLink = page.getByRole("link", { name: /watch on youtube/i });
    await expect(watchLink).toHaveAttribute("href", "https://youtu.be/2B01dacOGwM");

    await page
      .getByRole("button", { name: /play featured video/i })
      .first()
      .click();
    await expect(page.locator("iframe")).toHaveCount(1);
    await expect(watchLink).toBeVisible();
  });

  test("no horizontal overflow across mobile, tablet, and desktop viewports", async ({
    page,
  }) => {
    test.setTimeout(90_000);
    for (const width of [320, 360, 390, 768, 1024, 1280, 1440]) {
      await page.setViewportSize({ width, height: 800 });
      for (const route of PUBLIC_ROUTES) {
        await page.goto(route);
        const overflow = await page.evaluate(
          () =>
            document.documentElement.scrollWidth >
            document.documentElement.clientWidth,
        );
        expect(overflow, `Overflow detected at ${width}px on ${route}`).toBe(
          false,
        );
      }
    }
  });

  test("consultation enquiry form submits cleanly on Connect page", async ({
    page,
  }) => {
    await page.goto("/connect");
    await page.getByLabel(/your name/i).fill("Meera Singh");
    await page.getByLabel(/phone number or email/i).fill("+91 98111 22334");
    await page
      .getByLabel(/brief question or note/i)
      .fill("Enquiring about a personal tarot reading.");
    await page.getByRole("checkbox", { name: /reflective guidance/i }).check();
    await page
      .getByRole("button", { name: /send consultation enquiry/i })
      .click();

    await expect(page.getByRole("status")).toContainText(/TUP-\d{4}-\d+/);
  });
});

test.describe("Accessibility audit @a11y", () => {
  for (const route of PUBLIC_ROUTES) {
    test(`@a11y ${route} has no critical or serious axe violations`, async ({
      page,
    }) => {
      test.setTimeout(60_000);
      await page.goto(route);
      await page.waitForTimeout(750);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const blocking = results.violations.filter(
        (v) => v.impact === "critical" || v.impact === "serious",
      );
      expect(
        blocking,
        `Axe violations on ${route}: ${JSON.stringify(blocking, null, 2)}`,
      ).toEqual([]);
    });
  }
});
