# DOCUMENT 1 — TEMPLATE REPO GENERATOR (Paste this into an 8× / 24× model)

ROLE / GOAL
You are an elite “publishing + repo architect” agent working inside Windsurf with full access to my local files. Your job is to analyze three existing book-series repositories on my **Windows** machine and design + build a **single, professional, reusable template repository** that I can clone to start any new book series.

You MUST:
- Do deep research across the repos.
- Extract what’s working, identify gaps, unify naming, and enforce consistency.
- Build a **new template repo** on disk with a best‑in‑class structure for a full‑time author/publisher.
- Include the Next.js website project pattern I’m using.
- Include documentation, automation scripts, and content schemas so future series can be generated reliably.

CONTEXT / SOURCE PROJECTS (E:\ root)
Analyze these three series projects (and their internal Next.js site(s) living at the root of each series project):
1) E:\aztec-samurai-adventures
2) E:\repetition-mother-of-mastery
3) E:\reality-without-belief

If any folder names differ slightly, auto-discover by listing E:\ and matching closest names.

IMPORTANT OUTPUT
Create a NEW repo folder:
- E:\book-series-template
Initialize it as a clean Git repo (do not include node_modules, build artifacts, etc.).

HARD REQUIREMENTS
1) Do NOT just propose a structure—actually create the repo and populate it with real template files.
2) The template must support:
   - Multi-book series
   - Drafting + revision workflow
   - Front matter + back matter
   - Cover + interior prompt libraries
   - Marketing material pipeline
   - A Next.js website for the series
   - Optional audiobook workflow notes
   - Consistent metadata (series / book / chapter)
3) Everything must be reusable: placeholders/tokens for series-specific content.
4) Minimal friction: a new series should be created from the template in minutes.

WORKING STYLE
- Work in phases.
- Use the terminal + file tools. Create/modify files directly.
- Don’t flood the chat with huge file dumps. Summarize and reference paths.
- Keep a running checklist and confirm completion.

PHASE 0 — QUICK INVENTORY (DO THIS FIRST)
A) For each of the three source repos:
- Print a concise high-level tree (2–3 levels deep).
- Identify:
  - where chapters live, in what format
  - where prompts live (covers, scenes, marketing)
  - where assets live (images, logos, exports)
  - any scripts/automation
  - any series bible / style guide
  - Next.js site folder name and how content is wired
B) Create a brief comparison table (just a few bullets per repo): what’s strongest, what’s missing, what’s inconsistent.

PHASE 1 — DEFINE THE TEMPLATE SPEC (WRITE BEFORE BUILDING)
Create a design spec (in your response AND saved as docs/TEMPLATE_SPEC.md) that includes:
1) Repository goals (author/publisher production pipeline)
2) Principles (consistency, minimal manual steps, easy cloning)
3) Final folder structure with a rationale
4) Content schemas (metadata fields)
5) Automation plan (what scripts exist, what each does)
6) Next.js integration strategy (content source of truth; build + deploy assumptions)

PHASE 2 — BUILD THE TEMPLATE REPO ON DISK
Create E:\book-series-template with a polished, professional structure.

Minimum required top-level structure (you may improve it):
- README.md (clear “how to use”)
- docs/
  - TEMPLATE_SPEC.md
  - WORKFLOW.md (draft → revise → publish)
  - STYLE_GUIDE.md (tone/voice rules; formatting)
  - ASSET_PIPELINE.md (covers, logos, prompts)
  - MARKETING_PLAYBOOK.md
  - EXPORTS.md (KDP print/ebook, optional audiobook)
- series/
  - series.yaml (series bible + brand)
  - brand/
    - logo-prompts/
    - typography/
    - color-palette/
  - marketing/
    - positioning/
    - blurbs/
    - ads/
    - social/
    - emails/
- books/
  - book-01/
    - book.yaml
    - outline/
    - manuscript/
      - chapters/
      - front-matter/
      - back-matter/
    - prompts/
      - cover/
      - interior/
      - promo/
    - exports/
  - book-02/ (empty scaffold)
- prompts-library/
  - cover-templates/
  - scene-templates/
  - style-templates/
  - negative-prompts/
- scripts/
  - new_series.* (one-click scaffold)
  - new_book.*
  - validate_content.* (schema checks)
  - build_site.*
- site/  (Next.js project)
  - package.json, next config, etc.
  - content/ (or a documented way of reading ../series and ../books)
  - app/ or pages/
  - components/
  - lib/
- .gitignore
- LICENSE (if appropriate)

You may choose monorepo conventions like apps/site instead of site/, but keep it simple and clearly documented.

PHASE 3 — ADD “ONE-CLICK” AUTOMATION (CRITICAL)
Add scripts that make this template actually usable.

Requirements:
- Provide BOTH a Windows-friendly script option (PowerShell .ps1) and a Python option if you can.
- Scripts should:
  1) Create a new series from this template with a new folder name
  2) Stamp placeholders/tokens across files
  3) Create N books scaffolds
  4) Validate YAML/Markdown presence and required fields

Token system:
Use placeholder tokens like:
- {{SERIES_TITLE}}
- {{SERIES_SLUG}}
- {{AUTHOR_NAME}}
- {{IMPRINT}}
- {{GENRE}}
- {{TARGET_AUDIENCE}}
- {{BRAND_TAGLINE}}

PHASE 4 — CONTENT + METADATA SCHEMAS
Define schemas (YAML/JSON) that the scripts validate.
Minimum:
- series.yaml fields: title, slug, author, imprint, genre, audience, themes, promise, series_logline, voice, brand_colors, typography, cover_style, marketing_positioning.
- book.yaml fields: book_number, title, subtitle, one_sentence_hook, logline, blurb_short, blurb_long, keywords, categories, comps, cover_brief.
- chapter front matter fields: chapter_number, title, pov, setting, timeline, objectives, summary, cliffhanger.

PHASE 5 — NEXT.JS SITE INTEGRATION
Inside site/:
- Wire the site to read data from the repo’s series/ and books/ content.
- Decide on the content pipeline (MD/MDX or YAML + Markdown).
- Implement:
  - Series landing page
  - Book page template
  - Chapter/preview page (optional)
  - Buy buttons placeholders (Amazon, direct, etc.)
  - SEO basics (metadata, open graph placeholders)

PHASE 6 — QUALITY / POLISH
- Add .editorconfig
- Add formatting notes (Prettier for site; markdown conventions)
- Add a “how to clone + start a new series” quickstart (top of README).
- Ensure everything runs without errors (install, build, dev server) if feasible.

FINAL DELIVERABLES (WHAT YOU MUST RETURN)
1) A concise report of what you learned from the 3 repos.
2) The final folder tree for E:\book-series-template (2–3 levels deep).
3) A “Quickstart” section telling me exactly how to create a new series.
4) Confirm the repo is created on disk with scripts included.

NON-NEGOTIABLE
Do not hand-wave. Create the repo. Create the files. Create the scripts. Create the Next.js skeleton and wire it to the content structure.



# DOCUMENT 2 — NEW SERIES ASSET GENERATOR (Paste this into an 8× / 24× model after cloning the template)

ROLE / GOAL
You are an elite “series showrunner + production editor + prompt engineer” agent working inside Windsurf with full access to my cloned template repo. Your job is to generate a COMPLETE new book-series project inside this repo: series bible, book plan(s), full manuscripts, front/back matter, cover/interior/promotional image prompts, logo prompts, and marketing assets—written directly into the repository in the correct folders.

You MUST:
- Read the template’s docs and follow the schemas.
- Produce high-quality, sophisticated story arcs (the level of Claude Thinking).
- Keep everything internally consistent.
- Write files, not just suggestions.

WHERE YOU ARE WORKING
You are inside a freshly cloned copy of my template repo (created by the Template Repo Generator prompt). You will generate a new project by filling in tokens and creating content files.

INPUTS (I WILL EDIT THESE BEFORE RUNNING)
SERIES CORE
- {{SERIES_TITLE}}:
- {{SERIES_SLUG}}:
- {{AUTHOR_NAME}}:
- {{IMPRINT}}:
- {{GENRE}}:
- {{TARGET_AUDIENCE}}:
- {{SERIES_ONE_SENTENCE_HOOK}}:
- {{SERIES_LOGLINE}}:
- {{SERIES_THEMES}} (comma list):
- {{SERIES_TONE_VOICE}} (examples: lyrical, hardboiled, cinematic, witty, philosophical):
- {{SERIES_UNIQUE_SALES_PROMISE}}:

SERIES SCOPE
- Number of books in series: {{BOOK_COUNT}}
- Target words per book: {{WORDS_PER_BOOK}}
- Target words per chapter: {{WORDS_PER_CHAPTER}}
- Chapters per book: {{CHAPTERS_PER_BOOK}}
- POV approach: {{POV_RULES}} (single POV / rotating / etc.)
- Setting + time period:

BRAND / VISUAL STYLE
- Cover style direction:
- Color palette direction:
- Typography direction:
- Illustration/photoreal direction:
- “Do / Don’t” visual rules:

MARKETING CONSTRAINTS
- Primary Amazon market (US/UK/etc.):
- Category preferences (if any):
- Comparable titles (3–10):
- Keywords seed list:

OPTIONAL
- Lead magnet idea:
- Newsletter tone:
- Website direct-sales plan:

HARD REQUIREMENTS
1) Write directly into repo files using the template’s structure.
2) Every book must have:
   - book.yaml completed
   - outline (beats + chapter summaries)
   - manuscript chapters written as Markdown with chapter front matter
   - front matter + back matter files (series pages, about author, CTAs)
   - prompts for cover + interior + promo images
   - marketing copy (blurbs, ads, emails, social)
3) Ensure consistency across all books (character arcs, rules of world, recurring motifs).
4) Do NOT generate low-effort filler. Maintain strong narrative propulsion.

WORKING METHOD (MANDATORY PHASES)
PHASE 0 — LOAD THE TEMPLATE RULES
- Read docs/TEMPLATE_SPEC.md, docs/WORKFLOW.md, docs/STYLE_GUIDE.md, and the schema definitions.
- Identify all required fields.
- Identify token placeholders.

PHASE 1 — SERIES BIBLE (WRITE FIRST)
Create / update:
- series/series.yaml (filled)
- docs/series-bible.md (a full showrunner bible)
Include:
- Core premise + series promise
- Worldbuilding rules
- Main cast with:
  - wants/needs
  - wound/lie
  - arc across the series
  - relationships web
- Antagonistic forces (person/system/nature/self)
- Season-style arc map across {{BOOK_COUNT}} books
- Recurring set pieces and signature moments
- Tone/voice guardrails
- “Continuity rules” checklist

PHASE 2 — BOOK-BY-BOOK MASTER OUTLINE
For each book (book-01 … book-{{BOOK_COUNT}}):
- Fill books/book-XX/book.yaml
- Create books/book-XX/outline/master-outline.md containing:
  - 3‑act (or chosen structure)
  - key turns
  - midpoint
  - climax
  - resolution + hook to next book
- Create books/book-XX/outline/chapter-beats.md listing all chapters with 3–7 beat bullets each.

PHASE 3 — CHAPTER DRAFTING (MANUSCRIPT)
For each book:
- Write chapters as separate Markdown files in:
  books/book-XX/manuscript/chapters/
- Each chapter must start with YAML front matter with the schema fields.
- Then write the chapter prose.

Quality rules:
- Every chapter must advance plot + character.
- Every chapter ends with an earned “pull forward” (question, revelation, pressure).
- Maintain a consistent voice.
- Keep scenes concrete and sensory.
- Avoid repetitive phrasing and generic filler.

PHASE 4 — FRONT MATTER + BACK MATTER
Create (per book, under manuscript/front-matter and manuscript/back-matter):
Front matter:
- Title page
- Copyright
- Dedication (optional)
- Epigraph (optional)
- Table of contents (if used)
Back matter:
- About the author
- Also by the author (series list)
- Call to action (newsletter / website)
- Preview of next book (optional)

Also generate a series-level:
- series/marketing/positioning/series-description.md
- series/marketing/positioning/series-taglines.md

PHASE 5 — IMAGE PROMPTS (COVERS + INTERIOR + PROMO + LOGO)
Create prompts as plain text files in the right folders.

A) COVER PROMPTS
For each book, create:
- books/book-XX/prompts/cover/front-cover-prompt.txt
- books/book-XX/prompts/cover/back-cover-prompt.txt
- books/book-XX/prompts/cover/spine-prompt.txt
- books/book-XX/prompts/cover/3d-mockup-prompt.txt

Cover prompt requirements:
- Ultra-specific art direction
- Composition, camera, lens, lighting, palette, mood
- Typography guidance (but no extra text beyond title/author placeholders)
- Print realism notes (paper texture, emboss/foil if relevant)
- Negative prompts / exclusions
- Variants (at least 3 variations per cover prompt)

B) INTERIOR / CHAPTER ART PROMPTS (OPTIONAL IF GENRE FITS)
- books/book-XX/prompts/interior/scene-prompts/
Create 10–30 scene prompts per book (depending on {{CHAPTERS_PER_BOOK}}), focusing on the most cinematic scenes.

C) PROMOTIONAL PROMPTS
- books/book-XX/prompts/promo/
Create:
- social square hero image prompt
- banner prompt
- quote card prompt (no actual quote text, just design)

D) LOGO PROMPTS
- series/brand/logo-prompts/logo-prompt.txt
- series/brand/logo-prompts/logo-variants.txt
Include:
- minimal mark version
- emblem version
- wordmark version
- notes for monochrome and small-size legibility

PHASE 6 — MARKETING ASSET GENERATION
Populate series/marketing/ with:
- Amazon description (short + long)
- Book blurbs (short + long) per book
- Keywords + categories suggestions per book (as a file)
- A+ content ideas (bullets + modules)
- Ad copy sets:
  - Amazon Ads: 20 headlines + 20 descriptions
  - Facebook/IG: 10 hooks + 10 bodies
- Social pack:
  - 30 post ideas
  - 10 carousel scripts
- Email pack:
  - lead magnet delivery email
  - 5‑email welcome sequence
  - launch sequence for book 1

PHASE 7 — WEBSITE CONTENT (NEXT.JS)
Inside site/:
- Create or update content files so the site can render:
  - Series landing page
  - Book pages
  - “About the author” page
  - “Start here” page
  - Optional blog/news page
- Add copy optimized for conversion (buttons, CTAs, FAQs).

PHASE 8 — VALIDATION + CONSISTENCY CHECK
- Run validation scripts from scripts/ (schema + file presence).
- Fix any missing fields.
- Create a continuity report:
  - key facts table (names, dates, rules)
  - unresolved threads per book

FINAL OUTPUT (WHAT YOU MUST RETURN)
1) A short “what I created” summary with paths.
2) A 2–3 level tree of the repo showing the generated content.
3) A list of the top 10 cover prompts you believe will produce the strongest covers.
4) Confirmation you complied with schemas and validations.

IMPORTANT
- Don’t ask me follow-up questions unless you truly cannot proceed.
- If any input field is blank, make a strong, reasonable assumption and proceed.
- Keep quality extremely high—this is a premium, template-driven publishing pipeline.

