import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageProtection from "@/components/ImageProtection";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://metronagon.com"),
  title: "Metronagon Media — The Measure of Excellence",
  description:
    "Professional book cover design, series branding, and children's book illustration for authors and publishers.",
  icons: {
    icon: "/icon.svg",
    apple: "/portfolio/logo.png",
  },
  openGraph: {
    title: "Metronagon Media — The Measure of Excellence",
    description:
      "Professional book cover design, series branding, and children's book illustration for authors and publishers.",
    url: "https://metronagon.com",
    siteName: "Metronagon Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portfolio/logo.png",
        width: 512,
        height: 512,
        alt: "Metronagon Media logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metronagon Media — The Measure of Excellence",
    description:
      "Professional book cover design, series branding, and children's book illustration for authors and publishers.",
    images: ["/portfolio/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  name: "Metronagon Media",
                  url: "https://metronagon.com",
                  logo: "https://metronagon.com/portfolio/logo.png",
                  description:
                    "Professional book cover design, series branding, and children's book illustration for authors and publishers.",
                  email: "hello@metronagon.com",
                  priceRange: "$99–$1,400",
                  serviceType: [
                    "Book Cover Design",
                    "Series Branding",
                    "Children's Book Illustration",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Metronagon Media",
                  url: "https://metronagon.com",
                },
              ],
            }),
          }}
        />
        <ImageProtection />
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
