# Google Search Console Setup — Metronagon Media

## Why This Is Critical

Google Search Console (GSC) is how you **tell Google your site exists** and **submit your sitemap** so it knows what pages to crawl. Without it, Google discovers your site passively (which can take weeks or months). With it, indexing starts within hours.

---

## Step-by-Step Setup

### Step 1: Go to Google Search Console

1. Open **https://search.google.com/search-console/about**
2. Click **"Start now"**
3. Sign in with your Google account (use the same one you use for other Google services)

### Step 2: Add Your Property

1. You'll see two options: **"Domain"** and **"URL prefix"**
2. Choose **"URL prefix"** (simpler, works with Vercel)
3. Enter: `https://metronagon.com`
4. Click **"Continue"**

### Step 3: Verify Ownership

Google needs to confirm you own the site. There are several methods — use **HTML file upload** (easiest with Vercel/Next.js):

1. Google will give you a file named something like `googleXXXXXXXXXXXXXXXX.html`
2. Download that file
3. Place it in `E:\metronagon\public\` (the `/public` directory in your Next.js project)
4. The file will be accessible at `https://metronagon.com/googleXXXXXXXXXXXXXXXX.html`
5. **Tell Cascade the filename** — I will verify it's in the right place
6. Commit and push to GitHub (Vercel will auto-deploy)
7. Wait 1-2 minutes for the deploy, then click **"Verify"** in Google Search Console

**Alternative: HTML meta tag method** (if file upload doesn't work):
1. Google gives you a meta tag like: `<meta name="google-site-verification" content="XXXXXXXX" />`
2. Tell Cascade the content value and I'll add it to the root layout's metadata

### Step 4: Submit Your Sitemap

Once verified:

1. In the left sidebar, click **"Sitemaps"**
2. In the "Add a new sitemap" field, enter: `sitemap.xml`
3. Click **"Submit"**
4. The full URL submitted will be: `https://metronagon.com/sitemap.xml`
5. Google will show the status as "Pending" — this is normal
6. Within 24-48 hours, it will change to "Success" and show the number of URLs discovered

### Step 5: Request Indexing (Optional but Recommended)

For faster indexing of your most important pages:

1. In the left sidebar, click **"URL Inspection"**
2. Paste each of these URLs one at a time and click **"Request Indexing"**:
   - `https://metronagon.com/`
   - `https://metronagon.com/services`
   - `https://metronagon.com/examples`
   - `https://metronagon.com/case-studies`
   - `https://metronagon.com/about`
   - `https://metronagon.com/blog`
3. Google allows ~10 indexing requests per day, so do the most important pages first

### Step 6: Verify Everything Is Working

After 24-48 hours:

1. Go to **"Coverage"** or **"Pages"** in the left sidebar
2. You should see your pages listed as "Valid" or "Indexed"
3. Go to **"Performance"** to start seeing search impression data (this takes a few days to populate)

---

## What Your Sitemap Currently Includes

Your `sitemap.ts` dynamically generates a sitemap with these URLs:

| URL | Priority | Change Frequency |
|-----|----------|-----------------|
| `https://metronagon.com` | 1.0 | monthly |
| `https://metronagon.com/services` | 0.9 | monthly |
| `https://metronagon.com/examples` | 0.8 | monthly |
| `https://metronagon.com/case-studies` | 0.7 | monthly |
| `https://metronagon.com/about` | 0.6 | monthly |
| `https://metronagon.com/blog` | 0.7 | weekly |
| 8 individual blog post URLs | 0.5 | yearly |

**Total: 14 URLs**

---

## What Your robots.txt Currently Allows

Your `robots.ts` generates:

```
User-agent: *
Allow: /
Disallow: /checkout
Disallow: /thank-you

Sitemap: https://metronagon.com/sitemap.xml
```

This correctly blocks checkout/thank-you pages (no SEO value) while allowing everything else.

---

## Ongoing Maintenance

- **When you add new blog posts**: The sitemap auto-updates (it reads from the `blogSlugs` array in `sitemap.ts`). Google re-crawls the sitemap periodically.
- **When you add new pages**: Add them to `sitemap.ts` and push. Google picks them up on next crawl.
- **Check monthly**: Log into GSC and check the "Pages" report for any crawl errors or indexing issues.

---

## Timeline Expectations

| Milestone | Expected Time |
|-----------|--------------|
| Sitemap submitted | Day 1 |
| First pages indexed | 2-7 days |
| All pages indexed | 1-2 weeks |
| Search impressions visible | 1-2 weeks |
| Organic clicks begin | 2-8 weeks |
| Stable search presence | 2-3 months |

---

## Troubleshooting

**"URL is not on Google"** — This is normal for a new site. Submit the URL for indexing and wait.

**"Crawled - currently not indexed"** — Google found the page but chose not to index it yet. This usually resolves on its own as your site builds authority. Add more internal links to the page.

**"Discovered - currently not indexed"** — Google knows about the page but hasn't crawled it. Request indexing manually.

**Sitemap shows "Couldn't fetch"** — Check that `https://metronagon.com/sitemap.xml` is accessible in a browser. If not, verify your Vercel deployment is current.
