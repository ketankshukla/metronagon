import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Cover Design Packages & Pricing | Metronagon Media",
  description:
    "Browse Metronagon Media's front cover design packages — Kindle and paperback covers, series branding, children's book illustration, and publishing pipeline bundles for indie authors.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
