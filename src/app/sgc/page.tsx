import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import ScrollReveal from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Sistema de Gestión de Calidad",
  description:
    "Sistema de Gestión de Calidad ISO 9001:2015 de Grupo IASA.",
};

export default function SGCPage() {
  return (
    <main>
      <PageHero title="Sistema de Gestión de Calidad" subtitle="SGC" />

      {/* Content */}
      <section className="py-24 md:py-32 max-w-4xl mx-auto px-8 md:px-16">
        <ScrollReveal>
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-emerald mb-6">
            ISO 9001:2015
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-2xl md:text-3xl font-heading text-charcoal mb-8">
            Política de Calidad
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
            <p>
              El consorcio de empresas GRUPO IASA (PROIECTA S.A., PROAMBIENTE S.A.
              e INGENIERÍA ALEMANA S.A.) presta Servicios de Ingeniería, Auditoría
              y Consultoría Ambiental, por medio de una Plataforma Digital de
              Trabajo y un Sistema de Gestión de Calidad (SGC), integrados no solo
              para efectos de la propia organización, sino también para empresas,
              profesionales y proveedores asociados.
            </p>
            <p>
              Nos comprometemos a cumplir con los requisitos aplicables de la norma
              ISO 9001:2015 y con la mejora continua del SGC y la calidad de
              nuestras asesorías. Nos destacamos por la atención personalizada y el
              respaldo técnico internacional.
            </p>
            <p>
              Pretendemos ser una Organización de Clase Mundial en la prestación de
              servicios interdisciplinarios de ingeniería, auditoría y consultoría
              ambiental, innovadora en el diseño de soluciones integrales de
              protección del medio ambiente, de gestión de los recursos naturales,
              residuos y eficiencia energética, cumpliendo los requisitos legales y
              reglamentarios vigentes y cualquier otro requisito que la
              organización suscriba, además de satisfacer las necesidades de
              nuestros clientes.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact bar */}
      <section className="bg-sand py-12">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <p className="text-text-secondary">
            Contacto SGC:{" "}
            <a
              href="mailto:sgc@grupoiasa.cl"
              className="text-emerald hover:text-emerald-dark transition-colors"
            >
              sgc@grupoiasa.cl
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
