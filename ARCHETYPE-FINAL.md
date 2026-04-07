# ARCHETYPE-FINAL.md
# By Shakir — Finalized Archetype Classification
# Date: 2026-04-07
# Sources: Blueprints SOP, Conversion Patterns SOP, Creative Direction extraction, competitor research

---

## STEP 1 — CONFIRMED ARCHETYPE

**ARCHETYPE B: VISUAL PORTFOLIO**
Sub-type: **Interieurontwerper** (highest visual refinement variant)

**Rationale:**
Visitor mindset at arrival is *"I'm planning a project and comparing quality."* This is not an urgency purchase (A), not a booking/atmosphere experience (C), not a clinical credentials check (D), and not a personal trainer booking (E). The decision timeline is weeks to months. The primary conversion is a soft consultation inquiry after extended portfolio browsing.

The international scope (Dubai, Barcelona, Malaga, Antwerp) and high-ticket nature (~€50K+ projects) push this toward the highest-formality end of Archetype B — closer to Piet Boon's positioning than a local hovenier.

No revision from preliminary. Confirmed.

---

## STEP 2 — ARCHETYPE B REQUIREMENTS

These are MUSTS — non-negotiable regardless of creative direction.

### MUST HAVE

- [x] **Work examples visible above or at the fold** — the hero is a video of By Shakir's work. This satisfies the requirement. If the video fails to load, `hero-poster.webp` must still show a finished interior.
- [x] **Project gallery accessible from homepage** — the portfolio grid section appears as the 3rd section on the homepage.
- [x] **Process explanation** — the 3D design process section explains what happens after contact. Clients at this price point need to understand the steps before they'll inquire.
- [x] **Work examples above fold** — hero video = portfolio content. This is the hero, not a photo of Shakir.
- [ ] **Social proof within first 2 sections** — no testimonials exist yet. **This is the single biggest open gap.** Must gather at least 3 client testimonials before launch.
- [ ] **Named project locations visible early** — city/country labels on project cards (Dubai, Barcelona, Malaga, Antwerp, Netherlands). These are trust signals in themselves for the international luxury tier.

### MUST NOT

- [x] **No text-heavy hero without imagery** — hero is a full-bleed video. Confirmed.
- [x] **No urgency language** — "Bel nu", "Neem vandaag nog contact op" — all forbidden per anti-pattern list.
- [x] **No pricing visible on homepage** — confirmed from creative direction. Q5 explicitly ruled this out.

---

## STEP 3 — ADJUSTED TONE SCORES

Baseline from blueprints (Interieurontwerper defaults):

| Dimension | Default | Adjusted | Reason |
|---|---|---|---|
| **Energy** | 3/10 | **4/10** | Client personality is warm, approachable, inviting. The "penthouse in Dubai" spatial metaphor has life in it — not cold and still. +1 from interview Q3+Q4. |
| **Density** | 3/10 | **3/10** | Unchanged. "Cozy" ≠ dense. The terrace metaphor is spacious. Low-density, generous whitespace confirmed. |
| **Formality** | 8/10 | **7/10** | "Warm, friendly, approachable" + je/jij address form per CLAUDE.md. Reduces the stiff museum-catalog register. -1 from interview Q4. |
| **Richness** | 10/10 | **10/10** | Unchanged — maximum. Shaded terracotta direction is the richest palette in the archetype range. Travertine, warm gold, terracotta, deep espresso. |
| **Animation** | 5/10 | **6/10** | Video hero + slow-reveal philosophy (1.5s Kolenik-pattern). The "warm breeze" metaphor implies continuous, gentle motion — not still. +1 from interview Q3. GSAP budget: ~47 KB permitted for Archetype B. |

**Final tone signature: E4 D3 F7 R10 A6**

---

## STEP 4 — CONVERSION REQUIREMENTS

Archetype-independent, adjusted for luxury positioning and conversion patterns data.

### CTA Architecture

| Requirement | Decision | Rationale |
|---|---|---|
| **Primary CTA visible without scrolling** | "Plan een kennismaking" — in hero, soft | Luxury CTA language. Not "offerte aanvragen" — that's trades language. |
| **Secondary CTA every 2–3 sections** | Yes — after portfolio grid, after process section | Gentle re-entry points. Same soft language throughout. |
| **Contact accessible from anywhere** | WhatsApp button (floating mobile) + contact link in nav | No sticky phone bar — that's Archetype A territory. WhatsApp aligns with By Shakir's approachable personality. |
| **Trust signal within first 2 sections** | Named project locations on portfolio cards (Section 2) | Press logos would be stronger — flag to client: any editorial coverage? |
| **"Vrijblijvend" near every CTA** | Yes — microcopy beneath every button | Per conversion patterns SOP: proven Dutch trust reducer. Phrasing: "Vrijblijvend — geen verplichtingen" |
| **Response time mentioned near CTAs** | "Persoonlijk contact binnen 24 uur" | Avoids urgency language while still committing to responsiveness |
| **Social proof: only verifiable data** | Client testimonials with first name + project type only | No "star ratings" without a review platform to back them up |
| **Form fields minimized** | Naam, E-mail, Telefoonnummer (optional), Type project, Omschrijf uw project | 5 fields. Phone optional — conversion patterns SOP: optional phone → +275% capture rate. |
| **Privacy note near forms** | "Uw gegevens worden niet gedeeld." + link to /privacy/ | Required by AVG. Keep it brief. |
| **Pricing approach** | None visible on site | Confirmed in creative direction. Qualifier copy: "By Shakir werkt aan exclusieve projecten." |
| **Spam protection** | Cloudflare Turnstile + honeypot | Zero user friction. No reCAPTCHA (-40% conversion). Per conversion patterns SOP. |

### Form Design Decision

**Single-step form, not multi-step.** Rationale:

The multi-step form data (86–300% uplift) applies to volume-focused service businesses where all qualified leads are welcome. By Shakir's business goal is the *opposite* — filter for the right client. A textarea asking "Omschrijf uw project" acts as a natural qualifier. Clients who won't describe their project won't be a good fit anyway. A 5-field single-step form with a generous textarea is appropriate for this archetype. Making phone optional (+275% capture rate, per conversion patterns SOP) is the single highest-value form change.

### Button Text Hierarchy

| Context | Button text | Microcopy |
|---|---|---|
| Hero primary | "Plan een kennismaking" | "Vrijblijvend — geen verplichtingen" |
| Mid-page CTAs | "Vertel ons over uw project" | "Persoonlijk contact binnen 24 uur" |
| Contact page form | "Verstuur uw bericht" → NO. Use: "Stuur uw bericht" | "Uw gegevens worden niet gedeeld." |
| WhatsApp CTA | "App ons direct" | (no microcopy needed — WhatsApp explains itself) |

---

## STEP 5 — COMBINED ANTI-PATTERN LIST

### From SOPs

- [ ] No `opacity: 0` on hero elements — LCP trap. Hero video poster must be visible immediately.
- [ ] No "Versturen" as button text — use "Stuur uw bericht" or "Plan een kennismaking"
- [ ] No aggressive sales language — "Wij zijn de beste...", "Exclusief aanbod!", etc.
- [ ] No stock photos for team or projects — own photography only
- [ ] No unverifiable social proof — no "1000+ tevreden klanten" without a source
- [ ] No English phrases where Dutch is expected — all copy is Dutch (URL slugs stay English)
- [ ] No "bel ons maar even" — too commanding, undermines the luxury register
- [ ] No "Neem vandaag nog contact op!" — American urgency pattern, wrong for this brand

### From Anti-Slop Pipeline

- [ ] No uniform section padding — vary `py-*` per section deliberately (some sections breathe 12rem, others only 5rem)
- [ ] No symmetric 6/6 grids throughout — mix asymmetric splits (image 2/3 + text 1/3, text 40% + image 60%)
- [ ] No `max-w-7xl mx-auto` wrapper on every section — some sections are full-bleed, some constrained
- [ ] No centered-everything layout — text blocks are left-aligned (reading axis), not centered-centered
- [ ] No uniform card heights in project grid — portrait cards (4:5 ratio), allow natural variation
- [ ] No gradient text — no `bg-clip-text` decoration on headings
- [ ] No glassmorphism / glow borders — backdrop-blur on the nav header only (scrolled state)
- [ ] No rounded corners > 8px — this is not a SaaS UI. Cards have 0px or max 4px radius.
- [ ] No identical card layouts repeated 3–4 times in sequence
- [ ] No `border-radius: 9999px` pill buttons — rectangular CTAs only (luxury register)

### From Client Anti-References (Interview + Competitor Ratings)

- [ ] No pricing anywhere on homepage or project pages — Q5 explicit rejection
- [ ] No bullet point lists above the fold — visitors must slow down, not scan
- [ ] No stat counter blocks ("234 projecten voltooid") — Lux Interieurbouw 4/10, wrong emotional register
- [ ] No mobile-first hero that clips on desktop — "doesn't use screen maximum" (Set Interieur 4/10, Laura Hindriks 5/10). Hero must be near-full-viewport on desktop.
- [ ] No transitions under 0.4s for content reveals — fast = cheap for this archetype
- [ ] No body background `#FFFFFF` or cool grays — warm cream (`#F0E8DC` range) only
- [ ] No broken CTAs — every button must resolve to a real, functional action (Eric Kuster 7/10 failure)
- [ ] No commercial carousel with overlay buttons in the hero — the video hero is the hero, nothing else
- [ ] No ALL CAPS section headings — ALL CAPS is for navigation labels only, not content headings
- [ ] No pop-up forms or lead capture overlays — antithetical to the luxury positioning
- [ ] No footer with 5+ columns of links — clean 2-column max

---

## STEP 6 — INTERACTIVE PATTERN RECOMMENDATION

**Service count:** By Shakir has 3–4 distinct service types:
1. Volledig interieur (complete interior design)
2. Renovatie (floors, walls, specific spaces)
3. Meubels & styling
4. 3D Ontwerp & Visualisatie (also the entry service for new clients)

**Recommendation: Pattern C — Card Selector, Zero JS**

3–5 services → Pattern C is the default and appropriate. Implementation:

```html
<!-- Service selector in contact form — Step 1 of qualification -->
<fieldset>
  <legend>Wat mag ik voor u betekenen?</legend>
  <label><input type="radio" name="service" value="volledig-interieur">
    Volledig interieur</label>
  <label><input type="radio" name="service" value="renovatie">
    Renovatie & verbouwing</label>
  <label><input type="radio" name="service" value="3d-ontwerp">
    3D ontwerp & visualisatie</label>
  <label><input type="radio" name="service" value="advies">
    Persoonlijk adviesgesprek</label>
</fieldset>
```

Styled as visual cards (not radio buttons), CSS-only selection state. This is a qualification filter, not a conversion funnel — it tells By Shakir what the client needs before the first conversation.

**Pattern NOT recommended:**
- Pattern A (Guided quiz) — only for 15+ services. Overkill here, and too "trades" in character.
- Pattern D (Cost calculator) — explicitly against Q5. Price-shoppers must self-exclude. A cost calculator would attract exactly the wrong audience.

---

## Performance Budget

Per conversion patterns SOP, Archetype B:

| Metric | Target | Notes |
|---|---|---|
| LCP | **< 1.5s** | Video hero: poster image must load first. `hero-poster.webp` as `<img>` with `fetchpriority="high"`, video loads after. |
| CLS | **< 0.1** | All image dimensions declared. No layout shift from font loading. |
| INP | **< 200ms** | GSAP budget: ~47 KB. Only justify if ≥3 GSAP-exclusive effects used (ScrollTrigger, SplitText). Otherwise CSS-only. |
| JS Budget | **≤ 47 KB** | Per archetype B allowance. Astro partial hydration means most JS never loads unless needed. |

---

## Summary Card

```
ARCHETYPE:    B — Visual Portfolio (Interieurontwerper)
TONE:         E4 D3 F7 R10 A6
PALETTE:      Shaded Terracotta — warm espresso + warm sand + muted gold + terracotta
TYPOGRAPHY:   Elegant serif (display) + Humanist sans (body) — weight 300–400 hero
LAYOUT:       Expansive + asymmetric. Full-bleed photography. Narrow text columns.
MOTION:       Slow reveal — 1.5s fade+rise. Video hero ambient. GSAP permitted.
PRIMARY CTA:  "Plan een kennismaking" — soft, qualification-led
FORM:         5-field single-step. Phone optional. Turnstile + honeypot. No multi-step.
OPEN GAP:     Social proof / testimonials — must gather before launch
JS BUDGET:    ≤ 47 KB (Archetype B allowance)
LCP TARGET:   < 1.5s
```

---

## Next: Prompt 5 — Copy Architecture
Then: Prompt 6 — `/teach-impeccable` → DESIGN.md token generation
