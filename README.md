# Aleksey Samarskiy — personal site

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `app/page.tsx` — all sections (Hero, About, Creako Labs, Capabilities,
  Products, Contact) in one file for now — easy to split into
  `components/` as content grows.
- `components/GrowthLine.tsx` — the signature element: a hand-drawn-style
  growth trajectory used large in the hero and as a thin recurring divider
  between sections. It doubles as a "signature" — a nod to brand identity
  work — and a growth chart.
- `app/globals.css` — design tokens (color, hairlines, the draw-in
  animation for the growth line), respects `prefers-reduced-motion`.

## Design tokens

- `ink` #14171C — base background (graphite-navy, not pure black)
- `paper` #EDE9DF — reserved for future "specimen" panels (brand samples)
- `signal` #FF4A2E — growth/action accent (CTAs, the growth line, key stats)
- `data` #6C8CFF — secondary accent for data/product-side content
- Display font: Bricolage Grotesque · Body: Inter · Labels/tags: IBM Plex Mono

## Content still to fill in

- Replace `hello@example.com` and the LinkedIn `href="#"` placeholder
- Metrics for Recal/Ray once you can share numbers (users, CTR, growth %)
- Once Creako Labs has its own site, link the company name to it directly
- A "Work" section for design case studies can be added between
  Capabilities and Products if you want to keep some design portfolio
  visible — currently omitted to keep the growth/product framing primary
