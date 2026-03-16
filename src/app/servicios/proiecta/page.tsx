import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/page-hero";
import ScrollReveal from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "PROIECTA - Ingeniería Sanitaria, Hidráulica y Ambiental",
  description:
    "Servicios de ingeniería civil, sanitaria y ambiental. Residuos sólidos, aguas servidas, hidrología y asesoría ambiental.",
};

const serviceCategories = [
  {
    title: "Residuos Sólidos",
    items: [
      "Planes Maestros y de Gestión de Residuos",
      "Rellenos Sanitarios y Estaciones de Transferencia",
      "Diseño de Plantas de Tratamiento, Compostaje y Reciclaje",
      "Centros de Manejo de Residuos Industriales",
      "Planes de Cierre",
      "Optimización de Recolección",
    ],
  },
  {
    title: "Aguas Servidas y RILes",
    items: [
      "Diseño de Plantas de Tratamiento de Residuos Industriales Líquidos (RILes)",
      "Tratamiento de Aguas Servidas",
      "Emisarios Submarinos",
      "Monitoreo de Aguas y Efluentes",
    ],
  },
  {
    title: "Estudios de Hidrología, Geología e Hidrogeología",
    items: [
      "Investigación de Sitios contaminados",
      "Geología e Hidrogeología",
      "Estratigrafía y Mecánica de Suelos",
      "Estudios de Napas y Acuíferos",
    ],
  },
  {
    title: "Asesoría e Ingeniería",
    items: [
      "Factibilidad Técnico-Económica",
      "Estudios y Declaraciones de Impacto Ambiental",
      "Modelamiento de emisiones y descargas",
      "Permisos ambientales y sectoriales",
      "Ingeniería conceptual, básica y de detalle",
      "Inspección Técnica de Obras (ITO)",
    ],
  },
];

const projects = [
  {
    title: "CMRIS Antucoya",
    client: "Resiter / Antofagasta Minerals",
    image: "/images/projects/cmris-antucoya-1.jpg",
  },
  {
    title: "Gestión Residuos Los Bronces",
    client: "Resiter / AngloAmerican",
    image: "/images/projects/diagnostico-residuos-los-bronces.jpg",
  },
  {
    title: "Plan de Cierre Vertedero Arauco",
    client: "Arauco",
    image: "/images/projects/cierre-vertedero-arauco-1.jpg",
  },
  {
    title: "Depósito Cenizas Cerro Gris",
    client: "KDM / ENGIE",
    image: "/images/projects/plan-cierre-quivolgo.jpg",
  },
  {
    title: "DRIS Planta Nueva Aldea",
    client: "Arauco",
    image: "/images/projects/dris-celulosa-nueva-aldea.jpg",
  },
  {
    title: "Relleno Sanitario Santa Alicia",
    client: "",
    image: "/images/projects/cierre-relleno-santa-alicia.jpg",
  },
];

export default function ProiectaPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        title="PROIECTA"
        subtitle="Servicios de Ingeniería Civil, Sanitaria y Ambiental"
      />

      {/* Quiénes Somos */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-text-light mb-4">
              La empresa
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-2xl md:text-3xl font-heading text-charcoal mb-8">
              Quiénes Somos
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-text-secondary leading-relaxed max-w-4xl text-lg">
              La empresa PROIECTA S.A. se constituyó con el objetivo de ofrecer
              una completa prestación de servicios de ingeniería en el amplio
              ámbito del medio ambiente, de ingeniería sanitaria, hidráulica y del
              estudio del medio físico terrestre (geología, hidrología,
              hidrogeología), con especial énfasis en solucionar técnicamente los
              problemas que deben enfrentar las empresas privadas y públicas así
              como los órganos del estado e instituciones de toda índole en
              materias ambientales y de regulaciones en esta área.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-sand py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-text-light mb-4">
              Áreas de trabajo
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-2xl md:text-3xl font-heading text-charcoal mb-14">
              Nuestros Servicios
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, i) => (
              <ScrollReveal key={category.title} delay={(i + 1) * 100}>
                <div className="bg-white border border-stone/10 p-8">
                  <h3 className="text-xl font-heading text-charcoal mb-5">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-text-secondary text-sm"
                      >
                        <span className="mt-2 h-px w-4 shrink-0 bg-emerald" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-text-light mb-4">
              Portafolio
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-2xl md:text-3xl font-heading text-charcoal mb-14">
              Nuestros Proyectos
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 80}>
                <div className="group relative overflow-hidden h-[300px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-base font-heading text-white">
                      {project.title}
                    </h3>
                    {project.client && (
                      <p className="text-sm text-white/50 mt-1">
                        {project.client}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-dark py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <p className="text-2xl md:text-3xl font-heading text-white mb-4">
            ¿Tiene un proyecto? Contáctenos
          </p>
          <Link
            href="mailto:proiecta@grupoiasa.cl"
            className="text-emerald hover:text-emerald-light transition-colors"
          >
            proiecta@grupoiasa.cl
          </Link>
        </div>
      </section>
    </main>
  );
}
