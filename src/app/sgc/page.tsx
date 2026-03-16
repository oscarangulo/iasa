import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";

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
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <span className="inline-flex items-center bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-8">
          ISO 9001:2015
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-6">
          Política de Calidad
        </h2>

        <div className="space-y-6 text-text-primary leading-relaxed">
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
      </section>

      {/* Contact bar */}
      <section className="bg-muted py-8 px-6 text-center">
        <p className="text-text-primary">
          Contacto SGC:{" "}
          <a
            href="mailto:sgc@grupoiasa.cl"
            className="text-secondary font-medium hover:underline"
          >
            sgc@grupoiasa.cl
          </a>
        </p>
      </section>
    </main>
  );
}
