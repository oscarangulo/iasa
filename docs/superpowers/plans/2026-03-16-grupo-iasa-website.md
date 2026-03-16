# Grupo IASA Website Redesign - Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional multi-page corporate website for Grupo IASA using Next.js App Router with "Corporativo Elegante" design, reusing all existing content and assets.

**Architecture:** Next.js 14+ App Router with SSG, Tailwind CSS for styling, TypeScript. Multi-page structure with shared layout (navbar/footer). All content hardcoded as data files — no CMS needed. Images already downloaded to `public/images/`.

**Tech Stack:** Next.js 14+, TypeScript, Tailwind CSS, next/font (Plus Jakarta Sans + Inter), next-sitemap

---

## Chunk 1: Project Setup & Design System

### Task 1: Initialize Next.js Project

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

- [ ] **Step 1: Create Next.js project**

```bash
cd /Users/oscarandresrodriguez/Documents/repos/iasa
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --no-turbopack
```

Note: public/images/ already exists with all downloaded assets. The scaffolding should not overwrite it.

- [ ] **Step 2: Install additional dependencies**

```bash
npm install next-sitemap
```

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```

Expected: Server starts on localhost:3000

- [ ] **Step 4: Commit**

```bash
git init
git add -A
git commit -m "chore: initialize Next.js project with Tailwind CSS"
```

### Task 2: Configure Design System (Tailwind + Fonts + Globals)

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Configure Tailwind with custom colors and fonts**

Update `tailwind.config.ts`:
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F2B46",
          light: "#1A3D5C",
          dark: "#0A1F33",
        },
        secondary: {
          DEFAULT: "#2D6A4F",
          light: "#40916C",
          dark: "#1B4332",
        },
        accent: "#40916C",
        muted: "#F1F5F9",
        "text-primary": "#1E293B",
        "text-secondary": "#64748B",
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2: Set up global CSS**

Update `src/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-body text-text-primary antialiased;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }
}
```

- [ ] **Step 3: Configure root layout with fonts and metadata**

Update `src/app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grupo IASA – Medio Ambiente, Ingeniería y Construcción",
    template: "%s | Grupo IASA",
  },
  description:
    "Consorcio de empresas de consultoría ambiental e ingeniería. Auditorías ambientales, eficiencia energética, huella de carbono, ingeniería sanitaria e hidráulica.",
  keywords: [
    "ingeniería ambiental",
    "auditoría ambiental",
    "huella de carbono",
    "eficiencia energética",
    "ingeniería sanitaria",
    "medio ambiente Chile",
    "PROIECTA",
    "PROAMBIENTE",
    "PROCEANIC",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Grupo IASA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${jakarta.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: configure design system with custom colors, fonts, and metadata"
```

---

## Chunk 2: Shared Components (Navbar + Footer)

### Task 3: Build Navbar Component

**Files:**
- Create: `src/components/navbar.tsx`
- Modify: `src/app/layout.tsx` (import Navbar)

- [ ] **Step 1: Create Navbar component**

Create `src/components/navbar.tsx` with:
- Sticky positioning, transparent on top → white with shadow on scroll (using `useEffect` + `useState` for scroll detection in a client component wrapper)
- Logo on left (from `/images/logos/grupo-iasa.png`)
- Navigation links center: HOME, NOSOTROS, SERVICIOS (dropdown with PROIECTA, PROCEANIC, PROAMBIENTE), PROYECTOS, PUBLICACIONES, SGC, CONTACTO
- "Contacto" CTA button on right in green (`secondary` color)
- Mobile hamburger menu with slide-in drawer
- All links use Next.js `<Link>`

- [ ] **Step 2: Add Navbar to root layout**

In `src/app/layout.tsx`, import and render `<Navbar />` inside `<body>` before `{children}`.

- [ ] **Step 3: Verify navbar renders correctly at localhost:3000**

- [ ] **Step 4: Commit**

```bash
git add src/components/navbar.tsx src/app/layout.tsx
git commit -m "feat: add sticky navbar with mobile menu and services dropdown"
```

### Task 4: Build Footer Component

**Files:**
- Create: `src/components/footer.tsx`
- Modify: `src/app/layout.tsx` (import Footer)

- [ ] **Step 1: Create Footer component**

Create `src/components/footer.tsx` with dark blue (`primary`) background and 3 columns:
- Column 1: Contact info (address, phone, email)
- Column 2: Quick links (all nav items)
- Column 3: Logo (`/images/logos/grupo-iasa-firma.png`) + brief tagline
- Bottom bar: "© 2024 Grupo IASA. Todos los derechos reservados."
- Responsive: stack columns on mobile

- [ ] **Step 2: Add Footer to root layout after `{children}`**

- [ ] **Step 3: Verify footer renders correctly**

- [ ] **Step 4: Commit**

```bash
git add src/components/footer.tsx src/app/layout.tsx
git commit -m "feat: add footer with contact info, links, and logo"
```

---

## Chunk 3: Homepage

### Task 5: Build Hero Section

**Files:**
- Create: `src/components/home/hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Hero component**

Full-width hero with:
- Background image (`/images/hero/dscn3824-scaled.jpg`) with `object-cover`
- Gradient overlay: `bg-gradient-to-r from-primary/90 to-primary/30`
- Heading: "Medio Ambiente, Ingeniería y Construcción" (white, Plus Jakarta Sans, text-5xl)
- Subtitle: "Más de 25 años de experiencia en protección y saneamiento ambiental"
- CTA button: "Conozca nuestros servicios" → links to `/servicios/proiecta`
- Min height: `min-h-[600px]` desktop, `min-h-[400px]` mobile

- [ ] **Step 2: Create page.tsx with Hero**

Replace default `src/app/page.tsx` content with Hero component.

- [ ] **Step 3: Verify hero renders at localhost:3000**

- [ ] **Step 4: Commit**

```bash
git add src/components/home/hero.tsx src/app/page.tsx
git commit -m "feat: add hero section with gradient overlay and CTA"
```

### Task 6: Build "Quiénes Somos" Section

**Files:**
- Create: `src/components/home/about-intro.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create AboutIntro component**

Two-column layout (text left, image right):
- Heading: "Quiénes Somos"
- Full paragraph from homepage about GRUPO IASA being a consortium
- Image: `/images/hero/img-0794-min.jpg`
- Background: white
- Max-width container with padding

- [ ] **Step 2: Add to page.tsx below Hero**

- [ ] **Step 3: Commit**

```bash
git add src/components/home/about-intro.tsx src/app/page.tsx
git commit -m "feat: add about intro section on homepage"
```

### Task 7: Build "Nuestras Empresas" Section (Service Cards)

**Files:**
- Create: `src/components/home/services-overview.tsx`
- Create: `src/components/ui/service-card.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create ServiceCard component**

Reusable card with:
- Company logo image
- Company name heading
- Short description
- Bullet list of key services (max 4)
- "Ver más →" link
- Styling: rounded-lg, bg-white, border border-gray-100, shadow-sm, hover:shadow-md transition

- [ ] **Step 2: Create ServicesOverview component**

- Section heading: "Nuestras Empresas"
- 3 cards in a grid (1 col mobile, 3 cols desktop):
  1. PROIECTA (`/images/logos/prycta.png`) → `/servicios/proiecta`
  2. PROCEANIC (`/images/logos/prceainc.png`) → `/servicios/proceanic`
  3. PROAMBIENTE (`/images/logos/ambiente.png`) → `/servicios/proambiente`
- Background: `bg-muted` (#F1F5F9)

- [ ] **Step 3: Add to page.tsx**

- [ ] **Step 4: Commit**

```bash
git add src/components/home/services-overview.tsx src/components/ui/service-card.tsx src/app/page.tsx
git commit -m "feat: add services overview with company cards"
```

### Task 8: Build "Nuestros Resultados" Counter Section

**Files:**
- Create: `src/components/home/results-counter.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create ResultsCounter component**

Client component ("use client") with:
- Dark blue background (`bg-primary`)
- Section heading: "Nuestros Resultados" (white)
- 4 counters in a grid:
  - 20 → "Planes de manejo integral de residuos sólidos"
  - 16 → "Centros de manejo RIS minero"
  - 35 → "RCA aprobadas"
  - 24 → "Depósitos de RSD y RIS construidos"
- Numbers animate (count up) when section enters viewport using IntersectionObserver
- Numbers in text-5xl font-bold text-white, labels in text-sm text-gray-300

- [ ] **Step 2: Add to page.tsx**

- [ ] **Step 3: Commit**

```bash
git add src/components/home/results-counter.tsx src/app/page.tsx
git commit -m "feat: add animated results counter section"
```

### Task 9: Build "Clientes" Logo Grid

**Files:**
- Create: `src/components/home/clients.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Clients component**

- Section heading: "Clientes"
- Grid of client logos from `/images/clients/`:
  - cmpc.png, teck-resources.png, arauco.png, aes-chile.png, bhp-billiton.png, anglo-american.jpg, resiter.jpg, coactiva.png
- Logos displayed with grayscale filter, transition to color on hover
- `filter grayscale hover:grayscale-0 transition-all duration-300`
- Responsive grid: 2 cols mobile, 4 cols desktop
- White background

- [ ] **Step 2: Add to page.tsx**

- [ ] **Step 3: Commit**

```bash
git add src/components/home/clients.tsx src/app/page.tsx
git commit -m "feat: add clients logo grid with grayscale hover effect"
```

### Task 10: Build "Noticias y Publicaciones" Preview

**Files:**
- Create: `src/components/home/news-preview.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create NewsPreview component**

- Section heading: "Noticias y Publicaciones"
- 3 cards showing latest publications:
  1. "The Use of Carbon Footprint as an Eco-Efficiency Indicator in Mining Operations" — image: `/images/publications/7822060.png`, link to PDF
  2. "Visión General de la Gestión de RSU en Europa" — image: `/images/publications/img8588-thumb.jpg`
  3. "Manejo de Aguas en Minería" — "Próxima publicación"
- Card design: image top, title, author, "Abrir" or "Próximamente" button
- "Ver todas →" link to `/publicaciones`
- Background: `bg-muted`

- [ ] **Step 2: Add to page.tsx**

- [ ] **Step 3: Commit**

```bash
git add src/components/home/news-preview.tsx src/app/page.tsx
git commit -m "feat: add news and publications preview section"
```

---

## Chunk 4: Interior Pages (Nosotros, Services)

### Task 11: Build Nosotros Page

**Files:**
- Create: `src/app/nosotros/page.tsx`
- Create: `src/components/ui/page-hero.tsx`
- Create: `src/components/ui/team-card.tsx`

- [ ] **Step 1: Create reusable PageHero component**

Smaller hero for interior pages:
- Background color `bg-primary`, height ~200px
- Page title in white, centered
- Optional subtitle

- [ ] **Step 2: Create TeamCard component**

- Photo (circular crop or rounded-lg)
- Name (font-heading, semibold)
- Role
- Department badge (PROIECTA/PROAMBIENTE colored tag)

- [ ] **Step 3: Build Nosotros page**

`src/app/nosotros/page.tsx` with:
- PageHero: "Nosotros"
- History section: text about German engineering origin, consortium formation
- Política de Calidad section with ISO 9001:2015 mention
- Team grid: 11 members using TeamCard, photos from `/images/team/`
- Stats bar (same as homepage counters but static)
- SEO metadata: title "Nosotros", description about team and experience

Team data:
```ts
const team = [
  { name: "Javier Medina", role: "Ingeniero Civil / Socio y Director", dept: "PROIECTA", photo: "/images/team/javier-medina.jpg" },
  { name: "Joachim Vogdt", role: "Ingeniero Ambiental (M.Sc.) / Jefe de Proyectos", dept: "PROAMBIENTE", photo: "/images/team/joachim-vogdt.jpg" },
  { name: "Yamina Pérez", role: "Ingeniero en Procesos / Directora SGC", dept: "PROAMBIENTE", photo: "/images/team/yamina-perez.jpg" },
  { name: "Abraham Medina", role: "Ingeniero Civil / Ingeniero de Proyectos", dept: "PROIECTA", photo: "/images/team/abraham-medina.jpg" },
  { name: "Cristóbal Rojas", role: "Ingeniero Civil / Ingeniero de Proyectos", dept: "PROIECTA", photo: "/images/team/cristobal-rojas.jpg" },
  { name: "Cristian Fonseca", role: "Ingeniero Civil / Jefe de Proyectos", dept: "PROIECTA", photo: "/images/team/cristian-fonseca.jpg" },
  { name: "Catherine Vielma", role: "Ingeniero Civil / Jefa de Proyectos", dept: "PROIECTA", photo: "/images/team/catherine-vielma.jpg" },
  { name: "Carlos Riquelme", role: "Dibujante Técnico / Proyectista", dept: "PROIECTA", photo: "/images/team/carlos-riquelme.jpg" },
  { name: "Isaac Arriagada", role: "Ingeniero Civil / Jefe de Proyectos", dept: "PROIECTA", photo: "/images/team/isaac-arriagada.jpg" },
  { name: "Nicolás Curkovic", role: "Arquitecto", dept: "PROIECTA", photo: "/images/team/nicolas-curkovic.jpg" },
  { name: "Nelson Ojeda", role: "Ingeniero Ambiental / Jefe de Proyectos", dept: "PROAMBIENTE", photo: "/images/team/nelson-ojeda.jpg" },
];
```

- [ ] **Step 4: Commit**

```bash
git add src/app/nosotros/page.tsx src/components/ui/page-hero.tsx src/components/ui/team-card.tsx
git commit -m "feat: add nosotros page with team grid and company history"
```

### Task 12: Build PROIECTA Service Page

**Files:**
- Create: `src/app/servicios/proiecta/page.tsx`

- [ ] **Step 1: Build PROIECTA page**

- PageHero: "PROIECTA" with subtitle "Ingeniería Sanitaria, Hidráulica y Ambiental"
- "Quiénes Somos" section with intro text
- Services in 4 category cards with icon/heading + bullet list:
  1. Residuos Sólidos (6 items)
  2. Aguas Servidas y RILes (4 items)
  3. Estudios de Hidrología, Geología e Hidrogeología (4 items)
  4. Asesoría e Ingeniería (6 items)
- Projects section: 6 project cards with images from `/images/projects/`
- Contact: proiecta@grupoiasa.cl
- SEO metadata

- [ ] **Step 2: Commit**

```bash
git add src/app/servicios/proiecta/page.tsx
git commit -m "feat: add PROIECTA service page with services and projects"
```

### Task 13: Build PROCEANIC Service Page

**Files:**
- Create: `src/app/servicios/proceanic/page.tsx`

- [ ] **Step 1: Build PROCEANIC page**

- PageHero: "PROCEANIC" with subtitle "Ingeniería Marítima, Monitoreos y Estudios de Ciencia del Mar"
- "Quiénes Somos" section
- Services in 2 category cards:
  1. Estudios Ambientales en Acuicultura y Oceanografía (10 items)
  2. Ingeniería Marítima (4 items)
- SEO metadata

- [ ] **Step 2: Commit**

```bash
git add src/app/servicios/proceanic/page.tsx
git commit -m "feat: add PROCEANIC service page"
```

### Task 14: Build PROAMBIENTE Service Page

**Files:**
- Create: `src/app/servicios/proambiente/page.tsx`

- [ ] **Step 1: Build PROAMBIENTE page**

- PageHero: "PROAMBIENTE" with subtitle "Auditorías Ambientales, Eficiencia Energética y Huella de Carbono"
- Description of the consortium and digital work platform
- Services list:
  - Auditorías Ambientales, de Cumplimiento RCA
  - Estudios de Línea Base de Eficiencia Energética
  - Sistemas de Gestión de Energía (ISO 50.001)
  - Investigación de Sitios con Potencial Presencia de Contaminación (SPPC)
  - Estudios y/o Declaraciones de Impacto Ambiental
- International presence: Chile, Germany, Australia
- SEO metadata

- [ ] **Step 2: Commit**

```bash
git add src/app/servicios/proambiente/page.tsx
git commit -m "feat: add PROAMBIENTE service page"
```

---

## Chunk 5: Remaining Pages (Projects, Publications, SGC, Contact)

### Task 15: Build Proyectos Page

**Files:**
- Create: `src/app/proyectos/page.tsx`

- [ ] **Step 1: Build Proyectos page**

- PageHero: "Nuestros Proyectos"
- Filter tabs: Todos / PROIECTA / PROAMBIENTE / PROCEANIC
- Project cards grid with:
  - Project image from `/images/projects/`
  - Project title
  - Client name
  - Company badge
- Client component for filter interactivity
- All 16 project images used
- SEO metadata

- [ ] **Step 2: Commit**

```bash
git add src/app/proyectos/page.tsx
git commit -m "feat: add projects page with filterable gallery"
```

### Task 16: Build Publicaciones Page

**Files:**
- Create: `src/app/publicaciones/page.tsx`

- [ ] **Step 1: Build Publicaciones page**

- PageHero: "Publicaciones y Documentos"
- 4 publication cards:
  1. Carbon Footprint eco-efficiency (with PDF link to `/images/publications/minexcellence-carbon-footprint.pdf`)
  2. Gestión RSU Europa (with images)
  3. Manejo de Aguas en Minería (próxima publicación)
  4. Investigación y Saneamiento de Suelos (próxima publicación)
- Card design: image, title, authors, download button
- SEO metadata

- [ ] **Step 2: Commit**

```bash
git add src/app/publicaciones/page.tsx
git commit -m "feat: add publications page with download links"
```

### Task 17: Build SGC Page

**Files:**
- Create: `src/app/sgc/page.tsx`

- [ ] **Step 1: Build SGC page**

- PageHero: "Sistema de Gestión de Calidad"
- Full Política de Calidad text (3 paragraphs from content extraction)
- ISO 9001:2015 badge/highlight
- Three consortium companies listed
- Contact: sgc@grupoiasa.cl
- SEO metadata

- [ ] **Step 2: Commit**

```bash
git add src/app/sgc/page.tsx
git commit -m "feat: add SGC quality management page"
```

### Task 18: Build Contacto Page

**Files:**
- Create: `src/app/contacto/page.tsx`

- [ ] **Step 1: Build Contacto page**

- PageHero: "Contacto"
- Two-column layout:
  - Left: Contact form (Nombre, Email, Asunto, Mensaje) with styled inputs and green submit button. Form action can be a placeholder or use `mailto:` for now.
  - Right: Contact details card with address, phone, email, and embedded Google Maps iframe
- SEO metadata

- [ ] **Step 2: Commit**

```bash
git add src/app/contacto/page.tsx
git commit -m "feat: add contact page with form and map"
```

---

## Chunk 6: SEO, Polish & Final Build

### Task 19: Configure Sitemap and Robots

**Files:**
- Create: `next-sitemap.config.js`

- [ ] **Step 1: Create next-sitemap config**

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://grupoiasa.cl",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
```

- [ ] **Step 2: Add postbuild script to package.json**

Add to scripts: `"postbuild": "next-sitemap"`

- [ ] **Step 3: Commit**

```bash
git add next-sitemap.config.js package.json
git commit -m "feat: add sitemap and robots.txt generation"
```

### Task 20: Add Favicons and Final Metadata

**Files:**
- Create: `src/app/favicon.ico` (from grupo-iasa-firma-32x32.png)
- Create: `src/app/apple-icon.png` (from grupo-iasa-firma-180x180.png)

- [ ] **Step 1: Copy favicon files**

```bash
cp public/images/logos/grupo-iasa-firma-32x32.png src/app/favicon.ico
cp public/images/logos/grupo-iasa-firma-180x180.png src/app/apple-icon.png
```

- [ ] **Step 2: Commit**

```bash
git add src/app/favicon.ico src/app/apple-icon.png
git commit -m "feat: add favicon and apple touch icon"
```

### Task 21: Build Verification

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Build succeeds with no errors, all pages statically generated.

- [ ] **Step 2: Test production server**

```bash
npm run start
```

Verify all pages load correctly: /, /nosotros, /servicios/proiecta, /servicios/proceanic, /servicios/proambiente, /proyectos, /publicaciones, /sgc, /contacto

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: verify production build passes"
```
