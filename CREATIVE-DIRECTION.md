# CREATIVE-DIRECTION.md
# By Shakir — Creative Direction Extraction
# Date: 2026-04-07
# Source: Client interview (Prompts 1–4)
# Status: DRAFT — awaiting confirmation before MCP pipeline (Prompt 5)

---

## Interview Summary

| Question | Client Answer | Key Signal |
|---|---|---|
| Q1 — Competitors that feel right/wrong | Ratings already given | 9/10: Piet Boon, Best Interiors. 8/10: Kolenik, Lagrand. 4/10: Lux, Set Interieur |
| Q2 — Reference sites outside industry | None available | Work from competitor signals + Q3 spatial description |
| Q3 — Physical space metaphor | Penthouse terrace Dubai, in shade, warm breeze, Mediterranean pool visible | Warm, shaded luxury — travertine/linen, not marble/chrome |
| Q4 — One feeling in 3 seconds | "Inviting, cozy, clean" | Warm luxury — NOT cold minimalism |
| Q5 — Who is NOT the customer | Price-shoppers who want to check price and leave | No pricing triggers, no scan-friendly layout, site must slow visitors down |

---

## 1. ANCHOR COLOR DIRECTION

**Classification: Warm Luxury — Shaded Terracotta**

This is NOT standard "luxury gold on black." The spatial metaphor is precise: a penthouse terrace **in the shade**. Warm but not harsh. Rich but liveable. The feeling of travertine stone that's been in the sun all day but you're standing in the cool shadow of it.

**Primary mood:** Desert dusk / Mediterranean afternoon shade

| Role | Color | Description | Rationale |
|---|---|---|---|
| **Dark anchor** | `#2C1F17` | Deep warm espresso — almost black but unmistakably brown | The warm shadow of the terrace, the mahogany furniture, the depth of a late evening in Dubai |
| **Dark secondary** | `#3D2E23` | Rich dark brown | Mid-tone dark — headers, text on light, dark section backgrounds |
| **Warm sand (light bg)** | `#F0E8DC` | Bleached travertine — warm off-white | The sun-bleached stone of Mediterranean architecture; body background |
| **Cream (lightest)** | `#FAF7F3` | Near white with warmth | Cards, input fields, subtle surface variation |
| **Terracotta accent** | `#B87856` | Muted desert terracotta | The warm earthy pop — Not red, not orange. Dusty, sun-faded terracotta. |
| **Muted gold (brand accent)** | `#B8975A` | Late-afternoon light on stone | The warm gold of sunlight through a curtain — not bling, not metallic. Used sparingly. |
| **Pool blue (cold accent)** | `#7AABB8` | Faded Mediterranean pool | Used as a rare contrast — a breath of cool air. For hover states, decorative accents only. |

**What this is NOT:**
- Not sharp metallic gold (#FFD700, #C5A028) — too flashy, too "traditional luxury"
- Not pure black (#000000) — too harsh, too corporate
- Not cool gray/slate — that's the Piet Boon direction; By Shakir is warmer
- Not saturated colors — everything is muted, like stone and linen, not paint

---

## 2. TYPOGRAPHY PERSONALITY

**Classification: Warm Editorial Luxury**

"Inviting, cozy, clean" rules out ultra-thin cold serifs (too fashion/sterile) and heavy slab serifs (too trades). The direction is **refined serif headings with humanist sans body** — editorial warmth with legible reading comfort.

| Role | Direction | Search Query | Rationale |
|---|---|---|---|
| **Display/hero headings** | Elegant serif — refined, generous letter-spacing, medium weight (not ultra-thin, not bold) | `"luxury serif elegant editorial warm"` | The penthouse terrace feeling. Playfair Display, Cormorant Garamond range. |
| **Section headings** | Same serif family, lighter weight | Same family as display | Visual continuity, weight contrast creates hierarchy |
| **Body / UI text** | Humanist sans — warm, readable, not geometric | `"humanist sans readable warm"` | "Inviting" — body text should feel like a letter, not a spec sheet. DM Sans, Inter range. |
| **Navigation** | Humanist sans, ALL CAPS, tracked | Same as body | Kolenik/Lagrand signal: uppercase nav = luxury shorthand |
| **Captions / meta** | Humanist sans, light, letter-spaced | Same family as body | Quiet label text under project images |

**Font weight philosophy:**
- Hero headings: weight 300–400 (expensive-light — Lagrand, Kolenik approach)
- Section headings: weight 400–500
- Body: weight 400 (regular)
- **Never use 700–800 weight** — that's the trades/construction register, not the luxury interior register

**Type scale (fluid, clamp-based):**

| Scale | Formula | Range |
|---|---|---|
| Display (hero) | `clamp(3rem, 2rem + 5vw, 7rem)` | ~48px → ~112px |
| H1 | `clamp(2.25rem, 1.5rem + 3.5vw, 5rem)` | ~36px → ~80px |
| H2 | `clamp(1.75rem, 1.2rem + 2.5vw, 3.5rem)` | ~28px → ~56px |
| H3 | `clamp(1.25rem, 1rem + 1.5vw, 2.25rem)` | ~20px → ~36px |
| Body | `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)` | ~16px → ~18px |
| Caption | `0.875rem` | fixed 14px |
| Nav | `0.75rem` letter-spacing: 0.15em | fixed 12px, uppercase |

---

## 3. SPATIAL FEELING

**Classification: Expansive + Structured — "The Terrace View"**

The penthouse terrace metaphor drives layout decisions:

| Dimension | Decision | Rationale |
|---|---|---|
| **Density** | Spacious — LOW density (3/10) | A terrace is not a packed room. Generous whitespace is the luxury signal. |
| **Structure** | Structured in foreground, expansive in background | The furniture is arranged; the view is infinite. Layouts are deliberate but photos breathe. |
| **Rhythm** | Asymmetric, not symmetric | A real terrace isn't grid-perfect. Alternating left/right image+text. Varied section padding. |
| **Containment** | Expansive — photos break out of containers | Full-bleed sections for project photography. Text lives in constrained columns. |
| **Section padding** | Generous and variable | `clamp(5rem, 4rem + 5vw, 12rem)` vertical — sections don't all feel the same height |
| **Content width** | Narrow text column (max 65ch) | Reading comfort. Text is never full-width. |
| **Image presentation** | 4:5 portrait cards + full-bleed horizontal reveals | Portrait for grid, full-bleed for individual projects |

**Layout principles derived from this:**
- Full-bleed sections for hero and project showcases
- Constrained, centered text columns inside those sections (text is never full-width)
- Asymmetric image+text pairs (not centered side-by-side splits)
- Varying left/right padding per section — structured irregularity, not monotone rhythm
- Generous section spacing — nothing feels cramped

---

## 4. MOTION PHILOSOPHY

**Classification: Slow Reveal — "Warm Breeze"**

The warm breeze metaphor is specific: gradual, continuous, unhurried. Not theatrical, not still. Something you feel, not something you watch.

| Parameter | Value | Rationale |
|---|---|---|
| **Pacing** | Slow — 1.2–1.8s transitions | Kolenik uses 1.5s. This forces visitors to slow down — exactly what Q5 demands. |
| **Type** | Fade + subtle vertical drift (20px up on reveal) | Not bounce, not slide, not wipe. A gentle rise, like something lifted by a breeze. |
| **Trigger** | Intersection Observer on scroll | Elements reveal as they enter the viewport — no auto-play animations |
| **Hero video** | Autoplay, muted, slow dissolve between loops | The existing `hero-optimized-final.mp4` asset — plays at ambient pace, not action pace |
| **Page transitions** | Simple opacity cross-fade if implemented | Lagrand's "clear loading state between page switches" was specifically praised |
| **Hover states** | Slow, warm — image scale 1.03 over 0.6s | Subtle zoom on project cards on hover — not aggressive |
| **Cursor** | Default — no custom cursor | Avoid gimmick territory |
| **Level (1-10)** | 6/10 | Present and purposeful, not performative |

**What this is NOT:**
- No bounce/elastic easing
- No fast pop-in effects (0.1–0.2s snappy animations = cheap)
- No scroll-jacking or horizontal scroll effects
- No parallax that creates motion sickness
- No loading screen / splash screen

---

## 5. ANTI-REFERENCES & ANTI-PATTERNS

Patterns explicitly rejected by the client's answers or competitor ratings:

| Anti-pattern | Source | Rule for DESIGN.md |
|---|---|---|
| Pricing visible on homepage | Q5 — "cheap people want to check price and move on" | NEVER show pricing on homepage, services page, or project pages |
| Scan-friendly lists / bullet points in hero | Q5 — visitors must slow down | No bullet point lists above the fold. Prose only in hero and intro sections. |
| Metrics-as-trust-signals ("234 projects done") | Lux (4/10) — "old design" feel | No stat counters, no "X years experience" number blocks |
| Cropped/mobile-first hero on desktop | Set Interieur (4/10), Laura Hindriks (5/10) — "doesn't use screen maximum" | Hero MUST be near-full-viewport on desktop — no 600px height cap on wide screens |
| Functional-but-cold whitespace | Piet Boon direction — "different vibe than By Shakir" | Don't mirror Piet Boon's cool gray palette; the warmth is the differentiation |
| Broken CTAs / decorative-only buttons | Eric Kuster (7/10) — "links to booking without actual booking" | Every CTA must resolve to a real action |
| Fast, snappy animations | Lux (4/10) — "old animations" | No transitions under 0.4s for content reveals. Speed ≠ quality here. |
| Commercial carousel with gradient buttons | Lux (4/10) | No hero carousels with text-over-image buttons. The video hero is the hero. |
| ALL CAPS aggressive headlines | Trades archetype patterns | Headings are sentence case (capitalise first word only). Navigation is uppercase. Not headings. |
| Cold pure white backgrounds | Generic template approach | Body background must be warm — `#F0E8DC` range minimum. Never `#FFFFFF` or `#F5F5F5`. |
| Dense footer with 5+ columns | Local competitor pattern | Clean footer: logo, short nav, social icons, KvK, WhatsApp. Maximum 2 content columns. |

---

## Final Archetype Confirmation

Based on all research + creative interview:

**CONFIRMED: Archetype B — Visual Portfolio (Interieurontwerper)**

No revision needed from preliminary. Creative direction adds the "how" layer:

| Dimension | Preliminary | After Creative Interview |
|---|---|---|
| Energy | 4/10 (adjusted for warmth) | **4/10** — confirmed. Warm personality lifts from the archetype baseline of 3 |
| Density | 3/10 | **3/10** — confirmed. "Cozy" ≠ dense. Spacious layout. |
| Formality | 7/10 | **7/10** — confirmed. Approachable, not stiff. |
| Richness | 10/10 | **10/10** — confirmed. The shaded terracotta direction is maximum richness. |
| Animation | 6/10 | **6/10** — confirmed. Slow reveal. Present but not theatrical. |

---

## Ready for Prompt 5 (MCP Pipeline)

After confirmation, this document feeds:
- **Prompt 5**: Copy architecture (tone of voice is now defined)
- **Prompt 6**: `/teach-impeccable` — DESIGN.md token generation
  - Color tokens: warm sand, terracotta, muted gold, espresso, pool blue accent
  - Type tokens: serif display + humanist sans body
  - Spacing tokens: fluid clamp-based scale, generous section padding
  - Motion tokens: 1.5s fade+rise, intersection-triggered, video ambient
