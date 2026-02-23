import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Cover Design Portfolio | 100+ Examples | Metronagon Media",
  description:
    "Browse 100+ book cover design examples across fantasy, thriller, romance, sci-fi, horror, children's books, and more. Every cover created with the same professional pipeline available to clients.",
};

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
