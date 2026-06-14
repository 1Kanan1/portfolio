# UI Design: Minimalist CV Portfolio

## 1. Core Philosophy & Aesthetic

- **Vibe:** Clean, direct, professional, and unpretentious. Think of a beautifully typeset LaTeX document or a high-end print resume.
- **Colors:** Monochromatic or a very constrained duotone. High contrast for readability.
    - _Primary Text:_ `#111111` (Deep Charcoal)
    - _Background:_ `#FAFAFA` (Off-white / Paper color)
    - _Accents/Links:_ `#555555` or a subtle single accent color (e.g., a muted blue `#3B82F6`).
- **Typography:**
    - **Headings:** Inter, Helvetica Neue, or a similar crisp geometric sans-serif.
    - **Body:** Same family, focusing on legibility and generous line-height (1.6).
- **Spacing:** Ample white space. Let the content breathe. No unnecessary borders, cards, or heavy shadows.

## 2. Layout Structure (Single Page)

The application will be a single scrollable page, mimicking a CV.

### A. Header (Hero)

- **Name:** Large, bold typography.
- **Title:** Concise professional title (e.g., "Software Engineer").
- **Contact Row:** Minimalist icons or simple text links (Email, GitHub, LinkedIn, Twitter/X).

### B. About (Summary)

- A brief 2-3 sentence summary of professional focus and expertise. No fluff.

### C. Experience

- A chronological list.
- **Component:**
    - Left column (or top line): Dates (e.g., "2021 — Present")
    - Right column (or main block): Role & Company.
    - Body: 2-3 concise bullet points highlighting measurable impact or key technologies.

### D. Selected Projects

- Minimalist list of 2-4 key projects.
- Name, brief 1-line description, and a link to the live site or repository.

### E. Skills / Toolbox

- A simple comma-separated list or a clean grid of core technologies and tools.

### F. Footer

- Minimal copyright text.

## 3. Svelte Component Architecture

Given we are using plain Svelte (Vite + Svelte, no SvelteKit), the component tree will be flat and straightforward:

```text
src/
├── App.svelte                # Main layout and state container
├── components/
│   ├── Header.svelte         # Name, title, links
│   ├── Section.svelte        # Reusable wrapper for semantic <section> tags
│   ├── ExperienceItem.svelte # Individual job entry
│   ├── ProjectItem.svelte    # Individual project entry
│   └── Footer.svelte         # Bottom bar
└── global.css                # Global typographic and layout variables
```

## 4. Responsiveness

- **Desktop:** Content centered with a maximum width (e.g., `max-w-3xl`) to maintain readable line lengths.
- **Mobile:** Full width with comfortable padding. Stack elements vertically where appropriate.
