import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

const rootDir = process.cwd();

function collectFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

describe("Phase 1: WebP-only raster policy", () => {
  it("keeps zero .jpg, .jpeg, or .png files in public/", () => {
    const publicFiles = collectFiles(path.join(rootDir, "public"));
    const legacyRaster = publicFiles.filter((file) =>
      /\.(jpe?g|png)$/i.test(file),
    );
    expect(legacyRaster).toEqual([]);
  });

  it("includes required WebP brand and portrait assets", () => {
    const required = [
      "public/images/archana/archana-mahajan.webp",
      "public/images/brand/the-ultimate-path-poster-reference.webp",
      "public/images/brand/og-the-ultimate-path.webp",
    ];
    for (const rel of required) {
      expect(fs.existsSync(path.join(rootDir, rel))).toBe(true);
    }
  });

  it("has zero .jpg, .jpeg, or .png references in app/, components/, and lib/", () => {
    const codeDirs = ["app", "components", "lib"];
    const legacyPattern = /\.(png|jpe?g)(\?|#|["')\]\s])/i;
    const violations: string[] = [];

    for (const dir of codeDirs) {
      for (const file of collectFiles(path.join(rootDir, dir))) {
        if (!/\.(tsx?|css|mjs|json)$/.test(file)) continue;
        const content = fs.readFileSync(file, "utf8");
        if (legacyPattern.test(content)) {
          violations.push(path.relative(rootDir, file));
        }
      }
    }

    expect(violations).toEqual([]);
  });
});

describe("Phase 1: Asset manifest and Next config", () => {
  it("exports an asset manifest with WebP-only raster entries and explicit dimensions", async () => {
    const { ASSET_MANIFEST } = await import("@/lib/assets");
    expect(ASSET_MANIFEST.length).toBeGreaterThanOrEqual(2);
    for (const asset of ASSET_MANIFEST) {
      expect(asset.src).toMatch(/^\/images\/.+\.webp$/);
      expect(asset.width).toBeGreaterThan(0);
      expect(asset.height).toBeGreaterThan(0);
      expect(asset.alt.length).toBeGreaterThan(0);
      expect(
        fs.existsSync(path.join(rootDir, "public", asset.src.slice(1))),
      ).toBe(true);
    }
    const poster = ASSET_MANIFEST.find((a) =>
      a.src.includes("poster-reference"),
    );
    expect(poster?.role).toBe("reference");
  });

  it("configures Next image formats to WebP and disables poweredByHeader", async () => {
    const { default: nextConfig } = await import("@/next.config");
    expect(nextConfig.poweredByHeader).toBe(false);
    expect(nextConfig.images?.formats).toEqual(["image/webp"]);
  });
});

describe("Phase 1: Design system tokens and BrandWordmark", () => {
  it("defines the editorial color tokens and reduced-motion rules in app/globals.css", () => {
    const css = fs.readFileSync(
      path.join(rootDir, "app/globals.css"),
      "utf8",
    );
    for (const token of [
      "--color-paper",
      "--color-ivory",
      "--color-ink",
      "--color-forest",
      "--color-rose",
      "--color-brass",
      "--color-muted",
      "--color-line",
    ]) {
      expect(css).toContain(token);
    }
    expect(css).toContain("prefers-reduced-motion");
    expect(css).not.toContain("hero-stars");
  });

  it("renders BrandWordmark with text and decorative SVG mark (no raster poster)", async () => {
    const { BrandWordmark } = await import(
      "@/components/brand/brand-wordmark"
    );
    const { container } = render(<BrandWordmark />);
    expect(screen.getByText("The Ultimate Path")).toBeInTheDocument();
    expect(screen.getByText(/by Archana Mahajan/i)).toBeInTheDocument();
    expect(container.querySelector("img")).toBeNull();
    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });
});
