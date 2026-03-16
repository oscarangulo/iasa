import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctenos para consultas sobre ingeniería ambiental y servicios de Grupo IASA.",
};

export default function ContactoPage() {
  return (
    <main>
      <PageHero title="Contacto" subtitle="Estamos aquí para ayudarle" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-16">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-primary font-heading mb-6">
            Envíenos un mensaje
          </h2>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Su nombre"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Su email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="asunto"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Asunto
              </label>
              <input
                id="asunto"
                type="text"
                placeholder="Asunto"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={5}
                placeholder="Su mensaje (opcional)"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary-light transition-colors text-lg"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div>
          <div className="bg-muted rounded-xl p-8">
            <h2 className="text-xl font-bold text-primary font-heading mb-6">
              Información de Contacto
            </h2>

            {/* Address */}
            <div className="flex gap-4 items-start mb-6">
              <svg
                className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-text-primary">
                Av. Providencia N°2653, Edificio Forum, Of. 1308, Providencia,
                Santiago de Chile
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start mb-6">
              <svg
                className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="text-text-primary">
                +56 2 2585 9840 / 2585 9841 / 2585 9842
              </p>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start mb-6">
              <svg
                className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:iasa@grupoiasa.cl"
                className="text-secondary hover:underline"
              >
                iasa@grupoiasa.cl
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
