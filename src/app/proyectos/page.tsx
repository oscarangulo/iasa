"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/ui/page-hero";

const projects = [
  {
    title: "Centro de Manejo de Residuos Sólidos Mina Antucoya",
    client: "Resiter / Antofagasta Minerals",
    image: "/images/projects/cmris-antucoya-1.jpg",
    company: "PROIECTA",
  },
  {
    title: "Gestión de Residuos Sólidos Mina Los Bronces",
    client: "Resiter / AngloAmerican",
    image: "/images/projects/diagnostico-residuos-los-bronces.jpg",
    company: "PROIECTA",
  },
  {
    title: "Plan de Cierre Vertedero Planta Celulosa Arauco",
    client: "Arauco",
    image: "/images/projects/cierre-vertedero-arauco-1.jpg",
    company: "PROIECTA",
  },
  {
    title: "Depósito de Cenizas Cerro Gris",
    client: "KDM / ENGIE",
    image: "/images/projects/plan-cierre-quivolgo.jpg",
    company: "PROIECTA",
  },
  {
    title: "Depósito de Residuos Industriales Planta Nueva Aldea",
    client: "Arauco",
    image: "/images/projects/dris-celulosa-nueva-aldea.jpg",
    company: "PROIECTA",
  },
  {
    title: "Relleno Sanitario Santa Alicia",
    client: "Municipal",
    image: "/images/projects/cierre-relleno-santa-alicia.jpg",
    company: "PROIECTA",
  },
  {
    title: "Auditoría Ambiental PTAS Talagante",
    client: "Aguas Andinas",
    image: "/images/projects/aai-ptas-talagante.jpg",
    company: "PROAMBIENTE",
  },
  {
    title: "Auditoría Ambiental Planta Ventanas",
    client: "AES Chile",
    image: "/images/projects/aai-planta-ventanas.jpg",
    company: "PROAMBIENTE",
  },
  {
    title: "Auditoría Combustibles Coactiva",
    client: "Coactiva",
    image: "/images/projects/aai-combustibles-coactiva.jpg",
    company: "PROAMBIENTE",
  },
  {
    title: "Investigación SPPC ENERPRO",
    client: "ENERPRO",
    image: "/images/projects/investigacion-sppc-enerpro.jpg",
    company: "PROAMBIENTE",
  },
  {
    title: "Estudio Hidrogeología Puerto Natales",
    client: "Municipal",
    image: "/images/projects/estudio-hidrogeologia-puerto-natales.jpg",
    company: "PROIECTA",
  },
  {
    title: "Estudios Hidrogeología SPPC",
    client: "Industrial",
    image: "/images/projects/estudios-hidrogeologia-sppc.jpg",
    company: "PROIECTA",
  },
  {
    title: "CMRIS Antucoya - Vista Aérea",
    client: "Antofagasta Minerals",
    image: "/images/projects/cmris-antucoya-3.jpg",
    company: "PROIECTA",
  },
  {
    title: "DRIS Planta Celulosa Arauco",
    client: "Arauco",
    image: "/images/projects/dris-celulosa-arauco-1.jpg",
    company: "PROIECTA",
  },
  {
    title: "Plan de Cierre Quivolgo",
    client: "Municipal",
    image: "/images/projects/cierre-vertedero-arauco-2.jpg",
    company: "PROIECTA",
  },
];

type Filter = "Todos" | "PROIECTA" | "PROAMBIENTE";

export default function ProyectosPage() {
  const [filter, setFilter] = useState<Filter>("Todos");

  const filtered =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.company === filter);

  const filters: Filter[] = ["Todos", "PROIECTA", "PROAMBIENTE"];

  return (
    <main>
      <PageHero title="Nuestros Proyectos" />

      {/* Filter tabs */}
      <div className="flex gap-3 justify-center py-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === f
                ? "bg-secondary text-white"
                : "bg-white text-text-secondary border border-gray-200 hover:border-secondary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 pb-16">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-primary font-heading">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                {project.client}
              </p>
              <span
                className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${
                  project.company === "PROIECTA"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                {project.company}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
