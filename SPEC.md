# SPEC - metronagon

> What this repo is for, what it deliberately does not do, and what must stay
> true for a change to be correct.

**The studio's operations hub and public site** - **Live:** https://metronagon.com

## 1. Purpose

Run Metronagon Media as a business: service definitions, pricing, the client
pipeline, the payment integration, and the public site that sells it.

Where the book repositories are *output*, this is the **operation** - the part
that turns a pipeline into a service other people can buy.

## 2. Scope

**In scope** - service package definitions and pricing; a client request
template; Reedsy conversation pipelines; Stripe setup; book prompt libraries;
cover and branding assets; SEO rollout notes; hosting and AI tooling cost
tracking; custom domain configuration; the Next.js site.

**Explicitly out of scope**

- **Book production.** That is the `agentic-development` line and the series
  repos. This repo sells and organises the service.
- **Being a CRM.** Client conversations are documented patterns, not a system of
  record.
- **Accounting.** Cost notes are operational, not financial records.

## 3. Architecture

A Next.js site plus a working repository of business documents:

```
<Next.js site>                  services, portfolio, contact
book-package-descriptions/      what each package includes
book-prompts/                   the reusable prompt library
client-request-template.md      the brief clients fill in
confidence-scripts/             sales conversation patterns
business-cards/, badge-list.txt branding assets
ai_tools_hosting_costs_summary  what the operation costs to run
AMAZON-KDP-EXCEPTION-RESPONSES  responses to platform rejections
CUSTOM-DOMAIN-CONFIGURATION.md  the domain topology across properties
```

## 4. Invariants

1. **A service package states exactly what is delivered.** Ambiguity in a package
   description becomes a scope dispute with a client.
2. **The client request template is the single intake path**, and it is the same
   brief `book-series-template` consumes - so a sale flows into production
   without a translation step.
3. **Costs are tracked against revenue.** An AI-driven service whose per-unit
   cost is unknown is one that can be sold at a loss.
4. **Platform rejection responses are kept.** KDP exceptions recur; a documented
   response is worth more than rediscovering it.
5. **Domain configuration is documented in one place**, because the studio spans
   several properties and misrouting one is a silent outage.

## 5. Known limitations

- **Documents, not systems.** Pipelines and scripts are written down rather than
  automated; that is appropriate at this size and would not scale.
- **No client portal.** Delivery is by direct handoff.
- **Pricing is manually maintained** and can drift from the site.

## 6. Related

Production: [`agentic-development-v3`](https://github.com/ketankshukla/agentic-development-v3) -
Template: [`book-series-template`](https://github.com/ketankshukla/book-series-template) -
Catalogue: [`author-portfolio`](https://github.com/ketankshukla/author-portfolio)
