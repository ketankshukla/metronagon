import Link from "next/link";

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
              branding, series architecture, and children&apos;s book
              illustration for authors and publishers.
            </p>
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
                  href="/services#architecture"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Series Architecture
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
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Metronagon. All rights reserved.
          </p>
          <p className="text-xs text-muted/60">The Measure of Excellence</p>
        </div>
      </div>
    </footer>
  );
}
