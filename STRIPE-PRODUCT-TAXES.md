# Stripe Product Taxes — "Include Tax in Price" Guide

**Date:** February 26, 2025
**Applies to:** All Metronagon Media Stripe products

---

## The Question

When creating a product in Stripe, you'll see a toggle:

> **Include tax in price** — Yes / No

Here's what each option means, how it impacts you, and which one to choose.

---

## Option 1: "No" (Tax-Exclusive) — RECOMMENDED

**What it means:** The price you set is the base price. If tax applies, Stripe adds it on top at checkout.

**Example:**
- You set Cover Standard at **$450**
- Customer is in a state/country with 8% sales tax
- Customer sees: $450 + $36 tax = **$486 total**
- You receive: **$450** (minus Stripe processing fee)

**Pros:**
- You always receive your full listed price regardless of tax jurisdiction
- Your revenue is predictable and consistent
- Matches how most US-based service businesses price
- Easier accounting — your income is always the base price, tax collected is a separate line item
- If a customer is in a tax-free jurisdiction, they pay exactly your listed price

**Cons:**
- Customer sees a higher total at checkout than the listed price (standard practice, same as any online purchase)

---

## Option 2: "Yes" (Tax-Inclusive)

**What it means:** The price you set is the total price including tax. Stripe calculates the tax portion and subtracts it from your revenue.

**Example:**
- You set Cover Standard at **$450** (tax-inclusive)
- Customer is in a state/country with 8% sales tax
- Customer sees: **$450 total** (looks clean)
- Stripe calculates: $416.67 base + $33.33 tax
- You receive: **$416.67** (minus Stripe processing fee)

**Pros:**
- Customer sees the exact listed price at checkout — no surprises
- Common practice in the EU and UK (where tax-inclusive pricing is required by law)

**Cons:**
- **You receive less than your listed price** — the tax eats into your revenue
- Your actual revenue varies depending on the customer's tax jurisdiction
- Revenue is unpredictable — a customer in a 10% tax state nets you less than a customer in a 0% tax state
- Harder to reconcile your books since your income per sale fluctuates
- You'd need to raise your listed prices to compensate for the tax reduction

---

## Do You Even Need to Collect Tax?

This is the most important question. Tax collection depends on:

### 1. What You're Selling
- **Digital services** (book cover design, branding) — tax treatment varies by jurisdiction
- In many US states, custom digital design services are **not subject to sales tax**
- In the EU, digital services are subject to VAT regardless

### 2. Where You Have Nexus
- **Nexus** = a tax obligation in a specific jurisdiction
- You have nexus where you live/operate (your state)
- You may have **economic nexus** in states where you exceed revenue thresholds (typically $100K+ in sales)
- As a new business, you're unlikely to have nexus in most states

### 3. Where Your Customers Are
- US customers: tax depends on their state + your nexus status
- International customers (Reedsy clients): may be subject to VAT/GST in their country

---

## Stripe Tax (Automatic Tax Collection)

Stripe offers **Stripe Tax** — an automatic tax calculation service that:
- Determines if tax should be collected based on your registration and the customer's location
- Calculates the correct rate automatically
- Works with both tax-inclusive and tax-exclusive pricing

**Cost:** 0.5% per transaction (on top of regular Stripe fees)

### Should You Enable Stripe Tax?

**Not yet.** Here's why:
- You're a new business with minimal sales volume
- Your nexus is likely limited to your home state only
- The 0.5% per-transaction cost adds up before you have significant volume
- You can always enable it later when your revenue grows

### When to Enable It
- When you start regularly selling to customers in multiple US states
- When you exceed $100K in sales in any single state (economic nexus threshold varies)
- When you start getting EU/UK customers who require VAT collection

---

## Recommendation for Metronagon Media

### Choose: **"No" (Tax-Exclusive)**

**Reasons:**
1. **You're US-based** — tax-exclusive pricing is the standard for US businesses
2. **You want predictable revenue** — $450 for a cover means you get $450 (minus Stripe's processing fee)
3. **Your prices are already set** — choosing tax-inclusive would effectively reduce your prices by the tax amount
4. **Most of your initial clients will come through Reedsy** — Reedsy handles its own payment processing and service fees; your Stripe products are for direct clients outside of Reedsy
5. **Customers expect it** — every Amazon purchase, every SaaS subscription, every online service adds tax at checkout; your customers won't be surprised

### Tax Registration (Do This When Ready)
1. Register for a sales tax permit in your home state (if your state taxes digital services)
2. In Stripe Dashboard → Settings → Tax → add your tax registration
3. Stripe will then automatically calculate and collect tax for customers in that state
4. For other states, don't collect tax until you have nexus there

### For Now (Launch Phase)
- Set all products to **tax-exclusive** pricing
- **Do not enable Stripe Tax** yet — the 0.5% fee isn't worth it at low volume
- Keep your prices clean: $450 means $450
- Consult a tax professional when your monthly revenue consistently exceeds $3,000+

---

## Summary Table

| Setting | You Get Per Sale | Customer Pays | Best For |
|---------|-----------------|---------------|----------|
| Tax-Exclusive (No) | Full listed price | Listed price + tax | US businesses, predictable revenue |
| Tax-Inclusive (Yes) | Listed price minus tax | Exact listed price | EU/UK businesses, consumer-facing retail |

---

## Action Items

- [ ] Select **"No"** for "Include tax in price" on every Stripe product
- [ ] Do not enable Stripe Tax at launch
- [ ] Register for sales tax in your home state when you're ready to start collecting
- [ ] Revisit tax strategy when monthly revenue exceeds $3,000
- [ ] Consult a tax professional for state-specific obligations
