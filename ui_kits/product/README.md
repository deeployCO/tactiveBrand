# Product UI Kit

A high-fidelity recreation of the Tactive product app — agent dashboard with live threat feed, surface health, takedown queue.

> **Note:** No production code or Figma was provided for the product. This kit is *inferred from the marketing site's product description* (live feed, three modes, coverage surfaces, takedown actions). Treat it as a high-fidelity proposal, not a recreation of an existing screen.

## Components

- `Sidebar` — 240px nav with wordmark, account selector, 6 menu items, user footer
- `TopBar` — page title + global search + "Add surface" CTA
- `StatCards` — 4 KPI cards: detected / defended / in-review / spend-protected
- `SurfaceStrip` — 8-up grid of monitored surfaces with health dots
- `ThreatFeed` — streaming list of threats with severity chips, action buttons, filters; click to open detail modal
- `ThreatDetailModal` — full-screen overlay with metadata grid + takedown actions

## Interactions

- Click any threat row to open the detail modal.
- Click "File takedown →" to flip a row from `High → Defended` (mocked, in-component state).
- Sidebar items toggle visual active state but only the live-feed view is implemented.
