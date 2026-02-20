"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ExternalLink, Layers, X } from "lucide-react";

type CoverImage = { src: string; title: string };

type PortfolioSeries = {
  id: string;
  label: string;
  tagline: string;
  accentColor: string;
  siteUrl: string;
  logo: CoverImage;
  seriesCover: CoverImage;
  boxSets?: CoverImage[];
  books: CoverImage[];
  characters?: CoverImage[];
};

const portfolioData: PortfolioSeries[] = [
  {
    id: "aztec",
    label: "Aztec Samurai Adventures",
    tagline: "12-Book Epic Fantasy Series",
    accentColor: "#40e0d0",
    siteUrl: "https://aztec.ketanshukla.com/",
    logo: {
      src: "/portfolio/aztec/series-logo.png",
      title: "Aztec Samurai Adventures — Series Logo",
    },
    seriesCover: {
      src: "/portfolio/aztec/box-sets/complete-series-cover-landscape.jpg",
      title: "Aztec Samurai Adventures — Complete Series",
    },
    boxSets: [
      {
        src: "/portfolio/aztec/box-sets/box-set-1-landscape.jpg",
        title: "Act I — The Rising (Books 1–4)",
      },
      {
        src: "/portfolio/aztec/box-sets/box-set-2-landscape.jpg",
        title: "Act II — The Breaking (Books 5–8)",
      },
      {
        src: "/portfolio/aztec/box-sets/box-set-3-landscape.jpg",
        title: "Act III — The Reckoning (Books 9–12)",
      },
    ],
    books: [
      { src: "/portfolio/aztec/covers/book1-cover.jpg", title: "Book I — Sunblade Rising" },
      { src: "/portfolio/aztec/covers/book2-cover.jpg", title: "Book II — The Mirror Siege" },
      { src: "/portfolio/aztec/covers/book3-cover.jpg", title: "Book III — Ash Oaths" },
      { src: "/portfolio/aztec/covers/book4-cover.jpg", title: "Book IV — The Starless Crown" },
      { src: "/portfolio/aztec/covers/book5-cover.jpg", title: "Book V — The Serpent's Gambit" },
      { src: "/portfolio/aztec/covers/book6-cover.jpg", title: "Book VI — Rain of Obsidian" },
      { src: "/portfolio/aztec/covers/book7-cover.jpg", title: "Book VII — Feathers and Bone" },
      { src: "/portfolio/aztec/covers/book8-cover.jpg", title: "Book VIII — The Shattered Blade" },
      { src: "/portfolio/aztec/covers/book9-cover.jpg", title: "Book IX — The Forge of Souls" },
      { src: "/portfolio/aztec/covers/book10-cover.jpg", title: "Book X — The Mirror Queen" },
      { src: "/portfolio/aztec/covers/book11-cover.jpg", title: "Book XI — Crown of Stars" },
      { src: "/portfolio/aztec/covers/book12-cover.jpg", title: "Book XII — The Sun That Never Sets" },
    ],
    characters: [
      { src: "/portfolio/aztec/characters/01-Itzil.jpg", title: "Itzil" },
      { src: "/portfolio/aztec/characters/03-Volzentar.jpg", title: "Volzentar" },
      { src: "/portfolio/aztec/characters/05-Nightshade.jpg", title: "Nightshade" },
      { src: "/portfolio/aztec/characters/07-Neyla.jpg", title: "Neyla" },
      { src: "/portfolio/aztec/characters/09-Miyako.jpg", title: "Miyako" },
      { src: "/portfolio/aztec/characters/14-Rainara.jpg", title: "Rainara" },
      { src: "/portfolio/aztec/characters/22-Relicara.jpg", title: "Relicara" },
      { src: "/portfolio/aztec/characters/30-Sethara.jpg", title: "Sethara" },
    ],
  },
  {
    id: "reality",
    label: "Reality Without Belief",
    tagline: "5-Book Philosophical Essay Series",
    accentColor: "#00CED1",
    siteUrl: "https://reality.ketanshukla.com/",
    logo: {
      src: "/portfolio/reality/series-logo-reality-without-belief.jpg",
      title: "Reality Without Belief — Series Logo",
    },
    seriesCover: {
      src: "/portfolio/reality/complete-series-cover-landscape.jpg",
      title: "Reality Without Belief — Complete Series",
    },
    books: [
      { src: "/portfolio/reality/book1-cover.jpg", title: "Book I — The Anatomy of Belief" },
      { src: "/portfolio/reality/book2-cover.jpg", title: "Book II — The Nature of What Is So" },
      { src: "/portfolio/reality/book3-cover.jpg", title: "Book III — The Theater of Conviction" },
      { src: "/portfolio/reality/book4-cover.jpg", title: "Book IV — The Practice of Clear Seeing" },
      { src: "/portfolio/reality/book5-cover.jpg", title: "Book V — The Quiet Exit" },
    ],
  },
  {
    id: "repetition",
    label: "Repetition: Mother of Mastery",
    tagline: "5-Book Self-Improvement Series",
    accentColor: "#d4a843",
    siteUrl: "https://repetition.ketanshukla.com/",
    logo: {
      src: "/portfolio/repetition/series-logo-repetition-mother-of-mastery.jpg",
      title: "Repetition: Mother of Mastery — Series Logo",
    },
    seriesCover: {
      src: "/portfolio/repetition/complete-series-cover-landscape.jpg",
      title: "Repetition: Mother of Mastery — Complete Series",
    },
    books: [
      { src: "/portfolio/repetition/book1-cover.jpg", title: "Book I — The Foundation of Mastery" },
      { src: "/portfolio/repetition/book2-cover.jpg", title: "Book II — The Habit Engine" },
      { src: "/portfolio/repetition/book3-cover.jpg", title: "Book III — Mastery in Action" },
      { src: "/portfolio/repetition/book4-cover.jpg", title: "Book IV — The Cognitive Edge" },
      { src: "/portfolio/repetition/book5-cover.jpg", title: "Book V — Living Mastery" },
    ],
  },
];

export default function CaseStudiesPage() {
  const [lightboxImage, setLightboxImage] = useState<CoverImage | null>(null);

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
            <p className="mt-4 text-base text-muted md:text-lg">
              Real projects, real results. Every project below was produced
              using the exact same creative pipeline available to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
              <Layers size={18} className="text-gold" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                3 Complete Series — Real Published Work
              </h2>
              <p className="text-xs text-muted">Click any image to enlarge</p>
            </div>
          </div>

          {portfolioData.map((series, seriesIdx) => (
            <div
              key={series.id}
              className={
                seriesIdx < portfolioData.length - 1
                  ? "mb-20 border-b border-border pb-20 md:mb-24 md:pb-24"
                  : ""
              }
            >
              {/* Series header */}
              <div
                className="mb-6 rounded-2xl border p-4 sm:p-6"
                style={{
                  borderColor: `${series.accentColor}33`,
                  backgroundColor: `${series.accentColor}08`,
                }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-3 w-3 shrink-0 rounded-full"
                      style={{ backgroundColor: series.accentColor }}
                    />
                    <div>
                      <h3
                        className="text-lg font-bold sm:text-xl"
                        style={{ color: series.accentColor }}
                      >
                        {series.label}
                      </h3>
                      <p className="text-xs text-muted mt-0.5">{series.tagline}</p>
                    </div>
                  </div>
                  {/* Visit series website button */}
                  <a
                    href={series.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-all hover:bg-gold/20 hover:border-gold/50 hover:shadow-md hover:shadow-gold/10"
                  >
                    Visit the Series Website
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* 1. Logo — full width, black background, centered */}
              <div className="mb-6 md:mb-8">
                <p
                  className="mb-3 text-xs font-bold uppercase tracking-widest"
                  style={{ color: series.accentColor }}
                >
                  Series Logo
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => setLightboxImage(series.logo)}
                    className="group w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-black transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1"
                  >
                    <Image
                      src={series.logo.src}
                      alt={series.logo.title}
                      width={800}
                      height={400}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </button>
                </div>
              </div>

              {/* 2. Complete Series Cover — full width */}
              <div className="mb-6 md:mb-8">
                <p
                  className="mb-3 text-xs font-bold uppercase tracking-widest"
                  style={{ color: series.accentColor }}
                >
                  Complete Series Cover
                </p>
                <button
                  onClick={() => setLightboxImage(series.seriesCover)}
                  className="group w-full overflow-hidden rounded-xl border border-border bg-surface-light transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1"
                >
                  <Image
                    src={series.seriesCover.src}
                    alt={series.seriesCover.title}
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </button>
              </div>

              {/* 3. Box Sets — side by side, natural ratio, no cropping */}
              {series.boxSets && series.boxSets.length > 0 && (
                <div className="mb-6 md:mb-8">
                  <p
                    className="mb-3 text-xs font-bold uppercase tracking-widest"
                    style={{ color: series.accentColor }}
                  >
                    Box Set Covers
                  </p>
                  <div
                    className={`grid gap-3 ${
                      series.boxSets.length === 3
                        ? "grid-cols-1 sm:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2"
                    }`}
                  >
                    {series.boxSets.map((image) => (
                      <button
                        key={image.src}
                        onClick={() => setLightboxImage(image)}
                        className="group overflow-hidden rounded-xl border border-border bg-surface-light transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1"
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={800}
                          height={450}
                          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        <div className="px-3 py-2 text-xs font-medium text-muted text-center">
                          {image.title}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Individual Book Covers — span full width, responsive */}
              <div className="mb-6 md:mb-8">
                <p
                  className="mb-3 text-xs font-bold uppercase tracking-widest"
                  style={{ color: series.accentColor }}
                >
                  Book Covers — All {series.books.length} Books
                </p>
                {/* Mobile: 3-col grid. Desktop: all books in one row */}
                <div className="grid grid-cols-3 gap-2 sm:hidden">
                  {series.books.map((image) => (
                    <button
                      key={image.src}
                      onClick={() => setLightboxImage(image)}
                      className="group relative overflow-hidden rounded-lg border border-border bg-surface-light transition-all hover:border-gold/30"
                    >
                      <div className="aspect-[2/3] relative">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          sizes="33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </button>
                  ))}
                </div>
                {/* Desktop: all in one row spanning full width */}
                <div
                  className="hidden sm:grid gap-2"
                  style={{
                    gridTemplateColumns: `repeat(${series.books.length}, minmax(0, 1fr))`,
                  }}
                >
                  {series.books.map((image) => (
                    <button
                      key={image.src}
                      onClick={() => setLightboxImage(image)}
                      className="group relative overflow-hidden rounded-xl border border-border bg-surface-light transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1"
                    >
                      <div className="aspect-[2/3] relative">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          sizes="(max-width: 1024px) 12vw, 8vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-1 pt-4">
                        <p className="text-[10px] font-medium text-white leading-tight">
                          {image.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Character Portraits — grid (Aztec only) */}
              {series.characters && series.characters.length > 0 && (
                <div>
                  <p
                    className="mb-3 text-xs font-bold uppercase tracking-widest"
                    style={{ color: series.accentColor }}
                  >
                    Character Portraits (sample of {series.characters.length}{" "}
                    from 30+)
                  </p>
                  <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
                    {series.characters.map((image) => (
                      <button
                        key={image.src}
                        onClick={() => setLightboxImage(image)}
                        className="group relative overflow-hidden rounded-xl border border-border bg-surface-light transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1"
                      >
                        <div className="aspect-[2/3] relative">
                          <Image
                            src={image.src}
                            alt={image.title}
                            fill
                            sizes="(max-width: 640px) 25vw, 12vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-1 pt-4">
                          <p className="text-[10px] font-medium text-white leading-tight">
                            {image.title}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
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

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <div
            className="relative max-h-[90vh] max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.title}
              width={1200}
              height={900}
              className="h-auto max-h-[85vh] w-full object-contain rounded-xl"
            />
            <p className="mt-3 text-center text-sm text-white/70">
              {lightboxImage.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
