import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios/proiecta" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Publicaciones", href: "/publicaciones" },
  { label: "SGC", href: "/sgc" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1 - Contacto */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">
              Contacto
            </h3>
            <div className="space-y-3 text-sm leading-relaxed text-gray-300">
              <p>
                Av. Providencia N°2653, Edificio Forum, Of. 1308,
                <br />
                Providencia, Santiago de Chile
              </p>
              <p>
                <span className="font-medium text-white">Tel:</span>{" "}
                +56 2 2585 9840 / 2585 9841 / 2585 9842
              </p>
              <p>
                <span className="font-medium text-white">Email:</span>{" "}
                <a
                  href="mailto:iasa@grupoiasa.cl"
                  className="transition-colors hover:text-secondary-light"
                >
                  iasa@grupoiasa.cl
                </a>
              </p>
            </div>
          </div>

          {/* Column 2 - Enlaces */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">
              Enlaces
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-secondary-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Logo */}
          <div className="flex flex-col items-start md:items-end">
            <Image
              src="/images/logos/grupo-iasa-firma.png"
              alt="Grupo IASA"
              width={200}
              height={60}
              className="mb-4 h-auto w-[200px]"
            />
            <p className="text-sm italic text-gray-300">
              Medio Ambiente, Ingeniería y Construcción
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-center text-sm text-gray-300">
            &copy; 2024 Grupo IASA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
