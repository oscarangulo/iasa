import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";

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
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-6">
            Quiénes Somos
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-4xl">
            Proceanic S.A. es una sociedad de profesionales constituida con el
            objeto de prestar servicios con énfasis en los ámbitos
            marítimo-portuario, hidrográfico, oceanográfico, medioambiental,
            cartográfico, meteorológico, modelaciones con Mike 21, ingeniería
            civil marítima (en puerto, ductos submarinos, análisis de diseño de
            estructuras y obras marítimas en procesos costeros).
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-muted py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-primary font-heading mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-text-secondary text-sm"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
