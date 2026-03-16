interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/70 mt-4 text-center max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
