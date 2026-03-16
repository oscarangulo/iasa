"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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
    <div>
      <p className="text-5xl md:text-6xl font-bold text-white font-heading">
        {count}
      </p>
      <p className="text-sm text-gray-300 mt-2">{label}</p>
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
    <section ref={sectionRef} className="bg-primary py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-12 text-center">
          Nuestros Resultados
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counters.map((counter) => (
            <Counter
              key={counter.label}
              target={counter.target}
              label={counter.label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
