import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Cover Design Packages & Pricing | Metronagon Media",
  description:
    "Browse Metronagon Media's book cover design packages — ebook covers, full wrap print covers, series branding, children's book illustration, and complete publishing pipelines for indie authors.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
