# Stasis State LLC website

Static organization website for Stasis State LLC: product information, support
contacts, privacy disclosures, and data-deletion instructions. GitHub Pages serves
`main` from `/`; no build, dependencies, or application secrets are required.
`.nojekyll` disables Jekyll processing.

| Purpose | Production URL / contact |
| --- | --- |
| Organization website | https://stasisstate.com/ |
| Privacy policy (also linked inside Survivor-X) | https://stasisstate.com/privacy.html |
| Survivor-X disclosures | https://stasisstate.com/privacy.html#survivor-x |
| Data controls | https://stasisstate.com/data-deletion.html#survivor-x |
| Game website | https://survivorx.stasisstate.com/ |
| Player support | support@stasisstate.com |
| Privacy requests | privacy@stasisstate.com |

These are intended production URLs. Verify DNS, TLS, and mailbox delivery before
Google verification or an app submission. Website copy is not evidence that Google
has verified the organization or approved an app.

## Survivor-X source of truth

Checked October 26, 2026 against `../survivor-x` commit `75992ef5`, including
`app/data-safety.json`, `docs/play/data-safety.md`, `app/build.gradle.kts`, manifests,
backup rules, `PlayGames.kt`, `MainActivity.kt`, analytics and distribution settings.

- Free: `com.stasisstate.survivorx.free`; Premium: `com.stasisstate.survivorx.paid`.
- No live advertising SDK, advertising-ID access, Firebase, remote analytics, or
  in-app billing SDK. Advertising flows are local placeholders today.
- No publisher game accounts/backend. Saves and run analytics are local.
  Analytics defaults off in release and on in debug.
- Play Games saved-game support is present but inactive with default blank
  `playGamesAppId`. When enabled, disclose player identity, saved progression and
  lifetime stats, and Google's SDK analytics and diagnostics.
- Android Auto Backup is enabled independently of Play Games. Analytics and
  per-install IDs are excluded; mid-run saves are excluded from cloud backup.
- Premium imports progress locally from the free edition; each app keeps its copy.

The game's Data Safety declaration anticipates a published build with Play Games
enabled. Confirm the actual release build before submitting the Console form.
Keep `privacy.html#survivor-x` and `../survivorx-website/privacy.html` aligned whenever
SDKs, permissions, data flows, backups, or monetization change. Family Plates was
not audited against its application source in this task.

## Publishing and verification

See [LAUNCH.md](LAUNCH.md) for exact DNS records, email checks, Pages setup,
remaining external steps, and official references.

Preview: `python -m http.server 8080`, then http://localhost:8080/.
Relative links also support `https://elevate08.github.io/stasisstatellc-website/`
when no custom domain is configured. Once a custom domain is configured, GitHub
redirects the default URL to it; it is not a DNS-independent fallback.
