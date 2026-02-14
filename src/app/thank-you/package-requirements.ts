export interface RequirementSection {
  heading: string;
  items: string[];
}

export interface PackageInfo {
  delivery: string;
  deliverables: string[];
  requirements: RequirementSection[];
}

const packageData: Record<string, PackageInfo> = {
  // ─── Ebook Cover Design ───────────────────────────────────────
  Standard: {
    delivery: "2 business days",
    deliverables: [
      "3 concept variations",
      "1 polished final cover (1600×2400, 300 DPI)",
      "Print-quality files via Google Drive or ZIP",
    ],
    requirements: [
      {
        heading: "Book Details",
        items: [
          "Book title (and subtitle, if any)",
          "Author name (exactly as it should appear on the cover)",
          "Genre (e.g., thriller, romance, sci-fi, fantasy, literary fiction)",
          "Brief book description (2–3 sentences about the story or subject matter)",
        ],
      },
      {
        heading: "Visual Direction",
        items: [
          "Mood/tone — What feeling should the cover evoke? (e.g., dark and intense, warm and hopeful, mysterious, epic, whimsical)",
          "Key visual elements — Specific objects, scenes, or symbols that should appear",
          "Color preferences — Colors you love or want to avoid",
          "Style preference — Photorealistic or stylized?",
        ],
      },
      {
        heading: "Reference Covers",
        items: [
          "2–3 existing book covers you admire — covers whose style, composition, or mood you'd want yours to echo",
        ],
      },
      {
        heading: "Typography",
        items: [
          "Font style preference — Serif (classic), sans-serif (modern), script (elegant), or display (bold/decorative)? Or say \"your call\"",
        ],
      },
      {
        heading: "Publishing Platform",
        items: [
          "Where will this be published? (Amazon KDP, IngramSpark, other?)",
        ],
      },
    ],
  },

  Premium: {
    delivery: "3 business days",
    deliverables: [
      "3 fully realized concept variations",
      "Advanced post-processing & typography polish",
      "2 rounds of revisions",
      "Final high-res files via Google Drive or ZIP",
    ],
    requirements: [
      {
        heading: "Book Details",
        items: [
          "Book title (and subtitle, if any)",
          "Author name (exactly as it should appear on the cover)",
          "Genre (e.g., thriller, romance, sci-fi, fantasy, literary fiction)",
          "Brief book description (2–3 sentences)",
          "Target audience — Who is your ideal reader?",
        ],
      },
      {
        heading: "Visual Direction",
        items: [
          "Mood/tone — What feeling should the cover evoke?",
          "Key visual elements — Specific objects, scenes, or symbols",
          "Color preferences — Colors you love or want to avoid",
          "Specific scene or moment from the book you'd love captured",
        ],
      },
      {
        heading: "Reference Covers",
        items: [
          "3–5 existing book covers you admire",
          "Covers you DON'T like — styles or looks to avoid",
        ],
      },
      {
        heading: "Typography",
        items: [
          "Font style preference — Or \"your call\"",
          "Any specific text beyond title and author? (e.g., tagline, series name, bestseller badge)",
        ],
      },
      {
        heading: "Publishing Platform",
        items: [
          "Where will this be published? (Amazon KDP, IngramSpark, other?)",
        ],
      },
    ],
  },

  // ─── Series Branding ──────────────────────────────────────────
  "Starter (3 Books)": {
    delivery: "3 business days",
    deliverables: [
      "3 consistent ebook covers",
      "Series logo",
      "Box set cover",
      "Style guide PDF",
    ],
    requirements: [
      {
        heading: "Series Overview",
        items: [
          "Series name (if you have one)",
          "Genre",
          "Brief series description (3–4 sentences about the overall story arc)",
          "Target audience — Who is your ideal reader?",
        ],
      },
      {
        heading: "Individual Book Details (for each of the 3 books)",
        items: [
          "Book title (and subtitle, if any)",
          "Brief description (2–3 sentences — what happens in this book?)",
          "Key visual element or scene — What should this cover convey?",
        ],
      },
      {
        heading: "Visual Direction",
        items: [
          "Mood/tone — What feeling should the series evoke?",
          "Color palette preferences — Colors you love or want to avoid",
          "Style preference — Photorealistic or stylized?",
          "Key recurring visual element — Object, symbol, or motif tying the series together",
        ],
      },
      {
        heading: "Reference Covers",
        items: [
          "3–5 existing book covers or series you admire — especially series with consistent branding",
        ],
      },
      {
        heading: "Logo & Typography",
        items: [
          "Series logo direction — Any ideas, or \"your call\"?",
          "Author name (exactly as it should appear on all covers)",
          "Font style preference — Or \"your call\"",
        ],
      },
      {
        heading: "Publishing Platform",
        items: ["Where will this be published? (Amazon KDP, IngramSpark, other?)"],
      },
    ],
  },

  "Standard (5 Books)": {
    delivery: "5 business days",
    deliverables: [
      "5 consistent ebook covers",
      "Series logo",
      "Box set cover",
      "YouTube thumbnail",
      "Comprehensive style guide PDF",
    ],
    requirements: [
      {
        heading: "Series Overview",
        items: [
          "Series name (if you have one)",
          "Genre",
          "Brief series description (3–4 sentences)",
          "Target audience",
        ],
      },
      {
        heading: "Individual Book Details (for each of the 5 books)",
        items: [
          "Book title (and subtitle, if any)",
          "Brief description (2–3 sentences)",
          "Key visual element or scene",
        ],
      },
      {
        heading: "Visual Direction",
        items: [
          "Mood/tone",
          "Color palette preferences",
          "Style preference — Photorealistic or stylized?",
          "Key recurring visual element",
          "Visual progression — Should covers evolve across the series?",
        ],
      },
      {
        heading: "Reference Covers",
        items: [
          "3–5 existing book covers or series you admire",
          "Covers you DON'T like — styles to avoid",
        ],
      },
      {
        heading: "Logo, Thumbnail & Typography",
        items: [
          "Series logo direction — Any ideas, or \"your call\"?",
          "YouTube thumbnail purpose — What will it be used for?",
          "Author name (exactly as it should appear)",
          "Font style preference",
        ],
      },
      {
        heading: "Publishing Platform",
        items: ["Where will this be published?"],
      },
    ],
  },

  "Premium (8+ Books)": {
    delivery: "7 business days",
    deliverables: [
      "All ebook covers (8+)",
      "Series logo",
      "Box set cover",
      "Panoramic cover",
      "Author portrait",
      "YouTube thumbnail",
      "Complete style guide",
    ],
    requirements: [
      {
        heading: "Series Overview",
        items: [
          "Series name (if you have one)",
          "Genre",
          "Brief series description (4–5 sentences)",
          "Target audience",
          "Total number of books planned",
        ],
      },
      {
        heading: "Individual Book Details (for each book)",
        items: [
          "Book title (and subtitle, if any)",
          "Brief description (2–3 sentences)",
          "Key visual element or scene",
          "Emotional position (e.g., \"darkest book,\" \"triumphant finale\")",
        ],
      },
      {
        heading: "Visual Direction",
        items: [
          "Mood/tone",
          "Color palette preferences",
          "Style preference",
          "Key recurring visual element",
          "Visual progression — Should covers evolve across the series?",
        ],
      },
      {
        heading: "Reference Covers",
        items: [
          "5+ existing book covers or series you admire",
          "Covers you DON'T like",
        ],
      },
      {
        heading: "Logo, Panoramic, Portrait & Thumbnail",
        items: [
          "Series logo direction",
          "Panoramic scene direction — wide-format image connecting major characters/elements",
          "Author portrait direction — based on a real photo (attach one) or stylized? Any specific setting or mood?",
          "YouTube thumbnail purpose and any text/tagline",
        ],
      },
      {
        heading: "Typography",
        items: [
          "Author name (exactly as it should appear)",
          "Font style preference",
        ],
      },
      {
        heading: "Publishing Platform",
        items: ["Where will this be published?"],
      },
    ],
  },

  // ─── Series Architecture ──────────────────────────────────────
  "Small (3 Books)": {
    delivery: "2 business days",
    deliverables: [
      "Complete series arc across all 3 books",
      "Chapter outlines (10–15 per book)",
      "Cross-book continuity plan",
      "Book descriptions for Amazon",
      "Front/back matter strategy",
    ],
    requirements: [
      {
        heading: "Series Overview",
        items: [
          "Series name (if you have one)",
          "Genre",
          "Target audience",
          "Series concept — Describe the overall idea in 3–5 sentences",
        ],
      },
      {
        heading: "Story Foundation",
        items: [
          "Main character(s) — Who is the protagonist? Brief description",
          "Central conflict — What is the core problem or struggle?",
          "Setting — Where and when does the story take place?",
          "Ending direction — Do you have a sense of how the series ends?",
        ],
      },
      {
        heading: "Existing Material",
        items: [
          "Have you written any of these books yet? If so, which ones and how far along?",
          "Any outlines, notes, or ideas already? Attach anything you have",
          "Any plot points or scenes you're committed to?",
        ],
      },
      {
        heading: "Tone & Influences",
        items: [
          "Comparable books or series — What published series is yours most similar to?",
          "Pacing preference — Fast and action-packed, slow-burn, or a mix?",
        ],
      },
      {
        heading: "Publishing Plans",
        items: [
          "How will these be published? (Self-published, traditional, other?)",
          "Target book length — Any word count targets per book?",
        ],
      },
    ],
  },

  "Medium (5 Books)": {
    delivery: "3 business days",
    deliverables: [
      "Complete series arc with mid-series pivot",
      "Chapter outlines (10–15 per book)",
      "Cross-book continuity plan with character tracking",
      "Book descriptions for Amazon",
      "Front/back matter strategy",
    ],
    requirements: [
      {
        heading: "Series Overview",
        items: [
          "Series name (if you have one)",
          "Genre",
          "Target audience",
          "Series concept — 4–6 sentences",
        ],
      },
      {
        heading: "Story Foundation",
        items: [
          "Main character(s) — Who is the protagonist (or ensemble)?",
          "Central conflict",
          "Setting — Include world-building details",
          "Mid-series pivot — Ideas about the turning point around book 3?",
          "Ending direction",
        ],
      },
      {
        heading: "Existing Material",
        items: [
          "Have you written any books yet?",
          "Any outlines, notes, or ideas? Attach anything",
          "Any committed plot points?",
          "Any subplots or secondary characters you already know you want?",
        ],
      },
      {
        heading: "Tone & Influences",
        items: [
          "Comparable books or series",
          "Pacing preference",
          "Emotional tone — Dark and gritty, hopeful, morally complex, humorous?",
        ],
      },
      {
        heading: "Publishing Plans",
        items: [
          "How will these be published?",
          "Target book length?",
          "Release cadence — How often do you plan to release?",
        ],
      },
    ],
  },

  "Large (8+ Books)": {
    delivery: "5 business days",
    deliverables: [
      "Epic-scale series structure with multi-arc design",
      "Chapter outlines for every book (10–15 per book)",
      "Master continuity plan",
      "Character continuity tracking with relationship maps",
      "Series bible",
      "Book descriptions for Amazon",
      "Front/back matter strategy",
    ],
    requirements: [
      {
        heading: "Series Overview",
        items: [
          "Series name (if you have one)",
          "Genre",
          "Target audience",
          "Total number of books planned",
          "Series concept — 5–8 sentences",
        ],
      },
      {
        heading: "Story Foundation",
        items: [
          "Main character(s) — Descriptions, desires, and core internal conflict",
          "Central conflict spanning the entire series",
          "Setting — All world-building details: magic systems, technology, geography, factions",
          "Major turning points you have ideas for",
          "Ending direction",
        ],
      },
      {
        heading: "Existing Material",
        items: [
          "Have you written any books yet?",
          "Any outlines, character sheets, or world-building docs? Attach everything",
          "Any committed plot points, scenes, or reveals?",
          "Secondary characters you have in mind?",
          "Subplots beyond the main arc?",
        ],
      },
      {
        heading: "Tone, Influences & Structure",
        items: [
          "Comparable series — List 2–3",
          "Pacing preference",
          "Emotional tone",
          "Themes the series should explore",
          "Do you envision sub-arcs? (e.g., books 1–3 = \"origin arc\")",
          "Multiple POV characters? Who and when do they enter?",
          "Long-term mysteries or secrets revealed across the series?",
        ],
      },
      {
        heading: "Publishing Plans",
        items: [
          "How will these be published?",
          "Target book length?",
          "Release cadence?",
        ],
      },
    ],
  },

  // ─── Children's Picture Book ──────────────────────────────────
  "Standard Picture Book": {
    delivery: "5 business days",
    deliverables: [
      "Story writing or adaptation",
      "32 AI-illustrated pages",
      "Assembled PDF + individual page files",
      "1 round of revisions",
    ],
    requirements: [
      {
        heading: "Story Details",
        items: [
          "Do you have a story written already? If yes, please attach it",
          "Book concept — What is the story about? (3–5 sentences)",
          "Target age group (e.g., 2–4, 4–6, 6–8)",
          "Main character(s) — Name, age, appearance (hair, skin tone, clothing, distinguishing features)",
          "Supporting characters — Brief descriptions",
          "Setting — Where does the story take place?",
          "Tone — Fun and silly, gentle, adventurous, educational?",
          "Lesson or message — Is there a moral or theme?",
        ],
      },
      {
        heading: "Visual Direction",
        items: [
          "Art style — Pixar/Disney-inspired, watercolor, flat illustration, or other? (Or \"your call\")",
          "Color palette — Bright, soft pastels, warm earth tones, or specific colors?",
          "Reference books or art — Children's books whose illustration style you admire",
        ],
      },
      {
        heading: "Text & Layout",
        items: [
          "How much text per page? (1–3 sentences is standard)",
          "Any pages with no text? (Full-bleed illustration pages?)",
        ],
      },
      {
        heading: "Special Pages",
        items: [
          "Dedication page text (e.g., \"For my little adventurer, Emma\")",
          "Any special requests? (Hidden details, inside jokes, a specific scene)",
        ],
      },
      {
        heading: "Publishing Platform",
        items: [
          "Where will this be published? (Amazon KDP, IngramSpark, personal copies?)",
          "Trim size preference — Standard is 8.5\" × 8.5\" square",
        ],
      },
    ],
  },

  "Premium Picture Book": {
    delivery: "7 business days",
    deliverables: [
      "Story writing or adaptation",
      "Custom character design system (reference sheet)",
      "32 AI-illustrated pages (multiple generation passes)",
      "Print-ready formatted PDF",
      "Individual page files + story text document",
      "2 rounds of revisions",
    ],
    requirements: [
      {
        heading: "Story Details",
        items: [
          "Do you have a story written already? If yes, please attach it",
          "Book concept — 4–6 sentences",
          "Target age group",
          "Main character(s) — Name, age, detailed appearance, personality traits",
          "Supporting characters — Descriptions for each",
          "Setting — Multiple settings? Describe each",
          "Tone",
          "Lesson or message",
          "Emotional arc — How should the reader feel at beginning vs. end?",
        ],
      },
      {
        heading: "Visual Direction",
        items: [
          "Art style preference (or \"your call\")",
          "Color palette",
          "Reference books or art — List 3–5",
          "Visual details that matter — Specific objects, animals, or elements that must appear",
        ],
      },
      {
        heading: "Text & Layout",
        items: [
          "How much text per page?",
          "Any pages with no text?",
          "Text placement preference — Overlaid on illustrations or separate area?",
        ],
      },
      {
        heading: "Print Details",
        items: [
          "Trim size — 8.5\"×8.5\" square, 8\"×10\" portrait, or 10\"×8\" landscape?",
          "Print-on-demand service — Amazon KDP Print, IngramSpark, other?",
          "Hardcover or softcover?",
          "ISBN — Do you have one, or using Amazon-assigned?",
        ],
      },
      {
        heading: "Special Pages",
        items: [
          "Title page design — Any specific vision?",
          "Copyright page text",
          "Dedication page text",
          "Back cover — Any text, tagline, or barcode area needed?",
          "Any special requests? (Easter eggs, hidden details)",
        ],
      },
    ],
  },

  // ─── Full Pipeline ────────────────────────────────────────────
  "Starter Pipeline (3 Books)": {
    delivery: "5 business days",
    deliverables: [
      "Complete series arc across 3 books",
      "Chapter outlines (10–15 per book)",
      "Cross-book continuity plan",
      "3 consistent ebook covers",
      "Series logo + box set cover",
      "Style guide PDF",
      "Book descriptions for Amazon",
      "1 round of revisions on any deliverable",
    ],
    requirements: [
      {
        heading: "Series Overview",
        items: [
          "Series name (if you have one)",
          "Genre",
          "Target audience",
          "Series concept — 3–5 sentences",
        ],
      },
      {
        heading: "Story Foundation",
        items: [
          "Main character(s) — Brief description",
          "Central conflict",
          "Setting — Include world-building details",
          "Ending direction",
          "Have you written any books yet?",
          "Any existing notes or outlines? Attach anything you have",
          "Comparable books or series",
          "Pacing preference",
        ],
      },
      {
        heading: "Individual Book Details (for each of the 3 books)",
        items: [
          "Book title (and subtitle, if any)",
          "Brief description (2–3 sentences)",
          "Key visual element or scene for the cover",
        ],
      },
      {
        heading: "Visual Direction",
        items: [
          "Mood/tone",
          "Color palette preferences",
          "Style preference — Photorealistic or stylized?",
          "Key recurring visual element",
        ],
      },
      {
        heading: "Reference Covers",
        items: ["3–5 existing book covers or series you admire"],
      },
      {
        heading: "Logo & Typography",
        items: [
          "Series logo direction — Any ideas, or \"your call\"?",
          "Author name (exactly as it should appear)",
          "Font style preference",
        ],
      },
      {
        heading: "Publishing",
        items: [
          "Where will this be published?",
          "Target book length?",
        ],
      },
    ],
  },

  "Standard Pipeline (5 Books)": {
    delivery: "7 business days",
    deliverables: [
      "Complete series arc with mid-series pivot",
      "Chapter outlines for all 5 books",
      "Cross-book continuity plan with character tracking",
      "5 consistent ebook covers",
      "Series logo + style guide",
      "Box set cover + YouTube thumbnail",
      "Book descriptions for Amazon",
      "2 rounds of revisions on any deliverable",
    ],
    requirements: [
      {
        heading: "Series Overview",
        items: [
          "Series name",
          "Genre",
          "Target audience",
          "Series concept — 4–6 sentences",
        ],
      },
      {
        heading: "Story Foundation",
        items: [
          "Main character(s)",
          "Central conflict",
          "Setting — Include world-building",
          "Mid-series pivot ideas",
          "Ending direction",
          "Any existing material? Attach everything",
          "Comparable series",
          "Pacing preference",
          "Emotional tone",
        ],
      },
      {
        heading: "Individual Book Details (for each of the 5 books)",
        items: [
          "Book title",
          "Brief description",
          "Key visual element for cover",
        ],
      },
      {
        heading: "Visual Direction",
        items: [
          "Mood/tone",
          "Color palette",
          "Style preference",
          "Key recurring visual element",
          "Visual progression across covers?",
        ],
      },
      {
        heading: "Reference Covers",
        items: [
          "3–5 covers or series you admire",
          "Covers you DON'T like",
        ],
      },
      {
        heading: "Logo, Thumbnail & Typography",
        items: [
          "Series logo direction",
          "YouTube thumbnail purpose and text",
          "Author name",
          "Font style preference",
        ],
      },
      {
        heading: "Publishing",
        items: [
          "Where will this be published?",
          "Target book length?",
          "Release cadence?",
        ],
      },
    ],
  },

  "Premium Pipeline (8+ Books)": {
    delivery: "10 business days",
    deliverables: [
      "Epic-scale series architecture",
      "Chapter outlines for every book",
      "Master continuity plan + character tracking",
      "Series bible",
      "All ebook covers",
      "Series logo + complete style guide",
      "Box set cover + panoramic cover",
      "Author portrait + YouTube thumbnail",
      "Book descriptions for Amazon",
      "2 rounds of revisions on any deliverable",
    ],
    requirements: [
      {
        heading: "Series Overview",
        items: [
          "Series name",
          "Genre",
          "Target audience",
          "Total number of books",
          "Series concept — 5–8 sentences",
        ],
      },
      {
        heading: "Story Foundation",
        items: [
          "Main character(s) — Detailed descriptions",
          "Central conflict spanning the series",
          "Setting — All world-building details",
          "Major turning points",
          "Ending direction",
          "Any existing material? Attach everything",
          "Secondary characters and subplots",
          "Comparable series (2–3)",
          "Pacing, tone, and themes",
          "Sub-arcs and POV characters?",
          "Long-term mysteries?",
        ],
      },
      {
        heading: "Individual Book Details (for each book)",
        items: [
          "Book title",
          "Brief description",
          "Key visual element for cover",
          "Emotional position in the series",
        ],
      },
      {
        heading: "Visual Direction",
        items: [
          "Mood/tone",
          "Color palette",
          "Style preference",
          "Key recurring visual element",
          "Visual progression across covers?",
        ],
      },
      {
        heading: "Reference Covers",
        items: [
          "5+ covers or series you admire",
          "Covers you DON'T like",
        ],
      },
      {
        heading: "Logo, Panoramic, Portrait & Thumbnail",
        items: [
          "Series logo direction",
          "Panoramic scene direction",
          "Author portrait — based on photo (attach) or stylized?",
          "YouTube thumbnail purpose and text",
        ],
      },
      {
        heading: "Typography & Publishing",
        items: [
          "Author name",
          "Font style preference",
          "Where will this be published?",
          "Target book length?",
          "Release cadence?",
        ],
      },
    ],
  },
};

/**
 * Looks up the package requirements by matching the product name from Stripe
 * metadata against known package keys. Uses fuzzy matching to handle
 * variations in how the product name might be stored.
 */
export function getPackageInfo(productName: string): PackageInfo | null {
  if (!productName) return null;

  // Direct match
  if (packageData[productName]) return packageData[productName];

  // Fuzzy match — check if the product name contains any key
  const normalized = productName.toLowerCase();
  for (const [key, value] of Object.entries(packageData)) {
    if (normalized.includes(key.toLowerCase())) return value;
  }

  // Match by partial keywords
  const keywordMap: Record<string, string> = {
    "cover standard": "Standard",
    "cover premium": "Premium",
    "branding starter": "Starter (3 Books)",
    "branding standard": "Standard (5 Books)",
    "branding premium": "Premium (8+ Books)",
    "architecture small": "Small (3 Books)",
    "architecture medium": "Medium (5 Books)",
    "architecture large": "Large (8+ Books)",
    "children standard": "Standard Picture Book",
    "childrens standard": "Standard Picture Book",
    "children premium": "Premium Picture Book",
    "childrens premium": "Premium Picture Book",
    "picture book standard": "Standard Picture Book",
    "picture book premium": "Premium Picture Book",
    "pipeline starter": "Starter Pipeline (3 Books)",
    "pipeline standard": "Standard Pipeline (5 Books)",
    "pipeline premium": "Premium Pipeline (8+ Books)",
    "full pipeline starter": "Starter Pipeline (3 Books)",
    "full pipeline standard": "Standard Pipeline (5 Books)",
    "full pipeline premium": "Premium Pipeline (8+ Books)",
  };

  for (const [keywords, key] of Object.entries(keywordMap)) {
    if (normalized.includes(keywords)) return packageData[key];
  }

  return null;
}

export default packageData;
