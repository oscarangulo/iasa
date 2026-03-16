"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = contentRef.current;
    if (node) {
      node.classList.add("animate-fade-up");
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-end">
      <Image
        src="/images/hero/dscn3824-scaled.jpg"
        alt="Grupo IASA - Medio Ambiente, Ingeniería y Construcción"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Content — positioned bottom-left */}
      <div
        ref={contentRef}
        className="relative z-10 w-full pb-20 pl-8 md:pl-16 lg:pl-24 pr-8 opacity-0"
      >
        {/* Emerald accent line */}
        <div className="w-10 h-[2px] bg-emerald mb-8" />

        {/* Label */}
        <p className="text-sm uppercase tracking-[0.2em] text-white/60 font-body mb-6">
          Ingeniería Ambiental desde 1998
        </p>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white leading-[0.95] max-w-4xl">
          Medio Ambiente,
          <br />
          Ingeniería y
          <br />
          Construcción
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-white/60 mt-8 max-w-xl">
          Más de 25 años entregando soluciones integradas con experiencia europea
          y conocimiento latinoamericano.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-gentle-bounce">
        <span className="text-sm text-white/40 tracking-widest">
          Explorar ↓
        </span>
      </div>
    </section>
  );
}
