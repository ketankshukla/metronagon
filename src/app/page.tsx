import Link from "next/link";
import {
  Palette,
  BookOpen,
  Layers,
  Baby,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Shield,
  ChevronRight,
} from "lucide-react";
import MetronagonLogo from "@/components/MetronagonLogo";

const services = [
  {
    icon: Palette,
    title: "Ebook Cover Design",
    description:
      "Photorealistic and stylised AI-generated covers at 1600×2400, 300 DPI. Three concepts, one polished final.",
    price: "From $75",
    href: "/services#covers",
  },
  {
    icon: Layers,
    title: "Series Branding",
    description:
      "Consistent visual identity across your entire series. Logos, covers, box sets, panoramic art, and thumbnails.",
    price: "From $250",
    href: "/services#branding",
  },
  {
    icon: BookOpen,
    title: "Series Architecture",
    description:
      "Complete series blueprints. Chapter outlines, continuity plans, book descriptions, and cross-book arc design.",
    price: "From $200",
    href: "/services#architecture",
  },
  {
    icon: Baby,
    title: "Children's Picture Books",
    description:
      "32-page AI-illustrated picture books with consistent character design. Story to assembled PDF.",
    price: "From $500",
    href: "/services#childrens",
  },
];

const stats = [
  { value: "22", label: "Books Published" },
  { value: "3", label: "Complete Series" },
  { value: "30+", label: "Character Portraits" },
  { value: "100%", label: "AI-Powered Pipeline" },
];

const process = [
  {
    step: "01",
    title: "Choose Your Package",
    description:
      "Browse our services, select the package that fits your project, and pay securely through Stripe.",
  },
  {
    step: "02",
    title: "Share Your Vision",
    description:
      "Tell us about your book, series, or project. Share your concepts, references, and creative direction.",
  },
  {
    step: "03",
    title: "We Create",
    description:
      "Using our proven AI-powered pipeline, we craft your covers, branding, or series plan to the highest standard.",
  },
  {
    step: "04",
    title: "You Receive",
    description:
      "High-resolution files delivered via Google Drive or ZIP. Ready for Amazon, print, or any platform.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 md:pb-32 md:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in mb-8">
              <MetronagonLogo className="mx-auto h-16 w-auto md:h-20" />
            </div>

            <h1 className="animate-fade-in-delay-1 text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-[1.1]">
              Professional Book Covers
              <br />
              <span className="gold-gradient-text">& Series Branding</span>
            </h1>

            <p className="animate-fade-in-delay-2 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              From concept to completion. AI-powered ebook covers, series
              branding, series architecture, and children&apos;s book
              illustration — delivered to the highest standard.
            </p>

            <div className="animate-fade-in-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/services"
                className="group flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                View Services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted transition-all hover:border-gold/30 hover:text-foreground"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gold">{stat.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What We <span className="gold-gradient-text">Create</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Every service is backed by a proven pipeline and 22 published
              books worth of experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="hover-gold-glow group rounded-2xl border border-border bg-surface-light p-8 transition-all hover:border-gold/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                  <service.icon size={22} className="text-gold" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gold">
                    {service.price}
                  </span>
                  <ChevronRight
                    size={16}
                    className="text-muted transition-all group-hover:translate-x-1 group-hover:text-gold"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-gold transition-all hover:text-gold-light"
            >
              View all services & pricing
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Metronagon */}
      <section className="border-y border-border bg-surface py-24 md:py-32">
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

          <div className="grid gap-8 md:grid-cols-3">
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
              <h3 className="mt-5 text-lg font-semibold">AI-Powered Speed</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Our production systems — prompt engineering, style headers,
                generation scripts — deliver professional results faster than
                traditional design, without sacrificing quality.
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

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How It <span className="gold-gradient-text">Works</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Simple, transparent, professional. Pay first, receive excellence.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="bg-surface-light p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-gold">
                  Step {item.step}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Elevate Your{" "}
              <span className="gold-gradient-text">Book Series</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Browse our packages, choose what you need, and pay securely. We
              start work the moment your order is confirmed.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/services"
                className="group flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                View Packages & Pricing
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
