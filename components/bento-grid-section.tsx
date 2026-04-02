"use client"

import { EducationCard } from "@/components/education-card"
import { FocusAreasCard } from "@/components/focus-areas-card"

export function BentoGridSection() {
  return (
    <section id="about" className="px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <EducationCard />
          <FocusAreasCard />
        </div>
      </div>
    </section>
  )
}
