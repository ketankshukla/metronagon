# Metronagon Media — Production Template Repository System

> **Purpose:** When a customer orders a package, clone the matching template repo into a project folder. Everything needed to produce and deliver the order is already there — folder structure, prompt templates, intake questionnaire, QA checklists, file naming conventions. The only thing that changes per customer is their content.

---

## Table of Contents

1. [Folder Structure on E: Drive](#1-folder-structure-on-e-drive)
2. [The Four Template Repos](#2-the-four-template-repos)
3. [Template 1: tpl-cover (Ebook Cover Design)](#3-template-1-tpl-cover)
4. [Template 2: tpl-branding (Series Branding)](#4-template-2-tpl-branding)
5. [Template 3: tpl-childrens (Children's Picture Books)](#5-template-3-tpl-childrens)
6. [Template 4: tpl-pipeline (Full Pipeline)](#6-template-4-tpl-pipeline)
7. [End-to-End Workflow](#7-end-to-end-workflow)
8. [Naming Conventions](#8-naming-conventions)
9. [Asset Inventory: What You Have vs. What You Need](#9-asset-inventory)
10. [Prompt Template Structures](#10-prompt-template-structures)
11. [Deliverable Specifications Reference](#11-deliverable-specifications-reference)
12. [Next Steps — Priority Order](#12-next-steps)

---

## 1. Folder Structure on E: Drive

```
E:\
 |
 |-- metronagon\                    <-- Your website repo (stays as-is, deploys to Vercel)
 |
 |-- metronagon-templates\          <-- Template repos (one per package type)
 |    |-- tpl-cover\                    GitHub repo: metronagon-tpl-cover
 |    |-- tpl-branding\                 GitHub repo: metronagon-tpl-branding
 |    |-- tpl-childrens\                GitHub repo: metronagon-tpl-childrens
 |    |-- tpl-pipeline\                 GitHub repo: metronagon-tpl-pipeline
 |
 |-- metronagon-projects\           <-- Active customer projects (cloned from templates)
 |    |-- 2026-02-19-martinez-cover-premium\
 |    |-- 2026-02-20-chen-branding-standard\
 |    |-- 2026-02-22-okafor-childrens-plus\
 |    |-- ...
 |
 |-- metronagon-archive\            <-- Completed projects (moved here after delivery + payment)
      |-- 2026-02-19-martinez-cover-premium\
      |-- ...
```

### Why This Structure?

- **Templates are separate repos** — they get versioned independently and can be GitHub template repos (so `git clone` gives a clean copy with no commit history)
- **Projects are OUTSIDE the website repo** — the website deploys to Vercel; customer files (large images, PDFs) should never be in that repo
- **Archive is separate** — keeps the active projects folder lean; you always know what's in-flight vs. done
- **Everything is on E: drive** — one drive, sibling folders, easy to navigate

---

## 2. The Four Template Repos

| # | Repo Name | Package Type | Tiers Covered | GitHub Repo Name |
|---|-----------|-------------|---------------|-----------------|
| 1 | `tpl-cover` | Ebook Cover Design | Standard ($99), Premium ($175) | `metronagon-tpl-cover` |
| 2 | `tpl-branding` | Series Branding | Starter ($275), Standard ($475), Premium ($800) | `metronagon-tpl-branding` |
| 3 | `tpl-childrens` | Children's Picture Books | Standard ($500), Plus ($750), Premium ($1,000) | `metronagon-tpl-childrens` |
| 4 | `tpl-pipeline` | Full Pipeline | Starter ($425), Standard ($800), Premium ($1,400) | `metronagon-tpl-pipeline` |

**Why one repo per package TYPE, not per tier?** Tiers within the same package type share 90% of the same workflow — the difference is scope (more books, more revisions, extra deliverables). The README has tier-specific sections marking what's included at each level.

---

## 3. Template 1: tpl-cover

**Covers:** Standard ($99) and Premium ($175)

```
tpl-cover/
 |-- README.md                      # Complete workflow checklist
 |-- CLIENT-BRIEF.md                # Intake questionnaire (fill after receiving client email)
 |-- DELIVERY-CHECKLIST.md          # QA checks before sending to client
 |-- FILE-NAMING.md                 # Naming conventions for this package
 |
 |-- prompts/
 |    |-- PROMPT-TEMPLATE-cover.md  # Parameterized cover generation prompt
 |    |-- PROMPT-TIPS.md            # Style guide for writing effective prompts
 |    |-- reference-styles.md       # Index of style descriptions by genre
 |
 |-- concepts/                      # 3 concept variations go here
 |    |-- (empty — .gitkeep)
 |
 |-- final/                         # Polished final cover
 |    |-- (empty — .gitkeep)
 |
 |-- revisions/                     # Revision rounds
 |    |-- r1/                       # Round 1 (Standard gets 1, Premium gets 2)
 |    |-- r2/                       # Round 2 (Premium only)
 |
 |-- delivery/                      # Final files ready for client
 |    |-- (empty — .gitkeep)
 |
 |-- client-references/             # Screenshots/links the client sends as inspiration
 |    |-- (empty — .gitkeep)
```

### README.md Contents (tpl-cover)

```markdown
# Ebook Cover Design — Production Workflow

## Order Info
- **Client:** [name]
- **Email:** [email]
- **Tier:** [ ] Standard ($99) / [ ] Premium ($175)
- **Order Date:** [date]
- **Due Date:** [date + 2 days Standard / + 3 days Premium]

## Workflow Checklist

### Phase 1: Client Brief (Day 0)
- [ ] Receive client email (auto-sent from thank-you page)
- [ ] Fill in CLIENT-BRIEF.md with their answers
- [ ] Save any reference covers they sent to client-references/
- [ ] Confirm: do I have enough info to start? If not, reply asking for clarification

### Phase 2: Concept Generation (Day 1)
- [ ] Open PROMPT-TEMPLATE-cover.md
- [ ] Fill in client details (title, author, genre, scene, colors, mood)
- [ ] Generate 6-8 raw concepts
- [ ] Select best 3 concepts
- [ ] Save to concepts/ as: {title-slug}-concept-01.png, -02.png, -03.png
- [ ] Ensure all 3 are 1600x2400, 300 DPI, sRGB

### Phase 3: Text Overlay (Day 1-2)
- [ ] Add title text to all 3 concepts
- [ ] Add author name to all 3 concepts
- [ ] Add series name / subtitle if applicable
- [ ] Check thumbnail readability at 150px width (Amazon size)

### Phase 4: Client Review (Day 2)
- [ ] Email all 3 concepts to client
- [ ] Ask them to choose their favorite
- [ ] Ask if they want any changes before final polish

### Phase 5: Final Polish (Day 2-3)
- [ ] Apply client's selection
- [ ] Enhanced post-processing (color correction, contrast, sharpening)
- [ ] [PREMIUM] Advanced post-processing + extended refinement
- [ ] Save to final/ as: {title-slug}-final.png

### Phase 6: Revisions
- [ ] [STANDARD] 1 round — apply client feedback, save to revisions/r1/
- [ ] [PREMIUM] Up to 2 rounds — save to revisions/r1/ and revisions/r2/

### Phase 7: Delivery
- [ ] Run through DELIVERY-CHECKLIST.md
- [ ] Copy final files to delivery/
- [ ] Upload delivery/ to Google Drive or create ZIP
- [ ] Send delivery link to client
- [ ] Mark order as complete

### Phase 8: Archive
- [ ] Move entire project folder to E:\metronagon-archive\
```

### CLIENT-BRIEF.md Contents (tpl-cover)

```markdown
# Client Brief — Ebook Cover Design

## Order Details
- **Client Name:**
- **Email:**
- **Tier:** Standard / Premium
- **Order Date:**
- **Due Date:**

## Book Details
- **Book Title:**
- **Subtitle:**
- **Author Name (as it appears on cover):**
- **Genre:**
- **Brief Description (2-3 sentences):**
- **Target Audience:** [Premium only]

## Visual Direction
- **Mood / Tone:**
- **Key Visual Elements:**
- **Color Preferences:**
- **Colors to Avoid:**
- **Style:** Photorealistic / Stylized / Client's Call
- **Specific Scene from Book:** [Premium only]

## Reference Covers
- Cover 1:
- Cover 2:
- Cover 3:
- Covers to AVOID (styles they don't want): [Premium only]

## Typography
- **Font Style:** Serif / Sans-Serif / Script / Display / My Call
- **Additional Text (tagline, series name, badge):** [Premium only]

## Publishing
- **Platform:** Amazon KDP / IngramSpark / Other:

## My Notes
(Internal notes, ideas, observations after reading the brief)
```

### DELIVERY-CHECKLIST.md Contents (tpl-cover)

```markdown
# Delivery Checklist — Ebook Cover Design

## File Specs
- [ ] Resolution: 1600 x 2400 pixels
- [ ] DPI: 300
- [ ] Color Profile: sRGB
- [ ] Format: PNG (primary) + JPG (secondary)
- [ ] File size: under 50MB per file

## Visual Quality
- [ ] Title is legible at full size
- [ ] Title is legible at 150px thumbnail (Amazon browse size)
- [ ] Author name is readable
- [ ] No artifacts, distortion, or generation glitches
- [ ] Colors are vibrant and not washed out
- [ ] Composition has clear focal point
- [ ] Genre signaling is correct (looks like a [genre] book)

## Text & Typography
- [ ] Title spelled correctly
- [ ] Author name spelled correctly
- [ ] Series name / subtitle correct (if applicable)
- [ ] Text doesn't overlap critical visual elements
- [ ] Font is appropriate for genre

## Deliverables Count
- [ ] 3 concept variations included
- [ ] 1 final polished cover included
- [ ] [PREMIUM] Priority turnaround met

## Delivery Package
- [ ] All files named per FILE-NAMING.md conventions
- [ ] Files organized in delivery/ folder
- [ ] Google Drive link created OR ZIP file prepared
- [ ] Delivery email drafted with download link
```

---

## 4. Template 2: tpl-branding

**Covers:** Starter ($275 / 3 books), Standard ($475 / 5 books), Premium ($800 / 8+ books)

```
tpl-branding/
 |-- README.md                      # Complete workflow checklist with tier sections
 |-- CLIENT-BRIEF.md                # Intake questionnaire
 |-- DELIVERY-CHECKLIST.md          # QA checks
 |-- FILE-NAMING.md                 # Naming conventions
 |
 |-- prompts/
 |    |-- PROMPT-TEMPLATE-cover.md          # Parameterized cover prompt (reused per book)
 |    |-- PROMPT-TEMPLATE-logo.md           # Series logo generation prompt  **[NEEDS CREATION]**
 |    |-- PROMPT-TEMPLATE-box-set.md        # Box set / landscape cover prompt  **[NEEDS CREATION]**
 |    |-- PROMPT-TEMPLATE-panoramic.md      # Panoramic wide-format scene  **[NEEDS CREATION]** [PREMIUM]
 |    |-- PROMPT-TEMPLATE-thumbnail.md      # YouTube thumbnail prompt  **[NEEDS CREATION]** [STANDARD+]
 |    |-- PROMPT-TEMPLATE-portrait.md       # Author portrait prompt  **[NEEDS CREATION]** [PREMIUM]
 |    |-- reference-styles.md               # Genre style index
 |
 |-- style-guide/
 |    |-- STYLE-GUIDE-TEMPLATE.md   # Deliverable template — the client receives this  **[NEEDS CREATION]**
 |
 |-- covers/                        # Individual book covers
 |    |-- book-01/
 |    |    |-- concepts/
 |    |    |-- final/
 |    |-- book-02/
 |    |    |-- concepts/
 |    |    |-- final/
 |    |-- book-03/                  # Starter: 3 books
 |    |-- book-04/                  # Standard: 5 books
 |    |-- book-05/
 |    |-- book-06/                  # Premium: 8+ books
 |    |-- book-07/
 |    |-- book-08/
 |    |-- (add more as needed)
 |
 |-- logo/
 |    |-- concepts/
 |    |-- final/
 |
 |-- box-set/
 |    |-- concepts/
 |    |-- final/
 |
 |-- panoramic/                     # [PREMIUM only]
 |    |-- concepts/
 |    |-- final/
 |
 |-- thumbnail/                     # [STANDARD + PREMIUM]
 |    |-- concepts/
 |    |-- final/
 |
 |-- portrait/                      # [PREMIUM only]
 |    |-- concepts/
 |    |-- final/
 |
 |-- revisions/
 |    |-- r1/
 |
 |-- delivery/
 |
 |-- client-references/
```

### Key README Sections (tpl-branding)

The README follows the same structure as tpl-cover but with these additional phases:

- **Phase 2A: Style System Design** — Before generating individual covers, define the shared visual DNA: color palette, typography, lighting, composition rules. Document in style-guide/
- **Phase 2B: Logo Generation** — Create series logo using PROMPT-TEMPLATE-logo.md
- **Phase 2C: Cover Generation** — Generate covers for all books using the style system
- **Phase 2D: Box Set** — Composite landscape cover from individual covers
- **Phase 2E: Thumbnail** — [STANDARD+] YouTube/social thumbnail
- **Phase 2F: Panoramic** — [PREMIUM] Wide-format connecting scene
- **Phase 2G: Author Portrait** — [PREMIUM] Portrait in series visual style
- **Phase 3: Style Guide Assembly** — Fill in STYLE-GUIDE-TEMPLATE.md with all decisions made

### STYLE-GUIDE-TEMPLATE.md (Deliverable to Client) **[NEEDS CREATION]**

```markdown
# [Series Name] — Visual Style Guide

## Series Identity
- **Series Name:**
- **Genre:**
- **Visual Tone:**
- **Core Message:**

## Color Palette
| Role | Color | Hex Code | Usage |
|------|-------|----------|-------|
| Primary | | #______ | Main backgrounds, dominant visual element |
| Secondary | | #______ | Accents, supporting elements |
| Accent | | #______ | Highlights, CTAs, energy |
| Text Primary | | #______ | Title text |
| Text Secondary | | #______ | Author name, subtitle |

## Typography
- **Title Font:** [font name] — [weight], [style notes]
- **Author Font:** [font name] — [weight], [style notes]
- **Series Identifier Font:** [font name]
- **Title Placement:** [position on cover]
- **Author Placement:** [position on cover]

## Art Style
- **Rendering Style:** [e.g., Photorealistic cinematic / Stylized illustration]
- **Lighting:** [e.g., Dramatic side-lighting with rim highlights]
- **Texture:** [e.g., Film grain, clean digital, painterly]
- **Atmosphere:** [e.g., Moody fog, clean and sharp, ethereal glow]

## Composition Rules
- **Focal Point:** [e.g., Center-bottom character, environmental scene]
- **Negative Space:** [where title/text goes]
- **Recurring Element:** [symbol, motif, object that ties series together]
- **Background Treatment:** [e.g., blurred depth, detailed environment]

## Logo
- **Logo File:** [filename]
- **Usage:** [where it appears on each cover]
- **Minimum Size:** [smallest it should be displayed]

## Expansion Guidelines
When adding new books to this series:
1. Start with this style guide as the creative brief
2. Match the color palette exactly (use hex codes above)
3. Maintain the same typography treatment
4. Use the same lighting direction and art style
5. Keep the recurring element consistent
6. Reference existing covers for composition patterns
```

---

## 5. Template 3: tpl-childrens

**Covers:** Standard ($500), Plus ($750), Premium ($1,000)

```
tpl-childrens/
 |-- README.md                          # Complete workflow checklist
 |-- CLIENT-BRIEF.md                    # Intake questionnaire
 |-- DELIVERY-CHECKLIST.md              # QA checks
 |-- FILE-NAMING.md                     # Naming conventions
 |
 |-- prompts/
 |    |-- PROMPT-TEMPLATE-page.md       # Single page illustration prompt  **[NEEDS CREATION]**
 |    |-- PROMPT-TEMPLATE-cover.md      # Front cover prompt  **[NEEDS CREATION]**
 |    |-- PROMPT-TEMPLATE-character.md  # Character reference sheet prompt  **[NEEDS CREATION]** [PREMIUM]
 |    |-- PROMPT-TIPS-childrens.md      # Children's-specific prompt guidance  **[NEEDS CREATION]**
 |
 |-- story/
 |    |-- STORY-TEMPLATE.md             # Page-by-page story planning template  **[NEEDS CREATION]**
 |    |-- story-text.md                 # Final story text (page by page)  [PREMIUM deliverable]
 |
 |-- character-design/                  # [PREMIUM] Character reference sheets
 |    |-- (empty — .gitkeep)
 |
 |-- pages/                             # All 32 page illustrations
 |    |-- front-cover/
 |    |    |-- concepts/
 |    |    |-- final/
 |    |-- page-01/ through page-32/     # Each page gets concepts + final
 |    |    |-- concepts/
 |    |    |-- final/
 |    |-- back-cover/
 |    |    |-- concepts/
 |    |    |-- final/
 |
 |-- assembled/                         # Assembled PDF + individual page files
 |    |-- (empty — .gitkeep)
 |
 |-- print-specs/                       # [PLUS + PREMIUM] Print-ready files
 |    |-- PRINT-FORMATTING-GUIDE.md     # Bleed, margins, CMYK specs  **[NEEDS CREATION]**
 |    |-- (empty — .gitkeep)
 |
 |-- revisions/
 |    |-- r1/                           # Round 1 (all tiers)
 |    |-- r2/                           # Round 2 (Plus + Premium only)
 |
 |-- delivery/
 |
 |-- client-references/
```

### Key README Sections (tpl-childrens)

- **Phase 1: Story Development** — Write or adapt story using STORY-TEMPLATE.md, plan page-by-page layout
- **Phase 2: Character Design** — [PREMIUM] Create character reference sheets (front, side, expressions) using PROMPT-TEMPLATE-character.md. [STANDARD/PLUS] Define character appearance in prompts
- **Phase 3: Style Testing** — Generate 10 test images of the main character to verify consistency before starting pages
- **Phase 4: Page Production** — Illustrate all 32 pages + front cover + back cover
- **Phase 5: Text Layout** — Add story text to illustrations
- **Phase 6: Assembly** — Create assembled PDF (page order, title page, copyright page, dedication)
- **Phase 7: Print Formatting** — [PLUS + PREMIUM] Format to print-on-demand specs (see PRINT-FORMATTING-GUIDE.md)
- **Phase 8: Story Text Document** — [PREMIUM] Separate document with complete text, page by page

### STORY-TEMPLATE.md **[NEEDS CREATION]**

```markdown
# [Book Title] — Page-by-Page Story Plan

## Book Info
- **Title:**
- **Target Age:** [2-4 / 4-6 / 6-8]
- **Tone:** [fun and silly / gentle / adventurous / educational]
- **Lesson/Message:**
- **Emotional Arc:** Starts [feeling] --> ends [feeling]

## Characters
### Main Character
- **Name:**
- **Age:**
- **Appearance:** Hair, skin, eyes, clothing, distinguishing features
- **Personality:**

### Supporting Characters
- **[Name]:** [description]

## Setting
- **Primary Location:**
- **Additional Locations:**

## Page Plan

| Page | Story Text (2-4 sentences) | Illustration Description | Key Emotion |
|------|---------------------------|-------------------------|-------------|
| Cover | — | [cover scene] | [excitement / wonder / ...] |
| 1 | | | |
| 2 | | | |
| 3 | | | |
| ... | | | |
| 32 | | | |
| Back | — | [back cover design] | — |
```

### PRINT-FORMATTING-GUIDE.md **[NEEDS CREATION]**

```markdown
# Print-Ready Formatting Guide — Children's Picture Books

## Standard Trim Sizes
- **Square:** 8.5" x 8.5" (most common for picture books)
- **Portrait:** 8" x 10"
- **Landscape:** 10" x 8"

## Bleed Requirements
- **Amazon KDP Print:** 0.125" bleed on all sides
- **IngramSpark:** 0.125" bleed on all sides
- Full-bleed illustrations must extend 0.125" beyond the trim line

## Margin / Safe Zone
- Keep all text and critical visual elements at least 0.25" from the trim edge
- Gutter (inner margin): 0.5" minimum for perfect-bound, 0.75" for saddle-stitch

## Color Profile
- **Digital/Ebook:** sRGB
- **Print:** CMYK-safe colors (avoid neon/fluorescent — they don't print accurately)
- Test critical colors by converting to CMYK and checking for shifts

## Resolution
- All images: 300 DPI minimum at final print size
- For 8.5" x 8.5" with bleed: 2625 x 2625 pixels minimum

## Page Count
- Must be a multiple of 4 for printing
- 32 interior pages + front cover + back cover = 34 total (round up to 36 with title page + copyright)

## Spine Width
- Depends on page count and paper stock
- KDP calculator: https://kdp.amazon.com/cover-calculator
- IngramSpark: provided during setup

## File Format
- **Assembled PDF:** Single file, all pages in order, embedded fonts
- **Individual Pages:** PNG or TIFF, 300 DPI, sRGB or CMYK per platform
```

---

## 6. Template 4: tpl-pipeline

**Covers:** Starter ($425 / 3 books), Standard ($800 / 5 books), Premium ($1,400 / 8+ books)

```
tpl-pipeline/
 |-- README.md                              # Complete workflow checklist
 |-- CLIENT-BRIEF.md                        # Intake questionnaire (most comprehensive)
 |-- DELIVERY-CHECKLIST.md                  # QA checks
 |-- FILE-NAMING.md                         # Naming conventions
 |
 |-- prompts/
 |    |-- PROMPT-TEMPLATE-cover.md          # Cover generation prompt
 |    |-- PROMPT-TEMPLATE-logo.md           # Series logo prompt
 |    |-- PROMPT-TEMPLATE-box-set.md        # Box set prompt
 |    |-- PROMPT-TEMPLATE-panoramic.md      # Panoramic prompt [PREMIUM]
 |    |-- PROMPT-TEMPLATE-thumbnail.md      # Thumbnail prompt [STANDARD+]
 |    |-- PROMPT-TEMPLATE-portrait.md       # Author portrait prompt [PREMIUM]
 |    |-- PROMPT-TEMPLATE-description.md    # Amazon book description prompt  **[NEEDS CREATION]**
 |    |-- reference-styles.md
 |
 |-- planning/                              # Series planning deliverables
 |    |-- SERIES-ARC-TEMPLATE.md            # Overall series arc structure  **[NEEDS CREATION]**
 |    |-- CHAPTER-OUTLINE-TEMPLATE.md       # Per-book chapter outlines  **[NEEDS CREATION]**
 |    |-- CONTINUITY-PLAN-TEMPLATE.md       # Cross-book continuity tracking  **[NEEDS CREATION]**
 |    |-- CHARACTER-TRACKING-TEMPLATE.md    # Character database  **[NEEDS CREATION]** [STANDARD+]
 |    |-- SERIES-BIBLE-TEMPLATE.md          # World rules, canon, etc.  **[NEEDS CREATION]** [PREMIUM]
 |    |-- BOOK-DESCRIPTION-TEMPLATE.md      # Amazon description template  **[NEEDS CREATION]**
 |
 |-- style-guide/
 |    |-- STYLE-GUIDE-TEMPLATE.md           # (same as tpl-branding)
 |
 |-- covers/                                # Same structure as tpl-branding
 |    |-- book-01/ through book-08+/
 |
 |-- logo/
 |    |-- concepts/
 |    |-- final/
 |
 |-- box-set/
 |    |-- concepts/
 |    |-- final/
 |
 |-- panoramic/                             # [PREMIUM]
 |-- thumbnail/                             # [STANDARD+]
 |-- portrait/                              # [PREMIUM]
 |
 |-- descriptions/                          # Amazon book descriptions
 |    |-- book-01-description.md
 |    |-- book-02-description.md
 |    |-- ...
 |
 |-- revisions/
 |    |-- r1/
 |    |-- r2/                               # [STANDARD + PREMIUM]
 |
 |-- delivery/
 |
 |-- client-references/
```

### Key Planning Templates **[ALL NEED CREATION]**

#### SERIES-ARC-TEMPLATE.md

```markdown
# [Series Name] — Series Arc

## Series Overview
- **Genre:**
- **Total Books:** [3 / 5 / 8+]
- **Central Theme:**
- **Core Conflict:**

## Book-by-Book Arc

### Book 1: [Title]
- **Role in Series:** Introduction / Setup
- **Main Plot:** [2-3 sentences]
- **Character State at Start:**
- **Character State at End:**
- **Cliffhanger / Hook for Book 2:**

### Book 2: [Title]
- **Role in Series:** Escalation
- **Main Plot:**
- **Character State at Start:**
- **Character State at End:**
- **Cliffhanger / Hook for Book 3:**

[Continue for each book...]

## Series-Level Threads
- **Thread 1:** [subplot or mystery that spans multiple books]
- **Thread 2:**
- **Thread 3:**

## Ending
- **How the series resolves:**
- **Loose ends to tie up:**
```

#### CHARACTER-TRACKING-TEMPLATE.md

```markdown
# [Series Name] — Character Tracking

## Main Characters

### [Character Name]
- **Role:** Protagonist / Antagonist / Supporting
- **First Appearance:** Book [#], Chapter [#]
- **Physical Description:**
- **Personality:**
- **Core Desire:**
- **Internal Conflict:**
- **Arc:** [how they change across the series]
- **Relationships:**
  - [Character] — [relationship]
- **Knowledge State by Book:**
  - Book 1: [what they know/don't know]
  - Book 2: [what changes]
  - ...

[Repeat for each character]

## Relationship Map
[Describe key relationships and how they evolve]

## Character Timeline
| Book | [Char 1] | [Char 2] | [Char 3] |
|------|----------|----------|----------|
| 1 | | | |
| 2 | | | |
| ... | | | |
```

#### SERIES-BIBLE-TEMPLATE.md (Premium Pipeline Only)

```markdown
# [Series Name] — Series Bible

## World Rules
- **Magic System / Technology:**
- **Geography:**
- **Political Structure:**
- **Economy:**
- **History / Timeline:**
- **Cultural Norms:**

## Established Canon
[Facts that are established in published books and cannot be contradicted]

## Factions / Organizations
| Name | Purpose | Leader | Alignment |
|------|---------|--------|-----------|
| | | | |

## Locations
| Place | Description | First Appearance | Significance |
|-------|-------------|-----------------|--------------|
| | | | |

## Timeline
| Year/Event | What Happens | Books Affected |
|------------|-------------|----------------|
| | | |

## Rules & Constraints
[Things that CAN'T happen in this world — important for consistency]
```

#### BOOK-DESCRIPTION-TEMPLATE.md

```markdown
# Amazon Book Description — [Book Title]

## Book [#] of [Series Name]

### Hook (1-2 sentences — the attention grabber)
[Opening line that makes the reader NEED to know more]

### Setup (2-3 sentences — the premise)
[What's the situation? Who's the character? What's at stake?]

### Escalation (2-3 sentences — the conflict)
[What goes wrong? What must the character face?]

### Stakes (1-2 sentences — why it matters)
[What happens if they fail? What's the cost?]

### Closing Hook (1 sentence — the reason to buy)
[End with a question or cliffhanger that demands they read the book]

---

**Keywords for Amazon backend:**
- [keyword 1]
- [keyword 2]
- [keyword 3]
- [keyword 4]
- [keyword 5]
- [keyword 6]
- [keyword 7]

**Categories:**
- [BISAC category 1]
- [BISAC category 2]
```

---

## 7. End-to-End Workflow

### Step 1: Order Received

A customer purchases a package through Stripe checkout on metronagon.com. The thank-you page shows them what information to send. They receive an onboarding email (from `E:\metronagon\emails\`) asking for their brief.

### Step 2: Clone the Template

Open PowerShell and run:

```powershell
# Navigate to projects folder
cd E:\metronagon-projects

# Clone the appropriate template (example: branding standard for client "Chen")
git clone E:\metronagon-templates\tpl-branding 2026-02-20-chen-branding-standard

# Remove git history (start fresh for this client)
cd 2026-02-20-chen-branding-standard
Remove-Item -Recurse -Force .git

# Optional: initialize new git repo for this project
git init
git add -A
git commit -m "Initial project from tpl-branding template"
```

**Naming convention:** `{YYYY-MM-DD}-{client-last-name}-{package-type}-{tier}`

### Step 3: Fill the Client Brief

1. Open `CLIENT-BRIEF.md`
2. Fill in all fields from the client's email responses
3. Save any reference images they sent to `client-references/`
4. Review: do you have enough info? If not, reply asking for clarification

### Step 4: Produce Assets

Follow the `README.md` workflow checklist step by step:
1. Design the style system (branding/pipeline) or go straight to concepts (covers)
2. Generate prompts using the templates in `prompts/`
3. Generate assets, review, select best options
4. Apply text overlays, post-processing
5. Save to the correct folders (concepts/, final/, etc.)

### Step 5: Client Review & Revisions

1. Send concepts to client for review
2. Apply their feedback
3. Save revision files to `revisions/r1/` (and `r2/` if applicable)

### Step 6: Quality Assurance

Run through `DELIVERY-CHECKLIST.md`:
- File specs correct?
- All deliverables accounted for?
- Names spelled correctly?
- Thumbnail readability?
- Genre signaling accurate?

### Step 7: Deliver

1. Copy all final files to `delivery/`
2. Upload to Google Drive or create ZIP
3. Email the download link to client
4. Confirm receipt

### Step 8: Archive

```powershell
# Move completed project to archive
Move-Item E:\metronagon-projects\2026-02-20-chen-branding-standard E:\metronagon-archive\
```

---

## 8. Naming Conventions

### Project Folders

```
{YYYY-MM-DD}-{client-last-name}-{package-type}-{tier}

Examples:
2026-02-19-martinez-cover-premium
2026-02-20-chen-branding-standard
2026-02-22-okafor-childrens-plus
2026-03-01-thompson-pipeline-starter
```

### Cover Files

```
{title-slug}-concept-01.png          # Concept variation 1
{title-slug}-concept-02.png          # Concept variation 2
{title-slug}-concept-03.png          # Concept variation 3
{title-slug}-final.png               # Polished final
{title-slug}-r1-final.png            # After revision round 1
{title-slug}-r2-final.png            # After revision round 2

Examples:
neon-rain-protocol-concept-01.png
neon-rain-protocol-final.png
neon-rain-protocol-r1-final.png
```

### Logo Files

```
{series-slug}-logo.png               # Final logo
{series-slug}-logo-concept-01.png    # Logo concept
{series-slug}-logo-dark-bg.png       # Logo variant (dark background)
{series-slug}-logo-light-bg.png      # Logo variant (light background)
```

### Box Set / Panoramic / Thumbnail

```
{series-slug}-box-set.png
{series-slug}-box-set-concept-01.png
{series-slug}-panoramic.png
{series-slug}-thumbnail-1280x720.png
```

### Author Portrait

```
{author-slug}-portrait.png
{author-slug}-portrait-concept-01.png
```

### Children's Book Pages

```
front-cover.png
page-01.png through page-32.png
back-cover.png
{title-slug}-assembled.pdf           # Complete assembled PDF
{title-slug}-print-ready.pdf         # Print-formatted version
```

### Style Guide

```
{series-slug}-style-guide.pdf
```

### Planning Documents

```
{series-slug}-series-arc.pdf
{series-slug}-chapter-outlines.pdf
{series-slug}-continuity-plan.pdf
{series-slug}-character-tracking.pdf
{series-slug}-series-bible.pdf       # [Premium only]
book-01-{title-slug}-description.md
book-02-{title-slug}-description.md
```

---

## 9. Asset Inventory

### What You HAVE (Existing Assets)

| Asset | Location | Count | Notes |
|-------|----------|-------|-------|
| Cover generation prompts | `example-prompts/` (12 genre folders) | 100+ | Production-quality, highly detailed |
| Metronagon logo prompt | `book-prompts/metronagon-logo.txt` | 1 | Can adapt structure for client logos |
| Email templates (main packages) | `emails/01-13` | 13 | One per package tier |
| Email templates (revisions) | `emails/14-24` | 11 | One per revision type |
| Email template (retainer) | `emails/25` | 1 | |
| Package requirements (intake checklists) | `src/app/thank-you/package-requirements.ts` | 11 entries | Powers thank-you page |
| YouTube banner prompt | `youtube-banner-prompt.md` | 1 | Multi-tool format, good structural reference |
| Portfolio examples (Aztec series) | `public/portfolio/aztec/` | 12 covers + 3 box sets + 8 portraits + logo |
| Portfolio examples (Repetition) | `public/portfolio/repetition/` | 5 covers + box set + thumbnail + logo |
| Portfolio examples (Reality) | `public/portfolio/reality/` | 5 covers + box set + thumbnail + logo |
| Portfolio examples (Children's) | `public/portfolio/childrens/` | 32 pages + front/back cover |

### What You NEED (Gaps to Fill)

| Asset | Priority | Template | Effort | Notes |
|-------|----------|----------|--------|-------|
| **PROMPT-TEMPLATE-logo.md** | HIGH | tpl-branding, tpl-pipeline | Medium | Adapt from metronagon-logo.txt structure |
| **PROMPT-TEMPLATE-box-set.md** | HIGH | tpl-branding, tpl-pipeline | Medium | Composite landscape from individual covers |
| **PROMPT-TEMPLATE-panoramic.md** | MEDIUM | tpl-branding (Premium), tpl-pipeline (Premium) | Medium | Wide-format connecting scene |
| **PROMPT-TEMPLATE-thumbnail.md** | MEDIUM | tpl-branding (Std+), tpl-pipeline (Std+) | Low | 1280x720, adapt from youtube-banner-prompt.md |
| **PROMPT-TEMPLATE-portrait.md** | MEDIUM | tpl-branding (Premium), tpl-pipeline (Premium) | Medium | Author portrait in series style |
| **PROMPT-TEMPLATE-page.md** | HIGH | tpl-childrens | Medium | Single page illustration for children's books |
| **PROMPT-TEMPLATE-character.md** | HIGH | tpl-childrens (Premium) | Medium | Character reference sheet (front/side/expressions) |
| **PROMPT-TEMPLATE-description.md** | MEDIUM | tpl-pipeline | Low | Amazon description — mostly text/copywriting |
| **PROMPT-TIPS-childrens.md** | MEDIUM | tpl-childrens | Low | Children's-specific prompt guidance |
| **STYLE-GUIDE-TEMPLATE.md** | HIGH | tpl-branding, tpl-pipeline | Low | Template above — just needs to be saved as a file |
| **STORY-TEMPLATE.md** | HIGH | tpl-childrens | Low | Template above — just needs to be saved as a file |
| **PRINT-FORMATTING-GUIDE.md** | MEDIUM | tpl-childrens (Plus + Premium) | Low | Template above — just needs to be saved as a file |
| **SERIES-ARC-TEMPLATE.md** | HIGH | tpl-pipeline | Low | Template above — just needs to be saved as a file |
| **CHAPTER-OUTLINE-TEMPLATE.md** | HIGH | tpl-pipeline | Low | Per-book chapter structure |
| **CONTINUITY-PLAN-TEMPLATE.md** | HIGH | tpl-pipeline | Low | Cross-book tracking |
| **CHARACTER-TRACKING-TEMPLATE.md** | MEDIUM | tpl-pipeline (Std+) | Low | Template above — just needs to be saved as a file |
| **SERIES-BIBLE-TEMPLATE.md** | MEDIUM | tpl-pipeline (Premium) | Low | Template above — just needs to be saved as a file |
| **BOOK-DESCRIPTION-TEMPLATE.md** | MEDIUM | tpl-pipeline | Low | Template above — just needs to be saved as a file |
| **Children's Plus email template** | HIGH | N/A (goes in emails/) | Low | Gap between 09-standard and 10-premium |
| **Children's Plus package-requirements entry** | HIGH | N/A (goes in package-requirements.ts) | Low | Missing from thank-you page system |
| **reference-styles.md** | MEDIUM | All templates | Medium | Index of genre style descriptions for quick reference |

### Summary

- **Assets you HAVE:** ~130+ files (prompts, emails, portfolio examples)
- **Assets you NEED:** ~20 template files (most are LOW effort — structured markdown)
- **Critical path:** The HIGH priority items marked above — focus on these first
- **Most templates above already have their content defined in this document** — they just need to be saved as actual files in the template repos

---

## 10. Prompt Template Structures

### Cover Prompt Template (PROMPT-TEMPLATE-cover.md)

This is your highest-volume prompt. Based on the structure of your existing 100+ example prompts:

```markdown
# Cover Prompt — [BOOK TITLE]

## Header Block
- **TITLE:** [Book Title] — [Series Name if applicable]
- **TYPE:** Ebook Front Cover
- **DIMENSIONS:** 1600 x 2400 pixels, 300 DPI, sRGB color profile
- **GENRE:** [genre]
- **ART STYLE:** [style description — pull from reference-styles.md or client brief]

---

## Scene Description
[Detailed scene: setting, environment, time of day, weather, atmosphere]

## Main Subject
[Character, object, or focal point — position on the cover, pose, clothing, expression]

## Color Palette
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | | # | |
| Secondary | | # | |
| Accent | | # | |
| Darkness | | # | |

## Lighting
[Direction, intensity, color temperature, shadows, highlights]

## Typography Placement
- **Title:** [position, font style, color, effects]
- **Author:** [position, font style, color]
- **Series/Subtitle:** [position, font style, color]

## Mood & Atmosphere
[Overall feeling, emotional tone, what the viewer should feel at first glance]

## Thumbnail Test
[What should be visible/readable at 150px width on Amazon]

## Quality Notes
[Resolution requirements, artifact avoidance, rendering quality expectations]
```

### Logo Prompt Template (PROMPT-TEMPLATE-logo.md) **[NEEDS CREATION]**

Based on the metronagon-logo.txt structure:

```markdown
# Logo Prompt — [SERIES NAME]

## Identity
- **Series Name:** [name]
- **Genre:** [genre]
- **Tone:** [epic / professional / whimsical / minimalist / etc.]
- **Usage:** Book covers, thumbnails, social media, favicon

## Design Direction
- **Style:** [text-only wordmark / icon + wordmark / emblem / etc.]
- **Symbol/Icon:** [if applicable — what should it depict?]
- **Color Scheme:** [match series palette]

## Technical Specs
- **Dimensions:** 2000 x 2000 pixels (square, for flexibility)
- **Background:** Transparent PNG (primary delivery)
- **Variants Needed:** Dark background, light background

## Prompt
[Full generation prompt here — describe the logo in detail:
materials, textures, typography, arrangement, lighting, background]

## Post-Processing
- [ ] Remove background / ensure transparency
- [ ] Create dark-bg and light-bg variants
- [ ] Test at favicon size (16x16)
- [ ] Test on cover mockup
```

---

## 11. Deliverable Specifications Reference

Quick reference for every file type you deliver to clients.

| Deliverable | Dimensions | DPI | Format | Color | Notes |
|-------------|-----------|-----|--------|-------|-------|
| Ebook cover | 1600 x 2400 | 300 | PNG + JPG | sRGB | Amazon KDP standard |
| Series logo | 2000 x 2000 | 300 | PNG (transparent) | sRGB | + dark/light bg variants |
| Box set cover | 2560 x 1600 | 300 | PNG + JPG | sRGB | Landscape composite |
| Panoramic | 3840 x 1080 | 300 | PNG + JPG | sRGB | Ultra-wide marketing banner |
| YouTube thumbnail | 1280 x 720 | 72 | PNG + JPG | sRGB | Optimized for web |
| Author portrait | 1600 x 1600 | 300 | PNG | sRGB | Square format |
| Children's pages | 2625 x 2625* | 300 | PNG | sRGB (or CMYK for print) | *Based on 8.5" trim + bleed |
| Assembled PDF | Trim size + bleed | 300 | PDF | sRGB or CMYK | All pages in order |
| Style guide | N/A | N/A | PDF | N/A | Markdown converted to PDF |
| Series arc | N/A | N/A | PDF | N/A | Planning document |
| Book descriptions | N/A | N/A | .md or .txt | N/A | Plain text for Amazon |

---

## 12. Next Steps — Priority Order

### Phase 1: Create the Folder Structure (30 minutes)

```powershell
# Create the top-level folders
mkdir E:\metronagon-templates
mkdir E:\metronagon-projects
mkdir E:\metronagon-archive

# Create the 4 template repos
mkdir E:\metronagon-templates\tpl-cover
mkdir E:\metronagon-templates\tpl-branding
mkdir E:\metronagon-templates\tpl-childrens
mkdir E:\metronagon-templates\tpl-pipeline
```

### Phase 2: Create Template 1 — tpl-cover (1-2 hours)

This is your simplest template and your most common order. Start here.

1. Create the folder structure as shown in Section 3
2. Write the README.md, CLIENT-BRIEF.md, DELIVERY-CHECKLIST.md, FILE-NAMING.md
3. Create PROMPT-TEMPLATE-cover.md (adapt from your best example prompt)
4. Create reference-styles.md (index of genre style descriptions)
5. Initialize as a git repo and push to GitHub as `metronagon-tpl-cover`
6. **Test it:** pretend you just got a cover order and clone it — walk through the whole workflow

### Phase 3: Create Templates 2-4 (2-3 hours each)

Build on tpl-cover, adding the extra deliverables for each package type:
- tpl-branding: add logo, box set, style guide templates
- tpl-childrens: add story, character, page, print templates
- tpl-pipeline: add planning, descriptions, and combine cover + branding templates

### Phase 4: Fill the Prompt Gaps (4-6 hours total)

Create the **[NEEDS CREATION]** prompt templates:
1. PROMPT-TEMPLATE-logo.md — adapt from metronagon-logo.txt
2. PROMPT-TEMPLATE-box-set.md — composite landscape technique
3. PROMPT-TEMPLATE-page.md — children's page illustrations
4. PROMPT-TEMPLATE-character.md — character reference sheets
5. PROMPT-TEMPLATE-panoramic.md — wide-format connecting scene
6. PROMPT-TEMPLATE-thumbnail.md — adapt from youtube-banner-prompt.md
7. PROMPT-TEMPLATE-portrait.md — author portrait in series style
8. PROMPT-TEMPLATE-description.md — Amazon book descriptions

### Phase 5: Fix Website Gaps (30 minutes)

1. Create `emails/09b-childrens-book-plus.md` — the missing Children's Plus email template
2. Add Children's Plus entry to `package-requirements.ts`
3. Update old prices in email templates (01 says $75, should say $99; 03 says $250, should say $275; 11 says $400, should say $425)

### Phase 6: Push to GitHub as Template Repos (30 minutes)

```powershell
# For each template folder:
cd E:\metronagon-templates\tpl-cover
git init
git add -A
git commit -m "Initial template: Ebook Cover Design"
gh repo create ketankshukla/metronagon-tpl-cover --private --source=. --push

# Repeat for tpl-branding, tpl-childrens, tpl-pipeline
```

Mark them as "Template repositories" in GitHub settings so you can use GitHub's template clone feature.

---

## Total Estimated Time

| Phase | Time | Priority |
|-------|------|----------|
| Folder structure | 30 min | Do first |
| tpl-cover (simplest, most common) | 1-2 hrs | Do second |
| tpl-branding | 2-3 hrs | Do third |
| tpl-childrens | 2-3 hrs | Do fourth |
| tpl-pipeline | 2-3 hrs | Do fifth |
| Fill prompt gaps | 4-6 hrs | Can do incrementally |
| Fix website gaps | 30 min | Do alongside Phase 2 |
| Push to GitHub | 30 min | After all templates done |
| **Total** | **~13-19 hours** | Spread over 2-3 days |

The cover template alone gets you operational for your most common order type. You can build the others as needed — don't feel pressured to create all 4 before taking your first order.
