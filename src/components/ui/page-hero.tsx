interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-dark py-28 md:py-36 pt-36 md:pt-44">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Emerald accent line */}
        <div className="w-10 h-[2px] bg-emerald mb-8" />
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/40 mt-4 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
