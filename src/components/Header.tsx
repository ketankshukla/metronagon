"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
            <span className="text-lg font-bold text-gold">M</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Metronagon Media
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/services"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/services"
            className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            Get Started
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:text-foreground md:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface-lighter hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface-lighter hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface-lighter hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-gold px-4 py-3 text-center text-sm font-semibold text-background transition-all hover:bg-gold-light"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
