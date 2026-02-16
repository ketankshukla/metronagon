# Stripe Test & Production Setup Guide

This document covers the complete Stripe integration for Metronagon Media, including how the test and production environments are configured across local development, Vercel, and Stripe.

---

## Architecture Overview

Metronagon uses **two separate Vercel projects** linked to the same GitHub repo (`ketankshukla/metronagon`). Both deploy from the `master` branch, so every push deploys to both sites simultaneously.

| Vercel Project | Domain | Stripe Mode | Purpose |
|---------------|--------|-------------|---------|
| **metronagon** | `metronagon.com` | Live | Production — real payments |
| **metronagon-test** | `metronagon.ketanshukla.com` | Test (Sandbox) | Testing — no real charges |

---

## Stripe Environments

Stripe has two completely isolated environments:

- **Sandbox (Test Mode)** — fake payments, test card numbers, no real money
- **Live Mode** — real payments, real money, real customers

These two environments **do not share anything**. Products, prices, API keys, and transaction data are all separate. Toggling between test and live in the Stripe Dashboard only changes what **you see** in the dashboard — it does not affect your websites.

### Key Behavior

| Scenario | Result |
|----------|--------|
| Live API key + live price ID | ✅ Real payment processed |
| Test API key + test price ID | ✅ Test payment processed (checkout shows "Test mode" banner) |
| Live API key + test price ID | ❌ Error — Stripe rejects the request |
| Test API key + live price ID | ❌ Error — Stripe rejects the request |

Stripe enforces strict isolation. You cannot accidentally charge real money with test keys, or vice versa.

---

## Environment Variables

### Local Development (`.env.local`)

The `.env.local` file contains **test/sandbox** keys only. This file is gitignored and never committed.

```
# Stripe API Keys (Test Mode)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx

# Stripe Price IDs — New Project Orders
NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_COVER_PREMIUM=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_BRANDING_STARTER=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_BRANDING_STANDARD=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_BRANDING_PREMIUM=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_ARCHITECTURE_SMALL=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_ARCHITECTURE_MEDIUM=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_ARCHITECTURE_LARGE=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_STANDARD=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_PREMIUM=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_STARTER=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_STANDARD=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_PREMIUM=price_test_xxxxx

# Stripe Price IDs — Updates & Revisions
NEXT_PUBLIC_STRIPE_PRICE_REVISION_MINOR=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_REVISION_MAJOR=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_BRANDING_ADD_COVER=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_BRANDING_LOGO_REFRESH=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_BRANDING_BOX_SET=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_PLAN_ADD_BOOK=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_PLAN_RESTRUCTURE=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_PLAN_DESCRIPTION=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_PAGE_EDITS=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_ADD_PAGES=price_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_NEW_CHARACTER=price_test_xxxxx

# Bundles & Add-ons
NEXT_PUBLIC_STRIPE_PRICE_RUSH_FEE=price_test_xxxxx

# Retainer
NEXT_PUBLIC_STRIPE_PRICE_RETAINER=price_test_xxxxx
```

### Vercel — metronagon-test project (`metronagon.ketanshukla.com`)

All environment variables use **test/sandbox** values and are set to **"All Environments"**. Since this entire project is for testing only, there is no need to split by environment.

| Variable | Value | Environments |
|----------|-------|-------------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_test_xxxxx` | All Environments |
| `STRIPE_SECRET_KEY` | `sk_test_xxxxx` | All Environments |
| All `NEXT_PUBLIC_STRIPE_PRICE_*` vars | Test price IDs | All Environments |

### Vercel — metronagon project (`metronagon.com`)

All environment variables use **live** values and are set to **"Production"** only. Preview and Development environments on this project should use test values if set.

| Variable | Value | Environments |
|----------|-------|-------------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_xxxxx` | Production only |
| `STRIPE_SECRET_KEY` | `sk_live_xxxxx` | Production only |
| All `NEXT_PUBLIC_STRIPE_PRICE_*` vars | Live price IDs | Production only |

**Important:** Any price ID variable left empty will cause that package's button to link to `#contact` instead of the checkout page. This is a built-in fallback — not a bug.

---

## How Checkout Works

1. User clicks a package button (e.g., "Get Started — $75") on the services page
2. If the package has a `priceId` (from env vars), the button links to `/checkout?price=PRICE_ID&product=PRODUCT_NAME`
3. The checkout page loads Stripe's embedded checkout using the `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
4. On form submission, the API route `/api/checkout` creates a Stripe Checkout Session using `STRIPE_SECRET_KEY`
5. On success, the user is redirected to `/thank-you?session_id=SESSION_ID`
6. The thank-you page calls `/api/checkout/session` to retrieve order details

### Technical Note: Lazy Initialization

The Stripe SDK in the API routes (`src/app/api/checkout/route.ts` and `src/app/api/checkout/session/route.ts`) uses **lazy initialization** via a `getStripe()` function. This prevents the Stripe SDK from crashing during Vercel's build step when environment variables are not yet available. The Stripe instance is only created when an actual API request is received.

---

## Workflow: Adding a New Product

### Step 1: Create the product in Stripe Sandbox

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Make sure you are in **Sandbox/Test mode** (toggle in top-right)
3. Go to **Products** → **Add product**
4. Set the name, price, and any other details
5. Save and copy the **Price ID** (starts with `price_`)

### Step 2: Add the test price ID to your environments

1. Add the price ID to your `.env.local` file for local development
2. Add the price ID to the **metronagon-test** Vercel project (All Environments)
3. Redeploy or push to `master` to trigger a new build

### Step 3: Test the checkout flow

1. Visit `metronagon.ketanshukla.com` (or `localhost:3000`)
2. Navigate to the package and click the buy button
3. The checkout form should show the **"Test mode"** banner
4. Use test card number `4242 4242 4242 4242` with any future expiry and any CVC
5. Verify the thank-you page loads with correct order details
6. Check the Stripe Dashboard (Sandbox) to see the test payment

### Step 4: Copy the product to Live mode

1. In Stripe Dashboard Sandbox, find the product you just created
2. Use the **"Copy to live mode"** button (one-click copy)
3. Switch to **Live mode** in the Stripe Dashboard
4. Find the copied product and copy its **Live Price ID** (this will be different from the test one)

### Step 5: Add the live price ID to production

1. In the **metronagon** Vercel project, add the live price ID as an environment variable (Production only)
2. Push to `master` or redeploy to trigger a new build
3. Visit `metronagon.com` and verify the buy button now goes to checkout (without the "Test mode" banner)

---

## Stripe Brand Settings

Configured in Stripe Dashboard → Settings → Branding.

| Setting | Value |
|---------|-------|
| Brand Color | `#D4AF37` (gold) |
| Accent Color | `#050505` (black) |
| Logo | Metronagon logo (appears at top of receipts and checkout pages) |
| Icon | Metronagon icon (appears next to business name in receipts) |

**Tip:** Upload a wide, banner-style logo (e.g., 600×120px) to make it display prominently at the top of email receipts.

---

## Test Card Numbers

Use these in Sandbox/Test mode:

| Card Number | Scenario |
|-------------|----------|
| `4242 4242 4242 4242` | Successful payment |
| `4000 0000 0000 3220` | 3D Secure authentication required |
| `4000 0000 0000 9995` | Payment declined |

Use any future expiry date and any 3-digit CVC.

---

## File Reference

| File | Purpose |
|------|---------|
| `.env.local` | Local test environment variables (gitignored) |
| `src/app/api/checkout/route.ts` | Creates Stripe Checkout Sessions (POST) |
| `src/app/api/checkout/session/route.ts` | Retrieves session details for thank-you page (GET) |
| `src/app/checkout/page.tsx` | Embedded Stripe Checkout UI |
| `src/app/thank-you/ThankYouContent.tsx` | Post-purchase confirmation page |
| `src/app/services/page.tsx` | Services page with package cards and buy buttons |

---

## Quick Reference

| Environment | URL | Stripe Keys | Price IDs |
|-------------|-----|-------------|-----------|
| Local dev | `localhost:3000` | Test (from `.env.local`) | Test |
| Vercel test | `metronagon.ketanshukla.com` | Test (Vercel env vars) | Test |
| Vercel production | `metronagon.com` | Live (Vercel env vars) | Live |
