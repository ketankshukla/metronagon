import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Layers, Palette, Rocket } from "lucide-react";

const featuredCovers = [
  { src: "/portfolio/aztec/covers/book1-cover.jpg", title: "Aztec Samurai Book 1" },
  { src: "/examples/fantasy/the-sunken-throne.png", title: "The Sunken Throne" },
  { src: "/examples/thrillers/the-cold-room.png", title: "The Cold Room" },
  { src: "/examples/romance/moonburn.png", title: "Moonburn" },
  { src: "/examples/sci-fi/orbital-dawn.png", title: "Orbital Dawn" },
  { src: "/portfolio/childrens/front-cover.jpg", title: "Ixchel and the Stolen Sun" },
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
                width={600}
                height={600}
                className="mx-auto w-full max-w-md md:max-w-lg object-contain drop-shadow-2xl"
                priority
              />
            </div>

            <h1 className="animate-fade-in-delay-1 text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-[1.1]">
              Professional Book Covers
              <br />
              <span className="gold-gradient-text">& Series Branding</span>
            </h1>

            <p className="animate-fade-in-delay-2 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              From concept to completion. Ebook covers, series branding, and
              children&apos;s book illustration — crafted to the highest
              standard.
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
                className="flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicator */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">22</div>
              <div className="mt-1 text-xs font-medium text-muted">
                Published Books
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">3</div>
              <div className="mt-1 text-xs font-medium text-muted">
                Complete Series
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">100+</div>
              <div className="mt-1 text-xs font-medium text-muted">
                Covers Designed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">30+</div>
              <div className="mt-1 text-xs font-medium text-muted">
                Character Portraits
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Covers */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Featured <span className="gold-gradient-text">Work</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              A selection from our portfolio — every cover created with the same
              pipeline available to clients.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-6">
            {featuredCovers.map((cover) => (
              <div
                key={cover.src}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface-light transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10"
              >
                <div className="aspect-[2/3] relative">
                  <Image
                    src={cover.src}
                    alt={cover.title}
                    fill
                    sizes="(max-width: 640px) 33vw, 16vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/examples"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
            >
              Browse all 100+ covers
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-border bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How It <span className="gold-gradient-text">Works</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Simple, transparent, professional. Four steps from order to
              delivery.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                step: "01",
                icon: Palette,
                title: "Choose Your Package",
                desc: "Browse services, select a package, and pay securely through Stripe.",
              },
              {
                step: "02",
                icon: BookOpen,
                title: "Share Your Vision",
                desc: "Tell us about your book, series, or project. Share concepts and references.",
              },
              {
                step: "03",
                icon: Layers,
                title: "We Create",
                desc: "Using our proven pipeline, we craft your covers and branding to the highest standard.",
              },
              {
                step: "04",
                icon: Rocket,
                title: "You Receive",
                desc: "High-resolution files delivered via Google Drive. Ready for Amazon or print.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-surface-light p-8">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                  <item.icon size={18} className="text-gold" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-gold">
                  Step {item.step}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
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
      </section>
    </>
  );
}
