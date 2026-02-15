"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "how-i-designed-12-consistent-covers-for-a-fantasy-series",
    title: "How I Designed 12 Consistent Covers for a Fantasy Series",
    excerpt:
      "A deep dive into the process of creating a cohesive visual identity across a 12-book fantasy series — from initial concept to final delivery. Covers the prompt engineering, style headers, and iteration process that ensures every book looks like it belongs in the same world.",
    readTime: "8 min read",
    category: "Cover Design",
  },
  {
    slug: "planning-a-5-book-non-fiction-series-from-a-single-topic",
    title: "Planning a 5-Book Non-Fiction Series from a Single Topic",
    excerpt:
      "Most non-fiction authors start with one book. But what if that one idea could become five? This post walks through the exact process of expanding a single subject into a structured, pedagogically progressive book series with clear arcs and reader progression.",
    readTime: "6 min read",
    category: "Series Planning",
  },
  {
    slug: "the-ai-powered-book-cover-pipeline",
    title: "The AI-Powered Book Cover Pipeline: From Prompt to Print",
    excerpt:
      "Behind every professional AI-generated book cover is a carefully engineered pipeline. This post breaks down the entire workflow — from initial prompt design and style headers to resolution scaling, text overlay, and print-ready CMYK conversion.",
    readTime: "10 min read",
    category: "Process",
  },
  {
    slug: "creating-30-character-portraits-with-consistent-style",
    title: "Creating 30 Character Portraits with Consistent Style",
    excerpt:
      "Generating one great AI image is easy. Generating thirty that all look like they belong in the same universe? That requires systems. Here's how style headers, seed management, and iterative refinement produced a gallery of 30 distinct characters for one series.",
    readTime: "7 min read",
    category: "Character Design",
  },
  {
    slug: "what-makes-a-book-cover-sell",
    title: "What Makes a Book Cover Sell: Lessons from 22 Published Books",
    excerpt:
      "After designing covers for 22 books across fiction and non-fiction, patterns emerge. This post distils the key principles — genre expectations, typography hierarchy, color psychology, and the critical role of thumbnail readability on Amazon.",
    readTime: "9 min read",
    category: "Cover Design",
  },
  {
    slug: "building-a-childrens-picture-book-with-ai-illustration",
    title: "Building a Children's Picture Book with AI Illustration",
    excerpt:
      "A complete walkthrough of creating a 32-page Pixar-style children's picture book using AI image generation. Covers story structure, character consistency across pages, illustration composition, and assembling the final print-ready PDF.",
    readTime: "12 min read",
    category: "Children's Books",
  },
  {
    slug: "designing-childrens-paperback-covers-that-stand-out",
    title: "Designing Children's Paperback Covers That Stand Out",
    excerpt:
      "Children's paperback covers face unique challenges — they must appeal to both the child and the parent, work as thumbnails on Amazon, and compete against thousands of other titles. This post covers the art direction, color psychology, and typography strategies for creating children's ebook covers that sell.",
    readTime: "8 min read",
    category: "Children's Books",
  },
  {
    slug: "designing-series-logos-that-anchor-a-brand",
    title: "Designing Series Logos That Anchor a Brand",
    excerpt:
      "A logo is the visual anchor of every series. This post showcases the logos created for three distinct book series — each designed to work at favicon scale and hero banner size while capturing the tone and identity of the series it represents.",
    readTime: "5 min read",
    category: "Branding",
  },
];

const categories = [
  "All",
  "Cover Design",
  "Series Planning",
  "Process",
  "Character Design",
  "Children's Books",
  "Branding",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-24 md:pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="gold-gradient-text">Blog</span>
            </h1>
            <p className="mt-4 text-lg text-muted">
              Process breakdowns, design insights, and behind-the-scenes looks
              at how professional book covers and series branding are made.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs — wrapping, big, yellow, consistent with examples page */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-gold text-background shadow-lg shadow-gold/20"
                    : "bg-surface-light border border-border text-muted hover:bg-gold/10 hover:border-gold/30 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="hover-gold-glow group flex flex-col rounded-2xl border border-border bg-surface-light p-6 sm:p-8 transition-all hover:border-gold/20"
              >
                <div className="mb-4 inline-flex self-start rounded-full border border-gold/20 bg-gold/5 px-3 py-1">
                  <span className="text-xs font-medium text-gold">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-muted">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-muted transition-all group-hover:translate-x-1 group-hover:text-gold"
                  />
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="py-12 text-center text-muted">
              No posts in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Want This Quality for{" "}
            <span className="gold-gradient-text">Your Books</span>?
          </h2>
          <p className="mt-3 text-sm text-muted">
            Every technique discussed in these posts is available as a service.
          </p>
          <Link
            href="/services"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            View Services
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
