import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
              From concept to completion. Ebook covers, series branding, series
              architecture, and children&apos;s book illustration — crafted to
              the highest standard.
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
