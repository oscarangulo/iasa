import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/page-hero";
import TeamCard from "@/components/ui/team-card";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conozca al equipo de Grupo IASA. Más de 25 años de experiencia en ingeniería ambiental y consultoría.",
};

const teamMembers = [
  {
    name: "Javier Medina",
    role: "Ingeniero Civil / Socio y Director",
    department: "PROIECTA",
    photo: "/images/team/javier-medina.jpg",
  },
  {
    name: "Joachim Vogdt",
    role: "Ingeniero Ambiental (M.Sc.) / Jefe de Proyectos",
    department: "PROAMBIENTE",
    photo: "/images/team/joachim-vogdt.jpg",
  },
  {
    name: "Yamina Pérez",
    role: "Ingeniero en Procesos / Directora SGC",
    department: "PROAMBIENTE",
    photo: "/images/team/yamina-perez.jpg",
  },
  {
    name: "Abraham Medina",
    role: "Ingeniero Civil / Ingeniero de Proyectos",
    department: "PROIECTA",
    photo: "/images/team/abraham-medina.jpg",
  },
  {
    name: "Cristóbal Rojas",
    role: "Ingeniero Civil / Ingeniero de Proyectos",
    department: "PROIECTA",
    photo: "/images/team/cristobal-rojas.jpg",
  },
  {
    name: "Cristian Fonseca",
    role: "Ingeniero Civil / Jefe de Proyectos",
    department: "PROIECTA",
    photo: "/images/team/cristian-fonseca.jpg",
  },
  {
    name: "Catherine Vielma",
    role: "Ingeniero Civil / Jefa de Proyectos",
    department: "PROIECTA",
    photo: "/images/team/catherine-vielma.jpg",
  },
  {
    name: "Carlos Riquelme",
    role: "Dibujante Técnico / Proyectista",
    department: "PROIECTA",
    photo: "/images/team/carlos-riquelme.jpg",
  },
  {
    name: "Isaac Arriagada",
    role: "Ingeniero Civil / Jefe de Proyectos",
    department: "PROIECTA",
    photo: "/images/team/isaac-arriagada.jpg",
  },
  {
    name: "Nicolás Curkovic",
    role: "Arquitecto",
    department: "PROIECTA",
    photo: "/images/team/nicolas-curkovic.jpg",
  },
  {
    name: "Nelson Ojeda",
    role: "Ingeniero Ambiental / Jefe de Proyectos",
    department: "PROAMBIENTE",
    photo: "/images/team/nelson-ojeda.jpg",
  },
];

export default function NosotrosPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        title="Nosotros"
        subtitle="Más de 25 años de experiencia en protección y saneamiento ambiental"
      />

      {/* Historia */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-6">
              Nuestra Historia
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Con la solidez de la experiencia europea y del conocimiento
              adquirido en Latino América, la empresa Ingeniería Alemana S.A.
              (conocida en el medio como &quot;IASA&quot;) se hizo un nombre en
              el ámbito de la ingeniería ambiental. Con el transcurso de los
              años se asociaron distintas sociedades, que a partir de una
              filosofía común de trabajo contribuyeron diferentes áreas y
              especialidades, todas ellas relacionadas con el estudio, el
              desarrollo, la ingeniería y construcción de planes y proyectos
              vinculados al medio ambiente.
            </p>
          </div>
          <div>
            <Image
              src="/images/hero/img-0794-min.jpg"
              alt="Equipo Grupo IASA en terreno"
              width={640}
              height={480}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Política de Calidad */}
      <section className="bg-muted py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
            ISO 9001:2015
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-6">
            Política de Calidad
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-3xl">
            Nos comprometemos con la mejora continua de la calidad de nuestras
            asesorías, y nos destacamos por la atención personalizada y el
            respaldo técnico internacional. Pretendemos ser la empresa más
            innovadora en soluciones integrales, cumpliendo los requisitos
            legales y reglamentarios vigentes y cualquier otro requisito que la
            organización suscriba, además de satisfacer las necesidades de
            nuestros clientes.
          </p>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10 text-center">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
