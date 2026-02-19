import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout — Metronagon",
  description: "Complete your book cover design order with Metronagon Media.",
  robots: { index: false, follow: false },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
