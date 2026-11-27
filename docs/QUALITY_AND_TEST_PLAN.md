# Quality and Test Plan

## 1. Test-first delivery (TDD)

TDD is required for all meaningful features and fixes.

### RED → GREEN → REFACTOR

1. **RED:** Write a failing test that states the behaviour or acceptance criterion.
2. **GREEN:** Implement the smallest solution that makes the test pass.
3. **REFACTOR:** Improve naming, separation, accessibility, and performance while keeping tests green.
4. Run regression checks and capture results before moving on.

The agent must not implement a whole feature first and add tests afterwards.

## 2. Suggested toolchain

Inspect current dependencies and Node version before adding anything. The public repository package currently exposes `dev`, `build`, and `start` only; if the local repository still has no test/lint stack, add a minimal compatible set.

| Area | Suggested tool | Purpose |
|---|---|---|
| Unit/component tests | Vitest + React Testing Library + `@testing-library/jest-dom` + `user-event` | Test UI behaviour, content rendering, controls, and accessible interactions. |
| DOM environment | `jsdom` | Component test environment. |
| E2E | Playwright | Validate complete desktop/mobile user journeys and navigation. |
| Accessibility automation | `@axe-core/playwright` | Automated accessibility smoke checks; supplement with manual review. |
| Static analysis | ESLint with the matching Next.js config | Catch code and framework issues. |
| Type safety | `tsc --noEmit` | Strict TypeScript validation. |
| Performance audit | Lighthouse CI or Lighthouse CLI | Lab metrics and regression guardrails. |

Do not add Cypress and Playwright together without a specific need. Choose the smallest maintainable stack.

## 3. Suggested package scripts

Add only after confirming the package manager and current scripts. Adapt the exact script names to the repository.

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test",
    "test:a11y": "playwright test --grep @a11y"
  }
}
```

Use versions compatible with the installed Next.js 16 / React 19 packages. Keep the lockfile in sync.

## 4. Unit and component test coverage

### Shared layout and navigation

- Header brand links to Home.
- Desktop navigation points to the correct routes.
- Mobile menu opens/closes, handles keyboard interaction, returns focus, and has an accessible name.
- Footer exposes correct contact and official social links.
- No decorative element is incorrectly announced by assistive technology.

### CTA and contact links

- Phone links use the exact verified contact numbers.
- WhatsApp links appear only for confirmed WhatsApp-enabled numbers.
- External links have clear accessible labels and safe `rel` attributes where applicable.
- No placeholder `href="#"` or dead CTA remains.

### Content and services

- Only confirmed services render.
- Unknown price/session duration/availability are not replaced with fake defaults.
- Tarot disclaimer is visible on the relevant route.
- No unapproved NGO details or unsupported claims are shown.

### Media components

- Featured podcast metadata and external URL render correctly.
- YouTube iframe is not mounted until the visitor activates the preview (or it enters a deliberately selected lazy-load state).
- Social cards work when platform content is unavailable.
- Media components reserve their aspect ratio and do not cause layout shift.

### Image policy

- Asset manifest contains WebP for every active raster asset.
- No site-facing reference ends with `.jpg`, `.jpeg`, or `.png`.
- Hero image includes useful alt text and responsive `sizes`.
- Decorative art has empty alt text or is hidden from assistive technology.

## 5. End-to-end test scenarios

Run at mobile and desktop viewports.

1. **Discovery:** Open Home, follow About Archana, return Home, navigate to Consultations.
2. **Enquiry:** Tap/click phone CTA and assert expected `tel:` destination. Test WhatsApp only when confirmed.
3. **Media:** Open Media, activate featured video, verify iframe or outbound fallback, and verify no autoplay.
4. **Social:** Verify YouTube, Instagram, personal Facebook, and business Facebook links.
5. **Mobile navigation:** Open menu, visit a route, close via Escape, and verify no clipped or offscreen content.
6. **Accessibility:** Check keyboard traversal, focus visibility, headings, landmarks, link text, contrast, and reduced motion.
7. **Fallbacks:** Simulate a blocked YouTube or Meta request and verify the site remains usable.

## 6. Accessibility acceptance

- All controls are operable by keyboard.
- Focus indicators are visible and not removed.
- Heading order is meaningful and every route has one descriptive H1.
- Landmarks (`header`, `nav`, `main`, `footer`) are used correctly.
- Images have context-appropriate alt text; decorative images are ignored by screen readers.
- Text and interactive components meet WCAG 2.2 AA contrast expectations.
- Touch targets are comfortable, especially for primary enquiry actions.
- Accordions announce expanded/collapsed state.
- Mobile menu and video activation are announced and keyboard-operable.
- Motion respects `prefers-reduced-motion`.
- Form errors, if a form is introduced, are associated with inputs and announced; labels and consent are explicit.

Automation is not sufficient on its own; include manual keyboard and screen-reader spot checks.

## 7. Performance budgets

Target good Core Web Vitals at the 75th percentile:

| Metric | Target | Meaning |
|---|---:|---|
| LCP | ≤ 2.5 s | Largest contentful element loads quickly. |
| INP | ≤ 200 ms | Interactions respond promptly. |
| CLS | ≤ 0.1 | Page remains visually stable. |

Additional lab target: Lighthouse mobile performance ≥ 90 on Home and representative inner routes, where feasible. This is a target, not a field-data guarantee.

### Key optimisation actions

- Make the hero/profile WebP appropriately sized and the true LCP image.
- Use responsive image sizes; do not send a 1200px image to every small card.
- Use `next/image` with reserved dimensions and sensible priority/lazy loading.
- Keep fonts self-hosted through `next/font` where practical; load only required weights/styles.
- Use server components by default and minimise client JavaScript.
- Use CSS for small interactions instead of adding a heavy animation library.
- Defer YouTube/Instagram/Facebook embeds until interaction or deliberate lazy-load activation.
- Use a click-to-load video placeholder with fixed aspect ratio.
- Avoid multiple third-party requests before first paint.
- Use caching for static content and avoid request-time social feed dependencies.
- Remove unused CSS, icons, scripts, and large dependencies.

## 8. CI pipeline

Create or update GitHub Actions to run, on pull requests and the main branch:

1. Install dependencies using the lockfile (`npm ci` if npm is the confirmed package manager).
2. Lint.
3. Typecheck.
4. Unit/component tests.
5. Production build.
6. Playwright E2E on a representative Chromium target (and additional browser matrix only when justified).
7. Accessibility smoke test.
8. Lighthouse CI for representative routes after the build is served.

Cache package dependencies and Playwright browsers appropriately. Upload reports/screenshots as workflow artifacts on failure. Never store secrets in the workflow YAML.

## 9. Release checklist

- [ ] Build is green from a clean install.
- [ ] Tests and browser journeys pass.
- [ ] No new console errors, hydration warnings, or broken links.
- [ ] No critical/serious automated accessibility violations; manual review complete.
- [ ] Mobile and desktop screenshots reviewed.
- [ ] All active raster media is WebP.
- [ ] LCP/INP/CLS lab/field status documented.
- [ ] Third-party media failures do not break core content or contact actions.
- [ ] Owner approves biography, service list, NGO content, images, contacts, and disclaimer.
- [ ] SEO/GEO phase is complete only after the content and IA stabilise.
