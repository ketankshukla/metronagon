import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  FileText,
  Eye,
  CheckCircle,
  Scale,
  Sparkles,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "AI Transparency & Copyright | How I Create Your Book Covers | Metronagon Media",
  description:
    "Full transparency on my AI-assisted book cover design process. See exactly how detailed creative direction, professional production, and human authorship produce commercially viable, copyrightable book covers.",
  openGraph: {
    title:
      "AI Transparency & Copyright | How I Create Your Book Covers | Metronagon Media",
    description:
      "Full transparency on my AI-assisted book cover design process. See exactly how detailed creative direction, professional production, and human authorship produce commercially viable, copyrightable book covers.",
    url: "https://metronagon.com/ai-transparency",
    images: [
      {
        url: "/images/ai-transparency/book1-sunblade-rising.jpg",
        width: 1600,
        height: 2400,
        alt: "Aztec Samurai Adventures Book 1: Sunblade Rising — AI-assisted book cover created with 2,800-word creative brief",
      },
    ],
  },
};

export default function AITransparencyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-gold" />
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              AI Transparency & Copyright
            </span>
            <Shield className="w-8 h-8 text-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gold-gradient-text">
            How I Create Your Book Cover Art
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Full transparency on my AI-assisted design process, your copyright
            protections, and why this approach delivers exceptional results for
            your books.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-16">
        {/* Intro */}
        <section>
          <p className="text-foreground/90 text-lg leading-relaxed">
            Thank you for considering me for your book cover design. Before we
            begin working together, I want to be completely transparent about my
            creative process, the tools I use, and what that means for you and
            your book. This page answers every question you might have about
            AI-assisted design, copyright, and your rights as a client.
          </p>
          <p className="text-foreground/70 text-base leading-relaxed mt-4">
            Whether we&apos;re working together through{" "}
            <a
              href="https://reedsy.com/ketan-shukla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light underline underline-offset-4"
            >
              Reedsy
            </a>{" "}
            or directly, I hold myself to the same professional standards of
            transparency and quality. These are not platform-specific
            requirements — they are my personal commitments to every client.
          </p>
        </section>

        {/* What Tools */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-gold flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              What Tools Do I Use?
            </h2>
          </div>
          <div className="bg-surface-light border border-border rounded-xl p-6 md:p-8">
            <p className="text-foreground/90 leading-relaxed">
              I use{" "}
              <strong className="text-gold">
                AI-assisted image generation
              </strong>{" "}
              as one of several tools in my professional design workflow.
              Specifically, I use advanced AI image generation platforms
              alongside traditional design software (for compositing,
              typography, color grading, and layout) to create your book covers.
            </p>
            <p className="text-foreground/70 leading-relaxed mt-4">
              I want to be upfront about this because{" "}
              <strong className="text-foreground">
                transparency is not optional — it&apos;s a core value of how I
                work
              </strong>
              , and it&apos;s required by Reedsy&apos;s professional standards.
            </p>
          </div>
        </section>

        {/* What AI-Assisted Means */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-6 h-6 text-gold flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              What Does &ldquo;AI-Assisted&rdquo; Actually Mean?
            </h2>
          </div>
          <p className="text-foreground/90 leading-relaxed mb-8">
            When most people hear &ldquo;AI-generated art,&rdquo; they picture
            someone typing a few words into a box and accepting whatever
            appears. That is <strong className="text-gold">not</strong> what I
            do. Not even close.
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-surface-light border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Step 1 — I Design Your Cover in Words
              </h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Before any image is generated, I write a{" "}
                <strong className="text-foreground">
                  detailed creative brief — typically 2,000 to 3,000 words
                </strong>{" "}
                — that specifies every element of your cover:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Character appearance
                    </strong>{" "}
                    — ethnicity, bone structure, skin tone, eye color, hair,
                    expression, scars, distinguishing features
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Clothing & equipment
                    </strong>{" "}
                    — materials, construction, damage state, cultural
                    influences, color palette
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Background & setting
                    </strong>{" "}
                    — specific story locations, architecture, landscape,
                    weather, lighting
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Mood & atmosphere
                    </strong>{" "}
                    — particle effects, light behavior, color temperature,
                    emotional tone
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Composition</strong> —
                    exact placement zones, text-safe areas, depth-of-field
                    specifications
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Typography</strong> —
                    font family, exact placement, hex color values,
                    letter-spacing, decorative treatments
                  </span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-light border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gold mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Step 2 — I Generate and Select
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Using that detailed brief, I generate multiple image candidates.
                Most don&apos;t meet my standards. I select only the outputs
                that best match the creative vision — often generating dozens of
                candidates before finding ones that work.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-light border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Step 3 — I Refine and Produce
              </h3>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Selected images are then professionally finished:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Compositing</strong> —
                    combining elements from different generations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Color grading</strong> —
                    matching the series vision and print/digital requirements
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Typography</strong> —
                    professional text design and placement
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Layout optimization
                    </strong>{" "}
                    — meeting platform-specific requirements
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Series consistency
                    </strong>{" "}
                    — unified visual language across all covers
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example Prompt Showcase */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-gold flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              See It in Action — A Real Creative Brief
            </h2>
          </div>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Below is the actual creative brief I wrote for{" "}
            <strong className="text-gold">Book 1: Sunblade Rising</strong> from
            my <em>Aztec Samurai Adventures</em> series, alongside the finished
            cover it produced. This single brief contains approximately{" "}
            <strong className="text-foreground">2,800 words</strong> of specific
            creative direction — hundreds of individual decisions about every
            visual element.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-8">
            Each section of the prompt is color-coded so you can see exactly how
            much detail goes into every aspect of the design.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
            {/* Prompt */}
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 overflow-auto max-h-[800px]">
              <h3 className="text-lg font-bold text-foreground mb-4 sticky top-0 bg-surface pb-2 border-b border-border">
                Creative Brief — Book 1: Sunblade Rising
              </h3>
              <div className="space-y-4 text-sm leading-relaxed font-mono">
                {/* Header / Technical Specs */}
                <div>
                  <span className="text-[#9CA3AF] font-bold block mb-1">
                    TECHNICAL SPECIFICATIONS
                  </span>
                  <p className="text-[#9CA3AF]">
                    BOOK 1: SUNBLADE RISING - A BLADE FORGED IN LIGHT
                    <br />
                    TYPE: Ebook Front Cover (Amazon Kindle + Apple iBooks)
                    <br />
                    DIMENSIONS: 1600 x 2400 pixels, 300 DPI, sRGB color profile
                    <br />
                    COMPATIBLE: Amazon Kindle (min 1000x1600, ideal 1600x2400),
                    Apple iBooks (max 1600x2400, max 4M pixels)
                  </p>
                </div>

                {/* Style Direction */}
                <div>
                  <span className="text-[#F472B6] font-bold block mb-1">
                    STYLE DIRECTION
                  </span>
                  <p className="text-[#F472B6]/80">
                    A breathtaking ultra-high-resolution photorealistic book
                    cover rendered at 1600x2400 pixels, 300 DPI, in sharp
                    cinematic digital style with advanced volumetric lighting,
                    ray-traced reflections, and subsurface skin scattering. This
                    must look like a $200-million Hollywood movie poster — every
                    surface, every texture, every particle of light rendered
                    with obsessive photographic precision. ABSOLUTELY NO oil
                    painting, NO watercolor, NO painterly brushstrokes, NO
                    soft-focus artistic filters, NO traditional media aesthetic
                    whatsoever. Every pixel must be razor-sharp, hyper-detailed,
                    and cinematically lit.
                  </p>
                </div>

                {/* Subject */}
                <div>
                  <span className="text-[#60A5FA] font-bold block mb-1">
                    SUBJECT — DYNAMIC POWER PORTRAIT
                  </span>
                  <p className="text-[#60A5FA]/80">
                    A breathtakingly gorgeous young woman of indigenous
                    Mesoamerican descent in her early 20s — the kind of beauty
                    that stops armies and starts legends. She is positioned in
                    the lower-right quadrant of the image, her face centered at
                    approximately 65-75% down from the top, offset slightly
                    right of center. She is captured in a moment of devastating
                    power — her jade-obsidian katana raised at a diagonal behind
                    her right shoulder, the blade erupting with blinding golden
                    sunfire that streaks outward in razor-sharp rays...
                  </p>
                </div>

                {/* Face */}
                <div>
                  <span className="text-[#34D399] font-bold block mb-1">
                    FACE — HYPER-DETAILED PHOTOREALISTIC BEAUTY
                  </span>
                  <p className="text-[#34D399]/80">
                    Her face is the centerpiece of the image and must be
                    rendered with obsessive, magazine-cover-quality
                    photorealism. Her bone structure is exquisite — high,
                    sculpted cheekbones that catch the golden light like
                    polished bronze, a strong elegant jawline that tapers to a
                    slightly rounded chin... Her eyes are absolutely stunning —
                    large, wide-set, and devastatingly expressive. Her irises
                    are deep obsidian-black shot through with golden amber
                    striations that radiate outward from the pupil like
                    fractures in volcanic glass filled with liquid sunlight...
                  </p>
                </div>

                {/* Hair */}
                <div>
                  <span className="text-[#A78BFA] font-bold block mb-1">
                    HAIR — ELABORATE AND DYNAMIC
                  </span>
                  <p className="text-[#A78BFA]/80">
                    Her hair is long, raven-black, and magnificent — thick and
                    lustrous with a blue-black sheen that catches every
                    available light source. It is styled in elaborate warrior
                    braids — some tight and functional, others looser and
                    decorative. The braids are threaded with turquoise stone
                    beads (each bead individually carved with tiny geometric
                    patterns), small gold rings that catch the light like
                    scattered stars, and thin obsidian pins with jade tips...
                  </p>
                </div>

                {/* Armor */}
                <div>
                  <span className="text-[#FB923C] font-bold block mb-1">
                    ARMOR AND CLOTHING — RICHLY DETAILED
                  </span>
                  <p className="text-[#FB923C]/80">
                    She wears layered armor that fuses Mesoamerican ceremonial
                    grandeur with practical samurai-influenced combat design.
                    The primary layer is a chest guard of obsidian-flecked
                    lacquered plates — each plate individually shaped and
                    fitted, the lacquer so polished it reflects the surrounding
                    light like dark mirrors. Gold filigree traces elaborate
                    sun-disc patterns across the chest guard...
                  </p>
                </div>

                {/* Weapon */}
                <div>
                  <span className="text-[#F87171] font-bold block mb-1">
                    THE SUN-BLADE — THE ICONIC WEAPON
                  </span>
                  <p className="text-[#F87171]/80">
                    Her katana is a masterwork of impossible beauty. The blade
                    is forged from a seamless fusion of volcanic obsidian glass
                    and jade-green steel — the surface rippling with a visible
                    hamon line where the two materials merge, creating a wave
                    pattern that seems to move in the light. The blade is
                    currently BLAZING with golden sunfire — intense, radiant,
                    almost blinding at the edge...
                  </p>
                </div>

                {/* Background */}
                <div>
                  <span className="text-[#2DD4BF] font-bold block mb-1">
                    BACKGROUND — TEMPLE OF THE SUN-BLADE
                  </span>
                  <p className="text-[#2DD4BF]/80">
                    Behind Itzil and slightly out of focus (cinematic
                    depth-of-field), the background depicts the sacred courtyard
                    of the Sun-Blade temple at the exact moment of golden hour —
                    the sun sitting on the horizon, pouring liquid amber light
                    through the massive stone columns of the temple complex. The
                    architecture is grand Mesoamerican — enormous stepped
                    pyramids with jade-green moss growing in the crevices of
                    ancient limestone...
                  </p>
                </div>

                {/* Atmospheric */}
                <div>
                  <span className="text-[#FBBF24] font-bold block mb-1">
                    ATMOSPHERIC EFFECTS AND PARTICLES
                  </span>
                  <p className="text-[#FBBF24]/80">
                    The air is alive with particles — hundreds of tiny golden
                    embers drift upward from the Sun-Blade like inverse
                    snowflakes, each one a pinpoint of warm light. Turquoise
                    mystical particles — smaller, cooler, more geometric in
                    shape — swirl in slow spirals throughout the scene...
                  </p>
                </div>

                {/* Composition */}
                <div>
                  <span className="text-[#818CF8] font-bold block mb-1">
                    COMPOSITION RULES
                  </span>
                  <p className="text-[#818CF8]/80">
                    The woman&apos;s face must be positioned entirely BELOW the
                    subtitle text area and ABOVE the author name. Her face
                    occupies roughly the 55%-82% vertical zone of the image. The
                    top 40% of the image must contain ONLY background elements.
                    Absolutely NO part of her face, hair, feathers, weapon, or
                    body may enter the top 35% of the image.
                  </p>
                </div>

                {/* Typography */}
                <div>
                  <span className="text-[#E879F9] font-bold block mb-1">
                    TEXT — EXACT SPECIFICATIONS
                  </span>
                  <p className="text-[#E879F9]/80">
                    Line 1 (3% from top): &quot;AZTEC SAMURAI ADVENTURES&quot; —
                    Trajan Pro, turquoise (#40E0D0), letter-spacing 0.15em
                    <br />
                    Line 2 (6% from top): &quot;BOOK I&quot; — Trajan Pro, gold
                    (#FFD700), flanked by gold lines
                    <br />
                    Lines 3-4 (10-22%): &quot;SUNBLADE RISING&quot; — large
                    Trajan Pro, white/cream with golden warmth
                    <br />
                    Ornamental dividers at 24% and 28% — gold &amp; turquoise
                    Aztec filigree
                    <br />
                    Line 5 (26%): &quot;A Blade Forged in Light&quot; — italic
                    Trajan Pro, cream/gold
                    <br />
                    Line 6 (92%): &quot;KETAN SHUKLA&quot; — large Trajan Pro,
                    white/cream
                  </p>
                </div>

                {/* Mood */}
                <div>
                  <span className="text-[#D4AF37] font-bold block mb-1">
                    OVERALL MOOD AND QUALITY
                  </span>
                  <p className="text-[#D4AF37]/80">
                    Cinematic, epic, awe-inspiring — the feeling of standing at
                    the edge of destiny and choosing to step forward. The
                    dominant palette is golden amber, deep obsidian black, and
                    turquoise mystical blue. The rendering quality must match
                    the highest tier of digital art — comparable to concept art
                    from major film studios or AAA game cinematics.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-foreground/60 text-xs">
                  This is an abbreviated version of the full ~2,800-word prompt.
                  Each section shown above contains significantly more detail in
                  the actual brief.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:sticky lg:top-24">
              <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl shadow-gold/5 max-w-[320px] mx-auto lg:mx-0">
                <Image
                  src="/images/ai-transparency/book1-sunblade-rising.jpg"
                  alt="Aztec Samurai Adventures Book 1: Sunblade Rising — finished book cover produced from the creative brief shown"
                  width={320}
                  height={480}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="text-center text-foreground/60 text-sm mt-3 max-w-[320px] mx-auto lg:mx-0">
                <em>
                  Book 1: Sunblade Rising — produced from the 2,800-word
                  creative brief shown here
                </em>
              </p>
            </div>
          </div>

          {/* Color Legend */}
          <div className="mt-8 bg-surface-light border border-border rounded-xl p-6">
            <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
              Prompt Section Color Key
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#9CA3AF]" />
                <span className="text-foreground/70">Technical Specs</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#F472B6]" />
                <span className="text-foreground/70">Style Direction</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#60A5FA]" />
                <span className="text-foreground/70">Subject</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#34D399]" />
                <span className="text-foreground/70">Face Details</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#A78BFA]" />
                <span className="text-foreground/70">Hair</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FB923C]" />
                <span className="text-foreground/70">Armor &amp; Clothing</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#F87171]" />
                <span className="text-foreground/70">Weapon</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#2DD4BF]" />
                <span className="text-foreground/70">Background</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FBBF24]" />
                <span className="text-foreground/70">Atmosphere</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#818CF8]" />
                <span className="text-foreground/70">Composition</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E879F9]" />
                <span className="text-foreground/70">Typography</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                <span className="text-foreground/70">Mood &amp; Quality</span>
              </span>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-6 h-6 text-gold flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Is My Book Cover Copyrightable?
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-light border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                The Current Legal Position
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                The US Copyright Office has said that the copyrightability of
                AI-assisted works depends on{" "}
                <strong className="text-gold">
                  how much human creative control
                </strong>{" "}
                shaped the final result. Works created with minimal human input
                may not qualify. Works where a human author exercised
                substantial creative direction, selection, and arrangement{" "}
                <strong className="text-foreground">do</strong> qualify for
                protection.
              </p>
            </div>

            <div className="bg-surface-light border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Where Your Cover Falls on That Spectrum
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Original character design
                    </strong>{" "}
                    — characters based on your descriptions, your story, and
                    your vision
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      2,000-3,000 words of specific creative direction
                    </strong>{" "}
                    per image — hundreds of individual creative decisions, all
                    documented
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Selection and curation
                    </strong>{" "}
                    from multiple generated candidates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Professional compositing, color grading, and typography
                    </strong>{" "}
                    — additional layers of human creative work
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Series-level visual architecture
                    </strong>{" "}
                    — coordinated design across all covers
                  </span>
                </li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-4 text-sm">
                For context: a traditional publishing house art director
                typically provides{" "}
                <strong className="text-foreground">200-500 words</strong> of
                creative direction to a commissioned illustrator. My creative
                briefs contain{" "}
                <strong className="text-gold">
                  5-10 times more specific creative direction
                </strong>{" "}
                than the industry standard.
              </p>
            </div>

            <div className="bg-surface-light border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                What This Means for You
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Your book cover is a{" "}
                <strong className="text-gold">
                  professionally produced visual asset
                </strong>{" "}
                created under extensive human creative direction. The AI is a
                production tool that executes that vision, similar to how a
                camera executes a photographer&apos;s vision or how digital
                brushes execute a digital painter&apos;s vision.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-3">
                There is{" "}
                <strong className="text-foreground">no legal barrier</strong> to
                publishing and selling books with AI-assisted cover art on
                Amazon, Apple Books, IngramSpark, or any other current platform.
              </p>
            </div>
          </div>
        </section>

        {/* Copyright Registration */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-gold flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Copyright Registration
            </h2>
          </div>
          <div className="bg-surface-light border border-border rounded-xl p-6 md:p-8">
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-foreground">
                    Register the book as a whole work
                  </strong>{" "}
                  — text, cover, and layout together. The selection,
                  coordination, and arrangement is clearly human-authored.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-foreground">
                    Disclose AI assistance
                  </strong>{" "}
                  if the registration form asks about it. Transparency is always
                  the right approach.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-foreground">
                    Your text is fully copyrightable
                  </strong>{" "}
                  regardless of the cover art — your written work is 100%
                  human-authored and protected.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Legal Safety */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-gold flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Will I Get Into Legal Trouble?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-light border border-red-900/30 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-red-400 mb-4">
                What We&apos;re NOT Doing
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>
                    Copying existing copyrighted artwork or real people&apos;s
                    likenesses
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>
                    Using generic, minimal prompts and selling raw AI outputs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>
                    Hiding the use of AI tools from clients or platforms
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>
                    Claiming images were hand-painted or traditionally
                    illustrated
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-surface-light border border-green-900/30 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-green-400 mb-4">
                What We ARE Doing
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>
                    Creating original character designs based on your unique
                    story
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>
                    Writing thousands of words of specific creative direction
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>
                    Selecting, refining, and professionally finishing every
                    deliverable
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>Being fully transparent about tools and process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>
                    Complying with all platform requirements and Reedsy&apos;s
                    policies
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mt-6 text-sm">
            No current law prohibits the commercial use of AI-assisted images
            created with this level of human creative direction. Amazon, Apple,
            IngramSpark, and all major publishing platforms accept AI-assisted
            cover art.
          </p>
        </section>

        {/* Guarantees */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-gold flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              My Guarantee to You
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-light border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-gold mb-2">
                Full Transparency
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                I will always tell you exactly what tools I use and how I use
                them. No surprises, no hidden processes.
              </p>
            </div>
            <div className="bg-surface-light border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-gold mb-2">
                Commercial Viability
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Every deliverable will be suitable for commercial publication on
                all major platforms. If any platform ever rejects a cover due to
                AI-related policy changes, I will remake it at no additional
                cost.
              </p>
            </div>
            <div className="bg-surface-light border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-gold mb-2">
                Professional Quality
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Your covers will be indistinguishable in quality from
                traditionally commissioned artwork — production-ready, properly
                formatted, and optimized for every platform.
              </p>
            </div>
            <div className="bg-surface-light border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-gold mb-2">
                Creative Ownership
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                The creative vision behind your covers — your characters, your
                world, your story — belongs to you. The detailed creative briefs
                are based on your intellectual property.
              </p>
            </div>
            <div className="bg-surface-light border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-gold mb-2">
                Written Documentation
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                You will receive a copy of the creative brief used to produce
                each cover — a complete written record that strengthens your
                copyright position.
              </p>
            </div>
            <div className="bg-surface-light border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-gold mb-2">
                Ongoing Support
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                If copyright law or platform policies change in the future, I
                will work with you to ensure your covers remain compliant and
                commercially viable.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-gold flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Why This Approach Benefits You
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-light border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Cost Efficiency
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Traditional commissioned cover art costs{" "}
                <strong className="text-foreground">$500-$2,000+</strong> per
                book. My workflow delivers equal or superior quality at a more
                accessible price point, making professional-grade cover art
                available to independent authors.
              </p>
            </div>
            <div className="bg-surface-light border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Speed</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Traditional cover commissions take{" "}
                <strong className="text-foreground">4-8 weeks</strong>. My
                workflow delivers finished covers significantly faster without
                sacrificing quality, getting your book to market sooner.
              </p>
            </div>
            <div className="bg-surface-light border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Precision
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                I can explore far more creative options than a traditional
                illustrator working within a fixed revision budget. Different
                color palettes, poses, or moods can be produced rapidly.
              </p>
            </div>
            <div className="bg-surface-light border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Consistency
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                For series authors, my detailed brief system ensures characters
                look consistent across every cover, with a unified, professional
                visual identity.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-surface-light to-surface border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              I welcome any questions about this process. Transparency is the
              foundation of how I work, and I&apos;d rather you ask now than
              wonder later. There are no bad questions when it comes to
              understanding how your book&apos;s visual identity is being
              created.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-background font-bold px-8 py-3 rounded-lg transition-colors"
              >
                View Services & Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/examples"
                className="inline-flex items-center gap-2 border border-border hover:border-gold/50 text-foreground/80 hover:text-foreground px-8 py-3 rounded-lg transition-colors"
              >
                See More Examples
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <div className="text-center text-foreground/50 text-sm pt-8 border-t border-border">
          <p>
            <em>
              Metronagon Media — Ketan Shukla
              <br />
              Professional Book Cover Design &amp; Series Branding
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
