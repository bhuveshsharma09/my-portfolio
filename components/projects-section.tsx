"use client"

import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="px-6 py-16">
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
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} variant="compact" />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
