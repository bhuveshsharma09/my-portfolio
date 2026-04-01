"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { certifications, education } from "@/data/experience"
import { cn } from "@/lib/utils"
import { Award, BookOpen, GraduationCap, MapPin } from "lucide-react"

export function EducationSection() {
  const [showEarlierEducation, setShowEarlierEducation] = useState(false)
  const primaryEducation = education.slice(0, 3)
  const earlierEducation = education.slice(3)

  return (
    <section id="education" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Education
          </h2>
          <p className="text-muted-foreground">
            Academic journey from engineering foundations to AI specialization.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {primaryEducation.map((edu, index) => (
            <EducationAccordionItem key={edu.id} edu={edu} index={index} />
          ))}
        </Accordion>

        <button
          type="button"
          aria-expanded={showEarlierEducation}
          onClick={() => setShowEarlierEducation((current) => !current)}
          className="mt-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {showEarlierEducation ? "Hide ↑" : "Show earlier education ↓"}
        </button>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-out",
            showEarlierEducation ? "mt-4 max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {earlierEducation.map((edu, index) => (
              <EducationAccordionItem
                key={edu.id}
                edu={edu}
                index={primaryEducation.length + index}
              />
            ))}
          </Accordion>
        </div>

        <div className="mt-8">
          <div className="mb-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Certifications
            </h3>
          </div>
          <div>
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className={cn(
                  "flex flex-col gap-1 py-3 md:flex-row md:items-start md:justify-between md:gap-4",
                  index < certifications.length - 1 && "border-b border-neutral-200/70"
                )}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium text-foreground">{cert.name}</p>
                    {cert.featured && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 px-2 py-0.5 text-[10px] font-medium text-orange">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                <p className="shrink-0 text-xs text-muted-foreground md:pt-0.5 md:text-right">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationAccordionItem({
  edu,
  index,
}: {
  edu: (typeof education)[number]
  index: number
}) {
  return (
    <AccordionItem
      value={edu.id}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card px-5 transition-all duration-300",
        "border border-neutral-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]",
        "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_8px_24px_-4px_rgba(0,0,0,0.08)]"
      )}
    >
      <AccordionTrigger className="py-5 hover:no-underline">
        <div className="flex w-full flex-col gap-4 md:flex-row md:items-center">
          <div className="shrink-0">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl",
                index === 0 ? "bg-orange/10" : "bg-neutral-100"
              )}
            >
              <GraduationCap
                className={cn(
                  "h-5 w-5",
                  index === 0 ? "text-orange" : "text-neutral-500"
                )}
              />
            </div>
          </div>

          <div className="min-w-0 flex-1 text-left">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-foreground">{edu.degree}</h3>
              {edu.status === "In Progress" && (
                <span className="inline-flex items-center rounded-full border border-orange/20 bg-orange/10 px-2 py-0.5 text-[10px] font-medium text-orange">
                  In Progress
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span className="font-medium text-foreground/80">{edu.institution}</span>
              <span className="text-neutral-300">|</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {edu.location}
              </span>
              <span className="text-neutral-300">|</span>
              <span>{edu.period}</span>
            </div>
            {edu.description && (
              <p className="mt-2 max-w-3xl text-xs leading-relaxed text-muted-foreground">
                {edu.description}
              </p>
            )}
          </div>

          {(edu.gpa || edu.achievement) && (
            <div className="shrink-0 text-left md:text-right">
              {edu.gpa && (
                <div className="flex items-center gap-1.5 md:justify-end">
                  <Award className="h-3.5 w-3.5 text-orange" />
                  <span className="text-sm font-semibold text-orange">GPA: {edu.gpa}</span>
                </div>
              )}
              {edu.achievement && (
                <p className="mt-0.5 text-xs text-muted-foreground">{edu.achievement}</p>
              )}
            </div>
          )}
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-5">
        <div className="rounded-xl border border-neutral-100 bg-neutral-50/80 p-4">
          <div className="mb-3 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Subjects Learned
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {edu.subjects.map((subject) => (
              <span
                key={subject}
                className="inline-flex items-center rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-foreground shadow-sm ring-1 ring-neutral-200/80"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
