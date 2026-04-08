# DESIGN.md — By Shakir Design System
# Version: 1.0 — Session 1 complete
# Date: 2026-04-07
# Rule: When in doubt about layout → reference HTML. When in doubt about values → this file.

---

## 1. Project Identity

**Client:** By Shakir
**Voice file slug:** `luxury-interior`
**Site language:** `en`
**Business type:** Luxury interior design studio — complete home interiors (floors, walls, furniture, 3D visualisation)
**Location:** Tiel, Netherlands · international (Dubai, Barcelona, Malaga, Antwerp)
**Archetype:** B — Visual Portfolio (Interieurontwerper, highest visual refinement variant)
**Primary conversion:** Soft consultation inquiry ("Plan een kennismaking") after portfolio browsing
**Decision timeline:** Weeks to months — high-consideration, €50K+ projects

### Tone Scores

| Dimension | Archetype Default | Adjusted | Reason |
|---|---|---|---|
| Energy | 3 | **4** | Warm, approachable, inviting personality — client Q4 answer |
| Density | 3 | **3** | Spacious terrace metaphor → low density unchanged |
| Formality | 8 | **7** | je/jij addressal, friendly — Q4 "inviting, cozy" |
| Richness | 10 | **10** | Shaded terracotta direction = maximum richness |
| Animation | 5 | **6** | Video hero + 1.5s slow-reveal philosophy — Q3 "warm breeze" |

**Final tone signature: E4 D3 F7 R10 A6**

### Brand Assets

| Asset | Source | File |
|---|---|---|
| Logo | Client provided | `media/logo.svg` (color: #C9A962) |
| Favicon | Client provided | `media/favicon.svg` |
| Hero video | Client provided | `media/hero-optimized-final.mp4` |
| Hero poster | Client provided | `media/hero-poster.webp` |
| Portrait | Client provided | `media/shakir-portrait.webp` |
| Showroom | Client provided | `media/showroom-tiel.webp` |
| Living room | Client provided | `media/living-room-showcase.webp` |
| 3D process | Client provided | `media/3d-design-process.webp` |
| Project photos | Client provided | `media/projects/[5 folders]` |
| Color palette | Derived from logo | Warm gold #C9A962 as anchor |
| Typography | Chosen in design process | Cormorant Garamond + DM Sans |

### Addressal
**je/jij** throughout (informal Dutch). Exception: testimonial quotes may use u/uw if that's how the client wrote them.

### Target Audience
High-net-worth private clients commissioning luxury interior projects (€50K+). Browse on desktop/tablet in a relaxed, considered state. NOT price-shoppers. Decision timeline: weeks to months. International reach (NL, Dubai, Spain, Morocco). They must "slow down and feel the vibe" — not scan and compare.

### Creative Direction (3 sentences)
Warm shaded terracotta luxury — the feeling of standing on a penthouse terrace in Dubai, in the shade, with a Mediterranean pool visible and a warm breeze in the air. The site should feel inviting, cozy, and clean — like a home you'd want to live in, not a cold design museum. Price-shoppers must feel "this isn't for me" and leave; the right client will take their time.

---

## 2. Color System

### Primary Palette

| Role | Variable | Hex | Used On | WCAG on bg | WCAG on dark |
|---|---|---|---|---|---|
| Brand gold / CTA bg | `--c-gold` | `#C9A962` | CTA bg, logo, decorative, accents on dark | 1.85:1 FAIL (never text on light) | 7.10:1 AAA |
| Gold hover | `--c-gold-light` | `#E8C26C` | CTA hover state | — | — |
| Gold active | `--c-gold-dark` | `#745B16` | CTA pressed state | — | — |
| Dark / espresso | `--c-dark` | `#2C1F17` | Dark section bg, body text on light | 13.14:1 AAA | — |
| Footer dark | `--c-dark-alt` | `#1E150D` | Footer bg (distinct from CTA dark) | — | — |
| Body background | `--c-bg` | `#F0E8DC` | Body background, light sections | — | — |
| Surface | `--c-surface` | `#E8DDD0` | Cards, process section, testimonials | — | — |
| Surface elevated | `--c-surface-elevated` | `#FAF7F3` | Form inputs, modals | — | — |
| Terracotta (accessible) | `--c-terracotta` | `#8B5230` | Labels, overlines on light bg | 5.16:1 AA ✓ | 2.54:1 FAIL |
| Terracotta (decorative) | `--c-terracotta-warm` | `#B87856` | LARGE text/overlays on dark ONLY | 2.95:1 FAIL | 4.45:1 large ✓ |
| Body text | `--c-text` | `#2C1F17` | All body text on light surfaces | 13.14:1 AAA | — |
| Muted text | `--c-text-muted` | `#7A756E` | Secondary labels, captions | — | — |
| Text on dark | `--c-text-on-dark` | `#F0E8DC` | Text on dark sections | — | 13.14:1 AAA |
| Muted on dark | `--c-text-muted-dark` | `#CEC4B6` | Secondary text on dark | — | ~6.34:1 AA |
| Border | `--c-border` | `#CEC4B6` | Subtle dividers, input borders | — | — |
| Cool accent | `--c-cool` | `#7AABB8` | Hover on dark sections ONLY | 2.07:1 FAIL | 6.34:1 AA |

### Critical Contrast Rules
- **NEVER** use `#C9A962` gold as text on `#F0E8DC` light backgrounds → 1.85:1 FAIL
- **NEVER** use `#7AABB8` pool blue on any light background → 2.07:1 FAIL
- **NEVER** use `#B87856` warm terracotta as body text → 2.95:1 FAIL on light
- **Gold on dark** `#C9A962` on `#2C1F17` → 7.10:1 AAA ✓ — use freely
- **Dark on gold** `#2C1F17` on `#C9A962` → 7.10:1 AAA ✓ — CTA button text

### Gold Tonal Ramp (HCT h=86.2°, c=40.8)

| Tone | Hex | Usage |
|---|---|---|
| 0 | `#000000` | — |
| 10 | `#2f1800` | Deep reference |
| 20 | `#412e00` | Dark secondary |
| 30 | `#594400` | — |
| 40 | `#745b16` | `--c-gold-dark` pressed state |
| 50 | `#8f742f` | — |
| 60 | `#ab8d47` | — |
| 70 | `#c7a760` | ≈ `#C9A962` anchor |
| 80 | `#e4c27a` | `--c-gold-light` hover |
| 90 | `#ffde94` | Light tint reference |
| 95 | `#ffeca2` | — |
| 99 | `#fff8ad` | — |
| 100 | `#ffffff` | — |

### Section Background Sequence (homepage rhythm)
`#2C1F17 (hero) → #F0E8DC (portfolio) → #E8DDD0 (testimonials) → #2C1F17 (about) → #E8DDD0 (process) → image (showroom) → #2C1F17 (CTA) → #1E150D (footer)`

---

## 3. Typography

### Font Families

| Role | Font | Personality | Variable Axes |
|---|---|---|---|
| Display / Headings | Cormorant Garamond | Old Style Garalde, warm, wide, high contrast | wght |
| Body / UI | DM Sans | Geometric with optical warmth | opsz + wght |

### Google Fonts Embed (production)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=DM+Sans:ital,opsz,wght@0,9,300;0,9,400;0,9,500;0,40,300;0,40,400;0,40,500;1,9,300&display=swap" rel="stylesheet">
```

### CSS Custom Properties
```css
--f-heading: 'Cormorant Garamond', Georgia, serif;
--f-body:    'DM Sans', 'Helvetica Neue', sans-serif;
```

### Type Scale (perfect-fourth, ratio 1.333)

| Token | Value | ~px | Usage | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| `--t-display` | `clamp(3rem, 2rem + 5vw, 7rem)` | 48–112px | Hero headline | 300 | 1.04 | -0.02em |
| `--t-4xl` | `4.2087rem` | ~67px | Display (rare) | 300 | 1.1 | -0.025em |
| `--t-3xl` | `3.1573rem` | ~51px | Section headlines | 300–400 | 1.15 | -0.02em |
| `--t-2xl` | `2.3686rem` | ~38px | Section H2s | 400 | 1.25 | -0.015em |
| `--t-xl` | `1.7769rem` | ~28px | Sub-headings | 400 | 1.35 | -0.01em |
| `--t-lg` | `1.333rem` | ~21px | Card titles, large UI | 300–500 | 1.45 | -0.005em |
| `--t-base` | `1rem` | 16px | Body text | 300–400 | 1.5–1.7 | 0 |
| `--t-sm` | `0.7502rem` | ~12px | Captions, meta | 300–400 | 1.6 | 0.01em |
| `--t-xs` | `0.5628rem` | ~9px | Very small labels | 400–500 | 1.6 | 0.1em |

### Special UI Sizes (DM Sans body)

| Usage | Size | Weight | Transform | Letter-spacing |
|---|---|---|---|---|
| Navigation links | 0.6875rem | 500 | UPPERCASE | 0.15em |
| Section overline | 0.625rem | 500 | UPPERCASE | 0.2em |
| Button text | 0.6875rem | 500 | UPPERCASE | 0.15em |
| CTA microcopy | 0.625rem | 400 | None | 0.07em |
| Footer nav | 0.6875rem | 400 | UPPERCASE | 0.1em |
| Form labels | 0.6875rem | 500 | None | 0 |

### Font Weight Rules
- Hero headings: **300** (expensive-light — the luxury signal)
- Section headings: **400**
- Sub-headings: **400–500**
- Body: **300** (generous body weight = warmth)
- UI/labels/buttons: **500**
- **NEVER 600–800** for headings — that is the trades/construction register

### FOUT Prevention
DM Sans includes `opsz: 9` (reading) and `opsz: 40` (display) optical sizes. Use `font-display: swap` for body, `font-display: optional` for headings if performance-sensitive.

---

## 4. Spacing System

### Section Padding (padding-block)

| Section | URL | Padding-block | Notes |
|---|---|---|---|
| Hero | / | `100dvh` | Full viewport |
| Portfolio grid | / | `clamp(5rem, 5vw + 2.5rem, 9rem)` | Core conversion section — generous |
| Testimonials | / | `clamp(5rem, 5vw + 2rem, 8rem)` | Between portfolio and about |
| About / philosophy | / | `clamp(7rem, 8vw + 2rem, 13rem)` | **Most generous** — dark intimate section |
| Process steps | / | `clamp(4.5rem, 5vw + 1rem, 7.5rem)` | Medium — structured content |
| Showroom teaser | / | N/A (height: clamp(280px, 40vmin, 460px)) | Image section |
| CTA | / | `clamp(6rem, 7vw + 2rem, 10rem)` | Invitation moment |
| Footer | / | `clamp(3rem, 3.5vw + 1rem, 5rem)` | **Most compact** |
| Inner page headers | inner | `min-height: 40–65vh` | Compact dark header |

**Anti-pattern:** NEVER normalize padding values across sections. Varied rhythm is intentional.

### Horizontal Container (padding-inline)
```css
padding-inline: clamp(1.5rem, 5vw, 5rem);
```
Applied to all inner content divs. Some sections are full-bleed (no constraint) — see Grid & Layout.

### Grid Gaps

| Context | Gap |
|---|---|
| Portfolio card grid | `clamp(0.75rem, 1.2vw, 1.125rem)` |
| About 7:5 grid | `clamp(3rem, 5vw, 6rem)` |
| Process steps | `clamp(1.5rem, 3vw, 3rem)` |
| Testimonials | `clamp(1.5rem, 2.5vw, 2.5rem)` |
| Footer columns | `clamp(2rem, 5vw, 7rem)` |

### Component Internal Padding

| Component | Padding |
|---|---|
| Primary button | `16px 32px` |
| Card overlay content | `clamp(1rem, 2vw, 1.75rem)` |
| Process step | None (content-driven) |
| Nav | `clamp(1.25rem, 2.5vh, 1.75rem) clamp(1.5rem, 5vw, 5rem)` |

---

## 5. Component Styles

### Primary Button

```css
.btn-primary {
  font-family: var(--f-body);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 16px 32px;
  border-radius: 2px;          /* NEVER pill/round */
  background: var(--c-gold);   /* #C9A962 */
  color: var(--c-dark);        /* #2C1F17 — 7.10:1 AAA */
  border: none;
  cursor: pointer;
  transition: background 0.7s cubic-bezier(0.83, 0, 0.17, 1);
}
.btn-primary:hover { background: var(--c-gold-light); }
```

**Button text rules:** "Plan een kennismaking" (hero/CTA), "Stuur uw bericht" (contact form). NEVER "Versturen" or "Verzenden".

### Link-style CTA (secondary)

```css
.link-cta {
  font-family: var(--f-body);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--c-gold);
  display: inline-block;
  transition: opacity 0.3s;
}
.link-cta:hover { opacity: 0.65; }
```

### Section Overline

```css
.overline {
  font-family: var(--f-body);
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  line-height: 1;
}
/* On light sections */ .overline-terracotta { color: var(--c-terracotta); }
/* On dark sections */  .overline-gold       { color: var(--c-gold); }
/* On dark sections */  .overline-muted      { color: var(--c-text-muted-dark); }
```

### Gold Rule (decorative)

```css
.gold-rule {
  display: block;
  width: 40px;
  height: 1px;
  background: var(--c-gold);
  margin-bottom: 1.25rem;
}
.gold-rule--center { margin-inline: auto; }
```

### Gold Period (heading signature)

```css
.gold-dot::after {
  content: '.';
  color: var(--c-gold);
}
```
Apply to all major section headings (H2 level) as an ownable brand micro-detail.

### Project Card

```css
.pcard {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 2px;
  transform-style: preserve-3d;
}
/* Image layer */
.pcard-img { position: absolute; inset: 0; transition: transform 0.7s var(--ease); }
.pcard:hover .pcard-img { transform: scale(1.03); }
/* Overlay */
.pcard-overlay {
  position: absolute; inset: 0;
  display: flex; align-items: flex-end;
  padding: clamp(1rem, 2vw, 1.75rem);
  background: linear-gradient(to top, rgba(44,31,23,0.9) 0%, transparent 52%);
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.55s var(--ease), transform 0.55s var(--ease);
}
.pcard:hover .pcard-overlay { opacity: 1; transform: translateY(0); }
/* Mobile: always visible */
@media (hover: none) { .pcard-overlay { opacity: 1; transform: none; } }
```

### Form Fields

```css
.form-field {
  width: 100%;
  font-family: var(--f-body);
  font-size: var(--t-base);
  font-weight: 300;
  padding: 12px 16px;
  background: var(--c-surface-elevated); /* #FAF7F3 */
  border: 1px solid var(--c-border);
  border-radius: 2px;
  color: var(--c-text);
  transition: border-color 0.3s var(--ease);
}
.form-field:focus-visible {
  outline: 2px solid var(--c-gold);
  outline-offset: 0;
  border-color: var(--c-gold);
}
/* Show errors only after submit attempt */
.form-was-submitted .form-field:invalid {
  border-color: #AB0016;
}
```

### Navigation Links

```css
.nav-link {
  font-family: var(--f-body);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--c-text-muted-dark);
  transition: color 0.3s;
}
.nav-link:hover { color: var(--c-text-on-dark); }
.nav-link[aria-current="page"] { color: var(--c-gold); }
```

### Nav Scroll State

```css
.nav { transition: background 0.6s var(--ease), backdrop-filter 0.6s; }
.nav.is-scrolled {
  background: rgba(44, 31, 23, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

---

## 6. Grid & Layout

### Full-Bleed vs Constrained Sections

| Section | Container type | Max-width |
|---|---|---|
| Hero | Full-bleed (no container) | 100vw |
| Portfolio | Constrained | padding-inline: clamp(1.5rem, 5vw, 5rem) |
| About | Constrained | Same |
| Process | Constrained, image bleeds | Same; image: `margin-inline: calc(-1 * padding-inline)` |
| CTA | Constrained | max-width: 680px centered |
| Footer | Constrained | Same padding-inline |

**Anti-pattern:** Never `max-w-7xl mx-auto` on every section. Apply constraints selectively.

### Grid Column Structures

| Section | Desktop | Tablet | Mobile |
|---|---|---|---|
| Portfolio cards | `repeat(3, 1fr)` featured spans 2 rows | `repeat(2, 1fr)` | `1fr` |
| About (7:5) | `7fr 5fr` | `1fr` stacked | `1fr` stacked |
| Process steps | `repeat(4, 1fr)` | `repeat(2, 1fr)` | `1fr` |
| Testimonials | `repeat(3, 1fr)` | `repeat(2, 1fr)` | `1fr` |
| Footer | `1fr auto` | `1fr auto` | `1fr` stacked |
| Services inner pages | Various: 60/40, 40/60, 7fr/5fr, 5fr/7fr | Stacked | Stacked |
| Contact (form/details) | `7fr 5fr` | `1fr` stacked | `1fr` stacked |

### Portfolio Grid Detail

```css
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: clamp(200px, 21vw, 320px);
  gap: clamp(0.75rem, 1.2vw, 1.125rem);
}
.pcard-featured { grid-row: span 2; }
```

### Breakpoints

| Name | Width | Key behavior |
|---|---|---|
| Mobile | 375px | Base, single column |
| Tablet | 768px | 2-col portfolio, nav collapses |
| Desktop | 1024px | About reverses to 1-col if insufficient |
| Large desktop | 1440px | Fluid max clamp hits |

### Process Image Bleed (CSS)

```css
.process-image {
  width: 100%;
  margin-inline: calc(-1 * clamp(1.5rem, 5vw, 5rem));
  /* Width becomes: 100% + 2 × padding = full section width */
}
```

---

## 7. Decorative Elements

### 1. SVG Grain Texture (feTurbulence)
**Source:** Visual craft library §1.5
**Used on:** Hero, About, CTA sections (dark backgrounds only)
**Opacity:** 0.25–0.30 on dark

```html
<svg class="grain" aria-hidden="true">
  <filter id="g-[unique-id]">
    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#g-[unique-id])"/>
</svg>
```
```css
.grain { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.27; }
```
**CRITICAL:** Use a unique filter ID per instance to avoid cross-section rendering conflicts.

### 2. Gold Horizontal Rule
**Used on:** Above overlines in dark sections (About, CTA)
**Code:** See §5 Component Styles `.gold-rule`

### 3. Gold Period After Headings
**Used on:** All major section H2s (portfolio, process, testimonials, CTA)
**Code:** `.gold-dot::after { content: '.'; color: var(--c-gold); }`

### 4. Topographic Gold Lines
**Source:** Visual craft library §1.1 (3 stroked paths)
**Used on:** CTA section background
**Opacity:** 4% — barely visible, subtle precision signal

```html
<svg aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:0.04;" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
  <path d="M0,160 C320,220 640,100 960,180 C1120,220 1280,140 1440,200" stroke="#C9A962" stroke-width="1.5" fill="none"/>
  <path d="M0,200 C360,130 720,270 1080,170 C1260,130 1360,210 1440,180" stroke="#C9A962" stroke-width="1.5" fill="none" opacity="0.6"/>
  <path d="M0,240 C280,300 560,180 840,260 C1120,340 1300,220 1440,260" stroke="#C9A962" stroke-width="1.5" fill="none" opacity="0.35"/>
</svg>
```

### 5. Oversized Step Numbers
**Used on:** Process section
**Code:** Cormorant Garamond 300, `--t-3xl` size, `color: var(--c-gold)`, `letter-spacing: -0.03em`

### 6. Hero Gradient Overlay
```css
background: linear-gradient(
  to top,
  rgba(44, 31, 23, 0.93) 0%,
  rgba(44, 31, 23, 0.58) 32%,
  rgba(44, 31, 23, 0.22) 60%,
  rgba(44, 31, 23, 0.08) 100%
);
```

---

## 8. Icon System

**Decision: NO icon library.** F7 + R10 exceeds the luxury threshold — icons cheapen the aesthetic. See design principle #2: "Photography is the decoration."

**Three inline SVG paths for UI indicators (total ~250 bytes):**

```html
<!-- Arrow right -->
<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<!-- Hamburger menu -->
<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3 4h10M3 8h10M3 12h10" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
</svg>

<!-- Close (×) -->
<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
</svg>
```

References: RH (Restoration Hardware), Poliform, B&B Italia — all operate at this tier with zero icon libraries.

---

## 9. Repo Stack

| Layer | Repo | URL | Astro Compat | Provides |
|---|---|---|---|---|
| 1 — Structure | Custom HTML | Astro .astro files | A (native) | All layouts, sections, grid patterns, typography hierarchy. F7+D3+R10 zone has no matching library. |
| 2 — Animation | galaxy (CSS effects) | github.com/SvelteKit/galaxy | A (CSS-only) | CSS hover effects, transforms, creative visual utilities. Replaces tailwind-animations from previous attempt. |
| 2 — Animation | GSAP (targeted) | gsap.com | A (direct import) | ScrollTrigger scroll reveals, SplitText headline, portfolio grid stagger. ~47KB. Only load if ≥3 GSAP effects confirmed. |
| 3 — Interactive | melt-ui | melt-ui.com | C (Svelte island) | Form primitives (accessible), lightbox/dialog, service card selector (Pattern C radio cards). ~15KB Svelte runtime. |
| 4 — Decorative | Skip | — | — | Photography is the decoration. No decorative library. |
| 5 — Page transitions | ssgoi | github.com/ssgoi | C (Astro-supported) | Cinematic cross-fade page transitions. ~8KB. Lagrand-style "clear loading state" praised by client. |
| 5 — Portfolio grid | uhugrid | github.com/uhugrid | B (CSS utility) | CSS masonry column layout. ~0KB (pure CSS). |

**Total JS budget: ~70KB** (within Archetype B allowance of ~47KB for animation + interactive overhead)

---

## 10. Interaction Vocabulary

### Scroll Behavior (A6 → upper measured / lower theatrical)

```css
/* CSS scroll reveal — scale(0.97→1) + opacity(0→1) via IntersectionObserver */
@media (prefers-reduced-motion: no-preference) {
  .reveal {
    opacity: 0;
    transform: scale(0.96) translateY(10px);
    transition:
      opacity 1.4s cubic-bezier(0.83, 0, 0.17, 1),
      transform 1.4s cubic-bezier(0.83, 0, 0.17, 1);
  }
  .reveal.in { opacity: 1; transform: scale(1) translateY(0); }
  .reveal.d1 { transition-delay: 0.10s; }
  .reveal.d2 { transition-delay: 0.20s; }
  .reveal.d3 { transition-delay: 0.30s; }
  .reveal.d4 { transition-delay: 0.40s; }
}
```

**IntersectionObserver setup:**
```js
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
```

**Hero entrance** (NOT scroll-reveal — uses page-load keyframe):
```css
.hero-content {
  animation: hero-enter 1.6s cubic-bezier(0.83, 0, 0.17, 1) 0.35s both;
}
@keyframes hero-enter {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

**Hero video parallax** (0.25× scroll speed, disabled < 768px):
```css
@media (prefers-reduced-motion: no-preference) {
  .hero-video {
    animation: parallax-hero linear;
    animation-timeline: scroll();
    animation-range: 0% 100%;
  }
}
@keyframes parallax-hero {
  from { transform: translateY(0); }
  to   { transform: translateY(-15%); }
}
```

### Hover Pattern: Scale + Reveal (Editorial)
Image scales 1.03×, overlay slides up with project location (gold) and title (sand italic).
See §5 Component Styles `.pcard-overlay` for full CSS.

### Easing Personality: Dramatic
```css
--ease: cubic-bezier(0.83, 0, 0.17, 1);
```
Applied globally as the single project easing. Duration baselines: 1.4s reveals / 0.7s hover / 1.0s page transitions.

**Character:** Luxury, theatrical, deliberate — like a heavy linen curtain moving in a breeze. Starts slow, commits deliberately, ends with purpose.

### Signature Interaction: Image Tilt (3D Perspective ±6°)

Applied to all portfolio project cards (`data-tilt` attribute). Cursor-responsive `rotateX`/`rotateY`, loaded `client:idle`, ~3.5KB.

```js
if (window.matchMedia('(hover: hover)').matches &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left)  / r.width  - 0.5;
      const y = (e.clientY - r.top)   / r.height - 0.5;
      card.style.transform =
        `perspective(1000px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = `transform 0.6s cubic-bezier(0.83, 0, 0.17, 1)`;
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}
```

**Disabled:** touch devices + `prefers-reduced-motion`.
**Max rotation:** ±6° — subtle, not a gaming card flip.

---

## 11. Animation Specification

**Animation level: 6/10** (upper measured / lower theatrical)

| Effect | Section | Tool | Duration | Notes |
|---|---|---|---|---|
| Hero entrance keyframe | Hero | CSS `@keyframes` | 1.6s, delay 0.35s | Page-load only — NOT scroll-reveal |
| Hero video parallax | Hero | CSS `animation-timeline: scroll()` | Ambient | 0.25× scroll speed, disabled mobile |
| Scroll scale-reveal | All inner sections | IntersectionObserver + CSS | 1.4s | 0.96 → 1 scale + opacity |
| Portfolio grid stagger | Portfolio | GSAP ScrollTrigger | 100ms per card | Max 4 staggered items |
| Hero headline word split | Hero | GSAP SplitText | 1.4s, 100ms/word | Production build only |
| Image hover (tilt) | Portfolio cards | Vanilla JS | 0.6s return | data-tilt attribute |
| Image hover (scale) | Portfolio cards | CSS | 0.7s | 1.03× on card img |
| Overlay slide-up | Portfolio cards | CSS | 0.55s | Paired with scale |
| Nav glassmorphism | Nav | CSS transition | 0.6s | On scroll > 55px |
| Page transitions | All pages | ssgoi | 1.0s | Cross-fade via ViewTransitions API |

**Performance Budget:**

| Component | KB |
|---|---|
| GSAP (full) | ~47 KB |
| Svelte runtime (melt-ui) | ~15 KB |
| ssgoi (page transitions) | ~8 KB |
| Image tilt (vanilla JS) | ~3.5 KB |
| **Total JS** | **~73.5 KB** |

LCP target: **< 1.5s** — hero poster `<img>` with `fetchpriority="high"`, video loads after.

### Reduced Motion Fallback

```css
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  .hero-content { animation: none; opacity: 1; }
  [data-tilt] { transform: none !important; }
}
```

---

## 12. CTA Architecture

### Primary Conversion Path

| CTA | Text | Location | Destination | Urgency |
|---|---|---|---|---|
| Hero | "Plan een kennismaking" | Hero, bottom-left | /contact/ | None |
| Portfolio footer | "Alle projecten bekijken" | Below portfolio grid | /projects/ | None |
| About | "Meer over Shakir" | About section | /about/ | None |
| CTA section | "Plan een kennismaking" | Centered dark section | /contact/ | None |

**Microcopy (every CTA):** "Vrijblijvend · Persoonlijk contact binnen 24 uur"

### Secondary Contact Method

WhatsApp — "App ons direct" in footer only (no icon, link-cta style).
Phone: available on contact page only.
**No sticky phone bar** — that is Archetype A (urgent services). Not appropriate here.

### Contact Form Structure (single-step, qualification-led)

```
Field 1: Naam              — text, required
Field 2: E-mailadres       — email, required
Field 3: Telefoonnummer    — tel, OPTIONAL (+275% capture vs required per conversion patterns SOP)
Field 4: Type project      — select, required:
                             [ Volledig interieur | Renovatie & verbouwing | Meubels op maat | 3D Ontwerp & Visualisatie | Anders ]
Field 5: Omschrijf je project — textarea, required, 4–5 rows, generous placeholder
Spam:    Cloudflare Turnstile (invisible) + honeypot input field (absolute positioned off-screen)
Submit:  "Stuur uw bericht" — NEVER "Versturen"
Privacy: "Uw gegevens worden niet gedeeld." + link to /privacy/
```

**No multi-step form.** Multi-step boosts volume; By Shakir needs quality filtering. The textarea IS the qualification mechanism — clients who won't describe their project are not the target client.

---

## 13. Trust Signals

**Priority ranking (highest to lowest):**

| Rank | Signal | Source | Placement | Status |
|---|---|---|---|---|
| 1 | Portfolio depth | Own project photography | Homepage portfolio grid + project detail pages | ✓ 5 projects with folders |
| 2 | Named international project locations | Project names | Portfolio card overlays, hero overline | ✓ Implemented |
| 3 | Google Reviews | Client-provided screenshots in /testimonials/ | Homepage testimonials section, about page | ⚠️ Quotes need transcription |
| 4 | 3D Design process explanation | Process section | Homepage + /services/3d-design/ | ✓ Implemented |
| 5 | Founder portrait + personal story | shakir-portrait.webp | About section, /about/ hero | ✓ Implemented |
| 6 | Press/publication logos | Not available | N/A | ✗ Not gathered yet |

**Testimonials — real reviewer names (from /testimonials/ screenshots):**
- Alex Kelderman (Local Guide, 5★, 3 years ago)
- Ben van der Tang (5★)
- Stijny Van Der Linden (5★, 5 years ago)
- TODO: Transcribe exact quote text before launch

---

## 14. Pricing Display

**Decision: No pricing anywhere on the site.**

This is non-negotiable — confirmed directly from client Q5: "Cheap people, wanting to quickly check price and move on" must self-exclude.

**Instead:** A qualification qualifier near the contact CTA on the services page (if needed):
*"By Shakir werkt aan exclusieve projecten in Nederland en internationaal. Neem contact op om te ontdekken of uw project past bij onze aanpak."*

BTW: Not mentioned. Luxury B2C services typically present prices inc. BTW or not at all.

---

## 15. Anti-Patterns (NEVER DO)

### From SOPs

- No `opacity: 0` on hero elements — LCP trap. Hero poster `<img>` visible immediately with `fetchpriority="high"`
- No "Versturen" as button text — use "Stuur uw bericht" or "Plan een kennismaking"
- No aggressive sales language — no "Wij zijn de beste...", "Exclusief aanbod!", "#1 in..."
- No stock photos for team or projects — own photography only
- No unverifiable social proof — no "1000+ tevreden klanten" without source
- No English phrases where Dutch is expected — all copy is Dutch (URL slugs stay English)
- No "bel ons maar even" — too commanding, undermines the luxury register
- No "Neem vandaag nog contact op!" — American urgency pattern

### From Anti-Slop Pipeline

- No uniform section padding — every section has different `clamp()` values
- No symmetric 6/6 grids throughout — always asymmetric splits (7:5, 60:40, etc.)
- No `max-w-7xl mx-auto` wrapper on every section — some sections must be full-bleed
- No centered-everything layout — text is left-aligned on reading axis; only CTA section is centered (deliberate exception)
- No uniform card heights — portrait cards (4:5) with natural height variation
- No gradient text — no `bg-clip-text` decoration
- No glassmorphism decoratively — backdrop-blur on nav scroll state ONLY
- No rounded corners > 4px — cards are 2px max; buttons are 2px
- No pill/9999px buttons — rectangular CTAs only
- No identical card layouts repeated in sequence — featured card breaks the grid

### From Client Anti-References

- No pricing anywhere on the site (Q5)
- No bullet point lists above the fold — visitors must slow down
- No stat counter blocks ("234 projecten") — wrong emotional register
- No mobile-only hero that clips on desktop — hero must be near-full-viewport
- No transitions under 0.4s for content reveals — fast = cheap
- No body background `#FFFFFF` or cool grays — warm cream `#F0E8DC` range ALWAYS
- No broken CTAs — every button resolves to a real action
- No video carousel with overlay buttons in hero — the video IS the hero
- No ALL CAPS section headings — navigation labels only
- No pop-up forms or lead capture overlays
- No footer with 5+ columns — 2-column max
- No icon libraries of any kind (F7+R10 threshold exceeded)

---

## 16. Dutch UX Requirements

### Number & Currency Formats

| Type | Format | Example |
|---|---|---|
| Currency | EUR [space] amount (comma decimal, period thousands) | EUR 1.500,- |
| Large amount | EUR 50.000,- | Not €50,000 |
| Phone (mobile) | 06-12345678 | Not 06 12345678 |
| Phone (landline) | 0344-123456 | Area code + number |
| Postcode | 1234 AB | Space between digits and letters |
| Date | 15 maart 2025 | Day + lowercase month + year |
| Date range | 15–28 maart 2025 | En dash, no spaces |

### Cookie & Privacy

- **Cloudflare Turnstile** for form spam — privacy-first (no Google reCAPTCHA tracking cookies)
- **Cookie banner:** Required for analytics (Google Analytics / Cloudflare Analytics). Use a minimal Dutch GDPR-compliant banner. Recommended: Klaro or self-built with localStorage.
- **Privacy policy** page at `/privacy/` — required by Dutch AVG/GDPR
- No third-party tracking pixels without consent

### Legal Footer Requirements

- KvK number — must appear in footer (basic legitimacy signal per Consumentenbond)
- Privacy policy link — required
- BTW number — recommended for B2B credibility
- © Copyright year

### Technical Requirements

- All internal links MUST end with trailing slash (Astro `trailingSlash: "always"`)
- Canonical URLs without trailing slash → redirect to trailing slash
- URL slugs: English (language-neutral for international visitors)
- Page content: Dutch (all text)
- `lang="nl"` on `<html>` element

### Typography

- Hyphenation: enabled on body text (`hyphens: auto; lang="nl"`)
- Justified text: NOT recommended (creates rivers in narrow columns)
- Preferred: `text-align: left` with natural line-break ragged right

---

## 17. Design Reference

### Reference Files

| File | Purpose |
|---|---|
| `homepage-reference.html` | **Primary style anchor.** Full homepage layout with all tokens applied. Source of truth for visual decisions. |
| `portfolio-reference.html` | `/projects/` overview + `/projects/[slug]/` detail template. Masonry grid, case study layout, project meta strip. |
| `service-page-reference.html` | `/services/` overview + `/services/3d-design/` sub-page. Alternating sections, 3D design showcase. |
| `about-contact-reference.html` | `/about/` full page + `/contact/` form. Portrait hero, extended bio, 5-field contact form. |
| `location-page-reference.html` | `/projects/dubai/` template (reuse for NL, Spain, Morocco). SEO landing page, filtered project grid. |
| `color-direction.html` | Color palette visual reference. All swatches, contrast matrix, CSS token block. |
| `typography-direction.html` | Font pairing preview. Desktop + mobile previews, scale specimen, compound word test. |

### The Rule
> **When in doubt about layout → reference HTML. When in doubt about values → DESIGN.md.**

The reference HTML files show INTENT. This DESIGN.md shows EXACT VALUES. They must always agree. If they conflict, DESIGN.md takes precedence — fix the reference HTML.

### Supporting Documents (non-HTML)

| File | Purpose |
|---|---|
| `.impeccable.md` | Persistent design brain. Creative context for future sessions. |
| `layout-direction.md` | Section-by-section layout plan. Explains WHY each grid was chosen. |
| `ARCHETYPE-FINAL.md` | Full archetype classification, tone scores, conversion requirements. |
| `CREATIVE-DIRECTION.md` | Feeling interview extraction. Color direction, typography direction, motion philosophy. |
| `REPO-STACK.md` | Full library stack with Astro compatibility notes and interaction vocabulary. |
| `COMPETITORS.md` | 10 competitor analyses with ratings and deep design breakdown (top 3 HTML-analyzed). |
| `SITEMAP-DRAFT.md` | Complete page inventory, priorities, redirects planning. |
| `REDIRECTS-SOURCE.md` | All old WordPress URLs mapped to new Astro URLs. |
