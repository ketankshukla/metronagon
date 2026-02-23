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
  title: "Book Cover Design & Series Branding for Authors | Metronagon Media",
  description:
    "Professional book cover design, series branding, and children's book illustration for indie authors and publishers. Built by a published Amazon KDP author with 22 books across 3 series.",
  icons: {
    icon: "/icon.svg",
    apple: "/portfolio/logo.png",
  },
  openGraph: {
    title: "Book Cover Design & Series Branding for Authors | Metronagon Media",
    description:
      "Professional book cover design, series branding, and children's book illustration for indie authors and publishers. Built by a published Amazon KDP author with 22 books across 3 series.",
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
    title: "Book Cover Design & Series Branding for Authors | Metronagon Media",
    description:
      "Professional book cover design, series branding, and children's book illustration for indie authors and publishers. Built by a published Amazon KDP author with 22 books across 3 series.",
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
                    "Professional book cover design, series branding, and children's book illustration for indie authors and publishers. Built by a published Amazon KDP author with 22 books across 3 series.",
                  email: "hello@metronagon.com",
                  priceRange: "$99–$1,400",
                  founder: {
                    "@type": "Person",
                    name: "Ketan Shukla",
                    url: "https://ketanshukla.com",
                    jobTitle: "Book Cover Designer & Published Author",
                    description:
                      "Published Amazon KDP author with 22 books across 3 series. Founder of Metronagon Media, offering professional book cover design and publishing visuals to indie authors.",
                    knowsAbout: [
                      "Book Cover Design",
                      "Series Branding",
                      "Indie Publishing",
                      "Amazon KDP",
                      "Children's Book Illustration",
                      "Self-Publishing",
                    ],
                    sameAs: ["https://ketanshukla.com"],
                  },
                  serviceType: [
                    "Book Cover Design",
                    "eBook Cover Design",
                    "Series Branding",
                    "Children's Book Illustration",
                    "Box Set Cover Design",
                    "Book Launch Marketing Graphics",
                  ],
                  areaServed: "Worldwide",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "San Diego",
                    addressRegion: "CA",
                    addressCountry: "US",
                  },
                  sameAs: [
                    "https://x.com/metronagon",
                    "https://www.facebook.com/metronagon/",
                    "https://www.youtube.com/@metronagon",
                    "https://www.tiktok.com/@metronagon",
                    "https://reedsy.com/ketan-shukla",
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
