# REDIRECTS.md
# By Shakir — Redirect Mapping
# Generated: 2026-04-08
# Source: REDIRECTS-SOURCE.md (old site) + CONTENT/sitemap.md (new site)
# Implemented: public/_redirects (Cloudflare Pages)

---

## Mapping Table

| Old URL | New URL | Type | Notes |
|---|---|---|---|
| `/about-us/` | `/about/` | 301 | Slug cleanup — same page, cleaner URL |
| `/completeluxuryinteriors/` | `/services/` | 301 | Original services page → consolidated slug |
| `/completeluxuryinteriors_clone/` | `/services/` | 301 | Duplicate — was indexed, consolidates link equity |
| `/completeluxuryinteriors_clone-2/` | `/services/` | 301 | Duplicate — was nav target, consolidates link equity |
| `/project/rotterdamnetherlands/` | `/projects/villa-mansion-netherlands/` | 301 | Old WordPress CPT slug → new descriptive slug |
| `/project/duplexpenthousebarcelona/` | `/projects/duplex-penthouse-barcelona/` | 301 | Old WordPress CPT slug → new descriptive slug |
| `/project/dubaimarina/` | `/projects/penthouse-dubai-marina/` | 301 | Old WordPress CPT slug → new descriptive slug |
| `/project/antwerpenbelgiumbyshakir/` | `/projects/country-estate-antwerpen/` | 301 | Old WordPress CPT slug → new descriptive slug |
| `/project/project-malaga-spain-3/` | `/projects/beach-house-malaga/` | 301 | Old WordPress CPT slug → new descriptive slug |
| `/luxury/about-us/` | `/about/` | 301 | Broken footer link — /luxury/ prefix error |
| `/luxury/projects/` | `/projects/` | 301 | Broken footer link — /luxury/ prefix error |
| `/luxury/collections/` | `/projects/` | 301 | Broken footer link — /collections/ not in new build |
| `/gallery-category/*` | `/projects/` | 301 | WordPress taxonomy pages — consolidate to portfolio |
| `/project-gallery/*` | `/projects/` | 301 | WordPress CPT thin content — consolidate to portfolio |
| `/shop/` | `/` | 301 | WooCommerce — empty, indexed, no new equivalent |
| `/cart/` | `/` | 301 | WooCommerce — empty, indexed, no new equivalent |
| `/checkout/` | `/` | 301 | WooCommerce — empty, indexed, no new equivalent |
| `/my-account/` | `/` | 301 | WooCommerce — empty, indexed, no new equivalent |
| `/elementor-1867/` | `/` | 301 | Raw Elementor draft — indexed, no new equivalent |

---

## Keep-Exact (no redirect rule needed)

| URL | Reason |
|---|---|
| `/` | Identical on old and new site |
| `/projects/` | Identical slug |
| `/contact/` | Identical slug |

---

## /collections/ — Not in New Build

The old site had `/collections/` as an active gallery grid page. This page was **not rebuilt** in the new Astro site. All inbound links to `/collections/` (and all gallery-category items that previously mapped to it) are redirected to `/projects/` as the nearest equivalent.

Affected rules:
- `/luxury/collections/` → `/projects/`
- `/gallery-category/couches/` → `/projects/` (via splat)
- `/gallery-category/chairs/` → `/projects/` (via splat)
- `/gallery-category/tables/` → `/projects/` (via splat)
- `/gallery-category/accessories/` → `/projects/` (via splat)

If a `/collections/` page is added in a future session, update these rules.

---

## Verification

**No redirect loops:** All destinations (`/`, `/about/`, `/projects/`, `/projects/*/`, `/services/`) are first-party pages with no outbound redirect rules.

**No chains longer than 2 hops:** Every rule is a direct 1-hop 301. No source URL in this table also appears as a destination.

**No redirect to 404:** All destinations verified against `src/pages/` structure. `/collections/` (absent from new build) remapped to `/projects/`.

**Splat rules:** `/gallery-category/*` and `/project-gallery/*` use Cloudflare Pages splat syntax with fixed destinations — no `:splat` passthrough needed.

**Rule order in `_redirects`:** Specific `/luxury/` rules appear before any potential catch-all, ensuring `/luxury/about-us/` correctly resolves to `/about/` and not a generic fallback.
