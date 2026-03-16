# CLAUDE.md - Grupo IASA Website

## Project Overview
Corporate website for Grupo IASA, a consortium of environmental engineering consulting companies based in Santiago, Chile.

## Tech Stack
- Next.js 15 (App Router, SSG)
- Tailwind CSS v4 (CSS-based config in `src/app/globals.css`, NOT `tailwind.config.ts`)
- TypeScript
- Fonts: Plus Jakarta Sans (headings) + Inter (body) via `next/font/google`

## Key Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build (+ auto sitemap generation)
npm run start    # Production server
npm run lint     # ESLint
```

## Architecture
- `src/app/` — Pages using App Router (each folder = route)
- `src/components/` — Reusable components
  - `src/components/home/` — Homepage-specific sections
  - `src/components/ui/` — Shared UI components (PageHero, TeamCard)
  - `src/components/navbar.tsx` — Client component (scroll detection)
  - `src/components/footer.tsx` — Server component
- `public/images/` — All static assets organized by category (logos, hero, team, clients, projects, publications)

## Design System (Tailwind v4)
Colors defined in `src/app/globals.css` via `@theme inline`:
- Primary: `#0F2B46` (navy blue) — `bg-primary`, `text-primary`
- Secondary: `#2D6A4F` (forest green) — `bg-secondary`, `text-secondary`
- Accent: `#40916C` — `bg-accent`
- Muted: `#F1F5F9` — `bg-muted`
- Text: `#1E293B` primary, `#64748B` secondary

## Pages
- `/` — Homepage (hero, about, services cards, results counter, clients, news)
- `/nosotros` — Team, history, quality policy
- `/servicios/proiecta` — PROIECTA services + projects
- `/servicios/proceanic` — PROCEANIC services
- `/servicios/proambiente` — PROAMBIENTE services
- `/proyectos` — Filterable project gallery (client component)
- `/publicaciones` — Technical publications
- `/sgc` — Quality management system
- `/contacto` — Contact form + info

## Notes
- All content is hardcoded (no CMS)
- Images downloaded from original WordPress site at grupoiasa.cl
- SEO: per-page metadata, Open Graph, auto-generated sitemap.xml + robots.txt
- All pages are statically generated (SSG) for maximum performance
