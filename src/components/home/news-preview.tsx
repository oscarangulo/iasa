import Image from "next/image";
import Link from "next/link";

const publications = [
  {
    image: "/images/publications/7822060.png",
    title:
      "The Use of Carbon Footprint as an Eco-Efficiency Indicator in Mining Operations",
    authors:
      "Joachim Vogdt, IASA — Roxana Powell, Enbuco — Kimberly Caron, Metso-Outotek",
    href: "/images/publications/minexcellence-carbon-footprint.pdf",
    buttonText: "Abrir",
    external: true,
  },
  {
    image: "/images/publications/img8588-thumb.jpg",
    title: "Visión General de la Gestión de RSU en Europa, Alemania",
    authors: "Joachim Vogdt, Bastian Wens, RWTH Aachen University",
    href: "#",
    buttonText: "Abrir",
    external: false,
  },
  {
    image: null,
    title:
      "Manejo de Aguas en Minería, Tratamiento, Integración y Optimización",
    authors: null,
    label: "Próxima publicación",
    href: null,
    buttonText: "Próximamente",
    disabled: true,
  },
];

export default function NewsPreview() {
  return (
    <section className="bg-muted py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-12 text-center">
          Noticias y Publicaciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              {pub.image ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-primary/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              )}
              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-primary p-6 pt-4">
                  {pub.title}
                </h3>
                {pub.authors && (
                  <p className="text-sm text-text-secondary px-6">
                    {pub.authors}
                  </p>
                )}
                {pub.label && (
                  <p className="text-sm text-text-secondary px-6">
                    {pub.label}
                  </p>
                )}
                <div className="px-6 pb-6 pt-4 mt-auto">
                  {pub.disabled ? (
                    <span className="bg-gray-200 text-gray-400 px-6 py-2 rounded-lg text-sm font-medium inline-block cursor-not-allowed">
                      {pub.buttonText}
                    </span>
                  ) : (
                    <Link
                      href={pub.href!}
                      target={pub.external ? "_blank" : undefined}
                      rel={pub.external ? "noopener noreferrer" : undefined}
                      className="bg-secondary hover:bg-secondary-light text-white px-6 py-2 rounded-lg text-sm font-medium inline-block transition-colors"
                    >
                      {pub.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/publicaciones"
            className="text-secondary hover:text-secondary-light font-semibold transition-colors"
          >
            Ver todas &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
