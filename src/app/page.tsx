import Hero from "@/components/home/hero";
import AboutIntro from "@/components/home/about-intro";
import ServicesOverview from "@/components/home/services-overview";
import ResultsCounter from "@/components/home/results-counter";
import Clients from "@/components/home/clients";
import NewsPreview from "@/components/home/news-preview";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutIntro />
      <ServicesOverview />
      <ResultsCounter />
      <Clients />
      <NewsPreview />
    </main>
  );
}
