import Link from "next/link";
import { Mail, Facebook, Youtube } from "lucide-react";

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ReedsyIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-1 4v2H9v2h2v6h2v-6h2v-2h-2V8h-2z" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                <span className="text-lg font-bold text-gold">M</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Metronagon
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              The Measure of Excellence. Professional book cover design, series
              branding, and children&apos;s book illustration for authors and
              publishers.
            </p>
            <a
              href="mailto:hello@metronagon.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-light"
            >
              <Mail size={14} />
              hello@metronagon.com
            </a>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://x.com/metronagon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="text-muted transition-colors hover:text-gold"
              >
                <XIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/metronagon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-muted transition-colors hover:text-gold"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.youtube.com/@metronagon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube"
                className="text-muted transition-colors hover:text-gold"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@metronagon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
                className="text-muted transition-colors hover:text-gold"
              >
                <TikTokIcon size={18} />
              </a>
              <a
                href="https://reedsy.com/ketan-shukla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Reedsy"
                className="text-muted transition-colors hover:text-gold"
              >
                <ReedsyIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#covers"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Ebook Cover Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#branding"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Series Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services#childrens"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Children&apos;s Books
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pipeline"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Full Pipeline
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/examples"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-transparency"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  AI Transparency
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Metronagon Media. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://ketanshukla.com"
              rel="author"
              className="text-xs text-muted/60 transition-colors hover:text-gold"
            >
              Ketan Shukla — Author Portfolio
            </a>
            <span className="text-xs text-muted/30">|</span>
            <p className="text-xs text-muted/60">The Measure of Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
