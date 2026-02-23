import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Book Cover Design Case Studies | Published Series Projects | Metronagon Media",
  description:
    "See how Metronagon Media built complete series branding, cover systems, and children's picture books for real published projects — including a 12-book fantasy epic and 32-page illustrated children's book.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
