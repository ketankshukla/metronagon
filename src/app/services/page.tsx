"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import {
  Palette,
  Layers,
  Baby,
  Rocket,
  Check,
  ArrowRight,
  Clock,
  RotateCcw,
  Zap,
  CalendarDays,
  ChevronDown,
  Mail,
} from "lucide-react";

interface Feature {
  title: string;
  detail: string;
}

const coverPackages = [
  {
    name: "Standard",
    price: "$99",
    delivery: "2 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD,
    description:
      "Single ebook cover with 3 concept variations and 1 polished final.",
    features: [
      {
        title: "1600\u00d72400, 300 DPI",
        detail:
          "Amazon KDP-ready dimensions optimized for retina screens and print-on-demand services like IngramSpark",
      },
      {
        title: "Photorealistic or stylised",
        detail:
          "Choose between cinematic photorealistic scenes or stylized artistic illustrations \u2014 tailored to your genre\u2019s visual expectations",
      },
      {
        title: "3 concept variations",
        detail:
          "Three fully realized visual directions based on your brief \u2014 not rough sketches, but complete cover concepts you can compare side by side",
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
    price: "$175",
    delivery: "3 business days",
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COVER_PREMIUM,
    description:
      "Premium style cover with extra refinement and revision rounds.",
    features: [
      {
        title: "1600\u00d72400, 300 DPI",
        detail:
          "Amazon KDP-ready dimensions optimized for retina screens and print-on-demand services",
      },
      {
        title: "Premium photorealistic style",
        detail:
          "Premium cinematic style with custom visual direction for a gallery-quality result \u2014 the same system used for our published 22-book portfolio",
      },
      {
        title: "3 concept variations",
        detail:
          "Three distinct visual directions, each using the premium style guide for maximum visual impact and genre accuracy",
      },
      {
        title: "1 final polished cover",
        detail:
          "The winning concept receives extended refinement \u2014 multiple creative passes, advanced post-processing, and meticulous typography",
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
          "Placed at the front of the production queue with dedicated time \u2014 your project gets focused, uninterrupted attention",
      },
    ],
  },
];

const brandingPackages = [
  {
    name: "Starter",
    subtitle: "3 Books",
    price: "$275",
    delivery: "3 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BRANDING_STARTER,
    features: [
      {
        title: "Series logo design",
        detail:
          "A custom logomark and wordmark that anchors the visual identity of your series \u2014 designed to work at favicon size and hero banner scale",
      },
      {
        title: "3 consistent ebook covers",
        detail:
          "Three covers built from a shared style guide ensuring color palette, typography, lighting direction, and composition remain visually unified",
      },
      {
        title: "1 box set cover",
        detail:
          "A landscape composite cover designed for Amazon box set listings \u2014 showcases the series as a single compelling product",
      },
      {
        title: "Style guide document",
        detail:
          "PDF documenting fonts, hex colors, composition rules, and visual guidelines so future covers or marketing materials maintain perfect consistency",
      },
    ],
  },
  {
    name: "Standard",
    subtitle: "5 Books",
    price: "$475",
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
          "Five covers sharing a unified style guide \u2014 consistent color grading, typography, lighting, and composition across the entire series",
      },
      {
        title: "Box set cover",
        detail:
          "Landscape composite cover for Amazon box set listings, designed to showcase the full 5-book collection as one premium product",
      },
      {
        title: "YouTube thumbnail",
        detail:
          "A 1280\u00d7720 branded promotional thumbnail using series visual language \u2014 optimized for YouTube, social media, or advertising",
      },
      {
        title: "Style guide document",
        detail:
          "Comprehensive PDF with all visual specifications: colors, fonts, composition rules, visual guidelines, and usage guidelines",
      },
    ],
  },
  {
    name: "Premium",
    subtitle: "8+ Books",
    price: "$800",
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
          "Every book in the series receives a cover built from the same style guide \u2014 whether it\u2019s 8, 10, or 12 books, every cover looks like it belongs",
      },
      {
        title: "Box set cover",
        detail:
          "Landscape composite cover for Amazon box set listings, designed to showcase the complete collection",
      },
      {
        title: "Panoramic cover",
        detail:
          "Wide-format panoramic scene connecting all major characters or elements \u2014 ideal for marketing banners, website heroes, and print posters",
      },
      {
        title: "YouTube thumbnail",
        detail:
          "Branded 1280\u00d7720 thumbnail optimized for YouTube, social media, or advertising campaigns",
      },
      {
        title: "Author portrait",
        detail:
          "Professional author portrait rendered in the series\u2019 visual style \u2014 for author pages, social profiles, and book back matter",
      },
      {
        title: "Complete style guide",
        detail:
          "Comprehensive document covering every visual decision: colors, fonts, composition rules, visual guidelines, character descriptions, and expansion guidelines",
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
    description: "Complete 32-page illustrated picture book for digital distribution.",
    features: [
      {
        title: "Story writing or adaptation",
        detail:
          "Original story creation or adaptation of your concept into a picture-book-friendly structure with age-appropriate language and pacing",
      },
      {
        title: "32 fully illustrated pages",
        detail:
          "Every page receives a full-color illustration using a consistent art style \u2014 Pixar/Disney-inspired aesthetic or your preferred direction",
      },
      {
        title: "Consistent character design",
        detail:
          "Main characters maintain the same appearance, proportions, and clothing across all 32 pages using style anchoring and reference sheets",
      },
      {
        title: "Assembled PDF",
        detail:
          "Complete, page-ordered PDF with illustrations and text laid out together \u2014 ready for digital distribution or print submission",
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
    name: "Plus",
    price: "$750",
    delivery: "6 business days",
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_PLUS,
    description:
      "Print-ready picture book with enhanced illustrations and 2 revision rounds.",
    features: [
      {
        title: "Story writing or adaptation",
        detail:
          "Original story creation or adaptation with enhanced narrative structure and vocabulary calibration for the target age group",
      },
      {
        title: "32 fully illustrated pages",
        detail:
          "Full-color illustrations on every page with enhanced quality \u2014 additional refinement passes per page for a polished result",
      },
      {
        title: "Consistent character design",
        detail:
          "Main characters maintain the same appearance, proportions, and clothing across all 32 pages using style anchoring and reference sheets",
      },
      {
        title: "Print-ready formatting",
        detail:
          "Book formatted to exact print-on-demand specifications \u2014 proper bleed, margins, gutter allowance, and color profile (CMYK-safe) for IngramSpark or KDP Print",
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
          "Two full revision cycles \u2014 adjust illustrations, text, layout, character expressions, backgrounds, or any visual element across both rounds",
      },
    ],
  },
  {
    name: "Premium",
    price: "$1,000",
    delivery: "7 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_PREMIUM,
    description:
      "Premium picture book with custom character design system and full print package.",
    features: [
      {
        title: "Story writing or adaptation",
        detail:
          "Original story creation or adaptation with enhanced narrative structure, vocabulary calibration, and pedagogical consideration for the target age group",
      },
      {
        title: "32 fully illustrated pages",
        detail:
          "Full-color illustrations on every page with premium quality \u2014 multiple refinement passes per page to ensure the highest visual standard",
      },
      {
        title: "Custom character design system",
        detail:
          "Dedicated character reference sheets created before page production begins \u2014 front view, side view, expressions, and clothing defined as a reusable system",
      },
      {
        title: "Print-ready formatting",
        detail:
          "Book formatted to exact print-on-demand specifications \u2014 proper bleed, margins, gutter allowance, and color profile (CMYK-safe) for services like IngramSpark or KDP Print",
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
          "Two full revision cycles \u2014 adjust illustrations, text, layout, character expressions, backgrounds, or any visual element across both rounds",
      },
      {
        title: "Story text document",
        detail:
          "Separate document with the complete story text, page-by-page \u2014 useful for audio narration, translation, or future adaptations",
      },
    ],
  },
];

const pipelinePackages = [
  {
    name: "Starter",
    subtitle: "3 Books",
    price: "$425",
    savings: "Save $50",
    delivery: "5 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_STARTER,
    features: [
      {
        title: "Series plan (3 books)",
        detail:
          "Complete series arc, chapter outlines for all 3 books, and cross-book continuity plan \u2014 the architectural foundation for your series",
      },
      {
        title: "3 ebook covers",
        detail:
          "Three visually consistent covers built from a shared style guide, each at 1600\u00d72400, 300 DPI, Amazon KDP-ready",
      },
      {
        title: "Series logo",
        detail:
          "Custom logomark and wordmark that anchors the visual identity of your 3-book series",
      },
      {
        title: "Box set cover",
        detail:
          "Landscape composite cover showcasing all 3 books as a single product \u2014 designed for Amazon box set listings",
      },
      {
        title: "Book descriptions",
        detail:
          "Keyword-optimized Amazon descriptions for all 3 books \u2014 compelling hooks that drive conversions while maintaining series continuity",
      },
      {
        title: "1 round of revisions",
        detail:
          "Adjustments to any deliverable \u2014 covers, plan structure, descriptions, or branding elements",
      },
    ],
  },
  {
    name: "Standard",
    subtitle: "5 Books",
    price: "$800",
    savings: "Save $75",
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
          "Five unified covers with shared style guide \u2014 consistent color, typography, lighting, and composition across the entire series",
      },
      {
        title: "Full series branding",
        detail:
          "Series logo, style guide document, and complete visual identity system designed for consistent expansion",
      },
      {
        title: "Box set + thumbnail",
        detail:
          "Landscape box set cover for Amazon plus a 1280\u00d7720 YouTube/social media thumbnail using the series visual language",
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
          "Two full revision cycles covering any deliverable \u2014 plans, covers, branding, descriptions, or continuity documents",
      },
    ],
  },
  {
    name: "Premium",
    subtitle: "8+ Books",
    price: "$1,400",
    savings: "Save $200",
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
          "Every book receives a cover from the same style guide \u2014 whether 8, 10, or 12+ books, every cover is visually unified and genre-accurate",
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
          "Keyword-optimized Amazon descriptions for every book in the series \u2014 each one compelling, accurate, and conversion-focused",
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
          "Two full revision cycles across every deliverable \u2014 covers, plans, branding, bible, descriptions, and continuity documents",
      },
    ],
  },
];

const updates = [
  {
    name: "Cover \u2014 Minor Revision",
    price: "$20",
    desc: "Text fix, color adjustment, subtitle change",
    delivery: "1 business day",
  },
  {
    name: "Cover \u2014 Major Revision",
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
    name: "Children\u2019s Book \u2014 Page Edit",
    price: "$25/pg",
    desc: "Text/story edits with re-illustrated page",
    delivery: "1 day per page",
  },
  {
    name: "Children\u2019s Book \u2014 Add Page",
    price: "$40/pg",
    desc: "New illustrated page in existing book",
    delivery: "1 day per page",
  },
  {
    name: "Children\u2019s Book \u2014 New Character",
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
  savings,
}: {
  name: string;
  subtitle?: string;
  price: string;
  delivery: string;
  description?: string;
  features: Feature[];
  popular?: boolean;
  priceId?: string;
  savings?: string;
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
      {(popular || savings) && (
        <div className="absolute -top-3 left-6 right-6 flex flex-wrap items-center gap-2">
          {popular && (
            <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-background">
              Most Popular
            </span>
          )}
          {savings && (
            <span className="ml-auto rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
              {savings}
            </span>
          )}
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
        className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
      >
        Get Started &mdash; {price}
      </Link>
    </div>
  );
}

function UpdatesAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border-t border-border bg-surface py-16">
      <div className="mx-auto max-w-6xl px-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
              <RotateCcw size={22} className="text-gold" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold">Updates & Revisions</h2>
              <p className="text-sm text-muted">
                Already a client? Purchase updates to existing work.
              </p>
            </div>
          </div>
          <ChevronDown
            size={24}
            className={`shrink-0 text-gold transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        )}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-24 md:pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Services & <span className="gold-gradient-text">Pricing</span>
            </h1>
            <p className="mt-4 text-lg text-muted">
              Choose your package, pay securely, and we begin immediately. Every
              price is final &mdash; no hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Anchor Nav */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "#covers", icon: Palette, label: "Covers" },
              { href: "#branding", icon: Layers, label: "Branding" },
              { href: "#childrens", icon: Baby, label: "Children's" },
              { href: "#pipeline", icon: Rocket, label: "Full Pipeline" },
              { href: "#faq", icon: ChevronDown, label: "FAQ" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 rounded-lg border border-border bg-surface-light px-4 py-2 text-sm font-medium text-muted transition-all hover:border-gold/30 hover:text-gold"
              >
                <item.icon size={14} />
                {item.label}
              </a>
            ))}
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
                Professional covers, photorealistic or stylised, Amazon-ready
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brandingPackages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Children's Books */}
      <section
        id="childrens"
        className="scroll-mt-20 border-t border-border py-16"
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
                32-page illustrated books from concept to print-ready PDF
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {childrensPackages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Full Pipeline */}
      <section
        id="pipeline"
        className="scroll-mt-20 border-t border-border bg-surface py-16"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
              <Rocket size={22} className="text-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Full Pipeline</h2>
              <p className="text-sm text-muted">
                Everything in one package &mdash; covers, branding, series
                planning, and book descriptions combined
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pipelinePackages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Updates & Revisions — Collapsible */}
      <UpdatesAccordion />

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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-surface-light p-6">
              <Clock size={20} className="text-gold" />
              <h3 className="mt-3 text-sm font-semibold">
                Rush Fee &mdash; 48hr Turnaround
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
            <div className="rounded-xl border border-gold/30 bg-gold/[0.03] p-6">
              <Layers size={20} className="text-gold" />
              <h3 className="mt-3 text-sm font-semibold">
                Series Expansion Retainer
              </h3>
              <p className="mt-1 text-xs text-muted">
                Publishing regularly? Lock in covers at $50 each. Up to 1 new
                cover per month, style files kept on file.
              </p>
              <p className="mt-3 text-sm font-bold text-gold">$150/quarter</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How It <span className="gold-gradient-text">Works</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Simple, transparent, professional. Pay first, receive excellence.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 md:grid-cols-4">
            <div className="bg-surface-light p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-gold">
                Step 01
              </div>
              <h3 className="mt-3 text-lg font-semibold">
                Choose Your Package
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Browse our services, select the package that fits your project,
                and pay securely through Stripe.
              </p>
            </div>
            <div className="bg-surface-light p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-gold">
                Step 02
              </div>
              <h3 className="mt-3 text-lg font-semibold">Share Your Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Tell us about your book, series, or project. Share your
                concepts, references, and creative direction.
              </p>
            </div>
            <div className="bg-surface-light p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-gold">
                Step 03
              </div>
              <h3 className="mt-3 text-lg font-semibold">We Create</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Using our proven creative pipeline, we craft your covers,
                branding, or series plan to the highest standard.
              </p>
            </div>
            <div className="bg-surface-light p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-gold">
                Step 04
              </div>
              <h3 className="mt-3 text-lg font-semibold">You Receive</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                High-resolution files delivered via Google Drive or ZIP. Ready
                for Amazon, print, or any platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
            Frequently Asked{" "}
            <span className="gold-gradient-text">Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What file formats do I receive?",
                a: "High-resolution PNG and JPG files at 1600\u00d72400, 300 DPI \u2014 ready for Amazon KDP, IngramSpark, or any publishing platform. Children\u2019s books include assembled PDFs.",
              },
              {
                q: "How long does delivery take?",
                a: "Standard covers: 2 business days. Series branding: 3\u20137 days depending on tier. Children\u2019s books: 5\u20137 days. Full Pipeline: 5\u201310 days. Need it faster? Add the 48-hour Rush Fee.",
              },
              {
                q: "What if I\u2019m not happy with the concepts?",
                a: "Every package includes at least 1 round of revisions (Premium tiers get 2). Revisions cover colors, typography, layout, composition \u2014 anything within the scope of your package.",
              },
              {
                q: "Can I expand my series later?",
                a: "Absolutely. The Series Expansion Retainer ($150/quarter) locks in covers at $50 each. Or purchase individual Add New Book Cover updates ($85) anytime.",
              },
              {
                q: "Do you design print/paperback covers?",
                a: "Our standard deliverables are ebook covers. For full print wraps (spine + back cover), contact us at hello@metronagon.com for a custom quote.",
              },
              {
                q: "How do revisions work?",
                a: "After you receive your concepts, you tell us what to change \u2014 colors, text, composition, style. We make the adjustments and deliver the updated files, typically within 1 business day.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-border bg-surface-light p-6"
              >
                <h3 className="text-sm font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Questions Before You{" "}
            <span className="gold-gradient-text">Order</span>?
          </h2>
          <p className="mt-3 text-muted">
            Not sure which package is right? Need a custom quote? Just ask
            &mdash; we respond within 24 hours.
          </p>
          <a
            href="mailto:hello@metronagon.com"
            className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-gold transition-colors hover:text-gold-light"
          >
            <Mail size={18} />
            hello@metronagon.com
          </a>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="border-t border-border py-24">
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
