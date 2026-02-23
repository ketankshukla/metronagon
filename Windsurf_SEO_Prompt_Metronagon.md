# WINDSURF PROMPT — Metronagon Media Full SEO & Indexability Implementation

---

## WHO YOU ARE WORKING WITH

You are working on **metronagon.com**, the business website for **Metronagon Media**, a book cover design and publishing services studio owned by **Ketan Shukla**. Ketan is a published Amazon KDP author with 22 books across 3 series. The site offers book cover design, series branding, and marketing visual packages to indie authors.

The companion site is **ketanshukla.com** (author portfolio — already live).

---

## THE PROBLEM TO SOLVE

**metronagon.com is completely invisible to search engines.** It has zero search presence — Google has not indexed it, which means no organic traffic, no discoverability, and no credibility signal when a client Googles the business name. This must be fixed completely and permanently.

---

## YOUR TASK

Perform a **full SEO and indexability implementation** on metronagon.com. Every single item below must be completed. Do not skip anything. Do not ask which items to prioritize — do all of them. Work through them systematically and confirm each one when done.

---

## STEP 1 — FIRST, READ THE CODEBASE

Before touching anything:

1. Read the entire project structure and tell me:
   - What framework/stack is being used (Next.js, Astro, plain HTML, WordPress, etc.)
   - What the current `<head>` section looks like on the homepage
   - Whether a `sitemap.xml` exists
   - Whether a `robots.txt` exists
   - Whether any SEO library is already installed (e.g., `next-seo`, `astro-seo`, `react-helmet`)
   - What the current page structure is (list all pages/routes)

2. Then tell me your implementation plan before writing any code. Wait for my confirmation before proceeding.

---

## STEP 2 — robots.txt

Create or replace `/public/robots.txt` (or the correct static assets location for this framework) with:

```
User-agent: *
Allow: /

Sitemap: https://www.metronagon.com/sitemap.xml
```

Verify:
- It is NOT blocking any pages with `Disallow`
- It is accessible at `https://www.metronagon.com/robots.txt`
- The sitemap URL in this file exactly matches the canonical sitemap URL

---

## STEP 3 — sitemap.xml

Create a complete, valid `sitemap.xml` that includes **every page on the site**.

### Requirements:
- Format: standard XML sitemap (sitemaps.org protocol)
- Every URL must use `https://www.metronagon.com` (with www — pick one canonical form and be consistent throughout the entire codebase)
- Include `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>` for every URL
- Priority guidelines:
  - Homepage: `1.0`, `daily`
  - Services page: `0.9`, `weekly`
  - Portfolio/work pages: `0.8`, `weekly`
  - About/contact: `0.7`, `monthly`
  - Blog posts (if any): `0.6`, `weekly`

### If the framework supports dynamic sitemap generation:
- Use the appropriate method (e.g., `sitemap.ts` in Next.js App Router, `getServerSideProps` in Pages Router, `astro-sitemap` integration, etc.)
- Make it auto-update when new pages are added

### If static:
- Create `sitemap.xml` manually for all current pages
- Add a comment at the top noting it must be manually updated when pages are added

Validate the sitemap XML is well-formed. No broken tags, no encoding issues.

---

## STEP 4 — Canonical Tags

Every single page must have a canonical `<link>` tag in its `<head>`:

```html
<link rel="canonical" href="https://www.metronagon.com/[page-path]" />
```

Rules:
- The homepage canonical must be exactly `https://www.metronagon.com/` (trailing slash consistent with sitemap)
- No page should be accessible at both `http://` and `https://` — canonical enforces the correct one
- No page should be accessible at both `www` and non-www — pick `www` and canonicalize all to it
- Blog posts or dynamic pages must have unique canonicals — never the same canonical on two different pages

---

## STEP 5 — Meta Tags (Every Page)

Every page needs a unique, optimized `<title>` and `<meta name="description">` tag.

### Homepage
```html
<title>Book Cover Design & Publishing Services | Metronagon Media</title>
<meta name="description" content="Metronagon Media offers professional book cover design, series branding, and marketing visuals for indie authors. Built by a published Amazon KDP author with 22 books." />
```

### Services Page
```html
<title>Book Cover Design Packages & Pricing | Metronagon Media</title>
<meta name="description" content="Browse Metronagon Media's book cover design packages — from eBook front covers to full wrap print covers, series branding, and launch marketing graphics for indie authors." />
```

### About Page (if exists)
```html
<title>About Metronagon Media | Published Author & Book Cover Designer</title>
<meta name="description" content="Metronagon Media is run by Ketan Shukla — a published Amazon KDP author with 22 books across 3 series, now offering professional book cover design and publishing visuals." />
```

### Contact Page (if exists)
```html
<title>Contact Metronagon Media | Book Cover Design Inquiries</title>
<meta name="description" content="Get in touch with Metronagon Media to discuss your book cover design, series branding, or marketing visuals project. Response within 24 hours." />
```

### Portfolio/Work Page (if exists)
```html
<title>Book Cover Design Portfolio | Metronagon Media</title>
<meta name="description" content="View Metronagon Media's book cover design portfolio — including series branding, full wrap covers, box set artwork, and launch marketing graphics for indie authors." />
```

**Rules for all meta descriptions:**
- 150–160 characters max
- Must be unique on every page — never duplicate
- Must include a target keyword naturally
- Must read like a human wrote it, not a keyword list

---

## STEP 6 — Open Graph & Twitter Card Tags

Every page needs Open Graph tags for social sharing and link previews:

```html
<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.metronagon.com/[page-path]" />
<meta property="og:title" content="[Page Title]" />
<meta property="og:description" content="[Page Meta Description]" />
<meta property="og:image" content="https://www.metronagon.com/images/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Metronagon Media" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://www.metronagon.com/[page-path]" />
<meta name="twitter:title" content="[Page Title]" />
<meta name="twitter:description" content="[Page Meta Description]" />
<meta name="twitter:image" content="https://www.metronagon.com/images/og-image.jpg" />
```

**OG Image requirements:**
- Size: 1200x630px
- If no OG image exists yet, create a placeholder that notes the file must be placed at `/public/images/og-image.jpg`
- The OG image should ideally show the Metronagon Media logo or a strong book cover visual

---

## STEP 7 — Structured Data (JSON-LD Schema)

Add JSON-LD structured data to the homepage `<head>`. This is what helps Google understand the business type and show rich results.

### LocalBusiness / ProfessionalService Schema (Homepage)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Metronagon Media",
  "url": "https://www.metronagon.com",
  "logo": "https://www.metronagon.com/images/logo.png",
  "description": "Book cover design, series branding, and marketing visuals for indie authors and small presses. Built by a published Amazon KDP author with 22 books.",
  "founder": {
    "@type": "Person",
    "name": "Ketan Shukla",
    "url": "https://www.ketanshukla.com",
    "jobTitle": "Book Cover Designer & Author",
    "sameAs": [
      "https://www.ketanshukla.com",
      "https://www.amazon.com/author/[ketan-amazon-author-page-url]"
    ]
  },
  "serviceType": [
    "Book Cover Design",
    "Series Branding",
    "eBook Cover Design",
    "Marketing Graphics for Authors",
    "Box Set Cover Design"
  ],
  "areaServed": "Worldwide",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Diego",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://reedsy.com/[your-reedsy-profile-url]"
  ]
}
</script>
```

### Person Schema (About Page or Homepage)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ketan Shukla",
  "url": "https://www.ketanshukla.com",
  "jobTitle": "Book Cover Designer, Author",
  "worksFor": {
    "@type": "Organization",
    "name": "Metronagon Media",
    "url": "https://www.metronagon.com"
  },
  "description": "Published Amazon KDP author with 22 books across 3 series. Founder of Metronagon Media, offering professional book cover design and publishing visuals to indie authors.",
  "knowsAbout": [
    "Book Cover Design",
    "Series Branding",
    "Indie Publishing",
    "Amazon KDP",
    "Epic Fantasy",
    "Self-Publishing"
  ],
  "sameAs": [
    "https://www.ketanshukla.com"
  ]
}
</script>
```

### Services Schema (Services Page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Metronagon Media Services",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "eBook Cover Design",
        "description": "Front-only eBook cover design for Kindle and other digital platforms.",
        "provider": { "@type": "Organization", "name": "Metronagon Media" }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Full Wrap Print Cover",
        "description": "Complete front, spine, and back cover design for KDP and IngramSpark print books.",
        "provider": { "@type": "Organization", "name": "Metronagon Media" }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Series Branding",
        "description": "Unified visual identity design across all books in a series — consistent palette, typography, and layout.",
        "provider": { "@type": "Organization", "name": "Metronagon Media" }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Book Launch Marketing Graphics",
        "description": "Social media assets, banners, Amazon headers, and ARC materials for book launches.",
        "provider": { "@type": "Organization", "name": "Metronagon Media" }
      }
    }
  ]
}
</script>
```

---

## STEP 8 — Internal Linking Audit

Review all pages and ensure:

- Every page is reachable from at least one other internal link (no orphan pages)
- The homepage links to: Services, About, Portfolio/Work, Contact
- The Services page links back to: Homepage, Contact, Portfolio
- No internal links use raw IP addresses or localhost URLs
- No broken internal `<a href>` tags
- Footer contains links to all main pages

---

## STEP 9 — Image SEO

Audit every `<img>` tag on the site:

- Every image must have a descriptive `alt` attribute — not empty, not just "image"
- Example: `alt="Fantasy book cover design for indie author"` not `alt="cover1"` or `alt=""`
- File names should be descriptive: `epic-fantasy-book-cover.jpg` not `IMG_2034.jpg`
- Large images should be compressed (aim for under 200KB per image)
- Add `width` and `height` attributes to all images to prevent layout shift

---

## STEP 10 — Page Speed & Core Web Vitals

Check and fix the following:

- Ensure all images use modern formats (WebP preferred where supported)
- Ensure no render-blocking scripts in `<head>` — move non-critical JS to bottom or add `defer`/`async`
- Ensure fonts are loaded efficiently — use `font-display: swap` in CSS
- Confirm no external resources (fonts, scripts) are loading from slow or unreliable CDNs

Run a Lighthouse audit in the terminal if possible:
```bash
npx lighthouse https://www.metronagon.com --output html --output-path ./lighthouse-report.html
```
If Lighthouse cannot run (no browser available), note which checks above are completed.

---

## STEP 11 — HTTPS & www Redirect

Confirm or implement:

- All `http://` requests redirect to `https://`
- All non-www requests (`metronagon.com`) redirect to `www.metronagon.com` (or vice versa — pick one and be consistent, matching the canonical tags)
- These redirects are 301 (permanent), not 302 (temporary)

If this is handled at the hosting/server level (Vercel, Netlify, Cloudflare), note what needs to be configured and provide the exact configuration code or settings.

---

## STEP 12 — Cross-Linking Between metronagon.com and ketanshukla.com

Add the following to the metronagon.com footer or about page:

```html
<a href="https://www.ketanshukla.com" rel="author">
  Ketan Shukla — Author Portfolio
</a>
```

And confirm that ketanshukla.com already links back to metronagon.com. These reciprocal links strengthen both domains.

---

## STEP 13 — Google Search Console Verification File

Create the Google Search Console HTML verification file. I will provide the verification code — it looks like this:

```
google-site-verification: google[XXXXXXXXXXXXXXXX].html
```

**Instruction:** Pause here and ask me for my Google Search Console verification code. Once I provide it, create the file at the correct public location so it is accessible at:

```
https://www.metronagon.com/google[XXXXXXXXXXXXXXXX].html
```

---

## STEP 14 — Final Checklist & Verification

When all steps are complete, provide me with:

1. A checklist confirming each step above is done
2. The full list of URLs that should now be in the sitemap
3. The exact URL to submit to Google Search Console as the sitemap: `https://www.metronagon.com/sitemap.xml`
4. Any items that could not be completed and why
5. Any hosting-level tasks I need to do manually (redirects, DNS, etc.)

---

## IMPORTANT RULES FOR THIS TASK

- **Do not break any existing functionality.** SEO changes should be additive — never remove working features.
- **Use the framework's native SEO tools** where they exist (e.g., Next.js `<Head>`, Astro's built-in meta, etc.) — do not add raw HTML tags when a proper API exists.
- **Keep all URLs consistent** — choose `https://www.metronagon.com` as the canonical base and use it everywhere without exception.
- **Commit changes in logical groups** — do not make one massive commit. Group by: robots/sitemap, meta tags, structured data, images, etc.
- **Tell me when each step is complete** before moving to the next.

---

## CONTEXT ABOUT THE BUSINESS (For Schema & Copy Accuracy)

- **Business name:** Metronagon Media
- **Owner:** Ketan Shukla
- **Location:** San Diego, CA, USA
- **Services:** Book cover design (eBook front-only, full wrap print), series branding, box set covers, book launch marketing graphics, social media assets for authors
- **Target audience:** Indie authors, self-published authors, small presses
- **Platform presence:** Amazon KDP (as author), Reedsy (as designer — pending approval)
- **Author portfolio:** ketanshukla.com (22 books — Aztec Samurai Adventures 12-book fantasy series, Repetition: Mother of Mastery 5-book non-fiction series, Reality Without Belief 5-book non-fiction series)
- **Primary keyword targets:** book cover design, indie author book cover, series branding for authors, eBook cover design, Amazon KDP cover design, book marketing graphics

---

*End of prompt. Begin with Step 1 — read the codebase and report before writing any code.*
