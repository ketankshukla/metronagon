import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examples — Metronagon",
  description:
    "Browse 100+ book cover examples across fantasy, thriller, romance, sci-fi, horror, and more. All created with the same pipeline available to clients.",
};

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
