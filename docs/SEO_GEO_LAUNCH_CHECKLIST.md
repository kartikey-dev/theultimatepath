# Technical SEO, Local SEO & GEO — Final Phase Only

> This is Phase 7. Do not implement this phase until the visual system, route structure, actual service list, biography, media, and page copy have stabilised and passed review.

## 1. Technical SEO

### Crawlability and indexing

- [ ] All intended public routes return HTTP 200.
- [ ] Create `app/robots.ts` with a clear production policy; do not block CSS, JS, or relevant images.
- [ ] Create `app/sitemap.ts` with canonical public routes and accurate `lastModified` dates where known.
- [ ] Set a single canonical URL per route.
- [ ] Redirect legacy or duplicate URLs intentionally; avoid redirect chains and loops.
- [ ] Ensure 404 route is useful and returns an actual 404 status.
- [ ] Confirm no accidental `noindex` remains on production.
- [ ] Add verified production domain as `metadataBase`; do not leave an old preview URL once a custom domain is launched.

### Per-route metadata

- [ ] Unique title and description for Home, About Archana, Consultations, Media, Connect, Privacy, and Disclaimer.
- [ ] One clear H1 per page; meaningful H2/H3 hierarchy.
- [ ] Descriptive image alt text.
- [ ] Canonical metadata and Open Graph/Twitter metadata.
- [ ] OG/Twitter preview points to a local WebP image.
- [ ] `lang="en-IN"` for English-first content; use separate language routes and `hreflang` only if a true Hindi translation experience is delivered.
- [ ] Internal links help users and crawlers discover every important page.

### Local SEO

- [ ] Confirm the public business name, phone(s), address, service area, and opening hours with Archana.
- [ ] Keep website contact/location wording consistent with the business listing and social profiles.
- [ ] Claim/verify the official Google Business Profile if Archana controls it; correct category and contact information.
- [ ] Add map link or embed only when the real public location is confirmed. Avoid publishing a private home address.
- [ ] Invite genuine customers to leave honest reviews on the appropriate platform; never seed fake reviews or selectively mark up testimonials.

## 2. Structured data

Use JSON-LD that describes only facts clearly represented on the visible page. Keep the data in one typed helper/module and safely serialise it.

Potential entities, subject to final factual validation:

- `Person` for Archana Mahajan.
- `ProfessionalService` or the most accurate `LocalBusiness` subtype for The Ultimate Path, if the public service location is confirmed.
- `WebSite` for the site itself.
- `VideoObject` for the featured podcast only if the video details, thumbnail, upload date, and duration are accurate and available.
- `sameAs` links for official social accounts supplied and confirmed by the owner.

Do not:

- Invent address, opening hours, price range, review count, rating, award, or years of experience.
- Add `AggregateRating` or `Review` markup without genuine, visible, policy-compliant reviews.
- Add service types that are not actually offered.
- Use FAQ markup merely to chase a rich result. Keep FAQs useful and visible; only add schema when current Google eligibility and content guidelines support it.
- Mark up the podcast as if Archana were the publisher/producer when Soulful Moms of India is the publisher.

Validate JSON-LD with the Schema Markup Validator and Google's Rich Results Test where applicable. A valid schema implementation does not guarantee a rich result.

## 3. GEO / answer-engine discoverability

GEO is not a separate trick or guaranteed ranking channel. The goal is to make the brand and its services clear, consistent, attributable, and genuinely useful to people and systems that summarise web content.

- [ ] State the full entity relationship plainly: “The Ultimate Path is the tarot-reading practice of Archana Mahajan.”
- [ ] Use the same names, service descriptions, phone numbers, and official profile links across the site and business profiles.
- [ ] Write a clear About page identifying who Archana is, what she does, where she serves clients, and what makes her approach distinctive—using verified information only.
- [ ] Describe each confirmed service in simple terms: what it is, who it may help, what happens, and how to enquire.
- [ ] Include plain-language answers to practical questions (format, preparation, privacy, pricing if approved, limits, how to contact).
- [ ] Make the featured podcast easy to identify with publisher, title, subject, and a direct source link.
- [ ] Keep meaningful text in server-rendered HTML; do not hide all explanatory content inside images, animations, or client-only components.
- [ ] Use specific descriptive headings, short paragraphs, and useful internal links.
- [ ] Add original, attributable content—not generic mass-produced spirituality articles.
- [ ] Keep profile URLs and public business listings maintained.
- [ ] Review Search Console and other analytics after launch; use actual referral/crawl data to guide changes.

Do not promise inclusion in AI Overviews, ChatGPT answers, or other assistant responses. No markup or file guarantees those outcomes.

## 4. Search intent / content themes

Use naturally in page titles, headings, and body copy—never stuff keywords:

- Tarot reading in Gorakhpur
- Tarot reader in Gorakhpur
- Archana Mahajan tarot reading
- The Ultimate Path Gorakhpur
- Personal tarot consultation
- Online tarot reading (only if offered)
- Numerology consultation (only if offered)

Prioritise brand/entity clarity and helpful explanatory content over repeating keywords.

## 5. Search Console and post-launch

- [ ] Verify the production domain in Google Search Console.
- [ ] Submit the sitemap.
- [ ] Inspect Home, About, Consultations, and Media URLs.
- [ ] Monitor indexing coverage, canonical selection, Core Web Vitals, and mobile usability.
- [ ] Review broken links, structured-data warnings, and video indexing if relevant.
- [ ] Track qualified enquiries with privacy-respecting analytics only if the owner approves a tracking approach and cookie/privacy obligations are satisfied.
- [ ] Revisit metadata and content only when supported by real query/impression data or user feedback.

## 6. Final sign-off

- [ ] All published business facts validated by Archana.
- [ ] Canonical domain confirmed.
- [ ] Page metadata and image previews verified.
- [ ] Sitemap and robots verified in production.
- [ ] Structured data validates and contains no unsupported fields.
- [ ] Business profile/social profile consistency reviewed.
- [ ] GEO content is factual, complete, readable, and visible.
- [ ] No claim of rankings, AI citations, or traffic gains is made without evidence.
