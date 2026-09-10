# AH Growth — Site Brief & Claude Code Prompt Kit (v2: 3D-Heavy Edition)

This is your original brief, kept intact, with a layer added on top: more 3D presence per section, and a deliberate "broken grid" card system so no two sections feel like the same template. Where I changed something, I flagged why — the goal is that every section reads as *designed for this page*, not a repeating card component reused six times.

---

## 1. Brand basics
- **Name:** AH Growth (AH Growth Agency)
- **Industry:** Digital marketing agency — SEO, Local SEO, GBP, Performance Marketing (Google/Meta Ads), Social Media Marketing, Content Marketing, Web Development, AEO/GEO (AI Search Optimization), Branding
- **Tone:** Futuristic, bold, editorial, confident — data-driven but not corporate/boring
- **Audience:** Founders, marketing directors, local business owners looking for measurable growth

## 2. Color palette
| Role | Hex | Use |
|---|---|---|
| Background | `#0A0A0A` | Base dark canvas |
| Accent primary | `#C6FF3D` | CTAs, highlights, counters, cursor glow |
| Accent secondary | `#5B4CFF` | Gradients, glow, hover states |
| Text primary | `#F5F5F0` | Headlines |
| Text secondary | `#8A8A8A` | Body copy |

**One addition worth considering:** a third, rarer accent (a hot magenta or electric cyan, used in maybe 2 places total — like the AEO/GEO card and one 3D shape) so the palette doesn't read as flat lime-on-black everywhere. Lime + violet is already a known "AI dark mode" combo — using it *everywhere* is what makes a site feel templated instead of bold. Reserve pure lime for CTAs and counters only; let violet and the rare third color carry the 3D/ambient work.

Typography suggestion unchanged: a tight, bold grotesk for headlines ("Neue Machina," "General Sans," "Space Grotesk") + a clean sans for body ("Inter" or "Suisse Intl").

## 3. Fake placeholder content
*(unchanged from original — see below for section-specific copy updates where new elements were added)*

**Splash screen:** Loader counter 0%→100%, logo mark `AH GROWTH.`, tagline flash "Engineering Digital Growth."

**Hero:** Headline "We Don't Guess Growth. We Engineer It." / Subhead "AH Growth is a performance-first digital marketing agency blending SEO, paid media, and AI-powered search optimization to turn visibility into revenue." / CTA "Start Growing →"

**Stats bar:** 3.2x Average ROAS · 180+ Brands Scaled · 92% Client Retention · 40+ Countries Reached

**Services (6 tiles):** SEO & Local SEO · Performance Marketing · AI Search Optimization (AEO/GEO) · Social Media Marketing · Web Development · Branding

**Featured Work:** Lumen Skincare (312% organic traffic growth, 6mo) · Northpeak Realty (4.8x ROAS Meta) · Vantra SaaS (#1 in ChatGPT answers for category) · Forge Fitness Studios (local leads +260%)

**Testimonial:** "AH Growth didn't just improve our numbers — they rebuilt how we think about growth entirely." — Sarah Kim, Founder, Lumen Skincare

**CTA footer:** "Let's Build Something That Actually Grows." / Button "Book a Strategy Call →"

## 4. Site structure
Unchanged: `/`, `/services`, `/work`, `/about`, `/contact`

## 5. Tech stack for the agent
Unchanged core: Next.js (App Router) + Tailwind, react-three-fiber + drei for 3D, GSAP + ScrollTrigger + Lenis for scroll/animation, Framer Motion for micro-interactions.

**Added for this version:**
- `@react-three/drei` helpers specifically: `MeshDistortMaterial`, `Float`, `Sparkles`/`Points`, `Environment` (for realistic reflections on 3D shapes), `Trail`
- `maath` (for organic random point distributions — nice for particle fields)
- Consider `@react-three/postprocessing` (Bloom, ChromaticAberration) for the glow-heavy futuristic look — but gate it behind a device-capability check (see Prompt 10 below)

---

## 6. The core idea: a different 3D shape *and* a different card grammar per section

Right now the brief has 3D only in the hero. To make the whole site feel like one continuous 3D-energetic world (not "3D hero, flat everything else"), give **every section its own small 3D motif** and **every card grid its own layout logic** — never the same rounded-card-in-a-row pattern twice. Here's the per-section plan:

| Section | 3D element | Card/layout grammar |
|---|---|---|
| Splash | Wireframe icosahedron assembling itself as % climbs | n/a |
| Hero | Large distorted icosahedron / metaball blob, mouse parallax | n/a |
| Stats bar | Thin rotating torus/ring behind the numbers, barely-there | Numbers on a baseline, no cards — asymmetric column widths, not evenly split 4 |
| Services | Small floating shard/crystal per card that rotates on hover | **Masonry-tilt grid**: alternating cards sit on a slight rotation (−2°/+1.5°/−1° etc.), staggered vertical offsets, not a clean 3-col grid |
| Featured Work | Shared particle field drifting behind the whole grid | **Big/small mixed grid**: 1 hero-size case study (2x2), 1 wide (2x1), 2 small (1x1) — bento-style, never 4 equal tiles |
| Testimonial | Slowly rotating low-poly gem beside the quote | **Inverted/rotated card**: quote card tilted opposite direction from its own text alignment (e.g. text left-aligned, card rotated +3° clockwise) — feels like it's "landed" on the page rather than sitting in a template slot |
| Final CTA | Particle burst / shape explosion on scroll-into-view | n/a |

The point: nothing should be a symmetric grid of identical rounded rectangles. Every grid should look intentionally "placed," like a magazine layout, not "generated," like a component library default.

---

## 7. Updated prompts to give your Claude Code agent

Keep Prompts 1 and 3 from your original brief as-is (project setup and nav are fine). Prompts 2, 4, 5, 6, 7, 8 are revised below with the 3D + card-grammar upgrades. Two new prompts (9 and 10) are added at the end.

### Prompt 1 — Project setup
*(unchanged — use your original)*

### Prompt 2 — Splash / loading screen (updated)
```
Build a full-screen splash/loading component that shows before the homepage
renders. Requirements:
- Full-screen #0A0A0A background, centered "AH GROWTH." wordmark in Space Grotesk
- Behind the wordmark, a small react-three-fiber canvas with a low-poly wireframe
  icosahedron that "assembles" — start as scattered disconnected line fragments,
  and morph/converge into the complete wireframe shape as the % counter climbs
  from 0 to 100 (drive the morph progress off the same timer as the counter,
  not a separate animation)
- Animated percentage counter (0% to 100%) bottom-left, GSAP-driven, tied to a
  fake asset-preload timer (simulate 2-2.5s)
- Thin horizontal progress bar (accent-lime) filling as % increases
- On completion: counter, logo, and 3D shape animate out together in one GSAP
  timeline (scale/fade/slide) revealing the homepage hero underneath with a
  subtle stagger
- Should only play once per session (sessionStorage) — skip on repeat visits
Keep the 3D shape simple (under 500 vertices) so it doesn't fight the perceived
load time. Feel premium and fast, not gimmicky — under 2.5s total.
```

### Prompt 3 — Navigation + smooth scroll
*(unchanged — use your original)*

### Prompt 4 — Hero section with Three.js (updated)
```
Build the homepage hero section: full viewport height, background is a
react-three-fiber canvas with an abstract animated 3D object — a distorted
icosahedron using MeshDistortMaterial from drei, gradient-lit in accent-lime/
accent-violet, wrapped in a Float from drei for a slow idle bob, slowly
rotating, and reacting to mouse movement via parallax (shift camera or object
position, not rotation, so it reads as depth not spin). Add a sparse Sparkles
or Points field around it for depth (very low density, this is ambient not a
snowstorm).

Overlay large editorial headline "We Don't Guess Growth. We Engineer It."
(Space Grotesk, huge, tight letter-spacing) with a GSAP entrance animation
(words/chars split and fade-up, staggered). Add subhead paragraph and a
"Start Growing →" CTA button below. Add a small "scroll ↓" indicator
bottom-center with a subtle bounce.

This is the one section allowed to be maximal — everything downstream should
feel calmer than this by comparison.
```

### Prompt 5 — Scroll-progress pagination (side dots)
*(unchanged — use your original)*

### Prompt 6 — Stats bar + Services grid (updated)
```
Build a horizontal stats bar below the hero with 4 stats (3.2x Average ROAS,
180+ Brands Scaled, 92% Client Retention, 40+ Countries Reached) that count up
from 0 via GSAP + ScrollTrigger on scroll into view. Give the 4 stats
deliberately uneven column widths (not an even 25/25/25/25 split) and add a
thin, slowly-rotating 3D torus or ring mesh positioned behind/between the
numbers at low opacity — barely noticeable, just enough ambient depth that the
section doesn't feel flat after the hero.

Then build a Services section: editorial heading "Elevating Growth in
Unexpected Ways", followed by a grid of 6 service cards (SEO & Local SEO,
Performance Marketing, AI Search Optimization, Social Media Marketing, Web
Development, Branding). Instead of a uniform 3-column grid:
- Give each card a slight, fixed rotation alternating across the grid
  (e.g. -2deg, 1.5deg, -1deg, 2deg, -1.5deg, 1deg) using CSS transform,
  straightening to 0deg on hover with a smooth transition
- Stagger the cards' vertical position slightly (odd cards shifted down ~16px)
  so the grid reads as scattered/placed rather than snapped to a rigid grid
- Each card gets a tiny floating 3D shard (simple low-poly tetrahedron or
  crystal, react-three-fiber, one shared canvas or 6 small canvases — your
  call on performance) that rotates faster on hover
- Hover state: card straightens to 0deg, lifts (translateY + scale 1.02),
  accent-violet glow border fades in
- Staggered fade/slide-up entrance on scroll, but entrance order should
  follow the visual stagger, not just left-to-right
```

### Prompt 7 — Featured Work section (updated)
```
Build a "Featured Work" section as an editorial bento grid — NOT 4 equal-size
cards. Layout:
- Vantra SaaS: large card, 2 columns wide x 2 rows tall (this is your AI/GEO
  case study — give it top billing)
- Northpeak Realty: wide card, 2 columns x 1 row
- Lumen Skincare: small card, 1x1
- Forge Fitness Studios: small card, 1x1
Use CSS grid-template-areas so this exact arrangement is explicit and stable,
not auto-placed.

Each card: placeholder image/gradient thumbnail, project name, one-line result
stat, category tag. On hover: image scales slightly, an arrow icon reveals,
and the card lifts with a soft shadow increase. Add a single shared particle
field (react-three-fiber, low density, drifting slowly) positioned behind the
whole grid as one canvas spanning the section — not per-card — so it reads as
one ambient atmosphere rather than 4 separate effects.

On mobile, don't try to preserve the bento layout — switch to horizontal
scroll-snap, one card at a time, in this order: Vantra, Northpeak, Lumen, Forge.
```

### Prompt 8 — Testimonial + final CTA + footer (updated)
```
Build a testimonial section with one large quote card:
- Card background: a slightly different, faintly raised surface than the page
  background (e.g. #111111 with a very subtle border), rotated -3deg via CSS
  transform, positioned slightly off-center (not dead-center in the viewport)
- Quote text inside the card is left-aligned (deliberately NOT centered to
  match the card's rotation — the text sits straight, the card frame is
  tilted, so it feels like a photo dropped onto a page rather than a floating
  panel)
- Client name/title below the quote, inside the card, in accent-lime
- Small low-poly gem/crystal mesh (react-three-fiber) floats beside the card,
  slow idle rotation, positioned so it slightly overlaps the card edge
  (z-index above the card) for depth
- Whole thing fades/scales in on scroll into view

Then build the final CTA section: bold editorial headline "Let's Build
Something That Actually Grows.", large "Book a Strategy Call →" button,
background using a Three.js particle system that sits mostly dormant/sparse
until the section enters view, then bursts outward and settles into a slow
drift — trigger this off ScrollTrigger, not autoplay on mount, so it's a
reward for scrolling this far rather than a looping background.

Finish with a footer: logo, sitemap links, social icons, office/contact info,
copyright line — dark, minimal, small type, no 3D here. The CTA above it
should feel like the last "big moment"; the footer should feel calm on purpose.
```

### Prompt 9 — Cross-section 3D consistency pass (new)
```
Review every 3D element added across the site (splash, hero, stats bar,
services cards, featured work, testimonial) and do a consistency pass:
- Confirm all shapes share the same lighting setup/environment preset so they
  don't look like they're from different scenes
- Confirm the color story is consistent: lime and violet should be the two
  dominant gradient colors on every 3D object, with at most one section using
  a third accent color
- Confirm rotation speeds feel like a family (nothing spinning fast next to
  something barely moving unless that contrast is intentional — the hero
  object can be the most active, everything else should idle slower)
- Confirm every 3D canvas has a device-tier check: on lower-end devices or
  when prefers-reduced-motion is set, replace the 3D mesh with a static
  gradient/SVG equivalent rather than removing it entirely, so the page still
  looks designed, just calmer
Report what you adjusted and any objects that felt inconsistent before this pass.
```

### Prompt 10 — Performance & polish pass (was Prompt 9, expanded for the heavier 3D load)
```
Run a performance and accessibility pass on the whole site:
- Lazy-load every Three.js canvas (client-only mount, loading fallback per
  section, not just the hero)
- Add a device-capability check on load (rough heuristic: navigator hardware
  concurrency, or a simple WebGL capability probe) — on lower-tier devices,
  drop particle counts, disable postprocessing (Bloom etc.), and simplify
  geometry site-wide, not just in the hero
- Ensure all GSAP ScrollTriggers are killed/refreshed properly on route change
- Add prefers-reduced-motion handling globally: disable shape rotation/morph,
  keep only opacity/fade transitions
- Check color contrast on all text against backgrounds, including text sitting
  on top of 3D canvases (add a subtle backdrop/gradient scrim behind headline
  text where a 3D object could reduce contrast)
- Optimize images (next/image) and defer non-critical JS
- Test scroll performance at 60fps on mid-range devices with ALL 3D sections
  active simultaneously (not just hero in isolation) — reduce particle count
  or geometry complexity per-section if the combined load drops below 60fps
Report back what you changed, current frame-rate numbers if measurable, and
any remaining risks.
```

---

## 8. How to work efficiently with a Claude Code agent
*(unchanged from your original — still correct)*

1. One prompt = one deliverable. Don't ask for the whole site in one shot.
2. Let it finish and run before moving on — view the result before the next prompt.
3. Give feedback as direct edits, not new specs.
4. Reference real sites by name for tone (e.g. "hover state like Off+Brand's work grid").
5. Ask it to commit/checkpoint often so you can roll back a section without losing the rest.
6. Save this brief in the project as `BRIEF.md` and tell the agent to reference it.
7. Batch small tweaks once the structure is solid.

**One addition for this version:** after Prompts 6, 7, and 8 (the three sections with new card grammars), explicitly ask the agent to screenshot the section and compare it against the "3D element / card grammar" table in section 6 above — it's easy for an agent to quietly default back to a uniform grid under the hood even when the prompt asked for an irregular one, and catching that per-section is much cheaper than catching it at the end.
