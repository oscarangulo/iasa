import Link from "next/link";
import ScrollReveal from "@/components/scroll-reveal";

const companies = [
  {
    number: "01",
    title: "PROIECTA",
    subtitle: "Ingeniería Sanitaria, Hidráulica y Ambiental",
    services: "Residuos sólidos · Aguas servidas y RILes · Obras hidráulicas · Saneamiento ambiental",
    href: "/servicios/proiecta",
  },
  {
    number: "02",
    title: "PROCEANIC",
    subtitle: "Ingeniería Marítima y Ciencias del Mar",
    services: "Estudios ambientales · Obras marítimas · Oceanografía · Vigilancia ambiental",
    href: "/servicios/proceanic",
  },
  {
    number: "03",
    title: "PROAMBIENTE",
    subtitle: "Auditorías Ambientales y Eficiencia Energética",
    services: "Auditorías RCA · Eficiencia energética · ISO 50.001 · Impacto ambiental",
    href: "/servicios/proambiente",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-text-light mb-4">
            Nuestras empresas
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-3xl md:text-5xl font-heading text-charcoal mb-16 max-w-2xl">
            Tres empresas, una visión integrada
          </h2>
        </ScrollReveal>

        {/* Service entries */}
        <div>
          {companies.map((company, i) => (
            <ScrollReveal key={company.title} delay={(i + 1) * 100}>
              <Link href={company.href} className="block group">
                {/* Top divider */}
                <div className="h-px bg-stone/20" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 items-center transition-colors duration-300 group-hover:bg-sand -mx-6 px-6 md:-mx-8 md:px-8">
                  {/* Number */}
                  <div className="md:col-span-2">
                    <span className="text-5xl md:text-6xl font-heading text-stone/25">
                      {company.number}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="md:col-span-7">
                    <h3 className="text-2xl font-heading text-charcoal mb-1">
                      {company.title}
                    </h3>
                    <p className="text-text-secondary mb-2">
                      {company.subtitle}
                    </p>
                    <p className="text-sm text-text-light">
                      {company.services}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="md:col-span-3 md:text-right">
                    <span className="text-emerald group-hover:text-emerald-dark transition-colors text-sm">
                      Ver servicios &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
          {/* Bottom divider */}
          <div className="h-px bg-stone/20" />
        </div>
      </div>
    </section>
  );
}
