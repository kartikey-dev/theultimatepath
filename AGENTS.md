<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — The Ultimate Path

These instructions apply to all agents working in this repository. Read this file before editing.

## Mission

Build a polished, scalable, high-performance business portfolio for **The Ultimate Path by Archana Mahajan**. The website must express Archana's personality and professional work accurately, provide clear consultation enquiry paths, and bring her YouTube, Instagram, and Facebook presence into one well-organised digital home.

## First action: inspect, don't assume

- Inspect the complete local repository, current route tree, package scripts, lockfile, design tokens, components, assets, and current Vercel deployment before making changes.
- Compare the local checkout with the documented baseline in `README.md`; the local repository is the source of truth if it has changed.
- Run the existing project and production build before refactoring. Record current failures separately from regressions.
- Preserve working features and useful content/data IDs (including the existing YouTube uploads playlist and Instagram post IDs) unless there is a verified reason to change them.
- Do not replace Next.js, React, or the App Router. Avoid large new dependencies unless their benefit is clear and tested.

## Persistent product and content rules

- Brand: **The Ultimate Path**. Person: **Archana Mahajan**. Use both together where context needs disambiguation.
- Use `docs/CONTENT_BRIEF.md` as the content source of truth. Treat facts marked “confirm” as unpublished until Archana approves them.
- The client brief says Archana is a nature lover and works with an NGO. Do not invent the NGO name, title, location, cause, dates, outcomes, or impact figures. Ask for source material or leave a clearly identified content placeholder.
- The supplied podcast description identifies Archana as a tarot reader and numerology expert. Confirm whether numerology is a current paid consultation service before making it a bookable service.
- Do not imply that tarot can guarantee future events, results, cures, relationship outcomes, financial gains, or health outcomes.
- Use language such as “reflective guidance,” “personal insight,” and “one-to-one consultation.” Do not present this as licensed mental-health counselling, psychotherapy, medical treatment, or legal/financial advice unless the client supplies verifiable qualifications and explicitly requests that positioning.
- Never invent client testimonials, star ratings, client counts, years of experience, training, certifications, awards, session prices, hours, availability, payment methods, or exact street address.
- Keep a plain-language disclaimer that tarot is for reflection/personal insight and is not a substitute for qualified medical, mental-health, legal, or financial support.
- Use supplied contact information carefully. Confirm which number is the preferred call contact and whether each number is WhatsApp-enabled before showing a WhatsApp CTA.
- Do not scrape, hotlink, or mirror social content without rights/permission. Prefer approved curated content cards linking to the original social posts. Embeds must be deferred until user interaction or viewport entry, and must not block first paint.

## Design direction

- Create a premium, warm, nature-aware editorial identity. Suggested palette: parchment/ivory, ink/charcoal, forest green, muted rose/terracotta, and restrained antique-brass accents.
- Use elegant serif display typography with a highly readable sans-serif body face; load fonts efficiently with `next/font` where feasible.
- Let Archana's real portrait and authentic photographs lead. Use subtle botanical details, tactile paper/card references, calm motion, and considered whitespace.
- Avoid generic neon-purple cosmic gradients, excessive stars, stock mystic imagery, decorative overload, and cliché fortune-telling visuals.
- Design mobile-first. Ensure navigation, CTA placement, type scale, cards, and embedded media work at narrow widths and with touch input.
- Respect `prefers-reduced-motion`; animations must never carry essential information.

## Image and media policy — strict

- All raster photographs, graphics, thumbnails, and social preview assets used by the site must be `.webp`.
- Convert every incoming `.jpg`, `.jpeg`, and `.png` to WebP before adding it to active site assets. Update every import, public path, metadata, Open Graph image, Twitter image, JSON-LD image, and CSS reference in the same change.
- Do not leave orphaned JPEG/PNG files in the active site asset library. If old sources must be retained for audit, keep them outside `public/` and do not deploy them.
- Purpose-built SVG icons/marks may be used for vector artwork; do not use SVG as a loophole for embedding raster photos.
- Use `next/image` with explicit dimensions or aspect ratio and meaningful `sizes`. Prioritise only the true hero/LCP image. Lazy-load below-the-fold images.
- Do not use the low-resolution poster as the main hero portrait or modern wordmark. It is retained as a WebP reference asset only.
- Do not autoplay videos. Use click-to-load embeds or a lightweight preview that loads the iframe only when requested.
- No layout shift: reserve image/video dimensions before assets load.

## Engineering rules

- Preserve the existing Next.js App Router, TypeScript strict mode, and established code conventions.
- Default to React Server Components. Add `"use client"` only for genuinely interactive UI.
- Keep route-level metadata in the appropriate route files; use reusable typed data modules for social links, services, FAQs, and media items.
- Separate content from presentation. Prefer small, composable components and explicit types over monolithic page components.
- Avoid fetching third-party feeds at request time unless caching, fallback behaviour, failure states, and privacy implications are documented. Do not make the page depend on Instagram/Facebook availability.
- No tracking pixels, social SDKs, or third-party scripts in the critical rendering path without an approved privacy and performance reason.
- Use semantic HTML, keyboard-operable controls, visible focus states, descriptive link text, and useful alt text. Decorative visuals use empty alt or `aria-hidden`.
- Do not add secrets to source control. Use environment variables only where a real integration requires them; document required names and safe defaults.
- Keep `poweredByHeader: false` and security-conscious defaults; do not add unsafe inline script patterns. Serialize JSON-LD safely.

## TDD is mandatory

For every feature or defect:

1. Write or update a failing test that captures the required behaviour (RED).
2. Implement the smallest change that makes the test pass (GREEN).
3. Refactor while keeping tests green (REFACTOR).
4. Run targeted tests, full tests, type checking, linting, production build, and relevant browser/accessibility checks.
5. Report exactly what ran and what did not run. Never claim a check passed if it was skipped.

Do not write a large implementation first and add tests afterwards. Add tests for meaningful regressions in existing functionality.

## Performance budgets

Target good Core Web Vitals at the 75th percentile:

- LCP ≤ 2.5 seconds.
- INP ≤ 200 milliseconds.
- CLS ≤ 0.1.

Also target Lighthouse mobile performance ≥ 90 on the representative pages, where feasible; treat this as a lab guardrail, not a substitute for field data. Do not “fix” a score by hiding content or degrading functionality.

- No heavy animation framework without a demonstrated need.
- Avoid unnecessary client state, hydration, duplicate font files, and large icon libraries.
- Use responsive WebP sizes, `next/image`, reserved aspect ratios, lazy loading, and appropriate caching.
- Lazy-load YouTube/Meta/Instagram iframes. Keep the initial page independent of third-party availability.
- Set measurable budgets for JavaScript, image bytes, font bytes, and third-party requests during Phase 0; document the observed baseline before setting final thresholds.

## SEO/GEO sequencing

- Do **not** start technical SEO/GEO work before the core information architecture, real content, imagery, and user journeys are stable.
- SEO/GEO is the final implementation phase, not a substitute for meaningful content or user experience.
- When reached, implement accurate metadata, canonical URLs, sitemap/robots, image/video metadata, and only truthful structured data supported by visible page content.
- Keep business identity, public address, phone numbers, and social profiles consistent. Do not fabricate opening hours, street address, ratings, or review markup.
- Treat GEO as entity clarity, factual completeness, direct answers, consistent profiles, and crawlable content. Never promise AI citations or rankings.

## Delivery discipline

- Work in the phases in `docs/IMPLEMENTATION_PLAN.md`. Do not silently skip a phase.
- Before broad edits, present a concise audit and proposed implementation sequence.
- Keep changes scoped to the current phase. Do not mix the final SEO/GEO phase into early visual work.
- After each phase, report changed files, tests run, known issues, and client approvals still needed.
- Do not deploy to production or change domain/DNS settings without explicit approval.
