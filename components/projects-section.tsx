"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  const [showAllFeaturedProjects, setShowAllFeaturedProjects] = useState(false)
  const featuredOrder = [
    "bizagento",
    "jms-ai-toolkit",
    "hdb-resale-xai",
    "waystone-time-utilization",
    "waystone-report-automation",
    "data-redaction",
    "jms",
    "agentic-ui-navigator",
    "jms-livelabs-generator",
  ]

  const featuredProjects = projects
    .filter((p) => p.featured)
    .sort((a, b) => featuredOrder.indexOf(a.id) - featuredOrder.indexOf(b.id))
  const primaryFeaturedProjects = featuredProjects.slice(0, 4)
  const hiddenFeaturedProjects = featuredProjects.slice(4)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="scroll-mt-32 px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-none">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Things I've shipped and what they shipped for."
          />

          <div className="space-y-4">
            {primaryFeaturedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="featured"
              />
            ))}
          </div>

          {hiddenFeaturedProjects.length > 0 && (
            <>
              <button
                type="button"
                aria-expanded={showAllFeaturedProjects}
                onClick={() => setShowAllFeaturedProjects((current) => !current)}
                className="mt-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {showAllFeaturedProjects ? "Show fewer ↑" : `View all ${featuredProjects.length} projects ↓`}
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  showAllFeaturedProjects ? "mt-4 max-h-[3200px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="space-y-4">
                  {hiddenFeaturedProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      variant="featured"
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Other Projects Section */}
        {otherProjects.length > 0 && (
          <div className="border-t border-neutral-200/80 pt-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-1">
                Other Projects
              </h3>
              <p className="text-sm text-muted-foreground">
                Open-source contributions and personal experiments.
              </p>
            </div>
            <div className="space-y-3">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} variant="list" />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
