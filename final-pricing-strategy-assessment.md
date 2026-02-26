# Final Pricing Strategy Assessment — Metronagon Media

**Date:** February 25, 2026
**Purpose:** Comprehensive analysis of all pricing changes made to the services page, review of the proposed Reedsy-aligned redesign document, and a final recommendation.

---

## Part 1: Complete History of What Changed

Your services page pricing has gone through **three distinct eras**. Here is the full timeline with every price at each stage.

### Era 1: Original Launch Prices (commit `5f80a8e`)

The first version of the services page with the lowest prices:

| Package | Price |
| --- | --- |
| Cover — Standard | $99 |
| Cover — Premium | $175 |
| Branding — 3 Books | $275 |
| Branding — 5 Books | $475 |
| Branding — 8+ Books | $800 |
| Children's — Standard | $500 |
| Children's — Premium | $1,000 |
| Pipeline — 3 Books | $425 |
| Pipeline — 5 Books | $800 |
| Pipeline — 8+ Books | $1,400 |

**Updates & Revisions (Era 1):**

| Service | Price |
| --- | --- |
| Cover — Minor Revision | $20 |
| Cover — Major Revision | $50 |
| Add New Book Cover | $85 |
| Logo Refresh | $100 |
| New Box Set Cover | $75 |
| Add Book to Plan | $100 |
| Plan Restructure | $175 |
| Book Description Update | $20 |
| Children's — Page Edit | $25/pg |
| Children's — Add Page | $40/pg |
| Children's — New Character | $50 |

---

### Era 2: Reedsy-Competitive Prices (commit `14af443`)

Prices were raised dramatically to match the Reedsy marketplace range:

| Package | Era 1 | Era 2 | Change |
| --- | --- | --- | --- |
| Cover — Standard | $99 | **$500** | +405% |
| Cover — Premium | $175 | **$750** | +329% |
| Branding — 3 Books | $275 | **$1,200** | +336% |
| Branding — 5 Books | $475 | **$2,000** | +321% |
| Branding — 8+ Books | $800 | **$3,000** | +275% |
| Children's — Standard | $500 | **$1,800** | +260% |
| Children's — Plus | N/A | **$2,200** | New tier |
| Children's — Premium | $1,000 | **$2,800** | +180% |
| Pipeline — 3 Books | $425 | **$1,800** | +324% |
| Pipeline — 5 Books | $800 | **$2,800** | +250% |
| Pipeline — 8+ Books | $1,400 | **$5,000** | +257% |

**Updates & Revisions (Era 2):**

| Service | Era 1 | Era 2 |
| --- | --- | --- |
| Cover — Minor Revision | $20 | **$75** |
| Cover — Major Revision | $50 | **$200** |
| Add New Book Cover | $85 | **$400** |
| Logo Refresh | $100 | **$250** |
| New Box Set Cover | $75 | **$200** |
| Add Book to Plan | $100 | **$175** |
| Plan Restructure | $175 | **$350** |
| Book Description Update | $20 | **$75** |
| Children's — Page Edit | $25/pg | **$75/pg** |
| Children's — Add Page | $40/pg | **$100/pg** |
| Children's — New Character | $50 | **$150** |

**Additional items in Era 2:**
- Series Expansion Retainer: $150/quarter
- Scope included: style guides, YouTube thumbnails, panoramic covers, author portraits, series bibles

---

### Era 3: Current "Beginner-Friendly" Prices (commit `33006dd`) ← YOU ARE HERE

Prices were dropped significantly from Era 2. Scope was narrowed. Several services were removed.

| Package | Era 2 | Era 3 (Current) | Change |
| --- | --- | --- | --- |
| Cover — Standard | $500 | **$150** | -70% |
| Cover — Premium | $750 | **$250** | -67% |
| Branding — 3 Books | $1,200 | **$400** | -67% |
| Branding — 5 Books | $2,000 | **$600** | -70% |
| Branding — 8+/10 Books | $3,000 | **$950** | -68% |
| Children's — Standard | $1,800 | **$500** | -72% |
| Children's — Plus | $2,200 | **$700** | -68% |
| Children's — Premium | $2,800 | **$900** | -68% |
| Pipeline — 3 Books | $1,800 | **$550** | -69% |
| Pipeline — 5 Books | $2,800 | **$850** | -70% |
| Pipeline — 8+/10 Books | $5,000 | **$1,350** | -73% |

**Updates & Revisions (Era 3 / Current):**

| Service | Era 2 | Era 3 (Current) |
| --- | --- | --- |
| Cover — Minor Revision | $75 | **$35** |
| Cover — Major Revision | $200 | **$100** |
| Add New Book Cover | $400 | **$125** |
| Logo Refresh | $250 | **$100** |
| New Box Set Front Cover | $200 | **$100** |
| Book Description Update | $75 | **$35** |
| Children's — Page Edit | $75/pg | **$35/pg** |
| Children's — Add Page | $100/pg | **$50/pg** |
| Children's — New Character | $150 | **$75** |

---

## Part 2: Full List of Files Changed in the Pricing Redesign

The commit `33006dd` ("Simplify services: beginner pricing, front-cover-only scope, remove extras") touched **27 files**:

### Modified Files (24)

1. **`src/app/services/page.tsx`** — The main services page. All prices dropped, scope narrowed to front-cover-only, section renamed from "Ebook Cover Design" to "Front Cover Design", "8+ Books" changed to "10 Books", Series Expansion Retainer add-on card removed, delivery times shortened, FAQ rewritten, new FAQ added ("What exactly is a front cover?"), "Series Architecture" removed from scope descriptions.

2. **`src/app/services/layout.tsx`** — Minor metadata update to match new scope wording.

3. **`REEDSY-COMPETITIVE-PRICES.md`** — Completely rewritten from a Reedsy-competitive pricing document into an "Honest Assessment for a Beginner" document. Previous content (detailed Reedsy marketplace analysis, service-by-service comparison, bundling advantage narrative) was replaced with the current beginner-focused rationale, scope clarification, and price evolution roadmap.

4. **`book-package-descriptions/ebook-cover-standard.txt`** — Price updated ($500 → $150), scope clarified as front cover only
5. **`book-package-descriptions/ebook-cover-premium.txt`** — Price updated ($750 → $250), scope clarified
6. **`book-package-descriptions/series-branding-starter.txt`** — Price updated ($1,200 → $400)
7. **`book-package-descriptions/series-branding-standard.txt`** — Price updated ($2,000 → $600)
8. **`book-package-descriptions/series-branding-premium.txt`** — Price updated ($3,000 → $950), "8+ Books" → "10 Books"
9. **`book-package-descriptions/childrens-book-standard.txt`** — Price updated ($1,800 → $500)
10. **`book-package-descriptions/childrens-book-plus.txt`** — Price updated ($2,200 → $700)
11. **`book-package-descriptions/childrens-book-premium.txt`** — Price updated ($2,800 → $900)
12. **`book-package-descriptions/pipeline-starter.txt`** — Price updated ($1,800 → $550)
13. **`book-package-descriptions/pipeline-standard.txt`** — Price updated ($2,800 → $850)
14. **`book-package-descriptions/pipeline-premium.txt`** — Price updated ($5,000 → $1,350), "8+ Books" → "10 Books"
15. **`book-package-descriptions/addon-rush-fee.txt`** — Minor text update
16. **`book-package-descriptions/update-cover-minor-revision.txt`** — Price updated ($75 → $35)
17. **`book-package-descriptions/update-cover-major-revision.txt`** — Price updated ($200 → $100)
18. **`book-package-descriptions/update-add-new-book-cover.txt`** — Price updated ($400 → $125)
19. **`book-package-descriptions/update-logo-refresh.txt`** — Price updated ($250 → $100)
20. **`book-package-descriptions/update-new-box-set-cover.txt`** — Price updated ($200 → $100)
21. **`book-package-descriptions/update-book-description.txt`** — Price updated ($75 → $35)
22. **`book-package-descriptions/update-childrens-page-edit.txt`** — Price updated ($75/pg → $35/pg)
23. **`book-package-descriptions/update-childrens-add-page.txt`** — Price updated ($100/pg → $50/pg)
24. **`book-package-descriptions/update-childrens-new-character.txt`** — Price updated ($150 → $75)

### Deleted Files (3)

25. **`book-package-descriptions/addon-series-expansion-retainer.txt`** — Removed entirely (was $150/quarter)
26. **`book-package-descriptions/update-add-book-to-plan.txt`** — Removed entirely (was $175)
27. **`book-package-descriptions/update-plan-restructure.txt`** — Removed entirely (was $350)

### Key Structural Changes (Not Just Price)

Beyond prices, the commit made these structural changes:

- **Renamed "Ebook Cover Design" → "Front Cover Design"** — Clarified that you sell front cover images only, not full print wraps with spine and back cover
- **Changed "8+ Books" → "10 Books"** — Capped the top branding and pipeline tiers at exactly 10 books
- **Removed the Series Expansion Retainer** — Was a $150/quarter add-on for locked-in $50/cover pricing
- **Removed "Add Book to Plan" and "Plan Restructure"** — Simplified the updates/revisions menu
- **Shortened all delivery times** — Most packages now promise 1–2 business days instead of 2–7+ days
- **Rewrote FAQ section** — Added new FAQ explaining what "front cover" means, removed print wrap FAQ, removed Series Expansion Retainer FAQ, updated all price references
- **Narrowed scope declarations** — Removed references to style guides, YouTube thumbnails, panoramic covers, author portraits, series bibles, and story writing from package descriptions

---

## Part 3: Analysis of the Reedsy-Aligned Redesign Document

The file `metronagon_services_pricing_redesign_reedsy_aligned.md` proposes a completely different pricing and service structure. Here is my analysis:

### What the Document Proposes

| Category | Package | Proposed Price |
| --- | --- | --- |
| **Book Cover Design** | Essential Ebook Cover | $449 |
| | Print + Ebook Cover (Full Wrap) | $699 |
| | Signature Cover (Illustration-Heavy) | $1,095 |
| **Series Branding** | Series System — 3 Books | $1,950 |
| | Series System — 5 Books | $3,050 |
| | Series System — 10 Books | $5,650 |
| **Children's Books** | Storyboard + Character Pack | $950 |
| | 32-Page Illustration — Starter | $3,900 |
| | 32-Page Illustration — Premium | $6,500 |
| **Launch Kits** | Single-Book Launch Kit | $1,450 |
| | Series Launch Kit — 3 Books | $4,250 |
| | Series Launch Kit — 5 Books | $6,250 |

**Add-ons proposed:** Extra concept ($125), extra revision ($90), box set cover ($395), social pack ($295), A+ Content ($350), rush delivery (+35%).

**Also includes:** Founder Pricing (20% off first 6 clients), AI Transparency section.

### How the Proposed Prices Compare

| Package | Current (Era 3) | Proposed (Reedsy-Aligned) | Increase |
| --- | --- | --- | --- |
| Cover — Standard/Essential | $150 | $449 | +199% |
| Cover — Premium/Full Wrap | $250 | $699 | +180% |
| Cover — N/A / Signature | N/A | $1,095 | New tier |
| Branding — 3 Books | $400 | $1,950 | +388% |
| Branding — 5 Books | $600 | $3,050 | +408% |
| Branding — 10 Books | $950 | $5,650 | +495% |
| Children's — Standard/Starter | $500 | $3,900 | +680% |
| Children's — Plus / N/A | $700 | N/A | Removed |
| Children's — Premium | $900 | $6,500 | +622% |
| Pipeline / Launch Kit — 3 Books | $550 | $4,250 | +673% |
| Pipeline / Launch Kit — 5 Books | $850 | $6,250 | +635% |

### My Assessment of the Document

**What it gets right:**

1. **Founder Pricing is a smart concept.** Offering 20% off to the first 6 clients in exchange for a testimonial and portfolio permission is an elegant way to discount without permanently anchoring low. It's a limited offer, not a permanent price.

2. **AI Transparency is a good addition.** Having a clear policy on AI usage builds trust, especially on Reedsy where professionals are expected to disclose their tools and methods.

3. **The "Full Wrap" tier is an interesting expansion** — offering spine + back cover design as a separate, higher-priced tier rather than trying to include it in the base package. This acknowledges that you currently only do front covers and positions the full wrap as a premium upgrade.

4. **The structural reorganization is cleaner.** Four clear categories (Covers, Series, Children's, Launch Kits) with 3 tiers each is easy to understand.

**What concerns me:**

1. **The prices are dramatically higher than even Era 2.** The Reedsy-aligned prices aren't just going back to the previous rates — they're significantly higher. Era 2 Series Branding (3 Books) was $1,200; this proposes $1,950. Era 2 Children's Standard was $1,800; this proposes $3,900. These prices are in the upper-middle of the established Reedsy range, not the entry level.

2. **The scope expansion contradicts the recent scope narrowing.** The Era 3 commit deliberately narrowed scope to "front cover only" with an honest assessment that you don't do spines, back covers, style guides, or marketing assets. The Reedsy-aligned document now proposes selling full wraps ($699), marketing kits with 8–18 social graphics, 3D mockups, and Amazon thumbnail optimization. This reverses the scope honesty of the current pricing.

3. **The children's book pricing is extremely aggressive.** $3,900 for 32 pages is $122/illustration. The current $500 price is ~$15/illustration. Even established Reedsy children's illustrators typically charge $1,800–$2,500. The proposed $3,900–$6,500 range sits at or above the high end of the Reedsy market.

4. **Launch Kits are entirely new deliverables.** Social graphics, 3D mockups, and Amazon thumbnail optimization passes are services you don't currently offer and haven't demonstrated in your portfolio. Selling them at $1,450–$6,250 before having any examples or client history with these specific deliverables is risky.

5. **The "first 6 clients" Founder Pricing doesn't solve the core trust problem.** Even with 20% off, the Essential Ebook Cover is still $359. That's above what most clients would pay an unreviewed designer. The discount helps psychologically, but the base prices are so high that the discounted prices are still premium.

6. **No paid client work exists yet.** This is the fundamental issue. The document acknowledges your portfolio is real and impressive — but it's all self-work. The Reedsy-aligned prices assume a level of marketplace trust that hasn't been established through client reviews, ratings, or testimonials.

---

## Part 4: The Three Eras Side-by-Side

| Package | Era 1 (Original) | Era 2 (Reedsy) | Era 3 (Current) | Proposed (Reedsy-Aligned Doc) |
| --- | --- | --- | --- | --- |
| Cover — Standard | $99 | $500 | **$150** | $449 |
| Cover — Premium | $175 | $750 | **$250** | $699 |
| Branding — 3 Books | $275 | $1,200 | **$400** | $1,950 |
| Branding — 5 Books | $475 | $2,000 | **$600** | $3,050 |
| Branding — 10 Books | $800 | $3,000 | **$950** | $5,650 |
| Children's — Standard | $500 | $1,800 | **$500** | $3,900 |
| Children's — Plus | N/A | $2,200 | **$700** | N/A |
| Children's — Premium | $1,000 | $2,800 | **$900** | $6,500 |
| Pipeline — 3 Books | $425 | $1,800 | **$550** | $4,250 |
| Pipeline — 5 Books | $800 | $2,800 | **$850** | $6,250 |
| Pipeline — 10 Books | $1,400 | $5,000 | **$1,350** | N/A |

---

## Part 5: Final Assessment & Recommendation

### The Core Question

You have three choices:

1. **Stay at current prices (Era 3)** — $150–$1,350 range
2. **Revert to Reedsy-competitive prices (Era 2)** — $500–$5,000 range
3. **Adopt the Reedsy-aligned redesign** — $449–$6,500 range

### My Honest Assessment

**The current Era 3 prices are the right starting point, but they have a shelf life.**

Here's why:

**In favor of staying at current prices (Era 3):**

- You have zero paid clients and zero reviews. This is the single most important factor. No amount of portfolio quality overcomes the trust gap of "this person has never done this for someone who paid them."
- $150 for a cover is accessible enough that an author might think: "The portfolio looks great, the price is low enough that even if it doesn't work out, I haven't lost much." That's exactly the psychology you need for your first 10–15 clients.
- The scope is honest. You sell what you actually deliver — front covers, logos, box set front images, and children's illustrations. No overselling.
- The delivery times are aggressive (1–2 days) which is a genuine competitive advantage. Fast turnaround at fair prices is a real value proposition.
- Every package is deliverable by one person without burning out.

**Against staying at current prices forever:**

- $150 for a cover *does* feel cheap to some buyers. Not all price-sensitive behavior goes in the direction you'd expect — some authors will skip you specifically because "$150 seems too low to be professional."
- The children's book at $500 for 32 illustrations is genuinely underpriced. Even with zero reviews, the sheer volume of work involved makes $500 feel like you don't value your own time.
- As reviews accumulate, these prices will leave significant money on the table.

**Against reverting to Era 2 prices right now:**

- The same trust problem exists. $500 for one cover from someone with no client reviews is a harder sell than $150.
- The Era 2 scope was overblown — style guides, YouTube thumbnails, panoramic covers, series bibles. You can't consistently deliver all of that solo.
- You already recognized this and deliberately moved away from it.

**Against adopting the Reedsy-aligned document right now:**

- The proposed prices are *higher* than Era 2. Series branding at $1,950–$5,650 and children's books at $3,900–$6,500 put you in the upper half of the established Reedsy range before you've sold a single project.
- The scope expansion (full wraps, social graphics, 3D mockups, marketing kits) introduces deliverables you haven't demonstrated.
- Even with 20% Founder Pricing, a $449 ebook cover (discounted to ~$359) is still well above what an unreviewed designer can typically command.

### My Recommendation

**Stay at current prices (Era 3) for now. But plan a structured price increase tied to specific milestones — not a sudden jump back to Reedsy rates.**

Here's the path I'd suggest:

| Milestone | Action |
| --- | --- |
| **0 reviews (now)** | Keep current prices. Focus entirely on landing first clients. |
| **5 reviews (all 5-star)** | Raise covers to $200–$300. Raise branding proportionally. |
| **10 reviews** | Raise covers to $300–$400. Consider adding a "Full Wrap" tier at $500–$600. |
| **20+ reviews** | Approach the Era 2 range ($500+ covers). Begin cherry-picking ideas from the Reedsy-aligned doc (Founder Pricing badge, AI Transparency, Launch Kits if you've built examples). |
| **Reedsy profile with 15+ ratings** | Fully adopt Reedsy-competitive pricing. The social proof now justifies it. |

**From the Reedsy-aligned document, adopt these ideas now (without changing prices):**

- ✅ **AI Transparency section** — Add this to the services page. It costs nothing and builds trust.
- ✅ **Founder Pricing concept** — Not at $449 base prices, but at *current* prices. Offer "first 10 clients get 10% off + priority delivery" in exchange for a testimonial. This creates urgency and starts the review flywheel.
- ✅ **Cleaner 4-step process** — The intake → concepts → refine → production flow is better than the current "How it Works" section.

**From the Reedsy-aligned document, save these for later:**

- ⏳ Full Wrap tier — Add once you've proven the front-cover workflow with clients
- ⏳ Launch Kits — Add once you've created social graphics / 3D mockups for actual clients
- ⏳ Storyboard + Character Pack as a standalone — Add once you've done full children's books for clients
- ⏳ $449+ cover pricing — Add once reviews justify it

### Bottom Line

The current prices are the right tool for the job you need to do right now: **land your first clients and get reviews.** The Reedsy-aligned document describes where you want to end up, not where you should start. Treat it as a Year 2 roadmap, not a tomorrow action plan.
