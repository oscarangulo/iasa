import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    logo: "/images/logos/prycta.png",
    title: "PROIECTA",
    subtitle: "Ingeniería Sanitaria, Hidráulica y Ambiental",
    services: [
      "Infraestructura para manejo de residuos sólidos",
      "Tratamiento de aguas servidas y RILes",
      "Obras hidráulicas y protección fluvial",
      "Saneamiento ambiental de sitios contaminados",
    ],
    href: "/servicios/proiecta",
  },
  {
    logo: "/images/logos/prceainc.png",
    title: "PROCEANIC",
    subtitle: "Ingeniería Marítima y Ciencias del Mar",
    services: [
      "Estudios ambientales en acuicultura",
      "Ingeniería de obras marítimas",
      "Estudios oceanográficos",
      "Programas de vigilancia ambiental",
    ],
    href: "/servicios/proceanic",
  },
  {
    logo: "/images/logos/ambiente.png",
    title: "PROAMBIENTE",
    subtitle: "Auditorías Ambientales y Eficiencia Energética",
    services: [
      "Auditorías ambientales y de cumplimiento RCA",
      "Estudios de eficiencia energética",
      "Sistemas de gestión de energía (ISO 50.001)",
      "Estudios de impacto ambiental",
    ],
    href: "/servicios/proambiente",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-muted py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-12 text-center">
          Nuestras Empresas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div
              key={company.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-8 text-center"
            >
              <div className="flex justify-center">
                <Image
                  src={company.logo}
                  alt={`Logo ${company.title}`}
                  width={120}
                  height={60}
                  className="h-[60px] w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mt-4">
                {company.title}
              </h3>
              <p className="text-text-secondary mt-2">{company.subtitle}</p>
              <ul className="text-sm text-left mt-4 space-y-2">
                {company.services.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5 shrink-0">
                      &#x2022;
                    </span>
                    <span className="text-text-primary">{service}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={company.href}
                className="text-secondary hover:text-secondary-light font-semibold mt-4 inline-block transition-colors"
              >
                Ver más &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
