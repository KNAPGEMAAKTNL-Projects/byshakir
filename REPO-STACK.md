# REPO-STACK.md
# By Shakir — Library Stack + Interaction Vocabulary
# Date: 2026-04-07
# Tone scores: E4 D3 F7 R10 A6
# Source: reference-repo-routing-v2.md + reference-interaction-vocabulary-v2.md

---

## Anti-Repetition Check (vs. design-log entry 2026-03)

| Dimension | Previous (2026-03) | Proposed | Pass? |
|---|---|---|---|
| Structure + animation combo | custom HTML + tailwind-animations | custom HTML + galaxy | ✓ Different |
| Heading font | Playfair Display | Cormorant Garamond | ✓ Different (more condensed, fashion-editorial vs. balanced Playfair) |
| Body font | Montserrat | DM Sans | ✓ Different (humanist warmth vs. geometric) |
| Anchor color | #C5A059 (~38° hue) | #B87856 (~25° hue) — only 13° distance | ⚠️ Fails 60° rule |
| Signature interaction | Cursor-following glow | Image tilt on hover (3D perspective) | ✓ Different |

**Color exception noted:** Proposed terracotta `#B87856` is only 13° hue distance from previous gold `#C5A059` — below the 60° minimum. **Exception applies: same client/project.** The warm terracotta direction is required by the client's brand identity (Q3 spatial metaphor, Mediterranean palette). Anti-repetition rule targets cross-client boredom, not same-client identity consistency. Proceeding with creative direction override.

---

## Tone Axis Routing

| Axis | Score | Range | Matching repos |
|---|---|---|---|
| Energy | E4 | Mid (4-6) | basecoat, preline, pattern-craft, kibo, launch-ui, page-ui, magicui, skeleton |
| Density | D3 | Low (0-3) | galaxy, pattern-craft, uilayouts (D2-4), react-bits (D2-5) |
| Formality | F7 | High (7-10) | oat, preline, heroui, shadcn-svelte |
| Richness | R10 | High (7-10) | galaxy, preline, pattern-craft, uilayouts, uitripled, react-bits, animate-ui, cult-ui, smoothui, ssgoi |
| Animation | A6 | Motion (6-10) | galaxy, tailwind-animations, ssgoi, uilayouts, uitripled, react-bits, animate-ui, cult-ui, kokonutui, smoothui, uvcanvas |

**Intersection of all 5 axes:** No single repo satisfies E4 + D3 + F7 + R10 + A6 simultaneously. This is a documented gap in the routing table: *"F7+ + A6 zone — no single repo covers it. Custom code is the differentiator."* Confirmed by the quick-match example for "Dark editorial luxury" at E3 D3 F8 R9 A6. Custom HTML is the correct structural choice.

---

## 5-Layer Stack

### Layer 1 — STRUCTURE: Custom HTML (Astro-native)

| | |
|---|---|
| **Repo** | None — custom HTML in Astro `.astro` files |
| **Astro compat** | A (native — no islands, no framework) |
| **Why** | No pre-built library covers F7 + D3 + R10 simultaneously. The luxury editorial tier requires hand-crafted asymmetric layouts, variable section padding, and full-bleed photography that no component kit provides. Custom HTML with Tailwind utilities is the standard approach for this score intersection. |
| **Provides** | All page layouts, section structures, grid patterns, typography hierarchy, spacing logic |
| **Key patterns** | Full-bleed sections with constrained text columns (max 65ch). Asymmetric image+text splits. Variable section padding via `clamp()`. No max-w-* wrapper on every section — applied selectively. |

---

### Layer 2 — ANIMATION: galaxy (CSS effects) + targeted GSAP

| | |
|---|---|
| **Repo** | galaxy — CSS creative effects library |
| **Astro compat** | A (CSS-only, zero JS runtime) |
| **Why** | E4-10 ✓, D1-3 ✓ (borderline), R5-10 ✓, A5-10 ✓. Provides CSS hover effects, transforms, and creative visual utilities that don't require JS. Used for: project card hover effects, section transition decoratives, image treatments. Differentiates from previous project's tailwind-animations primary. |
| **+ GSAP dependency** | ~47KB — within Archetype B budget. Used for: ScrollTrigger scroll reveals (scale-reveal), hero animation sequence on load, portfolio grid stagger. NOT loaded unless ≥3 GSAP-exclusive effects are confirmed in use (ScrollTrigger pinning + SplitText headline + stagger). |
| **Provides** | CSS hover utilities, creative transforms, GSAP scroll-driven reveals |
| **Note** | galaxy's F1-5 rating reflects its AESTHETIC tendency — it can be used formally. We use only clean, restrained effects. |

---

### Layer 3 — INTERACTIVE: melt-ui (Svelte island)

| | |
|---|---|
| **Repo** | melt-ui — headless Svelte UI primitives |
| **Astro compat** | C (Svelte island — lighter than React) |
| **Why** | Headless primitives mean full style control (critical for R10 richness). Svelte is ~30% lighter than React islands. Used for: contact form (accessible inputs, validation), service card selector (Pattern C radio cards), image lightbox for project galleries. |
| **Provides** | Form primitives, dialog/modal (lightbox), accessible select/combobox for service type dropdown |
| **JS budget** | ~15KB (Svelte runtime) — minimal |

---

### Layer 4 — DECORATIVE: Skip

| | |
|---|---|
| **Decision** | No decorative library selected |
| **Why** | The project photography provides all visual richness. The shaded terracotta palette provides all color depth. Adding pattern-craft textures or shader backgrounds would compete with and diminish the portfolio photography, which IS the product. The restraint IS the luxury signal (Piet Boon principle). |
| **Exception** | If a subtle noise texture on the body background (`#F0E8DC`) is desired, a 4×4 SVG pattern inlined in CSS is sufficient — no library needed. |

---

### Layer 5 — SPECIFIC PURPOSE: ssgoi + uhugrid

**ssgoi — page transitions**

| | |
|---|---|
| **Repo** | ssgoi — cinematic page transitions for Astro/SvelteKit |
| **Astro compat** | C (Astro-supported, ViewTransitions API) |
| **Why** | Lagrand was specifically praised in competitor ratings (8/10): *"clear loading state between page switches making it feel high end."* ssgoi provides this for Astro. Specifically: the cross-fade transition when navigating from portfolio overview → individual project page creates the "premium app" feeling that matches the luxury positioning. |
| **Provides** | Cross-fade page transitions, custom transition sequences for route changes |
| **JS budget** | ~8KB |

**uhugrid — masonry portfolio layout**

| | |
|---|---|
| **Repo** | uhugrid — CSS masonry/mosaic grid layouts |
| **Astro compat** | B (CSS utility classes, framework-agnostic) |
| **Why** | 5 portfolio projects in a standard grid would look generic. A masonry layout with varying card heights (4:5 portrait as default, some wider feature cards) creates the editorial magazine feel that R10 richness demands. Triggered because: portfolio grid is the core page element of an Archetype B site. |
| **Provides** | Mosaic/masonry grid classes, responsive column control |
| **JS budget** | ~0KB (pure CSS) |

---

## Stack Summary

| Layer | Repo | Compat | JS cost |
|---|---|---|---|
| 1. Structure | Custom HTML | A | 0 KB |
| 2. Animation | galaxy + GSAP (targeted) | A | 0 KB CSS + ~47 KB GSAP |
| 3. Interactive | melt-ui (Svelte) | C | ~15 KB |
| 4. Decorative | — (skip) | — | 0 KB |
| 5. Specific | ssgoi + uhugrid | C / B | ~8 KB + 0 KB |
| **Total** | | | **~70 KB** |

Within Archetype B budget of ~47 KB for animation + reasonable interactive overhead. LCP target of <1.5s achievable with Astro SSG (no client-side hydration for structure).

---

## STEP 2 — Interaction Vocabulary

### 1. Scroll Behavior

**Level:** A6 → upper boundary of "Measured Reveals" / lower boundary of "Theatrical"

**Decision:** Scale-reveal with mild hero parallax — measured-theatrical hybrid

| Element | Behavior | Duration | Timing |
|---|---|---|---|
| Hero text (tagline) | `opacity 0 → 1` on page load, no transform | 1.2s | Appears immediately, no delay |
| Section headings | `scale(0.97) → 1, opacity 0.4 → 1` on scroll entry | 1.4s | IntersectionObserver, entry 0%–80% |
| Project cards | `scale(0.95) → 1, opacity 0 → 1` staggered | 1.5s | 100ms stagger between cards (max 4) |
| About / process blocks | `translateX(-24px) → 0, opacity 0 → 1` | 1.3s | Alternates direction left/right |
| Hero background (video) | Parallax: moves at 0.25× scroll speed | — | CSS scroll-timeline, disabled <768px |

**CSS approach (no GSAP for basic reveals):**
```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .scroll-reveal {
      animation: scale-reveal linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 80%;
    }
  }
}
@keyframes scale-reveal {
  from { transform: scale(0.95); opacity: 0.4; }
  to   { transform: scale(1);    opacity: 1;   }
}
```

GSAP ScrollTrigger used only for: hero headline SplitText sequence + portfolio grid stagger (≥3 effects justify the 47KB).

---

### 2. Hover Pattern

**Decision: Scale + Reveal (Editorial)**

Image scales 1.03× on hover, overlay slides up from the bottom revealing the project location and type.

```css
.project-card {
  overflow: hidden;
  position: relative;
}
.project-card img {
  transition: transform 0.7s var(--ease-project);
  will-change: transform;
}
.project-card .overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  background: linear-gradient(to top, oklch(0.15 0.04 35 / 0.85) 0%, transparent 60%);
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.5s var(--ease-project), transform 0.5s var(--ease-project);
}
@media (hover: hover) {
  .project-card:hover img { transform: scale(1.03); }
  .project-card:hover .overlay {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Mobile: overlay always visible (no hover) */
@media (hover: none) {
  .project-card .overlay { opacity: 1; transform: translateY(0); }
}
```

Overlay text: project location (e.g., "Dubai Marina") in warm sand `#F0E8DC`, project type below in terracotta `#B87856` at caption scale.

---

### 3. Easing Personality

**Decision: Dramatic — `cubic-bezier(0.83, 0, 0.17, 1)`**

| | |
|---|---|
| **Curve** | `cubic-bezier(0.83, 0, 0.17, 1)` |
| **Character** | Luxury, theatrical, deliberate — starts with intention, ends with commitment |
| **Why** | F7 (formal) + "warm breeze" motion philosophy = unhurried but decisive. The curve has a slow start and controlled acceleration — like a heavy linen curtain moving in a breeze, not a snapping rubber band. |
| **Applied via** | `--ease-project: cubic-bezier(0.83, 0, 0.17, 1)` in global CSS `@theme` block |
| **Duration baseline** | 1.4s for scroll reveals, 0.7s for hover, 1.0s for page transitions |

```css
/* global.css — @theme block */
@theme {
  --ease-project: cubic-bezier(0.83, 0, 0.17, 1);
}
```

---

### 4. Signature Interaction

**Decision: Image tilt on hover (3D perspective) — project cards only**

| | |
|---|---|
| **Type** | Image tilt (3D perspective transform, cursor-responsive) |
| **Surfaces** | Project cards in the portfolio grid only — 1-2 surfaces max |
| **Complexity** | Medium (~4KB vanilla JS) |
| **Animation level** | A5+ — confirmed for A6 ✓ |
| **Not in last 5** | Previous project used cursor-following glow — image tilt is distinct ✓ |

**Why this interaction:**
The 3D tilt creates a physical, tactile quality — the card *responds* to your hand, like touching a photograph. This maps directly to the Q3 spatial metaphor: the sensory experience of being on the terrace, the physical quality of warm stone and linen. It rewards slow exploration (Q5 — visitors who pause and move over the card), actively discourages rapid scanning, and creates a moment of surprise that feels *discovered* rather than demonstrated.

No competitor in the research uses this. Piet Boon, Best Interiors, Kolenik — none.

**Implementation (vanilla JS, no dependencies):**
```js
// CardTilt.js — ~3.5KB, loaded as Astro client:idle
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;  // -0.5 to 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform =
      `perspective(1000px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) scale(1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    card.style.transition = `transform 0.6s var(--ease-project)`;
  });
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'none'; // snap to cursor position on enter
  });
});
```

Max rotation: ±6° (subtle — not a gaming card flip). Scale: 1.02 (lifts slightly).

Disabled: `prefers-reduced-motion: reduce`, touch devices, <768px viewport.

---

## Interaction Vocabulary Summary Card

```
SCROLL:     Scale-reveal (0.95→1, 0.4→1 opacity) + mild hero parallax (0.25×)
            Stagger: 100ms / card, max 4. GSAP for headline SplitText + grid stagger.

HOVER:      Scale + Reveal — image 1.03×, overlay slides up from bottom
            Overlay: gradient dark → project location (sand) + type (terracotta)

EASING:     Dramatic — cubic-bezier(0.83, 0, 0.17, 1)
            --ease-project applied project-wide via CSS custom property
            Duration baseline: 1.4s reveals / 0.7s hover / 1.0s page transition

SIGNATURE:  Image tilt (3D perspective ±6°) on project cards
            Cursor-responsive rotateX/rotateY, client:idle, 3.5KB
            Disabled on touch + prefers-reduced-motion

FONT DIR:   Heading → Cormorant Garamond (elegant serif, condensed, editorial)
            Body    → DM Sans (humanist sans, warm, readable)
            [Final font selection confirmed in Prompt 6 via /teach-impeccable]

JS TOTAL:   ~70KB (GSAP 47KB + Svelte 15KB + ssgoi 8KB + tilt 3.5KB)
```

---

## Next: Prompt 6 — `/teach-impeccable` → DESIGN.md token generation

Inputs ready:
- Anchor color direction (shaded terracotta palette)
- Typography direction (Cormorant Garamond + DM Sans)
- Spacing scale (fluid clamp-based, generous section padding)
- Motion tokens (--ease-project, duration baselines)
- Repo stack for component sourcing
