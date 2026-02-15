import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials — Metronagon",
  description:
    "What our clients say about working with Metronagon Media. Real results from real publishing projects.",
};

const testimonials = [
  {
    name: "Ketan Shukla",
    project: "Aztec Samurai Adventures (12-book series)",
    photo: "/portfolio/ketan-shukla.jpeg",
    quote:
      "Metronagon delivered an entire 12-book fantasy series package — covers, character portraits, series logo, box set art, and landscape panoramics. Every single cover is consistent in style, lighting, and composition. The character portraits are stunning — 30 distinct characters that all look like they belong in the same universe. The quality and speed were exceptional. This is professional publishing-grade work.",
    rating: 5,
  },
  {
    name: "Ketan Shukla",
    project: "Repetition: Mother of Mastery (5-book series)",
    photo: "/portfolio/ketan-shukla.jpeg",
    quote:
      "I needed a complete brand identity for a 5-book self-improvement series. Metronagon created a professional series logo, five cohesive book covers, a landscape panoramic for the box set, and YouTube thumbnails — all with a consistent, authoritative look that perfectly signals 'professional development.' The branding elevated the entire series.",
    rating: 5,
  },
  {
    name: "Ketan Shukla",
    project: "Reality Without Belief (5-book essay series)",
    photo: "/portfolio/ketan-shukla.jpeg",
    quote:
      "My philosophical essay series needed a completely different aesthetic — contemplative, minimal, and intellectual. Metronagon nailed it. The covers use restrained color palettes with a sense of quiet depth. The series logo is understated yet unmistakable. They understood that this series whispers rather than shouts, and the branding reflects that perfectly.",
    rating: 5,
  },
  {
    name: "Ketan Shukla",
    project: "Ixchel and the Stolen Sun (Children\u2019s Picture Book)",
    photo: "/portfolio/ketan-shukla.jpeg",
    quote:
      "Metronagon delivered a stunning children\u2019s picture book — 32 pages of beautiful illustrations with consistent character design throughout. The main character looks the same on every single page, which is incredibly difficult to achieve. The story, illustrations, and final assembled PDF were all delivered as one complete package. The quality of the finished book is outstanding.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-24 md:pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Client{" "}
              <span className="gold-gradient-text">Testimonials</span>
            </h1>
            <p className="mt-4 text-lg text-muted">
              Real results from real publishing projects. Here&apos;s what
              our clients say about working with Metronagon Media.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-surface-light p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 overflow-hidden rounded-full border-2 border-gold/30">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted">{t.project}</div>
                    <div className="mt-1 flex gap-0.5">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star
                          key={j}
                          size={12}
                          className="fill-gold text-gold"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote
                    size={20}
                    className="absolute -top-0.5 -left-0.5 text-gold/20"
                  />
                  <p className="pl-7 text-sm leading-relaxed text-muted italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Ready to Join Our{" "}
            <span className="gold-gradient-text">Clients</span>?
          </h2>
          <p className="mt-3 text-sm text-muted">
            Experience the same quality and attention to detail that our
            clients love.
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
