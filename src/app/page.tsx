import Link from "next/link";
import Image from "next/image";
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
  Quote,
  Star,
} from "lucide-react";

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
              <Image
                src="/portfolio/logo.png"
                alt="Metronagon Media — The Measure of Excellence"
                width={280}
                height={280}
                className="mx-auto h-48 w-48 md:h-64 md:w-64 object-contain drop-shadow-2xl"
                priority
              />
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
                href="/examples"
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

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What Our <span className="gold-gradient-text">Authors</span> Say
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Real results from real publishing projects. Here&apos;s what
              it&apos;s like to work with Metronagon Media.
            </p>
          </div>

          {/* Testimonial 1 — Aztec Samurai Adventures */}
          <div className="mb-12 rounded-2xl border border-border bg-surface-light p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 overflow-hidden rounded-full border-2 border-gold/30">
                <Image
                  src="/portfolio/ketan-shukla.jpeg"
                  alt="Ketan Shukla"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  Ketan Shukla
                </div>
                <div className="text-xs text-muted">
                  Author, Aztec Samurai Adventures (12-book series)
                </div>
                <div className="mt-1 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
            <div className="relative mb-8">
              <Quote
                size={24}
                className="absolute -top-1 -left-1 text-gold/20"
              />
              <p className="pl-8 text-sm leading-relaxed text-muted italic">
                &ldquo;Metronagon delivered an entire 12-book fantasy series
                package — covers, character portraits, series logo, box set art,
                and landscape panoramics. Every single cover is consistent in
                style, lighting, and composition. The character portraits are
                stunning — 30 distinct characters that all look like they belong
                in the same universe. I couldn&apos;t believe the quality and
                speed. This is professional publishing-grade work.&rdquo;
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/aztec/covers/book1-cover.jpg"
                  alt="Aztec Book 1 Cover"
                  width={400}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/aztec/characters/01-Itzil.jpg"
                  alt="Character Portrait — Itzil"
                  width={300}
                  height={300}
                  className="h-auto w-full"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/aztec/series-logo.png"
                  alt="Aztec Series Logo"
                  width={400}
                  height={400}
                  className="h-auto w-full bg-black"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/aztec/covers/book5-cover.jpg"
                  alt="Aztec Book 5 Cover"
                  width={400}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          {/* Testimonial 2 — Repetition: Mother of Mastery */}
          <div className="mb-12 rounded-2xl border border-border bg-surface-light p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 overflow-hidden rounded-full border-2 border-gold/30">
                <Image
                  src="/portfolio/ketan-shukla.jpeg"
                  alt="Ketan Shukla"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  Ketan Shukla
                </div>
                <div className="text-xs text-muted">
                  Author, Repetition: Mother of Mastery (5-book series)
                </div>
                <div className="mt-1 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
            <div className="relative mb-8">
              <Quote
                size={24}
                className="absolute -top-1 -left-1 text-gold/20"
              />
              <p className="pl-8 text-sm leading-relaxed text-muted italic">
                &ldquo;I needed a complete brand identity for a 5-book
                self-improvement series. Metronagon created a professional
                series logo, five cohesive book covers, a landscape panoramic
                for the box set, and YouTube thumbnails — all with a consistent,
                authoritative look that perfectly signals &lsquo;professional
                development.&rsquo; The branding elevated the entire
                series.&rdquo;
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/repetition/book1-cover.jpg"
                  alt="Repetition Book 1 Cover"
                  width={400}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/repetition/series-logo.png"
                  alt="Repetition Series Logo"
                  width={400}
                  height={400}
                  className="h-auto w-full bg-black"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/repetition/book3-cover.jpg"
                  alt="Repetition Book 3 Cover"
                  width={400}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/repetition/youtube-thumbnail.jpg"
                  alt="Repetition YouTube Thumbnail"
                  width={400}
                  height={300}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          {/* Testimonial 3 — Reality Without Belief */}
          <div className="mb-12 rounded-2xl border border-border bg-surface-light p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 overflow-hidden rounded-full border-2 border-gold/30">
                <Image
                  src="/portfolio/ketan-shukla.jpeg"
                  alt="Ketan Shukla"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  Ketan Shukla
                </div>
                <div className="text-xs text-muted">
                  Author, Reality Without Belief (5-book essay series)
                </div>
                <div className="mt-1 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
            <div className="relative mb-8">
              <Quote
                size={24}
                className="absolute -top-1 -left-1 text-gold/20"
              />
              <p className="pl-8 text-sm leading-relaxed text-muted italic">
                &ldquo;My philosophical essay series needed a completely
                different aesthetic — contemplative, minimal, and intellectual.
                Metronagon nailed it. The covers use restrained color palettes
                with a sense of quiet depth. The series logo is understated yet
                unmistakable. They understood that this series whispers rather
                than shouts, and the branding reflects that perfectly.&rdquo;
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/reality/book1-cover.jpg"
                  alt="Reality Book 1 Cover"
                  width={400}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/reality/series-logo.png"
                  alt="Reality Series Logo"
                  width={400}
                  height={400}
                  className="h-auto w-full bg-black"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/reality/book3-cover.jpg"
                  alt="Reality Book 3 Cover"
                  width={400}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/reality/youtube-thumbnail.jpg"
                  alt="Reality YouTube Thumbnail"
                  width={400}
                  height={300}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          {/* Testimonial 4 — Children's Book */}
          <div className="rounded-2xl border border-border bg-surface-light p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 overflow-hidden rounded-full border-2 border-gold/30">
                <Image
                  src="/portfolio/ketan-shukla.jpeg"
                  alt="Ketan Shukla"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  Ketan Shukla
                </div>
                <div className="text-xs text-muted">
                  Author, Ixchel and the Stolen Sun (Children&apos;s Picture
                  Book)
                </div>
                <div className="mt-1 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
            <div className="relative mb-8">
              <Quote
                size={24}
                className="absolute -top-1 -left-1 text-gold/20"
              />
              <p className="pl-8 text-sm leading-relaxed text-muted italic">
                &ldquo;I wanted a Pixar-quality children&apos;s picture book and
                that&apos;s exactly what I got. 32 pages of stunning
                AI-generated illustrations with consistent character design
                throughout. The main character looks the same on every single
                page — which is incredibly hard to achieve with AI. The story,
                illustrations, and final assembled PDF were all delivered as one
                complete package. My daughter loves it.&rdquo;
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/childrens/page-01.jpg"
                  alt="Children's Book — Page 1"
                  width={300}
                  height={300}
                  className="h-auto w-full"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/childrens/page-08.jpg"
                  alt="Children's Book — Page 8"
                  width={300}
                  height={300}
                  className="h-auto w-full"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/childrens/page-16.jpg"
                  alt="Children's Book — Page 16"
                  width={300}
                  height={300}
                  className="h-auto w-full"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/portfolio/childrens/page-24.jpg"
                  alt="Children's Book — Page 24"
                  width={300}
                  height={300}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-surface py-24 md:py-32">
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
