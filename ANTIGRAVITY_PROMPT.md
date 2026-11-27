# Antigravity implementation prompt — The Ultimate Path

You are the lead product engineer, design systems engineer, performance engineer, and QA owner for this project. Rebuild and scale the existing **The Ultimate Path by Archana Mahajan** Next.js website into a premium, conversion-focused business portfolio.

## Start with a repository audit — no edits yet

1. Read `AGENTS.md` and `.agents/skills/the-ultimate-path-implementation/SKILL.md`.
2. Inspect the complete local repository and current branch. Run `git status`, inspect `package.json`, lockfile, route tree, components, CSS, public assets, metadata, structured data, and Vercel deployment configuration.
3. Run the current site locally and run the current production build. Record baseline errors, Lighthouse results, bundle/asset size, and existing interactions.
4. Compare existing behaviour with `docs/IMPLEMENTATION_PLAN.md`. Preserve useful existing work, especially the YouTube uploads playlist, Instagram post identifiers, FAQs, and working contact links. Verify these IDs still resolve.
5. Check all `.jpg`, `.jpeg`, and `.png` assets and references. Two supplied assets have already been converted to WebP in this package. Move/copy them into the local repo's `public/` and update all references. Search code, CSS, metadata, social previews, and JSON-LD for old extensions and paths.
6. Return an audit summary, a phase-by-phase plan, a proposed file tree, missing client inputs, and test strategy. **Do not begin implementation until this audit is complete.**

## Product goal

This is not a generic tarot template. Build an elegant personal business portfolio that helps a prospective client:

- Understand who Archana Mahajan is as a person and professional.
- Understand the nature and boundaries of her tarot consultation work.
- Explore her video, podcast, Instagram, and Facebook presence in one place.
- Learn about her connection to nature and her involvement with an NGO, using only client-confirmed details.
- Contact her easily for a one-to-one consultation.

The primary CTA is consultation enquiry by phone/WhatsApp/social link. Do not invent a payment or booking platform. Use an enquiry-first flow until the client confirms prices, session types, formats, schedules, booking tools, and payment requirements.

## Technical constraints

- Retain the existing Next.js App Router, React, and TypeScript stack.
- The public repository baseline is Next.js 16.2, React 19.2, TypeScript 5.9; verify the local checkout before changing packages.
- All raster site assets must be WebP. No JPG/JPEG/PNG in active site usage, including metadata/OG cards, social thumbnails, structured data, and CSS backgrounds. Use SVG only for true vector icons or brand marks.
- High-quality visuals are required, but performance is a first-class requirement.
- TDD is mandatory. Tests must be written before implementation for each feature.
- Technical SEO and GEO come last, only after UX, pages, content, and imagery have stabilised.

## Required routes / experience

Implement the route map in `docs/IMPLEMENTATION_PLAN.md`:

- `/` — premium homepage with strong profile-led hero, concise value proposition, consultation CTA, short introduction, consultation preview, featured podcast, social highlights, nature/NGO values teaser, and clear contact footer.
- `/about-archana` — dedicated biography and story page; human, grounded, detailed, with a profile image, work philosophy, podcast/media appearances, nature connection, and NGO involvement.
- `/consultations` — clear service/consultation information, what to expect, formats/topics only after confirmation, ethical boundaries, FAQs, and prominent enquiry CTA.
- `/media` — featured podcast plus YouTube videos and selected Instagram/Facebook posts, with outbound links and lightweight embeds.
- `/connect` — contact methods, approved business location information, social channels, and a concise enquiry path.
- Add privacy/disclaimer content where the final implementation collects or processes user information.

Use reusable layouts, navigation, footer, CTA, content cards, media cards, and shared data modules. Keep the page components cohesive and maintainable.

## Design direction

Use the warm, tactile, editorial design direction in `docs/IMPLEMENTATION_PLAN.md`: refined parchment/ivory, deep ink, forest green, muted rose/terracotta, and subtle brass; expressive serif headings paired with a clear sans-serif; authentic portrait/lifestyle photography; restrained tarot-card and botanical motifs; thoughtful whitespace; responsive layouts; gentle motion only. Avoid loud neon mysticism and generic stock imagery. The current pink-sari profile photo is the lead personal image. The supplied poster is a reference asset, not the primary brand mark.

## Featured content requirement

Prominently feature the client-designated collaboration/podcast:

- URL: `https://youtu.be/2B01dacOGwM`
- Known video title: **“Tarot Reading का सच: क्या किस्मत बदली जा सकती है? 🔮”**
- Publisher/channel: Soulful Moms of India
- Public video description identifies Archana as a tarot reader and numerology expert and discusses tarot, numerology, astrology, consultation ethics, and personal guidance.

Use this as a featured media story on Home and Media. Provide a useful text summary and a clear watch-on-YouTube link. Do not autoplay. Load the iframe only after the visitor clicks or explicitly activates the video preview. Do not label it “newest” unless the channel is rechecked and confirms no later collaboration has appeared; “Featured collaboration” is safe.

## Social presence

Include the official destinations supplied in the brief:

- YouTube: `https://www.youtube.com/@ArchanaMahajan-rg5hq`
- Instagram: `https://www.instagram.com/the_ultimate_path/`
- Facebook profile: `https://www.facebook.com/archana.mahajan.98/`
- Facebook page: `https://www.facebook.com/people/The-Ultimate-Path/61552959415479/`

Reuse the current code's YouTube uploads playlist and existing Instagram post IDs only after verifying they work. Avoid live feed dependencies. Prefer curated WebP thumbnails linking to original posts. If native embeds are retained, defer their script and iframe loading. Social cards must have accessible titles, meaningful external-link labels, and responsive aspect ratios.

## Contact details

The supplied poster and current demo show:

- `+91 90769 77905`
- `+91 80526 23615`

The current demo also identifies Gorakhnath Road, Gorakhpur, Uttar Pradesh. Confirm with the owner whether both numbers accept calls, which accept WhatsApp, and what level of address detail should be public. Do not fabricate house/office numbers or office hours.

## Must follow the phased plan

Execute one phase at a time; pause for review after each phase. The detailed requirements and acceptance criteria are in `docs/IMPLEMENTATION_PLAN.md`.

- Phase 0: audit, baseline, content facts, dependency/security review, asset inventory.
- Phase 1: design system and WebP asset migration.
- Phase 2: site architecture, navigation, shared shell, and core homepage.
- Phase 3: About Archana and verified story content.
- Phase 4: Consultations and enquiry journey.
- Phase 5: Media/social integrations and featured podcast.
- Phase 6: accessibility, responsive QA, TDD completion, performance optimisation, CI checks.
- Phase 7 (last): technical SEO, local SEO, schema, and GEO/answer-engine readiness.

Do not start Phase 7 early.

## TDD execution rules

For each feature:

1. Define acceptance criteria.
2. Add failing unit/component/e2e tests first.
3. Implement the smallest passing change.
4. Refactor and keep tests green.
5. Run targeted tests, full tests, typecheck, lint, production build, accessibility scan, and relevant Playwright flows.
6. Report command output and explicitly call out anything not run.

Add and configure only the required testing dependencies after inspecting the project. Keep test setup compatible with the installed Next/React versions.

## Definition of done

Use the checklist in `README.md` and `docs/QUALITY_AND_TEST_PLAN.md`. The final report must include:

- Route list and key user journeys delivered.
- Screenshots at mobile and desktop breakpoints.
- Final WebP asset inventory and any removed/archived JPG/PNG files.
- Test, typecheck, lint, build, and accessibility results.
- Lighthouse and Core Web Vitals results or a clear statement that field data is not yet available.
- All client approvals still pending.
- SEO/GEO checklist status and any Search Console tasks the site owner must complete.

Do not deploy without explicit approval.
