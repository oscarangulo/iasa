import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import ScrollReveal from "@/components/scroll-reveal";

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
            <div className="space-y-4 text-text-secondary leading-relaxed max-w-4xl text-lg">
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
          <ScrollReveal delay={200}>
            <div className="max-w-2xl bg-white border border-stone/10 p-8">
              <ul className="space-y-4">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-emerald" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
