import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Palette, Layers, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Metronagon",
  description:
    "Portfolio case studies from Metronagon Media. See how we built series branding, cover systems, and children's books for real published projects.",
};

const caseStudies = [
  {
    icon: Layers,
    title: "12-Book Fantasy Series — Full Branding Package",
    project: "Aztec Samurai Adventures",
    description:
      "A complete visual identity system for a 12-book fantasy series. Every cover shares the same style guide — consistent color grading, typography, lighting direction, and compositional language. The package included 12 individual ebook covers, a custom series logo, two box set covers, a landscape panoramic, and 8 character portraits — all unified under a single visual identity.",
    deliverables: [
      "12 ebook covers (1600x2400, 300 DPI)",
      "Custom series logo",
      "2 box set covers",
      "Landscape panoramic",
      "8 character portraits",
      "Comprehensive style guide",
    ],
    images: [
      "/portfolio/aztec/covers/book1-cover.jpg",
      "/portfolio/aztec/covers/book2-cover.jpg",
      "/portfolio/aztec/covers/book3-cover.jpg",
      "/portfolio/aztec/covers/book4-cover.jpg",
    ],
    logoImage: "/portfolio/aztec/series-logo.png",
    highlight: "12 covers, 1 visual identity",
  },
  {
    icon: Palette,
    title: "5-Book Non-Fiction Series — Brand Identity",
    project: "Repetition: Mother of Mastery",
    description:
      "A professional brand identity for a 5-book self-improvement series. The brief required an authoritative, modern look that signals 'professional development' at a glance. The deliverables included five cohesive ebook covers, a series logo, a landscape panoramic for the box set, and a YouTube thumbnail — all sharing a consistent typographic and color system.",
    deliverables: [
      "5 ebook covers (1600x2400, 300 DPI)",
      "Custom series logo",
      "Landscape box set cover",
      "YouTube thumbnail (1280x720)",
      "Style guide document",
    ],
    images: [
      "/portfolio/repetition/book1-cover.jpg",
      "/portfolio/repetition/book2-cover.jpg",
      "/portfolio/repetition/book3-cover.jpg",
      "/portfolio/repetition/book4-cover.jpg",
    ],
    logoImage: "/portfolio/repetition/series-logo.png",
    highlight: "Consistent, authoritative branding",
  },
  {
    icon: BookOpen,
    title: "5-Book Essay Series — Minimalist Aesthetic",
    project: "Reality Without Belief",
    description:
      "A philosophical essay series that required a completely different aesthetic — contemplative, minimal, and intellectual. The covers use restrained color palettes with quiet depth. The series logo is understated yet unmistakable. This project demonstrated the pipeline's versatility: the same production system that created bold fantasy covers also produced refined, minimal philosophical designs.",
    deliverables: [
      "5 ebook covers (1600x2400, 300 DPI)",
      "Custom series logo",
      "Landscape box set cover",
      "YouTube thumbnail (1280x720)",
      "Style guide document",
    ],
    images: [
      "/portfolio/reality/book1-cover.jpg",
      "/portfolio/reality/book2-cover.jpg",
      "/portfolio/reality/book3-cover.jpg",
      "/portfolio/reality/book4-cover.jpg",
    ],
    logoImage: "/portfolio/reality/series-logo.png",
    highlight: "Same pipeline, completely different aesthetic",
  },
  {
    icon: Sparkles,
    title: "32-Page Children's Picture Book",
    project: "Ixchel and the Stolen Sun",
    description:
      "A complete 32-page children's picture book with full-color illustrations on every page. The main character maintains consistent appearance, proportions, and clothing across all 32 pages — one of the most difficult challenges in illustrated book production. The project included story development, all illustrations, and a fully assembled print-ready PDF.",
    deliverables: [
      "32 fully illustrated pages",
      "Front and back cover art",
      "Consistent character design throughout",
      "Assembled print-ready PDF",
      "Individual page image files",
      "Complete story text document",
    ],
    images: [
      "/portfolio/childrens/front-cover.jpg",
      "/portfolio/childrens/page-05.jpg",
      "/portfolio/childrens/page-12.jpg",
      "/portfolio/childrens/page-20.jpg",
    ],
    logoImage: null,
    highlight: "32 pages, consistent character on every page",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-24 md:pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Portfolio{" "}
              <span className="gold-gradient-text">Case Studies</span>
            </h1>
            <p className="mt-4 text-lg text-muted">
              Real projects, real results. Every project below was produced using
              the exact same creative pipeline available to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((cs, i) => (
              <div key={i} className="space-y-8">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                    <cs.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                      {cs.title}
                    </h2>
                    <p className="mt-1 text-sm text-gold">{cs.project}</p>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                  <span className="text-xs font-medium text-gold">
                    {cs.highlight}
                  </span>
                </div>

                {/* Description */}
                <p className="max-w-3xl text-sm leading-relaxed text-muted">
                  {cs.description}
                </p>

                {/* Cover Images Grid */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {cs.images.map((img, j) => (
                    <div
                      key={j}
                      className="overflow-hidden rounded-lg border border-border"
                    >
                      <Image
                        src={img}
                        alt={`${cs.project} — cover ${j + 1}`}
                        width={400}
                        height={600}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Logo Image */}
                {cs.logoImage && (
                  <div className="max-w-xs">
                    <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted">
                      Series Logo
                    </p>
                    <div className="overflow-hidden rounded-lg border border-border bg-black p-4">
                      <Image
                        src={cs.logoImage}
                        alt={`${cs.project} — series logo`}
                        width={300}
                        height={100}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Deliverables */}
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted">
                    Deliverables
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {cs.deliverables.map((d, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider (except last) */}
                {i < caseStudies.length - 1 && (
                  <div className="border-t border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Want Results Like{" "}
            <span className="gold-gradient-text">These</span>?
          </h2>
          <p className="mt-3 text-sm text-muted">
            Every project above was created using the same pipeline and process
            available to you. Browse our packages to get started.
          </p>
          <Link
            href="/services"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            View Services & Pricing
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
