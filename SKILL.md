---
name: tactive-design
description: Use this skill to generate well-branded interfaces and assets for Tactive (Brand Defense Automation), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always link or copy `colors_and_type.css` so tokens (color, type, spacing, radii, shadow, motion) are available. Lucide icons are loaded from CDN — use `<i data-lucide="..." stroke-width="1.75">` and call `lucide.createIcons()`.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Key Tactive design moves to remember:
- Logo: lowercase `tactive` with a single hot-pink dot. Echo the dot — end major headlines with `<span style="color:#E91A4F">.</span>`.
- Primary color is deep navy `#0F1B2D`. Pink `#E91A4F` is a single, sparse accent.
- Inter for everything; Instrument Serif for one editorial accent per screen; JetBrains Mono for numerics/IDs.
- Voice: confident, technical, calm. Three-beat lists. No emoji. Use `→` in CTAs.
- UI kits live in `ui_kits/marketing/` and `ui_kits/product/` — copy components from there.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
