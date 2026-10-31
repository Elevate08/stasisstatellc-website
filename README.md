# Stasis State LLC website

Static organization website for Stasis State LLC: product information, support
contacts, privacy disclosures, and data-deletion instructions. GitHub Pages serves
`main` from `/`; no build, dependencies, or application secrets are required.
`.nojekyll` disables Jekyll processing.

| Purpose | Production URL / contact |
| --- | --- |
| Organization website | https://stasisstate.com/ |
| Privacy policy (Family Plates and company) | https://stasisstate.com/privacy.html |
| Survivor-X terms, privacy policy, data deletion | https://survivorx.stasisstate.com/terms.html, `/privacy.html`, `/data-deletion.html` |
| Game website | https://survivorx.stasisstate.com/ |
| Player support | support@stasisstate.com |
| Privacy requests | privacy@stasisstate.com |

These are intended production URLs. Verify DNS, TLS, and mailbox delivery before
Google verification or an app submission. Website copy is not evidence that Google
has verified the organization or approved an app.

## Survivor-X

Survivor-X has its own terms, privacy policy, and data-deletion page, hosted only at
https://survivorx.stasisstate.com/ (repository `survivorx-website`). This site keeps a
short pointer in `privacy.html`, `terms.html`, and `data-deletion.html` and lists the
product on `index.html` and `products.html`. Do not copy Survivor-X disclosures back
here: update `../survivorx-website` and the game's Data Safety declaration instead.
Family Plates was not audited against its application source in this task.

## Publishing and verification

See [LAUNCH.md](LAUNCH.md) for exact DNS records, email checks, Pages setup,
remaining external steps, and official references.

Preview: `python -m http.server 8080`, then http://localhost:8080/.
Relative links also support `https://elevate08.github.io/stasisstatellc-website/`
when no custom domain is configured. Once a custom domain is configured, GitHub
redirects the default URL to it; it is not a DNS-independent fallback.
