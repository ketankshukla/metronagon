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
    price: "$450",
    delivery: "3\u20135 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COVER_STANDARD,
    description:
      "Single front cover for Kindle or paperback \u2014 2 concepts, 1 polished final.",
    features: [
      {
        title: "Front cover only",
        detail:
          "One front cover image for your Kindle ebook or KDP Print paperback \u2014 does not include spine or back cover",
      },
      {
        title: "1600\u00d72400, 300 DPI",
        detail:
          "Amazon KDP-ready dimensions delivered as high-resolution PNG/JPG",
      },
      {
        title: "Photorealistic or stylised",
        detail:
          "Choose between cinematic photorealistic scenes or stylized artistic illustrations \u2014 tailored to your genre",
      },
      {
        title: "2 concept variations",
        detail:
          "Two fully realized visual directions based on your brief \u2014 complete cover concepts you can compare side by side",
      },
      {
        title: "1 polished final",
        detail:
          "The winning concept refined with professional typography, color correction, and composition polish",
      },
      {
        title: "1 round of revisions",
        detail:
          "Adjustments to colors, text placement, font choice, or compositional elements on the selected final",
      },
    ],
  },
  {
    name: "Premium",
    price: "$650",
    delivery: "5\u20137 business days",
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COVER_PREMIUM,
    description: "Premium front cover with 3 concepts and 2 revision rounds.",
    features: [
      {
        title: "Front cover only",
        detail:
          "One front cover image for your Kindle ebook or KDP Print paperback \u2014 does not include spine or back cover",
      },
      {
        title: "1600\u00d72400, 300 DPI",
        detail:
          "Amazon KDP-ready dimensions delivered as high-resolution PNG/JPG",
      },
      {
        title: "Premium photorealistic style",
        detail:
          "Premium cinematic style with custom visual direction \u2014 the same system used for our published 22-book portfolio",
      },
      {
        title: "3 concept variations",
        detail:
          "Three distinct visual directions for maximum choice and genre accuracy",
      },
      {
        title: "1 polished final",
        detail:
          "The winning concept receives extended refinement \u2014 multiple creative passes and meticulous typography",
      },
      {
        title: "2 rounds of revisions",
        detail:
          "Two full revision cycles to fine-tune composition, color palette, typography, or any visual element",
      },
    ],
  },
];

const brandingPackages = [
  {
    name: "Starter",
    subtitle: "3 Books",
    price: "$1,400",
    delivery: "7\u201310 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BRANDING_STARTER,
    features: [
      {
        title: "3 front covers",
        detail:
          "Three visually consistent front cover images for Kindle and paperback \u2014 does not include spine or back cover",
      },
      {
        title: "Series logo",
        detail:
          "A custom logomark and wordmark that anchors the visual identity of your series",
      },
      {
        title: "Box set front cover",
        detail:
          "A front cover image for your Amazon box set listing \u2014 showcases the series as a single product",
      },
      {
        title: "1 round of revisions",
        detail:
          "Adjustments to any deliverable \u2014 covers, logo, or box set cover",
      },
    ],
  },
  {
    name: "Standard",
    subtitle: "5 Books",
    price: "$2,200",
    delivery: "10\u201314 business days",
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BRANDING_STANDARD,
    features: [
      {
        title: "5 front covers",
        detail:
          "Five visually consistent front cover images for Kindle and paperback \u2014 unified color, typography, and composition",
      },
      {
        title: "Series logo",
        detail:
          "Custom logomark and wordmark designed to anchor the visual identity across all 5 books",
      },
      {
        title: "Box set front cover",
        detail:
          "Front cover image for your Amazon box set listing, showcasing the full 5-book collection",
      },
      {
        title: "1 round of revisions",
        detail:
          "Adjustments to any deliverable \u2014 covers, logo, or box set cover",
      },
    ],
  },
  {
    name: "Premium",
    subtitle: "10 Books",
    price: "$3,500",
    delivery: "14\u201321 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BRANDING_PREMIUM,
    features: [
      {
        title: "10 front covers",
        detail:
          "Ten visually consistent front cover images for Kindle and paperback \u2014 every cover looks like it belongs in the series",
      },
      {
        title: "Series logo",
        detail:
          "Premium logomark and wordmark anchoring the visual identity of your entire series",
      },
      {
        title: "Box set front cover",
        detail:
          "Front cover image for your Amazon box set listing, showcasing the complete collection",
      },
      {
        title: "2 rounds of revisions",
        detail:
          "Two full revision cycles covering any deliverable \u2014 covers, logo, or box set cover",
      },
    ],
  },
];

const childrensPackages = [
  {
    name: "Standard",
    price: "$1,800",
    delivery: "10\u201314 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_STANDARD,
    description: "32 illustrated pages with front cover, assembled into a PDF.",
    features: [
      {
        title: "32 fully illustrated pages",
        detail:
          "Every page receives a full-color illustration using a consistent art style \u2014 Pixar/Disney-inspired aesthetic or your preferred direction",
      },
      {
        title: "Consistent character design",
        detail:
          "Main characters maintain the same appearance, proportions, and clothing across all 32 pages using style anchoring",
      },
      {
        title: "Front cover image",
        detail:
          "A front cover illustration for your children\u2019s book \u2014 does not include spine or back cover",
      },
      {
        title: "Assembled PDF",
        detail:
          "Complete, page-ordered PDF with illustrations and text laid out together \u2014 ready for digital distribution",
      },
      {
        title: "Individual page files",
        detail:
          "All 32 page illustrations delivered as separate high-resolution image files",
      },
      {
        title: "1 round of revisions",
        detail:
          "Adjustments to illustrations, text placement, character expressions, or scene composition",
      },
    ],
  },
  {
    name: "Plus",
    price: "$2,400",
    delivery: "14\u201318 business days",
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_PLUS,
    description:
      "Print-ready picture book with front and back cover, 2 revision rounds.",
    features: [
      {
        title: "32 fully illustrated pages",
        detail:
          "Full-color illustrations on every page with enhanced quality \u2014 additional refinement passes for a polished result",
      },
      {
        title: "Consistent character design",
        detail:
          "Main characters maintain the same appearance, proportions, and clothing across all 32 pages using style anchoring",
      },
      {
        title: "Front and back cover images",
        detail:
          "Front cover and back cover illustrations for your children\u2019s book \u2014 does not include spine design",
      },
      {
        title: "Print-ready PDF",
        detail:
          "Book formatted to Amazon KDP Print specifications \u2014 proper bleed, margins, and gutter allowance for paperback",
      },
      {
        title: "Individual page files",
        detail:
          "All 32 illustrations plus cover art delivered as separate high-resolution files",
      },
      {
        title: "2 rounds of revisions",
        detail:
          "Two full revision cycles \u2014 adjust illustrations, text, layout, or any visual element across both rounds",
      },
    ],
  },
  {
    name: "Premium",
    price: "$3,200",
    delivery: "14\u201321 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_CHILDRENS_PREMIUM,
    description:
      "Premium picture book with character reference sheets and full print package.",
    features: [
      {
        title: "32 fully illustrated pages",
        detail:
          "Full-color illustrations on every page with premium quality \u2014 multiple refinement passes for the highest visual standard",
      },
      {
        title: "Character reference sheets",
        detail:
          "Dedicated character reference sheets created before page production \u2014 front view, expressions, and clothing defined for consistency",
      },
      {
        title: "Front and back cover images",
        detail:
          "Front cover and back cover illustrations for your children\u2019s book \u2014 does not include spine design",
      },
      {
        title: "Print-ready PDF",
        detail:
          "Book formatted to Amazon KDP Print specifications \u2014 proper bleed, margins, and gutter allowance for paperback",
      },
      {
        title: "Individual page files",
        detail:
          "All 32 illustrations plus cover art delivered as separate high-resolution files",
      },
      {
        title: "2 rounds of revisions",
        detail:
          "Two full revision cycles \u2014 adjust illustrations, text, layout, or any visual element across both rounds",
      },
    ],
  },
];

const pipelinePackages = [
  {
    name: "Starter",
    subtitle: "3 Books",
    price: "$1,800",
    delivery: "7\u201310 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_STARTER,
    features: [
      {
        title: "3 front covers",
        detail:
          "Three visually consistent front covers for Kindle and paperback, each at 1600\u00d72400, 300 DPI",
      },
      {
        title: "Series logo",
        detail:
          "Custom logomark and wordmark that anchors the visual identity of your 3-book series",
      },
      {
        title: "Box set front cover",
        detail:
          "Front cover image showcasing all 3 books as a single product \u2014 for your Amazon box set listing",
      },
      {
        title: "3 book descriptions",
        detail:
          "Keyword-optimized Amazon descriptions for all 3 books \u2014 compelling hooks that drive conversions",
      },
      {
        title: "1 round of revisions",
        detail:
          "Adjustments to any deliverable \u2014 covers, logo, box set cover, or descriptions",
      },
    ],
  },
  {
    name: "Standard",
    subtitle: "5 Books",
    price: "$2,800",
    delivery: "10\u201314 business days",
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_STANDARD,
    features: [
      {
        title: "5 front covers",
        detail:
          "Five visually consistent front covers for Kindle and paperback \u2014 unified color, typography, and composition",
      },
      {
        title: "Series logo",
        detail:
          "Custom logomark and wordmark anchoring the visual identity across all 5 books",
      },
      {
        title: "Box set front cover",
        detail:
          "Front cover image showcasing the full 5-book collection \u2014 for your Amazon box set listing",
      },
      {
        title: "5 book descriptions",
        detail:
          "Keyword-optimized Amazon descriptions for all 5 books \u2014 each working as a standalone purchase hook",
      },
      {
        title: "2 rounds of revisions",
        detail:
          "Two full revision cycles covering any deliverable \u2014 covers, logo, box set cover, or descriptions",
      },
    ],
  },
  {
    name: "Premium",
    subtitle: "10 Books",
    price: "$4,500",
    delivery: "14\u201321 business days",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PIPELINE_PREMIUM,
    features: [
      {
        title: "10 front covers",
        detail:
          "Ten visually consistent front covers for Kindle and paperback \u2014 every cover is genre-accurate and visually unified",
      },
      {
        title: "Series logo",
        detail:
          "Premium logomark and wordmark anchoring the visual identity of your entire series",
      },
      {
        title: "Box set front cover",
        detail:
          "Front cover image showcasing the complete collection \u2014 for your Amazon box set listing",
      },
      {
        title: "10 book descriptions",
        detail:
          "Keyword-optimized Amazon descriptions for every book \u2014 each compelling, accurate, and conversion-focused",
      },
      {
        title: "2 rounds of revisions",
        detail:
          "Two full revision cycles across every deliverable \u2014 covers, logo, box set cover, and descriptions",
      },
    ],
  },
];

const updates = [
  {
    name: "Cover \u2014 Minor Revision",
    price: "$75",
    desc: "Text fix, color adjustment, subtitle change",
    delivery: "1 business day",
  },
  {
    name: "Cover \u2014 Major Revision",
    price: "$250",
    desc: "New concept, different style, layout overhaul",
    delivery: "1 business day",
  },
  {
    name: "Add New Book Cover",
    price: "$350",
    desc: "New front cover matching existing series style",
    delivery: "1 business day",
  },
  {
    name: "Logo Refresh",
    price: "$200",
    desc: "Updated or redesigned series logo",
    delivery: "1 business day",
  },
  {
    name: "New Box Set Front Cover",
    price: "$200",
    desc: "Additional box set front cover image",
    delivery: "1 business day",
  },
  {
    name: "Book Description Update",
    price: "$75",
    desc: "Updated Amazon/retail description",
    delivery: "1 business day",
  },
  {
    name: "Children\u2019s Book \u2014 Page Edit",
    price: "$75/pg",
    desc: "Re-illustrated page with text updates",
    delivery: "1 day per page",
  },
  {
    name: "Children\u2019s Book \u2014 Add Page",
    price: "$100/pg",
    desc: "New illustrated page in existing book",
    delivery: "1 day per page",
  },
  {
    name: "Children\u2019s Book \u2014 New Character",
    price: "$200",
    desc: "New character design in existing style",
    delivery: "1 business day",
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
              <h2 className="text-2xl font-bold">Front Cover Design</h2>
              <p className="text-sm text-muted">
                Front cover images for Kindle and paperback — photorealistic or
                stylised, Amazon-ready
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
                You provide the story, we create the art — 32 pages of
                illustration
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
                Front covers, series logo, box set cover, and book descriptions
                in one package
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
          <div className="grid gap-6 sm:grid-cols-2">
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
                a: "High-resolution PNG and JPG files at 1600\u00d72400, 300 DPI \u2014 ready for Amazon KDP Kindle and Paperback. Children\u2019s books include assembled PDFs.",
              },
              {
                q: "How long does delivery take?",
                a: "Most packages deliver in 1\u20132 business days. Larger packages (10-book branding or pipeline) take 3\u20134 days. Need it faster? Add the 48-hour Rush Fee.",
              },
              {
                q: "What exactly is a front cover?",
                a: "We design the front cover image only \u2014 the image buyers see on Amazon. We do not design spines or back covers. For children\u2019s books, Plus and Premium tiers include both front and back cover images (no spine).",
              },
              {
                q: "What if I\u2019m not happy with the concepts?",
                a: "Every package includes at least 1 round of revisions (Premium tiers get 2). Revisions cover colors, typography, layout, composition \u2014 anything within the scope of your package.",
              },
              {
                q: "Can I expand my series later?",
                a: "Yes. Purchase an Add New Book Cover ($350) anytime to add a new front cover matching your existing series style.",
              },
              {
                q: "Do you write children\u2019s book stories?",
                a: "No \u2014 we focus on illustration only. You provide the story text, and we create all the artwork: page illustrations, front cover, and back cover (Plus/Premium tiers).",
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
