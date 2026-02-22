# PROMPT 2: BOOK SERIES CONTENT AND ASSET GENERATOR

## YOUR MISSION

You are a world-class author, creative director, and publishing strategist. I have cloned my book series template repository to start a new project. Your task is to take my series concept and generate **every single asset** needed for a complete, publication-ready book series — chapters, front and back matter, image prompts, marketing copy, KDP metadata, website data, and video scripts.

This is a massive undertaking. You must work systematically through every book, every chapter, every asset type. Do not cut corners. Do not summarize. Do not skip files. Every chapter must be full-length, every image prompt must be ultra-detailed, every marketing asset must be publication-ready.

---

## MY SERIES CONCEPT

*(Replace this entire section with your series brief before giving this prompt to the model)*

```
SERIES NAME: [Your series name]
GENRE: [Fiction / Non-fiction / specify subgenre]
NUMBER OF BOOKS: [e.g., 5, 8, 12]
CHAPTERS PER BOOK: [e.g., 10, 20, 24]
TARGET WORD COUNT PER CHAPTER: [e.g., 1500-2000 words]
TARGET AUDIENCE: [e.g., Adults 25-45, YA 13-25]
TONE: [e.g., Epic and thrilling / Inspirational and firm / Dark and philosophical]
SERIES DESCRIPTION: [2-3 paragraphs describing the concept, themes, world, central conflict]
COMPARABLE TITLES: [e.g., "For fans of X and Y"]
COLOR SCHEME: [Primary color hex, secondary color hex, accent color hex]
VISUAL STYLE: [e.g., Mesoamerican-Japanese fusion / Minimalist modern / Dark gothic]
```

---

## STEP 1: SERIES ARCHITECTURE (Do this FIRST, before writing any chapters)

### 1.1 Fill in the Book Series Template

Open `book-series-template.md` in this repository and fill in every section completely:

- **Series Vision:** Name, book count, chapter count, word targets, genre, audience, tone, description, tagline
- **Guiding Principles (4Cs):** Continuity, Clarity, Consistency, Coherency — adapted to this series
- **Series Structure:** Define acts, books per act, themes per act, and the overarching narrative arc
- **Characters** (fiction): Full protagonist team, antagonist team, elder/mentor characters with names, roles, descriptions, arcs, and sample dialogue
- **Characters** (non-fiction): Key figures, case studies, recurring examples, and reference personas
- **Character Naming Rules:** Establish naming conventions that fit the series' cultural setting
- **Romance** (if applicable): Primary and secondary romantic arcs mapped across books
- **Character Death Strategy** (fiction): Who can die, who is protected, when deaths occur
- **Narration Style:** POV, voice rules, sample voice for key characters
- **Book Title Format:** Consistent titling convention for the whole series
- **Chapter Cliffhangers:** Within-book and between-book cliffhanger strategies
- **Series Epilogue:** How the series concludes
- **Book Structure:** Confirm front matter, back matter, chapter structure per book
- **Amazon Publishing Template:** Keywords, categories, pricing, launch strategy
- **Box Set Strategy:** How books will be bundled
- **Cover Image Requirements:** Visual style, text placement rules, font choices, color scheme

### 1.2 Create the Master Arc Outline

Create `master-arc-outline.md` at the project root with:

**For Fiction:**
- Complete plot outline for every book (major beats, character arcs, villain introductions/defeats)
- Cliffhanger plan for each book ending
- Romance progression timeline
- Death/defeat schedule
- Power progression and magic system evolution
- Key revelations and their timing across the series
- Timeline of events (in-world chronology)

**For Non-fiction:**
- Thematic progression across books (each book builds on the previous)
- Key concepts introduced per book
- Cross-book continuity sections ("Where We Have Been" / "What This Book Addresses" / "Coming Next")
- Case studies and examples mapped across books
- Reader transformation arc (what the reader knows/feels at each stage)

### 1.3 Create Chapter Outlines

Create `chapter-outlines/` directory with one file per book:

**For Fiction** — each chapter outline includes:
- Chapter number and title
- POV character
- Location/setting
- Key events (3-5 bullet points)
- Character development beats
- Cliffhanger/hook for next chapter
- Word count target

**For Non-fiction** — each chapter outline includes:
- Chapter number and title
- Central thesis/argument
- Key concepts introduced
- Examples and case studies
- Actionable takeaways
- Transition to next chapter

---

## STEP 2: WRITE ALL BOOK CONTENT

Work through each book sequentially. For each book, create the complete directory:

```
book-series/Book XX - [Title] - [Subtitle]/
├── chapters/
├── chapter-summaries/
├── front_matter/
├── back_matter/
├── book-summary/
├── book_descriptions/
└── image-prompts/
```

### 2.1 Front Matter (per book)

Create these files in `front_matter/`:

**copyright.md** — Include:
- Full book title with series name and book number
- Copyright year and author name
- Standard rights reservation clause
- Fiction disclaimer (fiction) or factual basis note (non-fiction)
- Series identification (e.g., "This is Book X in the [Series Name] series.")
- Edition line, ISBN placeholder
- Publisher name: Metronagon
- Print location line

**dedication.md** — Create a unique, heartfelt dedication for each book. Keep them personal and varied — not the same formula repeated.

**epigraph.md** — Select or create a powerful, thematically relevant quote for each book. For fiction, this can be from the story's world. For non-fiction, use real quotes from relevant thinkers. Include attribution.

**For Fiction — dramatis_personae.md:**
- List ALL characters appearing in this book, organized by faction/allegiance
- Include: Name, title/rank, one-line description
- Mark new characters introduced in this book
- Include "Previously in [Series Name]" recap section for Books 2+

**For Non-Fiction — preface.md:**
- Context for the series and where this book fits
- What prompted this exploration
- Who this book is for

**For Non-Fiction — introduction.md:**
- "Where We Have Been" section (Books 2+ — recap previous books)
- "What This Book Addresses" — overview of this book's themes
- Chapter-by-chapter preview (one line per chapter)

**For Non-Fiction — prologue.md:**
- Personal narrative or story that sets the emotional tone
- Connection to the book's central theme

### 2.2 Chapters (per book)

**THIS IS THE MOST CRITICAL SECTION. EVERY CHAPTER MUST BE FULL-LENGTH.**

Write each chapter as a standalone markdown file in `chapters/`:

**File naming:** `chapter_XX_[slug_with_underscores].md`
- For fiction: `chapter_01_the_edge_of_smoke.md`
- For non-fiction: `chapter_01_belief_is_not_a_virtue.md`
- Non-fiction books with continuous numbering: `chapter_11_consequences_of_comfort.md` (Book 2 starts at 11)

**Chapter content requirements:**

For Fiction:
- Minimum 1,500 words per chapter (STRICT — never fall short, aim for 1,800-2,500)
- Start with chapter title line: `Chapter X - [TITLE IN CAPS]`
- Pure narrative prose — no markdown headers within chapters
- Vivid sensory descriptions, sharp dialogue, emotional intensity
- Each chapter ends with a cliffhanger or hook (rotate types: danger, revelation, emotional, mystery, action, arrival)
- Maintain character voice consistency across all chapters
- Track continuity (injuries, relationships, locations, time passage)
- Show don't tell — action first, exposition woven in

For Non-Fiction:
- Minimum 2,000 words per chapter (STRICT — these are substantive teaching chapters)
- Use H1 for chapter title, H2 for major sections
- Structured with clear sections: introduction, key concepts, examples, case studies, actionable insights, conclusion
- Tone: inspirational, firm, solid, unapologetic — no warnings, no discomfort framing, no hedging
- Language of transformation: "extraordinary," "powerful," "game-changing"
- Address reader directly as someone on a journey of growth
- End every chapter with inspiration and motivation to continue

### 2.3 Chapter Summaries (per book)

Create `chapter-summaries/chapter_XX_summary.md` for each chapter:
- 10-16 lines of concise bullet points
- Designed for 3-minute verbal delivery
- Captures key events (fiction) or key concepts (non-fiction)
- No spoilers for future chapters

### 2.4 Book Summary (per book)

Create `book-summary/book_XX_summary.md`:
- 5-minute AI video script format
- Narrative overview of the entire book
- Suitable for narrator voiceover
- Covers major themes, key moments, and emotional arc
- Ends with a hook for the next book (except final book which ends with series reflection)

### 2.5 Book Description (per book)

Create `book_descriptions/description.md`:
- HTML-formatted for Amazon KDP
- Use this structure:
  ```html
  <b>[Opening hook — one powerful question or statement]</b>
  <p>[Setup paragraph — world, conflict, stakes]</p>
  <p>[Character paragraph — focus character and personal stakes]</p>
  <p><b>In this book:</b></p>
  <ul>
  <li>[Key event/revelation 1]</li>
  <li>[Key event/revelation 2]</li>
  <li>[Key event/revelation 3]</li>
  <li>[Key event/revelation 4]</li>
  <li>[Key event/revelation 5]</li>
  </ul>
  <p>[Emotional hook — what the reader will FEEL]</p>
  <p>[Series context — where this book fits]</p>
  <p><i>[Closing tagline]</i></p>
  <p><b>Book X in the [Series Name] series. From Ketan Shukla, published by Metronagon.</b></p>
  ```

### 2.6 Image Prompts (per book)

Create `image-prompts/book_XX_cover_prompts.md` with 3-5 variant cover prompts per book. Each variant should show a different composition or scene while maintaining the series' visual identity.

### 2.7 Back Matter (per book)

Create these files in `back_matter/`:

**about_the_author.md:**
```
# About the Author

Ketan Shukla is a publisher, author, and creative technologist. He is the founder of Metronagon, an independent publishing company dedicated to producing thought-provoking fiction and non-fiction. His work spans genres from epic fantasy to philosophy and personal development.

When he's not writing, Ketan explores the intersection of technology, creativity, and human potential.

Visit metronagon.com to explore his work.
```

**also_by.md:**
- Complete list of all books in this series with titles
- Box set listings
- Other series by Ketan Shukla (reference existing: Aztec Samurai Adventures, Repetition: Mother of Mastery, Reality Without Belief)

**authors_note.md:**
- Unique per book — personal reflection on the themes and process
- 300-500 words
- Authentic voice, connects personally with the reader

**connect.md:**
```
# Connect with Ketan Shukla

**Website:** metronagon.com
**Amazon Author Page:** amazon.com/author/ketanshukla
**Email:** ketan@metronagon.com

Sign up for the Metronagon newsletter to receive updates on new releases, behind-the-scenes content, and exclusive previews.

Visit metronagon.com to join.
```

**review_request.md:**
- Polite, personal request for Amazon reviews
- Explain why reviews matter for independent authors
- Include a sample starter sentence: "I loved this book because..."
- Sign off with "-- Ketan"

**For Non-Fiction — epilogue.md:**
- Chapter recap with key takeaways
- "Coming Next" section teasing next book (except final book)
- Complete series listing

---

## STEP 3: CREATE ALL IMAGE PROMPTS

### 3.1 Ebook Cover Prompts

Create one `.txt` file per book in `book-prompts/ebook-covers/`:

**File naming:** `book-XX-[kebab-case-title].txt`

**CRITICAL:** Each prompt must be **60-80+ lines of ultra-specific photorealistic description**. Study this exact format and level of detail:

```
[BOOK TITLE]
TYPE: Ebook Front Cover (Amazon Kindle + Apple iBooks)
DIMENSIONS: 1600 x 2400 pixels, 300 DPI, sRGB color profile
COMPATIBLE: Amazon Kindle (min 1000x1600, ideal 1600x2400), Apple iBooks (max 1600x2400, max 4M pixels)

---

A breathtaking ultra-high-resolution photorealistic book cover rendered at 1600x2400 pixels, 300 DPI, in sharp cinematic digital style with advanced volumetric lighting, ray-traced reflections, and subsurface skin scattering. This must look like a $200-million Hollywood movie poster... ABSOLUTELY NO oil painting, NO watercolor, NO painterly brushstrokes, NO soft-focus artistic filters, NO traditional media aesthetic whatsoever. Every pixel must be razor-sharp, hyper-detailed, and cinematically lit.

SUBJECT — [DETAILED CHARACTER/SCENE DESCRIPTION]:
[500+ words describing the main subject with obsessive physical detail — pose, expression, body language, skin texture (visible pores, natural sheen), eye detail (iris color, catchlights, lash shadows), hair (individual strands, styling, ornaments)]

FACE — HYPER-DETAILED PHOTOREALISTIC:
[300+ words on facial features with photographic precision — bone structure, skin quality, eye detail, nose, lips, expression, scars/marks, lighting on skin]

HAIR/HEADWEAR — ELABORATE AND DYNAMIC:
[200+ words on hair or head covering with material detail]

CLOTHING/ARMOR — RICHLY DETAILED:
[300+ words on outfit with material textures, colors, patterns, ornaments]

KEY OBJECT/WEAPON (if applicable):
[200+ words on the defining object with material detail]

BACKGROUND — [THEMATIC SETTING]:
[300+ words on the environment with architectural detail, natural elements, atmospheric conditions]

ATMOSPHERIC EFFECTS AND PARTICLES:
[150+ words on particles, light effects, magical energy, dust motes, heat shimmer]

CRITICAL COMPOSITION RULE — FACE PLACEMENT:
The subject's face must be positioned entirely BELOW the subtitle text area and ABOVE the author name. Face occupies roughly the 55%-82% vertical zone. The top 40% of the image must contain ONLY background elements. NO part of the subject may enter the top 35%.

TEXT — MUST BE RENDERED EXACTLY AS SPECIFIED:
Line 1 (3% from top): "[SERIES NAME]" — small elegant Trajan Pro, centered, [PRIMARY COLOR], letter-spacing 0.15em, ~14pt. Subtle glow behind letters.
Line 2 (6% from top): "BOOK [ROMAN NUMERAL]" — Trajan Pro, centered, gold (#FFD700), letter-spacing 0.2em, ~12pt. Flanked by thin gold lines.
Lines 3-4 (10-22% from top): "[TITLE]" — large Trajan Pro, centered, white/cream with golden warmth and luminous glow. Embossed quality.
Decorative ornamental line (24% from top): Gold and [ACCENT COLOR] filigree divider with [CULTURAL STYLE] motifs.
Line 5 (26% from top): "[SUBTITLE]" — smaller italic Trajan Pro, centered, light cream/gold.
Decorative ornamental line (28% from top): Matching filigree divider.
Line 6 (92% from top): "KETAN SHUKLA" — large Trajan Pro, centered, white/cream, letter-spacing 0.2em. Embossed quality.

OVERALL MOOD AND QUALITY:
[Summary of the desired emotional impact and quality standard]
```

**Each book's prompt must be unique** — different character pose, different scene, different emotional tone — while maintaining visual series consistency through the text treatment, color scheme, and overall quality standard.

### 3.2 Branding / Logo Prompt

Create `book-prompts/branding/series-logo-[kebab-case-name].txt`:

- 2000 x 2000 pixels, 300 DPI, square format
- Photorealistic artifact photography style (studio-lit metalwork/gemstone emblem)
- NO painterly style — must look like a photograph of a real physical artifact
- Detailed material descriptions (specific metals, stones, textures)
- Dual-source studio lighting (warm primary, cool secondary)
- Text below emblem: series name and author name
- Cultural design elements matching the series' aesthetic

### 3.3 Paperback Wrap Prompts

Create one `.txt` file per book in `book-prompts/paperback-wraps/`:
- Full wrap-around cover design (front, spine, back)
- Specific dimensions for paperback trim size
- Back cover text placement for blurb, barcode area, ISBN
- Spine text with series name, book title, author name

### 3.4 Box Set Prompts

Create prompts in `book-prompts/box-sets/` for:
- Act-based collections (if series has acts)
- Complete series collection
- Landscape format for promotional use

### 3.5 Social Media Prompts

Create one `.txt` file per book in `book-prompts/social-media/`:
- Square format (1080 x 1080) for Instagram
- Character or scene focused
- Series branding elements included
- Less text than covers — focus on visual impact

### 3.6 Character Portrait Prompts (Fiction Only)

Create one `.txt` file per major character in `book-prompts/character-portraits/`:
- Portrait format, photorealistic
- Consistent with how the character appears on book covers
- Detailed physical description matching the series' established look
- Studio lighting, clean background
- Suitable for website character showcase and marketing

### 3.7 YouTube Thumbnail Prompts

Create prompts in `book-prompts/youtube-thumbnails/`:
- 1920 x 1080 landscape format
- Bold, eye-catching composition
- Series branding
- Designed for video marketing

---

## STEP 4: CREATE MARKETING MATERIALS

### 4.1 Book Blurbs

Create one file per book in `book-blurbs/`:

**File naming:** `bookXX-blurb.txt`

Format: 100-150 words, 3-5 punchy paragraphs. These are short-form marketing copy — hooks, drama, stakes. End with series context line.

### 4.2 KDP Metadata

Fill in `book-series/kdp-categories-and-keywords.md`:
- 7 keywords per book (5 series-wide + 2 rotating)
- Primary and secondary categories per book with rotation strategy
- Content rating
- Publisher: Metronagon

Fill in `book-series/series-description.md`:
- HTML-formatted series overview
- Suitable for Amazon series page
- Describes the complete arc and what readers will experience

### 4.3 Video Scripts

Create `video-scripts/series-overview.txt`:
- 5-7 minute narration script
- Covers the entire series concept
- Compelling hook, dramatic arc, call to action

Create per-book scripts in `video-scripts/`:
- `book1-[kebab-title].txt` through final book
- 4-5 minute narration per book
- Summary suitable for YouTube video or podcast

### 4.4 HeyGen Video Trailer

Create `video-prompts/heygen-series-trailer-3min.md`:
- 3-minute series trailer specification
- Scene breakdown (4-5 scenes)
- Narrator voiceover script per scene
- Music and pacing notes
- References to images in public/images/
- Animation and transition descriptions

---

## STEP 5: POPULATE WEBSITE DATA

### 5.1 Update src/data/books.ts

Populate the books array with complete data for every book:

```typescript
export const books: Book[] = [
  {
    id: 1,
    roman: 'I',
    title: '[Book 1 Title]',
    subtitle: '[Book 1 Subtitle]',
    epigraph: { quote: '[Quote]', author: '[Attribution]' },
    description: '[Short description for card view]',
    elaborateDescription: '[Longer description for modal view]',
    coverImage: '/images/book1-cover.png',
    chapters: [
      { number: 1, title: '[Chapter Title]', summary: '[One-line summary]' },
      // ... all chapters
    ],
    color: '#[HEX]',
    kindleUrl: '',  // To be filled after publishing
    paperbackUrl: '', // To be filled after publishing
  },
  // ... all books
];
```

### 5.2 Update src/data/characters.ts (Fiction Only)

Populate with all major characters matching the character portrait prompts.

### 5.3 Update src/app/layout.tsx

Set the series-specific metadata:
- Page title
- Description
- Open Graph tags
- Fonts (Inter + EB Garamond as established)

---

## STEP 6: CREATE AMAZON PRODUCTION STRUCTURE

Fill in the `amazon-publishing-template.md` with series-specific details:
- All book titles and subtitles
- Pricing strategy
- Category rotation plan
- Keyword strategy
- Launch sequence timeline
- Review strategy

Create organized files in `amazon-production/`:
- `blurbs/` — copy of each book blurb
- `book-descriptions/` — HTML descriptions for KDP
- `book-titles/` — formatted title strings for KDP entry
- `categories-keywords/` — per-book category and keyword assignments

---

## ORDER OF OPERATIONS

Execute in this exact sequence to maintain coherence:

1. **Series Architecture** — Fill in book-series-template.md, create master-arc-outline.md, create chapter-outlines/
2. **Book 1 Complete** — All chapters, front matter, back matter, summaries, description
3. **Book 1 Review** — Verify quality, voice consistency, word counts before proceeding
4. **Books 2 through N** — Sequentially, maintaining cross-book continuity
5. **All Image Prompts** — Ebook covers, logo, paperback wraps, box sets, social media, character portraits, YouTube thumbnails
6. **Marketing Materials** — Blurbs, KDP metadata, series description, video scripts, trailer spec
7. **Website Data** — books.ts, characters.ts (if fiction), layout metadata
8. **Amazon Production** — Organize production files

---

## QUALITY STANDARDS

### For Chapters:
- NEVER fall below the minimum word count per chapter
- Maintain voice consistency across all books
- Track continuity meticulously (characters, events, timeline, locations)
- Every chapter must be engaging from the first sentence
- Avoid repetitive phrasing across chapters

### For Image Prompts:
- Every prompt must be 60-80+ lines of ultra-specific detail
- ALWAYS include the anti-painterly directive: "ABSOLUTELY NO oil painting, NO watercolor, NO painterly brushstrokes, NO soft-focus artistic filters, NO traditional media aesthetic"
- ALWAYS include exact pixel dimensions, DPI, color profile
- ALWAYS include precise text placement percentages
- ALWAYS include dual-lighting description for dimensional rendering
- Material descriptions must be tactile and specific (not "metal" but "polished volcanic obsidian with conchoidal fracture patterns")

### For Marketing Copy:
- Every blurb must hook from the first sentence
- No spoilers — hooks only
- Use power words and emotional language
- Match the series' tone

### For Website Data:
- Every chapter must have a title and one-line summary
- Descriptions must be compelling at both short and long lengths
- Colors must form a cohesive visual palette across the series

---

## CRITICAL REMINDERS

1. **Do NOT skip any files** — every book needs ALL front matter, ALL back matter, ALL chapters, ALL summaries, a description, image prompts, and a blurb
2. **Do NOT write short chapters** — every chapter must hit the word count minimum. If you feel a chapter is done early, expand it with more detail, more dialogue, more sensory description, more emotional depth
3. **Do NOT reuse text between books** — each dedication, each author's note, each epigraph must be unique
4. **Do NOT generate actual images** — only create text prompts. I will generate images separately using these prompts
5. **Do NOT use emojis in any content files**
6. **Track the "Also By" list** — update it in each book to include all books in the series
7. **Maintain the cross-book continuity sections** — "Where We Have Been" (non-fiction) or "Previously In..." (fiction) for Books 2+
8. **Author info is always:** Ketan Shukla, Publisher: Metronagon, Website: metronagon.com, Email: ketan@metronagon.com
9. **Write each chapter as a separate markdown file** — one file per chapter, never combine multiple chapters
10. **Commit and push after completing each book** — not each chapter, each complete book with all its assets
