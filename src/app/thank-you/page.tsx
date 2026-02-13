import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You — Metronagon",
  description: "Your order has been received. We'll be in touch within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-2xl px-6 py-32 text-center md:py-40">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/20 bg-gold/10">
          <CheckCircle size={32} className="text-gold" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Thank you for your order!
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          We&apos;ll reach out within 24 hours to discuss your project details.
          Check your email for a confirmation receipt.
        </p>
        <p className="mt-3 text-sm text-muted">
          If you have any questions, reply to the receipt email.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-gold/30 hover:text-gold"
          >
            Browse More Services
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            Back to Home
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
