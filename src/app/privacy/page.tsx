import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Metronagon Media",
  description:
    "Privacy policy for Metronagon Media. How we handle your data, payments, analytics, and communications.",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
        Privacy Policy
      </h1>
      <p className="mb-12 text-sm text-muted">
        Last updated: February 23, 2026
      </p>

      <div className="space-y-10 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Who We Are
          </h2>
          <p>
            Metronagon Media (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
            &ldquo;our&rdquo;) operates the website{" "}
            <Link href="/" className="text-gold hover:text-gold-light">
              metronagon.com
            </Link>
            . We provide professional book cover design, series branding, and
            children&apos;s book illustration services for authors and
            publishers.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Information We Collect
          </h2>
          <p className="mb-3">
            We collect minimal information necessary to provide our services:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Payment information:</strong>{" "}
              When you purchase a service, payment is processed securely through{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light"
              >
                Stripe
              </a>
              . We do not store your credit card number, CVV, or full payment
              details on our servers. Stripe handles all payment processing in
              compliance with PCI-DSS standards.
            </li>
            <li>
              <strong className="text-foreground">Email address:</strong> If you
              contact us via email at hello@metronagon.com, we retain your email
              address and message content solely to respond to your inquiry and
              provide requested services.
            </li>
            <li>
              <strong className="text-foreground">Analytics data:</strong> We use{" "}
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light"
              >
                Vercel Analytics
              </a>
              , a privacy-friendly, cookieless analytics service. It collects
              anonymous, aggregated data about page views and site performance.
              No personally identifiable information is collected through
              analytics.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Cookies
          </h2>
          <p>
            This website does not set any first-party tracking cookies. Stripe
            may set strictly necessary cookies during the checkout process to
            enable secure payment processing. These are essential cookies
            required for the service to function and do not track you for
            advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            How We Use Your Information
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>To process and fulfill service orders</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>
              To understand aggregate site usage and improve our website (via
              anonymous analytics)
            </li>
          </ul>
          <p className="mt-3">
            We do not sell, rent, or share your personal information with third
            parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Third-Party Services
          </h2>
          <p className="mb-3">
            We use the following third-party services, each with their own
            privacy policies:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Stripe</strong> — Payment
              processing (
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light"
              >
                Stripe Privacy Policy
              </a>
              )
            </li>
            <li>
              <strong className="text-foreground">Vercel</strong> — Website
              hosting and analytics (
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light"
              >
                Vercel Privacy Policy
              </a>
              )
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Data Retention
          </h2>
          <p>
            We retain email correspondence for as long as necessary to provide
            our services and support. Payment records are retained as required by
            applicable tax and business laws. You may request deletion of your
            personal data at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc space-y-2 pl-6 mt-2">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your personal data</li>
            <li>Opt out of any future communications</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Contact
          </h2>
          <p>
            If you have questions about this privacy policy, contact us at{" "}
            <a
              href="mailto:hello@metronagon.com"
              className="text-gold hover:text-gold-light"
            >
              hello@metronagon.com
            </a>
            .
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <p className="text-xs text-muted/60">
            This privacy policy applies only to metronagon.com. Our author
            portfolio and book series websites (ketanshukla.com and subdomains)
            are informational sites that do not collect any personal data.
          </p>
        </section>
      </div>
    </div>
  );
}
