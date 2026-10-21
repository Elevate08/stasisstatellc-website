# Stasis State LLC — Official Website & Google Play Compliance Portal

This repository contains the official website for **Stasis State LLC**, publisher of **Family Plates** and **Survivor-X**. It is configured to run out-of-the-box on **GitHub Pages** (with support for custom subdomains) and is structured to meet modern **Google Play Store / Android Developer Organization** listing and verification requirements.

---

## 📁 Repository Structure

```
.
├── index.html            # Main landing page, apps portfolio, and developer disclosures
├── privacy.html          # Full Privacy Policy (Google Play compliant, COPPA & GDPR ready)
├── data-deletion.html    # Dedicated Account & Data Deletion URL (Google Play required)
├── terms.html            # Terms of Service
├── styles.css            # Responsive, modern dark-mode stylesheet
├── robots.txt            # Search engine crawler permissions
├── sitemap.xml           # XML sitemap for search engines
└── README.md             # Setup guide & Google Play checklist
```

---

## 🌐 GitHub Pages & Subdomain Setup

GitHub Pages gives you two primary options for subdomains:

### Option A: Custom Subdomain on Your Own Domain (Recommended)
*Example: `apps.stasisstate.com` or `www.stasisstate.com`*

1. **Add a `CNAME` file** in the root of this repo containing your desired subdomain (e.g., `apps.stasisstate.com` or `stasisstate.com`).
2. In your DNS provider (Cloudflare, Namecheap, Route 53, etc.), create a **CNAME** record:
   - **Type:** `CNAME`
   - **Name / Host:** `apps` (or `www` or `@` for apex)
   - **Target / Value:** `<your-github-username>.github.io`
3. Go to GitHub: **Repository Settings > Pages**:
   - Source: Deploy from branch (`main` / root `/`).
   - Custom domain: Enter your domain / subdomain.
   - Check **"Enforce HTTPS"**.

### Option B: Free GitHub-Provided Subdomain
*Example: `https://stasisstate.github.io`*

1. If you create a GitHub Organization or user account named `stasisstate`, create a repository named:
   `stasisstate.github.io`
2. Pushing these files there will instantly serve the site at:
   `https://stasisstate.github.io/`
3. If this repository is inside an existing user account (e.g. `dspencer/stasisstatellc-website`), its default URL will be:
   `https://<username>.github.io/stasisstatellc-website/`

---

## 📱 Google Play Store Verification & Listing Checklist

Under Google Play's organization account requirements:

| Google Play Console Field | Value to Enter | Notes |
| :--- | :--- | :--- |
| **Legal Entity Name** | `Stasis State LLC` | Must match your state corporate filing & Dun & Bradstreet record |
| **D-U-N-S Number** | `[Your 9-Digit DUNS]` | Request free from Dun & Bradstreet for "Stasis State LLC" |
| **Website URL** | `https://stasisstate.com` (or your subdomain) | Must be an active, publicly accessible HTTPS site |
| **Privacy Policy URL** | `https://<domain>/privacy.html` | Directly points to `privacy.html` (covers Family Plates & Survivor-X) |
| **Account Deletion Web Link** | `https://<domain>/data-deletion.html` | Required under Google Play Data Safety policy |
| **Developer Contact Email** | `support@stasisstate.com` | Best practice: Use an email matching your domain |
| **Physical Address** | Your registered agent or office address | Displayed on your public Google Play developer profile |

---

## 🛠 Customizing Your Details

Before publishing to production, customize the placeholders across the HTML files:
- Replace `support@stasisstate.com` and `privacy@stasisstate.com` with your active forwarding emails or mailboxes.
- If you have an official registered office address or phone number for the LLC, add it to the developer disclosure card in `index.html`.
- When app store links become active, link the app cards in `index.html` directly to their Google Play listing badges.
