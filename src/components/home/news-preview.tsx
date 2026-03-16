import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/scroll-reveal";

const publications = [
  {
    image: "/images/publications/7822060.png",
    title:
      "The Use of Carbon Footprint as an Eco-Efficiency Indicator in Mining Operations",
    authors:
      "Joachim Vogdt, IASA — Roxana Powell, Enbuco — Kimberly Caron, Metso-Outotek",
    href: "/images/publications/minexcellence-carbon-footprint.pdf",
    external: true,
  },
  {
    image: "/images/publications/img8588-thumb.jpg",
    title: "Visión General de la Gestión de RSU en Europa, Alemania",
    authors: "Joachim Vogdt, Bastian Wens, RWTH Aachen University",
    href: "#",
    external: false,
  },
];

export default function NewsPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-text-light mb-4">
            Publicaciones
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-3xl md:text-4xl font-heading text-charcoal mb-16">
            Investigación y conocimiento técnico
          </h2>
        </ScrollReveal>

        {/* Asymmetric grid: 60/40 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left — larger */}
          <ScrollReveal delay={200} className="md:col-span-7">
            <Link
              href={publications[0].href}
              target={publications[0].external ? "_blank" : undefined}
              rel={publications[0].external ? "noopener noreferrer" : undefined}
              className="block group relative overflow-hidden h-[400px] md:h-[480px]"
            >
              <Image
                src={publications[0].image}
                alt={publications[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-xl md:text-2xl font-heading text-white leading-snug mb-3">
                  {publications[0].title}
                </h3>
                <p className="text-sm text-white/50">
                  {publications[0].authors}
                </p>
              </div>
            </Link>
          </ScrollReveal>

          {/* Right — smaller */}
          <ScrollReveal delay={300} className="md:col-span-5">
            <Link
              href={publications[1].href}
              target={publications[1].external ? "_blank" : undefined}
              rel={publications[1].external ? "noopener noreferrer" : undefined}
              className="block group relative overflow-hidden h-[400px] md:h-[480px]"
            >
              <Image
                src={publications[1].image}
                alt={publications[1].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-xl font-heading text-white leading-snug mb-3">
                  {publications[1].title}
                </h3>
                <p className="text-sm text-white/50">
                  {publications[1].authors}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12">
            <Link
              href="/publicaciones"
              className="text-emerald hover:text-emerald-dark transition-colors"
            >
              Ver todas las publicaciones &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
