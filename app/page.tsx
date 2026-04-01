import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { HomeContactForm } from "@/components/HomeContactForm";
import { ImpactSection } from "@/components/ImpactSection";

export default function HomePage() {
  return (
    <div className="pb-12 pt-2 md:pb-20">
      <Hero />
      <ImpactSection />
      <FeaturedProjects />
      <HomeContactForm />
    </div>
  );
}
