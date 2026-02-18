import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Metronagon",
  description:
    "Professional book cover design, series branding, and children's book illustration. View packages and pricing.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
