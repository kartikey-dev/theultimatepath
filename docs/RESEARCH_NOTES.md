# Research Notes — Tarot & Personal-Service Websites

Research date: 25 November 2026. These are design and information-architecture observations, not templates to copy. Use the patterns that fit Archana's real services and personality.

## 1. Comparable business websites reviewed

### SUNSHINE — The World of Tarot
https://sunshinetheworldoftarot.com/

**Observed patterns**
- Clear first-screen positioning and a direct “Book a reading” action.
- Dedicated About, Tarot, Healing, Vastu, Studio, Contact, and booking destinations.
- Service options are separated, with pricing and delivery expectations clearly shown.
- Trust is built through explicit privacy/approach statements, experience details, and clear service boundaries.

**What to adapt for The Ultimate Path**
- Make the consultation action visible immediately.
- Separate the About story from the service explanation.
- Give visitors a clear understanding of each confirmed service and the enquiry process.
- Use clear privacy and ethical-boundary language; do not borrow its prices, statistics, or service catalogue.

### Akriti Sawhney — Akriti Tarot Space
https://www.akrititarotspace.com/

**Observed patterns**
- A broad professional presence with About, Services, Learn, Testimonials, FAQ, and Connect sections.
- Community content and recent YouTube content help connect the site with the practitioner's social channels.
- FAQ content anticipates common questions from first-time visitors.

**What to adapt**
- Give the Media page and social highlights a proper role in the user journey.
- Build an FAQ from real questions Archana receives.
- Keep services, biography, community/media, and contact as distinct areas rather than one long undifferentiated page.
- Do not reproduce unverified testimonials, student figures, or course claims.

### Tarot Dojo
https://www.tarotdojo.com/

**Observed patterns**
- Consultation-led homepage with a strong “Book a Personal Tarot Consultation” action.
- The site explains the practitioner's background and approach, and has an event/corporate contact path.
- Testimonials and credentials appear as trust elements.

**What to adapt**
- Lead with a clear personal consultation path.
- Consider future event/workshop enquiries only if Archana offers those services.
- Build trust through a transparent process and authentic public media—not invented numbers or credentials.

### Luminosa Creative — Tarot Reader Website Case Study
https://www.luminosacreative.com/squarespace-web-design-portfolio/tarot-reader

**Observed patterns**
- A tarot website designed around warm earth tones and outdoor imagery to express a nature connection.
- Portraits/outdoor photography, custom illustrations, and a booking path work together to make the identity distinctive.

**What to adapt**
- This is a particularly relevant visual cue because Archana is described as a nature lover.
- Combine authentic portraits and approved nature imagery with subtle botanical/organic illustration.
- Keep the site premium and grounded rather than leaning on generic celestial stock art.

### The Providence Room — Private Tarot Consultations
https://theprovidenceroom.com/

**Observed patterns**
- A clear step-by-step enquiry/booking sequence.
- The flow gathers only practical details, asks for a session preference, and includes consent and a scope statement before scheduling/payment.

**What to adapt**
- If the business later wants online booking, build a transparent step-by-step flow.
- Keep consent and expectations explicit.
- For the initial build, use a simpler phone/WhatsApp enquiry flow until scheduling, pricing, payment, privacy, and cancellation policies are confirmed.

## 2. Direction that emerges from the research

The strongest fit is a **nature-aware editorial business portfolio with a consultation-first conversion path**:

1. A clear hero that names Archana and The Ultimate Path.
2. A real About Archana page with her story and values.
3. A concise consultation/service page with process, expectations, boundaries, and enquiry action.
4. A Media page that highlights the featured podcast and curated social work.
5. A connect page with verified phone/social/location details.
6. A visual system that uses authentic imagery, earth-led colour, subtle card/botanical motifs, and strong typography.

Avoid turning the website into an ecommerce or astrology portal unless Archana explicitly wants and supports that expansion.

## 3. Existing project and client-source notes

- Existing public project code uses Next.js App Router, React, and TypeScript.
- Current homepage code already includes a YouTube uploads playlist ID and six Instagram post IDs. Antigravity should verify and reuse them rather than replacing them blindly.
- The supplied poster contains the brand name, the description “Tarot Reading & Healing Centre,” and two contact numbers.
- The current demo includes phone links and Gorakhnath Road, Gorakhpur as location context.
- The user supplied an additional portrait image of Archana during a reading; it has been converted to WebP in this package.
- Social platforms restricted automated inspection in this research session. No extra social-profile photographs were downloaded or mirrored. Ask Archana for approved originals or export files and use the official post links.

## 4. Technical references

### Next.js image optimisation
https://nextjs.org/docs/app/api-reference/components/image

Use the current Next.js Image component correctly: explicit dimensions/aspect ratio, responsive `sizes`, and suitable loading priority. The source-file WebP policy in this project is stricter than relying on runtime transcoding alone.

### Next.js Metadata and Open Graph
https://nextjs.org/docs/app/getting-started/metadata-and-og-images

Use route-appropriate metadata and image previews. Ensure all social preview images point to local WebP assets and the final canonical domain.

### Google Search SEO Starter Guide
https://developers.google.com/search/docs/fundamentals/seo-starter-guide

Prioritise useful, crawlable content, descriptive page titles, clear links, and a technically accessible site rather than keyword repetition.

### Google structured data introduction
https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

Structured data should represent real page content. Valid markup does not guarantee a special search appearance.

### Google LocalBusiness structured data
https://developers.google.com/search/docs/appearance/structured-data/local-business

Use accurate business information. Do not invent opening hours, address details, ratings, or service information to complete a schema object.

### Google Core Web Vitals
https://developers.google.com/search/docs/appearance/core-web-vitals

Good user experience targets at the 75th percentile: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.

### Google Antigravity rules and skills
https://antigravity.google/docs/rules/
https://antigravity.google/docs/migration/workflows-to-skills/

Use root `AGENTS.md` for persistent project rules. Current Antigravity guidance is moving legacy Markdown workflows toward Agent Skills, so this package includes a reusable skill under `.agents/skills/` rather than relying on a deprecated workflow file.

## 5. Source and limitation notes

- Competitor observations are based on the public page content available during this research. Individual sites can change.
- The referenced sites are inspiration for information architecture and interaction patterns only; do not copy their text, photos, artwork, branding, or commercial claims.
- Social-profile pages were not reliably accessible to automated inspection. All final post selection and image use must be confirmed directly with Archana.
- The featured YouTube video public metadata provides the title, publisher, date, and broad subject matter; recheck those details at implementation/launch in case the channel metadata changes.
