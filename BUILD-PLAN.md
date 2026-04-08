# BUILD-PLAN.md
# By Shakir — Session 3 Build Plan
# Date: 2026-04-08
# Tone scores: E4 D3 F7 R10 A6
# Sources: DESIGN.md, .impeccable.md, layout-direction.md, REPO-STACK.md,
#          ARCHETYPE-FINAL.md, selection-guide.md, component-catalog.md,
#          effects-library.md, visual-craft-library.md, competitor-reference/*.html

---

## Repo Stack

### Layer 1 — Structure: Custom HTML (Astro-native)

| Field | Value |
|---|---|
| Repo | None — custom HTML in `.astro` files |
| URL | N/A |
| What it provides | All page layouts, section structures, grid patterns, typography hierarchy, spacing logic |
| Astro compatibility | **A** (native — no islands, no framework runtime) |
| Install | `npm create astro@latest` + `npm install tailwindcss @tailwindcss/vite` |
| JS cost | 0 KB |

**Why custom:** No pre-built library covers F7 + D3 + R10 simultaneously. The luxury editorial tier requires hand-crafted asymmetric layouts, variable section padding, and full-bleed photography. This is a documented gap in the repo routing table.

**Specific features used:**
- Full-bleed sections with constrained text columns (max 65ch)
- Asymmetric image+text splits (7:5, 60:40)
- Variable section padding via `clamp()` — every section different
- Selective max-width constraints (not on every section)
- CSS Grid for all layout structures
- `@theme` block in global.css for all design tokens

---

### Layer 2 — Animation: galaxy (CSS effects) + GSAP (targeted)

**galaxy:**

| Field | Value |
|---|---|
| Repo | galaxy |
| URL | github.com/SvelteKit/galaxy |
| What it provides | CSS hover effects, transforms, creative visual utilities |
| Astro compatibility | **A** (CSS-only, zero JS runtime) |
| Install | `npm install galaxy` (CSS import) |
| JS cost | 0 KB |

**Specific features:** Project card hover effects, section transition decoratives, image treatments. Only restrained, clean effects used (F7 filter applied — no playful/bouncy effects).

**GSAP:**

| Field | Value |
|---|---|
| Repo | GSAP |
| URL | gsap.com |
| What it provides | ScrollTrigger scroll reveals, SplitText headline animation, portfolio grid stagger |
| Astro compatibility | **A** (direct ESM import) |
| Install | `npm install gsap` |
| JS cost | ~47 KB |

**Specific features:**
1. `ScrollTrigger` — portfolio card stagger reveal (100ms per card)
2. `SplitText` — hero headline word-by-word reveal (1.4s, 100ms/word)
3. Hero video parallax (CSS `animation-timeline: scroll()` preferred; GSAP fallback for Firefox)

**GSAP justified:** 3+ exclusive effects confirmed. Below this threshold, GSAP would not be loaded.

---

### Layer 3 — Interactive: melt-ui (Svelte island)

| Field | Value |
|---|---|
| Repo | melt-ui |
| URL | melt-ui.com |
| What it provides | Form primitives (accessible), lightbox/dialog, service card selector |
| Astro compatibility | **C** (Svelte island — lighter than React) |
| Install | `npm install @melt-ui/svelte` + `npx astro add svelte` |
| JS cost | ~15 KB (Svelte runtime) |

**Specific features:**
- Contact form: accessible inputs, validation, select dropdown for project type
- Portfolio lightbox: dialog component for full-screen project images
- Service card selector: Pattern C radio cards (visual card selection, not radio buttons)

---

### Layer 4 — Decorative: Skip

| Field | Value |
|---|---|
| Decision | No decorative library |
| Why | Photography IS the decoration (design principle #2). Adding pattern textures would compete with portfolio photography. The restraint IS the luxury signal. |
| Exception | SVG grain texture and topographic lines are hand-coded inline — no library needed. |

---

### Layer 5 — Specific Purpose: ssgoi + uhugrid

**ssgoi:**

| Field | Value |
|---|---|
| Repo | ssgoi |
| URL | github.com/ssgoi |
| What it provides | Cinematic cross-fade page transitions |
| Astro compatibility | **C** (Astro-supported, ViewTransitions API) |
| Install | `npm install ssgoi` |
| JS cost | ~8 KB |

**Specific feature:** Cross-fade transition on portfolio overview → project detail navigation. Lagrand-style "premium app" feeling praised in competitor analysis.

**uhugrid:**

| Field | Value |
|---|---|
| Repo | uhugrid |
| URL | github.com/uhugrid |
| What it provides | CSS masonry/mosaic grid layouts |
| Astro compatibility | **B** (CSS utility classes, framework-agnostic) |
| Install | `npm install uhugrid` (CSS import) |
| JS cost | 0 KB |

**Specific feature:** Portfolio grid masonry with varying card heights. CSS `columns` property (not CSS Grid or Flexbox) for true masonry behavior. Featured card spans double height.

---

### Total JS Budget

| Component | KB |
|---|---|
| GSAP (ScrollTrigger + SplitText) | ~47 KB |
| Svelte runtime (melt-ui) | ~15 KB |
| ssgoi (page transitions) | ~8 KB |
| Image tilt (vanilla JS) | ~3.5 KB |
| **Total** | **~73.5 KB** |

Within Archetype B allowance. LCP target: < 1.5s (Astro SSG, no client-side hydration for structure).

---

## Layout Patterns

### Pattern 1: Full-Bleed Video Hero (Bottom-Left Anchored)

**Source:** layout-direction.md + Kolenik competitor analysis
**Applies to:** Homepage hero section

```
┌──────────────────────────────────────────────────────────┐
│  [LOGO]                    PROJECTS · SERVICES · CONTACT  │  ← transparent nav
│                                                           │
│                   [VIDEO — full bleed, 100dvh]            │
│                                                           │
│                   ████████████████████████████            │  ← gradient overlay
│                                                           │
│  [OVERLINE] Tiel · Dubai · Barcelona · Malaga            │
│  [H1] Luxury Interiors.                                   │
│       Made to Be Lived In.                                │
│  [CTA] Begin a Conversation                               │
│  [MICROCOPY] No obligation · Personal response within 24h │
└──────────────────────────────────────────────────────────┘
```

**Grid:** No grid — absolutely positioned text over full-bleed video
**Text column:** Left-aligned, bottom-anchored, `max-width: 55vw` desktop, full-width mobile
**Breakpoints:** Content column switches to full-width below 768px

---

### Pattern 2: Asymmetric Masonry Portfolio Grid (3-Column)

**Source:** layout-direction.md + Best Interiors competitor (4:5 portrait cards)
**Applies to:** Homepage portfolio section, /projects/ overview

```
Desktop (3 columns):
┌─────────────────────┐  ┌────────────┐  ┌────────────┐
│                     │  │            │  │            │
│   FEATURED CARD     │  │  Card 02   │  │  Card 03   │
│   (Villa NL)        │  │            │  │            │
│   spans 2 rows      │  ├────────────┤  └────────────┘
│                     │  │  Card 04   │  ┌────────────┐
└─────────────────────┘  │            │  │  Card 05   │
                         └────────────┘  └────────────┘
```

**Grid:** `columns: 3` (uhugrid masonry) → `columns: 2` tablet → `columns: 1` mobile
**Card aspect ratio:** 4:5 portrait default, featured card double height
**Column gap:** `clamp(0.875rem, 1.5vw, 1.5rem)`

---

### Pattern 3: 7:5 Asymmetric Split (Image + Text)

**Source:** layout-direction.md + Kolenik left-image/right-text pattern
**Applies to:** Homepage about section, inner page headers

```
Desktop:
┌────────────────────────────┐  ┌─────────────────────┐
│                            │  │                     │
│   PORTRAIT IMAGE           │  │  OVERLINE           │
│   (full section height)    │  │  "Your home should  │
│                            │  │   feel like you."   │
│   7 columns                │  │  [Body text]        │
│                            │  │  [Link CTA]         │
│                            │  │  5 columns          │
└────────────────────────────┘  └─────────────────────┘
```

**Grid:** `grid-template-columns: 7fr 5fr; gap: clamp(2rem, 4vw, 5rem)`
**Breakpoints:** Stacks to `1fr` at 768px. Portrait height: `60vw` on mobile.

---

## Effects Selection (v2 — Tone-Score-Driven)

### Tone Score Input
- **Animation score: A6** → range 6-8 in effects library
- **Formality score: F7** → skip playful effects (bounce, rubber-band, comic, elastic)

### A6 Range Unlocks
Per selection guide v2: All of Section 2-3 (fade-up, stagger, scale-reveal, background parallax). Section 4 (offset parallax). Section 5 (GSAP counters). Section 6 (text animations). Section 7 (image hovers).

### Selected Effects (Cross-Referenced with DESIGN.md §10-11)

| # | Effect | Section | CSS or GSAP | Duration | Effects Library Ref |
|---|---|---|---|---|---|
| 1 | Hero entrance keyframe | Hero | CSS `@keyframes` | 1.6s, delay 0.35s | §2 (page-load variant) |
| 2 | Hero video parallax | Hero | CSS `animation-timeline: scroll()` | Ambient | §3 (background parallax) |
| 3 | Scroll scale-reveal | All inner sections | CSS + IntersectionObserver | 1.4s | §2 (scale reveal 0.96→1) |
| 4 | Portfolio grid stagger | Portfolio | GSAP ScrollTrigger | 100ms per card | §2 (stagger reveal) |
| 5 | Hero headline word split | Hero | GSAP SplitText | 1.4s, 100ms/word | §6 (text animation) |
| 6 | Image hover tilt (3D) | Portfolio cards | Vanilla JS | 0.6s return | §7 (image hover) |
| 7 | Image hover scale | Portfolio cards | CSS | 0.7s, 1.03× | §7 (image hover) |
| 8 | Overlay slide-up | Portfolio cards | CSS | 0.55s | §7 (overlay reveal) |
| 9 | Nav glassmorphism | Navigation | CSS transition | 0.6s | §2 (state transition) |
| 10 | Page transitions | All pages | ssgoi (ViewTransitions) | 1.0s cross-fade | §8 (page transitions) |

### F7 Formality Filter (Excluded)

- Bounce / elastic easing — too playful for F7
- Rubber-band overscroll — gaming register
- Comic-style pop-in — wrong aesthetic
- Horizontal scroll sequences — too complex for A6 (A9+ territory)
- Reading progress bar — editorial blog pattern, not portfolio
- Sticky pinning sections — not needed for this page structure

### Easing Consistency Check

All effects use `--ease: cubic-bezier(0.83, 0, 0.17, 1)` (dramatic). This matches DESIGN.md §10 interaction vocabulary. Duration baselines: 1.4s reveals / 0.7s hover / 1.0s page transitions.

---

## Visual Craft Elements (v2 — Tone-Score-Driven)

### Tone Score Input
- **Richness score: R10** → range 7-10: all elements available, 4-6 per page
- **Formality score: F7** → geometric/structured only (no organic blobs, no wave dividers, no hand-drawn shapes)

### Selected Elements (from DESIGN.md §7)

| # | Element | Craft Library Ref | Page Section | Palette Mapping |
|---|---|---|---|---|
| 1 | SVG Grain Texture (feTurbulence) | §1.5 | Hero, About, CTA (dark sections) | Monochrome, `opacity: 0.27` on dark `#2C1F17` |
| 2 | Gold Horizontal Rule | Custom (40px × 1px) | Above overlines in About, CTA sections | `background: var(--c-gold)` → `#C9A962` |
| 3 | Gold Period After Headings | Custom CSS `::after` | All major section H2s | `color: var(--c-gold)` → `#C9A962` |
| 4 | Topographic Gold Lines (3 paths) | §1.1 (layered topographic) | CTA section background | `stroke: #C9A962`, opacity 4% (barely visible) |
| 5 | Oversized Step Numbers | Custom typography | Process section | Cormorant Garamond 300, `color: var(--c-gold)`, `--t-3xl` |
| 6 | Hero Gradient Overlay | Custom CSS | Hero section | 4-stop `rgba(44,31,23,...)` gradient |

### F7 Formality Filter Applied

**Passed (geometric/structured):**
- Grain texture ✓ (noise pattern — structured randomness)
- Horizontal rules ✓ (line — pure geometry)
- Gold period ✓ (typography micro-detail)
- Topographic lines ✓ (stroked geometric paths)
- Step numbers ✓ (typography-as-decoration)
- Gradient overlay ✓ (linear gradient)

**Rejected (organic/playful — would fail F7):**
- Wave line dividers (§1.1 gentle wave) — organic curves
- Organic blob shapes (§1.2) — too informal
- S-curve flourish (§1.1) — decorative organic
- Blur blobs / ambient mesh (§1.2) — too casual
- Overlapping circles (§1.4) — too playful
- Asymmetric border-radius sections (§2.1) — conflicts with 2px max radius rule

### Element Count Check
6 elements on homepage. Within R10 allowance of 4-6 per page. Restraint maintained — photography is the primary decoration.

---

## Component Sources (v2 — From Repo Stack)

### Decision Order Per Component

For each interactive element: (1) Custom HTML → (2) Framework-agnostic option → (3) Layer 3 repo (melt-ui)

| Component | Source | Layer | client:load? | Justification |
|---|---|---|---|---|
| Navigation (desktop) | Custom HTML + CSS | 1 | No | Static nav links, active state via `aria-current`. Zero JS needed. |
| Navigation (mobile drawer) | Custom HTML + CSS | 1 | No | CSS-only hamburger toggle using `<input type="checkbox">` + sibling selector. No JS needed. Alternatively melt-ui dialog if animation desired. |
| Nav scroll state | Vanilla JS (IntersectionObserver) | 1 | `<script>` inline | ~10 lines. Adds `.is-scrolled` class on scroll > 55px. |
| Contact form | Custom HTML | 1 | No | Native `<form>` with HTML5 validation. Submit to Cloudflare Worker or n8n webhook. |
| Form validation UX | melt-ui form primitives | 3 | `client:visible` | Accessible error states, focus management. Only loads when form scrolls into view. |
| Project type select | Custom HTML `<select>` | 1 | No | Native `<select>` styled with CSS. 5 options — no need for a custom component. |
| FAQ accordion | HTML `<details>/<summary>` | 1 | No | Native, zero JS, accessible by default. Styled with CSS. FAQPage schema via `<script type="application/ld+json">`. |
| Portfolio lightbox | melt-ui dialog | 3 | `client:visible` | Full-screen image viewer for project detail pages. Keyboard-accessible, focus-trapped. |
| Service card selector | Pattern C radio cards (CSS) | 1 | No | `<fieldset>` + `<input type="radio">` styled as visual cards. CSS `:checked` state. Zero JS. |
| Image tilt | Vanilla JS (3.5 KB) | — | `client:idle` | Custom script. `data-tilt` attribute on portfolio cards. Disabled on touch + reduced-motion. |
| Scroll reveals | IntersectionObserver (0.5 KB) | — | `<script>` inline | Firefox fallback for CSS `animation-timeline: view()`. Progressive enhancement. |
| Cookie banner | Custom HTML + localStorage | 1 | `client:load` | Only if Google Analytics chosen. Cloudflare Web Analytics needs no consent. |
| Spam protection | Cloudflare Turnstile | — | `client:visible` | Invisible challenge on contact form. No reCAPTCHA. |
| Page transitions | ssgoi | 5 | Auto (ClientRouter) | Integrated via Astro `<ClientRouter />`. Cross-fade between pages. |
| Portfolio grid | uhugrid | 5 | No | Pure CSS `columns` property. Zero JS. |

### MCP Research Results (Gaps Not Covered by Stack)

**shadcn (56 components available):** Not needed. All interactive elements covered by custom HTML, native elements, or melt-ui. shadcn would add React runtime (~45 KB) for no benefit.

**magicui:** Search failed (API unavailable). Not needed — all animation effects are covered by CSS + GSAP in the repo stack.

**21st.dev inspiration:** 3 hero-with-video patterns reviewed. Layout patterns noted (video as background with overlay) but all are React/Next.js — not directly usable. The layout PATTERN (full-bleed video + bottom-left anchored content) is already specified in layout-direction.md.

---

## Interaction Vocabulary Implementation

### Scroll Behavior: Scale-Reveal (A6 → Measured-Theatrical Hybrid)

**Variant:** `scale(0.96→1) + opacity(0→1)` on scroll entry
**Sections:** All inner sections (portfolio, about, process, testimonials, CTA)
**Duration:** 1.4s with `--ease: cubic-bezier(0.83, 0, 0.17, 1)`
**Stagger:** `.d1` through `.d4` delay classes (0.10s increments), max 4 items

```css
/* CSS custom property */
--ease: cubic-bezier(0.83, 0, 0.17, 1);

/* Reveal class */
.reveal {
  opacity: 0;
  transform: scale(0.96) translateY(10px);
  transition: opacity 1.4s var(--ease), transform 1.4s var(--ease);
}
.reveal.in { opacity: 1; transform: scale(1) translateY(0); }
```

**IntersectionObserver:** `threshold: 0.12`, fires once (`unobserve` after `.in` added).

**Hero entrance:** Separate — uses `@keyframes hero-enter` on page load (1.6s, delay 0.35s). NOT scroll-triggered.

**Hero video parallax:** CSS `animation-timeline: scroll()` at 0.25× speed. Disabled below 768px.

---

### Hover Pattern: Scale + Reveal (Editorial)

**Variant:** Image scales 1.03×, overlay slides up with project location (gold) and title (sand italic)
**CSS code:** See DESIGN.md §5 `.pcard` + `.pcard-overlay` for complete implementation

```css
.pcard:hover .pcard-img { transform: scale(1.03); }           /* 0.7s */
.pcard:hover .pcard-overlay { opacity: 1; transform: translateY(0); }  /* 0.55s */
@media (hover: none) { .pcard-overlay { opacity: 1; transform: none; } }
```

---

### Easing: Dramatic

**CSS custom property:** `--ease: cubic-bezier(0.83, 0, 0.17, 1);`
**Character:** Luxury, theatrical, deliberate — like a heavy linen curtain moving in a breeze.
**Duration baselines:**

| Context | Duration |
|---|---|
| Scroll reveals | 1.4s |
| Hover transitions | 0.7s |
| Overlay slide-up | 0.55s |
| Page transitions | 1.0s |
| Hero entrance | 1.6s |
| Nav scroll state | 0.6s |

---

### Signature Interaction: Image Tilt (3D Perspective ±6°)

**Surfaces:** Portfolio project cards only (1-2 surfaces max per interaction vocabulary rules)
**Implementation:** Vanilla JS, `data-tilt` attribute, `client:idle` loading
**Max rotation:** ±6° (subtle — not a gaming card flip)
**Scale:** 1.02× (lifts slightly)

**Disabled:**
- Touch devices (`hover: none` media query)
- `prefers-reduced-motion: reduce`
- Viewports < 768px

**Code reference:** DESIGN.md §10, REPO-STACK.md §4 (full implementation ~3.5 KB)

---

## Interactive Patterns

### Pattern C: Card Selector (Confirmed)

**Source:** ARCHETYPE-FINAL.md, Session 1 Prompt 4

**Where:** Contact form — project type selection
**What:** 4-5 service options displayed as visual radio cards (not a dropdown, not radio buttons)

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Complete     │  │  Renovation  │  │  Bespoke     │
│  Interior     │  │  & Remodel   │  │  Furniture   │
│              │  │              │  │              │
│  [selected]  │  │              │  │              │
└──────────────┘  └──────────────┘  └──────────────┘
┌──────────────┐  ┌──────────────┐
│  3D Design   │  │  Other       │
│  & Visual    │  │              │
└──────────────┘  └──────────────┘
```

**Data structure:** `<fieldset>` containing `<input type="radio" name="project-type">` elements. Each radio wrapped in a `<label>` styled as a card. CSS `:checked` state applies gold border + subtle background shift.

**Implementation:** Zero JS. Pure HTML radio inputs + CSS styling. The `<select>` dropdown on the contact page is the simplified version; the card selector is for the services page cross-link.

**Dependencies:** None.

---

### Pattern A: Guided Quiz — NOT USED

Rejected. Only appropriate for 15+ services. By Shakir has 4-5 services. A quiz would feel "trades" in character, undermining the luxury register.

### Pattern D: Cost Calculator — NOT USED

Explicitly rejected per client Q5 and DESIGN.md §14. Price-shoppers must self-exclude. A cost calculator would attract exactly the wrong audience.

---

## Anti-Patterns

### From DESIGN.md §15 (SOPs)

- No `opacity: 0` on hero elements — **LCP trap**. Hero poster `<img>` must be visible immediately with `fetchpriority="high"`
- No "Submit" or "Send" alone as button text — use "Send Your Message" or "Begin a Conversation"
- No aggressive sales language — no "We are the best...", "Exclusive offer!", "#1 in..."
- No stock photos for team or projects — own photography only
- No unverifiable social proof — no "1000+ happy clients" without source
- No commanding contact language — no "Call us now!"
- No urgency patterns — no "Contact us today!"

### From Anti-Slop Pipeline

- No uniform section padding — every section has different `clamp()` values (intentional rhythm)
- No symmetric 6/6 grids throughout — always asymmetric splits (7:5, 60:40, etc.)
- No `max-w-7xl mx-auto` wrapper on every section — some sections must be full-bleed
- No centered-everything layout — text is left-aligned on reading axis; only CTA section is centered
- No uniform card heights — portrait cards (4:5) with natural height variation in masonry
- No gradient text — no `bg-clip-text` decoration
- No glassmorphism decoratively — `backdrop-filter: blur()` on nav scroll state ONLY
- No rounded corners > 4px — cards are 2px max; buttons are 2px
- No pill/9999px buttons — rectangular CTAs only
- No identical card layouts repeated in sequence — featured card breaks the grid

### From Client Anti-References

- No pricing anywhere on the site (non-negotiable)
- No bullet point lists above the fold — visitors must slow down
- No stat counter blocks ("234 projects") — wrong emotional register
- No mobile-only hero that clips on desktop — hero must be near-full-viewport
- No transitions under 0.4s for content reveals — fast = cheap
- No body background `#FFFFFF` or cool grays — warm cream `#F0E8DC` range ALWAYS
- No broken CTAs — every button resolves to a real action
- No video carousel with overlay buttons in hero — the video IS the hero
- No ALL CAPS section headings — navigation labels only
- No pop-up forms or lead capture overlays
- No footer with 5+ columns — 2-column max
- No icon libraries of any kind (F7+R10 threshold exceeded)

### Build-Specific Additions

- No `opacity: 0` on hero elements (LCP trap) — hero poster `<img>` with `fetchpriority="high"`, visible immediately
- No uniform `py-*` on 3+ consecutive sections — each section has its own `clamp()` padding-block value
- No centered-everything layout — left-aligned text on reading axis; CTA section is the deliberate exception
- No identical card components across sections — portfolio cards ≠ testimonial cards ≠ process steps
- No `max-w-*`, `mx-auto`, or container wrappers not present in the reference HTML
- No normalizing padding/margin values across sections — varied rhythm is intentional
- No symmetrizing asymmetric layouts from the reference design
