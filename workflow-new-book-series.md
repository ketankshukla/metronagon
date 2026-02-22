# End-to-End Workflow: Creating a New Book Series from Template

## Overview

This document describes the complete, reusable workflow for generating a new book series project from the `book-series-template` repository. The process is almost entirely automated — the only manual step is generating cover images from the provided prompts using ChatGPT.

---

## Prerequisites

- **Node.js** 22+ installed
- **Git** and **GitHub CLI** (`gh`) installed and authenticated
- **Cascade** (Windsurf AI) available
- **ChatGPT Plus** subscription (for image generation)
- The `book-series-template` repo exists at `https://github.com/ketankshukla/book-series-template`

---

## Step 1: Prepare the Client Request Document

Before starting, you need a completed client request document (like `example-deliverables-western-series.md`). This document must contain ALL of the following sections:

1. **Client Information** — author name, publisher, project/repo name, website URL
2. **Series Overview** — series name, genre, fiction/non-fiction, number of books, tone, audience, content rating, concept, tagline
3. **Series Structure** — acts, themes, arc progression
4. **Characters** — full roster with descriptions, romance arcs, death strategy (fiction only)
5. **Book Details** — for each book: title, subtitle, color hex, epigraph, short description, elaborate description, chapter list with summaries
6. **Front Matter Content** — copyright template, dedications, epigraphs, dramatis personae per book
7. **Back Matter Content** — about the author, also by, author's notes per book, connect info, review request
8. **Amazon Publishing** — pricing, KDP select status, book descriptions (HTML), KDP categories, 7 keywords per book, series description
9. **Website Customization** — color scheme (CSS variables), metadata (title, description, keywords), author section data, image paths, Amazon URLs
10. **Image Prompts** — 3 variations per book, each a complete standalone prompt ready to paste into ChatGPT

> **For a real client:** The client provides sections 1-8 (their content). You generate sections 9-10 (technical/image prompts) based on their input.
>
> **For automated examples:** All 10 sections are pre-filled in the document.

---

## Step 2: Clone the Template Repository

Open a terminal and run:

```powershell
# Clone the template into a new project folder
# Replace "quick-draw-series" with your project name
gh repo clone ketankshukla/book-series-template E:\quick-draw-series
```

Then remove the existing git history and reinitialize:

```powershell
# Remove template git history
Remove-Item -Recurse -Force E:\quick-draw-series\.git

# Initialize fresh repo
Set-Location E:\quick-draw-series
git init
```

---

## Step 3: Feed the Client Request to Cascade

Open the new project folder in Windsurf. Then tell Cascade:

```
Read the file E:\metronagon\example-deliverables-western-series.md and use it to generate
all text-based assets for this book series project. Replace all template placeholders with
the actual data from the client request. Generate everything except the actual images.
Specifically:

1. Update src/data/books.ts with all 5 books (titles, subtitles, epigraphs, descriptions,
   chapters, colors, cover image paths, Amazon URLs)
2. Update src/data/characters.ts with the full character roster
3. Update src/app/globals.css with the series color scheme
4. Update src/app/layout.tsx with the series metadata (title, description, keywords)
5. Update all components (Header, Hero, Footer, AuthorSection, BooksSection) — replace
   all {{PLACEHOLDER}} values with actual series data
6. Create front matter markdown files for all 5 books in book-series/
7. Create back matter markdown files for all 5 books in book-series/
8. Create the image prompt text files in book-prompts/ebook-covers/
9. Create series-description.md, kdp-categories-and-keywords.md with actual data
10. Create amazon-publishing-template.md with actual book descriptions
11. Update README.md and book-series-plan.md with actual series information
12. Run npm install and npm run build to verify everything compiles
13. Initialize git, create initial commit, and push to GitHub as ketankshukla/[repo-name]
```

Cascade will read the client request document and systematically generate every text-based file in the project, replacing all template placeholders with the actual series data.

---

## Step 4: Generate Cover Images (MANUAL)

This is the **only manual step**. For each book:

1. Open the image prompts from `book-prompts/ebook-covers/` (or Section 10 of the client request)
2. For each book, there are 3 prompt variations (A, B, C)
3. Copy-paste **Variation A** into ChatGPT and generate the image
4. Copy-paste **Variation B** into ChatGPT and generate the image
5. Copy-paste **Variation C** into ChatGPT and generate the image
6. Select the best result from the 3 variations
7. Save as `book[N]-cover.png` (e.g., `book1-cover.png`)

Also generate:
- **Series logo:** Ask ChatGPT to create a text-based logo for the series name in the spaghetti western slab-serif style. Save as `series-logo-quick-draw.png`
- **Complete series landscape:** Ask ChatGPT to create a wide landscape image showing all 5 book covers side by side. Save as `complete-series-cover-landscape.png`
- **Author photo:** Generate or source an author headshot. Save as `harlan-westbrook.jpeg` (or the actual author's photo)

Place all images in:
```
public/images/
├── series-logo-quick-draw.png
├── complete-series-cover-landscape.png
├── book1-cover.png
├── book2-cover.png
├── book3-cover.png
├── book4-cover.png
├── book5-cover.png
└── harlan-westbrook.jpeg
```

---

## Step 5: Final Build and Deploy

After placing the images, tell Cascade:

```
The cover images have been added to public/images/. Please run npm run build to verify
everything works, then commit and push to GitHub.
```

Cascade will:
1. Run `npm run build` to verify the site compiles with the real images
2. Commit the images
3. Push to GitHub

Since deployment is handled via GitHub (Vercel auto-deploys from the repo), the site will be live at the configured domain after the push.

---

## Step 6: Verify the Live Site

1. Visit the Vercel dashboard to confirm the deployment succeeded
2. Visit the live URL to verify:
   - Series logo and hero image display correctly
   - All 5 book covers are visible
   - Book modals open with correct chapter listings
   - Author section shows the correct bio and photo
   - Footer links work
   - Mobile responsiveness is correct

---

## Summary: What Is Automated vs. Manual

| Task | Automated by Cascade? |
|------|----------------------|
| Clone template repo | YES (via command) |
| Update all source code files | YES |
| Generate front/back matter markdown | YES |
| Generate Amazon publishing metadata | YES |
| Generate KDP categories & keywords | YES |
| Generate image prompt files | YES |
| Generate cover images | **NO — manual ChatGPT** |
| Generate series logo | **NO — manual ChatGPT** |
| Generate hero/landscape image | **NO — manual ChatGPT** |
| Build verification | YES |
| Git commit and push | YES |
| Vercel deployment | YES (automatic via GitHub) |

---

## Reuse for Any Genre

To create a new series in any genre:

1. **Copy** `example-deliverables-western-series.md` as a starting template
2. **Replace** all content with the new series data (different genre, characters, story, etc.)
3. **Adjust** the image prompts to match the new genre's visual style
4. **Follow** Steps 2-6 above with the new document

The template repository structure, website components, and workflow remain identical — only the content changes.

---

## File Reference: What Goes Where

| Client Request Section | Target Files in Project |
|----------------------|------------------------|
| Series Overview | `README.md`, `book-series-plan.md`, `book-series/series-description.md` |
| Characters | `src/data/characters.ts`, front matter dramatis personae |
| Book Details | `src/data/books.ts`, individual book directories |
| Front Matter | `book-series/[BookFolder]/front_matter/*.md` |
| Back Matter | `book-series/[BookFolder]/back_matter/*.md` |
| Amazon Publishing | `amazon-publishing-template.md`, `book-series/kdp-categories-and-keywords.md` |
| Website Colors | `src/app/globals.css` |
| Website Metadata | `src/app/layout.tsx` |
| Series Name / Author | `Header.tsx`, `Hero.tsx`, `Footer.tsx`, `AuthorSection.tsx` |
| Book Data | `src/data/books.ts`, `BooksSection.tsx`, `BookModal.tsx` |
| Image Prompts | `book-prompts/ebook-covers/*.txt` |
| Generated Images | `public/images/` |
