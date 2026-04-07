# layout-direction.md
# By Shakir — Homepage Layout Direction
# Date: 2026-04-07
# Sources: .impeccable.md + ARCHETYPE-FINAL.md + REPO-STACK.md + competitor HTML analysis + MCP inspiration
# This is a plan document. HTML reference is built in Prompt 8.

---

## Hero Approach

**Decision: Full-Bleed Video with Bottom-Left Anchored Content**

The hero is a full-viewport (`100dvh`) autoplay muted video background. Content is NOT centered — it is left-aligned and anchored to the lower-left quarter of the viewport. This creates maximum visual impact from the video while anchoring the reading axis to the left (natural scan entry point).

Rationale:
- We have `hero-optimized-final.mp4` + `hero-poster.webp` — production-ready assets. The video hero is already solved.
- None of the 10 researched competitors use video as their hero. This is a genuine differentiator in the Dutch luxury interior market.
- Centering the hero text was rejected by the client ("feels weird on PC" — feedback on Laura Hindriks). Bottom-left positioning avoids the centered-everything anti-pattern.
- The bottom-left anchor is the cinematic approach: like a film frame, most of the view is the visual, and the text appears at the reading axis entry point.

**Hero structure:**
```
┌──────────────────────────────────────────────────────────┐
│  [LOGO]                    PROJECTEN · DIENSTEN · CONTACT │  ← transparent nav, backdrop-blur on scroll
│                                                           │
│                   [VIDEO — full bleed]                    │
│                                                           │
│                   ████████████████████████               │
│                   ████████████████████████               │  ← gradient overlay: dark → transparent up
│                                                           │
│  [OVERLINE] Tiel · Dubai · Barcelona · Marrakech         │
│  [H1] Ruimtes die voelen                                  │
│       als thuis.                                          │
│  [BODY] By Shakir ontwerpt...                             │
│  [CTA] Plan een kennismaking                              │
│  [MICROCOPY] Vrijblijvend · Binnen 24 uur contact        │
└──────────────────────────────────────────────────────────┘
```

**Technical:**
- Video: `<video autoplay muted loop playsinline>` with `poster="hero-poster.webp"` for instant LCP
- `fetchpriority="high"` on poster `<img>` tag (not CSS background) to satisfy LCP < 1.5s
- Nav: `position: fixed; backdrop-filter: blur(12px)` on scroll (Kolenik pattern, confirmed via competitor HTML)
- Gradient overlay: `linear-gradient(to top, rgba(44,31,23,0.92) 0%, rgba(44,31,23,0.4) 45%, transparent 75%)`
- Hero content column: `max-width: 55vw` on desktop, full-width on mobile, `padding-inline-start: clamp(1.5rem, 5vw, 6rem)`

---

## Section Layout Decisions

### Section 1 — Hero
*(described above)*

| Attribute | Value |
|---|---|
| Background | Video + dark gradient overlay |
| Height | `100dvh` |
| Text column | Left-aligned, bottom-anchored, max-width 55vw |
| Grid | No grid — absolutely positioned text over full-bleed video |
| GSAP role | SplitText reveal on hero H1 (words fade up, 1.4s, 100ms stagger per word) |
| Repo | Custom HTML — no library handles full-bleed video hero at F7+R10 |

---

### Section 2 — Portfolio Grid
*Background: `#F0E8DC` (warm sand)*

**Layout: Asymmetric masonry, 3-column desktop**

The grid is not uniform. The first card is a FEATURE card — wider and taller. Remaining 4 cards fill the masonry naturally.

```
Desktop:
┌──────────────────────────────────────────────────────────┐
│  Geselecteerde projecten                                  │  ← section header, left-aligned
│  Elk interieur vertelt een verhaal.                       │
│                                                 [count]   │  ← "5 projecten" right-aligned
│                                                           │
│  ┌─────────────────────┐  ┌────────────┐  ┌────────────┐ │
│  │                     │  │            │  │            │ │
│  │   FEATURED CARD     │  │  Card 02   │  │  Card 03   │ │
│  │   (Villa NL)        │  │ (Barcelona) │  │  (Dubai)  │ │
│  │   2/3 height        │  │            │  │            │ │
│  │                     │  ├────────────┤  └────────────┘ │
│  └─────────────────────┘  │  Card 04   │  ┌────────────┐ │
│                            │ (Antwerpen) │  │  Card 05  │ │
│                            │            │  │  (Malaga)  │ │
│                            └────────────┘  └────────────┘ │
└──────────────────────────────────────────────────────────┘
```

| Attribute | Value |
|---|---|
| Background | `#F0E8DC` |
| Padding block | `clamp(6rem, 5vw + 3rem, 10rem)` |
| Grid | CSS `columns: 3` masonry (uhugrid utility classes) |
| Card aspect ratio | `4/5` portrait (confirmed by Best Interiors competitor data) |
| Featured card | Double height, first column — Villa Mansion Netherlands |
| Column gap | `clamp(0.875rem, 1.5vw, 1.5rem)` fluid |
| Card hover | Scale + Reveal: image 1.03×, overlay slides up (project location + type) |
| Signature | 3D perspective tilt ±6° on all cards (cursor-responsive, client:idle) |
| GSAP role | Staggered reveal: each card scale-reveal (0.95→1, opacity 0.4→1), 100ms stagger, max 4 items |
| Repo | Custom HTML structure + uhugrid columns + galaxy hover effects |
| Tablet | `columns: 2` |
| Mobile | `columns: 1` |

**Card overlay spec:**
- Background: `linear-gradient(to top, rgba(44,31,23,0.88) 0%, transparent 50%)`
- Project location: `var(--font-body)`, uppercase, tracked, `var(--color-gold)` — `font-size: var(--font-size-sm)`
- Project type: `var(--font-body)`, `var(--color-text-muted-dark)` — `font-size: var(--font-size-sm)`
- Transition: `opacity 0.5s var(--ease-project), transform 0.5s var(--ease-project)`
- Mobile: overlay always visible (no `@media (hover: hover)` guard)

---

### Section 3 — About / Design Philosophy
*Background: `#2C1F17` (dark espresso) — the dark beat in the rhythm*

**Layout: 7:5 asymmetric split (desktop)**

Inspired by Content Default (magic MCP) and Kolenik's left-image / right-text split. The portrait dominates.

```
Desktop:
┌──────────────────────────────────────────────────────────┐
│  ┌────────────────────────────┐  ┌─────────────────────┐ │
│  │                            │  │                     │ │
│  │   PORTRAIT SHAKIR          │  │  OVER SHAKIR        │ │  ← terracotta overline
│  │   (shakir-portrait.webp)   │  │                     │ │
│  │                            │  │  "Uw woning moet    │ │  ← large Cormorant quote
│  │   Full-height section      │  │   voelen als u."    │ │
│  │   warm terracotta overlay  │  │                     │ │
│  │                            │  │  [Body text]        │ │
│  │   7 columns                │  │  5 columns          │ │
│  │                            │  │                     │ │
│  │                            │  │  [Meer over Shakir] │ │  ← link-style CTA
│  └────────────────────────────┘  └─────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

| Attribute | Value |
|---|---|
| Background | `#2C1F17` |
| Padding block | `clamp(8rem, 8vw + 2rem, 14rem)` — the most generous section |
| Grid | `display: grid; grid-template-columns: 7fr 5fr; gap: clamp(2rem, 4vw, 5rem)` |
| Portrait | Full section height, `object-fit: cover`, warm terracotta tint overlay: `rgba(139,82,48,0.15)` |
| Typography | Overline: terracotta `#8B5230`, tracked uppercase DM Sans 500. Quote: Cormorant Garamond 300, `font-size: var(--font-size-2xl)`, warm sand color |
| GSAP role | Portrait scale-reveal from left (translateX(-24px) → 0, 1.4s). Text block fades in after 0.3s delay. |
| Repo | Custom HTML |
| Mobile | Stacked: portrait full-width first, text below. Portrait height: `60vw` |
| Decorative | Thin gold rule (`1px solid var(--color-gold)`, width 60px) above the overline |

---

### Section 4 — Process Visualization
*Background: `#E8DDD0` (surface — slightly darker than body bg)*

**Layout: Horizontal numbered steps row**

4 steps. Numbers are large, oversized, typographic decorations. Text below each number is compact.

```
┌──────────────────────────────────────────────────────────┐
│  Onze werkwijze                                           │
│                                                           │
│  01 ──────── 02 ──────── 03 ──────── 04                  │
│  Kennismaking  3D Ontwerp  Uitvoering  Oplevering         │
│                                                           │
│  [Description] [Description] [Description] [Description] │
│                                                           │
│  [3d-design-process.webp — spanning full width below]    │
└──────────────────────────────────────────────────────────┘
```

| Attribute | Value |
|---|---|
| Background | `#E8DDD0` |
| Padding block | `clamp(5rem, 4vw + 2rem, 8rem)` — medium |
| Grid | Steps: `display: grid; grid-template-columns: repeat(4, 1fr)` |
| Step numbers | Cormorant Garamond 300, `font-size: var(--font-size-3xl)`, `color: var(--color-gold)` |
| Connector lines | `::after` pseudo-element, `1px solid var(--color-border)` — horizontal, between numbers |
| 3D image | Full-width below the steps, `aspect-ratio: 16/7`, `object-fit: cover`, warm tint |
| GSAP role | Steps stagger reveal left-to-right (100ms each). Image scale-reveal after all steps. |
| Mobile | Steps stack in 2×2 grid. Image below. |
| Decorative | Step numbers ARE the decoration. No other decorative elements. |

---

### Section 5 — Consultation CTA
*Background: `#2C1F17` (dark) — second dark beat*

**Layout: Centered single column, intentionally constrained**

A moment of pause. No grid, no split. Just one large typographic statement and a CTA button centered in generous whitespace.

```
┌──────────────────────────────────────────────────────────┐
│                                                           │
│                                                           │
│               Klaar om te beginnen?                       │  ← Cormorant 300, large
│                                                           │
│     Elk project begint met een persoonlijk gesprek.       │  ← DM Sans 300, muted
│                                                           │
│              [ Plan een kennismaking ]                    │  ← gold CTA button
│            Vrijblijvend · Binnen 24 uur contact           │  ← microcopy
│                                                           │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

| Attribute | Value |
|---|---|
| Background | `#2C1F17` |
| Padding block | `clamp(6rem, 6vw + 2rem, 10rem)` |
| Alignment | Centered — EXCEPTION to the left-align rule. CTA sections are centered (editorial convention). |
| Headline | Cormorant Garamond 300, `clamp(2.5rem, 2rem + 3vw, 5rem)`, `#F0E8DC` |
| CTA | Gold button (`#C9A962` bg, `#2C1F17` text), border-radius: 2px, font-weight: 500 |
| GSAP role | Simple fade-in. No stagger needed. Single focal point. |

---

### Section 6 — Footer
*Background: `#2C1F17` (dark — continues from CTA section)*

**Layout: 2-column asymmetric**

```
┌──────────────────────────────────────────────────────────┐
│  [LOGO]                         Projecten  Diensten      │
│  Luxury Interiors                                         │
│                                 Over ons   Contact        │
│  Tiel, Nederland                                         │
│  © 2025 By Shakir               [WhatsApp] [Instagram]   │
│                                                           │
│  KvK: _______ · Privacy          [→ App ons direct]      │
└──────────────────────────────────────────────────────────┘
```

| Attribute | Value |
|---|---|
| Background | `#2C1F17` — continuation of CTA section |
| Padding block | `clamp(3rem, 3vw + 1rem, 5rem)` — compact |
| Grid | `display: grid; grid-template-columns: 1fr auto; gap: clamp(2rem, 4vw, 6rem)` |
| Logo | `color: #C9A962` — gold, weight 300, tracked |
| Nav links | DM Sans 400, uppercase, `#CEC4B6`, `letter-spacing: 0.1em` |
| WhatsApp | Inline text link — "App ons direct" — no icon |
| Border top | `1px solid rgba(201, 169, 98, 0.2)` — subtle gold divider |
| Mobile | Stack: logo → nav → contact info |

---

## Section Rhythm Summary

| # | Section | Background | Padding Block | Role |
|---|---|---|---|---|
| 1 | Hero | Video + dark overlay | 100dvh | First impression — pure visual impact |
| 2 | Portfolio Grid | `#F0E8DC` warm sand | clamp(6→10rem) | Core conversion — the work |
| 3 | About / Philosophy | `#2C1F17` dark | clamp(8→14rem) | Trust + personality — the person |
| 4 | Process steps | `#E8DDD0` surface | clamp(5→8rem) | Clarity — what happens after contact |
| 5 | CTA | `#2C1F17` dark | clamp(6→10rem) | Invitation — soft close |
| 6 | Footer | `#2C1F17` dark | clamp(3→5rem) | Utility — links, legal, contact |

**Rhythm pattern: Dark → Light → Dark → Light → Dark → Dark**

Sections 5+6 both dark because they merge visually — the CTA flows into the footer without a break. The gold divider line (1px) is the only transition between them.

---

## Where Decorative Elements Sit

Per `.impeccable.md` principle #2: *"Photography is the decoration."* No icon libraries, no background patterns, no decorative SVG shapes.

**The only decorative elements used:**

1. **Thin gold rules** (`1px solid var(--color-gold)`, width 40–60px) — appear above overlines in Sections 3 and 5. Two instances maximum.

2. **Oversized step numbers** (Section 4 process) — Cormorant Garamond 300, `var(--color-gold)`, very large. Typography IS the decoration.

3. **The gold period** — inspired by Best Interiors competitor's `:after { content: "."; color: #bf942a }` pattern. The section heading in Section 2 gets a trailing gold period: "Elk interieur vertelt een verhaal**.**" — one CSS rule, ownable visual signature.

4. **Parallax background video** — the hero video moves at 0.25× scroll speed (GSAP ScrollTrigger). This is motion-as-decoration, not graphic-as-decoration.

Everything else: typography, photography, whitespace.

---

## How the Repo Stack Manifests Per Section

| Section | Custom HTML | galaxy (CSS) | GSAP | melt-ui | uhugrid | ssgoi |
|---|---|---|---|---|---|---|
| 1. Hero | ✓ Structure | — | SplitText headline | — | — | Page transitions |
| 2. Portfolio | ✓ Section wrapper | Hover effects | Card stagger | Lightbox modal | Masonry columns | ✓ |
| 3. About | ✓ 7:5 grid | — | Translate reveal | — | — | — |
| 4. Process | ✓ 4-column | — | Stagger steps | — | — | — |
| 5. CTA | ✓ Centered | — | Fade-in | — | — | — |
| 6. Footer | ✓ 2-col | — | — | — | — | — |

**GSAP is justified** because 3+ exclusive effects are in use:
1. SplitText on hero headline
2. ScrollTrigger stagger on portfolio cards
3. Parallax on hero video background
4. Translate reveal on about section portrait

---

## Confirmed Anti-Patterns (Not in This Layout)

- No `max-w-7xl mx-auto` wrapper on every section — only Section 2 and 4 use constrained max-width; 1, 3, 5 are full-bleed
- No uniform section padding — every section has a different `clamp()` range
- No symmetric grids — Section 3 is 7:5, Section 2 is masonry (naturally uneven), Section 6 is 1fr/auto
- No rounded corners > 4px — cards and buttons are sharp (1–2px radius max)
- No centered hero text — bottom-left anchor
- No icon library — WhatsApp, arrows, nav indicators are inline SVG paths only
- No stat counters or metrics blocks
- No pricing visible anywhere

---

## Notes for Prompt 8 (HTML Reference)

When building the reference HTML:
1. Start with Section 1 (hero) as a separate template — it requires special handling for LCP
2. Use `<video>` with `poster` attribute, NOT CSS `background-video` — the poster `<img>` needs `fetchpriority="high"` for LCP
3. Section 3's portrait image should be `object-position: top center` to frame the face
4. The gold period after section headings is `:after { content: '.'; color: var(--color-gold); }` — add to heading utility classes
5. The 3D tilt JavaScript loads as `<script type="module" client:idle>` in Astro — not inline
6. The uhugrid masonry uses CSS `columns` property (not CSS Grid or Flexbox) for true masonry
7. All section padding is `padding-block` only — `padding-inline` comes from the content column constraint inside each section
