# Marketing UI Kit

Recreates the **tactive.digital** marketing home page using the design system. Components mirror the live site sections inferred from `https://tactive.digital/` and `/product/`.

## Components

- `Nav` — sticky blurred top nav with wordmark + 5 links + pink CTA
- `Hero` — split hero: left text/CTAs, right live-feed product preview card on dark
- `ThreeModes` — dark section, tab between Brand / Campaign / Competitive Defense, two-col feature list + buyer call-out
- `Coverage` — 4×2 surface grid (Meta, Google, TikTok, YouTube, etc.) with Lucide icons
- `CompareSection` — light gray section with "vs. alternatives" comparison table
- `CTA` — final dark panel with pink radial-glow background, audit CTA
- `Footer` — 4-col footer with wordmark + product/company/resources links

## Visual decisions

- Headlines end with a **pink period** (logo echo) — `<span style={{color:'var(--tac-pink-500)'}}>.</span>` at end of every h1/h2.
- The product preview card in the hero is **dark mode** even though the page is light — visualizing "the agent's view."
- Three Modes section is the **only fully-dark block** on the page, anchoring the brand's serious/security positioning.
- Pink is used **once per section maximum** as accent (logo dot, eyebrow dot, period, CTA fill, focus ring).
