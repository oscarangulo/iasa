# Grupo IASA Website Redesign

## Overview
Rebuild the Grupo IASA corporate website (grupoiasa.cl) using Next.js App Router with a "Corporativo Elegante" design approach. Multi-page architecture optimized for SEO. All existing content, logos, and images are reused from the current site.

## Technology Stack
- **Framework:** Next.js 14+ (App Router, SSG)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Fonts:** Plus Jakarta Sans (headings), Inter (body) via next/font/google

## Design System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| primary | #0F2B46 | Navbar, hero overlay, footer, headings |
| secondary | #2D6A4F | CTAs, accents, service highlights |
| accent | #40916C | Hover states, secondary CTAs |
| bg-white | #FFFFFF | Primary background |
| bg-light | #F8FAFB | Alternating section background |
| bg-muted | #F1F5F9 | Cards, subtle backgrounds |
| text-primary | #1E293B | Body text |
| text-secondary | #64748B | Captions, secondary text |

### Typography
- **Headings:** Plus Jakarta Sans, bold/semibold
- **Body:** Inter, regular/medium
- **Scale:** text-sm (14px), text-base (16px), text-lg (18px), text-xl (20px), text-2xl (24px), text-3xl (30px), text-4xl (36px), text-5xl (48px)

### Components
- **Navbar:** Sticky, transparent on hero → white with shadow on scroll. Logo left, links center, "Contacto" CTA button right (green).
- **Hero:** Full-width image with gradient overlay (primary→transparent), heading + subtitle + CTA.
- **Service Cards:** Rounded border, subtle shadow, hover elevation. Logo + title + bullet list + "Ver más" link.
- **Counter Section:** Dark blue background, 4 animated counters (count up on viewport entry).
- **Client Logos:** Grid layout, grayscale filter → color on hover.
- **News Cards:** Image + title + excerpt + "Abrir" link.
- **Footer:** 3 columns on dark blue: contact info, sitemap links, logo. Copyright bar below.

## Page Structure

### 1. Home (`/`)
- Hero with slider images from current site
- "Quiénes Somos" intro paragraph + image
- "Nuestras Empresas" — 3 service cards (PROIECTA, PROCEANIC, PROAMBIENTE)
- "Nuestros Resultados" — 4 animated counters (20 estudios, 16 centros, 35 RCA, 24 depósitos)
- "Clientes" — logo grid
- "Noticias y Publicaciones" — 3 latest cards
- Footer

### 2. Nosotros (`/nosotros`)
- Company history and German engineering origin
- Mission/philosophy text
- Team grid: photo + name + title per person (11 members)

### 3. Services (3 subpages)

#### `/servicios/proiecta`
- PROIECTA Ingeniería Alemana S.A.
- Ingeniería Sanitaria, Hidráulica y Ambiental
- Services: Búsquedas de sitios, Infraestructura residuos sólidos, Tratamiento aguas servidas, Obras hidráulicas, Saneamiento ambiental, Planes de cierre

#### `/servicios/proceanic`
- PROCEANIC S.A.
- Ingeniería Marítima, Ciencias del Mar
- Services: Estudios acuicultura, Ingeniería obras marítimas, Estudios oceanográficos, Programas vigilancia ambiental

#### `/servicios/proambiente`
- PROAMBIENTE S.A.
- Auditorías Ambientales, Eficiencia Energética, Huella de Carbono
- Services: Auditorías ambientales/RCA, Estudios línea base energética, ISO 50.001, Investigación SPPC, Estudios impacto ambiental

### 4. Proyectos (`/proyectos`)
- Filterable gallery by company/type
- Project cards with images

### 5. Publicaciones (`/publicaciones`)
- Cards with PDF download links
- 4 publications from current site

### 6. Contacto (`/contacto`)
- Contact form (name, email, phone, message)
- Company info: Av. Providencia N°2653, Edificio Forum, Of. 1308, Providencia, Santiago de Chile
- Phones: +56 2 2585 9840 / 9841 / 9842
- Email: iasa@grupoiasa.cl

## Assets to Download
All images and logos from the current WordPress site at grupoiasa.cl:
- Logo principal: GRUPO-IASA.png, GRUPO-IASA_firma.png
- Logos empresas: prycta.png, PRCEAINC.png, AMBIENTE.png
- Hero/slider images
- Project photos
- Team photos
- Client logos
- Publication images

## SEO Strategy
- Per-page metadata with title, description, Open Graph tags
- Automatic sitemap via next-sitemap
- Semantic HTML (header, main, section, article, footer)
- Descriptive alt text on all images
- SSG (Static Site Generation) for maximum Core Web Vitals performance
- Structured data (Organization schema)

## Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu on mobile
- Stack cards vertically on small screens
- Full-width hero on all sizes
