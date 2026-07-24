import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AboutImages } from "@/components/about-images"
import { TravelMap } from "@/components/travel-map"
import { OrganizationsSection } from "@/components/organizations-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OrganizationsSection />
      <TravelMap />
      <AboutImages />
    </>
  )
}
