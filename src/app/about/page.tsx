import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Palette,
  Layers,
  Baby,
  Globe,
  Award,
  Users,
  Sparkles,
  Target,
  Zap,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Metronagon",
  description:
    "The story behind Metronagon. 22 published books, 3 complete series, and a proven creative pipeline built for authors and publishers.",
};

const milestones = [
  {
    icon: BookOpen,
    stat: "22",
    label: "Published Books",
    description:
      "Across fiction and non-fiction, each with professionally designed covers and series branding.",
  },
  {
    icon: Layers,
    stat: "3",
    label: "Complete Series",
    description:
      "Aztec Samurai Adventures (12 books), The Repetition Series, and The Reality Series — each with distinct visual identity.",
  },
  {
    icon: Users,
    stat: "30+",
    label: "Character Portraits",
    description:
      "Distinct characters with consistent style across the Aztec Samurai Adventures series.",
  },
  {
    icon: Globe,
    stat: "4",
    label: "Live Portfolio Sites",
    description:
      "Full Next.js portfolio websites for each series, deployed and maintained on Vercel.",
  },
];

const timeline = [
  {
    phase: "The Foundation",
    title: "22 Books, 3 Series",
    description:
      "It started with writing. Three complete book series — spanning fantasy fiction, self-improvement, and philosophical essays — each planned, written, and published from the ground up. Not one book at a time, but entire series designed as cohesive bodies of work.",
  },
  {
    phase: "The Visual Layer",
    title: "Professional Cover Design",
    description:
      "Every book needed a cover. Rather than outsource to generic designers, we built a custom creative pipeline — style guides, iterative refinement, and meticulous attention to detail. The result: dozens of professional covers with consistent series branding.",
  },
  {
    phase: "The System",
    title: "Production Pipeline",
    description:
      "Individual skills became a repeatable system. Style libraries, visual guides, post-processing workflows. What started as manual experimentation became a production pipeline capable of delivering professional results reliably and at speed.",
  },
  {
    phase: "The Business",
    title: "Metronagon",
    description:
      "The pipeline that created 22 books, 3 series, and dozens of professional covers is now available as a service. Metronagon — from the Greek words Metron (measure) and Agon (pursuit of excellence) — offers that same pipeline to authors and publishers who want professional results without building the system themselves.",
  },
];

const values = [
  {
    icon: Award,
    title: "Quality Over Quantity",
    description:
      "Every deliverable meets the same standard we hold for our own published work. No compromises, no shortcuts.",
  },
  {
    icon: Sparkles,
    title: "Proven, Not Theoretical",
    description:
      "Everything we offer has been tested on our own books first. Every cover, every series plan, every branding system has been through real production.",
  },
  {
    icon: Palette,
    title: "End-to-End Thinking",
    description:
      "We don't just design a cover — we think about how it fits the series, the genre, the platform, and the reader. Context is everything.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-gold/30">
              <Image
                src="/portfolio/ketan-shukla.jpeg"
                alt="Ketan Shukla — Founder, Metronagon Media"
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              About <span className="gold-gradient-text">Metronagon</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Metronagon exists because building a complete book series — from
              concept to covers to branding — shouldn&apos;t require a dozen
              different freelancers and months of coordination. We built the
              pipeline for ourselves first. Now we offer it to you.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {milestones.map((m) => (
              <div key={m.label} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                  <m.icon size={22} className="text-gold" />
                </div>
                <div className="text-3xl font-bold text-gold">{m.stat}</div>
                <div className="mt-1 text-sm font-semibold">{m.label}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            The <span className="gold-gradient-text">Name</span>
          </h2>
          <div className="mt-8 rounded-2xl border border-border bg-surface-light p-10">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
              <div className="text-center">
                <span className="text-2xl font-bold gold-gradient-text">
                  Metron
                </span>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                  Greek: μέτρον
                </p>
                <p className="mt-2 text-sm text-muted">
                  Measure. Standard.
                  <br />
                  The right proportion.
                </p>
              </div>
              <div className="text-3xl font-light text-gold/30">+</div>
              <div className="text-center">
                <span className="text-2xl font-bold gold-gradient-text">
                  Agon
                </span>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                  Greek: ἀγών
                </p>
                <p className="mt-2 text-sm text-muted">
                  Contest. Struggle.
                  <br />
                  The pursuit of excellence.
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-lg font-semibold">
                Together:{" "}
                <span className="gold-gradient-text">
                  The Measure of Excellence
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-border bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl">
            The <span className="gold-gradient-text">Journey</span>
          </h2>
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={item.phase} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-sm font-bold text-gold">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="mt-2 h-full w-px bg-border" />
                  )}
                </div>
                <div className="pb-2">
                  <div className="text-xs font-bold uppercase tracking-widest text-gold">
                    {item.phase}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Metronagon */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why <span className="gold-gradient-text">Metronagon</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Not just covers. A complete creative production pipeline built on
              real experience.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface-light p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                <Target size={22} className="text-gold" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">
                Proven Track Record
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                22 published books across 3 complete series. Every cover, every
                brand, every character portrait — created with the same pipeline
                we use for your project.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface-light p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                <Zap size={22} className="text-gold" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Professional Speed</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Our production systems — style guides, refined workflows, and
                proven creative processes — deliver professional results faster
                than traditional design, without sacrificing quality.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface-light p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                <Shield size={22} className="text-gold" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">
                End-to-End Pipeline
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Most creators do one thing. We do it all — series planning,
                cover design, branding, children&apos;s illustration. One
                partner for your entire publishing vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl">
            How We <span className="gold-gradient-text">Work</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-surface-light p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                  <v.icon size={22} className="text-gold" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Links */}
      <section className="border-y border-border bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
            See the <span className="gold-gradient-text">Proof</span>
          </h2>
          <p className="mx-auto mb-16 max-w-lg text-center text-muted">
            Every series below was created using the same pipeline we offer as a
            service. Visit the live sites to see the work firsthand.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Author Portfolio",
                url: "https://ketanshukla.com",
                desc: "Main portfolio showcasing all 22 books",
              },
              {
                name: "Aztec Samurai",
                url: "https://aztec.ketanshukla.com",
                desc: "12-book fantasy series with 30 characters",
              },
              {
                name: "Repetition Series",
                url: "https://repetition.ketanshukla.com",
                desc: "Non-fiction self-improvement series",
              },
              {
                name: "Reality Series",
                url: "https://reality.ketanshukla.com",
                desc: "Philosophical essay series",
              },
            ].map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-gold-glow group rounded-2xl border border-border bg-surface-light p-6 transition-all hover:border-gold/20"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold group-hover:text-gold transition-colors">
                    {site.name}
                  </h3>
                  <ArrowRight
                    size={14}
                    className="text-muted transition-all group-hover:translate-x-1 group-hover:text-gold"
                  />
                </div>
                <p className="mt-2 text-xs text-muted">{site.desc}</p>
                <div className="mt-3 flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span className="text-xs text-muted">Live</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Work <span className="gold-gradient-text">Together</span>?
          </h2>
          <p className="mt-4 text-muted">
            The same pipeline that produced 22 books and 3 complete series is
            ready for your project.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/services"
              className="group flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              View Services & Pricing
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
