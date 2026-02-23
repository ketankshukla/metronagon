import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Book Cover Design Blog | Tips, Process & Tutorials | Metronagon Media",
  description:
    "Articles on book cover design, series branding, character illustration, and the creative process behind 22 published books. Practical insights for indie authors and self-publishers.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
