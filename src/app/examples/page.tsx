"use client";

import Image from "next/image";
import { useState } from "react";
import { Sparkles, BookOpen, BookImage, X } from "lucide-react";

type CoverImage = { src: string; title: string };

type Genre = {
  id: string;
  label: string;
  images: CoverImage[];
  description?: string;
};

const genres: Genre[] = [
  {
    id: "sci-fi",
    label: "Sci-Fi",
    images: [
      {
        src: "/examples/sci-fi/neon-rain-protocol.png",
        title: "Neon Rain Protocol",
      },
      { src: "/examples/sci-fi/orbital-dawn.png", title: "Orbital Dawn" },
      {
        src: "/examples/sci-fi/biomechanical-eden.png",
        title: "Biomechanical Eden",
      },
      {
        src: "/examples/sci-fi/cathedral-of-stars.png",
        title: "Cathedral of Stars",
      },
      { src: "/examples/sci-fi/first-light.png", title: "First Light" },
      {
        src: "/examples/sci-fi/ghost-in-the-signal.png",
        title: "Ghost in the Signal",
      },
      { src: "/examples/sci-fi/green-machine.png", title: "Green Machine" },
      { src: "/examples/sci-fi/stardrift-seven.png", title: "Stardrift Seven" },
      {
        src: "/examples/sci-fi/the-quantum-garden.png",
        title: "The Quantum Garden",
      },
      {
        src: "/examples/sci-fi/the-rust-prophet.png",
        title: "The Rust Prophet",
      },
      {
        src: "/examples/sci-fi/tomorrow-belonged-to-us.png",
        title: "Tomorrow Belonged to Us",
      },
    ],
  },
  {
    id: "fantasy",
    label: "Fantasy",
    images: [
      {
        src: "/examples/fantasy/the-garden-of-forgotten-gods.png",
        title: "The Garden of Forgotten Gods",
      },
      {
        src: "/examples/fantasy/dragonfire-summit.png",
        title: "Dragonfire Summit",
      },
      {
        src: "/examples/fantasy/the-bone-orchards.png",
        title: "The Bone Orchards",
      },
      {
        src: "/examples/fantasy/the-cartographers-folly.png",
        title: "The Cartographer's Folly",
      },
      {
        src: "/examples/fantasy/the-desert-of-burning-glass.png",
        title: "The Desert of Burning Glass",
      },
      {
        src: "/examples/fantasy/the-frost-thorn-crown.png",
        title: "The Frost Thorn Crown",
      },
      {
        src: "/examples/fantasy/the-iron-covenant.png",
        title: "The Iron Covenant",
      },
      {
        src: "/examples/fantasy/the-library-of-unwritten-things.png",
        title: "The Library of Unwritten Things",
      },
      {
        src: "/examples/fantasy/the-paper-kingdoms.png",
        title: "The Paper Kingdoms",
      },
      {
        src: "/examples/fantasy/the-shrine-beneath-the-tide.png",
        title: "The Shrine Beneath the Tide",
      },
      {
        src: "/examples/fantasy/the-stained-glass-war.png",
        title: "The Stained Glass War",
      },
      {
        src: "/examples/fantasy/the-sunken-throne.png",
        title: "The Sunken Throne",
      },
    ],
  },
  {
    id: "romance",
    label: "Romance",
    images: [
      {
        src: "/examples/romance/crown-of-thorns-and-roses.png",
        title: "Crown of Thorns and Roses",
      },
      {
        src: "/examples/romance/enemies-like-us.png",
        title: "Enemies Like Us",
      },
      {
        src: "/examples/romance/his-dark-garden.png",
        title: "His Dark Garden",
      },
      { src: "/examples/romance/moonburn.png", title: "Moonburn" },
      {
        src: "/examples/romance/the-bookshop-at-the-end-of-the-lane.png",
        title: "The Bookshop at the End of the Lane",
      },
      {
        src: "/examples/romance/the-dukes-wager.png",
        title: "The Duke's Wager",
      },
      {
        src: "/examples/romance/the-highland-vow.png",
        title: "The Highland Vow",
      },
      {
        src: "/examples/romance/the-paris-arrangement.png",
        title: "The Paris Arrangement",
      },
      {
        src: "/examples/romance/the-vineyard-letters.png",
        title: "The Vineyard Letters",
      },
    ],
  },
  {
    id: "thrillers",
    label: "Thrillers",
    images: [
      {
        src: "/examples/thrillers/the-blood-clock.png",
        title: "The Blood Clock",
      },
      { src: "/examples/thrillers/the-cold-room.png", title: "The Cold Room" },
      {
        src: "/examples/thrillers/the-glitch-protocol.png",
        title: "The Glitch Protocol",
      },
      {
        src: "/examples/thrillers/the-last-witness.png",
        title: "The Last Witness",
      },
      {
        src: "/examples/thrillers/the-market-maker.png",
        title: "The Market Maker",
      },
      {
        src: "/examples/thrillers/the-ninth-floor.png",
        title: "The Ninth Floor",
      },
    ],
  },
  {
    id: "horror",
    label: "Horror",
    images: [
      {
        src: "/examples/horror/the-congregation.png",
        title: "The Congregation",
      },
      { src: "/examples/horror/the-doll-ward.png", title: "The Doll Ward" },
      {
        src: "/examples/horror/the-house-that-hunger-built.png",
        title: "The House That Hunger Built",
      },
      {
        src: "/examples/horror/the-long-dark-between-stations.png",
        title: "The Long Dark Between Stations",
      },
      {
        src: "/examples/horror/the-mirror-saint.png",
        title: "The Mirror Saint",
      },
      {
        src: "/examples/horror/the-signal-beneath.png",
        title: "The Signal Beneath",
      },
      {
        src: "/examples/horror/the-smile-collector.png",
        title: "The Smile Collector",
      },
      {
        src: "/examples/horror/the-teeth-in-the-walls.png",
        title: "The Teeth in the Walls",
      },
    ],
  },
  {
    id: "mystery",
    label: "Mystery",
    images: [
      {
        src: "/examples/mystery/the-crossword-killer.png",
        title: "The Crossword Killer",
      },
      {
        src: "/examples/mystery/the-fingerprint-garden.png",
        title: "The Fingerprint Garden",
      },
      {
        src: "/examples/mystery/the-jade-equation.png",
        title: "The Jade Equation",
      },
      {
        src: "/examples/mystery/the-last-chess-move.png",
        title: "The Last Chess Move",
      },
      {
        src: "/examples/mystery/the-locked-garden.png",
        title: "The Locked Garden",
      },
      {
        src: "/examples/mystery/the-venice-cipher.png",
        title: "The Venice Cipher",
      },
      {
        src: "/examples/mystery/the-whispering-library.png",
        title: "The Whispering Library",
      },
      {
        src: "/examples/mystery/the-widow-of-rue-morgue.png",
        title: "The Widow of Rue Morgue",
      },
    ],
  },
  {
    id: "adventure",
    label: "Adventure",
    images: [
      {
        src: "/examples/adventure/the-balloon-cartographer.png",
        title: "The Balloon Cartographer",
      },
      { src: "/examples/adventure/the-deep-road.png", title: "The Deep Road" },
      {
        src: "/examples/adventure/the-iron-horse-riders.png",
        title: "The Iron Horse Riders",
      },
      {
        src: "/examples/adventure/the-lost-expedition.png",
        title: "The Lost Expedition",
      },
      {
        src: "/examples/adventure/the-silk-road-gambit.png",
        title: "The Silk Road Gambit",
      },
      {
        src: "/examples/adventure/the-sky-pirates-of-iron-bay.png",
        title: "The Sky Pirates of Iron Bay",
      },
      {
        src: "/examples/adventure/the-summit-of-all-fears.png",
        title: "The Summit of All Fears",
      },
      {
        src: "/examples/adventure/the-wreck-of-the-golden-serpent.png",
        title: "The Wreck of the Golden Serpent",
      },
    ],
  },
  {
    id: "historical-fiction",
    label: "Historical Fiction",
    images: [
      {
        src: "/examples/historical-fiction/the-cartographer-of-constantinople.png",
        title: "The Cartographer of Constantinople",
      },
      {
        src: "/examples/historical-fiction/the-jazz-age-prophet.png",
        title: "The Jazz Age Prophet",
      },
      {
        src: "/examples/historical-fiction/the-last-supper-at-the-leaky-barrel.png",
        title: "The Last Supper at the Leaky Barrel",
      },
      {
        src: "/examples/historical-fiction/the-midwife-of-venice.png",
        title: "The Midwife of Venice",
      },
      {
        src: "/examples/historical-fiction/the-pharaohs-architect.png",
        title: "The Pharaoh's Architect",
      },
      {
        src: "/examples/historical-fiction/the-samurai-accountant.png",
        title: "The Samurai Accountant",
      },
      {
        src: "/examples/historical-fiction/the-silk-weaver-of-lyon.png",
        title: "The Silk Weaver of Lyon",
      },
      {
        src: "/examples/historical-fiction/the-viking-widow.png",
        title: "The Viking Widow",
      },
    ],
  },
  {
    id: "literary-fiction",
    label: "Literary Fiction",
    images: [
      {
        src: "/examples/literary-fiction/still-water.png",
        title: "Still Water",
      },
      {
        src: "/examples/literary-fiction/the-atlas-of-invisible-cities.png",
        title: "The Atlas of Invisible Cities",
      },
      {
        src: "/examples/literary-fiction/the-beekeeper-of-aleppo.png",
        title: "The Beekeeper of Aleppo",
      },
      {
        src: "/examples/literary-fiction/the-color-of-forgetting.png",
        title: "The Color of Forgetting",
      },
      {
        src: "/examples/literary-fiction/the-geometry-of-grief.png",
        title: "The Geometry of Grief",
      },
      {
        src: "/examples/literary-fiction/the-glass-museum.png",
        title: "The Glass Museum",
      },
      {
        src: "/examples/literary-fiction/the-house-of-infinite-stairs.png",
        title: "The House of Infinite Stairs",
      },
      {
        src: "/examples/literary-fiction/the-orchard-keeper.png",
        title: "The Orchard Keeper",
      },
      {
        src: "/examples/literary-fiction/the-translator.png",
        title: "The Translator",
      },
      {
        src: "/examples/literary-fiction/the-weight-of-small-things.png",
        title: "The Weight of Small Things",
      },
    ],
  },
  {
    id: "philosophy-self-help",
    label: "Philosophy & Self-Help",
    images: [
      {
        src: "/examples/philosophy-self-help/the-art-of-letting-go.png",
        title: "The Art of Letting Go",
      },
      {
        src: "/examples/philosophy-self-help/the-compass-of-purpose.png",
        title: "The Compass of Purpose",
      },
      {
        src: "/examples/philosophy-self-help/the-mountain-within.png",
        title: "The Mountain Within",
      },
      {
        src: "/examples/philosophy-self-help/the-philosophy-of-walking.png",
        title: "The Philosophy of Walking",
      },
      {
        src: "/examples/philosophy-self-help/the-quiet-revolution.png",
        title: "The Quiet Revolution",
      },
      {
        src: "/examples/philosophy-self-help/the-stoics-garden.png",
        title: "The Stoic's Garden",
      },
      {
        src: "/examples/philosophy-self-help/the-ten-thousand-hours.png",
        title: "The Ten Thousand Hours",
      },
      {
        src: "/examples/philosophy-self-help/the-unfinished-self.png",
        title: "The Unfinished Self",
      },
    ],
  },
  {
    id: "humor-satire",
    label: "Humor & Satire",
    images: [
      {
        src: "/examples/humor-satire/a-brief-history-of-bad-decisions.png",
        title: "A Brief History of Bad Decisions",
      },
      {
        src: "/examples/humor-satire/death-by-committee.png",
        title: "Death by Committee",
      },
      {
        src: "/examples/humor-satire/sorry-im-late-i-didnt-want-to-come.png",
        title: "Sorry I'm Late, I Didn't Want to Come",
      },
      {
        src: "/examples/humor-satire/the-cats-guide-to-human-ownership.png",
        title: "The Cat's Guide to Human Ownership",
      },
      {
        src: "/examples/humor-satire/the-existential-dread-of-brunch.png",
        title: "The Existential Dread of Brunch",
      },
      {
        src: "/examples/humor-satire/the-middle-managers-guide-to-the-apocalypse.png",
        title: "The Middle Manager's Guide to the Apocalypse",
      },
    ],
  },
];

const childrensData = {
  pictureBooks: {
    label: "32-Page Illustrated Picture Books",
    description:
      "A complete 32-page children's picture book with consistent illustrated characters on every page. Pixar/Disney-inspired art style, full story with text and illustrations, delivered as a print-ready PDF. Below is a sample of pages from one of our picture books — Ixchel and the Stolen Sun.",
    images: [
      { src: "/portfolio/childrens/page-01.jpg", title: "Front Cover" },
      { src: "/portfolio/childrens/page-04.jpg", title: "Page 4" },
      { src: "/portfolio/childrens/page-08.jpg", title: "Page 8" },
      { src: "/portfolio/childrens/page-12.jpg", title: "Page 12" },
      { src: "/portfolio/childrens/page-16.jpg", title: "Page 16" },
      { src: "/portfolio/childrens/page-20.jpg", title: "Page 20" },
      { src: "/portfolio/childrens/page-24.jpg", title: "Page 24" },
      { src: "/portfolio/childrens/page-28.jpg", title: "Back Cover" },
    ] as CoverImage[],
  },
  paperbackCovers: {
    label: "Children's Paperback Covers",
    description:
      "Standalone front cover designs for children's ebooks and paperbacks. Each cover is a single striking illustration designed to capture attention on Amazon and bookstore shelves.",
    images: [
      {
        src: "/examples/childrens/the-map-to-everywhere.png",
        title: "The Map to Everywhere",
      },
      {
        src: "/examples/childrens/the-crayon-kingdom.png",
        title: "The Crayon Kingdom",
      },
      {
        src: "/examples/childrens/the-blanket-fort-chronicles.png",
        title: "The Blanket Fort Chronicles",
      },
      {
        src: "/examples/childrens/professor-paws-and-the-midnight-parade.png",
        title: "Professor Paws and the Midnight Parade",
      },
      {
        src: "/examples/childrens/captain-stardust-and-the-planet-of-socks.png",
        title: "Captain Stardust and the Planet of Socks",
      },
      {
        src: "/examples/childrens/when-the-moon-fell-into-the-garden.png",
        title: "When the Moon Fell into the Garden",
      },
      {
        src: "/examples/childrens/the-very-hungry-cloud.png",
        title: "The Very Hungry Cloud",
      },
      {
        src: "/examples/childrens/the-robot-who-learned-to-dream.png",
        title: "The Robot Who Learned to Dream",
      },
      {
        src: "/examples/childrens/the-felt-forest.png",
        title: "The Felt Forest",
      },
      { src: "/examples/childrens/chalk-world.png", title: "Chalk World" },
    ] as CoverImage[],
  },
};

const totalImages =
  genres.reduce((sum, g) => sum + g.images.length, 0) +
  childrensData.pictureBooks.images.length +
  childrensData.paperbackCovers.images.length;

const filterTabs = [
  { id: "all", label: "All" },
  ...genres.map((g) => ({ id: g.id, label: g.label })),
  { id: "childrens", label: "Children's" },
];

export default function ExamplesPage() {
  const [activeGenre, setActiveGenre] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<CoverImage | null>(null);

  const showAll = activeGenre === "all";
  const showChildrens = activeGenre === "all" || activeGenre === "childrens";
  const filteredGenres = showAll
    ? genres
    : genres.filter((g) => g.id === activeGenre);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-24 md:pb-16 md:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold">
              <Sparkles size={14} />
              {totalImages} Example Covers
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Book Cover <span className="gold-gradient-text">Gallery</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Browse {totalImages} professionally designed book covers across 12
              genres. Every cover was created using our proven creative pipeline
              — the same process we use for client projects.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs — wrapping, no horizontal scroll */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-wrap justify-center gap-2.5">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveGenre(tab.id)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeGenre === tab.id
                    ? "bg-gold text-background shadow-lg shadow-gold/20"
                    : "bg-surface-light border border-border text-muted hover:bg-gold/10 hover:border-gold/30 hover:text-gold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Standard genre sections */}
          {filteredGenres.map((genre) => (
            <div key={genre.id} className="mb-20 last:mb-0">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                  <BookOpen size={18} className="text-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    {genre.label}
                  </h2>
                  <p className="text-xs text-muted">
                    {genre.images.length} cover
                    {genre.images.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {genre.images.map((image) => (
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
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-8">
                      <p className="text-xs font-medium text-white leading-tight">
                        {image.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Children's Section — split into two types */}
          {showChildrens && (
            <div className={filteredGenres.length > 0 ? "mt-20" : ""}>
              <div className="mb-12 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                  <BookImage size={18} className="text-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Children&apos;s Books
                  </h2>
                  <p className="text-xs text-muted">
                    {childrensData.pictureBooks.images.length +
                      childrensData.paperbackCovers.images.length}{" "}
                    images &mdash; two product types
                  </p>
                </div>
              </div>

              {/* Picture Books sub-section */}
              <div className="mb-14">
                <div className="mb-2 rounded-xl border border-gold/10 bg-gold/5 px-5 py-4">
                  <h3 className="text-lg font-bold text-gold">
                    {childrensData.pictureBooks.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    {childrensData.pictureBooks.description}
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {childrensData.pictureBooks.images.map((image) => (
                    <button
                      key={image.src}
                      onClick={() => setLightboxImage(image)}
                      className="group relative overflow-hidden rounded-xl border border-border bg-surface-light transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1"
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-8">
                        <p className="text-xs font-medium text-white leading-tight">
                          {image.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Paperback Covers sub-section */}
              <div>
                <div className="mb-2 rounded-xl border border-gold/10 bg-gold/5 px-5 py-4">
                  <h3 className="text-lg font-bold text-gold">
                    {childrensData.paperbackCovers.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    {childrensData.paperbackCovers.description}
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {childrensData.paperbackCovers.images.map((image) => (
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
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-8">
                        <p className="text-xs font-medium text-white leading-tight">
                          {image.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Want a Cover Like{" "}
              <span className="gold-gradient-text">These</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Every cover in this gallery was created using our proven creative
              pipeline. Choose a package and let us create something stunning
              for your book.
            </p>
            <div className="mt-8">
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                View Packages & Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[600px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-10 right-0 flex items-center gap-1 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Close <X size={16} />
            </button>
            <div
              className={`relative w-full overflow-hidden rounded-xl border border-white/10 ${
                lightboxImage.src.includes("/portfolio/childrens/")
                  ? "aspect-square"
                  : "aspect-[2/3]"
              }`}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                sizes="600px"
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-white/80">
              {lightboxImage.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
