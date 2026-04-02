"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { cn } from "@/lib/utils"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  const [showAllFeaturedProjects, setShowAllFeaturedProjects] = useState(false)
  const featuredOrder = [
    "jms-ai-toolkit",
    "hdb-resale-xai",
    "oci-jms-mcp",
    "data-redaction",
    "jms",
    "agentic-ui-navigator",
    "jms-livelabs-generator",
    "agentic-sqe-portal",
  ]

  const featuredProjects = projects
    .filter((p) => p.featured)
    .sort((a, b) => featuredOrder.indexOf(a.id) - featuredOrder.indexOf(b.id))
  const primaryFeaturedProjects = featuredProjects.slice(0, 4)
  const hiddenFeaturedProjects = featuredProjects.slice(4)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="scroll-mt-32 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Featured Projects Section */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Selected Projects
            </h2>
            <p className="text-muted-foreground">
              Key projects showcasing AI/ML innovation and enterprise software development.
            </p>
          </div>

          {/* Featured Projects - Row layout (stacked) */}
          <div className="space-y-4">
            {primaryFeaturedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
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
                    <ProjectCard key={project.id} project={project} variant="featured" />
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
