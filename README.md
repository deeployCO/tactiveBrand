# Tactive Design System

> **Brand Defense Automation** — an AI agent that defends brands against the AI-era threat surface (deepfakes, fake storefronts, impersonation, ad-budget leaks).

Tactive is a B2B SaaS platform sitting between marketing tools (which bolt monitoring on as a side feature) and enterprise digital risk protection vendors (ZeroFox, BrandShield, Memcyco — all $50k+). It targets the mid-market: CMO + CISO co-buyers, performance marketing leads, brand directors.

The agent runs in **three modes**:
- **Brand Defense** — unauthorized brand use, deepfakes, phishing pages, fake storefronts, cloned apps, "vibe-jacking"
- **Campaign Defense** — broken landing pages, drift, ghost spend, disapproved ads still serving, pixel failures
- **Competitive Defense** — competitor ad activity, search shifts, bidding patterns, new launches detected

Coverage surfaces: Meta, Google, TikTok, YouTube, app stores, marketplaces, open web, messaging.

---

## Sources used to build this system

- **Logo PNG** — `uploads/Tactive_Logo.png` (provided by user). Lowercase "tactive." wordmark in deep navy with a hot-pink dot doubling as the dot of the *i* and the period.
- **Live marketing site** — `https://tactive.digital/` and `/product/`. Used for product positioning, copy patterns, and feature taxonomy.
- **No Figma or codebase was attached.** Visual recreations below are inferred from the logo + the brief's "modern and light" direction. Where I had to invent (component states, dashboard chrome), I flagged it in the relevant section.

---

## Index — files in this system

| Path | What it is |
|---|---|
| `README.md` | This file. Brand context + content + visual + iconography rules. |
| `SKILL.md` | Agent Skill front-matter. Drop into Claude Code as a skill. |
| `colors_and_type.css` | All tokens (color, type, spacing, radii, shadow, motion) + base `.tac-*` classes. |
| `assets/` | Logos, favicons, the brand mark in multiple variants. |
| `preview/` | Small static cards used by the Design System review tab. |
| `ui_kits/marketing/` | Marketing-site UI kit (hero, nav, three-modes, coverage grid, footer). |
| `ui_kits/product/` | Product-app UI kit (sidebar nav, threat feed, detection card, takedown queue). |

---

## CONTENT FUNDAMENTALS — how Tactive talks

**Voice:** confident, technical, calm. Not playful. Not corporate-stiff. Reads like a security product written by someone who also writes good marketing copy. Comfortable with short, declarative sentences.

**Tone shifts by surface:**
- *Hero / headline:* punchy, almost manifesto-like. `One agent. Three modes. Always defending.`
- *Feature explainers:* mechanical, plain. `Submits takedowns through platform APIs.`
- *Comparison / positioning:* sharp, slightly pointed. `Marketing tools bolt monitoring on. We start there.`
- *CTA:* direct verbs. `Run my audit →`

**Voice rules:**
- **We / your**, not "you" alone. ("*Connect Tactive to your ad accounts.*") "We" appears sparingly — mostly in pricing/about.
- **Lowercase product/feature names in flow** but Title Case in nav and section headers (Brand Defense, Campaign Defense, Competitive Defense).
- **The wordmark is always lowercase**: `tactive.` Never `Tactive` in the logo lockup. In body copy, `Tactive` (capitalized) is fine.
- **No exclamation marks.** Confidence is shown by understatement.
- **No emoji.** Status icons use simple line glyphs or single-color dots.
- **Numbers are specific.** `$199`, `7 days`, `$50k+`. Round numbers feel hand-wavy; specifics feel measured.
- **Action arrows** — a literal `→` appears in CTAs (`Run my audit →`) and step labels (`Detect → Decide → Act`). It's a brand device, not just decoration.
- **Section eyebrows** are sparse all-caps with wide tracking: `01 / DETECT`, `MODE 02`, `WHY TACTIVE VS. THE ALTERNATIVES`.

**Sentence structures we lean on:**
- Three-beat lists (always three): "Detect → Decide → Act." "One agent. Three modes. Always defending."
- "X. Y. Z." fragments where a comma would be expected.
- "Continuous [action] across [list]." (`Continuous monitoring across Meta, Google, TikTok…`)
- Buyer call-outs at the end of feature blocks: `**Who buys it:** CMO, brand director, legal counsel`

**Words we use:** agent, autonomous, continuous, surface, signal, threat, takedown, defense, mode, lens, run.
**Words we avoid:** journey, empower, unleash, revolutionary, game-changer, simply, just.

---

## VISUAL FOUNDATIONS

### Color
- **Anchor 1:** Deep navy `#0F1B2D` — pulled from the logo wordmark. This is the primary text color and the inverse-surface background.
- **Anchor 2:** Hot pink `#E91A4F` — the dot. Used as a single accent: links, active states, the period-style decoration after major headlines, focus rings, danger status. It is the *only* warm color in the palette; that's what makes it pop.
- **Neutrals** are a cool, slightly blue-tinted gray ramp (`#FAFBFC` → `#E6EAF0` → `#6B7B91`). Avoid pure `#FFF` for the page background — paper-white reads warmer and more premium.
- Semantic colors (success/warn/info) are deliberately desaturated so the pink stays the loudest thing on screen.

### Type
- **Inter** for everything UI, marketing, and dashboard. Tight tracking on display (`-0.035em`), normal on body.
- **Instrument Serif** for editorial accents only — pull-quotes, the occasional italic in a hero ("*your brand's autonomous defense layer*"), section dividers in long-form. ≤ 1 use per screen.
- **JetBrains Mono** for numerics, code, threat IDs, timestamps in dashboards.
- **Display headlines are tight and large**: `clamp(48px, 6vw, 88px)`, line-height 1.02, weight 700.
- **Period as a brand mark.** The logo ends with a pink period. Mirror this in major headlines: end with a small pink dot. Subtle, optional.

### Layout
- **Generous whitespace.** Sections breathe (`--sp-9: 96px`, `--sp-10: 128px` between major blocks).
- **12-col grid, 1280px max-width** for marketing. Product is 1440 design width with a 240px sidebar.
- **Asymmetric grids** preferred for hero areas — text 5-cols, image 7-cols. Avoid centered everything.

### Backgrounds
- **Default page:** `--bg-2` (paper white `#FAFBFC`).
- **Inverse hero blocks:** `--bg-inverse` (deep navy). Used 1–2× per marketing page, never in product chrome.
- **No gradients** as primary backgrounds. Allowed: a single subtle radial-glow of pink (5–8% opacity) behind a hero word, like spotlight on the brand mark. No purple-to-blue gradients.
- **No textures.** Pattern repeats are off-brand.
- **Imagery** is product-screenshot-forward when possible, or sharp dark studio-lit objects (think: cool, slightly de-saturated, never warm orange/yellow tones).

### Cards
- White surface (`#FFFFFF`), 1px hairline border `--border-1`, radius `--r-md` (12px), shadow `--shadow-1` at rest, `--shadow-3` on hover.
- **No left-border-accent cards.** Use a small pink dot in the top-left or a pink eyebrow above the title instead.

### Borders & dividers
- 1px hairlines in `--border-1` (`#E6EAF0`) for almost everything.
- Section dividers can also be a single 4px navy line for emphasis (used sparingly).
- Pill-shaped chips have full `border-radius: 999px`.

### Corner radii
- Inputs / buttons: 8px (`--r-sm`)
- Cards: 12px (`--r-md`)
- Modals / hero cards: 16px (`--r-lg`)
- Big feature panels: 24px (`--r-xl`)
- Pills / avatars: 999px

### Shadows
- Three soft, low-blur shadows (`--shadow-1` through `--shadow-3`) plus a punchy `--shadow-pink` for primary CTA hover. Never combine multiple drop shadows on one element. No inner shadows in product UI.

### Hover & press states
- **Buttons:** primary navy → lighten to navy-700 on hover; pink CTA → keeps pink-500 but adds `--shadow-pink`. Press: scale 0.98, 100ms.
- **Cards / list rows:** background goes from white → `--tac-mist`, plus shadow steps from 1 → 2.
- **Links:** inline pink text, underline on hover (1px, offset 2px). Never blue.

### Animation
- **Fast, ease-out**, mostly. `--dur-base: 200ms`, `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`.
- Page-level reveals: 360ms slide-up + fade. No bounces. No springs.
- Loading: a single pink dot pulsing (echoes the logo). Not spinners.

### Transparency & blur
- Sticky nav uses `backdrop-filter: blur(12px)` over white-90%.
- Modal overlays: navy at 50% opacity, no blur underneath.
- Otherwise, opaque.

### Imagery
- Product UI screenshots in dark mode are fine even though the marketing site is light — they read as "the agent's view."
- Photography: cool, slightly desaturated, dark backgrounds, rim-light. Never warm grain, never lifestyle-stock.

---

## ICONOGRAPHY

**Approach:** **Lucide** is the chosen icon system — 1.5–1.75px stroke, line style (no fills), inherits `currentColor`. Lucide is loaded from CDN; no per-icon SVG files are committed.

**This is a substitution.** No proprietary Tactive icon set exists in the source materials. Lucide was chosen because:
- Its stroke style matches the logo's confident, geometric feel.
- It has comprehensive coverage of security/marketing concepts (`shield`, `eye`, `radio`, `target`, `radar`, `link-2-off`, `circle-alert`, `gavel`).
- It's CDN-available (`https://unpkg.com/lucide-static`) and has a React package.

**Sizing:**
- Inline with body text: 16px
- Buttons: 16px (with 8px gap to label)
- Sidebar nav: 18px
- Section eyebrows / decorative: 20–24px
- Marketing illustrations: 32–48px

**Color rules:**
- Default: `currentColor` — inherits from the surrounding text.
- Status: matches the semantic var (success/warn/danger).
- Decorative emphasis: `--tac-pink-500`. Only one icon-on-pink per screen.

**Stroke weight:** 1.75px is the house default. Override Lucide's 2px with `stroke-width="1.75"`.

**Emoji and unicode glyphs:** never. The arrow `→` (U+2192) is the *one* allowed unicode mark, used as a brand device in CTAs and step flows.

**The brand mark:** the pink dot is itself an icon. Use it as a logo-substitute, a status indicator (online / live / actively defending), and a section-header period. Always perfectly circular, always `--tac-pink-500`.

**File assets in `assets/`:**
- `tactive-logo.png` — original logo (984×232, transparent PNG)
- `tactive-mark.svg` — pink-dot mark only, vector
- `tactive-wordmark-dark.svg` — wordmark in navy on transparent
- `tactive-wordmark-light.svg` — wordmark in white on transparent (for navy backgrounds)
- `favicon.svg` — pink dot at favicon resolution
