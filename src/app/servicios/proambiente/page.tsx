import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "PROAMBIENTE - Auditorías Ambientales y Eficiencia Energética",
  description:
    "Auditorías ambientales, eficiencia energética, huella de carbono, gestión de pasivos ambientales e investigación de sitios contaminados.",
};

const services = [
  "Auditorías Ambientales, de Cumplimiento RCA, de Residuos y/u otras emisiones",
  "Estudios de Línea Base de Eficiencia Energética",
  "Sistemas de Gestión de Energía (ISO 50.001)",
  "Investigación de Sitios con Potencial Presencia de Contaminación (SPPC)",
  "Estudios y/o Declaraciones de Impacto Ambiental",
];

export default function ProambientePage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        title="PROAMBIENTE"
        subtitle="Auditorías Ambientales, de Eficiencia Energética y Huella de Carbono"
      />

      {/* About */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-6">
            Quiénes Somos
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed max-w-4xl">
            <p>
              GRUPO IASA es un Consorcio de empresas de servicios ambientales y
              profesionales asociados que ofrece servicios integrados de
              administración de proyectos, inspección técnica de obras de
              infraestructura sanitaria, proyectos de remediación de suelos,
              cierre de vertederos y gestión de pasivos ambientales.
            </p>
            <p>
              Los servicios operan a través de una Plataforma Digital de Trabajo
              y un Sistema de Gestión de Calidad integrados, con presencia en
              Chile, Alemania y Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-muted py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10 text-center">
            Nuestros Servicios
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-sm">
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2 text-text-secondary text-sm"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
