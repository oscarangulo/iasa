"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Servicios",
    href: "#",
    children: [
      { label: "Proiecta", href: "/servicios/proiecta", desc: "Ingeniería Sanitaria e Hidráulica" },
      { label: "Proceanic", href: "/servicios/proceanic", desc: "Ingeniería Marítima" },
      { label: "Proambiente", href: "/servicios/proambiente", desc: "Auditorías y Eficiencia Energética" },
    ],
  },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 md:px-16 py-5">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logos/grupo-iasa.png"
              alt="Grupo IASA"
              width={160}
              height={48}
              priority
              className={`h-auto w-[130px] md:w-[150px] transition-all duration-500 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label} className="group relative">
                  <button
                    className={`flex items-center gap-1.5 text-[15px] tracking-wide transition-colors duration-500 ${
                      scrolled
                        ? "text-charcoal hover:text-emerald"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="min-w-[280px] bg-white py-3 shadow-xl border border-black/5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-6 py-3 transition-colors hover:bg-sand group/item"
                        >
                          <span className="block text-sm font-medium text-charcoal group-hover/item:text-emerald transition-colors">
                            {child.label}
                          </span>
                          <span className="block text-xs text-text-light mt-0.5">
                            {child.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  {link.label === "Contacto" ? (
                    <Link
                      href={link.href}
                      className={`text-[15px] tracking-wide transition-colors duration-500 border-b border-transparent hover:border-current pb-0.5 ${
                        scrolled
                          ? "text-charcoal hover:text-emerald"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-[15px] tracking-wide transition-colors duration-500 ${
                        scrolled
                          ? "text-charcoal hover:text-emerald"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden transition-colors duration-500 ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
            aria-label="Abrir menú"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-dark transition-all duration-500 lg:hidden flex flex-col ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end px-8 py-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Cerrar menú"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile nav links */}
        <nav className="flex flex-col flex-1 justify-center px-12 -mt-16">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-3xl font-heading text-white/90 hover:text-emerald py-4 transition-colors"
          >
            Inicio
          </Link>
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setServiciosOpen(!serviciosOpen)}
                  className="flex w-full items-center justify-between text-3xl font-heading text-white/90 hover:text-emerald py-4 transition-colors"
                >
                  {link.label}
                  <svg
                    className={`h-5 w-5 transition-transform duration-300 ${
                      serviciosOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    serviciosOpen ? "max-h-60" : "max-h-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 pl-6 text-lg text-white/50 hover:text-emerald transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-heading text-white/90 hover:text-emerald py-4 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          {/* Extra links in mobile */}
          <div className="border-t border-white/10 mt-8 pt-6 flex gap-8">
            <Link
              href="/publicaciones"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/40 hover:text-white/70 transition-colors tracking-wide uppercase"
            >
              Publicaciones
            </Link>
            <Link
              href="/sgc"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/40 hover:text-white/70 transition-colors tracking-wide uppercase"
            >
              SGC
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
