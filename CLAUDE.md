# By Shakir Project Guidelines

## Brand Name
Always write the brand name as **By Shakir** (exact format).

## Tech Stack
- Framework: Astro 5 (Static Site Generation)
- Styling: Tailwind CSS 4 (via @tailwindcss/vite, NOT @astrojs/tailwind)
- Deployment: Cloudflare Pages
- Animation: CSS-only (or GSAP if DESIGN.md specifies animation level 7+)

## Design System
Read `DESIGN.md` before making ANY visual decisions. It is the single source of truth.
Read `.claude/rules/astro-conversion.md` and `.claude/rules/design-fidelity.md` — these MUST be followed during builds.

## Design Reference
`homepage-reference.html` is the visual reference. `DESIGN.md` is the token source of truth.
During builds, reference both — homepage-reference.html for layout intent, DESIGN.md for exact values.

## Skills
Activate `frontend-design` for any HTML generation tasks.
Use Impeccable commands (/audit, /critique, /polish, etc.) for design refinement.

## Critical Rules
- All internal links MUST end with trailing slash (Astro trailingSlash: "always")
- All text in Dutch unless specified otherwise
- Use je/jij (check DESIGN.md for exceptions)
- All formatting: Dutch conventions (comma decimals, period thousands, EUR before amount with space)
- Date format: "15 maart 2025" (day first, lowercase month)
- Phone format: 06-12345678 or local area code
- Postcode format: 1234 AB
- Never use stock photos for team/project imagery
- Never use "Versturen" as form button text
- Never use aggressive sales language ("Wij zijn de #1...")
- NEVER add max-w-*, mx-auto, or container wrappers not in the reference HTML
- NEVER normalize padding/margin values across sections
- NEVER symmetrize asymmetric layouts from the reference design

## Design Context

**Target audience:** High-net-worth private clients, €50K+ interior projects, decision timeline weeks–months. They browse slowly, comparing quality. NOT price-shoppers. International: NL, Dubai, Spain, Morocco.

**Brand personality (3 words):** Warm · Approachable · Exotic

**Emotional goal (Q4):** "This feels inviting, cozy, clean." Warm luxury — NOT cold minimalism.

**Spatial metaphor:** Penthouse terrace in Dubai, in shadow, warm breeze, Mediterranean pool visible. Travertine + linen + late-afternoon gold light. Liveable luxury, not museum luxury.

**Tone scores:** E4 D3 F7 R10 A6 · Archetype B: Visual Portfolio (Interieurontwerper)

**Color anchor:** `#C9A962` (logo gold) · Background: `#F0E8DC` (warm sand, never white) · Dark: `#2C1F17` (espresso)

**Typography:** Cormorant Garamond 300–700 (headings) + DM Sans 300–500 (body) · perfect-fourth scale · Nav: ALL CAPS, tracked

**Motion:** Dramatic easing `cubic-bezier(0.83, 0, 0.17, 1)` · 1.4s reveals · Image tilt 3D signature on project cards · Parallax hero 0.25×

**Aesthetic references:** Piet Boon (smooth/clean), Best Interiors (modern/editorial), Kolenik (gallery-forward), Lagrand (page transitions, curated)

**Anti-references:** Lux Interieurbouw (commercial/dated), Set Interieur (viewport waste), Laura Hindriks (mobile-only hero), Eric Kuster (broken CTAs)

**Design principles:**
1. Slow is luxury — 1.2–1.8s reveals. Slowness filters out price-shoppers intentionally.
2. Photography is the decoration — no icon libraries, no background patterns, no decorative SVGs.
3. Warmth over whiteness — `#F0E8DC` minimum, never `#FFFFFF` or cool gray.
4. Space signals quality — generous variable section padding, low density (D3).
5. Qualify before converting — no pricing, no urgency, form textarea filters wrong clients.

**Icons:** NONE — F7+R10 luxury threshold. Three inline SVGs for UI indicators only.

**Full context:** See `.impeccable.md` for complete tokens, conversion rules, contrast ratios, and site structure.
