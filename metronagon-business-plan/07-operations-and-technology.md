# Operations & Technology

## Operating Model

Metronagon Media operates as a solo digital studio. The founder handles all aspects of the business: creative production, client communication, website development, marketing, and administration. This lean model results in extremely low overhead and near-total profit margins on every project.

### Workflow: Order to Delivery

```
Client browses metronagon.com
        │
        ▼
Selects package on /services page
        │
        ▼
Clicks "Get Started — $XXX"
        │
        ▼
Stripe embedded checkout (/checkout)
        │
        ▼
Payment confirmed
        │
        ▼
Thank-you page (/thank-you)
├── Displays package-specific deliverables
├── Shows estimated delivery timeline
└── Presents customized requirements questionnaire
        │
        ▼
Client submits creative brief
(book details, visual direction, references)
        │
        ▼
Production begins
├── Concept generation
├── Style refinement
├── Typography and composition
└── Post-processing and polish
        │
        ▼
Deliverables sent via Google Drive or ZIP
        │
        ▼
Client reviews
        │
        ▼
Revision round(s) if needed
        │
        ▼
Project complete
```

### Production Timeline by Package

| Package Category | Delivery Window |
| --- | --- |
| Single cover (Standard/Premium) | 1–2 business days |
| Series branding (3–5 books) | 2 business days |
| Series branding (10 books) | 3 business days |
| Children's book (Standard/Plus) | 2 business days |
| Children's book (Premium) | 3 business days |
| Full pipeline (3 books) | 2 business days |
| Full pipeline (5 books) | 3 business days |
| Full pipeline (10 books) | 4 business days |
| All updates/revisions | 1 business day |
| Rush orders (any package) | 48 hours |

## Technology Stack

### Website: metronagon.com

| Layer | Technology |
| --- | --- |
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Fonts | Geist Sans + Geist Mono (Google Fonts) |
| Analytics | Vercel Analytics |
| Hosting | Vercel |
| Domain | metronagon.com |
| Version Control | Git + GitHub |
| Deployment | Automatic via GitHub → Vercel pipeline |

### Payment Processing

| Component | Technology |
| --- | --- |
| Payment provider | Stripe |
| Checkout mode | Embedded checkout (Stripe React SDK) |
| Payment type | One-time payments |
| Promotion codes | Supported via Stripe |
| API integration | Next.js API route → Stripe SDK |
| Post-purchase | Redirect to /thank-you with session_id |

### Website Architecture

```
metronagon.com/
├── /                    Home page — hero, featured covers, how it works, CTA
├── /services            Services & pricing — all packages with Stripe checkout links
├── /examples            100+ sample covers across 10 genres
├── /case-studies        Portfolio case studies — 3 complete series with all assets
├── /about               Company story, founder profile, values, portfolio links
├── /blog                Content marketing — SEO articles (planned)
├── /blog/[slug]         Individual blog post pages
├── /checkout            Stripe embedded checkout page
├── /thank-you           Post-purchase confirmation + requirements questionnaire
├── /privacy             Privacy policy
├── /api/checkout        Stripe session creation API endpoint
├── /sitemap.xml         Auto-generated sitemap
└── /robots.txt          Search engine directives
```

### Portfolio Websites (All Series)

All five portfolio websites share the same technology stack and deployment pipeline:

| Website | Domain | Repository | Framework |
| --- | --- | --- | --- |
| Metronagon Media | metronagon.com | ketankshukla/metronagon | Next.js |
| Author Portfolio | ketanshukla.com | ketankshukla/author-portfolio | Next.js |
| Aztec Samurai Adventures | aztec.ketanshukla.com | ketankshukla/aztec-samurai-adventures | Next.js |
| Repetition: Mother of Mastery | repetition.ketanshukla.com | ketankshukla/repetition-mother-of-mastery | Next.js |
| Reality Without Belief | reality.ketanshukla.com | ketankshukla/reality-without-belief | Next.js |

**Deployment pipeline:** Code pushed to GitHub → Vercel automatically builds and deploys → Live within minutes.

## Creative Production Tools

### Image Generation & Design

- AI-assisted image generation with professional-grade prompting and iteration
- Post-processing pipeline: color correction, composition refinement, detail enhancement
- Typography system: professional font selection, layout, and typographic hierarchy
- Style anchoring techniques for maintaining character and visual consistency across series

### Quality Assurance

Every deliverable goes through a standardized QA process:

1. **Dimension verification** — Correct pixel dimensions and DPI for the target platform
2. **Typography check** — Title, subtitle, author name legibility at thumbnail size
3. **Genre accuracy** — Cover signals the correct genre expectations to readers
4. **Series consistency** — Colors, fonts, composition style match across all books in a series
5. **Amazon compliance** — File meets KDP upload specifications for Kindle and/or paperback
6. **Final review** — Overall visual impact assessment before delivery

## File Management

### Client Deliverables

- **Delivery method:** Google Drive shared folder or ZIP download link
- **File naming convention:** `[Series Name] - Book [Number] - [Title] - Front Cover.png`
- **Folder structure per project:**
  ```
  [Client Name] - [Series Name]/
  ├── Covers/
  │   ├── Book 01 - [Title] - Front Cover.png
  │   ├── Book 02 - [Title] - Front Cover.png
  │   └── ...
  ├── Logo/
  │   └── [Series Name] - Logo.png
  ├── Box Set/
  │   └── [Series Name] - Box Set Cover.png
  ├── Descriptions/
  │   └── [Series Name] - Book Descriptions.docx
  └── Children's/ (if applicable)
      ├── Pages/
      │   ├── Page 01.png
      │   └── ...
      ├── Covers/
      │   ├── Front Cover.png
      │   └── Back Cover.png
      └── [Title] - Complete Book.pdf
  ```

### Internal Archives

All project files are archived locally and in cloud storage for:

- Revision requests from returning clients
- Style reference for "Add New Book Cover" orders
- Portfolio documentation

## Security & Privacy

- **Payment data:** Handled entirely by Stripe — no credit card information touches the Metronagon server
- **Client data:** Minimal collection — email (via Stripe), project requirements (via questionnaire)
- **Image protection:** Website includes right-click protection and download prevention for portfolio images
- **Privacy policy:** Published at metronagon.com/privacy
- **HTTPS:** Enforced across all domains via Vercel

## Operational Capacity

As a solo operation, capacity is constrained by the founder's time:

| Metric | Estimate |
| --- | --- |
| Maximum concurrent projects | 3–4 |
| Maximum monthly projects | 15–20 |
| Average hours per single cover | 2–4 hours |
| Average hours per 5-book branding | 8–12 hours |
| Average hours per 10-book pipeline | 15–20 hours |
| Average hours per children's book | 10–15 hours |
| Available working hours per week | 40–50 hours |

At full capacity, the business can handle approximately $8,000–$15,000/month in revenue before scaling constraints require process changes or outside help.
