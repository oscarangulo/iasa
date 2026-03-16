import Image from "next/image";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-6">
          Quiénes Somos
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-text-primary leading-relaxed mb-4">
              GRUPO IASA es un consorcio de empresas de consultoría y
              profesionales asociados, cuyo propósito y misión es entregar una
              solución integrada en ingeniería y medio ambiente, de gestión de
              residuos sólidos, recursos naturales, eficiencia energética y otras
              especialidades relacionadas de ingeniería sanitaria, hidráulica y
              marítima.
            </p>
            <p className="text-text-primary leading-relaxed mb-6">
              Nuestro enfoque es interdisciplinario, innovador y práctico,
              siempre ajustado a las necesidades de nuestros Clientes y sus
              proyectos, sea del área productiva industrial, minero, de servicios
              y/o de infraestructura de servicios públicos.
            </p>
            <Link
              href="/nosotros"
              className="text-secondary hover:text-secondary-light font-semibold transition-colors"
            >
              Ver más &rarr;
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/hero/img-0794-min.jpg"
              alt="Equipo de Grupo IASA en terreno"
              width={640}
              height={480}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
