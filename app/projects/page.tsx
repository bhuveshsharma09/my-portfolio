import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Github, Linkedin, MessageSquareQuote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { projects, type Project } from "@/data/projects"
import { getTestimonialById } from "@/data/testimonials"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Projects | Bhuvesh Kumar",
  description: "All projects, newest first.",
}

const MONTHS: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
}

function latestDate(period?: string): number {
  if (!period) return 0
  if (/ongoing|present/i.test(period)) return Number.MAX_SAFE_INTEGER
  let latest = 0
  for (const match of period.matchAll(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)?\s*(\d{4})/g)) {
    const month = match[1] ? MONTHS[match[1]] : 6
    latest = Math.max(latest, Number(match[2]) * 12 + month)
  }
  return latest
}

const MATURITY_STYLES: Record<NonNullable<Project["maturity"]>, string> = {
  Production: "bg-green/10 text-green border-green/20",
  "Internal tool": "bg-blue/10 text-blue border-blue/20",
  "Internal production tool": "bg-blue/10 text-blue border-blue/20",
  "Proof of concept": "bg-orange/10 text-orange border-orange/20",
  Research: "bg-slate-100 text-slate-600 border-slate-200",
  Capstone: "bg-slate-100 text-slate-600 border-slate-200",
}

const FEATURED_IDS = ["waystone-report-automation", "bizagento", "jms-ai-toolkit", "data-redaction"]

const FEATURED_IMAGES: Record<string, { src: string; alt: string }> = {
  bizagento: {
    src: "/projects/bizagento/visual-builder.png",
    alt: "BizAgento visual workflow builder with node canvas",
  },
  "waystone-report-automation": {
    src: "/projects/waystone-report-automation/generated-report-sanitized.png",
    alt: "Synthetic example of an AI-generated quarterly compliance report section",
  },
  "jms-ai-toolkit": {
    src: "/projects/jms-test-spec-generator/test-spec-generator-arch.png",
    alt: "JMS Test Specification Generator system architecture",
  },
  "data-redaction": {
    src: "/projects/redact-sensetive-data/redacted-images.png",
    alt: "Sensitive data redaction before-and-after review surface",
  },
}

// Page-scoped copy overrides. These intentionally do not touch the shared
// Project records in data/projects.ts, since description/metric/title on
// those records are also read by the project detail pages.
type ImpactStatus = "Achieved" | "Reported" | "Projected" | "Targeted"

interface ProjectCopyOverride {
  title?: string
  description: string
  impactValue: string
  impactLabel: string
  status: ImpactStatus
}

const PROJECT_COPY: Record<string, ProjectCopyOverride> = {
  "waystone-report-automation": {
    description:
      "Built a secure Power Automate and AI pipeline that compiles a client's quarterly Outlook communications into a ranked, human-reviewed Word report section, replacing hours of manual mailbox review.",
    impactValue: "Hours → minutes",
    impactLabel: "Section 6 preparation per client, followed by a short review pass",
    status: "Achieved",
  },
  bizagento: {
    description:
      "A self-hosted visual workflow automation platform. Working with the founder within an existing codebase, I implemented workflow-building, dry-run/debugging and local Ollama-powered AI and RAG features.",
    impactValue: "Local-first · self-hosted",
    impactLabel: "Designed to keep workflow data on the user's infrastructure",
    status: "Achieved",
  },
  "jms-ai-toolkit": {
    description:
      "Built a production RAG pipeline that converts scattered product documentation into traceable test specifications. Every generated test links back to its source, and colleague feedback reported a 55–60% reduction in the most time-consuming part of specification writing.",
    impactValue: "55–60% less time",
    impactLabel: "Reported by JMS quality engineering",
    status: "Reported",
  },
  "data-redaction": {
    description:
      "An internal Helidon SE application where an Orchestrator Agent coordinates four specialist agents (Vision, Security, Redaction, Quality) to detect and redact sensitive information from Oracle LiveLabs screenshots. Reviewers approve, correct or request edits before images are saved back to OCI Object Storage.",
    impactValue: "~80% less processing time",
    impactLabel: "Reported by a colleague",
    status: "Reported",
  },
  "waystone-time-utilization": {
    description:
      "When I joined Waystone, consultants recorded billable and non-billable hours in separate spreadsheets, leaving managers to consolidate them manually. I designed an end-to-end Power Platform workflow with fast time entry, centralized SharePoint storage and a Power BI management dashboard.",
    impactValue: "Centralized workflow",
    impactLabel: "Replaced distributed spreadsheets with structured time entry and management reporting",
    status: "Achieved",
  },
  "agentic-ui-navigator": {
    description:
      "Built a ReAct-based browser agent on OCI GenAI that explores the JMS web interface without predefined test paths. Across a 39-step evaluation, the agent identified interactive elements, navigated between pages and completed test tasks autonomously.",
    impactValue: "Research target: 70% reduction",
    impactLabel: "Manual QA triage · not yet production-validated",
    status: "Targeted",
  },
  "hdb-resale-xai": {
    description:
      "Built an explainable valuation system for Singapore HDB resale flats as a NUS-ISS group capstone. The hybrid cluster-stack regressor achieved 3.92% MAPE on a temporal hold-out—68% lower error than a single XGBoost baseline—and paired each estimate with SHAP drivers, comparable sales, counterfactual offer bands and market sanity checks.",
    impactValue: "3.92% MAPE",
    impactLabel: "Temporal hold-out",
    status: "Achieved",
  },
  jms: {
    description:
      "Contributed to quality engineering for Oracle Java Management Service across six major releases (v6.0–v11), covering automated validation, release integrity, canary deployments and production-grade test infrastructure.",
    impactValue: "6 major releases",
    impactLabel: "Quality engineering across v6.0–v11",
    status: "Achieved",
  },
  "jms-livelabs-generator": {
    description:
      "An internally deployed OCI Generative AI authoring tool that helps Oracle LiveLabs authors turn JMS product documentation and Figma designs into grounded tutorial drafts, combining an OCI knowledge base with a Figma MCP connection. Drafts remained subject to author review before publication.",
    impactValue: "Peer-reported ~60% time saving",
    impactLabel: "Internal feedback, not a controlled time study",
    status: "Reported",
  },
  "explainable-ai-web-app": {
    title: "Explainable AI Dashboard",
    description:
      "Built a Flask and Dash application that lets users upload a trained scikit-learn model and dataset and receive interactive explanations without writing code. The dashboard includes SHAP, LIME, permutation importance, ICE plots, surrogate decision trees and live what-if analysis.",
    impactValue: "6 explanation methods",
    impactLabel: "SHAP · LIME · Permutation · ICE · Surrogate tree · What-if",
    status: "Achieved",
  },
}

function getCopy(project: Project): ProjectCopyOverride {
  return (
    PROJECT_COPY[project.id] ?? {
      description: project.description,
      impactValue: project.metric?.value ?? "",
      impactLabel: project.metric?.label ?? "",
      status: "Achieved",
    }
  )
}

const FOCUS_RING =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

function MaturityBadge({ maturity }: { maturity?: Project["maturity"] }) {
  if (!maturity) return null
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium",
        MATURITY_STYLES[maturity]
      )}
    >
      {maturity}
    </span>
  )
}

function ImpactStat({ copy }: { copy: ProjectCopyOverride }) {
  if (!copy.impactValue) return null
  return (
    <p className="text-sm">
      <span className="mr-1.5 align-middle text-[9px] font-semibold uppercase tracking-wide text-muted-foreground/70">
        {copy.status}
      </span>
      <span className="font-semibold text-orange">{copy.impactValue}</span>{" "}
      <span className="text-muted-foreground">{copy.impactLabel}</span>
    </p>
  )
}

function EvidenceLinks({ project, size = "sm" }: { project: Project; size?: "sm" | "md" | "text" }) {
  const testimonial = project.testimonialId ? getTestimonialById(project.testimonialId) : undefined

  if (size === "text") {
    const textLinkClass = cn(
      "inline-flex items-center gap-1 text-xs font-medium text-green underline-offset-4 transition-colors hover:underline",
      FOCUS_RING
    )
    return (
      <>
        {testimonial ? (
          <Link href={`/projects/${project.id}#testimonial`} className={textLinkClass}>
            <MessageSquareQuote className="h-3 w-3" />
            Colleague feedback
          </Link>
        ) : null}
        {project.linkedinEmbed ? (
          <Link href={project.linkedinEmbed} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
            <Linkedin className="h-3 w-3" />
            LinkedIn post ↗
          </Link>
        ) : null}
        {project.productLink ? (
          <Link
            href={project.productLink.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.productLink.ariaLabel}
            className={textLinkClass}
          >
            <ArrowUpRight className="h-3 w-3" />
            {project.productLink.label}
          </Link>
        ) : null}
        {project.links?.github ? (
          <Link href={project.links.github} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
            <Github className="h-3 w-3" />
            GitHub ↗
          </Link>
        ) : null}
        {project.links?.demo ? (
          <Link href={project.links.demo} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
            <ArrowUpRight className="h-3 w-3" />
            Live demo ↗
          </Link>
        ) : null}
      </>
    )
  }

  const padding = size === "md" ? "px-2 py-0.5" : "px-1.5 py-0.5"
  const pillClass = (extra: string) =>
    cn(
      "inline-flex items-center gap-1 rounded-full border text-[10px] font-medium transition-colors",
      padding,
      FOCUS_RING,
      extra
    )

  return (
    <>
      {testimonial ? (
        <Link
          href={`/projects/${project.id}#testimonial`}
          className={pillClass("border-green/20 bg-green/10 text-green hover:bg-green/20")}
        >
          <MessageSquareQuote className="h-3 w-3" />
          Colleague feedback
        </Link>
      ) : null}
      {project.linkedinEmbed ? (
        <Link
          href={project.linkedinEmbed}
          target="_blank"
          rel="noopener noreferrer"
          className={pillClass("border-green/20 bg-green/10 text-green hover:bg-green/20")}
        >
          <Linkedin className="h-3 w-3" />
          LinkedIn post ↗
        </Link>
      ) : null}
      {project.links?.github ? (
        <Link
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={pillClass("border-neutral-200 bg-neutral-100 text-muted-foreground hover:bg-neutral-200")}
        >
          <Github className="h-3 w-3" />
          GitHub ↗
        </Link>
      ) : null}
      {project.links?.demo ? (
        <Link
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={pillClass("border-neutral-200 bg-neutral-100 text-muted-foreground hover:bg-neutral-200")}
        >
          <ArrowUpRight className="h-3 w-3" />
          Live demo ↗
        </Link>
      ) : null}
    </>
  )
}

function FeaturedImpact({ copy }: { copy: ProjectCopyOverride }) {
  if (!copy.impactValue) return null
  return (
    <div className="mt-4 border-l-2 border-orange py-0.5 pl-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/80">
        {copy.status} impact
      </p>
      <p className="mt-1 text-sm">
        <span className="font-semibold text-orange">{copy.impactValue}</span>{" "}
        <span className="text-muted-foreground">· {copy.impactLabel}</span>
      </p>
    </div>
  )
}

function FeaturedCard({ project }: { project: Project }) {
  const image = FEATURED_IMAGES[project.id]
  const copy = getCopy(project)
  const displayTitle = copy.title ?? project.title
  const visibleTags = project.techStack.slice(0, 3)
  const hiddenTagCount = Math.max(project.techStack.length - visibleTags.length, 0)

  return (
    <article className="group grid grid-cols-1 gap-6 border-b border-neutral-200/80 py-6 md:grid-cols-[38%_1fr] md:gap-x-8 md:py-8">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-[16/10] w-full rounded-xl border border-neutral-200/70 object-cover"
        />
      ) : null}

      <div className="flex min-w-0 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <MaturityBadge maturity={project.maturity} />
          {project.contribution ? (
            <span className="text-[11px] text-muted-foreground">{project.contribution}</span>
          ) : null}
        </div>

        <h3 className="mt-2 text-[27px] font-semibold leading-[1.15] text-foreground">
          <Link
            href={`/projects/${project.id}`}
            className={cn("transition-colors hover:text-orange", FOCUS_RING)}
          >
            {displayTitle}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-4 text-base leading-[1.5] text-muted-foreground md:line-clamp-3">
          {copy.description}
        </p>

        <FeaturedImpact copy={copy} />

        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {visibleTags.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-blue/8 px-2 py-0.5 text-[11px] font-medium text-blue"
            >
              {tech}
            </span>
          ))}
          {hiddenTagCount > 0 ? (
            <span className="self-center text-[11px] text-muted-foreground">+{hiddenTagCount} more</span>
          ) : null}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              {project.organizationIcon ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.organizationIcon} alt="" className="h-3.5 w-3.5 shrink-0 rounded-sm" />
              ) : null}
              {project.organization}
            </span>
            <span>{project.period}</span>
          </span>

          <span className="flex flex-wrap items-center gap-3">
            <EvidenceLinks project={project} size="text" />
            <Link
              href={`/projects/${project.id}`}
              aria-label={`View ${displayTitle} case study`}
              className={cn(
                "inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-orange",
                FOCUS_RING
              )}
            >
              View case study
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </span>
        </div>
      </div>
    </article>
  )
}

function CompactRow({ project }: { project: Project }) {
  const copy = getCopy(project)
  const displayTitle = copy.title ?? project.title
  const visibleTags = project.techStack.slice(0, 4)
  const hiddenTagCount = Math.max(project.techStack.length - visibleTags.length, 0)

  return (
    <div className="group flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-between md:gap-6">
      <div className="min-w-0 md:flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-medium">
            <Link
              href={`/projects/${project.id}`}
              className={cn("text-foreground transition-colors hover:text-orange", FOCUS_RING)}
            >
              {displayTitle}
            </Link>
          </h3>
          <MaturityBadge maturity={project.maturity} />
          <EvidenceLinks project={project} />
        </div>

        <p className="mt-1 line-clamp-3 text-sm text-muted-foreground md:line-clamp-2">{copy.description}</p>

        <div className="mt-1.5">
          <ImpactStat copy={copy} />
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {visibleTags.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-blue/8 px-2 py-0.5 text-[11px] font-medium text-blue"
            >
              {tech}
            </span>
          ))}
          {hiddenTagCount > 0 ? (
            <span className="text-[11px] text-muted-foreground">+{hiddenTagCount} more</span>
          ) : null}
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-between gap-3 md:justify-end md:gap-4">
        <div className="md:text-right">
          <p className="flex items-center gap-1.5 text-sm text-foreground md:justify-end">
            {project.organizationIcon ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.organizationIcon} alt="" className="h-4 w-4 shrink-0 rounded-sm" />
            ) : null}
            {project.organization}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground md:text-right">{project.period}</p>
        </div>
        <Link
          href={`/projects/${project.id}`}
          aria-label={`View ${displayTitle} case study`}
          className={cn(
            "inline-flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-orange",
            FOCUS_RING
          )}
        >
          View case study
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => latestDate(b.period) - latestDate(a.period))
  const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)).filter(
    (p): p is Project => Boolean(p)
  )
  const rest = sorted.filter((p) => !FEATURED_IDS.includes(p.id))

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-none">
        <div className="sticky top-16 z-40 -mx-6 mb-10 border-b border-neutral-200/60 bg-background/95 px-6 pt-4 backdrop-blur-sm md:top-0">
          <SectionHeading
            eyebrow="ALL PROJECTS"
            title="Applied AI and software engineering projects."
            subtitle="Production systems, internal tools and research built across Oracle, Singapore startups and NUS-ISS."
            className="mb-4 gap-2"
            headingLevel="h1"
          />
        </div>

        <h2 className="mb-11 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Featured projects
        </h2>
        <div>
          {featured.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>

        <h2 className="mb-2 mt-16 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          More projects
        </h2>
        <div className="divide-y divide-neutral-200/80 border-b border-neutral-200/80">
          {rest.map((project) => (
            <CompactRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
