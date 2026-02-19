# Custom Domain Configuration Guide
## Connecting a Client's Domain to Their Vercel-Deployed Website

This document covers everything required to take a client from "I just bought a domain" to "my website is live at my custom address." Written for both your reference and for sharing directly with non-technical clients.

---

## Part 1 — Where to Buy a Domain Name

### What Is a Domain Name?

A domain name is your website's address — the thing people type into a browser to visit your site. For example: `aztecsamurai.com`, `myrealmseries.com`, `authorjanedoe.com`.

You purchase domain names from a **domain registrar** — a company licensed to sell and manage web addresses. You don't own a domain permanently; you rent it annually. Most domains cost $8–$15 per year for standard `.com` addresses.

---

### Recommended Registrars

#### 1. Porkbun — `porkbun.com`
**Recommended as first choice.**

- `.com` domains: approximately **$9–$11/year**
- Free WHOIS privacy protection included (hides your personal contact details from public lookup — many registrars charge $5–$15/year extra for this)
- Clean, straightforward interface
- Excellent customer support
- Renewal prices are honest — no bait-and-switch first-year discounts that triple on renewal

**Best for:** Any client who doesn't already have a domain registrar preference.

---

#### 2. Namecheap — `namecheap.com`
**Excellent alternative, very widely used.**

- `.com` domains: approximately **$10–$13/year**
- Free WhoisGuard privacy protection included
- Interface is clean and well-documented
- Large knowledge base with guides for non-technical users
- Reliable DNS management dashboard

**Best for:** Clients who have heard of Namecheap or who want a very established, widely recommended provider.

---

#### 3. Cloudflare Registrar — `cloudflare.com/products/registrar`
**Cheapest option, but requires a Cloudflare account.**

- `.com` domains: approximately **$9.15/year** (at-cost — Cloudflare does not mark up domain prices)
- Free privacy protection
- DNS is managed through Cloudflare's dashboard, which has excellent performance
- Slightly more setup than other registrars — requires creating a Cloudflare account first

**Best for:** Clients who are technically comfortable and want the lowest annual cost, or who are already using Cloudflare.

---

#### 4. Squarespace Domains — `domains.squarespace.com`
*(Formerly Google Domains — acquired by Squarespace in 2023)*

- `.com` domains: approximately **$12/year**
- Free privacy protection
- Clean Google-style interface (familiar to most people)
- Easy DNS management
- Note: If a client says "I already have a Google domain," this is now Squarespace Domains — same account, same domain, different branding

**Best for:** Clients who prefer a name they trust or who previously had Google Domains.

---

#### 5. GoDaddy — `godaddy.com`
**Usable but not recommended as a first choice.**

- `.com` domains: approximately **$20–$25/year** (first-year promotional price is often $1–$3, but renewals jump significantly)
- Privacy protection costs extra (~$10/year)
- Interface is cluttered with aggressive upsell prompts
- DNS management works fine once you find it

**Best for:** Clients who already have an existing GoDaddy account with other domains. Not worth switching registrars just to use GoDaddy — but perfectly functional if they're already there.

---

### Domain Name Tips to Share With Your Client

- Choose a `.com` if at all possible — it's what readers expect and type instinctively
- Keep it short — `aztecsamurai.com` is better than `aztecsamuraiadadventureseries.com`
- Avoid hyphens — `my-book-series.com` is harder to say out loud and looks less professional
- Your series name is the ideal domain — `[seriesname].com` — rather than your author name, unless you plan to use this site for multiple series
- Check availability before committing to a series name — if the `.com` is taken, that's a signal worth knowing early

---

## Part 2 — DNS in Plain English

Before following the configuration steps, here are the terms you'll encounter — explained as simply as possible.

### What Is DNS?

DNS stands for **Domain Name System**. It's the internet's phone book. When someone types `yourseriesname.com` into a browser, DNS translates that name into the actual server address where your website files live. Without DNS records pointing to your Vercel deployment, your domain name is a phone number not yet connected to any phone.

---

### The DNS Records You'll Be Setting

#### A Record — "Address Record"
> **What it does:** Points your bare domain (e.g., `yoursite.com`) to a specific server's IP address.

Think of it as the street address of your website's server. When Vercel hosts your site, they have a specific IP address where the site lives. The A record tells the internet: "When someone asks for `yoursite.com`, send them to this IP address."

**You will set:**
- **Host/Name:** `@` (the `@` symbol means "the domain itself, with nothing in front of it" — so `yoursite.com` with no `www`)
- **Value/Points to:** `76.76.21.21` (this is Vercel's IP address — it never changes)

---

#### CNAME Record — "Canonical Name Record" (alias)
> **What it does:** Points your `www` version (`www.yoursite.com`) to Vercel's routing system.

CNAME is a nickname. Instead of pointing `www.yoursite.com` to an IP address directly, you point it to Vercel's name (`cname.vercel-dns.com`), and Vercel handles the rest. This allows Vercel to route the `www` version of your domain correctly even as their infrastructure changes over time.

**You will set:**
- **Host/Name:** `www`
- **Value/Points to:** `cname.vercel-dns.com`

---

#### TTL — "Time to Live"
> **What it does:** Controls how long DNS records are cached before they refresh.

You don't need to understand this deeply. When the registrar asks for TTL, set it to **Automatic**, **3600** (1 hour), or **1 hour** — whichever option they show. Lower values make changes propagate faster; higher values mean slightly more caching. The default is always fine.

---

#### Propagation Time
After you save DNS records, they don't go live instantly. DNS changes spread across the internet gradually — this is called **propagation**. It typically takes:
- As little as **5–15 minutes** for most modern registrars
- Up to **48 hours** in rare cases

During propagation, the site may work from some locations but not others, or show a "domain not found" error. This is normal and temporary.

---

## Part 3 — Deploying the Site to Vercel

Before connecting a custom domain, the site must be deployed to Vercel. The Metronagon deployment workflow is: **push to GitHub → Vercel automatically deploys**.

Here is the sequence of events:

1. The website code lives in a GitHub repository
2. Vercel is connected to that repository
3. Every push to the `main` branch automatically triggers a new deployment on Vercel
4. Vercel assigns a free default domain like `your-project-name.vercel.app`
5. You then add the client's custom domain on top of this — the `.vercel.app` address continues to work as a backup

**The client's site will always be deployed to a `.vercel.app` address first.** The custom domain is added as a second address that points to the same deployment.

---

## Part 4 — Adding the Custom Domain in Vercel

These steps are performed in the **Vercel dashboard** (vercel.com). You do this — not the client.

### Step 1: Open the Project in Vercel
1. Go to `vercel.com` and log in
2. Click on the project (the client's website)
3. Click the **Settings** tab at the top
4. In the left sidebar, click **Domains**

### Step 2: Add the Domain
1. In the text field, type the client's domain exactly as purchased: `yourseriesname.com`
2. Click **Add**
3. Vercel will also prompt you to add `www.yourseriesname.com` — add both

### Step 3: Read the DNS Records Vercel Gives You

After adding the domain, Vercel will display a table showing the DNS records you need to add at the registrar. It will show something like this:

| Type | Name/Host | Value |
|------|-----------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

**Screenshot or copy these values.** Then proceed to the appropriate registrar section below.

### Step 4: Vercel Handles SSL (HTTPS) Automatically
Once DNS is configured and propagates, Vercel automatically provisions a free SSL certificate (the padlock icon in the browser). You don't need to purchase or configure this separately — it happens automatically within minutes of DNS resolving correctly.

---

## Part 5 — DNS Configuration by Registrar

### Namecheap

**Where to find DNS settings:**
1. Log in at `namecheap.com`
2. Click **Domain List** in the left sidebar
3. Find the domain and click **Manage** on the right
4. Click the **Advanced DNS** tab at the top of the page

**What you'll see:** A table of existing DNS records. There may already be default Namecheap parking records — these can be deleted. You're adding new ones.

**Add the A Record:**
- Click **Add New Record**
- Type: `A Record`
- Host: `@`
- Value: `76.76.21.21`
- TTL: `Automatic`
- Click the green checkmark to save

**Add the CNAME Record:**
- Click **Add New Record**
- Type: `CNAME Record`
- Host: `www`
- Value: `cname.vercel-dns.com`
- TTL: `Automatic`
- Click the green checkmark to save

**Note for non-technical clients:** Tell them to go to Advanced DNS — not Basic DNS, not Nameservers. The word "Advanced" sounds scary but it's just a more complete view of the same settings.

---

### Porkbun

**Where to find DNS settings:**
1. Log in at `porkbun.com`
2. Click **Account** → **Domain Management**
3. Find the domain and click the **DNS** button on the right (small icon that looks like a shield or gear)

**Add the A Record:**
- Type: `A`
- Host: leave this field **blank** (Porkbun uses a blank host to mean `@` / the root domain)
- Answer/Points to: `76.76.21.21`
- TTL: `600` or leave as default
- Click **Add**

**Add the CNAME Record:**
- Type: `CNAME`
- Host: `www`
- Answer/Points to: `cname.vercel-dns.com`
- TTL: `600` or leave as default
- Click **Add**

**Note:** Porkbun may already have default records (A records pointing to their parking page). Delete those before adding the Vercel records to avoid conflicts.

---

### GoDaddy

**Where to find DNS settings:**
1. Log in at `godaddy.com`
2. Click your name/account icon → **My Products**
3. Find the domain and click **DNS** next to it
   - If you don't see DNS, click **Manage** first, then look for DNS in the domain management view

**Add the A Record:**
- Click **Add** (blue button)
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`
- TTL: `1 Hour`
- Click **Save**

**Add the CNAME Record:**
- Click **Add**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: `1 Hour`
- Click **Save**

**Important GoDaddy note:** GoDaddy often has a pre-existing A record pointing to their parking page (usually an IP starting with `184.168...`). **Delete this existing A record first** before adding the Vercel one. Two A records for `@` will cause a conflict.

---

### Cloudflare Registrar / Cloudflare DNS

**Where to find DNS settings:**
1. Log in at `cloudflare.com`
2. Click on the domain from the account home dashboard
3. Click **DNS** in the left sidebar
4. Click **Records**

**Add the A Record:**
- Click **Add record**
- Type: `A`
- Name: `@`
- IPv4 address: `76.76.21.21`
- **Proxy status: click the orange cloud to turn it GREY (DNS only)** — this is critical. The orange "proxied" cloud routes traffic through Cloudflare's CDN, which can interfere with Vercel's SSL certificate provisioning. Set it to grey (DNS only) for both records.
- TTL: `Auto`
- Click **Save**

**Add the CNAME Record:**
- Click **Add record**
- Type: `CNAME`
- Name: `www`
- Target: `cname.vercel-dns.com`
- **Proxy status: set to GREY (DNS only)** — same reason as above
- TTL: `Auto`
- Click **Save**

**Non-technical client note:** The orange cloud icon in Cloudflare is their "proxy" mode. For Vercel-hosted sites, it must be turned off. Tell the client: "Click the orange cloud icon next to each record until it turns grey. That's it."

---

### Squarespace Domains (formerly Google Domains)

**Where to find DNS settings:**
1. Log in at `domains.squarespace.com`
2. Click on the domain you want to manage
3. In the left sidebar, click **DNS**
4. Scroll to **Custom Records**

**Add the A Record:**
- Click **Add record** or **Manage custom records** → **Create new record**
- Host name: `@`
- Type: `A`
- TTL: `3600`
- Data: `76.76.21.21`
- Click **Save**

**Add the CNAME Record:**
- Click **Add record**
- Host name: `www`
- Type: `CNAME`
- TTL: `3600`
- Data: `cname.vercel-dns.com`
- Click **Save**

**Note for clients with old Google Domains accounts:** The login page now redirects to Squarespace. Use the same Google account — the domain and all settings are preserved, just under Squarespace's interface.

---

## Part 6 — Verifying the Connection

After DNS records are saved at the registrar, return to the **Vercel dashboard → Project → Settings → Domains**.

Vercel shows the status of each domain:

- **"Invalid Configuration"** — DNS records haven't propagated yet, or there's a typo in the record. Wait 15–30 minutes and refresh.
- **"Valid Configuration"** — DNS is set correctly. Your site is live (or will be within a few minutes as SSL provisions).
- A green checkmark next to the domain — fully live.

If after 2 hours the domain still shows "Invalid Configuration":
1. Double-check the A record value is exactly `76.76.21.21`
2. Double-check the CNAME value is exactly `cname.vercel-dns.com` (no trailing slash, no extra characters)
3. Confirm there are no conflicting A records for `@` that weren't deleted
4. For Cloudflare users — confirm the proxy (orange cloud) is turned off

You can also use **whatsmydns.net** — enter the domain and select "A" record type — to see whether the DNS change has propagated globally yet.

---

## Part 7 — What the Client Needs to Do vs. What You Do

### What the client does:
1. Purchase the domain at the registrar of their choice (or you recommend one from Part 1)
2. Share their registrar login credentials with you **temporarily** (or screen-share while you walk them through it)
   - Alternatively, some registrars allow adding a "delegate" or "admin" user — cleaner if the client is comfortable with it
3. Confirm the domain they want to use

### What you do:
1. Deploy the website to Vercel via GitHub (your standard workflow)
2. Add the custom domain in Vercel (Part 3)
3. Add the DNS records at their registrar (Part 5)
4. Monitor Vercel until the green checkmark appears (Part 6)
5. Confirm with the client that their site is live at their custom domain

**Total time on your end:** 10–20 minutes once the site is deployed and DNS access is available.

---

## Part 8 — Pricing This Service to the Client

**Domain cost** is paid by the client directly to the registrar. You are not the buyer — they are. Recommend they purchase it themselves and share access, or purchase it in your name and transfer ownership if they're uncomfortable with the tech.

**DNS Configuration (your time):** This service can be included as part of the author website package or charged separately.

| Service | Price |
|---------|-------|
| DNS configuration included with website build | Included |
| DNS configuration as standalone service | $75 |
| Domain consultation + registrar recommendation | Free (part of onboarding) |
| Troubleshooting a failed DNS configuration | $50/hr |

---

## Quick Reference — The Two Records You Always Need

No matter which registrar your client uses, you will always be adding exactly these two records:

| Record Type | Host / Name | Value / Points To | Purpose |
|-------------|-------------|-------------------|---------|
| `A` | `@` | `76.76.21.21` | Routes `yoursite.com` to Vercel |
| `CNAME` | `www` | `cname.vercel-dns.com` | Routes `www.yoursite.com` to Vercel |

Vercel's IP address (`76.76.21.21`) and CNAME target (`cname.vercel-dns.com`) are stable and do not change. These are the correct values as of 2024–2025.
