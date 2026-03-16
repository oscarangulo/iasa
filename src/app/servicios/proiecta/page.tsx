import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/page-hero";

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
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-6">
            Quiénes Somos
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-4xl">
            La empresa PROIECTA S.A. se constituyó con el objetivo de ofrecer
            una completa prestación de servicios de ingeniería en el amplio
            ámbito del medio ambiente, de ingeniería sanitaria, hidráulica y del
            estudio del medio físico terrestre (geología, hidrología,
            hidrogeología), con especial énfasis en solucionar técnicamente los
            problemas que deben enfrentar las empresas privadas y públicas así
            como los órganos del estado e instituciones de toda índole en
            materias ambientales y de regulaciones en esta área.
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

      {/* Proyectos */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10 text-center">
            Nuestros Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={480}
                  height={320}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-base font-semibold text-primary font-heading">
                    {project.title}
                  </h3>
                  {project.client && (
                    <p className="text-sm text-text-secondary mt-1">
                      {project.client}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-primary py-8 px-6 text-center text-white">
        <p className="text-lg font-heading font-semibold mb-2">
          ¿Tiene un proyecto? Contáctenos
        </p>
        <Link
          href="mailto:proiecta@grupoiasa.cl"
          className="text-white/80 hover:text-white transition-colors underline"
        >
          proiecta@grupoiasa.cl
        </Link>
      </section>
    </main>
  );
}
