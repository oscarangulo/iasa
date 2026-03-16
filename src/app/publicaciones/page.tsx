import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Publicaciones y Documentos",
  description:
    "Publicaciones técnicas y documentos del equipo de Grupo IASA.",
};

const publications = [
  {
    image: "/images/publications/7822060.png",
    title:
      "The Use of Carbon Footprint as an Eco-Efficiency Indicator in Mining Operations",
    authors:
      "Joachim Vogdt, IASA — Roxana Powell, Enbuco — Kimberly Caron, Metso-Outotek",
    buttonLabel: "Descargar PDF",
    href: "/images/publications/minexcellence-carbon-footprint.pdf",
  },
  {
    image: "/images/publications/img8588-thumb.jpg",
    title:
      "Visión General de la Gestión de RSU en Europa, Alemania: Segregación, Tratamiento Mecánico-Biológico y Valorización Energética",
    authors: "Joachim Vogdt, Bastian Wens, RWTH Aachen University",
    buttonLabel: "Abrir",
    href: "#",
  },
  {
    image: null,
    title:
      "Manejo de Aguas en Minería, Tratamiento, Integración y Optimización de Procesos",
    authors: null,
    upcoming: true,
    buttonLabel: null,
    href: null,
  },
  {
    image: null,
    title: "Investigación y Saneamiento de Suelos Contaminados",
    authors: null,
    upcoming: true,
    buttonLabel: null,
    href: null,
  },
];

export default function PublicacionesPage() {
  return (
    <main>
      <PageHero title="Publicaciones y Documentos" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6 py-16">
        {publications.map((pub) => (
          <div
            key={pub.title}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            {pub.image ? (
              <Image
                src={pub.image}
                alt={pub.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="bg-primary/5 h-48 flex items-center justify-center">
                <span className="text-text-secondary">Próximamente</span>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-primary font-heading leading-snug">
                {pub.title}
              </h3>
              {pub.authors && (
                <p className="text-sm text-text-secondary mt-2">
                  {pub.authors}
                </p>
              )}
              {pub.upcoming && (
                <p className="text-sm text-accent italic mt-2">
                  Próxima publicación
                </p>
              )}
              {pub.buttonLabel && pub.href && (
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-light transition-colors text-sm mt-4"
                >
                  {pub.buttonLabel}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
