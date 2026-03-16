"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "NOSOTROS", href: "/nosotros" },
  {
    label: "SERVICIOS",
    href: "#",
    children: [
      { label: "PROIECTA", href: "/servicios/proiecta" },
      { label: "PROCEANIC", href: "/servicios/proceanic" },
      { label: "PROAMBIENTE", href: "/servicios/proambiente" },
    ],
  },
  { label: "PROYECTOS", href: "/proyectos" },
  { label: "PUBLICACIONES", href: "/publicaciones" },
  { label: "SGC", href: "/sgc" },
  { label: "CONTACTO", href: "/contacto" },
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

  // Lock body scroll when mobile menu is open
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logos/grupo-iasa.png"
              alt="Grupo IASA"
              width={160}
              height={48}
              priority
              className="h-auto w-[140px] md:w-[160px]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label} className="group relative">
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      scrolled
                        ? "text-text-primary hover:text-secondary"
                        : "text-white hover:text-secondary-light"
                    }`}
                  >
                    {link.label}
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
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
                  <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="min-w-[200px] rounded-lg bg-white py-2 shadow-xl ring-1 ring-black/5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-muted hover:text-secondary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      scrolled
                        ? "text-text-primary hover:text-secondary"
                        : "text-white hover:text-secondary-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contacto"
              className="hidden rounded-lg bg-secondary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary-light lg:inline-block"
            >
              Contacto
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden transition-colors duration-300 ${
                scrolled ? "text-text-primary" : "text-white"
              }`}
              aria-label="Abrir menú"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] max-w-[80vw] bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <span className="text-lg font-semibold font-heading text-text-primary">
            Menú
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-text-secondary hover:text-text-primary"
            aria-label="Cerrar menú"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col overflow-y-auto px-6 py-4">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setServiciosOpen(!serviciosOpen)}
                  className="flex w-full items-center justify-between py-3 text-sm font-medium tracking-wide text-text-primary hover:text-secondary"
                >
                  {link.label}
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
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
                  className={`overflow-hidden transition-all duration-200 ${
                    serviciosOpen ? "max-h-48" : "max-h-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 pl-4 text-sm text-text-secondary hover:text-secondary"
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
                className="py-3 text-sm font-medium tracking-wide text-text-primary hover:text-secondary"
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            href="/contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-6 rounded-lg bg-secondary px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-secondary-light"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </>
  );
}
