# Architecture Documentation

## Overview
This project is a highly optimized, single-page developer portfolio built with modern web standards. It prioritizes a minimal footprint, zero heavy animation libraries, and strict separation of concerns between data and presentation.

## Core Tech Stack
- **Framework:** [SvelteKit](https://kit.svelte.dev/) (Svelte 5)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** Custom components + [shadcn-svelte](https://www.shadcn-svelte.com/) (powered by Bits UI)
- **Icons:** [Lucide Svelte](https://lucide.dev/) & [Devicon](https://devicon.dev/)
- **Formatting:** standard `.editorconfig`

## Data Architecture (Static Extraction)
To maintain a serverless-friendly, zero-maintenance deployment, all portfolio data (Experience, Projects, Stack) is completely decoupled from the UI components. 
- **Source of Truth:** `src/lib/data.ts`
- **Why:** This avoids the complexity and fragility of a database/CMS for data that changes infrequently. Adding a new project takes seconds and requires no backend infrastructure.

## UI / UX Patterns

### 1. Scroll Reveals (Zero-Dependency)
Instead of using heavy libraries like Framer Motion, animations are handled via a custom Svelte Action (`src/lib/actions/reveal.ts`).
- Uses the native `IntersectionObserver` API.
- Replaces initial Tailwind classes (`opacity-0 translate-y-8`) with visible states.
- 100% hardware-accelerated via CSS transitions.

### 2. Micro-interactions
Buttons and interactive elements use modern CSS techniques:
- Opacity cross-fading for icon swaps.
- `active:scale-[0.98]` for tactile "squish" feedback.
- `blur` filters for smooth pop-in effects.

### 3. Hash Navigation
The navigation relies on native HTML `#hash` links.
- Intercepted smoothly by CSS `scroll-behavior: smooth`.
- Handled gracefully with `scroll-mt-*` Tailwind utilities to prevent the sticky header from overlapping the content.

## Project Structure
```text
src/
├── app.html                 # Main HTML entry
├── app.css                  # Global Tailwind imports
├── lib/
│   ├── actions/             # Svelte Actions (e.g., reveal.ts)
│   ├── components/          # Reusable UI (Section, ProjectItem, StackItem)
│   │   └── ui/              # shadcn-svelte primitives (Accordion, Badge, etc.)
│   └── data.ts              # Centralized data store (Option C architecture)
└── routes/
    ├── +layout.svelte       # Global layout wrapper (Header, ScrollToTop)
    └── +page.svelte         # Main landing page (loops over data.ts)
```

## Deployment
Designed to be deployed flawlessly on edge networks (Vercel, Cloudflare Pages, Netlify). Because the data is static and the animations are CSS-driven, the Time To Interactive (TTI) is near instantaneous.
