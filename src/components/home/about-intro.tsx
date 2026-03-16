import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/scroll-reveal";

export default function AboutIntro() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left — decorative number */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <span className="text-8xl md:text-9xl font-heading text-emerald/15 leading-none select-none">
                25+
              </span>
            </ScrollReveal>
          </div>

          {/* Right — content */}
          <div className="lg:col-span-7 lg:col-start-6">
            <ScrollReveal delay={100}>
              <p className="text-xs uppercase tracking-[0.3em] text-text-light mb-4">
                Sobre nosotros
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-3xl md:text-4xl font-heading text-charcoal leading-snug mb-8">
                Un consorcio con experiencia europea y conocimiento
                latinoamericano
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl mb-4">
                GRUPO IASA es un consorcio de empresas de consultoría y
                profesionales asociados, cuyo propósito y misión es entregar una
                solución integrada en ingeniería y medio ambiente, de gestión de
                residuos sólidos, recursos naturales, eficiencia energética y otras
                especialidades relacionadas de ingeniería sanitaria, hidráulica y
                marítima.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl mb-8">
                Nuestro enfoque es interdisciplinario, innovador y práctico,
                siempre ajustado a las necesidades de nuestros Clientes y sus
                proyectos, sea del área productiva industrial, minero, de servicios
                y/o de infraestructura de servicios públicos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <Link
                href="/nosotros"
                className="text-emerald hover:text-emerald-dark transition-colors text-base"
              >
                Conocer al equipo &rarr;
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Full-bleed image strip */}
      <ScrollReveal className="mt-20 md:mt-24">
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/images/hero/img-0794-min.jpg"
            alt="Equipo de Grupo IASA en terreno"
            fill
            className="object-cover"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
