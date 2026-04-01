"use client"

import { BentoCard } from "@/components/bento-card"
import { experiences } from "@/data/experience"
import { cn } from "@/lib/utils"

export function ExperienceTimeline() {
  return (
    <BentoCard header="My Experience" className="h-full">
      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={cn(
              "relative pl-5 pb-4 last:pb-0",
              "before:absolute before:left-[3px] before:top-2.5 before:h-full before:w-px before:bg-neutral-200",
              "last:before:hidden"
            )}
          >
            {/* Timeline dot */}
            <div
              className={cn(
                "absolute left-0 top-1.5 h-2 w-2 rounded-full",
                index === 0 ? "bg-orange" : "bg-neutral-300"
              )}
            />
            
            {/* Content */}
            <div className={cn(
              index === 0 ? "opacity-100" : "opacity-60 hover:opacity-100 transition-opacity"
            )}>
              <h4 className="text-sm font-medium text-foreground leading-tight">
                {exp.role} at {exp.company}
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                {exp.startDate} – {exp.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
