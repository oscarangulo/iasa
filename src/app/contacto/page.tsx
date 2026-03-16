import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import ScrollReveal from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctenos para consultas sobre ingeniería ambiental y servicios de Grupo IASA.",
};

export default function ContactoPage() {
  return (
    <main>
      <PageHero title="Contacto" subtitle="Estamos aquí para ayudarle" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-32">
        {/* Left: Contact Form */}
        <div>
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading text-charcoal mb-10">
              Envíenos un mensaje
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <form className="space-y-8">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-xs uppercase tracking-[0.2em] text-text-light mb-3"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Su nombre"
                  className="w-full bg-transparent border-b border-stone/30 py-3 text-charcoal placeholder:text-text-light focus:outline-none focus:border-emerald transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.2em] text-text-light mb-3"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Su email"
                  className="w-full bg-transparent border-b border-stone/30 py-3 text-charcoal placeholder:text-text-light focus:outline-none focus:border-emerald transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="asunto"
                  className="block text-xs uppercase tracking-[0.2em] text-text-light mb-3"
                >
                  Asunto
                </label>
                <input
                  id="asunto"
                  type="text"
                  placeholder="Asunto"
                  className="w-full bg-transparent border-b border-stone/30 py-3 text-charcoal placeholder:text-text-light focus:outline-none focus:border-emerald transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-xs uppercase tracking-[0.2em] text-text-light mb-3"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  placeholder="Su mensaje (opcional)"
                  className="w-full bg-transparent border-b border-stone/30 py-3 text-charcoal placeholder:text-text-light focus:outline-none focus:border-emerald transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-emerald text-white px-10 py-3.5 hover:bg-emerald-dark transition-colors text-sm tracking-wide"
              >
                Enviar mensaje
              </button>
            </form>
          </ScrollReveal>
        </div>

        {/* Right: Contact Info */}
        <div>
          <ScrollReveal delay={200}>
            <div className="bg-sand p-10">
              <h2 className="text-xl font-heading text-charcoal mb-8">
                Información de Contacto
              </h2>

              {/* Address */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.2em] text-text-light mb-2">
                  Dirección
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Av. Providencia N°2653, Edificio Forum, Of. 1308, Providencia,
                  Santiago de Chile
                </p>
              </div>

              <div className="h-px bg-stone/20 mb-8" />

              {/* Phone */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.2em] text-text-light mb-2">
                  Teléfono
                </p>
                <p className="text-text-secondary">
                  +56 2 2585 9840 / 2585 9841 / 2585 9842
                </p>
              </div>

              <div className="h-px bg-stone/20 mb-8" />

              {/* Email */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-text-light mb-2">
                  Email
                </p>
                <a
                  href="mailto:iasa@grupoiasa.cl"
                  className="text-emerald hover:text-emerald-dark transition-colors"
                >
                  iasa@grupoiasa.cl
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
