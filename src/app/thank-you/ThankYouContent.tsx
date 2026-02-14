"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Package,
  Mail,
  ClipboardList,
  Send,
  Sparkles,
} from "lucide-react";
import { getPackageInfo, type PackageInfo } from "./package-requirements";

interface SessionData {
  status: string;
  customerEmail: string;
  productName: string;
  amountTotal: number;
  currency: string;
}

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [session, setSession] = useState<SessionData | null>(null);
  const [packageInfo, setPackageInfo] = useState<PackageInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }

    fetch(`/api/checkout/session?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setSession(data);
        if (data.productName) {
          setPackageInfo(getPackageInfo(data.productName));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [sessionId]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
      </div>
    );
  }

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "usd",
    }).format(amount / 100);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.04),transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-24 md:pt-32">
        {/* ── Hero Section ─────────────────────────────────── */}
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/portfolio/logo.png"
              alt="Metronagon Media"
              width={200}
              height={200}
              className="rounded-2xl"
              priority
            />
          </div>

          {/* Success icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10 shadow-lg shadow-gold/10">
            <CheckCircle size={40} className="text-gold" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Thank you for your order!
          </h1>

          {session?.productName && (
            <p className="mx-auto mt-4 text-xl font-medium">
              <span className="gold-gradient-text">
                {session.productName}
              </span>
              {session.amountTotal ? (
                <span className="ml-2 text-muted">
                  — {formatAmount(session.amountTotal, session.currency)}
                </span>
              ) : null}
            </p>
          )}

          {session?.customerEmail && (
            <p className="mt-3 text-sm text-muted">
              Confirmation sent to{" "}
              <span className="font-medium text-foreground">
                {session.customerEmail}
              </span>
            </p>
          )}
        </div>

        {/* ── What Happens Next ────────────────────────────── */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl border border-gold/20 bg-gold/[0.03] p-8">
            <div className="mb-6 flex items-center gap-3">
              <Sparkles size={20} className="text-gold" />
              <h2 className="text-lg font-bold">What Happens Next</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                  1
                </div>
                <div>
                  <p className="font-medium">Send us your project details</p>
                  <p className="mt-0.5 text-sm text-muted">
                    Review the requirements below and reply to our email with your answers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                  2
                </div>
                <div>
                  <p className="font-medium">We begin working on your project</p>
                  <p className="mt-0.5 text-sm text-muted">
                    Once we receive your details, production begins immediately
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                  3
                </div>
                <div>
                  <p className="font-medium">Delivery via Google Drive or ZIP</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {packageInfo
                      ? `Your deliverables will be ready within ${packageInfo.delivery}`
                      : "Your deliverables will be sent once complete"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Delivery & Deliverables Quick Stats ──────────── */}
        {packageInfo && (
          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface-light p-6">
              <div className="mb-3 flex items-center gap-2">
                <Clock size={18} className="text-gold" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Delivery Time
                </h3>
              </div>
              <p className="text-2xl font-bold text-gold">
                {packageInfo.delivery}
              </p>
              <p className="mt-1 text-xs text-muted">
                After receiving your project details
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface-light p-6">
              <div className="mb-3 flex items-center gap-2">
                <Package size={18} className="text-gold" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Deliverables
                </h3>
              </div>
              <ul className="space-y-1.5">
                {packageInfo.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle
                      size={14}
                      className="mt-0.5 shrink-0 text-gold/70"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ── Requirements Section ─────────────────────────── */}
        {packageInfo && (
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <ClipboardList size={22} className="text-gold" />
              <h2 className="text-xl font-bold">
                What We Need From You
              </h2>
            </div>
            <p className="mb-8 text-sm text-muted">
              Please reply to the email you&apos;ll receive from us with answers to
              the following. The more detail you provide, the better the result.
            </p>

            <div className="space-y-6">
              {packageInfo.requirements.map((section, idx) => (
                <div
                  key={section.heading}
                  className="rounded-xl border border-border bg-surface-light p-6 transition-all hover:border-gold/20"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-xs font-bold text-gold">
                      {idx + 1}
                    </div>
                    <h3 className="font-semibold">{section.heading}</h3>
                  </div>
                  <ul className="space-y-3 pl-10">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Send
                          size={12}
                          className="mt-1 shrink-0 text-gold/50"
                        />
                        <span className="text-sm leading-relaxed text-muted">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Email reminder */}
            <div className="mt-8 rounded-xl border border-gold/20 bg-gold/[0.03] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold">
                    You&apos;ll receive this same checklist via email
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    We&apos;ll send you an email with all these requirements so you
                    can reply at your convenience. Just hit reply and paste your
                    answers — or attach any files, references, or notes you have.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Fallback if no package info ──────────────────── */}
        {!packageInfo && !loading && (
          <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-border bg-surface-light p-8 text-center">
            <Mail size={32} className="mx-auto mb-4 text-gold" />
            <p className="text-lg font-medium">
              We&apos;ll reach out within 24 hours
            </p>
            <p className="mt-2 text-sm text-muted">
              You&apos;ll receive an email with all the project details we need
              from you. Check your inbox for a confirmation receipt.
            </p>
          </div>
        )}

        {/* ── Action Buttons ───────────────────────────────── */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
