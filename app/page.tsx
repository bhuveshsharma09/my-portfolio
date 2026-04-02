import { Header } from "@/components/Header"
import { HeroSection } from "@/components/hero-section"
import { CurrentlyActiveStrip } from "@/components/currently-active-strip"
import { BentoGridSection } from "@/components/bento-grid-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { CommunitySection } from "@/components/community-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CurrentlyActiveStrip />
        <BentoGridSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
