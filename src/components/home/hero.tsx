import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
      <Image
        src="/images/hero/dscn3824-scaled.jpg"
        alt="Grupo IASA - Medio Ambiente, Ingeniería y Construcción"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight">
          Medio Ambiente, Ingeniería y Construcción
        </h1>
        <p className="text-lg md:text-xl text-white/80 mt-4 max-w-2xl">
          Más de 25 años de experiencia en protección y saneamiento ambiental
        </p>
        <Link
          href="/servicios/proiecta"
          className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-lg text-lg mt-8 inline-block transition-colors"
        >
          Conozca nuestros servicios
        </Link>
      </div>
    </section>
  );
}
