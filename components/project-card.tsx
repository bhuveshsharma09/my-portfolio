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
      label: "Shipped",
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
            <p className="text-xs text-muted-foreground">{cardMeta}</p>
            <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-orange">
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

  // Featured variant - Row layout
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
        {/* Left: Main content */}
        <div className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex items-start gap-3 mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-muted-foreground bg-neutral-100 px-2 py-0.5 rounded">
                  {cardMeta}
                </span>
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium",
                    status.className
                  )}
                >
                  <StatusIcon className="h-2.5 w-2.5" />
                  {status.label}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-orange transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.subtitle}</p>
            </div>

            {/* Links */}
            {project.links && (
              <div className="flex gap-1.5 shrink-0">
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={stopPropagation}
                    className="p-1.5 rounded-lg bg-neutral-100 text-muted-foreground hover:text-foreground hover:bg-neutral-200 transition-colors"
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
                    className="p-1.5 rounded-lg bg-neutral-100 text-muted-foreground hover:text-foreground hover:bg-neutral-200 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-blue/8 px-2 py-0.5 text-xs font-medium text-blue"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange">
            View details
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* Right: Metric */}
        {project.metric && (
          <div className="md:w-32 shrink-0 p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-center">
            <span className="text-xl font-bold text-orange">{project.metric.value}</span>
            <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{project.metric.label}</p>
          </div>
        )}
      </div>
    </div>
  )
}
