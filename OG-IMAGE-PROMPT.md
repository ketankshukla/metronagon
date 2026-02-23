# OG Image Prompt — Metronagon Media

## What This Is For

An **Open Graph (OG) image** is the preview image that appears when your website link is shared on:
- Facebook, LinkedIn, Twitter/X
- Slack, Discord, iMessage
- Any platform that renders link previews

**Required dimensions:** 1200 × 630 pixels (landscape, 1.91:1 ratio)

Once generated, give the image to Cascade to place at `/public/images/og-image.jpg` and update the metadata references.

---

## ChatGPT Image Prompt

Copy and paste the following prompt into ChatGPT (with image generation enabled):

---

METRONAGON MEDIA — OPEN GRAPH / SOCIAL SHARING IMAGE
TYPE: Social media link preview image
DIMENSIONS: 1200 x 630 pixels (landscape, 1.91:1 aspect ratio)
STYLE: Sharp photorealistic product photography with studio lighting — NO oil painting, NO watercolor, NO painterly style, NO soft-focus, NO canvas grain.

---

A cinematic, wide-format showcase image on a deep obsidian-black background (#0A0A0A) with a very subtle radial gradient — slightly lighter at center (#111111) fading to pure black at edges. The image is precisely 1200×630 pixels, landscape orientation.

THE COMPOSITION — THREE ZONES:

The image is divided into three visual zones arranged left-to-right, creating a narrative flow:

LEFT ZONE (0-35% width): THE LOGO
The Metronagon Media logo emblem — a circular medallion featuring a golden compass rose with a nonagon at its center, set within a ring of polished black granite with tessellating polygon carvings filled with gold inlay (#D4AF37) and amber gemstones at the cardinal points. The emblem is rendered at approximately 280 pixels diameter, vertically centered, positioned at roughly 18% from the left edge. The emblem is lit with warm golden light from the upper-right, making the gold surfaces glow with authentic metallic luster and the amber gemstones appear to trap sunlight. The emblem casts a very subtle shadow on the dark background, grounding it in physical space. Below the emblem, in elegant Trajan Pro-style serif capitals: "METRONAGON MEDIA" in gold (#D4AF37), letter-spacing 0.12em, and below that "THE MEASURE OF EXCELLENCE" in warm cream (#FFF8DC) at 60% the size of the company name.

CENTER ZONE (30-70% width): THE SHOWCASE
A carefully arranged display of 5 book covers, fanned out in a slight arc like a hand of cards, angled 5-10 degrees apart, overlapping slightly. The covers represent the range of genres served:

1. A dark, cinematic fantasy cover with a warrior figure — deep blacks, warm golds, crimson accents (representing the Aztec Samurai series style)
2. A clean, bold self-improvement cover with modern typography — white and gold on a rich dark background (representing the Repetition series style)
3. A contemplative philosophical cover with minimal design — muted earth tones and elegant serif text (representing the Reality series style)
4. A vibrant, Pixar-inspired children's book cover — bright saturated colors, expressive character, playful typography
5. A moody thriller cover — dark blue-grey tones, sharp typography, atmospheric tension

Each cover is approximately 120×180 pixels (book proportion), rendered as if they are physical hardcover books with slight 3D depth — visible spine edge, subtle page thickness on the right side, and a faint shadow beneath each. The covers are lit by the same warm studio light as the logo, creating consistent reflections across their glossy surfaces. The center cover (the children's book) is positioned slightly higher and more forward than the others, creating depth.

RIGHT ZONE (65-100% width): THE VALUE PROPOSITION
Three lines of text, vertically centered, left-aligned at approximately 68% from the left edge:

Line 1: "Book Cover Design" — in clean, modern sans-serif (Geist or similar) in white (#FFFFFF), approximately 28pt equivalent, font-weight 600. This is the largest text in this zone.

Line 2: "Series Branding" — same font, same size, in gold (#D4AF37). This creates a visual accent that ties back to the logo's gold.

Line 3: "Children's Illustration" — same font, same size, in white (#FFFFFF).

Below these three lines, with 20px of spacing:

Line 4: "metronagon.com" — in a slightly smaller size (18pt), warm cream (#FFF8DC), letter-spacing 0.08em, font-weight 400.

LIGHTING AND ATMOSPHERE:

Two studio light sources — a primary warm golden light from the upper-right (creating the main highlights on the logo's metallic surfaces and the book cover edges) and a secondary cool fill light from the lower-left (adding dimension and preventing the dark areas from becoming completely black). A very subtle warm golden ambient glow emanates from behind the book cover arrangement — not a bright glow, but a barely perceptible warmth that separates the covers from the black background. The overall mood is premium, professional, and quietly luxurious — like a high-end product catalog for a design studio.

COLOR PALETTE:
- Background black: #0A0A0A
- Gold: #D4AF37 — logo, accents, text highlights
- Warm cream: #FFF8DC — secondary text
- White: #FFFFFF — primary text
- Amber: #FFBF00 — gemstone accents in logo
- Deep shadow: #050505 — darkest areas

CRITICAL REQUIREMENTS:

1. The image must work at SMALL sizes — when rendered as a link preview (typically 300-600px wide), the logo, book covers, and text must all be clearly visible and legible
2. The text must be CRISP and PERFECTLY RENDERED — no blur, no artifacts, no misspellings
3. The book covers should look like REAL physical books, not flat rectangles
4. The overall impression at a glance should communicate: "This is a professional book design studio"
5. The aspect ratio must be exactly 1200×630 (or proportionally equivalent) — this is non-negotiable for OG images
6. NO oil painting, NO watercolor, NO painterly aesthetic. This is studio product photography.

---

## After Generation

1. Download the image from ChatGPT
2. Verify it is approximately 1200×630 pixels (resize if needed)
3. Save as `og-image.jpg` (JPEG, quality 90%)
4. Give the file to Cascade with instructions to:
   - Place it at `E:\metronagon\public\images\og-image.jpg`
   - Update all OG image references in `layout.tsx` from `/portfolio/logo.png` to `/images/og-image.jpg`
   - Update the image dimensions from 512×512 to 1200×630

---

## Reference

This prompt was crafted using the same photorealistic studio product photography style as the Metronagon Media logo prompt (`book-prompts/metronagon-logo.txt`), adapted for the landscape OG format with the addition of the book cover showcase and value proposition text.
