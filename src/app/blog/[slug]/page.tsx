import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

const posts: Record<
  string,
  {
    title: string;
    readTime: string;
    category: string;
    content: string;
  }
> = {
  "how-i-designed-12-consistent-covers-for-a-fantasy-series": {
    title: "How We Designed 12 Consistent Covers for a Fantasy Series",
    readTime: "8 min read",
    category: "Cover Design",
    content: `Creating a single stunning book cover is one challenge. Creating twelve that all feel like they belong in the same universe — while each remaining distinct and compelling — is an entirely different problem.

This post walks through the exact process used to design all 12 covers for the Aztec Samurai Adventures series: a fantasy epic spanning 12 books, 30 characters, and 288 chapters.

## The Challenge

Every cover in a series needs to accomplish two things simultaneously:

1. **Stand alone** — each cover must work as an individual piece, compelling enough to make someone click on Amazon
2. **Belong together** — when viewed as a set, the covers must clearly communicate "this is one series"

These goals are in tension. Too much consistency and the covers blur together. Too much variety and the series identity is lost.

## The Style Guide System

The solution is what we call a **style guide** — a reusable creative brief that defines the visual DNA of the series. It locks in:

- Art style (photorealistic cinematic, in this case)
- Color palette (deep blacks, warm golds, crimson accents)
- Typography treatment (placement, font style, hierarchy)
- Compositional rules (character placement, background depth)
- Lighting direction (dramatic side-lighting with rim highlights)

Every cover starts with this identical guide. Only the character, scene, and title change.

## The Iteration Process

For each book cover:

1. Create 6-8 initial concepts using the style guide + book-specific details
2. Select the 3 strongest concepts
3. Refine the chosen 3 with targeted adjustments (composition tweaks, expression changes, element repositioning)
4. Choose the final winner
5. Post-process: resolution scaling, text overlay, final adjustments

This process takes roughly 2-3 hours per cover. For 12 books, that's about 30 hours of focused cover design work.

## The Result

12 covers that share a clear visual language — the same lighting, the same color temperature, the same compositional weight — but each featuring a unique character and scene. When viewed as a grid, they're unmistakably one series. When viewed individually, each one stands on its own.

This is exactly the process we use for client series branding at Metronagon.`,
  },
  "planning-a-5-book-non-fiction-series-from-a-single-topic": {
    title: "Planning a 5-Book Non-Fiction Series from a Single Topic",
    readTime: "6 min read",
    category: "Series Planning",
    content: `Most non-fiction authors start with one book. They pour everything they know into it, publish, and move on. But the most successful non-fiction authors think in series — and the ones who plan their series before writing book one have a massive structural advantage.

## Why Series Beat Standalone Books

A series compounds in ways a standalone book never can:

- **Cross-promotion**: Every book markets every other book
- **Reader retention**: Readers who finish book 1 are primed for book 2
- **Authority building**: "Author of the 5-book Mastery Series" carries more weight than "Author of one book"
- **Amazon algorithm**: More books = more surface area for discovery

## The Expansion Framework

Start with your single topic. Then ask five questions:

1. **What does the beginner need?** → Book 1 (Foundations)
2. **What does the intermediate need?** → Book 2 (Core Skills)
3. **What does the advanced practitioner need?** → Book 3 (Deep Mastery)
4. **What are the common mistakes?** → Book 4 (Troubleshooting & Pitfalls)
5. **What does the expert need to teach others?** → Book 5 (Teaching & Leadership)

This pedagogical progression gives each book a clear purpose and a clear audience. A reader can enter at any level, but the series rewards reading in order.

## The Continuity Plan

For non-fiction, continuity isn't about plot — it's about:

- **Terminology consistency**: Same terms used the same way across all books
- **Callback references**: "As we covered in Book 2..." creates a web of interconnection
- **Progressive complexity**: Each book assumes the reader has the knowledge from previous books
- **Consistent structure**: Same chapter format, same section patterns, same pacing

## The Delivery

The final series architecture document includes:

- Series overview and positioning
- Book-by-book chapter outlines (typically 10-15 chapters per book)
- Cross-book reference map
- Terminology glossary
- Front/back matter strategy (how each book previews the next)
- Amazon descriptions for all 5 books

This is the exact deliverable included in our Series Architecture packages.`,
  },
  "the-ai-powered-book-cover-pipeline": {
    title: "The Book Cover Pipeline: From Concept to Print",
    readTime: "10 min read",
    category: "Process",
    content: `The gap between a rough concept and a professional, print-ready book cover is enormous. This post breaks down every step of the pipeline that turns a concept into a cover ready for Amazon, IngramSpark, or any print-on-demand service.

## Step 1: Concept Development

Before any design work begins, the concept needs to be solid:

- **Genre research**: What do the top-selling covers in this genre look like?
- **Competitive analysis**: What visual patterns does the target reader expect?
- **Differentiation**: How does this cover stand out while still signaling the correct genre?
- **Element selection**: Character, scene, objects, mood, color palette

## Step 2: Creative Direction

The creative brief is everything. A professional cover brief includes:

- **Style direction**: Photorealistic, illustrated, minimalist, etc.
- **Composition**: Where is the focal point? What's the visual hierarchy?
- **Lighting**: Direction, intensity, color temperature
- **Color palette**: Specific hex codes or reference descriptions
- **Text avoidance zones**: Areas that must remain clear for title/author placement
- **Resolution and format**: 1600×2400 for ebook, 300 DPI

## Step 3: Design & Selection

We produce multiple variations. Never settle for the first output. The process is:

1. Create 6-8 variations
2. Evaluate against genre expectations and composition rules
3. Select top 3 candidates
4. Refine with targeted adjustments
5. Final selection

## Step 4: Post-Processing

The raw output is never the final cover. Post-processing includes:

- **Resolution scaling**: Ensuring every file meets print resolution standards
- **Text overlay**: Title, subtitle, author name, series identifier
- **Color correction**: Ensuring the palette is consistent and print-safe
- **Edge cleanup**: Removing artifacts, refining details
- **Format preparation**: RGB for ebook, CMYK for print

## Step 5: Delivery

The client receives:
- High-resolution PNG/JPG at 1600×2400, 300 DPI
- All 3 concept variations
- The final polished cover with text overlay
- Files ready for upload to Amazon KDP or any platform

This is a production pipeline, not an experiment. Every step is repeatable, consistent, and professionally executed.`,
  },
  "creating-30-character-portraits-with-consistent-style": {
    title: "Creating 30 Character Portraits with Consistent Style",
    readTime: "7 min read",
    category: "Character Design",
    content: `When the Aztec Samurai Adventures series needed character portraits for 30 distinct characters, the challenge wasn't creating individual images — it was making all 30 look like they existed in the same world.

## The Consistency Problem

Creative production is inherently variable. The same brief can produce wildly different results across iterations. For a character gallery, this is a fundamental problem:

- Characters must have distinct features but shared artistic style
- Lighting, color grading, and composition must feel unified
- The "world" they inhabit must be visually coherent

## The Solution: Style Anchoring

The approach uses three layers of consistency:

### Layer 1: The Master Style Guide
A detailed creative brief that defines the artistic DNA — rendering style, lighting setup, background treatment, and color palette. Every character portrait starts with this same guide.

### Layer 2: Character-Specific Parameters
Each character gets a defined set of physical attributes, clothing, and distinguishing features. These are documented in a character sheet and referenced consistently across every iteration.

### Layer 3: Post-Processing Pipeline
After creation, every portrait goes through the same post-processing workflow — color grading, contrast adjustment, and cropping to a standard format. This final pass smooths out any remaining inconsistencies.

## The Result

30 character portraits that feel like they were illustrated by the same artist for the same project. Each character is immediately recognizable and distinct, but the visual language ties them all together.

This character consistency system is the same one we apply to children’s book illustrations — where maintaining the same character appearance across 32 pages is critical.`,
  },
  "what-makes-a-book-cover-sell": {
    title: "What Makes a Book Cover Sell: Lessons from 22 Published Books",
    readTime: "9 min read",
    category: "Cover Design",
    content: `After designing covers for 22 books across three series — spanning fantasy fiction, self-improvement non-fiction, and philosophical essays — certain patterns become impossible to ignore.

## 1. Genre Signaling Is Non-Negotiable

Before a cover can be "good," it must be correct. A fantasy novel needs to look like a fantasy novel. A self-help book needs to look like a self-help book. Readers make split-second genre judgments based on:

- **Color palette**: Dark and moody for thriller/fantasy, bright and clean for self-help
- **Typography**: Serif for literary/historical, bold sans-serif for business/motivation
- **Imagery**: Characters for fiction, abstract/minimal for non-fiction
- **Layout**: Busy/detailed for genre fiction, clean/spacious for premium non-fiction

Break these conventions and readers scroll past — not because the cover is ugly, but because it doesn't register as "for them."

## 2. Thumbnail Readability Is Everything

On Amazon, your cover is viewed as a thumbnail roughly 150 pixels wide. At that size:

- Fine details disappear
- Thin fonts become unreadable
- Complex compositions become visual noise
- Contrast is everything

Design for the thumbnail first. If it doesn't work at 150px wide, nothing else matters.

## 3. The Title Must Be Legible at a Glance

This sounds obvious, but it's the most common mistake. The title should be:

- The largest text element
- High contrast against the background
- In a font that's readable, not decorative
- Positioned where the eye naturally lands

## 4. Color Contrast Drives Clicks

The covers that perform best on Amazon have strong color contrast — a bright element against a dark background, or a bold title against a muted image. This contrast is what catches the eye during a scroll.

## 5. Consistency Sells Series

When a reader sees 5 covers that clearly belong together, the implicit message is: "This is a complete, professional body of work." That consistency — in color, typography, composition, and style — is one of the strongest conversion drivers for series sales.

These principles guide every cover we create at Metronagon.`,
  },
  "building-a-childrens-picture-book-with-ai-illustration": {
    title: "Building a Children’s Picture Book with Professional Illustration",
    readTime: "12 min read",
    category: "Children's Books",
    content: `Creating a 32-page children’s picture book is one of the most complex projects in our pipeline. Unlike a single book cover, a picture book requires sustained character consistency, narrative visual flow, and production-quality output across every page.

## The Story Foundation

Every picture book starts with the story. For a 32-page book:

- **Pages 1-4**: Introduction of character and world
- **Pages 5-12**: The setup — what the character wants
- **Pages 13-20**: The challenge — what stands in the way
- **Pages 21-28**: The resolution — how the character overcomes
- **Pages 29-32**: The conclusion — what the character learned

Each page gets one key illustration and one block of text. The text should be 2-4 sentences maximum — picture books are visual-first.

## Character Design System

This is the hardest part. The main character must look the same on every single page. Our approach:

1. **Character sheet**: Create a reference image of the character from multiple angles
2. **Style guide**: Lock in the art style (we typically use a Pixar/Disney-inspired aesthetic)
3. **Feature anchoring**: Define the 5-6 most distinctive features (hair color, eye color, clothing, body proportions, etc.)
4. **Consistency testing**: Produce 10 test images and evaluate consistency before starting pages

## Page-by-Page Production

Each page follows this workflow:

1. Write the scene description based on the story outline
2. Create 3-4 variations with the character in the correct scene
3. Select the best variation
4. Refine with targeted adjustments if needed
5. Post-process for color consistency and text placement

## Assembly

The final book is assembled as a print-ready PDF:

- Standard picture book dimensions (8.5" × 8.5" or 10" × 8")
- Text overlaid on appropriate areas
- Page numbers
- Front cover, title page, copyright page, back cover
- Resolution and color profile set for print

The delivered package includes the assembled PDF, all individual page images, and the story text as a separate document.

This is the complete service offered in our Children's Picture Book packages.`,
  },
  "designing-childrens-paperback-covers-that-stand-out": {
    title: "Designing Children's Paperback Covers That Stand Out",
    readTime: "8 min read",
    category: "Children's Books",
    content: `Children's paperback covers occupy a unique space in book design. Unlike adult fiction or non-fiction, a children's cover must simultaneously appeal to two completely different audiences: the child who wants to read the book, and the parent or teacher who decides to buy it.

This dual-audience challenge makes children's cover design one of the most strategically demanding projects we take on.

## The Dual-Audience Problem

A children's cover must accomplish:

1. **Attract the child** — bright colors, expressive characters, a sense of adventure or fun
2. **Reassure the adult** — professional quality, age-appropriate content, clear genre signaling
3. **Work as a thumbnail** — on Amazon, the cover is often viewed at 150px wide. It must pop at that size.
4. **Stand out in a category** — children's books on Amazon are an incredibly crowded market

## Color Psychology for Children's Covers

Color choices for children's books follow different rules than adult books:

- **Ages 0-3**: Primary colors (red, blue, yellow), high contrast, simple shapes
- **Ages 4-7**: Bright, saturated palettes with warm tones. Think Pixar — vibrant but harmonious
- **Ages 8-12**: More sophisticated palettes. Teal, coral, warm gold. Still colorful but less "baby"
- **Young Adult crossover**: Darker, moodier palettes. Deep purple, midnight blue, forest green

The palette must signal the correct age range instantly. A parent browsing Amazon can tell in half a second whether a cover is for a 3-year-old or a 10-year-old — and if you get it wrong, they scroll past.

## Typography That Sells

Children's book typography has its own conventions:

- **Hand-drawn or playful fonts** for younger ages — but they must still be legible
- **Bold, chunky letterforms** that read at thumbnail size
- **Color in the title** — children's titles almost never use plain black or white text. Bright, multi-colored titles are the norm
- **The author name is secondary** — unlike adult books where the author name can be the selling point, children's books sell on title and illustration

## The Cover vs. The Picture Book

This is the key distinction we offer at Metronagon:

### Children's Paperback Cover (Standalone)
A single front cover illustration designed for an ebook or paperback. This is the product if you already have your story written and illustrated (or plan to use text-only interiors). You need one powerful, eye-catching cover that sells the book.

### 32-Page Illustrated Picture Book (Full Service)
A complete picture book with consistent character illustrations on every page. This is an entirely different product — it includes story development, character design, 32 page illustrations, text placement, and a print-ready PDF.

Both products start with the same creative pipeline, but the scope and deliverables are completely different.

## The Production Process for Paperback Covers

For a standalone children's cover:

1. **Genre and age research** — study the top 50 covers in the target category on Amazon
2. **Character and scene concept** — define the main character, the key scene, and the emotional tone
3. **Creative direction** — craft a detailed brief with specific art style, color palette, and composition
4. **Design and selection** — produce 6-8 variations, select top 3, refine the winner
5. **Text overlay** — add title, subtitle, and author name with age-appropriate typography
6. **Final delivery** — high-resolution files ready for Amazon KDP or print

The result is a professional cover that competes with traditionally published children's books — at a fraction of the cost and timeline.

This is exactly what's included in our Children's Ebook Cover packages at Metronagon.`,
  },
  "designing-series-logos-that-anchor-a-brand": {
    title: "Designing Series Logos That Anchor a Brand",
    readTime: "5 min read",
    category: "Branding",
    content: `A series logo is the single most important branding asset you create. It appears on every cover, every box set, every thumbnail, every social media post. It's the visual thread that ties everything together — and it needs to work at 16 pixels (favicon) and 1600 pixels (hero banner) with equal clarity.

## What Makes a Great Series Logo

A great series logo accomplishes three things:

1. **Instant recognition** — a reader who's seen it once should recognize it again across any format
2. **Genre signaling** — the logo should tell you the type of content before you read a single word
3. **Scale resilience** — it must be readable and impactful at every size, from thumbnail to print poster

## Four Logos, Four Identities

The four logos shown below were each designed for a completely different audience and purpose. Despite being created by the same pipeline, each has its own distinct personality.

### Metronagon Media

Our own brand logo — a precision-crafted compass rose emblem with a golden nonagon at its center, representing the mathematical perfection underlying all great creative work. The outer ring features tessellating polygon carvings filled with gold inlay, and amber gemstones at the cardinal points. "Metronagon Media — The Measure of Excellence" rendered in elegant gold typography. This logo embodies everything we stand for: measurement, precision, and the pursuit of excellence.

### Aztec Samurai Adventures

A fantasy series demands a logo that feels epic and ancient. The Aztec Samurai Adventures logo uses bold, angular letterforms with Aztec-inspired geometric patterns. Gold on dark backgrounds creates a sense of legendary storytelling.

### Repetition: Mother of Mastery

A self-improvement series needs to feel clean, authoritative, and aspirational. The Repetition logo uses modern serif typography with measured spacing. The visual language says "professional development" — not fiction, not casual.

### Reality Without Belief

A philosophical essay series calls for contemplative minimalism. The Reality Without Belief logo uses restrained typography with generous whitespace. It whispers rather than shouts — appropriate for a series about quiet examination of assumptions.

## The Design Process

Each logo follows the same production pipeline:

1. **Brief analysis** — genre expectations, audience demographics, competitive landscape
2. **Concept development** — 3-4 distinct directions exploring different typographic and symbolic approaches
3. **Refinement** — the winning concept goes through multiple iteration passes for kerning, proportion, and balance
4. **Multi-format export** — PNG (transparent), SVG, and variations for dark/light backgrounds

The result is a logo that works everywhere: book covers, Amazon listings, social media profiles, YouTube thumbnails, and marketing materials.

## Why Logos Matter for Series Sales

Authors who invest in a series logo see a measurable difference in reader perception. A consistent logo across 5, 8, or 12 covers transforms a collection of books into a brand. Readers don't just buy books — they buy into series. A strong logo is what makes that series feel real, professional, and worth committing to.

Series logo design is included in every Series Branding and Full Pipeline package at Metronagon.`,
  },
};

interface GallerySection {
  title: string;
  caption?: string;
  layout: "covers" | "landscape" | "portraits" | "pages" | "logos";
  images: { src: string; alt: string }[];
}

const postGalleries: Record<string, GallerySection[]> = {
  "how-i-designed-12-consistent-covers-for-a-fantasy-series": [
    {
      title: "Aztec Samurai Adventures — Selected Covers",
      caption:
        "6 of the 12 covers from the series. Notice the consistent lighting, color palette, and compositional style across every cover — each built from the same style guide.",
      layout: "covers",
      images: [
        {
          src: "/portfolio/aztec/covers/book1-cover.jpg",
          alt: "Aztec Samurai Adventures — Book 1",
        },
        {
          src: "/portfolio/aztec/covers/book3-cover.jpg",
          alt: "Aztec Samurai Adventures — Book 3",
        },
        {
          src: "/portfolio/aztec/covers/book5-cover.jpg",
          alt: "Aztec Samurai Adventures — Book 5",
        },
        {
          src: "/portfolio/aztec/covers/book7-cover.jpg",
          alt: "Aztec Samurai Adventures — Book 7",
        },
        {
          src: "/portfolio/aztec/covers/book9-cover.jpg",
          alt: "Aztec Samurai Adventures — Book 9",
        },
        {
          src: "/portfolio/aztec/covers/book12-cover.jpg",
          alt: "Aztec Samurai Adventures — Book 12",
        },
      ],
    },
    {
      title: "Box Set Covers",
      caption:
        "Landscape box set covers designed for Amazon bundle listings. The complete series and sub-collections, all maintaining the same visual identity.",
      layout: "landscape",
      images: [
        {
          src: "/portfolio/aztec/box-sets/complete-series-cover-landscape.jpg",
          alt: "Complete Series Box Set",
        },
        {
          src: "/portfolio/aztec/box-sets/box-set-1-landscape.jpg",
          alt: "Box Set 1 — Books 1-4",
        },
        {
          src: "/portfolio/aztec/box-sets/box-set-2-landscape.jpg",
          alt: "Box Set 2 — Books 5-8",
        },
      ],
    },
  ],
  "planning-a-5-book-non-fiction-series-from-a-single-topic": [
    {
      title: "The Repetition Series — 5-Book Non-Fiction Example",
      caption:
        "A complete 5-book self-improvement series with consistent branding. Each cover uses the same compositional approach while varying the subject imagery.",
      layout: "covers",
      images: [
        {
          src: "/portfolio/repetition/book1-cover.jpg",
          alt: "Repetition Series — Book 1",
        },
        {
          src: "/portfolio/repetition/book2-cover.jpg",
          alt: "Repetition Series — Book 2",
        },
        {
          src: "/portfolio/repetition/book3-cover.jpg",
          alt: "Repetition Series — Book 3",
        },
        {
          src: "/portfolio/repetition/book5-cover.jpg",
          alt: "Repetition Series — Book 5",
        },
      ],
    },
    {
      title: "Series Landscape Cover",
      caption:
        "The complete Repetition series presented as a single panoramic product — designed for Amazon box set listings and marketing banners.",
      layout: "landscape",
      images: [
        {
          src: "/portfolio/repetition/complete-series-cover-landscape.jpg",
          alt: "Repetition — Complete Series",
        },
      ],
    },
    {
      title: "Reality Without Belief — Another 5-Book Series",
      caption:
        "A philosophical essay series with a completely different visual identity. Same pipeline, different genre, different aesthetic — proving the system adapts to any style.",
      layout: "covers",
      images: [
        {
          src: "/portfolio/reality/book1-cover.jpg",
          alt: "Reality Series — Book 1",
        },
        {
          src: "/portfolio/reality/book2-cover.jpg",
          alt: "Reality Series — Book 2",
        },
        {
          src: "/portfolio/reality/book3-cover.jpg",
          alt: "Reality Series — Book 3",
        },
        {
          src: "/portfolio/reality/book5-cover.jpg",
          alt: "Reality Series — Book 5",
        },
      ],
    },
  ],
  "the-ai-powered-book-cover-pipeline": [
    {
      title: "Pipeline Output — Three Different Series, One System",
      caption:
        "The same creative pipeline produced all three series below. Fantasy fiction, self-improvement, and philosophy — each with its own visual language, all built on the same production system.",
      layout: "covers",
      images: [
        {
          src: "/portfolio/aztec/covers/book1-cover.jpg",
          alt: "Aztec Samurai — Fantasy Fiction",
        },
        {
          src: "/portfolio/aztec/covers/book5-cover.jpg",
          alt: "Aztec Samurai — Fantasy Fiction",
        },
        {
          src: "/portfolio/repetition/book1-cover.jpg",
          alt: "Repetition — Self-Improvement",
        },
        {
          src: "/portfolio/repetition/book3-cover.jpg",
          alt: "Repetition — Self-Improvement",
        },
        {
          src: "/portfolio/reality/book1-cover.jpg",
          alt: "Reality — Philosophy",
        },
        {
          src: "/portfolio/reality/book3-cover.jpg",
          alt: "Reality — Philosophy",
        },
      ],
    },
    {
      title: "From Single Covers to Complete Branding",
      caption:
        "Box sets, panoramic covers, and series logos — all created from the same pipeline that produces individual covers.",
      layout: "landscape",
      images: [
        {
          src: "/portfolio/aztec/box-sets/complete-series-cover-landscape.jpg",
          alt: "Aztec — Complete Series Box Set",
        },
        {
          src: "/portfolio/repetition/complete-series-cover-landscape.jpg",
          alt: "Repetition — Complete Series",
        },
        {
          src: "/portfolio/reality/complete-series-cover-landscape.jpg",
          alt: "Reality — Complete Series",
        },
      ],
    },
  ],
  "creating-30-character-portraits-with-consistent-style": [
    {
      title: "Character Portrait Gallery — 8 of 30 Characters",
      caption:
        "Eight characters from the Aztec Samurai Adventures series. Each portrait shares the same rendering style, lighting setup, and color grading — while every character is visually distinct and immediately recognizable.",
      layout: "portraits",
      images: [
        {
          src: "/portfolio/aztec/characters/01-Itzil.jpg",
          alt: "Itzil — Main Protagonist",
        },
        {
          src: "/portfolio/aztec/characters/03-Volzentar.jpg",
          alt: "Volzentar",
        },
        {
          src: "/portfolio/aztec/characters/05-Nightshade.jpg",
          alt: "Nightshade",
        },
        { src: "/portfolio/aztec/characters/07-Neyla.jpg", alt: "Neyla" },
        { src: "/portfolio/aztec/characters/09-Miyako.jpg", alt: "Miyako" },
        { src: "/portfolio/aztec/characters/14-Rainara.jpg", alt: "Rainara" },
        { src: "/portfolio/aztec/characters/22-Relicara.jpg", alt: "Relicara" },
        { src: "/portfolio/aztec/characters/30-Sethara.jpg", alt: "Sethara" },
      ],
    },
  ],
  "what-makes-a-book-cover-sell": [
    {
      title: "Genre Signaling in Action — Three Different Genres",
      caption:
        "Fantasy (dark, cinematic, character-focused), Self-Improvement (clean, bold, aspirational), Philosophy (minimal, contemplative, abstract). Same creator, completely different visual language — because genre dictates design.",
      layout: "covers",
      images: [
        {
          src: "/portfolio/aztec/covers/book1-cover.jpg",
          alt: "Fantasy — Dark & Cinematic",
        },
        {
          src: "/portfolio/aztec/covers/book7-cover.jpg",
          alt: "Fantasy — Character-Focused",
        },
        {
          src: "/portfolio/repetition/book1-cover.jpg",
          alt: "Self-Improvement — Clean & Bold",
        },
        {
          src: "/portfolio/repetition/book2-cover.jpg",
          alt: "Self-Improvement — Aspirational",
        },
        {
          src: "/portfolio/reality/book1-cover.jpg",
          alt: "Philosophy — Minimal & Contemplative",
        },
        {
          src: "/portfolio/reality/book2-cover.jpg",
          alt: "Philosophy — Abstract",
        },
      ],
    },
    {
      title: "Consistency Sells Series",
      caption:
        "When a reader sees covers that clearly belong together, the message is unmistakable: this is a professional, complete body of work.",
      layout: "landscape",
      images: [
        {
          src: "/portfolio/aztec/box-sets/complete-series-cover-landscape.jpg",
          alt: "12-Book Fantasy Series",
        },
        {
          src: "/portfolio/repetition/complete-series-cover-landscape.jpg",
          alt: "5-Book Self-Improvement Series",
        },
      ],
    },
  ],
  "building-a-childrens-picture-book-with-ai-illustration": [
    {
      title: "Ixchel and the Stolen Sun — Selected Pages",
      caption:
        "Pages from a 32-page professionally illustrated children\u2019s picture book. Notice the consistent character design, vibrant color palette, and Pixar-inspired art style maintained across every page.",
      layout: "pages",
      images: [
        {
          src: "/portfolio/childrens/page-01.jpg",
          alt: "Page 1 — Story Opening",
        },
        {
          src: "/portfolio/childrens/page-04.jpg",
          alt: "Page 4 — Character Introduction",
        },
        {
          src: "/portfolio/childrens/page-08.jpg",
          alt: "Page 8 — The Journey Begins",
        },
        {
          src: "/portfolio/childrens/page-12.jpg",
          alt: "Page 12 — Rising Action",
        },
        {
          src: "/portfolio/childrens/page-16.jpg",
          alt: "Page 16 — The Challenge",
        },
        {
          src: "/portfolio/childrens/page-20.jpg",
          alt: "Page 20 — The Turning Point",
        },
        {
          src: "/portfolio/childrens/page-24.jpg",
          alt: "Page 24 — Resolution",
        },
        {
          src: "/portfolio/childrens/page-28.jpg",
          alt: "Page 28 — Conclusion",
        },
      ],
    },
  ],
  "designing-childrens-paperback-covers-that-stand-out": [
    {
      title: "Children's Paperback Cover Examples",
      caption:
        "Standalone front cover designs for children's ebooks and paperbacks. Each cover uses a distinct art style while maintaining the vibrant, eye-catching qualities that children's books demand.",
      layout: "covers",
      images: [
        {
          src: "/examples/childrens/the-map-to-everywhere.png",
          alt: "The Map to Everywhere — Paperback Cover",
        },
        {
          src: "/examples/childrens/the-crayon-kingdom.png",
          alt: "The Crayon Kingdom — Paperback Cover",
        },
        {
          src: "/examples/childrens/the-blanket-fort-chronicles.png",
          alt: "The Blanket Fort Chronicles — Paperback Cover",
        },
        {
          src: "/examples/childrens/professor-paws-and-the-midnight-parade.png",
          alt: "Professor Paws and the Midnight Parade — Paperback Cover",
        },
        {
          src: "/examples/childrens/captain-stardust-and-the-planet-of-socks.png",
          alt: "Captain Stardust and the Planet of Socks — Paperback Cover",
        },
      ],
    },
    {
      title: "32-Page Illustrated Picture Book Covers",
      caption:
        "These covers are for full 32-page illustrated picture books — a completely different product from a standalone paperback cover. Each includes consistent character illustrations across every page.",
      layout: "covers",
      images: [
        {
          src: "/examples/childrens/when-the-moon-fell-into-the-garden.png",
          alt: "When the Moon Fell into the Garden — Picture Book",
        },
        {
          src: "/examples/childrens/the-very-hungry-cloud.png",
          alt: "The Very Hungry Cloud — Picture Book",
        },
        {
          src: "/examples/childrens/the-robot-who-learned-to-dream.png",
          alt: "The Robot Who Learned to Dream — Picture Book",
        },
      ],
    },
  ],
  "designing-series-logos-that-anchor-a-brand": [
    {
      title: "Metronagon Media — Brand Logo",
      caption:
        "Our own brand emblem — a precision-crafted compass rose with a golden nonagon at its center, tessellating polygon carvings, and amber gemstones. The logo that represents everything we build for our clients.",
      layout: "logos",
      images: [
        {
          src: "/portfolio/logo.png",
          alt: "Metronagon Media — The Measure of Excellence",
        },
      ],
    },
    {
      title: "Aztec Samurai Adventures — Series Logo",
      caption:
        "Bold, angular, and epic. The Aztec Samurai Adventures logo anchors a 12-book fantasy series with gold-on-dark energy that immediately signals adventure and ancient mythology.",
      layout: "logos",
      images: [
        {
          src: "/portfolio/aztec/series-logo.png",
          alt: "Aztec Samurai Adventures — Series Logo",
        },
      ],
    },
    {
      title: "Repetition: Mother of Mastery — Series Logo",
      caption:
        "Clean, authoritative, and aspirational. The Repetition series logo sets the tone for a 5-book self-improvement collection with measured typography and professional presence.",
      layout: "logos",
      images: [
        {
          src: "/portfolio/repetition/series-logo.png",
          alt: "Repetition: Mother of Mastery — Series Logo",
        },
      ],
    },
    {
      title: "Reality Without Belief — Series Logo",
      caption:
        "Contemplative and minimal. The Reality Without Belief logo reflects the philosophical nature of a 5-book essay series — restrained, thoughtful, and quietly confident.",
      layout: "logos",
      images: [
        {
          src: "/portfolio/reality/series-logo.png",
          alt: "Reality Without Belief — Series Logo",
        },
      ],
    },
  ],
};

function GalleryRenderer({ galleries }: { galleries: GallerySection[] }) {
  return (
    <div className="mt-12 space-y-14">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gold/20" />
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          Portfolio Examples
        </span>
        <div className="h-px flex-1 bg-gold/20" />
      </div>
      {galleries.map((gallery) => (
        <div key={gallery.title}>
          <h3 className="text-lg font-bold text-foreground">{gallery.title}</h3>
          {gallery.caption && (
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {gallery.caption}
            </p>
          )}
          {gallery.layout === "logos" || gallery.layout === "landscape" ? (
            <div className="mt-5 space-y-4">
              {gallery.images.map((img) => (
                <div
                  key={img.src}
                  className="overflow-hidden rounded-xl border border-border bg-surface-light"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={400}
                    className="h-auto w-full"
                    sizes="100vw"
                  />
                  <div className="px-4 py-2">
                    <span className="text-xs font-medium text-muted">
                      {img.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`mt-5 grid gap-4 ${
                gallery.layout === "covers"
                  ? "grid-cols-2 sm:grid-cols-3"
                  : gallery.layout === "portraits"
                  ? "grid-cols-2 sm:grid-cols-4"
                  : "grid-cols-2 sm:grid-cols-4"
              }`}
            >
              {gallery.images.map((img) => (
                <div
                  key={img.src}
                  className="overflow-hidden rounded-xl border border-border bg-surface-light transition-all hover:border-gold/30 hover-gold-glow"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={gallery.layout === "covers" ? 400 : 300}
                    height={gallery.layout === "covers" ? 600 : 300}
                    className="h-auto w-full"
                    sizes={
                      gallery.layout === "covers"
                        ? "(max-width: 640px) 50vw, 33vw"
                        : "25vw"
                    }
                  />
                  <div className="px-3 py-2">
                    <span className="text-xs font-medium text-muted">
                      {img.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found — Metronagon" };
  return {
    title: `${post.title} — Metronagon Blog`,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
        <p className="mt-4 text-muted">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light"
        >
          <ArrowLeft size={14} />
          Back to Blog
        </Link>
      </section>
    );
  }

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-24 md:pt-32">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-gold"
        >
          <ArrowLeft size={14} />
          Back to Blog
        </Link>

        <div className="mb-4 inline-flex rounded-full border border-gold/20 bg-gold/5 px-3 py-1">
          <span className="text-xs font-medium text-gold">{post.category}</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        <div className="mt-8 h-px w-full bg-border" />

        <div className="prose-metronagon mt-8">
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mb-4 mt-10 text-xl font-bold tracking-tight text-foreground"
                >
                  {para.replace("## ", "")}
                </h2>
              );
            }
            if (para.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="mb-3 mt-8 text-lg font-semibold text-foreground"
                >
                  {para.replace("### ", "")}
                </h3>
              );
            }
            if (para.startsWith("- ") || para.startsWith("1. ")) {
              const items = para.split("\n");
              return (
                <ul key={i} className="mb-4 space-y-2 pl-4">
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className="text-base leading-relaxed text-muted"
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace(/^[-\d.]+\s*/, "")
                            .replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="text-foreground">$1</strong>'
                            ),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p
                key={i}
                className="mb-4 text-base leading-relaxed text-muted"
                dangerouslySetInnerHTML={{
                  __html: para.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="text-foreground">$1</strong>'
                  ),
                }}
              />
            );
          })}
        </div>

        {postGalleries[slug] && (
          <GalleryRenderer galleries={postGalleries[slug]} />
        )}
      </article>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Want This for{" "}
            <span className="gold-gradient-text">Your Project</span>?
          </h2>
          <p className="mt-3 text-sm text-muted">
            Every technique in this post is available as a professional service.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            View Services & Pricing
          </Link>
        </div>
      </section>
    </>
  );
}
