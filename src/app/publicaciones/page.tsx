import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/page-hero";
import ScrollReveal from "@/components/scroll-reveal";

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

      <div className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((pub, i) => (
            <ScrollReveal key={pub.title} delay={i * 100}>
              <div className="border border-stone/10 overflow-hidden bg-white">
                {pub.image ? (
                  <div className="relative h-56">
                    <Image
                      src={pub.image}
                      alt={pub.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-sand h-56 flex items-center justify-center">
                    <span className="text-text-light text-sm tracking-wide">
                      Próximamente
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-heading text-charcoal leading-snug">
                    {pub.title}
                  </h3>
                  {pub.authors && (
                    <p className="text-sm text-text-secondary mt-3">
                      {pub.authors}
                    </p>
                  )}
                  {pub.upcoming && (
                    <p className="text-sm text-stone italic mt-3">
                      Próxima publicación
                    </p>
                  )}
                  {pub.buttonLabel && pub.href && (
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-emerald hover:text-emerald-dark transition-colors text-sm mt-4"
                    >
                      {pub.buttonLabel} &rarr;
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
