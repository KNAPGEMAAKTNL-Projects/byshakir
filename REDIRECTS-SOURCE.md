# REDIRECTS-SOURCE.md
# By Shakir — Existing URL Inventory + Proposed Redirect Map
# Source crawled: 2026-04-07 from https://www.byshakir.nl/
# Updated: English URL slugs (language-neutral, universal for NL + international)
# Purpose: 301 redirect planning for new Astro build on Cloudflare Pages

---

## Active Content Pages

| Old URL (byshakir.nl) | Status | New URL | Redirect? |
|---|---|---|---|
| `/` | Active | `/` | — (keep-exact) |
| `/projects/` | Active | `/projects/` | keep-exact — same slug, no redirect needed |
| `/about-us/` | Active | `/about/` | 301 — slug cleanup only |
| `/contact/` | Active | `/contact/` | keep-exact — same slug |
| `/collections/` | Active gallery grid | `/collections/` | keep-exact — same slug, page rebuilt |
| `/completeluxuryinteriors/` | Active (original) | `/services/` | 301 |
| `/completeluxuryinteriors_clone/` | Duplicate — indexed | `/services/` | 301 |
| `/completeluxuryinteriors_clone-2/` | Duplicate — nav target | `/services/` | 301 |

---

## Project Pages

| Old URL | Project Name | New URL | Redirect? |
|---|---|---|---|
| `/project/rotterdamnetherlands/` | Rotterdam / Netherlands | `/projects/villa-mansion-netherlands/` | 301 |
| `/project/duplexpenthousebarcelona/` | Duplex Penthouse Barcelona | `/projects/duplex-penthouse-barcelona/` | 301 |
| `/project/dubaimarina/` | Dubai Marina | `/projects/penthouse-dubai-marina/` | 301 |
| `/project/antwerpenbelgiumbyshakir/` | Country Estate Antwerpen | `/projects/country-estate-antwerpen/` | 301 |
| `/project/project-malaga-spain-3/` | Beach House Malaga | `/projects/beach-house-malaga/` | 301 |

---

## Gallery Category Pages (WordPress taxonomy)

| Old URL | New URL | Notes |
|---|---|---|
| `/gallery-category/bedrooms/` | `/projects/` | Consolidate to portfolio overview |
| `/gallery-category/living-rooms/` | `/projects/` | Consolidate to portfolio overview |
| `/gallery-category/couches/` | `/collections/` | Map to collections if page confirmed |
| `/gallery-category/chairs/` | `/collections/` | Map to collections if page confirmed |
| `/gallery-category/tables/` | `/collections/` | Map to collections if page confirmed |
| `/gallery-category/cinema-walls/` | `/projects/` | Consolidate to portfolio overview |
| `/gallery-category/closets/` | `/projects/` | Consolidate to portfolio overview |
| `/gallery-category/accessories/` | `/collections/` | Map to collections if page confirmed |

---

## Gallery Item Pages (WordPress CPT — thin content)

| Old URL | New URL |
|---|---|
| `/project-gallery/gallery1/` | `/projects/` |
| `/project-gallery/gallery2/` | `/projects/` |
| `/project-gallery/gallery3/` | `/projects/` |
| `/project-gallery/gallery4/` | `/projects/` |
| `/project-gallery/gallery5/` | `/projects/` |
| `/project-gallery/gallery6/` | `/projects/` |
| `/project-gallery/gallery7/` | `/projects/` |
| `/project-gallery/gallery9/` | `/projects/` |
| `/project-gallery/luxury-living-room-1/` | `/projects/` |

---

## Dead / Unused / Duplicate Pages

| Old URL | Issue | Redirect Target |
|---|---|---|
| `/shop/` | WooCommerce — empty, indexed | `/` |
| `/cart/` | WooCommerce — empty, indexed | `/` |
| `/checkout/` | WooCommerce — empty, indexed | `/` |
| `/my-account/` | WooCommerce — empty, indexed | `/` |
| `/elementor-1867/` | Raw Elementor draft, indexed | `/` |

---

## Broken Footer Links (Currently 404)

| Broken URL | Action |
|---|---|
| `/luxury/about-us/` | Redirect to `/about/` |
| `/luxury/projects/` | Redirect to `/projects/` |
| `/luxury/collections/` | Redirect to `/collections/` |

---

## Notes for Implementation

- URL slugs are English (language-neutral) — page content is Dutch
- All new URLs include trailing slash (Astro `trailingSlash: "always"`)
- Redirects implemented via `_redirects` file in Cloudflare Pages
- Submit new sitemap to Google Search Console immediately after launch
- Monitor Search Console for crawl errors 4 weeks post-launch
- The three `/completeluxuryinteriors*` URLs had indexed history; 301 → `/services/` consolidates link equity
- `/projects/` and `/collections/` and `/contact/` are keep-exact — no redirect rules needed for these
