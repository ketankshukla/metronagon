import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Metronagon",
  description:
    "Articles on book cover design, series branding, character illustration, and the creative process behind 22 published books.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
