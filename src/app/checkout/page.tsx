"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, Suspense } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function CheckoutForm() {
  const searchParams = useSearchParams();
  const priceId = searchParams.get("price");
  const productName = searchParams.get("product");

  const fetchClientSecret = useCallback(async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });
    const data = await res.json();
    return data.clientSecret;
  }, [priceId]);

  if (!priceId) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-2xl font-bold">No product selected</h1>
        <p className="mt-2 text-muted">
          Please choose a service from the services page.
        </p>
        <Link
          href="/services"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light"
        >
          <ArrowLeft size={16} />
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-24 md:pt-32">
      <Link
        href="/services"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-gold"
      >
        <ArrowLeft size={16} />
        Back to Services
      </Link>
      <div className="mb-8 flex flex-col items-center">
        <Image
          src="/portfolio/logo.png"
          alt="Metronagon Media"
          width={500}
          height={500}
          className="mb-6 rounded-2xl"
          priority
        />
        {productName && (
          <h1 className="text-2xl font-bold">
            Checkout —{" "}
            <span className="gold-gradient-text">
              {decodeURIComponent(productName)}
            </span>
          </h1>
        )}
      </div>
      <div
        id="checkout"
        className="rounded-2xl border border-border bg-surface-light p-1"
      >
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ fetchClientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
        </div>
      }
    >
      <CheckoutForm />
    </Suspense>
  );
}
