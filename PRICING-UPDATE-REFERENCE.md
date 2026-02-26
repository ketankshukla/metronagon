# Pricing Update Reference — Professional Tier

**Date:** February 26, 2025
**Commit:** `5bb1663` — "Update all pricing to professional tier, add AI Transparency to header navigation"
**Total files updated:** 52

---

## Pricing Source Document

| File | Description |
|------|-------------|
| `REEDSY-FINAL-PRICES.md` | The master pricing reference. All prices below are derived from this document. |

---

## 1. Website Code (2 files)

### `src/app/services/page.tsx`
- All 11 main package prices updated (Cover, Branding, Children's, Pipeline)
- All 9 add-on/revision prices updated
- All delivery times updated to new ranges
- FAQ section updated (Add New Book Cover price)

### `src/components/Header.tsx`
- Added AI Transparency link to desktop navigation
- Added AI Transparency link to mobile navigation

---

## 2. Reedsy Conversation Pipelines (11 files)

All files in `REEDSY-CONVERSATION-PIPELINES/`:

### `01-front-cover-standard.md`
- Package price: $150 → $450, delivery: 1 day → 3–5 days
- All cross-referenced prices (Premium, branding, add-ons) updated
- Milestone structure and Reedsy payment notes updated

### `02-front-cover-premium.md`
- Package price: $250 → $650, delivery: 2 days → 5–7 days
- All cross-referenced prices (Standard, branding, add-ons) updated
- Milestone structure and Reedsy payment notes updated

### `03-series-branding-3-books.md`
- Package price: $400 → $1,400, delivery: 2 days → 7–10 days
- All cross-referenced prices (individual covers, upgrades, add-ons) updated
- Value comparisons and milestone structure updated

### `04-series-branding-5-books.md`
- Package price: $600 → $2,200, delivery: 2 days → 10–14 days
- All cross-referenced prices (3-book, 10-book, individual covers, add-ons) updated
- Value comparisons and milestone structure updated

### `05-series-branding-10-books.md`
- Package price: $950 → $3,500, delivery: 3 days → 14–21 days
- All cross-referenced prices (5-book upgrade comparison, add-ons) updated
- Per-cover value, returning client discounts, milestone structure updated

### `06-childrens-book-standard.md`
- Package price: $500 → $1,800, delivery: 2 days → 10–14 days
- All cross-referenced prices (Plus, Premium, page edits, add pages, upgrade cost) updated
- Returning client discount and milestone structure updated

### `07-childrens-book-plus.md`
- Package price: $700 → $2,400, delivery: 2 days → 14–18 days
- All cross-referenced prices (Standard comparison, upgrade cost, add pages, hardcover reformat) updated
- Returning client discount and milestone structure updated

### `08-childrens-book-premium.md`
- Package price: $900 → $3,200, delivery: 3 days → 14–21 days
- All cross-referenced prices (Plus comparison, new character + page edit costs) updated
- Returning client discount and milestone structure updated

### `09-full-pipeline-3-books.md`
- Package price: $550 → $1,800, delivery: 2 days → 7–10 days
- All cross-referenced prices (Branding comparison, description update, 5-book upgrade) updated
- Value comparison table and milestone structure updated

### `10-full-pipeline-5-books.md`
- Package price: $850 → $2,800, delivery: 3 days → 10–14 days
- All cross-referenced prices (Branding + copywriter comparison, 10-book upgrade) updated
- Description update pricing, returning client discount, milestone structure updated

### `11-full-pipeline-10-books.md`
- Package price: $1,350 → $4,500, delivery: 4 days → 14–21 days
- All cross-referenced prices (a la carte comparison, add-ons, box set, description updates) updated
- Per-book value, returning client discounts, new series pricing, milestone structure updated

---

## 3. Stripe & Payment Documents (2 files)

### `STRIPE-PAYMENT-LINK-DESCRIPTIONS.md`
- All 22 Stripe product descriptions updated with new prices
- Delivery times updated across all products
- Cover Standard: $500 → $450, Premium: $750 → $650
- Branding: $1,200/$2,000/$3,000 → $1,400/$2,200/$3,500
- Children's: $1,800/$2,200/$2,800 → $1,800/$2,400/$3,200
- Pipeline: $1,800/$2,800/$5,000 → $1,800/$2,800/$4,500
- Major Revision: $200 → $250, Add New Cover: $400 → $350, New Character: $150 → $200

### `REEDSY-PAYMENTS.md`
- Example quote updated from $500 to $650
- Summary table net calculation updated

---

## 4. Business Plan (8 files)

All files in `metronagon-business-plan/`:

### `01-executive-summary.md`
- Service price ranges updated across all 4 categories
- Updates & Revisions range: $35–$125 → $75–$350
- Financial summary: average order value, monthly revenue, annual revenue targets updated
- Vision statement updated to reflect professional positioning
- Pricing rationale rewritten for professional-tier justification

### `03-products-and-services.md`
- All 11 main package prices and delivery times updated
- All 9 updates/revisions prices updated
- Per-cover equivalents recalculated for all branding packages
- Per-page equivalents recalculated for children's packages

### `04-market-analysis.md`
- Target customer budget range: $150–$1,350 → $450–$4,500
- Competitive positioning chart updated
- Market entry strategy phases updated
- Removed "budget alternative" language, replaced with "professional-tier" positioning

### `05-pricing-strategy.md`
- All main package and add-on prices updated
- Pricing rationale rewritten (removed "Why Not Cheaper/More Expensive", replaced with "Why These Prices/Why Not Higher")
- Bundle economics recalculated
- Market comparison table updated
- Price evolution phases updated (Phase 1/2/3 targets)
- Long-term goal table updated

### `06-marketing-and-sales.md`
- Average order value KPIs updated across all time periods

### `09-financial-projections.md`
- Revenue per transaction table: all 11 packages, Stripe fees, and net revenue recalculated
- Profit margin updated to 90–95%
- Year 1 Q1/Q2 projections updated
- Break-even average order value updated to ~$1,400

### `10-growth-strategy.md`
- Phase 2 price increase targets updated
- Phase 3 premium positioning targets updated
- Average order value milestone: $500 → $2,000
- Author website expansion pricing: $500–$2,000 → $1,500–$5,000

### `12-appendices.md`
- Complete pricing table (11 packages + 9 add-ons) updated with new prices and delivery times

---

## 5. Tweet Files (12 files)

All files in `tweets/`:

### `00-pinned-intro.md`
- All 4 service category prices updated

### `service-covers.md`
- Standard: $75 → $450, Premium: $150 → $650
- Delivery times updated

### `service-branding.md`
- 3 Books: $250 → $1,400, 5 Books: $500 → $2,200, 8+ Books: $1,200 → $3,500
- Alt text price reference updated

### `service-childrens.md`
- Standard: $500 → $1,800, Premium: $1,000 → $3,200
- Delivery times updated

### `service-pipeline.md`
- Starter: $400 → $1,800, Standard: $750 → $2,800, Premium: $1,800 → $4,500

### `weekly-cta.md`
- Week 1: all three service prices updated
- Week 3: all three branding tier prices updated

### `thread-aztec-12-covers.md`
- CTA pricing updated

### `thread-childrens-book.md`
- Standard and Premium prices and delivery times updated

### `aztec-cover-02.md`
- Series branding price: $250 → $1,400

### `aztec-cover-07.md`
- Series branding price: $250 → $1,400

### `repetition-full-series.md`
- Series branding price: $250 → $1,400

### `reality-full-series.md`
- Series branding price: $250 → $1,400

### `childrens-showcase.md`
- Children's books price: $500 → $1,800

### `childrens-page-spread-1.md`
- Children's books price and delivery times updated

---

## 6. Email Templates (3 files)

All files in `emails/`:

### `02-ebook-cover-premium.md`
- Header price: $150 → $650

### `07-series-architecture-medium.md`
- Header price: $400 → $2,800

### `25-series-expansion-retainer.md`
- Retainer price: $150/quarter → $350/quarter
- Billing description updated

---

## 7. Marketing & Setup Documents (3 files)

### `youtube-channel-setup.md`
- Channel description pricing updated (all 4 categories)
- Video idea #2 title: "$75 vs $150" → "$450 vs $650"
- Upload schedule reference updated

### `x-account-setup.md`
- Pinned tweet pricing updated (all 4 categories)
- Thread idea #3 price reference updated

### `starter-business.md`
- Multiple product prices updated in Stripe catalogue table
- Revenue scenario table updated
- Expansion triggers pricing updated
- Stripe product creation order list updated

---

## 8. Potential User Questions (7 files)

All files in `POTENTIAL-USER-QUESTIONS/`:

### `02-paperback-print-wrap.md`
- Print Wrap Add-On: $150 → $250

### `03-book-description-writing.md`
- Single Description: $150 → $200, 3-Book Pack: $350 → $500, 5-Book Pack: $550 → $750

### `06-character-portraits.md`
- 10-Pack: $600 → $750, 15-Pack: $850 → $1,050

### `07-book-trailer-video.md`
- 60-Second: $550 → $650, 90-Second: $750 → $900, Series Promo: $950 → $1,200

### `10-audiobook-cover.md`
- Audiobook Cover New Design: $150 → $200

### `11-series-naming-taglines.md`
- Series Name Only: $150 → $200, Name + Taglines: $250 → $350, Complete Package: $400 → $500

### `12-print-marketing-materials.md`
- Bookmark: $150 → $200

---

## 9. Package Pitch Documents (1 file)

### `DETAILED-EXISTING-PACKAGES-PITCHES/06-pipeline-starter-3book.md`
- Value calculation updated with new branding and pipeline prices

---

## Documents Intentionally NOT Updated

These are historical/analysis documents that preserve pricing context from the time they were written:

| File | Reason |
|------|--------|
| `REEDSY-COMPETITIVE-PRICES.md` | Historical competitive pricing analysis |
| `final-pricing-strategy-assessment.md` | Historical pricing strategy assessment |
| `metronagon_services_pricing_redesign_reedsy_aligned.md` | Historical redesign analysis |
| `WEBSITE-ANALYSIS.md` | Historical website audit with timestamped findings |
| `TEMPLATE-REPOS.md` | Historical TODO reference |
| `marketing-companies.md` | Contains third-party market pricing (Fiverr Pro range), not our prices |

---

## Quick Price Reference

### Main Packages

| Package | Old Price | New Price | Old Delivery | New Delivery |
|---------|-----------|-----------|--------------|--------------|
| Cover Standard | $150 | $450 | 1 day | 3–5 days |
| Cover Premium | $250 | $650 | 2 days | 5–7 days |
| Branding Starter (3) | $400 | $1,400 | 2 days | 7–10 days |
| Branding Standard (5) | $600 | $2,200 | 2 days | 10–14 days |
| Branding Premium (10) | $950 | $3,500 | 3 days | 14–21 days |
| Children's Standard | $500 | $1,800 | 2 days | 10–14 days |
| Children's Plus | $700 | $2,400 | 2 days | 14–18 days |
| Children's Premium | $900 | $3,200 | 3 days | 14–21 days |
| Pipeline Starter (3) | $550 | $1,800 | 2 days | 7–10 days |
| Pipeline Standard (5) | $850 | $2,800 | 3 days | 10–14 days |
| Pipeline Premium (10) | $1,350 | $4,500 | 4 days | 14–21 days |

### Updates & Add-Ons

| Service | Old Price | New Price |
|---------|-----------|-----------|
| Minor Revision | $35 | $75 |
| Major Revision | $100 | $250 |
| Add New Book Cover | $125 | $350 |
| Logo Refresh | $100 | $200 |
| New Box Set Front Cover | $100 | $200 |
| Book Description Update | $35 | $75 |
| Children's Page Edit | $35/pg | $75/pg |
| Children's Add Page | $50/pg | $100/pg |
| Children's New Character | $75 | $200 |
