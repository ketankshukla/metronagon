### Vercel: yes — if you’re taking payments, you should upgrade

Vercel’s **Hobby** plan is explicitly for **personal, non-commercial** use. ([Vercel][1])
Their fair-use guidelines define *commercial usage* as a deployment used for **financial gain** (and say commercial usage requires **Pro or Enterprise**). ([Vercel][2])

So if your production site is live and you’re collecting money via Stripe checkout, that’s commercial → **upgrade to Pro** (unless you’re an Enterprise case). ([Vercel][3])

**What to do on Vercel (practical choices):**

* **Solo / simplest:** upgrade your existing Vercel account/project to **Pro**.
* **If you want clean business separation (recommended if you’ll add people later):** create a Vercel **Team** (e.g., “Metronagon Media”), move the project into it, and put the **Team on Pro**. (Vercel’s plans are Hobby/Pro/Enterprise.) ([Vercel][4])

---

### GitHub: no — you don’t need to upgrade just because you’re making money

GitHub **does not require a paid plan** just because your repo is for a business or your site takes payments. GitHub Free exists for both **personal accounts and organizations**. ([GitHub Docs][5])

You typically pay GitHub for things like more advanced org controls/support/SSO (Team/Enterprise), not for “commercial use.” ([GitHub Docs][6])

---

### Do you need a GitHub Organization and to move the repo?

**Not required.** It’s a workflow/ownership decision.

**Keep repo under your personal account if:**

* It’s mostly you
* You don’t need company-style permission management yet
  (Zero problem doing this.)

**Create an org and move the repo if you want:**

* Clear “company ownership” of the code (not tied to a single person)
* Cleaner access control for contractors/employees (teams/roles)
* Easier future handoff / separation between personal projects and business projects
  (Orgs can be free.) ([GitHub Docs][6])

**If you do create an org later:** you can transfer the repo from your user → org; Vercel can be reconnected to the repo after transfer (usually painless).

---

### My recommendation for your exact situation

* **Upgrade Vercel to Pro before going live** with payments. ([Vercel][2])
* **Leave GitHub as-is for now** (personal repo) **unless** you’re about to add collaborators/contractors—then create a GitHub org and transfer the repo for clean business ownership. ([GitHub Docs][6])

[1]: https://vercel.com/docs/plans/hobby?utm_source=chatgpt.com "Vercel Hobby Plan"
[2]: https://vercel.com/docs/limits/fair-use-guidelines?utm_source=chatgpt.com "Fair use Guidelines"
[3]: https://vercel.com/pricing?utm_source=chatgpt.com "Vercel Pricing: Hobby, Pro, and Enterprise plans"
[4]: https://vercel.com/docs/plans?utm_source=chatgpt.com "Account Plans on Vercel"
[5]: https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts?utm_source=chatgpt.com "Types of GitHub accounts"
[6]: https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations?utm_source=chatgpt.com "About organizations"
