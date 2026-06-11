# Architecture

## Tech Stack
* **Framework:** SvelteKit
* **Build Tool:** Vite (via SvelteKit)
* **Styling:** Vanilla CSS (`app.css` + scoped component styles). No external CSS frameworks to maintain maximum flexibility and the requested minimal aesthetic.
* **Routing:** SvelteKit file-based routing.
* **Data Flow:** SvelteKit `+page.server.js` or `+page.js` for data loading, future-proofing for admin dashboard.

## Component Hierarchy
* **+layout.svelte** (Global layout and CSS import)
  * **+page.svelte** (Main CV Page)
    * **Header** (Identity and Contact)
    * **Section** (Generic wrapper)
      * **ExperienceItem** (Iterated for work history)
    * **Section** (Generic wrapper)
      * **ProjectItem** (Iterated for portfolio)
    * **Footer**
