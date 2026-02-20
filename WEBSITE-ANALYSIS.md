# Author Portfolio (ketanshukla.com) — Full Site Analysis & Recommendations

> **Last updated:** February 2026 — Full re-analysis of current codebase state.
> This document replaces the previous Metronagon Media analysis. The site being analysed is the **author portfolio** at `E:\author-portfolio`, not the Metronagon business site.

---

# Metronagon Media — Detailed Website Analysis & Improvement Suggestions

## Context

Metronagon Media is a book cover design and publishing services business owned by Ketan Shukla, built on the credibility of 22 self-published books across 3 complete series. The website (metronagon.com) is a Next.js 16 site with Stripe embedded checkout, dark luxury aesthetic (gold on black), and 7 pages: Home, Services, Examples, Testimonials, Blog, About, and Checkout/Thank-You flow. The business is in its launch phase, targeting indie authors and self-publishers.

---

## Part 1: What the Website Does Well

1. **Credibility story is genuine and compelling** — 22 published books, 3 complete series, 30+ character portraits. This is rare in the cover design space and is your strongest differentiator.
2. **Visual portfolio is extensive** — 100+ example covers across 12 genres, a full 32-page children's book, and real series branding work. The proof is tangible.
3. **End-to-end checkout flow works** — Stripe embedded checkout keeps users on-site, the thank-you page dynamically shows package-specific requirements checklists. This is more polished than most competitors at this stage.
4. **Blog content is substantive** — 8 posts covering process, design principles, and case studies. These double as SEO content and trust-builders.
5. **Dark + gold aesthetic is distinctive** — It reads as premium and stands out from the typical white/light designer portfolios.
6. **Email templates are thorough** — 25 post-purchase onboarding emails ready to go, each tailored to the specific package ordered.
7. **Social media content is pre-built** — 53 tweets, 6 video scripts with per-platform upload guides, and a comprehensive social strategy document.

---

## Part 2: Critical Issues to Address

### 2.1 Testimonials Are Self-Referential -- DONE

All 4 testimonials are from Ketan Shukla about his own work. While the work is real, having the business owner as the only testimonial source undermines credibility. A potential client will notice immediately that the reviewer and the service provider are the same person.

**Suggestions:**

1. Remove the testimonials page entirely until you have real client testimonials, OR
2. Reframe the page as "Portfolio Case Studies" — describe the same projects but as case studies ("Here's how we built a 12-book fantasy series brand") rather than fake third-party reviews. This is honest and still demonstrates competence.

**Status:** Both suggestions implemented. Page rewritten as Portfolio Case Studies with 4 honest case studies (Aztec 12-book series, Repetition 5-book series, Reality 5-book series, Children's picture book). Nav labels updated to "Case Studies" in Header and Footer. Commits: `14fcbb7`, `20058be`, `147e290`.

### 2.2 No Analytics -- DONE

There is zero tracking on the site — no Google Analytics, no Vercel Analytics, no Plausible, nothing. You cannot measure traffic, conversion rates, or which pages/packages attract attention. You're flying blind.

**Suggestions:**

1. Add Vercel Analytics (free on Hobby plan, one line of code)
2. Or add Plausible (privacy-friendly, ~$9/month)
3. At minimum track: page views, traffic sources, and checkout conversion rates

**Status:** Vercel Analytics installed (`@vercel/analytics`) and added to root layout. Tracks page views, traffic sources, and top pages automatically on Vercel deployment.

### 2.3 No Email Capture / Lead Generation

The only way a visitor can interact is by purchasing a package. There's no email signup, no newsletter, no lead magnet, no free resource download. Most visitors won't buy on first visit — you need a way to capture them for follow-up.

**Suggestions:**

1. Add an email capture form using Kit/ConvertKit (free up to 10K subscribers)
2. Create a lead magnet — "Free PDF: 7 Cover Design Mistakes That Kill Book Sales" would work well given your blog content
3. Place the signup CTA on the homepage and at the end of blog posts

### 2.4 No Social Proof Links -- DONE

The footer and header have no links to social media profiles (X/Twitter, Instagram, Pinterest, TikTok, YouTube). The social content is pre-built in the repo but there's no way for site visitors to find your social presence.

**Suggestions:**

1. Add social media icons to the footer linking to your active profiles
2. Prioritize X, Instagram, Pinterest, and YouTube (whichever are active)

**Status:** X, Facebook, YouTube, TikTok icons added to footer with correct links. JSON-LD sameAs updated with all 4 social URLs. Commit: `b33dd83`.

### 2.5 Missing SEO Essentials -- DONE

1. No Open Graph tags (social sharing will show generic text/no image)
2. No Twitter Card meta tags
3. No structured data (JSON-LD for LocalBusiness, Service, etc.)
4. No sitemap.xml
5. No robots.txt
6. Several pages are missing unique meta descriptions (Examples, Blog, Checkout)

**Suggestions:**

1. Add OG/Twitter meta tags to every page (with your logo or a featured cover as the image)
2. Generate a sitemap.xml (Next.js supports this natively)
3. Add JSON-LD structured data for your services
4. Add a robots.txt file
5. Add unique meta descriptions to Examples, Blog, and Checkout pages

**Status:** All implemented. Global OG/Twitter cards with metadataBase, JSON-LD (ProfessionalService + WebSite), sitemap.ts (14 routes), robots.ts, layout.tsx metadata for examples/blog/checkout, noindex on checkout/thank-you, blog description fix. Commit: `65e2ae7`.

### 2.6 Contact Method is Buried -- DONE

The only contact information (`hello@metronagon.com`) appears once, at the very bottom of the services page. There's no dedicated contact page, no contact form, and no way for a potential client to ask a question before committing to a purchase.

**Suggestions:**

1. Add a visible contact email in the footer
2. Add a simple contact form or at minimum a prominent "Questions? Email us" section on the services page
3. Consider a dedicated /contact page with a form (Formspree or Resend integration)

**Status:** Email link added to footer with Mail icon. "Questions Before You Order?" section added to services page with email link. Commit: `71e9e1b`.

---

## Part 3: Package Refinement Suggestions

This is the core of your request. Here's a critical analysis of the current package structure and specific suggestions for refinement.

### 3.1 Overall Package Structure Assessment -- DONE

**Current state:** 5 service categories x 2-3 tiers each = 13 main packages, plus 11 revision items, 2 add-ons, and 1 retainer = 27 total Stripe products.

**Problem:** Too many choices for a new business with no client base yet. The paradox of choice applies here — a first-time visitor seeing 13 packages across 5 categories may feel overwhelmed. For a business just starting out, this is a lot of complexity to manage and explain.

**Status:** Restructured to 4 categories, 9 main packages. Series Architecture removed as standalone. Updates & Revisions collapsed into accordion. Commit: `5f80a8e`.

### 3.2 Specific Package Issues

#### 3.2.1 Ebook Cover Design — Pricing May Be Too Low -- DONE

1. $75 for a standard cover and $150 for premium is competitive but potentially undervalues your work. Your portfolio quality is significantly above what $75 cover designers typically deliver. On Reedsy, professional AI-assisted cover designers charge $200-$500+.
2. **Suggestion:** Consider raising Standard to $99-$125 and Premium to $200-$250. Your portfolio justifies it, and higher prices actually signal quality to authors who have been burned by cheap Fiverr covers. You can always run a "launch discount" to soften the transition.

**Status:** Standard raised to $99, Premium raised to $175. User needs to update Stripe products to match.

#### 3.2.2 Series Architecture & Planning — May Confuse the Target Audience -- DONE

1. This service (chapter outlines, continuity plans, book descriptions) is fundamentally different from cover design. It's a writing/planning service, not a visual design service. Mixing it with cover design may dilute your brand positioning as a visual creative studio.
2. Authors who need series planning typically work with developmental editors or book coaches, not cover designers.
3. **Suggestion A:** Remove it as a standalone offering and only include it in the Full Pipeline packages — this reduces your service categories from 5 to 4 and makes the Full Pipeline more compelling as the "everything" option.
4. **Suggestion B:** If you keep it standalone, make it very clear on the services page that this is a planning/content service, not a design service.

**Status:** Removed as standalone. Series planning is now only available through Full Pipeline packages. Footer link updated.

#### 3.2.3 Children's Picture Books — Pricing Gap is Large -- DONE

1. Standard ($500) to Premium ($1,000) is a 100% jump. The main differences are character design sheets, print-ready formatting, and an extra revision round.
2. **Suggestion A:** Add a middle tier around $700-$750 that includes print-ready formatting but not the full character design system.
3. **Suggestion B:** Adjust the Standard to include print-ready formatting (since most children's book authors want print) and raise it to $600, making the gap smaller.

**Status:** Added Plus tier at $750 between Standard ($500) and Premium ($1,000). Plus includes print-ready formatting, 2 revision rounds, and enhanced illustrations. Premium retains exclusive character design system and story text document. Grid updated to 3-column layout.

#### 3.2.4 Full Pipeline — Overlap Creates Confusion -- DONE

1. The Full Pipeline packages are positioned as "everything combined" but the savings vs. buying individual packages aren't clearly communicated. A potential client has to do mental math to figure out if the pipeline is a good deal.
2. **Critical issue:** Full Pipeline Standard ($900) costs MORE than buying Series Architecture Medium ($400) + Series Branding Standard ($450) = $850 separately. There's no incentive to buy the bundle.
3. **Suggestion A:** Add a "Save X%" or "Save $X" badge to each Full Pipeline tier showing the discount vs. buying separately.
4. **Suggestion B:** Lower the pipeline prices to be clearly below the sum-of-parts. For example: Starter $400 (saves $50), Standard $750-$800 (saves $50-$100), Premium $1,300-$1,400 (saves $100-$250).
5. **Suggestion C:** Or increase the individual service prices so the pipeline savings are real at the current pipeline price.

**Status:** Fixed. Starter $425 (Save $50), Standard $800 (Save $75), Premium $1,400 (Save $200). Green "Save $X" badges added to all Full Pipeline cards.

#### 3.2.5 Updates & Revisions — Too Granular for the Services Page -- DONE

1. 11 separate revision/update line items on the main services page is excessive. Most of these are relevant only to existing clients.
2. **Suggestion A:** Move the Updates & Revisions section to a separate "For Existing Clients" page.
3. **Suggestion B:** Collapse it behind an expandable/accordion section on the services page.
4. New visitors don't need to see "Children's Book — Page Edits ($25/page)" on their first visit. Keep the main services page focused on new client acquisition.

**Status:** Collapsed into expandable accordion. Hidden by default, click to expand. Label changed to "Already a client? Purchase updates to existing work."

#### 3.2.6 Series Expansion Retainer — Needs Better Positioning -- DONE

1. $150/quarter for up to 1 cover per month (3 per quarter) is an excellent deal — that's $50/cover vs. $75-$85 individually. But it's listed as a small add-on at the bottom of the page.
2. **Suggestion:** Give it more prominence, perhaps as a callout box after the Series Branding section: "Publishing regularly? Lock in covers at $50 each with our quarterly retainer."

**Status:** Retainer card now has gold border highlight (border-gold/30 bg-gold/[0.03]) and updated copy: "Publishing regularly? Lock in covers at $50 each."

### 3.3 Recommended Simplified Package Structure for Launch

Given that you're just starting and need to acquire your first clients, consider launching with a simplified structure and expanding later:

**Option A — Streamlined (Recommended for Launch)**

| #   | Category                 | Tiers                                            | Notes                                             |
| --- | ------------------------ | ------------------------------------------------ | ------------------------------------------------- |
| 1   | Ebook Cover Design       | Standard ($99) / Premium ($175)                  | Raised prices, still competitive                  |
| 2   | Series Branding          | 3-book ($275) / 5-book ($475) / 8+ book ($800)   | Slightly raised, includes covers + logo + box set |
| 3   | Children's Picture Books | Standard ($500) / Premium ($1,000)               | Keep as-is, strong offering                       |
| 4   | Full Pipeline            | 3-book ($450) / 5-book ($800) / 8+ book ($1,400) | Priced below sum-of-parts to incentivize bundles  |

Additional changes:

1. Remove Series Architecture as a standalone service — fold it into the Full Pipeline only
2. Move Updates & Revisions to a separate page or collapsible section
3. Keep Rush Fee and Returning Client Discount as add-ons
4. This gives you 4 categories and 9 main packages instead of 5 categories and 13 packages — cleaner, easier to explain, easier to market

---

## Part 4: Website Improvement Suggestions

### 4.1 Homepage Improvements -- DONE

The homepage is minimal — logo, one headline, two buttons. Consider adding:

1. A few featured cover examples (3-4 best covers in a row) to immediately show quality
2. A brief "How It Works" section (the 4-step process currently only on the services page)
3. A trust indicator: "22 Published Books. 3 Complete Series. The Proof is the Portfolio."
4. An email signup CTA

**Status:** Trust indicator bar (22 books, 3 series, 100+ covers, 30+ portraits), 6 featured covers grid, How It Works 4-step section added. Hero description updated. Commit: `71e9e1b`.

### 4.2 Services Page Improvements -- DONE

1. Add anchor navigation at the top (jump links to each service category)
2. Add a "Compare Packages" summary table at the top so visitors can see all options at a glance
3. Add "Save X%" badges to Full Pipeline packages
4. Add a FAQ section addressing common questions (turnaround, revision process, file formats, etc.)
5. Make the contact email more prominent

**Status:** Anchor nav bar with 5 jump links (Covers, Branding, Children's, Full Pipeline, FAQ). FAQ section with 6 Q&As. "Questions Before You Order?" section with email. Save badges done previously. Commit: `71e9e1b`.

### 4.3 Examples Page Improvements -- DONE

1. Add a brief intro explaining these are all created with the same pipeline available to clients
2. Consider adding a "Before/After" or "Process" section showing concept to final for one cover
3. Add CTAs between genre sections ("Like these? Get started")

**Status:** Inline CTA banner appears after 5th genre section when browsing all covers. Hero already had intro text. Commit: `71e9e1b`.

### 4.4 About Page Improvements -- DONE

1. The portfolio site links (ketanshukla.com, aztec.ketanshukla.com, etc.) are good proof but open in the same tab — they should open in new tabs
2. Consider adding a photo or avatar of the founder (there's a `ketan-shukla.jpeg` in the portfolio folder that appears unused on the about page)

**Status:** External links already had target="\_blank" rel="noopener noreferrer". Founder photo (96px circle) added to hero. Commit: `71e9e1b`.

### 4.5 Technical Improvements -- DONE

1. **Add a sitemap.xml** — critical for SEO indexing
2. **Add Open Graph images** — when someone shares a link on Twitter/Facebook, it should show a branded image, not nothing
3. **Add Vercel Analytics** — `npm i @vercel/analytics` and one import in the root layout
4. **Consider a contact form** — even a simple one that sends to your email via a service like Formspree or Resend
5. **Image optimization** — the example covers are served from `/public` as static files. Consider using Next.js `<Image>` component for automatic optimization (WebP, lazy loading, responsive sizing) if not already done everywhere
6. **Add `rel="noopener noreferrer"` to external links** — security best practice

**Status:** Sitemap, OG, Analytics done in earlier tasks. External links already had correct attributes. Next.js `<Image>` already used throughout. Contact form deferred (requires third-party service).

---

## Part 5: Marketing Readiness Assessment

### 5.1 What's Ready

1. 53 tweets pre-written with images and alt text
2. 6 TikTok/Shorts video scripts fully produced
3. Per-platform upload guides for TikTok, YouTube, Facebook
4. Marketing strategy document with tiered spending recommendations
5. Blog content for SEO (8 substantive posts)

### 5.2 What's Missing

1. **No Reedsy profile** — identified as your #1 priority in marketing-strategy.md but not yet created
2. **No Pinterest Business account** — identified as #2 priority
3. **No email list infrastructure** — no Kit/ConvertKit setup, no lead magnet created
4. **No social media profiles linked from the website**
5. **No analytics to measure anything**

### 5.3 Recommended Immediate Marketing Actions

1. Set up Vercel Analytics on the site
2. Create profiles on Reedsy and Pinterest
3. Set up Kit (ConvertKit) with an email capture form on the site
4. Add social media links to the footer
5. Start posting the pre-built tweets (the launch sequence is already planned)
6. Upload the first 2-3 video scripts to TikTok/YouTube

---

## Part 6: Competitive Positioning Notes

### 6.1 Strongest Differentiator

Your strongest differentiator is that **you've used your own pipeline to publish 22 real books**. Most cover designers show client work or mockups. You show your own published, live-on-Amazon books. This is a trust signal that's hard to fake.

### 6.2 Messaging Tension

There's a tension in the messaging: the site positions itself as a "studio" or "team" ("We create," "We begin working") but it's a one-person operation. This is common and acceptable in the freelance/creative industry, but be aware that if a client expects a team and discovers it's one person, it could feel misleading.

**Suggestions:**

1. Lean into the personal brand ("I've published 22 books and now I'll do the same for yours"), OR
2. Commit fully to the studio framing — but don't mix them
3. The about page currently walks a middle line that could go either way

---

## Summary of Highest-Impact Changes (Ranked)

1. **Fix the testimonials** — reframe as case studies or remove until you have real clients -- DONE
2. **Add analytics** — you can't improve what you can't measure -- DONE
3. **Add email capture** — most visitors won't buy on first visit
4. **Simplify the package structure** — 4 categories, 9 packages for launch -- DONE
5. **Audit Full Pipeline pricing** — the Standard tier costs more than buying separately -- DONE
6. **Add SEO essentials** — OG tags, sitemap, structured data -- DONE
7. **Add social links to footer** — connect your pre-built social content to the site -- DONE
8. **Make contact info prominent** — not everyone is ready to buy immediately -- DONE
9. **Raise cover design prices slightly** — your portfolio supports $99-$175, not $75-$150 -- DONE
10. **Move Updates & Revisions off the main services page** — reduce cognitive load for new visitors -- DONE

---

## Aztec Series Logo Background Fix -- DONE

**File:** `src/app/testimonials/page.tsx`

**Problem:** Logo container used `bg-surface-light` (#111111) and referenced wrong file (`series-logo.jpg` with gold-ish background).

**Fixes applied:**

1. Changed container background from `bg-surface-light` to `bg-black` (commit `20058be`)
2. Changed image source from `series-logo.jpg` to `series-logo.png` (the correct original with black background, matching the blog page) (commit `147e290`)

---

## Files That Would Be Modified

- `src/app/layout.tsx` — SEO metadata, OG tags, analytics
- `src/app/page.tsx` — homepage content enhancements
- `src/app/services/page.tsx` — package restructuring, pricing, FAQ, anchor nav
- `src/app/testimonials/page.tsx` — reframe as case studies or remove
- `src/app/about/page.tsx` — founder photo, external link targets
- `src/app/examples/page.tsx` — intro text, CTAs between sections
- `src/components/Footer.tsx` — social links, contact email
- `src/app/globals.css` — any new styling needed
- New files: `src/app/sitemap.ts`, `src/app/robots.ts`, possibly `src/app/contact/page.tsx`

---

---

# Author Portfolio (ketanshukla.com) — Updated Full Analysis (February 2026)

> Full re-analysis based on reading every component, page, and data file in `E:\author-portfolio`. The sections above are for the Metronagon business site. This section covers the **author portfolio** site only.

---

## What the Site Is

A single-page author portfolio for Ketan Shukla. Built with Next.js 16.1.6 + Tailwind CSS v4 + TypeScript. Dark luxury aesthetic (gold on black, EB Garamond serif). One route (`/`) with four sections rendered in order: Hero → SeriesShowcase → AuthorSection → Footer. A `BookModal` overlay is rendered globally via `BookProvider` context and opens on any book cover click or "Book Details" button.

**Stack:** Next.js 16.1.6 (Turbopack), Tailwind CSS v4, TypeScript, Lucide icons, EB Garamond + Inter (Google Fonts), no analytics, no third-party services.

---

## Part 1: What the Site Does Well

1. **Visual identity is strong and consistent** — gold on black, EB Garamond headings, glass morphism cards, gold-frame borders. Reads as premium and distinctive.
2. **Book modal is fully functional and unified** — clicking any book cover or "Book Details" button opens a rich overlay with cover image, act badge (Aztec only), title, subtitle, focus character (Aztec only), epigraph, elaborate description, and full chapter-by-chapter breakdown. Keyboard navigation (arrow keys + Escape) and on-screen chevrons both work.
3. **All 22 books have real Amazon buy links for Reality and Repetition** — Kindle and Paperback buttons on every book card with correct ASINs.
4. **Series buy links are correct** — "Buy The Complete Series on Amazon" buttons use real ASINs (`B0GMXS6LHQ` for Reality, `B0GNZ7B92N` for Repetition). Aztec falls back to `amazon.com` gracefully.
5. **Mobile responsiveness is solid** — viewport meta disables scaling, touch zoom blocked via JS event listeners, responsive grid layouts throughout, `100dvh` used in modal.
6. **Image protection is in place** — `ImageProtection.tsx` disables right-click context menu. CSS also disables `user-select`, `user-drag`, and `touch-callout` on all images.
7. **Author section is personal and well-written** — genuine bio, writing philosophy quotes, stats grid, series cards with correct external links.
8. **Box set structure for Aztec is well-organised** — three acts (Books 1–4, 5–8, 9–12) each with a landscape cover image, then individual book cards below each act.
9. **Footer is data-driven** — pulls from `seriesData.ts`, so adding a new series automatically adds a footer column. Buy links are correct per series.
10. **Scroll-to-top button** — appears after 500px scroll, smooth scroll to top.

---

## Part 2: Issues & Recommended Changes

### 2.1 — CRITICAL: No SEO / Open Graph / Sitemap / robots.txt

`layout.tsx` has a `metadata` object with title, description, and keywords — but nothing else:

- **No `metadataBase`** — Next.js will warn and all OG image URLs will be relative, breaking social sharing previews entirely.
- **No `openGraph` block** — sharing on Twitter/Facebook/LinkedIn shows a blank or broken preview.
- **No `twitter` block** — no Twitter Card tags.
- **No `sitemap.ts`** — Google cannot discover the site structure.
- **No `robots.ts`** — no crawl instructions.
- **No JSON-LD structured data** — no `Person`, `Book`, or `WebSite` schema. Google cannot understand who this is or what the books are.
- **No `alternates.canonical`** — no canonical URL declared.

**Impact:** If anyone shares this site on social media, it shows a blank preview. Google indexes it slowly and without rich results. This is the single highest-priority fix for a public author portfolio.

**Recommended additions to `layout.tsx`:**

```ts
metadataBase: new URL("https://ketanshukla.com"),
openGraph: {
  title: "Ketan Shukla — Author of Fiction & Non-Fiction Book Series",
  description: "Twenty-two books across three series...",
  url: "https://ketanshukla.com",
  siteName: "Ketan Shukla",
  images: [{ url: "/images/og-cover.png", width: 1200, height: 630 }],
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "Ketan Shukla — Author",
  description: "Twenty-two books across three series...",
  images: ["/images/og-cover.png"],
},
alternates: { canonical: "https://ketanshukla.com" },
```

Also add `src/app/sitemap.ts` and `src/app/robots.ts` (trivial in Next.js App Router), and a JSON-LD `<script>` block in the layout for `Person` + `WebSite` schema.

---

### 2.2 — CRITICAL: Aztec Buy Buttons Link to Generic Amazon Homepage

Every Aztec book card has "Buy Kindle" and "Buy Paperback" buttons. Both `kindleUrl` and `paperbackUrl` are empty strings (`""`) in `seriesData.ts`. The `BookCard` component falls back to `https://www.amazon.com` — so clicking any Aztec buy button dumps the reader on Amazon's homepage with no context.

This looks broken to any visitor who clicks.

**Recommended fix:** In `BookCard`, check if `kindleUrl` is empty and render a muted "Coming Soon" badge instead of the Amazon button:

```tsx
{book.kindleUrl ? (
  <a href={book.kindleUrl} ...>Buy Kindle</a>
) : (
  <span className="...text-white/20 text-xs text-center py-1.5">Coming Soon</span>
)}
```

---

### 2.3 — HIGH: No Buy Buttons Inside the BookModal

The Book Details modal shows cover, epigraph, description, and all chapters — but has **no buy buttons**. A reader who opens the modal, reads the full description and chapter list, and is convinced to buy must then: close the modal → find the right book card → click the buy button. This is unnecessary friction at the highest-intent moment.

**Recommended fix:** Add Kindle and Paperback buy buttons at the bottom of the modal content (above the footer nav), shown conditionally only when the URLs are non-empty. This is the highest-converting placement on the page.

---

### 2.4 — HIGH: No Navigation Header

The site has no navigation bar or sticky header. There is no way to jump between sections without scrolling. On a page with 12 Aztec books + 5 + 5 = 22 book cards across three large series frames, this is a real usability problem — especially on mobile where each series frame is very tall.

**Recommended fix:** Add a sticky header with:

- Author name/logo on the left
- Anchor links: `#series` and `#author`
- An Amazon or contact CTA on the right
- Hamburger menu on mobile

---

### 2.5 — MEDIUM: No Contact Method or Social Links

The footer has no email address, no social media links, no contact method of any kind. The only external links are to the three series websites and Amazon. If a reader, journalist, publisher, or collaborator wants to reach Ketan Shukla, there is no way to do so from this site.

**Recommended additions to footer:**

- Email link (`mailto:` address)
- Links to any active social profiles (X/Twitter, Goodreads, Instagram)
- **Goodreads is especially important for fiction authors** — readers check Goodreads before buying. A Goodreads author page with all 22 books listed is free and drives real discovery.

---

### 2.6 — MEDIUM: No Analytics

No Vercel Analytics, no Google Analytics, no Plausible. There is no way to know how many people visit, which books they click, or whether they follow through to Amazon.

**Recommended fix:** Add `@vercel/analytics` — one `npm install` and one import in `layout.tsx`. Free on Vercel Hobby plan. Gives page views, traffic sources, and top pages automatically.

---

### 2.7 — LOW: `favicon.svg` Referenced But Doesn't Exist

`layout.tsx` has `icons: { icon: "/favicon.svg" }` but the only favicon file in `src/app/` is `favicon.ico`. The SVG favicon 404s silently — the browser tab shows no icon.

**Fix:** Change to `icons: { icon: "/favicon.ico" }` — one character change.

---

### 2.8 — LOW: Author Photo Appears Twice

The same `ketan-shukla.jpeg` appears in both the Hero section (128–160px circle at the very top) and the Author section further down (160px circle). On a single-page site this feels repetitive within a few scrolls.

**Options:**

- Remove the photo from the Hero and keep only the larger one in the Author section, OR
- Use a different photo in one location

---

### 2.9 — LOW: Stats Are Duplicated (Hero + Author Section)

Hero shows: 3 Series / 22 Books / 388 Chapters.
Author section shows the same numbers in a 2×2 grid: 22 Books / 3 Series / 388 Chapters / 2 Genres.

The reader sees the same stats twice within a few scrolls.

**Recommended fix:** Remove the stats row from `Hero.tsx`. Keep the full stats grid only in `AuthorSection.tsx` where they have more context around them.

---

### 2.10 — LOW: "2 Genres" Stat Is the Weakest of the Four

The Author section stats grid shows "2 Genres" as one of four key numbers. It's obvious from the content that there are fiction and non-fiction books — this stat doesn't impress or inform.

**Better replacement options:**

- **50** Non-fiction chapters (Reality + Repetition combined)
- **288** Aztec chapters (impressive standalone number)
- **3** Acts (Aztec structure — more evocative than "2 genres")
- Drop the 4th stat and use a 3-column grid instead

---

### 2.11 — LOW: Series Order Buries the Purchasable Books

Current order: **Aztec → Repetition → Reality**

Aztec is the longest (12 books, 3 box sets, 3 landscape images) and takes up the most vertical space. A visitor scrolls through all of Aztec before reaching the non-fiction series — which are the only ones with active Amazon buy links and real purchase potential right now.

**Suggested order:** Reality → Repetition → Aztec (or Repetition → Reality → Aztec), with Aztec last since it has no buy links yet. This puts the purchasable books first.

---

### 2.12 — LOW: No OG Cover Image Asset Exists

Once OG tags are added (see 2.1), a 1200×630px branded image is needed for social sharing previews. No such image currently exists in `public/`. This should show the author name, a selection of book covers, and the tagline. Without it, social shares show a blank preview even after adding the OG metadata.

---

## Part 3: Priority Ranking

| Priority | Issue                                              | Effort   | Impact               |
| -------- | -------------------------------------------------- | -------- | -------------------- |
| 🔴 1     | Add OG / Twitter / sitemap / robots / JSON-LD      | Low      | Very High            |
| 🔴 2     | Fix Aztec buy buttons (hide or show "Coming Soon") | Very Low | High                 |
| 🔴 3     | Add buy buttons inside BookModal                   | Low      | High                 |
| 🟡 4     | Add sticky navigation header                       | Medium   | High                 |
| 🟡 5     | Add contact email + social links to footer         | Very Low | Medium               |
| 🟡 6     | Add Vercel Analytics                               | Very Low | Medium               |
| 🟡 7     | Reorder series (Reality/Repetition before Aztec)   | Very Low | Medium               |
| 🟢 8     | Fix favicon reference (svg → ico)                  | Very Low | Low                  |
| 🟢 9     | Remove duplicate stats from Hero                   | Very Low | Low                  |
| 🟢 10    | Remove duplicate author photo from Hero            | Very Low | Low                  |
| 🟢 11    | Replace "2 Genres" stat with something stronger    | Very Low | Low                  |
| 🟢 12    | Add Goodreads author profile link                  | Low      | Medium               |
| 🟢 13    | Create OG cover image (1200×630px)                 | Medium   | High (needed for #1) |

---

## Part 4: Quick Wins (Can Be Done Immediately)

All of these are small, safe, high-value changes requiring minimal code:

1. **Fix favicon** — change `icon: "/favicon.svg"` to `icon: "/favicon.ico"` in `layout.tsx`
2. **Hide Aztec buy buttons** — in `BookCard`, render "Coming Soon" when `kindleUrl === ""`
3. **Add buy buttons to BookModal** — Kindle + Paperback links at bottom of modal, shown only when URLs are non-empty
4. **Remove duplicate stats from Hero** — delete the stats row from `Hero.tsx`
5. **Reorder series** — swap array order in `seriesData.ts` to Reality → Repetition → Aztec
6. **Add email to footer** — one `<a href="mailto:...">` in `Footer.tsx`
7. **Add Vercel Analytics** — `npm i @vercel/analytics`, one import in `layout.tsx`
