import type { Metadata } from "next";
import { Suspense } from "react";
import ThankYouContent from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You — Metronagon",
  description:
    "Your order has been received. We'll be in touch within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
