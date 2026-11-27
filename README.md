# The Ultimate Path — Website Rebuild & Scale-Up

A premium, performance-led business website for **The Ultimate Path by Archana Mahajan**. This repository companion pack is designed to be copied into the existing Next.js project and used by Google Antigravity as the implementation brief and persistent project guidance.

> **Important:** This package contains the implementation plan, agent instructions, content/asset guidance, quality gates, SEO/GEO checklist, and WebP conversions of the two supplied images. It is not a replacement application and it does not overwrite the live GitHub repository. Open the existing repository in Antigravity, copy these files into its root, then use `ANTIGRAVITY_PROMPT.md` as the first task prompt.

## Existing project baseline reviewed

The public `main` branch currently shows:

- Next.js `^16.2.0`, React `^19.2.0`, and TypeScript `^5.9.0`.
- Next.js App Router (`app/`), with `components/` and `public/` directories.
- Strict TypeScript configuration.
- Existing scripts: `dev`, `build`, and `start` only. Test, lint, accessibility, and browser-test scripts should be added as part of the implementation after inspecting the local checkout.
- The current home page already includes a YouTube uploads playlist ID, several Instagram post IDs, FAQs, contact links, and LocalBusiness/ProfessionalService JSON-LD. Preserve useful, working identifiers, but audit accuracy and replace stale JPG references.

Do not migrate frameworks or replace the existing routing/rendering architecture without a measured technical reason.

## Start here

1. Open the existing `kartikey-dev/theultimatepath` repository in Antigravity.
2. Copy the contents of this package into the repository root, preserving the `.agents/` and `docs/` folders. Copy the contents of `public/` into the repository's existing `public/` folder.
3. Confirm the repository is on the expected branch and inspect `git status` before edits.
4. Read `AGENTS.md`, then read `.agents/skills/the-ultimate-path-implementation/SKILL.md`.
5. Paste the full contents of `ANTIGRAVITY_PROMPT.md` into the Antigravity agent.
6. Ask the agent to begin with the baseline audit and Phase 0 only. Continue phase-by-phase after reviewing its plan and test results.

## Documentation map

| File | Purpose |
|---|---|
| `AGENTS.md` | Persistent project rules for Antigravity and any coding agent. |
| `ANTIGRAVITY_PROMPT.md` | Main implementation prompt to paste into Antigravity. |
| `.agents/skills/the-ultimate-path-implementation/SKILL.md` | Reusable implementation skill for staged delivery and TDD. |
| `docs/IMPLEMENTATION_PLAN.md` | Product scope, routes, design direction, architecture, phased plan, and acceptance criteria. |
| `docs/CONTENT_BRIEF.md` | Grounded copy direction, known facts, and client approvals still needed. |
| `docs/ASSET_GUIDE.md` | WebP-only image policy, conversion workflow, social-media asset guidance, and asset manifest. |
| `docs/QUALITY_AND_TEST_PLAN.md` | TDD workflow, automated tests, accessibility, performance budgets, and release gates. |
| `docs/SEO_GEO_LAUNCH_CHECKLIST.md` | Final-phase technical SEO, local SEO, structured data, and answer-engine discoverability. |
| `docs/RESEARCH_NOTES.md` | Competitive website patterns and official technical references reviewed. |
| `public/images/archana/archana-mahajan.webp` | Supplied portrait converted to WebP for site use. |
| `public/images/brand/the-ultimate-path-poster-reference.webp` | Supplied business poster converted to WebP; reference/archive asset, not a recommended primary logo. |

## Target experience

The site should feel like a thoughtful, established personal brand—not a generic tarot landing page. Visitors should quickly understand who Archana is, what a consultation involves, how to contact her, and where to find her public content. Her nature-loving and NGO involvement should be part of her story, with details confirmed by Archana before publication.

Primary conversion path: **Discover Archana → understand the consultation → view her public work → enquire by phone/WhatsApp/social channel.**

## Known business links

- Demo: https://theultimatepath.vercel.app/
- Repository: https://github.com/kartikey-dev/theultimatepath
- YouTube: https://www.youtube.com/@ArchanaMahajan-rg5hq
- Instagram: https://www.instagram.com/the_ultimate_path/
- Facebook — personal: https://www.facebook.com/archana.mahajan.98/
- Facebook — business: https://www.facebook.com/people/The-Ultimate-Path/61552959415479/
- Featured podcast/collaboration: https://youtu.be/2B01dacOGwM
- Contact numbers shown in the supplied brand poster: +91 90769 77905 and +91 80526 23615. Confirm which number supports calls and WhatsApp before labelling CTA buttons.

## Definition of done

The work is complete only when all of the following are true:

- The experience is responsive, accessible, and coherent across Home, About Archana, Consultations, Media, and Connect.
- The supplied portrait is used as an actual profile asset; the old business poster is not stretched into a modern logo.
- All raster image assets in the repository's site-facing `public/` media are WebP. No `.jpg`, `.jpeg`, or `.png` is referenced by site code, metadata, social cards, or structured data. SVG is acceptable only for purpose-built vector marks/icons where appropriate.
- The featured podcast is prominent and uses a click-to-load video experience, with title/context and a link to YouTube.
- Phone, WhatsApp (only after confirming availability), YouTube, Instagram, and both Facebook destinations work correctly.
- No unsupported testimonials, review counts, credentials, guarantees, prices, session durations, or NGO claims are invented.
- Automated tests, type checks, production build, accessibility checks, and mobile/desktop end-to-end flows pass.
- Core Web Vitals targets are measured and documented.
- Technical SEO and GEO checks are completed last, after the page structure and final copy are stable.

See the detailed documents before making implementation decisions.
