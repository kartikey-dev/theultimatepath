import { describe, expect, it } from "vitest";

describe("Phase 7: Truthful structured data (JSON-LD)", () => {
  it("exports WebSite, Person, ProfessionalService, and VideoObject without fabricated ratings, hours, or prices", async () => {
    const { buildSiteStructuredData } = await import("@/lib/schema");
    const graph = buildSiteStructuredData();

    expect(graph["@context"]).toBe("https://schema.org");
    const nodes = graph["@graph"];

    const business = nodes.find((n) => n["@type"] === "ProfessionalService");
    const person = nodes.find((n) => n["@type"] === "Person");
    const website = nodes.find((n) => n["@type"] === "WebSite");
    const video = nodes.find((n) => n["@type"] === "VideoObject");

    expect(business).toBeDefined();
    expect(person).toBeDefined();
    expect(website).toBeDefined();
    expect(video).toBeDefined();

    // Truthful attributes & WebP image only
    expect(String(business?.image)).toMatch(/\.webp$/);
    expect(business?.telephone).toEqual(["+91 90769 77905", "+91 80526 23615"]);
    expect(business?.openingHours).toBeUndefined();
    expect(business?.aggregateRating).toBeUndefined();
    expect(business?.priceRange).toBeUndefined();

    // Publisher of Soulful Moms of India podcast must be Soulful Moms of India
    expect((video?.publisher as { name?: string })?.name).toBe(
      "Soulful Moms of India",
    );
    expect(String(video?.thumbnailUrl)).toMatch(/\.webp$/);
  });
});

describe("Phase 7: Sitemap, robots, and route canonicals", () => {
  it("lists all 7 public routes in sitemap.ts", async () => {
    const { default: sitemap } = await import("@/app/sitemap");
    const entries = sitemap();
    const urls = entries.map((e) => e.url);

    for (const route of [
      "https://theultimatepath.vercel.app",
      "https://theultimatepath.vercel.app/about-archana",
      "https://theultimatepath.vercel.app/consultations",
      "https://theultimatepath.vercel.app/media",
      "https://theultimatepath.vercel.app/connect",
      "https://theultimatepath.vercel.app/privacy",
      "https://theultimatepath.vercel.app/disclaimer",
    ]) {
      expect(urls).toContain(route);
    }
  });

  it("allows indexing in robots.ts and references sitemap.xml", async () => {
    const { default: robots } = await import("@/app/robots");
    const config = robots();
    expect(config.sitemap).toBe("https://theultimatepath.vercel.app/sitemap.xml");
    expect(Array.isArray(config.rules)).toBe(true);
  });

  it("sets canonical alternates on every inner route", async () => {
    const routes = [
      { mod: await import("@/app/about-archana/page"), canonical: "/about-archana" },
      { mod: await import("@/app/consultations/page"), canonical: "/consultations" },
      { mod: await import("@/app/media/page"), canonical: "/media" },
      { mod: await import("@/app/connect/page"), canonical: "/connect" },
      { mod: await import("@/app/privacy/page"), canonical: "/privacy" },
      { mod: await import("@/app/disclaimer/page"), canonical: "/disclaimer" },
    ];
    for (const { mod, canonical } of routes) {
      expect(mod.metadata.alternates?.canonical).toBe(canonical);
    }
  });
});
