"use client"

import { ExperienceTimeline } from "@/components/experience-timeline"
import { EducationCard } from "@/components/education-card"
import { FocusAreasCard } from "@/components/focus-areas-card"

export function BentoGridSection() {
  return (
    <section id="about" className="px-6 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Bento Grid Layout - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ExperienceTimeline />
          <EducationCard />
          <FocusAreasCard />
        </div>
      </div>
    </section>
  )
}
