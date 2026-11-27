# Asset Guide — WebP-Only Raster Media

## 1. Non-negotiable rule

Every raster image used by the live website must be **WebP**. This includes photographs, decorative raster textures, logos supplied as raster artwork, social thumbnails, video preview images, Open Graph images, and images used in cards.

- Allowed raster extension: `.webp`
- Do not reference `.jpg`, `.jpeg`, or `.png` in site code, CSS, metadata, structured data, manifest files, or public-facing documentation.
- SVG is allowed only for genuine vector marks, line icons, or illustrations. Do not embed photos into SVG.
- Do not use a remote JPG/PNG thumbnail directly if the site is required to use WebP only. Obtain a permitted source and convert it before publishing.

## 2. Supplied assets already converted

| Original supplied asset | Converted asset | Original size | Conversion |
|---|---|---:|---:|
| `archana-mahajan.jpg` | `public/images/archana/archana-mahajan.webp` | 1200 × 1600 | WebP quality 84, method 6 |
| `theultimatepath.jpg` | `public/images/brand/the-ultimate-path-poster-reference.webp` | 509 × 372 | WebP quality 82, method 6 |

The portrait is suitable as an initial profile/hero source after responsive crop review. The supplied poster is retained as a brand reference, not recommended as the main logo or hero image. Build a clean text/vector wordmark from “The Ultimate Path” instead of enlarging this low-resolution poster.

## 3. Asset placement and naming

Use descriptive, stable filenames:

```text
public/images/
  archana/
    archana-mahajan.webp
    archana-at-work-01.webp
    archana-nature-01.webp
    archana-community-01.webp
  tarot/
    tarot-reading-table.webp
    tarot-card-detail-01.webp
  social/
    podcast-soulful-moms-of-india.webp
    instagram-feature-01.webp
    facebook-feature-01.webp
  brand/
    the-ultimate-path-poster-reference.webp
    og-the-ultimate-path.webp
```

Only add files when an approved original exists. Do not create fake NGO activity, client imagery, testimonials, or a fake portrait.

## 4. Conversion workflow

Use an available tool (`sharp`, `cwebp`, or Pillow) to convert each incoming raster asset. Preserve the original outside the deployed `public/` directory until approval is complete, then keep only the WebP export in the active asset library.

Example with `cwebp`:

```bash
cwebp -q 82 input.jpg -o public/images/archana/archana-mahajan.webp
```

Example with ImageMagick:

```bash
magick input.png -quality 84 public/images/social/instagram-feature-01.webp
```

Example using Node `sharp` (if `sharp` is already available):

```ts
import sharp from "sharp";

await sharp("input.jpg")
  .rotate()
  .webp({ quality: 82, effort: 6 })
  .toFile("public/images/archana/archana-mahajan.webp");
```

Do not install duplicate imaging libraries just for one conversion. Inspect the source, preserve EXIF orientation, crop intentionally, and compare visual quality at actual display sizes.

## 5. Responsive image rules

- Use `next/image` for local media unless there is a documented reason not to.
- Provide `width`/`height` or an explicit aspect ratio to reserve layout space.
- Supply accurate `sizes` for responsive layouts.
- Set high loading priority only on the genuine above-the-fold LCP image.
- Lazy-load below-the-fold images.
- Use different art-directed crops only when they improve the actual design; generate those crops from the same approved source.
- Use meaningful alt text for informative images; use `alt=""` for decorative imagery.
- Avoid huge originals for small cards. Provide image dimensions that match actual component use.
- Do not lazy-load the main LCP portrait if it is the key first-viewport visual.

## 6. Next.js image configuration

Inspect the current Next.js version and its image API before changing configuration. The intended format policy is to serve WebP, not to require AVIF. Configure the image optimiser accordingly (for example, `images.formats: ["image/webp"]` if supported by the installed version), while ensuring source files themselves are already WebP.

Do not treat Next.js runtime optimisation as permission to leave JPG/PNG sources in the repository. The source asset policy remains WebP-only.

## 7. Social media and YouTube thumbnail sourcing

- Ask Archana for downloadable originals or written permission to reuse public post media.
- If an image is displayed on-site, make a local WebP derivative and link the card to the original post.
- Record the original post/video URL and asset source in an asset manifest.
- Never use a scraped image from a private account or content that Archana does not own/have rights to use.
- Do not depend on YouTube's remote JPG thumbnail URL in the live page. Convert an approved thumbnail to local WebP before use.
- Do not fetch full-size social profiles at request time.

## 8. Asset manifest template

| File | Source/owner | Permission confirmed | Alt text | Dimensions | Notes |
|---|---|---|---|---|---|
| `archana-mahajan.webp` | Client-supplied photo | Confirm for production use | Archana Mahajan during a tarot reading | 1200 × 1600 | Initial profile source. |
| `the-ultimate-path-poster-reference.webp` | Client-supplied poster | Confirm for reproduction if publicly displayed | The Ultimate Path tarot reading and healing centre poster | 509 × 372 | Archive/reference; not primary logo. |

## 9. Release scan

Before merge, search the repository:

```bash
# Find raster image references that violate the policy
rg -n -i '\.(png|jpe?g)(\?|#|["'"'"' )])' app components public

# List any active PNG/JPG files in public
find public -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \)
```

Review all findings manually. A match in an archived source folder outside `public/` may be acceptable if it is not deployed or referenced; active site code and public assets must be WebP-only.
