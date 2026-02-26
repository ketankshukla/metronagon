# Stripe Keys & Environment Variables Setup

**Date:** February 26, 2025
**Project:** Metronagon Media — metronagon.com
**Deployment:** GitHub → Vercel

---

## How the Checkout Flow Works

1. Each package on `/services` has a `priceId` field that reads from a `NEXT_PUBLIC_STRIPE_PRICE_*` environment variable
2. When a customer clicks "Get Started", the button links to `/checkout?price={priceId}&product={productName}`
3. If no `priceId` is set (env var is empty), the button falls back to `#contact`
4. The checkout page sends the price ID to `/api/checkout`, which creates a Stripe Embedded Checkout session
5. Stripe handles the payment, then redirects to `/thank-you`

**Key files:**
- `src/app/services/page.tsx` — package definitions with `priceId` fields
- `src/app/checkout/page.tsx` — embedded Stripe checkout UI
- `src/app/api/checkout/route.ts` — creates the Stripe checkout session
- `src/app/thank-you/page.tsx` — post-payment confirmation page

---

## Stripe Modes

Stripe has two completely separate environments:

| Mode | Dashboard URL | Key Prefix | Purpose |
|------|--------------|------------|---------|
| **Test** | dashboard.stripe.com/test | `pk_test_*`, `sk_test_*`, `price_*` (test) | Development, preview deployments |
| **Live** | dashboard.stripe.com | `pk_live_*`, `sk_live_*`, `price_*` (live) | Production site (metronagon.com) |

Test and live products/prices have **different IDs**. A test price ID will not work with live API keys, and vice versa.

---

## Environment Variables Required

### API Keys (2 variables)

| Variable | Description | Visibility |
|----------|-------------|------------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Public key — used client-side to load Stripe.js | Exposed to browser (safe) |
| `STRIPE_SECRET_KEY` | Secret key — used server-side to create checkout sessions | Server only (never exposed) |

### Price IDs — Main Packages (11 variables)

| Variable | Package |
|----------|---------|
| `NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD` | Cover Design — Standard ($450) |
| `NEXT_PUBLIC_STRIPE_PRICE_COVER_PREMIUM` | Cover Design — Premium ($650) |
| `NEXT_PUBLIC_STRIPE_PRICE_BRANDING_STARTER` | Series Branding — Starter / 3 Books ($1,400) |
| `NEXT_PUBLIC_STRIPE_PRICE_BRANDING_STANDARD` | Series Branding — Standard / 5 Books ($2,200) |
| `NEXT_PUBLIC_STRIPE_PRICE_BRANDING_PREMIUM` | Series Branding — Premium / 10 Books ($3,500) |
| `NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_STANDARD` | Children's Picture Book — Standard ($1,800) |
| `NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_PLUS` | Children's Picture Book — Plus ($2,400) |
| `NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_PREMIUM` | Children's Picture Book — Premium ($3,200) |
| `NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_STARTER` | Full Pipeline — Starter / 3 Books ($1,800) |
| `NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_STANDARD` | Full Pipeline — Standard / 5 Books ($2,800) |
| `NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_PREMIUM` | Full Pipeline — Premium / 10 Books ($4,500) |

### Price IDs — Updates & Revisions (9 variables)

| Variable | Package |
|----------|---------|
| `NEXT_PUBLIC_STRIPE_PRICE_REVISION_MINOR` | Cover — Minor Revision ($75) |
| `NEXT_PUBLIC_STRIPE_PRICE_REVISION_MAJOR` | Cover — Major Revision ($250) |
| `NEXT_PUBLIC_STRIPE_PRICE_BRANDING_ADD_COVER` | Series Branding — Add New Book Cover ($350) |
| `NEXT_PUBLIC_STRIPE_PRICE_BRANDING_LOGO_REFRESH` | Series Branding — Logo Refresh ($200) |
| `NEXT_PUBLIC_STRIPE_PRICE_BRANDING_BOX_SET` | Series Branding — New Box Set Front Cover ($200) |
| `NEXT_PUBLIC_STRIPE_PRICE_PLAN_ADD_BOOK` | Series Plan — Add Book ($200) |
| `NEXT_PUBLIC_STRIPE_PRICE_PLAN_RESTRUCTURE` | Series Plan — Restructure ($350) |
| `NEXT_PUBLIC_STRIPE_PRICE_PLAN_DESCRIPTION` | Series Plan — Book Description Update ($75) |
| `NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_PAGE_EDITS` | Children's Book — Page Edits ($75/page) |
| `NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_ADD_PAGES` | Children's Book — Add Pages ($100/page) |
| `NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_NEW_CHARACTER` | Children's Book — New Character/Scene ($200) |

**Total: 22 price ID variables + 2 API keys = 24 environment variables**

---

## Where Each Variable Goes

### Local Development (`.env.local`)

This file is gitignored and never pushed to GitHub. Use **test mode** keys and price IDs here.

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51T0U...
STRIPE_SECRET_KEY=sk_test_51T0U...

NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD=price_1Qx...
NEXT_PUBLIC_STRIPE_PRICE_COVER_PREMIUM=price_1Qy...
# ... all other price IDs (test mode)
```

### Example File (`env.local.example`)

This file IS tracked by git. It serves as a template. **Never put real keys here.**

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx

NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD=
NEXT_PUBLIC_STRIPE_PRICE_COVER_PREMIUM=
# ... all other price IDs (empty)
```

### Vercel — Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

#### API Keys

| Variable | Scope | Value |
|----------|-------|-------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | **Production** | `pk_live_51T0U...` |
| `STRIPE_SECRET_KEY` | **Production** | `sk_live_51T0U...` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | **Preview + Development** | `pk_test_51T0U...` |
| `STRIPE_SECRET_KEY` | **Preview + Development** | `sk_test_51T0U...` |

#### Price IDs (for each of the 22 price ID variables)

| Variable | Scope | Value |
|----------|-------|-------|
| `NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD` | **Production** | `price_live_xxx...` (live mode price ID) |
| `NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD` | **Preview + Development** | `price_test_xxx...` (test mode price ID) |

Repeat this pattern for every price ID. Each variable gets **two entries** — one for Production (live) and one for Preview + Development (test).

> **Do NOT use "All Environments"** for price IDs. Test and live price IDs are always different. Using "All Environments" means one environment will have the wrong price ID and checkout will fail.

---

## Step-by-Step: Adding a New Product

### 1. Create the Product in Stripe Test Mode

1. Go to https://dashboard.stripe.com/test/products
2. Click **+ Add product**
3. Fill in:
   - **Name:** e.g., "Ebook Cover Design — Standard"
   - **Price:** e.g., $450.00 USD, One time
   - **Include tax in price:** No (tax-exclusive)
4. Save the product
5. Copy the **Price ID** (starts with `price_`, found on the product detail page under Pricing)

### 2. Add Test Price ID to Local + Vercel

1. Paste the test price ID into your `.env.local` file
2. In Vercel Dashboard → Settings → Environment Variables → Add:
   - Key: `NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD`
   - Value: the test price ID
   - Scope: **Preview + Development** only

### 3. Test It

1. Push to GitHub — a preview deployment will be created
2. Visit the preview URL → Services → click "Get Started" on that package
3. Use Stripe test card: `4242 4242 4242 4242`, any future expiry, any CVC
4. Verify you reach the thank-you page
5. Verify the test payment appears in Stripe Test Dashboard → Payments

### 4. Go Live

1. In Stripe Dashboard, switch to **Live Mode** (toggle at top-left)
2. Either:
   - **Copy the product:** Products → find the test product → "Copy to live mode"
   - **Or create it manually** in live mode with the same name and price
3. Copy the **live Price ID** (it will be different from the test one)
4. In Vercel Dashboard → Settings → Environment Variables → Add:
   - Key: `NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD`
   - Value: the live price ID
   - Scope: **Production** only
5. **Redeploy** the production site (Vercel → Deployments → latest → Redeploy)

### 5. Verify

1. Visit metronagon.com/services → click "Get Started"
2. The Stripe checkout should load with the correct product and price
3. Make a real test purchase (you can refund it immediately from the Stripe Dashboard)

---

## Current Status

### Vercel Environment Variables (as of Feb 26, 2025)

| Variable | Scope | Status |
|----------|-------|--------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Production (live) | ✅ Set |
| `STRIPE_SECRET_KEY` | Production (live) | ✅ Set |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Pre-Production (test) | ✅ Set |
| `STRIPE_SECRET_KEY` | Pre-Production (test) | ✅ Set |
| `NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD` | All Environments | ⚠️ Needs to be split into Production + Preview |
| All other price IDs | — | ❌ Not yet created |

### Action Items

- [ ] Fix `NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD` — delete the "All Environments" entry, re-add as separate Production and Preview+Development entries
- [ ] Create all 22 products in Stripe Test Mode
- [ ] Add all 22 test price IDs to Vercel (Preview + Development scope)
- [ ] Add all 22 test price IDs to `.env.local`
- [ ] Test each product's checkout flow on a preview deployment
- [ ] Copy all 22 products to Stripe Live Mode
- [ ] Add all 22 live price IDs to Vercel (Production scope)
- [ ] Test each product's checkout on production

---

## Security Rules

1. **Never commit real API keys or price IDs to git** — only `.env.local` (gitignored) holds real values
2. **`env.local.example`** is a template with placeholder values only — it IS tracked by git
3. **`STRIPE_SECRET_KEY`** must never be prefixed with `NEXT_PUBLIC_` — it's server-side only
4. **If keys are ever exposed in a commit**, immediately rotate them: Stripe Dashboard → Developers → API Keys → Roll key
5. **Publishable keys** (`pk_*`) are safe to expose client-side — that's their purpose
