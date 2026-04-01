"use client"

import { BentoCard } from "@/components/bento-card"
import { siteConfig } from "@/data/site"
import { Sparkles, BookOpen } from "lucide-react"

export function FocusAreasCard() {
  return (
    <BentoCard header="Focus Areas" className="h-full">
      <div className="space-y-4">
        {/* Focus Areas */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-3.5 w-3.5 text-orange" />
            <span className="text-xs font-medium text-muted-foreground">What I do</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {siteConfig.focusAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center rounded-lg bg-orange/10 px-2.5 py-1 text-xs font-medium text-orange"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-3.5 w-3.5 text-blue" />
            <span className="text-xs font-medium text-muted-foreground">Currently learning</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {siteConfig.currentlyLearning.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-lg bg-blue/10 px-2.5 py-1 text-xs font-medium text-blue"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  )
}
