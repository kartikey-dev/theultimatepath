---
name: the-ultimate-path-implementation
description: Use when planning, implementing, refactoring, testing, or optimising the The Ultimate Path website for Archana Mahajan. Enforces the approved product scope, WebP-only raster policy, TDD, staged delivery, ethical content, and final-phase SEO/GEO.
---

# The Ultimate Path Implementation Skill

## Required reading

Before editing, read:

- `AGENTS.md`
- `README.md`
- `docs/IMPLEMENTATION_PLAN.md`
- `docs/CONTENT_BRIEF.md`
- `docs/ASSET_GUIDE.md`
- `docs/QUALITY_AND_TEST_PLAN.md`
- `docs/SEO_GEO_LAUNCH_CHECKLIST.md` only when the implementation reaches the final SEO/GEO phase

## Procedure

1. Inspect the local repository, current deployment, git status, package scripts, route tree, tests, dependencies, and public assets.
2. Run baseline development/build checks and record current defects before changing code.
3. Prepare a phase-specific plan and test plan. Do not implement all phases in one unreviewed batch.
4. For each feature, write the failing test first, implement the minimal change, refactor, and rerun checks.
5. Preserve current useful YouTube/Instagram identifiers after verifying them.
6. Build the multi-page experience according to the implementation plan. Keep React Server Components as the default and use client components only where necessary.
7. Convert incoming raster assets to WebP before they enter the live asset tree. Update every reference atomically.
8. Use honest, owner-approved copy. Do not invent credentials, prices, testimonials, opening hours, NGO details, service claims, or outcomes.
9. Load YouTube/social media only after interaction or an appropriate lazy-load trigger. Provide a robust outbound link fallback.
10. Complete accessibility, mobile QA, tests, typecheck, lint, build, and performance review.
11. Only after the core experience is stable, execute the SEO/GEO checklist.
12. Report changed files, tests and commands run, performance results, client approvals pending, and any skipped validation.

## Stop conditions

Pause and seek owner confirmation before publishing:

- A new service not clearly confirmed by the content brief.
- A price, duration, appointment availability, opening hours, exact public address, payment, refund, or cancellation policy.
- WhatsApp CTA for a number not confirmed to support WhatsApp.
- NGO name, role, impact claim, logo, or image.
- Client testimonial, review rating, client count, certificate, or experience figure.
- Any wording that suggests tarot replaces professional health, legal, or financial advice.

## Quality principles

- Premium, warm, grounded, nature-aware design; avoid generic mystical clichés.
- Mobile-first, semantic, keyboard-operable, and reduced-motion aware.
- WebP-only raster assets; no PNG/JPG/JPEG in live usage.
- Performance targets: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 at the 75th percentile.
- No misleading performance, security, compliance, SEO, or GEO claims.
