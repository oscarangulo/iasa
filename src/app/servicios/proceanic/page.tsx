import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import ScrollReveal from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "PROCEANIC - Ingeniería Marítima y Ciencias del Mar",
  description:
    "Servicios de ingeniería marítima, monitoreos oceanográficos, estudios ambientales en acuicultura y modelaciones MIKE 21.",
};

const serviceCategories = [
  {
    title: "Estudios Ambientales en Acuicultura y Oceanografía",
    items: [
      "Estudios y Declaraciones de Impacto Ambiental",
      "Estudios de Línea Base",
      "Correntometría Euleriana",
      "Correntometría Lagrangiana",
      "Deriva Litoral",
      "Estudios de Dispersión con Rodamina",
      "Caracterización de columna de agua",
      "Comunidades bentónicas y análisis físico-químico de sedimentos",
      "Planes de Vigilancia Ambiental (PVA)",
      "Caracterización preliminar de Sitios (CPS Acuicultura)",
    ],
  },
  {
    title: "Ingeniería Marítima",
    items: [
      "Diseño de Estructuras Marinas",
      "Modelaciones con Plataforma MIKE 21 (DHI)",
      "Pluma de Dispersión de Descargas (emisarios)",
      "Cálculo de Zona de Protección Litoral",
    ],
  },
];

export default function ProceanicPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        title="PROCEANIC"
        subtitle="Ingeniería Marítima, Monitoreos y Estudios de Ciencia del Mar"
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
              Proceanic S.A. es una sociedad de profesionales constituida con el
              objeto de prestar servicios con énfasis en los ámbitos
              marítimo-portuario, hidrográfico, oceanográfico, medioambiental,
              cartográfico, meteorológico, modelaciones con Mike 21, ingeniería
              civil marítima (en puerto, ductos submarinos, análisis de diseño de
              estructuras y obras marítimas en procesos costeros).
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
    </main>
  );
}
