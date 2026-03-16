# Grupo IASA - Sitio Web Corporativo

Sitio web corporativo de **Grupo IASA**, consorcio de empresas de consultoría ambiental e ingeniería con sede en Santiago de Chile. Especializado en auditorías ambientales, eficiencia energética, huella de carbono, ingeniería sanitaria, hidráulica y marítima.

## Tech Stack

- **Framework:** Next.js 15 (App Router, SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Plus Jakarta Sans + Inter (via next/font)
- **SEO:** next-sitemap (sitemap.xml + robots.txt automáticos)

## Estructura del Sitio

| Ruta | Página |
|------|--------|
| `/` | Homepage |
| `/nosotros` | Historia, equipo, política de calidad |
| `/servicios/proiecta` | PROIECTA - Ingeniería Sanitaria, Hidráulica y Ambiental |
| `/servicios/proceanic` | PROCEANIC - Ingeniería Marítima y Ciencias del Mar |
| `/servicios/proambiente` | PROAMBIENTE - Auditorías Ambientales y Eficiencia Energética |
| `/proyectos` | Galería de proyectos con filtros |
| `/publicaciones` | Documentos técnicos y publicaciones |
| `/sgc` | Sistema de Gestión de Calidad (ISO 9001:2015) |
| `/contacto` | Formulario de contacto e información |

## Empresas del Consorcio

- **PROIECTA S.A.** — Ingeniería Sanitaria, Hidráulica y Ambiental
- **PROAMBIENTE S.A.** — Auditorías Ambientales, Eficiencia Energética y Huella de Carbono
- **PROCEANIC S.A.** — Ingeniería Marítima, Ciencias del Mar y Programas de Vigilancia Ambiental

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Servidor de producción
npm start
```

## Deploy

El sitio genera páginas estáticas (SSG) para máximo rendimiento. Compatible con:

- **Vercel** (recomendado)
- **Netlify**
- Cualquier hosting que soporte Node.js o archivos estáticos

## Contacto

- **Web:** [grupoiasa.cl](https://grupoiasa.cl)
- **Email:** iasa@grupoiasa.cl
- **Dirección:** Av. Providencia N°2653, Edificio Forum, Of. 1308, Providencia, Santiago de Chile
- **Teléfono:** +56 2 2585 9840 / 2585 9841 / 2585 9842
