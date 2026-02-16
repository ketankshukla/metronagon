# Metronagon Media

Professional book cover design, series branding, series architecture, and children's book illustration for authors and publishers.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Geist Sans & Geist Mono
- **Payments:** Stripe (embedded checkout)
- **Hosting:** Vercel
- **Image Protection:** Custom client-side protection against right-click, drag, and save

## Getting Started

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `env.local.example` to `.env.local` and fill in your Stripe test keys (see [STRIPE-SETUP.md](./STRIPE-SETUP.md))
4. Run the dev server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── api/checkout/         # Stripe API routes
│   ├── about/                # About page
│   ├── blog/                 # Blog listing and posts
│   ├── checkout/             # Embedded Stripe checkout page
│   ├── examples/             # Cover gallery (12 genres + children's)
│   ├── services/             # Packages & pricing
│   ├── testimonials/         # Client testimonials
│   ├── thank-you/            # Post-purchase confirmation
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   └── ImageProtection.tsx   # Global image theft protection
public/
├── portfolio/                # Portfolio images (book pages, logos)
└── examples/                 # Example cover images by genre
```

## Deployment

The site deploys automatically via GitHub → Vercel on every push to `master`.

| Site           | Domain                       | Purpose                                |
| -------------- | ---------------------------- | -------------------------------------- |
| **Production** | `metronagon.com`             | Live site with real Stripe payments    |
| **Test**       | `metronagon.ketanshukla.com` | Test site with Stripe sandbox payments |

Both Vercel projects are linked to the same GitHub repo. A single push to `master` deploys to both.

## Documentation

- **[STRIPE-SETUP.md](./STRIPE-SETUP.md)** — Complete guide to Stripe test/production setup, environment variables, and adding new products
