# Domain, email, and public-presence launch

Reviewed October 26, 2026. This checklist records configuration and verification,
not a guarantee of Google Play approval. Both repositories contain static website
assets; keep signing material, credentials, and private app code elsewhere.

## GitHub Pages

| Repository | Source | CNAME / production host |
| --- | --- | --- |
| `Elevate08/stasisstatellc-website` | `main`, `/` | `stasisstate.com` |
| `Elevate08/survivorx-website` | `main`, `/` | `survivorx.stasisstate.com` |

- Make both website repositories public and enable Pages from the source above.
- Publish the reviewed files before requesting Google verification.
- Ensure Settings → Pages shows the matching custom domain before changing DNS.
- Prefer verifying `stasisstate.com` in the GitHub account's Pages settings first;
  publish the account-specific TXT record GitHub supplies. Do not invent its value.
- Enable Enforce HTTPS after GitHub issues each custom-domain certificate.
- Check public HTTPS returns the actual pages without login, geography restrictions,
  redirects to unavailable hosts, or certificate errors.

No custom workflow is needed: branch-based Pages deploys these static files.
To roll back content, publish a reviewed revert of the affected website commit.

## Website DNS to add

Replace conflicting website records only. Preserve mail MX and email TXT records.

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `survivorx` | `elevate08.github.io` |
| CNAME | `www` (optional) | `elevate08.github.io` |

An apex ALIAS/ANAME to `elevate08.github.io` is an alternative to the four A records
if supported. Do not create an ordinary apex CNAME alongside MX/TXT. If using IPv6,
use GitHub's four documented AAAA records and remove stale AAAA records pointing
elsewhere. The subdomain target has no repository path.

Observed before changes: `stasisstate.com` has no A/AAAA answer and
`survivorx.stasisstate.com` does not resolve. DNS changes are left to the owner.

## Email records and delivery

Observed public DNS:

| Record | Existing value | Verification |
| --- | --- | --- |
| MX `stasisstate.com` | `0 mail.ddemail.us` | Published; mailbox delivery untested |
| SPF TXT `stasisstate.com` | `v=spf1 mx a -all` | Published; authorized senders/alignment untested |
| DMARC TXT `_dmarc.stasisstate.com` | `v=DMARC1; p=reject; rua=mailto:dmarc@stasisstate.com` | Published; report destination/alignment untested |
| DKIM TXT `dkim._domainkey.stasisstate.com` | RSA public key published, selector `dkim` | Published; actual message signing untested |

Mail provider confirmed by the owner: self-hosted Mailcow at `mail.ddemail.us`.
Its public IPv4 address resolves; no IPv6 address was returned at review time.

1. Confirm `support@stasisstate.com` and `privacy@stasisstate.com` are active
   mailboxes or aliases with a monitored destination, and that
   `dmarc@stasisstate.com` receives reports.
2. Confirm the provider's outbound servers match the single SPF record. The
   existing `a` mechanism will authorize the website A-record addresses after
   the Pages DNS change. If Mailcow is the only outbound sender and sends directly from the MX
   host, `v=spf1 mx -all` removes that unnecessary authorization. Account for
   any outbound relay or additional sender before changing SPF. Do not copy a
   generic provider's SPF value or publish a second SPF record.
3. DKIM is already published at `dkim._domainkey.stasisstate.com`. Confirm
   Mailcow signs outgoing `stasisstate.com` mail using selector `dkim` and that
   its UI public key matches DNS. If rotated, publish the new public record
   supplied by Mailcow; no private keys belong in website repositories.
4. Keep DMARC aligned with SPF and/or DKIM. Existing `p=reject` can reject
   outgoing support replies if neither authentication method aligns.
5. Send independent inbound tests to both public addresses, then reply from each
   domain address. Inspect received Authentication-Results for SPF, DKIM, DMARC
   passes and matching From-domain alignment; check spam folders and bounces.
6. Request Google's verification email and complete its code challenge. Do not
   mark email verified merely because DNS is present. Never publish codes.

SPF/DKIM/DMARC authenticate mail sent using this domain. Receiving Google's OTP
also needs working MX, a real mailbox or forwarding path, and appropriate filtering.
These records alone do not prove inbound delivery. A port-25 SMTP/TLS probe
from the agent environment timed out; this does not establish whether the mail
server is unreachable from Google or whether this environment blocks SMTP.

Read-only checks on this Linux machine:

```sh
resolvectl query --type=MX stasisstate.com
resolvectl query --type=TXT stasisstate.com
resolvectl query --type=TXT _dmarc.stasisstate.com
resolvectl query --type=TXT dkim._domainkey.stasisstate.com
resolvectl query stasisstate.com
resolvectl query --type=CNAME survivorx.stasisstate.com
```

## Google Play handoff

- [ ] Use `Stasis State LLC` consistently in developer, business verification, store
  listing, and policy records. Verify D-U-N-S, address, and phone through Play
  Console; none are invented in website copy.
- [ ] Verify organization website ownership through Google's requested Search
  Console flow; publish the exact DNS TXT value Google supplies if using DNS.
- [ ] Complete contact email/phone verification in Play Console.
- [ ] Confirm both landing pages display the publisher and working support channels.
- [ ] Confirm https://survivorx.stasisstate.com/privacy.html is public over HTTPS: this is
  the URL opened by the game's Privacy Policy button, and the URL for the Survivor-X
  Play Console privacy policy field (both apps).
- [ ] Confirm https://survivorx.stasisstate.com/terms.html and `/data-deletion.html`
  are public over HTTPS, and that the pointers on stasisstate.com link to them.
- [ ] Reconcile the exact release artifact and Play Games configuration with
  `../survivor-x/app/data-safety.json` and `docs/play/data-safety.md`. No live ads
  are integrated today, despite the free flavor's name `ads`.
- [ ] Review disclosures before adding live ads or new services. Website text
  does not implement app-side consent or Console declarations.

## Official references

- [Google Play User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311)
- [Play Games SDK data disclosure](https://developer.android.com/games/pgs/data-collection)
- [Deleting Play Games data](https://support.google.com/googleplay/answer/9130646)
- [Mailcow DNS and DKIM setup](https://docs.mailcow.email/getstarted/prerequisite-dns/)
- [Gmail sender authentication](https://support.google.com/mail/answer/81126)
- [GitHub custom-domain DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [GitHub domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)

## Local verification

Eight pages were checked in isolated Chromium at 390px and 1440px widths: HTTP
responses, browser errors, local resources, links and fragments, one H1 per page,
visible navigation, and horizontal overflow. All checks passed after fixing the
organization About anchor. Both sitemaps parse as XML. Website files and tracked
histories were checked for common credential patterns before public visibility.
No game source or runtime behavior was changed.
