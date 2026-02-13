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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Metronagon",
  description:
    "Professional book cover design, series branding, series architecture, and children's book illustration. View packages and pricing.",
};

const coverPackages = [
  {
    name: "Standard",
    price: "$150",
    description: "Single ebook cover with 3 concept variations and 1 polished final.",
    features: [
      "1600×2400, 300 DPI",
      "Photorealistic or stylised",
      "3 concept variations",
      "1 final polished cover",
      "1 round of revisions",
      "High-res PNG/JPG delivery",
    ],
  },
  {
    name: "Premium",
    price: "$300",
    popular: true,
    description: "Premium style cover with extra refinement and revision rounds.",
    features: [
      "1600×2400, 300 DPI",
      "Premium photorealistic style",
      "3 concept variations",
      "1 final polished cover",
      "2 rounds of revisions",
      "High-res PNG/JPG delivery",
      "Priority turnaround",
    ],
  },
];

const brandingPackages = [
  {
    name: "Starter",
    subtitle: "3 Books",
    price: "$500",
    features: [
      "Series logo design",
      "3 consistent ebook covers",
      "1 box set cover",
      "Style guide document",
    ],
  },
  {
    name: "Standard",
    subtitle: "5 Books",
    price: "$900",
    popular: true,
    features: [
      "Series logo design",
      "5 consistent ebook covers",
      "Box set cover",
      "YouTube thumbnail",
      "Style guide document",
    ],
  },
  {
    name: "Premium",
    subtitle: "8+ Books",
    price: "$1,500",
    features: [
      "Series logo design",
      "All ebook covers (8+)",
      "Box set cover",
      "Panoramic cover",
      "YouTube thumbnail",
      "Author portrait",
      "Complete style guide",
    ],
  },
];

const architecturePackages = [
  {
    name: "Small",
    subtitle: "3 Books",
    price: "$500",
    features: [
      "Series structure & arc design",
      "Chapter outlines per book",
      "Cross-book continuity plan",
      "Book descriptions for Amazon",
      "Front/back matter strategy",
    ],
  },
  {
    name: "Medium",
    subtitle: "5 Books",
    price: "$1,000",
    popular: true,
    features: [
      "Series structure & arc design",
      "Chapter outlines per book",
      "Cross-book continuity plan",
      "Book descriptions for Amazon",
      "Front/back matter strategy",
      "Character continuity tracking",
    ],
  },
  {
    name: "Large",
    subtitle: "8+ Books",
    price: "$2,000",
    features: [
      "Epic-scale series structure",
      "Chapter outlines per book",
      "Cross-book continuity plan",
      "Book descriptions for Amazon",
      "Front/back matter strategy",
      "Character continuity tracking",
      "Multi-arc progression design",
      "Series bible document",
    ],
  },
];

const childrensPackages = [
  {
    name: "Standard",
    price: "$1,200",
    description: "Complete 32-page AI-illustrated picture book.",
    features: [
      "Story writing or adaptation",
      "32 AI-illustrated pages",
      "Consistent character design",
      "Assembled PDF",
      "Individual page image files",
      "1 round of revisions",
    ],
  },
  {
    name: "Premium",
    price: "$2,500",
    popular: true,
    description: "Premium picture book with custom character design and print-ready formatting.",
    features: [
      "Story writing or adaptation",
      "32 AI-illustrated pages",
      "Custom character design system",
      "Print-ready formatting",
      "Assembled PDF",
      "Individual page image files",
      "2 rounds of revisions",
      "Story text document",
    ],
  },
];

const pipelinePackages = [
  {
    name: "Starter",
    subtitle: "3 Books",
    price: "$1,000",
    features: [
      "Series plan (3 books)",
      "3 ebook covers",
      "Series logo",
      "Box set cover",
      "Book descriptions",
      "1 round of revisions",
    ],
  },
  {
    name: "Standard",
    subtitle: "5 Books",
    price: "$2,200",
    popular: true,
    features: [
      "Series plan (5 books)",
      "5 ebook covers",
      "Full series branding",
      "Box set + thumbnail",
      "Book descriptions",
      "Continuity plan",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Premium",
    subtitle: "8+ Books",
    price: "$3,500",
    features: [
      "Full series plan (8+ books)",
      "All ebook covers",
      "Complete branding package",
      "Box set + panoramic + thumbnail",
      "Book descriptions",
      "Series bible",
      "Character tracking",
      "2 rounds of revisions",
    ],
  },
];

const updates = [
  { name: "Cover — Minor Revision", price: "$35", desc: "Text fix, color adjustment, subtitle change" },
  { name: "Cover — Major Revision", price: "$100", desc: "New concept, different style, layout overhaul" },
  { name: "Add New Book Cover", price: "$175", desc: "New cover matching existing series style" },
  { name: "Logo Refresh", price: "$200", desc: "Updated or redesigned series logo" },
  { name: "New Box Set Cover", price: "$150", desc: "Additional box set or panoramic cover" },
  { name: "Add Book to Plan", price: "$200", desc: "New outline + chapter structure + continuity update" },
  { name: "Plan Restructure", price: "$350", desc: "Reorder, split, or merge books in plan" },
  { name: "Book Description Update", price: "$40", desc: "Updated Amazon/retail description" },
  { name: "Children's Book — Page Edit", price: "$50/pg", desc: "Text/story edits with re-illustrated page" },
  { name: "Children's Book — Add Page", price: "$75/pg", desc: "New illustrated page in existing book" },
  { name: "Children's Book — New Character", price: "$100", desc: "New character or scene in existing style" },
];

function PackageCard({
  name,
  subtitle,
  price,
  description,
  features,
  popular,
}: {
  name: string;
  subtitle?: string;
  price: string;
  description?: string;
  features: string[];
  popular?: boolean;
}) {
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
          {subtitle && (
            <span className="text-sm text-muted">({subtitle})</span>
          )}
        </div>
        {description && (
          <p className="mt-1 text-sm text-muted">{description}</p>
        )}
        <div className="mt-4">
          <span className="text-3xl font-bold text-gold">{price}</span>
        </div>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check size={16} className="mt-0.5 shrink-0 text-gold" />
            <span className="text-sm text-muted">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="#contact"
        className={`mt-8 flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
          popular
            ? "bg-gold text-background hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            : "border border-border text-foreground hover:border-gold/30 hover:text-gold"
        }`}
      >
        Get Started
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
      <section id="branding" className="scroll-mt-20 border-t border-border bg-surface py-16">
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
              <h2 className="text-2xl font-bold">Series Architecture & Planning</h2>
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
      <section id="childrens" className="scroll-mt-20 border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
              <Baby size={22} className="text-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Children&apos;s Picture Books</h2>
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
                Everything in one package — covers, branding, and series planning combined
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
                Need changes to existing work? Purchase the specific update you need.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {updates.map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between gap-4 rounded-xl border border-border bg-surface-light p-5"
              >
                <div>
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="mt-1 text-xs text-muted">{item.desc}</p>
                </div>
                <span className="shrink-0 text-sm font-bold text-gold">
                  {item.price}
                </span>
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
              <h3 className="mt-3 text-sm font-semibold">Rush Fee — 48hr Turnaround</h3>
              <p className="mt-1 text-xs text-muted">
                Need it fast? Add 50% to any package for priority 48-hour delivery.
              </p>
              <p className="mt-3 text-sm font-bold text-gold">+50% of base</p>
            </div>
            <div className="rounded-xl border border-border bg-surface-light p-6">
              <RotateCcw size={20} className="text-gold" />
              <h3 className="mt-3 text-sm font-semibold">Returning Client Discount</h3>
              <p className="mt-1 text-xs text-muted">
                Previous clients receive 10% off any new order. Loyalty matters.
              </p>
              <p className="mt-3 text-sm font-bold text-gold">-10%</p>
            </div>
            <div className="rounded-xl border border-border bg-surface-light p-6">
              <Layers size={20} className="text-gold" />
              <h3 className="mt-3 text-sm font-semibold">Series Expansion Retainer</h3>
              <p className="mt-1 text-xs text-muted">
                Ongoing cover additions as you publish. Up to 1 new cover per month.
              </p>
              <p className="mt-3 text-sm font-bold text-gold">$300/quarter</p>
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
            Choose your package above and click &quot;Get Started,&quot; or reach out
            directly if you have questions about your project.
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
