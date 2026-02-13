import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const posts: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    category: string;
    content: string;
  }
> = {
  "how-i-designed-12-consistent-covers-for-a-fantasy-series": {
    title: "How I Designed 12 Consistent Covers for a Fantasy Series",
    date: "2026-02-13",
    readTime: "8 min read",
    category: "Cover Design",
    content: `Creating a single stunning book cover is one challenge. Creating twelve that all feel like they belong in the same universe — while each remaining distinct and compelling — is an entirely different problem.

This post walks through the exact process used to design all 12 covers for the Aztec Samurai Adventures series: a fantasy epic spanning 12 books, 30 characters, and 288 chapters.

## The Challenge

Every cover in a series needs to accomplish two things simultaneously:

1. **Stand alone** — each cover must work as an individual piece, compelling enough to make someone click on Amazon
2. **Belong together** — when viewed as a set, the covers must clearly communicate "this is one series"

These goals are in tension. Too much consistency and the covers blur together. Too much variety and the series identity is lost.

## The Style Header System

The solution is what I call a **style header** — a reusable prompt prefix that defines the visual DNA of the series. It locks in:

- Art style (photorealistic cinematic, in this case)
- Color palette (deep blacks, warm golds, crimson accents)
- Typography treatment (placement, font style, hierarchy)
- Compositional rules (character placement, background depth)
- Lighting direction (dramatic side-lighting with rim highlights)

Every cover prompt starts with this identical header. Only the character, scene, and title change.

## The Iteration Process

For each book cover:

1. Generate 6-8 initial concepts using the style header + book-specific details
2. Select the 3 strongest concepts
3. Refine the chosen 3 with adjusted prompts (composition tweaks, expression changes, element repositioning)
4. Choose the final winner
5. Post-process: resolution scaling, text overlay, final adjustments

This process takes roughly 2-3 hours per cover. For 12 books, that's about 30 hours of focused cover design work.

## The Result

12 covers that share a clear visual language — the same lighting, the same color temperature, the same compositional weight — but each featuring a unique character and scene. When viewed as a grid, they're unmistakably one series. When viewed individually, each one stands on its own.

This is exactly the process we use for client series branding at Metronagon.`,
  },
  "planning-a-5-book-non-fiction-series-from-a-single-topic": {
    title: "Planning a 5-Book Non-Fiction Series from a Single Topic",
    date: "2026-02-10",
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
    title: "The AI-Powered Book Cover Pipeline: From Prompt to Print",
    date: "2026-02-06",
    readTime: "10 min read",
    category: "Process",
    content: `The gap between "I generated a cool image with AI" and "I have a professional, print-ready book cover" is enormous. This post breaks down every step of the pipeline that turns a concept into a cover ready for Amazon, IngramSpark, or any print-on-demand service.

## Step 1: Concept Development

Before any image generation happens, the concept needs to be solid:

- **Genre research**: What do the top-selling covers in this genre look like?
- **Competitive analysis**: What visual patterns does the target reader expect?
- **Differentiation**: How does this cover stand out while still signaling the correct genre?
- **Element selection**: Character, scene, objects, mood, color palette

## Step 2: Prompt Engineering

The prompt is everything. A professional cover prompt includes:

- **Style direction**: Photorealistic, illustrated, minimalist, etc.
- **Composition**: Where is the focal point? What's the visual hierarchy?
- **Lighting**: Direction, intensity, color temperature
- **Color palette**: Specific hex codes or reference descriptions
- **Text avoidance zones**: Areas that must remain clear for title/author placement
- **Resolution and format**: 1600×2400 for ebook, 300 DPI

## Step 3: Generation & Selection

Generate multiple variations. Never settle for the first output. The process is:

1. Generate 6-8 variations
2. Evaluate against genre expectations and composition rules
3. Select top 3 candidates
4. Refine with targeted prompt adjustments
5. Final selection

## Step 4: Post-Processing

The raw AI output is never the final cover. Post-processing includes:

- **Resolution scaling**: AI outputs are often not at print resolution
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

This is a production pipeline, not an experiment. Every step is repeatable, consistent, and fast.`,
  },
  "creating-30-character-portraits-with-consistent-style": {
    title: "Creating 30 Character Portraits with Consistent Style",
    date: "2026-02-02",
    readTime: "7 min read",
    category: "Character Design",
    content: `When the Aztec Samurai Adventures series needed character portraits for 30 distinct characters, the challenge wasn't generating individual images — it was making all 30 look like they existed in the same world.

## The Consistency Problem

AI image generation is inherently variable. The same prompt can produce wildly different results across generations. For a character gallery, this is a fundamental problem:

- Characters must have distinct features but shared artistic style
- Lighting, color grading, and composition must feel unified
- The "world" they inhabit must be visually coherent

## The Solution: Style Anchoring

The approach uses three layers of consistency:

### Layer 1: The Master Style Header
A detailed prompt prefix that defines the artistic DNA — rendering style, lighting setup, background treatment, and color palette. Every character portrait starts with this same header.

### Layer 2: Character-Specific Parameters
Each character gets a defined set of physical attributes, clothing, and distinguishing features. These are documented in a character sheet and referenced consistently across every generation.

### Layer 3: Post-Processing Pipeline
After generation, every portrait goes through the same post-processing workflow — color grading, contrast adjustment, and cropping to a standard format. This final pass smooths out any remaining inconsistencies.

## The Result

30 character portraits that feel like they were illustrated by the same artist for the same project. Each character is immediately recognizable and distinct, but the visual language ties them all together.

This character consistency system is the same one we apply to children's book illustrations — where maintaining the same character appearance across 32 pages is critical.`,
  },
  "what-makes-a-book-cover-sell": {
    title: "What Makes a Book Cover Sell: Lessons from 22 Published Books",
    date: "2026-01-28",
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
    title: "Building a Children's Picture Book with AI Illustration",
    date: "2026-01-22",
    readTime: "12 min read",
    category: "Children's Books",
    content: `Creating a 32-page children's picture book with AI illustration is one of the most complex projects in our pipeline. Unlike a single book cover, a picture book requires sustained character consistency, narrative visual flow, and production-quality output across every page.

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

1. **Character sheet**: Generate a reference image of the character from multiple angles
2. **Style header**: Lock in the art style (we typically use a Pixar/Disney-inspired aesthetic)
3. **Feature anchoring**: Define the 5-6 most distinctive features (hair color, eye color, clothing, body proportions, etc.)
4. **Consistency testing**: Generate 10 test images and evaluate consistency before starting pages

## Page-by-Page Production

Each page follows this workflow:

1. Write the scene description based on the story outline
2. Generate 3-4 variations with the character in the correct scene
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
};

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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
          <span className="text-xs font-medium text-gold">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {formatDate(post.date)}
          </span>
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
