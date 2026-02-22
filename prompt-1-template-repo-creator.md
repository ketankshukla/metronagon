# PROMPT 1: BOOK SERIES TEMPLATE REPOSITORY CREATOR

## YOUR MISSION

You are an expert publishing automation architect. Your task is to scan three existing book series projects on this machine, analyze every directory, file, naming convention, content format, and structural pattern across all three, and then create a **brand-new, reusable template repository** that I can clone for any future book series project.

This template must be the **definitive starting point** for every book series I create going forward — fiction or non-fiction. It must capture every single asset type, file format, naming convention, and organizational pattern from my best work, while remaining genre-flexible.

---

## STEP 1: DEEP SCAN OF EXISTING PROJECTS

Scan these three projects thoroughly. Read directory structures, open files, understand formats, and take detailed notes on every convention you find:

### Project 1: `E:\aztec-samurai-adventures`
- **Genre:** Fiction (12-book epic fantasy series, 24 chapters per book)
- **Key patterns to study:** book-prompts/ subdirectory structure (branding/, ebook-covers/, paperback-wraps/, social-media/, character-portraits/, box-sets/), master-arc-outline.md, book-series-template.md, amazon-publishing-template.md, chapter-outlines/, dramatis_personae in front matter, the 4Cs framework, character data structure in src/data/characters.ts

### Project 2: `E:\repetition-mother-of-mastery`
- **Genre:** Non-fiction (5-book educational series, 10 chapters per book)
- **Key patterns to study:** golden-prompts-v2/ prompt directory, book-series-plan.md, video-scripts/book1-marketing/ production guide, word-docs/ with PowerShell DOCX generation scripts, white-prompts/ inside book directories, chapter numbering (continuous 1-50 across series), preface and introduction in front matter

### Project 3: `E:\reality-without-belief`
- **Genre:** Non-fiction (5-book philosophical series, 10 chapters per book)
- **Key patterns to study:** reality-prompts/ directory, website-redesign.md, white-prompts/ inside book directories, archived-book-content/ (original single-book before splitting), multiple description variants in archived content (provocateur, question opener, pain point, bold claim, etc.)

### What to Extract from Each Project:
1. **Complete directory tree** — every folder, every subfolder, what they contain
2. **File naming conventions** — exact patterns for chapters, summaries, prompts, images, blurbs
3. **Content formats** — open and read examples of every file type (chapters, front matter, back matter, image prompts, blurbs, video scripts, KDP metadata, book descriptions)
4. **Website architecture** — components, data structures (Book interface, Chapter interface, Character interface), context providers, styling conventions, tech stack
5. **Configuration files** — package.json dependencies, tsconfig settings, next.config, vercel.json, postcss, eslint
6. **Templates already created** — book-series-template.md and amazon-publishing-template.md in aztec project are gold — study them carefully
7. **Image prompt format** — the exact structure, level of detail, technical specifications, and anti-painterly directives used in cover prompts, logo prompts, character portrait prompts, box set prompts, social media prompts, and paperback wrap prompts
8. **Marketing assets** — blurb format, video script format, HeyGen trailer format, production guide format
9. **Amazon production pipeline** — epub/, pdf books/, pdf covers/ organization
10. **Archive strategy** — how archived-prompts/, archived-images/ are used for iteration history

---

## STEP 2: SYNTHESIZE PATTERNS INTO A UNIVERSAL TEMPLATE

After scanning all three projects, identify:

### What is UNIVERSAL (present in all 3):
- `book-series/` with per-book subdirectories containing chapters/, chapter-summaries/, front_matter/, back_matter/, book-summary/, book_descriptions/, image-prompts/
- `book-blurbs/` with per-book blurb files
- Image prompts directory with per-book cover prompts
- `amazon-production/` with epub/, pdf books/, pdf covers/
- `video-prompts/` and `video-scripts/`
- `archived-prompts/` and `archived-images/`
- Next.js website with: Header, Hero, BooksSection, BookCard, BookModal, AuthorSection, Footer, YouTubePlayer, ImageProtection components
- BookContext for state management
- books.ts data file with Book and Chapter interfaces
- book-series-plan.md at root level
- series-description.md and kdp-categories-and-keywords.md in book-series/
- Same tech stack: Next.js 16, React 19, Tailwind CSS 4, TypeScript, Lucide React
- Same config files: package.json, tsconfig.json, next.config.ts, postcss.config.mjs, eslint.config.mjs, vercel.json

### What is GENRE-SPECIFIC:
- **Fiction only:** dramatis_personae.md in front matter, character-portraits/ prompts, characters.ts data file, master-arc-outline.md, chapter-outlines/, box-set prompts (act-based), social-media prompts per book, paperback-wraps/ prompts
- **Non-fiction only:** preface.md, introduction.md, prologue.md in front matter, epilogue.md in back matter, white-prompts/ inside book directories, continuous chapter numbering across books (1-50 vs 1-24 per book), word-docs/ with PowerShell DOCX scripts

### What VARIES but should be parameterized:
- Number of books in series (5, 12, or any number)
- Number of chapters per book (10, 24, or any number)
- Color scheme and branding (hex codes, font choices)
- Series name, author name, publisher name
- Prompt directory name (book-prompts, golden-prompts-v2, reality-prompts — standardize to `book-prompts/`)
- Amazon URLs per book

---

## STEP 3: CREATE THE TEMPLATE REPOSITORY

Create a new repository at `E:\book-series-template` with the following structure and contents:

### 3.1 Root Directory Structure

```
book-series-template/
├── README.md                           # How to use this template (detailed instructions)
├── SETUP.md                            # Step-by-step setup checklist for a new project
├── book-series-plan.md                 # Template: series planning document (fill-in-the-blanks)
├── book-series-template.md             # Template: series vision, structure, characters (from aztec project, made generic)
├── amazon-publishing-template.md       # Template: KDP metadata, pricing, launch strategy (from aztec project, made generic)
├── .gitignore                          # Standard gitignore (node_modules, .next, etc.)
├── package.json                        # Pre-configured with all dependencies
├── tsconfig.json                       # TypeScript config
├── next.config.ts                      # Next.js config with React Compiler
├── postcss.config.mjs                  # Tailwind CSS
├── eslint.config.mjs                   # ESLint
├── vercel.json                         # Vercel deployment
├── next-env.d.ts                       # Next.js TypeScript declarations
│
├── book-series/                        # ALL BOOK CONTENT LIVES HERE
│   ├── series-description.md           # Template: HTML-formatted KDP series description
│   ├── kdp-categories-and-keywords.md  # Template: categories and keywords per book
│   ├── ai-image-tools.md               # Guide to AI image generation tools
│   ├── word-docs/                      # Generated DOCX files
│   │   ├── chapters-only/
│   │   ├── complete/
│   │   ├── make_book_docx.ps1          # PowerShell script for DOCX generation
│   │   └── make_complete_docx.ps1
│   └── [BOOK DIRECTORIES CREATED BY PROMPT 2]
│
├── book-blurbs/                        # Short marketing blurbs per book
│   └── .gitkeep
│
├── book-prompts/                       # ALL AI IMAGE GENERATION PROMPTS
│   ├── ebook-covers/                   # Per-book ebook cover prompts (.txt)
│   ├── paperback-wraps/                # Per-book paperback cover prompts (.txt)
│   ├── branding/                       # Series logo and branding prompts (.txt)
│   ├── box-sets/                       # Box set / collection cover prompts (.txt)
│   ├── social-media/                   # Per-book social media image prompts (.txt)
│   ├── character-portraits/            # [FICTION ONLY] Character portrait prompts (.txt)
│   └── youtube-thumbnails/             # YouTube thumbnail prompts (.txt)
│
├── book-images/                        # GENERATED IMAGES (from AI tools)
│   ├── ebook-covers/
│   ├── paperback-covers/
│   ├── book-logos/
│   ├── box-sets/
│   ├── character-portraits/
│   └── social-media/
│
├── amazon-production/                  # PRODUCTION-READY PUBLISHING FILES
│   ├── epub/
│   ├── pdf-books/
│   ├── pdf-covers/
│   ├── blurbs/
│   ├── book-descriptions/
│   ├── book-titles/
│   ├── categories-keywords/
│   └── images/
│
├── video-prompts/                      # Video generation specifications
│   └── heygen-series-trailer-template.md
│
├── video-scripts/                      # Marketing video scripts
│   └── series-overview-template.txt
│
├── archived-prompts/                   # Previous prompt iterations
│   └── .gitkeep
│
├── archived-images/                    # Previous image iterations
│   └── .gitkeep
│
├── src/                                # NEXT.JS WEBSITE
│   ├── app/
│   │   ├── layout.tsx                  # Root layout (parameterized: series name, fonts, metadata)
│   │   ├── page.tsx                    # Main single-page app
│   │   ├── globals.css                 # Global styles with CSS variables for theming
│   │   └── favicon.ico
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── BooksSection.tsx
│   │   ├── BookCard.tsx
│   │   ├── BookModal.tsx
│   │   ├── AuthorSection.tsx
│   │   ├── Footer.tsx
│   │   ├── YouTubePlayer.tsx
│   │   └── ImageProtection.tsx
│   ├── context/
│   │   └── BookContext.tsx
│   └── data/
│       ├── books.ts                    # Book and Chapter interfaces + data array
│       └── characters.ts              # [FICTION ONLY] Character interface + data array
│
└── public/
    ├── favicon.svg
    └── images/
        ├── .gitkeep                    # Book covers, logos, thumbnails go here
        └── ketan-shukla.jpeg           # Author photo (copy from existing project)
```

### 3.2 Template File Contents

For each template file, create it with **fill-in-the-blank placeholders** using this format: `{{PLACEHOLDER_NAME}}`. Include clear comments explaining what goes in each placeholder.

#### README.md
Create a comprehensive README that explains:
- What this template is for
- How to clone it for a new project
- The complete directory structure with explanations
- Step-by-step workflow: Planning -> Content Creation -> Image Generation -> Website -> Publishing
- Links to the planning templates
- File naming conventions
- Tech stack and dependencies

#### SETUP.md
Create a step-by-step checklist:
1. Clone this repo and rename to your series name (kebab-case)
2. Run `npm install`
3. Fill in book-series-template.md with your series vision
4. Fill in book-series-plan.md with your series structure
5. Use Prompt 2 (the companion prompt) to generate all content
6. Generate images using the prompts in book-prompts/
7. Place generated images in book-images/ and public/images/
8. Update src/data/books.ts with your book data
9. Run `npm run dev` to preview the website
10. Deploy to Vercel
11. Prepare Amazon production files
12. Publish on KDP

#### book-series-template.md
Take the existing template from `E:\aztec-samurai-adventures\book-series-template.md` and make it fully generic — replace all Aztec-specific content with `{{PLACEHOLDER}}` values while preserving the complete structure (Series Vision, 4Cs, Series Structure, Characters, Romance, Death Strategy, Narration Style, Chapter Cliffhangers, Book Structure, Amazon Template, Box Set Strategy, Cover Requirements, Order of Operations, Lessons Learned).

#### amazon-publishing-template.md
Take the existing template from `E:\aztec-samurai-adventures\amazon-publishing-template.md` and make it fully generic — replace all Aztec-specific content with `{{PLACEHOLDER}}` values while preserving the complete structure (KDP Book Details, Keywords, Categories, Pricing, Front/Back Matter Checklists, A+ Content Strategy, Launch Sequence, Review Strategy, Formatting Standards).

#### book-series-plan.md
Create a generic planning document template based on the patterns from repetition-mother-of-mastery/book-series-plan.md and reality-without-belief/book-series-plan.md. Include sections for:
- Series overview and concept
- Book breakdown (titles, themes, chapter counts)
- Content strategy and cross-book continuity
- Tone and voice guidelines
- Distribution and release strategy

#### Website Components
For each component in src/components/, create a **fully functional but parameterized** version based on the patterns found across all 3 projects. Key requirements:
- Use CSS variables for colors so theming is easy
- Keep the Book interface generic: `{ id, roman, title, subtitle, epigraph, description, elaborateDescription, coverImage, chapters, color, kindleUrl, paperbackUrl }`
- Keep the Chapter interface: `{ number, title, summary }`
- Characters interface (for fiction): `{ id, name, title, role, alignment, description, quote, image, accentColor, firstAppearance, booksAppearedIn, abilities, physicalDescription, backstory, characterArc, keyRelationships }`
- BookContext should support: openBook, closeBook, goToNextBook, goToPrevBook
- Use `{{SERIES_NAME}}`, `{{AUTHOR_NAME}}`, `{{PRIMARY_COLOR}}`, `{{SECONDARY_COLOR}}` as placeholders in the code with TODO comments

#### Configuration Files
- **package.json:** Pre-configured with dependencies (next@16, react@19, tailwindcss@4, lucide-react, typescript, babel-plugin-react-compiler, eslint)
- **next.config.ts:** React Compiler enabled
- **tsconfig.json:** Strict mode, path aliases (@/* -> ./src/*)
- **.gitignore:** node_modules, .next, *.env, generated DOCX files

#### Image Prompt Templates
Create template files in book-prompts/ for each prompt type. Each template should include the exact format, technical specifications, and structural sections used across all 3 projects, with `{{PLACEHOLDER}}` values for series-specific content:

- **ebook-covers/cover-template.txt:** Based on the format from aztec ebook covers — include DIMENSIONS, SUBJECT, FACE, HAIR, CLOTHING, WEAPON/OBJECT, BACKGROUND, ATMOSPHERIC EFFECTS, COMPOSITION RULE, TEXT PLACEMENT sections with exact percentage specifications and the anti-painterly directive
- **branding/logo-template.txt:** Based on the aztec branding prompt format — EMBLEM description, MATERIALS, LIGHTING, TEXT sections
- **box-sets/box-set-template.txt:** Template for box set/collection covers
- **character-portraits/portrait-template.txt:** Template for character portrait prompts
- **social-media/social-template.txt:** Template for social media image prompts
- **paperback-wraps/wrap-template.txt:** Template for paperback cover wraps
- **youtube-thumbnails/thumbnail-template.txt:** Template for YouTube thumbnails

#### Video Script Templates
- **video-prompts/heygen-series-trailer-template.md:** Based on the HeyGen trailer format from repetition and reality projects — scene breakdown, narrator voiceover, music notes, animation descriptions
- **video-scripts/series-overview-template.txt:** Marketing video script template
- **video-scripts/book-marketing-template/:** Template for per-book marketing production (production guide, scene image prompts, HeyGen video script)

#### Front Matter Templates
Create template files showing the exact format for each:
- `copyright-template.md` — with `{{SERIES_NAME}}`, `{{BOOK_NUMBER}}`, `{{BOOK_TITLE}}`, `{{YEAR}}`, `{{AUTHOR_NAME}}`, `{{PUBLISHER_NAME}}`, fiction/non-fiction copyright notice variants
- `dedication-template.md`
- `epigraph-template.md`
- `dramatis-personae-template.md` (fiction only)
- `preface-template.md` (non-fiction only)
- `introduction-template.md` (non-fiction only)
- `prologue-template.md` (non-fiction only)

#### Back Matter Templates
- `about-the-author-template.md` — with `{{AUTHOR_NAME}}`, `{{AUTHOR_BIO}}`, `{{PUBLISHER_NAME}}`
- `also-by-template.md` — with `{{SERIES_LIST}}`
- `authors-note-template.md`
- `connect-template.md` — with `{{WEBSITE}}`, `{{EMAIL}}`, `{{AMAZON_AUTHOR_PAGE}}`
- `review-request-template.md` — with `{{BOOK_TITLE}}`, `{{AUTHOR_NAME}}`
- `epilogue-template.md` (non-fiction only)

#### Word Doc Generation Scripts
- Copy and make generic the `make_book_docx.ps1` and `make_complete_docx.ps1` PowerShell scripts from the repetition project

---

## STEP 4: INITIALIZE GIT AND VERIFY

1. Initialize a git repository in `E:\book-series-template`
2. Create an initial commit with all template files
3. Verify the complete directory structure matches the specification above
4. Verify all template files contain proper placeholder syntax
5. Verify the Next.js project builds successfully (`npm run build`)
6. List the complete file tree as confirmation

---

## CRITICAL REQUIREMENTS

1. **DO NOT use emojis in any file content** — keep all template files clean and professional
2. **Preserve the exact level of detail** in image prompt templates — study the aztec ebook cover prompts carefully, they are 80+ lines of ultra-specific photorealistic description. The templates must maintain this level of specificity with placeholders for series-specific content.
3. **The website must be fully functional** out of the box with placeholder/sample data — running `npm run dev` should show a working site
4. **All 3 projects must be scanned thoroughly** before creating anything — cross-reference patterns to ensure nothing is missed
5. **File naming conventions must be consistent** — use the kebab-case pattern from the existing projects for directories, snake_case for chapter files
6. **The template must handle both fiction and non-fiction** — use clear comments or conditional sections to indicate genre-specific files
7. **Author info is always:** Ketan Shukla, Publisher: Metronagon, Website: metronagon.com, Email: ketan@metronagon.com
8. **Include the complete PowerShell DOCX generation scripts** — parameterized for any number of books/chapters
9. **The book-series-template.md must be the most comprehensive file** — it is the master planning document that drives everything else
10. **Study the existing projects' website components side by side** — the template website should represent the BEST patterns from all three, not just copy one
