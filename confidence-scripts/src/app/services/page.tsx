import type { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  Layers,
  BookOpen,
  Baby,
  Rocket,
  Check,
  ArrowRight,
  Clock,
  RotateCcw,
  Zap,
  CalendarDays,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Metronagon",
  description:
    "Professional book cover design, series branding, series architecture, and children's book illustration. View packages and pricing.",
};

interface Feature {
  title: string;
  detail: string;
}

const coverPackages = [
  {
    name: "Standard",
    price: "$75",
    delivery: "2 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD,
    description:
      "Single ebook cover with 3 concept variations and 1 polished final.",
    features: [
      {
        title: "1600×2400, 300 DPI",
        detail:
          "Amazon KDP-ready dimensions optimized for retina screens and print-on-demand services like IngramSpark",
      },
      {
        title: "Photorealistic or stylised",
        detail:
          "Choose between cinematic photorealistic scenes or stylized artistic illustrations — tailored to your genre's visual expectations",
      },
      {
        title: "3 concept variations",
        detail:
          "Three fully realized visual directions based on your brief — not rough sketches, but complete cover concepts you can compare side by side",
      },
      {
        title: "1 final polished cover",
        detail:
          "The winning concept refined with professional typography, color correction, contrast optimization, and composition polish",
      },
      {
        title: "1 round of revisions",
        detail:
          "Adjustments to colors, text placement, font choice, or compositional elements on the selected final cover",
      },
      {
        title: "High-res PNG/JPG delivery",
        detail:
          "Print-quality files delivered via Google Drive or ZIP, ready for immediate upload to Amazon KDP or any publishing platform",
      },
    ],
  },
  {
    name: "Premium",
    price: "$150",
    delivery: "3 business days",
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COVER_PREMIUM,
    description:
      "Premium style cover with extra refinement and revision rounds.",
    features: [
      {
        title: "1600×2400, 300 DPI",
        detail:
          "Amazon KDP-ready dimensions optimized for retina screens and print-on-demand services",
      },
      {
        title: "Premium photorealistic style",
        detail:
          "Advanced prompt engineering with custom style headers for a cinematic, gallery-quality result — the same system used for our published 22-book portfolio",
      },
      {
        title: "3 concept variations",
        detail:
          "Three distinct visual directions, each using the premium style header for maximum visual impact and genre accuracy",
      },
      {
        title: "1 final polished cover",
        detail:
          "The winning concept receives extended refinement — multiple generation passes, advanced post-processing, and meticulous typography",
      },
      {
        title: "2 rounds of revisions",
        detail:
          "Two full revision cycles for fine-tuning every detail. Adjust composition, color palette, typography, or any visual element across both rounds",
      },
      {
        title: "High-res PNG/JPG delivery",
        detail:
          "Print-quality files delivered via Google Drive or ZIP, ready for immediate upload to any platform",
      },
      {
        title: "Priority turnaround",
        detail:
          "Placed at the front of the production queue with dedicated time — your project gets focused, uninterrupted attention",
      },
    ],
  },
];

const brandingPackages = [
  {
    name: "Starter",
    subtitle: "3 Books",
    price: "$250",
    delivery: "3 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BRANDING_STARTER,
    features: [
      {
        title: "Series logo design",
        detail:
          "A custom logomark and wordmark that anchors the visual identity of your series — designed to work at favicon size and hero banner scale",
      },
      {
        title: "3 consistent ebook covers",
        detail:
          "Three covers built from a shared style header ensuring color palette, typography, lighting direction, and composition remain visually unified",
      },
      {
        title: "1 box set cover",
        detail:
          "A landscape composite cover designed for Amazon box set listings — showcases the series as a single compelling product",
      },
      {
        title: "Style guide document",
        detail:
          "PDF documenting fonts, hex colors, composition rules, and prompt parameters so future covers or marketing materials maintain perfect consistency",
      },
    ],
  },
  {
    name: "Standard",
    subtitle: "5 Books",
    price: "$450",
    delivery: "5 business days",
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BRANDING_STANDARD,
    features: [
      {
        title: "Series logo design",
        detail:
          "Custom logomark and wordmark designed to anchor the visual identity across all 5 books and marketing materials",
      },
      {
        title: "5 consistent ebook covers",
        detail:
          "Five covers sharing a unified style header — consistent color grading, typography, lighting, and composition across the entire series",
      },
      {
        title: "Box set cover",
        detail:
          "Landscape composite cover for Amazon box set listings, designed to showcase the full 5-book collection as one premium product",
      },
      {
        title: "YouTube thumbnail",
        detail:
          "A 1280×720 branded promotional thumbnail using series visual language — optimized for YouTube, social media, or advertising",
      },
      {
        title: "Style guide document",
        detail:
          "Comprehensive PDF with all visual specifications: colors, fonts, composition rules, prompt parameters, and usage guidelines",
      },
    ],
  },
  {
    name: "Premium",
    subtitle: "8+ Books",
    price: "$750",
    delivery: "7 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BRANDING_PREMIUM,
    features: [
      {
        title: "Series logo design",
        detail:
          "Premium logomark and wordmark anchoring the visual identity of your entire epic-scale series",
      },
      {
        title: "All ebook covers (8+)",
        detail:
          "Every book in the series receives a cover built from the same style header — whether it's 8, 10, or 12 books, every cover looks like it belongs",
      },
      {
        title: "Box set cover",
        detail:
          "Landscape composite cover for Amazon box set listings, designed to showcase the complete collection",
      },
      {
        title: "Panoramic cover",
        detail:
          "Wide-format panoramic scene connecting all major characters or elements — ideal for marketing banners, website heroes, and print posters",
      },
      {
        title: "YouTube thumbnail",
        detail:
          "Branded 1280×720 thumbnail optimized for YouTube, social media, or advertising campaigns",
      },
      {
        title: "Author portrait",
        detail:
          "AI-generated author portrait rendered in the series' visual style — for author pages, social profiles, and book back matter",
      },
      {
        title: "Complete style guide",
        detail:
          "Comprehensive document covering every visual decision: colors, fonts, composition rules, prompt parameters, character descriptions, and expansion guidelines",
      },
    ],
  },
];

const architecturePackages = [
  {
    name: "Small",
    subtitle: "3 Books",
    price: "$200",
    delivery: "2 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ARCHITECTURE_SMALL,
    features: [
      {
        title: "Series structure & arc design",
        detail:
          "Overall series arc mapped across 3 books with clear beginning, escalation, and resolution — designed for reader momentum and satisfying payoff",
      },
      {
        title: "Chapter outlines per book",
        detail:
          "10–15 chapter summaries per book covering key events, character moments, pacing beats, and cliffhanger placement",
      },
      {
        title: "Cross-book continuity plan",
        detail:
          "Document tracking recurring characters, unresolved threads, planted callbacks, and thematic throughlines that connect all 3 books",
      },
      {
        title: "Book descriptions for Amazon",
        detail:
          "Compelling, keyword-optimized descriptions for each book — ready to paste directly into your KDP product pages",
      },
      {
        title: "Front/back matter strategy",
        detail:
          "Recommendations for dedications, preview chapters, author notes, 'also by' sections, and cross-promotion between books in the series",
      },
    ],
  },
  {
    name: "Medium",
    subtitle: "5 Books",
    price: "$400",
    delivery: "3 business days",
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ARCHITECTURE_MEDIUM,
    features: [
      {
        title: "Series structure & arc design",
        detail:
          "Multi-book arc mapped across 5 books with escalating stakes, mid-series pivot, and satisfying conclusion structure",
      },
      {
        title: "Chapter outlines per book",
        detail:
          "10–15 chapter summaries per book with key events, character arcs, subplot tracking, and pacing calibration",
      },
      {
        title: "Cross-book continuity plan",
        detail:
          "Comprehensive document tracking characters, unresolved threads, callbacks, world-building elements, and thematic progression across all 5 books",
      },
      {
        title: "Book descriptions for Amazon",
        detail:
          "Five compelling, keyword-optimized descriptions ready for KDP — each one builds on the previous while remaining standalone-friendly",
      },
      {
        title: "Front/back matter strategy",
        detail:
          "Strategic recommendations for preview chapters, reading order guides, author notes, and cross-promotion placement",
      },
      {
        title: "Character continuity tracking",
        detail:
          "Dedicated character database tracking physical descriptions, relationships, knowledge states, and emotional arcs across all 5 books to prevent continuity errors",
      },
    ],
  },
  {
    name: "Large",
    subtitle: "8+ Books",
    price: "$800",
    delivery: "5 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ARCHITECTURE_LARGE,
    features: [
      {
        title: "Epic-scale series structure",
        detail:
          "Multi-arc series architecture spanning 8+ books — overarching narrative, individual book arcs, and mid-series turning points all mapped and balanced",
      },
      {
        title: "Chapter outlines per book",
        detail:
          "10–15 chapter summaries per book with key events, character arcs, subplot weaving, foreshadowing placement, and pacing calibration",
      },
      {
        title: "Cross-book continuity plan",
        detail:
          "Master continuity document tracking every recurring element, callback, planted seed, and resolution across the entire series",
      },
      {
        title: "Book descriptions for Amazon",
        detail:
          "Keyword-optimized descriptions for every book — progressively building stakes while each one works as a standalone purchase hook",
      },
      {
        title: "Front/back matter strategy",
        detail:
          "Strategic recommendations for every book's front and back matter, including reading order guides and series recap sections",
      },
      {
        title: "Character continuity tracking",
        detail:
          "Full character database with physical descriptions, relationship maps, knowledge states, power progressions, and emotional arcs across 8+ books",
      },
      {
        title: "Multi-arc progression design",
        detail:
          "Layered narrative architecture: primary series arc, secondary character arcs, thematic arcs, and mystery/revelation arcs all plotted across the full series",
      },
      {
        title: "Series bible document",
        detail:
          "A comprehensive reference document covering world rules, magic systems, geography, timeline, character backstories, and all established canon — the ultimate reference for writing consistency",
      },
    ],
  },
];

const childrensPackages = [
  {
    name: "Standard",
    price: "$500",
    delivery: "5 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_STANDARD,
    description: "Complete 32-page AI-illustrated picture book.",
    features: [
      {
        title: "Story writing or adaptation",
        detail:
          "Original story creation or adaptation of your concept into a picture-book-friendly structure with age-appropriate language and pacing",
      },
      {
        title: "32 AI-illustrated pages",
        detail:
          "Every page receives a full-color AI-generated illustration using a consistent art style — Pixar/Disney-inspired aesthetic or your preferred direction",
      },
      {
        title: "Consistent character design",
        detail:
          "Main characters maintain the same appearance, proportions, and clothing across all 32 pages using style anchoring and reference sheets",
      },
      {
        title: "Assembled PDF",
        detail:
          "Complete, page-ordered PDF with illustrations and text laid out together — ready for digital distribution or print submission",
      },
      {
        title: "Individual page image files",
        detail:
          "All 32 page illustrations delivered as separate high-resolution image files for flexible use in layouts or marketing",
      },
      {
        title: "1 round of revisions",
        detail:
          "Adjustments to illustrations, text placement, character expressions, or scene composition on any pages that need refinement",
      },
    ],
  },
  {
    name: "Premium",
    price: "$1,000",
    delivery: "7 business days",
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_PREMIUM,
    description:
      "Premium picture book with custom character design and print-ready formatting.",
    features: [
      {
        title: "Story writing or adaptation",
        detail:
          "Original story creation or adaptation with enhanced narrative structure, vocabulary calibration, and pedagogical consideration for the target age group",
      },
      {
        title: "32 AI-illustrated pages",
        detail:
          "Full-color illustrations on every page with premium quality — multiple generation passes per page to ensure the highest visual standard",
      },
      {
        title: "Custom character design system",
        detail:
          "Dedicated character reference sheets created before page production begins — front view, side view, expressions, and clothing defined as a reusable system",
      },
      {
        title: "Print-ready formatting",
        detail:
          "Book formatted to exact print-on-demand specifications — proper bleed, margins, gutter allowance, and color profile (CMYK-safe) for services like IngramSpark or KDP Print",
      },
      {
        title: "Assembled PDF",
        detail:
          "Complete print-ready PDF with all pages, front cover, title page, copyright page, and back cover assembled in correct order",
      },
      {
        title: "Individual page image files",
        detail:
          "All 32 illustrations plus cover art delivered as separate high-resolution files for marketing, social media, or alternative layouts",
      },
      {
        title: "2 rounds of revisions",
        detail:
          "Two full revision cycles — adjust illustrations, text, layout, character expressions, backgrounds, or any visual element across both rounds",
      },
      {
        title: "Story text document",
        detail:
          "Separate document with the complete story text, page-by-page — useful for audio narration, translation, or future adaptations",
      },
    ],
  },
];

const pipelinePackages = [
  {
    name: "Starter",
    subtitle: "3 Books",
    price: "$400",
    delivery: "5 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_STARTER,
    features: [
      {
        title: "Series plan (3 books)",
        detail:
          "Complete series arc, chapter outlines for all 3 books, and cross-book continuity plan — the architectural foundation for your series",
      },
      {
        title: "3 ebook covers",
        detail:
          "Three visually consistent covers built from a shared style header, each at 1600×2400, 300 DPI, Amazon KDP-ready",
      },
      {
        title: "Series logo",
        detail:
          "Custom logomark and wordmark that anchors the visual identity of your 3-book series",
      },
      {
        title: "Box set cover",
        detail:
          "Landscape composite cover showcasing all 3 books as a single product — designed for Amazon box set listings",
      },
      {
        title: "Book descriptions",
        detail:
          "Keyword-optimized Amazon descriptions for all 3 books — compelling hooks that drive conversions while maintaining series continuity",
      },
      {
        title: "1 round of revisions",
        detail:
          "Adjustments to any deliverable — covers, plan structure, descriptions, or branding elements",
      },
    ],
  },
  {
    name: "Standard",
    subtitle: "5 Books",
    price: "$900",
    delivery: "7 business days",
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_STANDARD,
    features: [
      {
        title: "Series plan (5 books)",
        detail:
          "Multi-book arc with escalating stakes, mid-series pivot, chapter outlines per book, and full cross-book continuity mapping",
      },
      {
        title: "5 ebook covers",
        detail:
          "Five unified covers with shared style header — consistent color, typography, lighting, and composition across the entire series",
      },
      {
        title: "Full series branding",
        detail:
          "Series logo, style guide document, and complete visual identity system designed for consistent expansion",
      },
      {
        title: "Box set + thumbnail",
        detail:
          "Landscape box set cover for Amazon plus a 1280×720 YouTube/social media thumbnail using the series visual language",
      },
      {
        title: "Book descriptions",
        detail:
          "Five keyword-optimized Amazon descriptions that progressively build stakes while each working as a standalone purchase hook",
      },
      {
        title: "Continuity plan",
        detail:
          "Character database, subplot tracking, callback registry, and thematic throughline documentation across all 5 books",
      },
      {
        title: "2 rounds of revisions",
        detail:
          "Two full revision cycles covering any deliverable — plans, covers, branding, descriptions, or continuity documents",
      },
    ],
  },
  {
    name: "Premium",
    subtitle: "8+ Books",
    price: "$1,500",
    delivery: "10 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_PREMIUM,
    features: [
      {
        title: "Full series plan (8+ books)",
        detail:
          "Epic-scale series architecture with multi-arc design, chapter outlines for every book, and comprehensive continuity tracking across the entire series",
      },
      {
        title: "All ebook covers",
        detail:
          "Every book receives a cover from the same style header — whether 8, 10, or 12+ books, every cover is visually unified and genre-accurate",
      },
      {
        title: "Complete branding package",
        detail:
          "Series logo, panoramic cover, author portrait, YouTube thumbnail, and a comprehensive style guide documenting every visual decision",
      },
      {
        title: "Box set + panoramic + thumbnail",
        detail:
          "Box set cover, wide-format panoramic scene connecting all major elements, and branded social media thumbnail",
      },
      {
        title: "Book descriptions",
        detail:
          "Keyword-optimized Amazon descriptions for every book in the series — each one compelling, accurate, and conversion-focused",
      },
      {
        title: "Series bible",
        detail:
          "Comprehensive reference document: world rules, magic systems, geography, timeline, character backstories, and all established canon",
      },
      {
        title: "Character tracking",
        detail:
          "Full character database with descriptions, relationship maps, knowledge states, power progressions, and emotional arcs across all books",
      },
      {
        title: "2 rounds of revisions",
        detail:
          "Two full revision cycles across every deliverable — covers, plans, branding, bible, descriptions, and continuity documents",
      },
    ],
  },
];

const updates = [
  {
    name: "Cover — Minor Revision",
    price: "$20",
    desc: "Text fix, color adjustment, subtitle change",
    delivery: "1 business day",
  },
  {
    name: "Cover — Major Revision",
    price: "$50",
    desc: "New concept, different style, layout overhaul",
    delivery: "2 business days",
  },
  {
    name: "Add New Book Cover",
    price: "$85",
    desc: "New cover matching existing series style",
    delivery: "2 business days",
  },
  {
    name: "Logo Refresh",
    price: "$100",
    desc: "Updated or redesigned series logo",
    delivery: "2 business days",
  },
  {
    name: "New Box Set Cover",
    price: "$75",
    desc: "Additional box set or panoramic cover",
    delivery: "2 business days",
  },
  {
    name: "Add Book to Plan",
    price: "$100",
    desc: "New outline + chapter structure + continuity update",
    delivery: "2 business days",
  },
  {
    name: "Plan Restructure",
    price: "$175",
    desc: "Reorder, split, or merge books in plan",
    delivery: "3 business days",
  },
  {
    name: "Book Description Update",
    price: "$20",
    desc: "Updated Amazon/retail description",
    delivery: "1 business day",
  },
  {
    name: "Children's Book — Page Edit",
    price: "$25/pg",
    desc: "Text/story edits with re-illustrated page",
    delivery: "1 day per page",
  },
  {
    name: "Children's Book — Add Page",
    price: "$40/pg",
    desc: "New illustrated page in existing book",
    delivery: "1 day per page",
  },
  {
    name: "Children's Book — New Character",
    price: "$50",
    desc: "New character or scene in existing style",
    delivery: "2 business days",
  },
];

function PackageCard({
  name,
  subtitle,
  price,
  delivery,
  description,
  features,
  popular,
  priceId,
}: {
  name: string;
  subtitle?: string;
  price: string;
  delivery: string;
  description?: string;
  features: Feature[];
  popular?: boolean;
  priceId?: string;
}) {
  const productLabel = subtitle ? `${name} (${subtitle})` : name;
  const checkoutHref = priceId
    ? `/checkout?price=${priceId}&product=${encodeURIComponent(productLabel)}`
    : "#contact";

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-all hover-gold-glow ${
        popular
          ? "border-gold/30 bg-gold/[0.03]"
          : "border-border bg-surface-light"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-background">
          Most Popular
        </div>
      )}
      <div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          {subtitle && <span className="text-sm text-muted">({subtitle})</span>}
        </div>
        {description && (
          <p className="mt-1 text-sm text-muted">{description}</p>
        )}
        <div className="mt-4 flex items-baseline gap-3">
          <span className="text-3xl font-bold text-gold">{price}</span>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <CalendarDays size={13} className="text-gold/70" />
          <span className="text-xs font-medium text-gold/70">{delivery}</span>
        </div>
      </div>
      <ul className="mt-6 flex-1 space-y-4">
        {features.map((feature) => (
          <li key={feature.title} className="flex items-start gap-3">
            <Check size={16} className="mt-0.5 shrink-0 text-gold" />
            <div>
              <span className="text-sm font-medium text-foreground">
                {feature.title}
              </span>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">
                {feature.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Link
        href={checkoutHref}
        className={`mt-8 flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
          popular
            ? "bg-gold text-background hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            : "border border-border text-foreground hover:border-gold/30 hover:text-gold"
        }`}
      >
        {priceId ? `Get Started — ${price}` : "Get Started"}
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Services & <span className="gold-gradient-text">Pricing</span>
            </h1>
            <p className="mt-4 text-lg text-muted">
              Choose your package, pay securely, and we begin immediately. Every
              price is final — no hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Ebook Covers */}
      <section id="covers" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
              <Palette size={22} className="text-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Ebook Cover Design</h2>
              <p className="text-sm text-muted">
                AI-generated covers, photorealistic or stylised, Amazon-ready
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {coverPackages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Series Branding */}
      <section
        id="branding"
        className="scroll-mt-20 border-t border-border bg-surface py-16"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
              <Layers size={22} className="text-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Series Branding</h2>
              <p className="text-sm text-muted">
                Consistent visual identity across your entire book series
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {brandingPackages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Series Architecture */}
      <section id="architecture" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
              <BookOpen size={22} className="text-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Series Architecture & Planning
              </h2>
              <p className="text-sm text-muted">
                From a single idea to a complete multi-book series blueprint
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {architecturePackages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Children's Books */}
      <section
        id="childrens"
        className="scroll-mt-20 border-t border-border bg-surface py-16"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
              <Baby size={22} className="text-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Children&apos;s Picture Books
              </h2>
              <p className="text-sm text-muted">
                32-page AI-illustrated books from concept to print-ready PDF
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {childrensPackages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Full Pipeline */}
      <section id="pipeline" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
              <Rocket size={22} className="text-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Full Pipeline</h2>
              <p className="text-sm text-muted">
                Everything in one package — covers, branding, and series
                planning combined
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pipelinePackages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Updates & Revisions */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
              <RotateCcw size={22} className="text-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Updates & Revisions</h2>
              <p className="text-sm text-muted">
                Need changes to existing work? Purchase the specific update you
                need.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {updates.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-border bg-surface-light p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <span className="shrink-0 text-sm font-bold text-gold">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted">{item.desc}</p>
                <div className="mt-2 flex items-center gap-1.5">
                  <CalendarDays size={11} className="text-gold/60" />
                  <span className="text-[11px] font-medium text-gold/60">
                    {item.delivery}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
              <Zap size={22} className="text-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Add-ons</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-surface-light p-6">
              <Clock size={20} className="text-gold" />
              <h3 className="mt-3 text-sm font-semibold">
                Rush Fee — 48hr Turnaround
              </h3>
              <p className="mt-1 text-xs text-muted">
                Need it fast? Add 50% to any package for priority 48-hour
                delivery.
              </p>
              <p className="mt-3 text-sm font-bold text-gold">+50% of base</p>
            </div>
            <div className="rounded-xl border border-border bg-surface-light p-6">
              <RotateCcw size={20} className="text-gold" />
              <h3 className="mt-3 text-sm font-semibold">
                Returning Client Discount
              </h3>
              <p className="mt-1 text-xs text-muted">
                Previous clients receive 10% off any new order. Loyalty matters.
              </p>
              <p className="mt-3 text-sm font-bold text-gold">-10%</p>
            </div>
            <div className="rounded-xl border border-border bg-surface-light p-6">
              <Layers size={20} className="text-gold" />
              <h3 className="mt-3 text-sm font-semibold">
                Series Expansion Retainer
              </h3>
              <p className="mt-1 text-xs text-muted">
                Ongoing cover additions as you publish. Up to 1 new cover per
                month.
              </p>
              <p className="mt-3 text-sm font-bold text-gold">$150/quarter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to <span className="gold-gradient-text">Get Started</span>?
          </h2>
          <p className="mt-4 text-muted">
            Choose your package above and click &quot;Get Started,&quot; or
            reach out directly if you have questions about your project.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@metronagon.com"
              className="group flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Contact Us
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
