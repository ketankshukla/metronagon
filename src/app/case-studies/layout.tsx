import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Metronagon",
  description:
    "Portfolio case studies from Metronagon Media. See how we built series branding, cover systems, and children's books for real published projects.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
