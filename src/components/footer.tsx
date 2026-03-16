import Link from "next/link";

const navigationLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Publicaciones", href: "/publicaciones" },
  { label: "SGC", href: "/sgc" },
  { label: "Contacto", href: "/contacto" },
];

const servicioLinks = [
  { label: "Proiecta", href: "/servicios/proiecta" },
  { label: "Proceanic", href: "/servicios/proceanic" },
  { label: "Proambiente", href: "/servicios/proambiente" },
];

export default function Footer() {
  return (
    <footer className="bg-dark">
      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-8 md:px-16 pt-24 pb-16">
        <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
          Trabajemos juntos
        </h2>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 text-emerald hover:text-emerald-light text-lg mt-6 transition-colors"
        >
          Contactar
          <span className="text-xl">&rarr;</span>
        </Link>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <div className="h-px bg-white/10" />
      </div>

      {/* Footer columns */}
      <div className="mx-auto max-w-7xl px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div>
            <p className="text-sm font-medium text-white mb-3">Grupo IASA</p>
            <p className="text-sm text-white/40 leading-relaxed">
              Consorcio de empresas de consultoría ambiental e ingeniería con
              experiencia europea y conocimiento latinoamericano.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="text-sm font-medium text-white mb-3">Navegación</p>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <p className="text-sm font-medium text-white mb-3">Servicios</p>
            <ul className="space-y-2">
              {servicioLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <p className="text-sm font-medium text-white mb-3">Contacto</p>
            <div className="space-y-2 text-sm text-white/40 leading-relaxed">
              <p>
                Av. Providencia N°2653,
                <br />
                Edificio Forum, Of. 1308,
                <br />
                Providencia, Santiago de Chile
              </p>
              <p>+56 2 2585 9840</p>
              <a
                href="mailto:iasa@grupoiasa.cl"
                className="hover:text-white transition-colors block"
              >
                iasa@grupoiasa.cl
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <div className="h-px bg-white/10" />
      </div>
      <div className="mx-auto max-w-7xl px-8 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} Grupo IASA. Todos los derechos reservados.
        </p>
        <p className="text-xs text-white/30">Santiago, Chile</p>
      </div>
    </footer>
  );
}
