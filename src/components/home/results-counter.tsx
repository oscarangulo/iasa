"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ScrollReveal from "@/components/scroll-reveal";

const counters = [
  { target: 20, label: "Planes de manejo integral de residuos sólidos" },
  { target: 16, label: "Centros de manejo RIS minero" },
  { target: 35, label: "RCA aprobadas" },
  { target: 24, label: "Depósitos de RSD y RIS construidos" },
];

function useCountUp(target: number, shouldStart: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, shouldStart]);

  return count;
}

function Counter({
  target,
  label,
  isVisible,
}: {
  target: number;
  label: string;
  isVisible: boolean;
}) {
  const count = useCountUp(target, isVisible);

  return (
    <div className="py-6">
      <p className="text-5xl md:text-6xl font-heading text-emerald">
        {count}
        <span className="text-emerald/60">+</span>
      </p>
      <p className="text-white/50 text-sm mt-2 max-w-xs">{label}</p>
    </div>
  );
}

export default function ResultsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        setIsVisible(true);
      }
    },
    []
  );

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section ref={sectionRef} className="bg-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side — heading */}
          <div>
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4">
                Resultados
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-heading text-white leading-snug">
                Cifras que respaldan nuestra experiencia
              </h2>
            </ScrollReveal>
          </div>

          {/* Right side — counter rows */}
          <div>
            {counters.map((counter, i) => (
              <div key={counter.label}>
                {i > 0 && <div className="h-px bg-white/10" />}
                <Counter
                  target={counter.target}
                  label={counter.label}
                  isVisible={isVisible}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
