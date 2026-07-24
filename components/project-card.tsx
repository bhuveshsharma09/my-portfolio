"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import type { KeyboardEvent, MouseEvent } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink, Github, CheckCircle2, Clock, Rocket, ArrowUpRight, PencilRuler } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  variant?: "featured" | "list"
}

export function ProjectCard({ project, variant = "featured" }: ProjectCardProps) {
  const router = useRouter()
  const detailHref = `/projects/${project.id}`
  const cardMeta = project.cardMeta ?? project.organization
  const statusConfig = {
    shipped: {
      icon: CheckCircle2,
      label: "Deployed",
      className: "bg-green/10 text-green border-green/20",
    },
    "in-progress": {
      icon: Clock,
      label: "In Progress",
      className: "bg-orange/10 text-orange border-orange/20",
    },
    planned: {
      icon: Rocket,
      label: "Planned",
      className: "bg-blue/10 text-blue border-blue/20",
    },
    designed: {
      icon: PencilRuler,
      label: "Designed · Paused",
      className: "bg-slate-100 text-slate-600 border-slate-200",
    },
  }

  const status = statusConfig[project.status]
  const StatusIcon = status.icon

  function openProject() {
    router.push(detailHref)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      openProject()
    }
  }

  function stopPropagation(event: MouseEvent<HTMLAnchorElement>) {
    event.stopPropagation()
  }

  if (variant === "list") {
    const visibleTags = project.techStack.slice(0, 3)
    const hiddenTagCount = Math.max(project.techStack.length - visibleTags.length, 0)

    return (
      <div
        id={`project-${project.id}`}
        role="link"
        tabIndex={0}
        onClick={openProject}
        onKeyDown={handleKeyDown}
        className={cn(
          "group relative cursor-pointer rounded-2xl bg-card px-4 py-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "border border-neutral-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]",
          "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
        )}
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {cardMeta}
            </p>
            <h3 className="font-display text-base font-medium text-foreground transition-colors group-hover:text-orange">
              {project.title}
            </h3>
            <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{project.description}</p>
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              {visibleTags.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600"
                >
                  {tech}
                </span>
              ))}
              {hiddenTagCount > 0 && (
                <span className="text-[10px] font-medium text-muted-foreground">+{hiddenTagCount} more</span>
              )}
            </div>
          </div>
          <div className="inline-flex items-center gap-1 text-sm font-medium text-orange">
            View details
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    )
  }

  // Featured variant — title-first layout with metric panel on the right
  return (
    <div
      id={`project-${project.id}`}
      role="link"
      tabIndex={0}
      onClick={openProject}
      onKeyDown={handleKeyDown}
      className={cn(
        "group relative cursor-pointer rounded-2xl bg-card p-6 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "border border-neutral-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]",
        "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
      )}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded bg-neutral-100 px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {cardMeta}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium",
                status.className,
              )}
            >
              <StatusIcon className="h-2.5 w-2.5" />
              {status.label}
            </span>
            {project.links && (
              <div className="ml-auto flex gap-1.5">
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={stopPropagation}
                    className="rounded-lg bg-neutral-100 p-1.5 text-muted-foreground transition-colors hover:bg-neutral-200 hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                )}
                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={stopPropagation}
                    className="rounded-lg bg-neutral-100 p-1.5 text-muted-foreground transition-colors hover:bg-neutral-200 hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>
            )}
          </div>

          <h3 className="text-h3 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-body text-muted-foreground">{project.subtitle}</p>

          <p className="mt-3 line-clamp-2 text-body text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 10).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-blue/8 px-2.5 py-1 text-xs font-medium text-blue"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 10 && (
              <span className="self-center text-[10px] font-medium text-muted-foreground">
                +{project.techStack.length - 10} more
              </span>
            )}
          </div>

          <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
            View details
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {project.metric && (
          <div className="shrink-0 rounded-2xl border border-border bg-secondary p-4 text-center md:w-40 md:py-6 lg:w-48">
            <p className="text-stat" style={{ fontSize: "40px" }}>
              {project.metric.value}
            </p>
            <p className="mt-2 text-[11px] leading-snug text-muted-foreground">
              {project.metric.label}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
