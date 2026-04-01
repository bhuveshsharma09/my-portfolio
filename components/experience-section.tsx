"use client"

import { experiences } from "@/data/experience"
import { cn } from "@/lib/utils"
import { Briefcase, MapPin, TrendingUp } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Work Experience
          </h2>
          <p className="text-muted-foreground">
            Building enterprise software and AI-powered solutions.
          </p>
        </div>

        {/* Experience Cards - Row layout */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={cn(
                "group relative rounded-2xl bg-card p-5 transition-all duration-300",
                "border border-neutral-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]",
                "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
              )}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Left: Icon */}
                <div className="shrink-0">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    index === 0 ? "bg-orange/10" : "bg-neutral-100"
                  )}>
                    <Briefcase className={cn(
                      "h-5 w-5",
                      index === 0 ? "text-orange" : "text-neutral-500"
                    )} />
                  </div>
                </div>

                {/* Middle: Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    {index === 0 && (
                      <span className="inline-flex items-center rounded-full bg-orange/10 px-2 py-0.5 text-[10px] font-medium text-orange border border-orange/20">
                        Most Recent
                      </span>
                    )}
                    {exp.type === "Internship" && (
                      <span className="inline-flex items-center rounded-full bg-blue/10 px-2 py-0.5 text-[10px] font-medium text-blue border border-blue/20">
                        Internship
                      </span>
                    )}
                    {exp.type === "Volunteer" && (
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 border border-slate-200">
                        Volunteer
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                    <span className="font-medium text-orange">{exp.company}</span>
                    <span className="text-neutral-300">|</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                    <span className="text-neutral-300">|</span>
                    <span>{exp.startDate} – {exp.endDate}</span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-xs">{exp.mode}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {exp.description}
                  </p>
                  
                  {/* Highlights */}
                  {exp.highlights && exp.highlights.length > 0 && !exp.techTags && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-neutral-50 px-2 py-1 rounded-md border border-neutral-100"
                        >
                          <TrendingUp className="h-3 w-3 text-orange" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                  {exp.highlights && exp.highlights.length > 0 && exp.techTags && (
                    <ul className="mt-3 space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.techTags && exp.techTags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.techTags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
