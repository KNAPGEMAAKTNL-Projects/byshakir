# QA Report — Prompt 10: Content + Legal
**Project:** By Shakir  
**Date:** 8 April 2026  
**Auditor:** Claude Code  

---

## Placeholder Check

| Check | Result | Detail |
|---|---|---|
| `grep -r "Lorem" src/` | ✅ PASS | 0 matches |
| `grep -r "placeholder" src/ --include="*.astro"` | ✅ PASS | 2 matches — both legitimate: HTML `placeholder` attribute on textarea (ContactForm.astro:61) and a developer comment (ContactForm.astro:82). Not copy placeholders. |
| `grep -r "TODO" src/ --include="*.astro"` | ⚠️ WARN | 5 matches in `src/components/seo/SchemaLocalBusiness.astro` — all in JS comments, not visible copy. See Schema section below. |
| `grep -r "example.com" src/` | ✅ PASS | 0 matches |

---

## Formatting

| Item | Status | Detail |
|---|---|---|
| Currency format | ✅ N/A | No prices shown (by design — design principle 5) |
| Decimal/thousands separators | ✅ N/A | No numbers to format |
| Date format | ✅ N/A | No dates in user-facing English copy |
| Phone format | ✅ PASS | `+31 344 655 473` — footer and privacy page. Correct international format per CLAUDE.md |
| Postcode format | ✅ PASS | `4005 LE` — footer and privacy page. Correct Dutch format per CLAUDE.md |
| "Prijzen inclusief BTW" | ✅ N/A | No prices shown anywhere |

---

## Legal Compliance

### Mandatory Business Info (Dutch Art. 3:15d BW)

| Requirement | Status | Location |
|---|---|---|
| KvK-nummer | ✅ PASS | `KvK: 11060878` — Footer.astro:37 |
| BTW-nummer | ❌ **MISSING** | Not in footer. TODO in SchemaLocalBusiness.astro:41 notes it is pending Belastingdienst confirmation. Art. 3:15d BW requires this for commercial websites. |
| Vestigingsadres | ✅ PASS | `Gijsbert Stoutweg 8, 4005 LE Tiel, The Netherlands` — Footer.astro:28–31 |
| Telefoonnummer | ✅ PASS | `+31 344 655 473` — Footer.astro:33 |
| E-mail | ✅ PASS | `info@byshakir.com` — Footer.astro:34 |

### Footer Attribution

| Requirement | Status | Detail |
|---|---|---|
| "Gerealiseerd door KNAP GEMAAKT." | ❌ **MISSING** | Not present anywhere in `src/`. Required per project QA checklist. |
| Link to knapgemaakt.nl case study | ❌ **MISSING** | No attribution link exists. |
| `target="_blank" rel="noopener"` on link | ❌ **MISSING** | N/A — attribution absent |
| Text blends with surrounding copy | ❌ **MISSING** | N/A — attribution absent |

### Cookie Compliance

| Requirement | Status | Detail |
|---|---|---|
| Cookie banner required? | ✅ NOT REQUIRED | Site uses Cloudflare Web Analytics (cookieless — no personal data, no cookies). |
| Turnstile functional cookie | ✅ COMPLIANT | One functional cookie, no consent required per Telecommunicatiewet art. 5.3 (necessary for form operation). Documented in cookie-statement. |
| Cookie statement exists | ✅ PASS | `/cookie-statement/` — accurate, up to date (8 april 2026) |

### Privacy

| Requirement | Status | Detail |
|---|---|---|
| Privacy policy exists | ✅ PASS | `/privacy/` in Dutch (AVG requirement) |
| Data collected documented | ✅ PASS | Contact form fields + Turnstile + Cloudflare Web Analytics |
| Why / legal basis | ✅ PASS | Gerechtvaardigd belang (AVG art. 6.1.f) |
| Retention periods | ✅ PASS | 12 months contact data; 7 years financial |
| Rights | ✅ PASS | Inzage, correctie, verwijdering, bezwaar, overdraagbaarheid |
| Contact details in policy | ✅ PASS | info@byshakir.com, +31 344 655 473 |
| Privacy note below form | ✅ PASS | ContactForm.astro:90–92: "Your details will not be shared. Read our privacy policy." |
| Privacy consent checkbox in form | ✅ PASS | ContactForm.astro:67–73 — required checkbox with link to /privacy/ |

---

## Additional Issues

| Issue | Severity | Detail |
|---|---|---|
| Turnstile site key placeholder | 🔴 HIGH | `ContactForm.astro:83` — `data-sitekey="TURNSTILE_SITE_KEY_PLACEHOLDER"`. Spam protection is non-functional until the real Cloudflare Turnstile site key is set. |
| BTW-nummer missing from JSON-LD schema | 🟡 MEDIUM | `SchemaLocalBusiness.astro:41–47` — BTW entry commented out pending Belastingdienst confirmation. Add once number is available. |
| Geo coordinates unverified | 🟡 MEDIUM | `SchemaLocalBusiness.astro:99–104` — centroid of Tiel used. Verify exact pin against Google Maps / Google Business Profile before launch. |
| Google Maps CID commented out | 🟡 MEDIUM | `SchemaLocalBusiness.astro:28` — intentionally omitted (2.7/5 rating). Revisit when rating improves. |
| LinkedIn / Werkspot sameAs pending | 🟢 LOW | `SchemaLocalBusiness.astro:29–30` — add when profiles are live. |

---

## Verdict

## ❌ NEEDS FIXES

### Blocking (must fix before launch)

1. **BTW-nummer missing from footer** — Obtain BTW-nummer from client / Belastingdienst. Add to `Footer.astro` in the `.footer-legal` row alongside the KvK-nummer. Required by Art. 3:15d BW.

2. **"Gerealiseerd door KNAP GEMAAKT." attribution missing** — Add to the bottom of `Footer.astro`. Requirements:
   - Text: `Gerealiseerd door <a href="https://knapgemaakt.nl/project/[slug]/" target="_blank" rel="noopener">KNAP GEMAAKT.</a>`
   - Replace `[slug]` with the actual case study slug once published on knapgemaakt.nl
   - Styling: same size, same color as `.footer-legal` — no visual separation, no emphasis

3. **Cloudflare Turnstile site key is placeholder** — Replace `TURNSTILE_SITE_KEY_PLACEHOLDER` in `ContactForm.astro:83` with the real site key from the Cloudflare Turnstile dashboard. Without this, form spam protection is inactive.

### Non-blocking (before or shortly after launch)

4. **BTW-nummer in JSON-LD schema** — Uncomment and fill `SchemaLocalBusiness.astro:41–47` once confirmed with Belastingdienst.

5. **Verify geo coordinates** — Confirm `latitude: 51.8899, longitude: 5.4395` matches the Google Business Profile pin for `Gijsbert Stoutweg 8, Tiel`.
