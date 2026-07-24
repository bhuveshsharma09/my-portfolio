import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { ReactNode } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Clock, Github, Linkedin, MessageSquareQuote, PlayCircle, Rocket, PencilRuler } from "lucide-react"
import { TraceExplorer } from "@/components/projects/TraceExplorer"
import { ToolSurfaceGrid } from "@/components/projects/tool-surface-grid"
import { RedactionCompare } from "@/components/projects/redaction-compare"
import { DocFigure } from "@/components/projects/doc-figure"
import { ManualProcessFlow, ReportArchitectureFlow } from "@/components/projects/report-flow-diagrams"
import { FlowDiagramCards } from "@/components/projects/flow-diagram"
import {
  ClusterExplorer,
  InferenceFlowStepper,
  ModelComparisonChart,
  ProductScreensPlaceholder,
  ShapDriversChart,
  ShapValidationCards,
  TemporalSplitTimeline,
  XaiMethodsTabs,
} from "@/components/projects/property-lens-visuals"
import { ProjectVisualCard } from "@/components/project-visual-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getProjectById, projects } from "@/data/projects"

type PageProps = {
  params: Promise<{
    id: string
  }>
}

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

function DocSection({
  eyebrow,
  title,
  id,
  children,
}: {
  eyebrow: string
  title: string
  id?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-neutral-200/80 pt-10">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  )
}

const docProse = "text-[15px] leading-7 text-muted-foreground"

function InlineBold({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-foreground">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  )
}

function FormattedBody({ text, className }: { text: string; className?: string }) {
  const blocks: { type: "p" | "ul"; lines: string[] }[] = []
  for (const line of text.split("\n")) {
    if (line.startsWith("- ")) {
      const last = blocks[blocks.length - 1]
      if (last?.type === "ul") last.lines.push(line.slice(2))
      else blocks.push({ type: "ul", lines: [line.slice(2)] })
    } else if (line.trim()) {
      blocks.push({ type: "p", lines: [line] })
    }
  }
  return (
    <div className={className}>
      {blocks.map((block, i) =>
        block.type === "ul" ? (
          <ul key={i} className="mt-1.5 list-disc space-y-1.5 pl-5">
            {block.lines.map((item, j) => (
              <li key={j}>
                <InlineBold text={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className={i > 0 ? "mt-1.5" : undefined}>
            <InlineBold text={block.lines[0]} />
          </p>
        )
      )}
    </div>
  )
}

function DocumentDetail({
  project,
  statusLabel,
  statusClassName,
  StatusIcon,
}: {
  project: NonNullable<ReturnType<typeof getProjectById>>
  statusLabel: string
  statusClassName: string
  StatusIcon: typeof CheckCircle2
}) {
  const story = project.story
  const hasVideos = Boolean(
    project.videos?.length || project.videoPlaceholder.youtubeId || project.videoPlaceholder.title
  )
  const hasDeepDive = Boolean(
    project.inferenceFlow ||
      project.modelComparison ||
      project.clusters ||
      project.shapDrivers ||
      project.xaiMethods ||
      project.shapValidation ||
      project.traceExplorer
  )
  const toc = [
    hasVideos ? { id: "videos", label: "Demo" } : null,
    story ? { id: "problem", label: "The problem" } : null,
    story ? { id: "who-its-for", label: "Who it's for" } : null,
    story ? { id: "my-solution", label: "My solution" } : null,
    project.design.length > 0 || project.architecture.length > 0 || project.diagrams.length > 0
      ? { id: "architecture", label: "Architecture" }
      : null,
    hasDeepDive ? { id: "deep-dive", label: "Deep dive" } : null,
    project.challenges?.length ? { id: "challenges", label: "Challenges" } : null,
    project.impactMetrics?.length || project.beforeAfter ? { id: "results", label: "Results" } : null,
    project.linkedinEmbed ? { id: "linkedin", label: "LinkedIn post" } : null,
    project.testimonial ? { id: "testimonial", label: "Testimonial" } : null,
  ].filter(Boolean) as { id: string; label: string }[]

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto w-full max-w-none space-y-10">
        <div className="sticky top-16 z-40 -mx-6 border-b border-neutral-200/60 bg-background/95 px-6 py-3 backdrop-blur-sm md:top-0">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>

        <header>
          <div className="flex flex-wrap items-center gap-2">
            {project.organizationHref ? (
              <Link
                href={project.organizationHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {project.organizationIcon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.organizationIcon} alt="" className="h-3.5 w-3.5 shrink-0 rounded-sm" />
                ) : null}
                {project.organization}
              </Link>
            ) : (
              <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
                {project.organization}
              </span>
            )}
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium",
                statusClassName
              )}
            >
              <StatusIcon className="h-3.5 w-3.5" />
              {statusLabel}
            </span>
            {project.period ? (
              <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
                {project.period}
              </span>
            ) : null}
            {project.testimonial ? (
              <a
                href="#testimonial"
                title="Jump to the colleague testimonial"
                className="inline-flex items-center gap-1.5 rounded-full border border-green/20 bg-green/10 px-3 py-1 text-xs font-medium text-green transition-colors hover:bg-green/20"
              >
                <MessageSquareQuote className="h-3.5 w-3.5" />
                Testimonial
              </a>
            ) : null}
            {project.linkedinEmbed ? (
              <a
                href="#linkedin"
                title="Jump to the LinkedIn post"
                className="inline-flex items-center gap-1.5 rounded-full border border-green/20 bg-green/10 px-3 py-1 text-xs font-medium text-green transition-colors hover:bg-green/20"
              >
                <Linkedin className="h-3.5 w-3.5" />
                Post
              </a>
            ) : null}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{project.subtitle}</p>

          {project.detailSummary ? (
            <p className={cn("mt-5", docProse)}>{project.detailSummary}</p>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-blue/8 px-2.5 py-1 text-xs font-medium text-blue"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.links?.github || project.links?.demo || project.links?.docs ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.links.github ? (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/90"
                >
                  <Github className="h-4 w-4" />
                  View source
                </Link>
              ) : null}
              {project.links.demo ? (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-neutral-100"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Open demo
                </Link>
              ) : null}
              {project.links.docs ? (
                <Link
                  href={project.links.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-neutral-100"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Product page
                </Link>
              ) : null}
            </div>
          ) : null}

          {toc.length > 1 ? (
            <nav
              aria-label="On this page"
              className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                On this page
              </span>
              {toc.map((item, index) => (
                <span key={item.id} className="flex items-center gap-x-2.5">
                  {index > 0 ? <span aria-hidden className="text-neutral-300">·</span> : null}
                  <a
                    href={`#${item.id}`}
                    className="font-medium text-orange underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {item.label}
                  </a>
                </span>
              ))}
            </nav>
          ) : null}
        </header>

        {project.videos?.length ? (
          <DocSection eyebrow="Videos" title="Watch it in action" id="videos">
            <div className="grid gap-4 md:grid-cols-2">
              {project.videos.map((video) => (
                <div key={video.youtubeId}>
                  <div className="overflow-hidden rounded-xl border border-neutral-200">
                    <iframe
                      className="aspect-video w-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-2 text-center text-xs font-medium text-muted-foreground">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </DocSection>
        ) : project.videoPlaceholder.youtubeId ? (
          <DocSection
            eyebrow="Demo"
            title={project.videoPlaceholder.title || "Watch it in action"}
            id="videos"
          >
            <div className="overflow-hidden rounded-xl border border-neutral-200 md:max-w-3xl">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${project.videoPlaceholder.youtubeId}`}
                title={project.videoPlaceholder.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </DocSection>
        ) : project.videoPlaceholder.title ? (
          <DocSection
            eyebrow="Demo"
            title={project.videoPlaceholder.title}
            id="videos"
          >
            <div className="overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-neutral-50 md:max-w-3xl">
              <div className="flex aspect-video items-center justify-center">
                <div className="text-center">
                  <PlayCircle className="mx-auto h-10 w-10 text-orange" />
                  <p className="mt-3 text-sm font-medium text-foreground">Demo video coming soon</p>
                  {project.videoPlaceholder.description ? (
                    <p className="mt-1 max-w-xs text-xs leading-5 text-muted-foreground">
                      {project.videoPlaceholder.description}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </DocSection>
        ) : null}

        {story ? (
          <DocSection eyebrow="The problem statement" title="Why this needs to exist" id="problem">
            <p className={docProse}>{story.problem.intro}</p>
            {story.problem.failureModes.length > 0 ? (
              <ul className="list-disc space-y-2 pl-5 text-[15px] leading-7 text-muted-foreground">
                {story.problem.failureModes.map((mode) => (
                  <li key={mode.title}>
                    <span className="font-semibold text-foreground">{mode.title}</span> {mode.body}
                  </li>
                ))}
              </ul>
            ) : null}
            {project.reportFlows ? (
              <div className="pt-2">
                <ManualProcessFlow />
              </div>
            ) : null}
            {project.problemFlows ? (
              <div className="pt-2">
                <FlowDiagramCards specs={project.problemFlows} />
              </div>
            ) : null}
            {story.problem.conclusion ? <p className={docProse}>{story.problem.conclusion}</p> : null}
          </DocSection>
        ) : null}

        {story ? (
          <DocSection eyebrow="Who it's for" title="The user" id="who-its-for">
            {story.audience.includes("\n") ? (
              <ul className="list-disc space-y-2 pl-5 text-[15px] leading-7 text-muted-foreground">
                {story.audience.split("\n").map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            ) : (
              <p className={docProse}>{story.audience}</p>
            )}
          </DocSection>
        ) : null}

        {story ? (
          <DocSection eyebrow="What I built" title="My solution" id="my-solution">
            <p className={docProse}>{story.approach.intro}</p>
            <div className="space-y-6">
              {story.approach.bullets.map((bullet) => (
                <div key={bullet.title}>
                  <h3 className="flex items-center gap-2 text-base font-semibold text-foreground">
                    {bullet.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={bullet.icon} alt="" className="h-5 w-5 shrink-0" />
                    ) : null}
                    {bullet.title}
                  </h3>
                  <FormattedBody text={bullet.body} className={cn("mt-1.5", docProse)} />
                  {bullet.visuals?.length ? (
                    <div
                      className={cn(
                        "mt-4 grid gap-4",
                        bullet.visuals.length >= 3
                          ? "md:grid-cols-3"
                          : bullet.visuals.length === 2
                            ? "md:grid-cols-2"
                            : "md:max-w-3xl"
                      )}
                    >
                      {bullet.visuals.map((visual) => (
                        <DocFigure key={visual.title} visual={visual} />
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            {project.solutionFlows ? (
              <div className="pt-2">
                <FlowDiagramCards specs={project.solutionFlows} plain />
              </div>
            ) : null}
            {project.gallery.length > 0 ? (
              <div className="grid gap-4 pt-2 md:grid-cols-3">
                {project.gallery.map((image) => (
                  <DocFigure key={image.title} visual={image} />
                ))}
              </div>
            ) : null}
            {project.reportFlows ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  How it runs on the Power Platform
                </p>
                <ReportArchitectureFlow />
              </div>
            ) : null}
            {project.toolSurface ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {project.toolSurface.heading?.title ?? "Tool surface"}
                </p>
                <ToolSurfaceGrid data={project.toolSurface} />
              </div>
            ) : null}
            {project.redactionCompare ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Drag to redact
                </p>
                <RedactionCompare />
              </div>
            ) : null}
          </DocSection>
        ) : null}

        {project.design.length > 0 ||
        project.architecture.length > 0 ||
        project.diagrams.length > 0 ||
        project.howItWorks ? (
          <DocSection eyebrow="Architecture & system design" title="How it works under the hood" id="architecture">
            {project.howItWorks ? (
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {project.howItWorks.title ?? "How it works, end to end"}
                </h3>
                <ol className="mt-2 list-decimal space-y-2 pl-5 text-[15px] leading-7 text-muted-foreground">
                  {project.howItWorks.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                {project.howItWorks.outro ? (
                  <p className={cn("mt-3", docProse)}>{project.howItWorks.outro}</p>
                ) : null}
              </div>
            ) : null}
            <div className="space-y-6">
              {project.design.map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className={cn("mt-1.5", docProse)}>{item.description}</p>
                  {item.bullets?.length ? (
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
            {project.pipeline ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  How the data flows
                </p>
                <PipelineDiagram pipeline={project.pipeline} />
              </div>
            ) : null}
            <div className="space-y-6">
              {project.architecture.map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className={cn("mt-1.5", docProse)}>{item.description}</p>
                  {item.bullets?.length ? (
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.visuals?.length ? (
                    <div
                      className={cn(
                        "mt-4 grid gap-4",
                        item.visuals.length >= 2 ? "md:grid-cols-2" : "md:max-w-3xl"
                      )}
                    >
                      {item.visuals.map((visual) => (
                        <DocFigure key={visual.title} visual={visual} />
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            {project.diagrams.length > 0 ? (
              <div className="grid gap-4 pt-2 md:grid-cols-2">
                {project.diagrams.map((diagram) => (
                  <DocFigure key={diagram.title} visual={diagram} />
                ))}
              </div>
            ) : null}
          </DocSection>
        ) : null}

        {hasDeepDive ? (
          <DocSection eyebrow="Model deep dive" title="Inside the system" id="deep-dive">
            {project.inferenceFlow ? (
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  One example through the pipeline
                </p>
                <InferenceFlowStepper data={project.inferenceFlow} />
              </div>
            ) : null}
            {project.modelComparison ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Architecture comparison
                </p>
                <ModelComparisonChart data={project.modelComparison} />
              </div>
            ) : null}
            {project.temporalSplit ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Temporal split
                </p>
                <TemporalSplitTimeline data={project.temporalSplit} />
              </div>
            ) : null}
            {project.clusters ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  The three sub-markets
                </p>
                <ClusterExplorer clusters={project.clusters} />
              </div>
            ) : null}
            {project.shapDrivers ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  SHAP drivers, one prediction
                </p>
                <ShapDriversChart data={project.shapDrivers} />
              </div>
            ) : null}
            {project.xaiMethods ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Four methods, four questions
                </p>
                <XaiMethodsTabs methods={project.xaiMethods} />
              </div>
            ) : null}
            {project.shapValidation ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Faithfulness validation
                </p>
                <ShapValidationCards items={project.shapValidation} />
              </div>
            ) : null}
            {project.traceExplorer ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Mini trace explorer
                </p>
                <TraceExplorer />
              </div>
            ) : null}
          </DocSection>
        ) : null}

        {project.challenges?.length ? (
          <DocSection eyebrow="Under the hood" title="Key technical challenges" id="challenges">
            <div className="space-y-6">
              {project.challenges.map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <ul className="mt-1.5 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-muted-foreground">
                    <li>
                      <span className="font-semibold text-foreground">The hurdle: </span>
                      {item.challenge}
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">How I solved it: </span>
                      {item.solution}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </DocSection>
        ) : null}

        {project.impactMetrics?.length || project.beforeAfter || project.decomposition ? (
          <DocSection eyebrow="Results & impact" title="What changed" id="results">
            {project.impactMetrics?.length ? (
              <ul className="list-disc space-y-2 pl-5 text-[15px] leading-7 text-muted-foreground">
                {project.impactMetrics.map((m) => (
                  <li key={m.title}>
                    <span className="font-semibold text-orange">{m.value}</span>{" "}
                    <span className="font-semibold text-foreground">{m.title.toLowerCase()}:</span>{" "}
                    {m.description}
                  </li>
                ))}
              </ul>
            ) : null}
            {project.decomposition ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  A representative run
                </p>
                <DecompositionFlow decomposition={project.decomposition} />
              </div>
            ) : null}
            {project.beforeAfter ? (
              <div className="pt-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Before vs after
                </p>
                <BeforeAfterTable beforeAfter={project.beforeAfter} />
              </div>
            ) : null}
          </DocSection>
        ) : null}

        {story?.significance ? (
          <DocSection eyebrow="Why it matters" title="The bigger picture">
            <p className={docProse}>{story.significance}</p>
          </DocSection>
        ) : null}

        {project.linkedinEmbed ? (
          <DocSection eyebrow="In the wild" title="LinkedIn post" id="linkedin">
            <iframe
              src={project.linkedinEmbed}
              height={project.linkedinEmbedHeight ?? 545}
              className="w-full max-w-[504px] rounded-xl border border-neutral-200"
              title="Embedded LinkedIn post"
              allowFullScreen
            />
          </DocSection>
        ) : null}

        {project.testimonial ? (
          <DocSection eyebrow="Testimonial" title="From a teammate" id="testimonial">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.testimonial.image}
              alt={project.testimonial.alt ?? "Colleague testimonial"}
              className="w-full max-w-2xl rounded-xl border border-neutral-200"
            />
            {project.testimonial.caption ? (
              <p className="max-w-2xl text-sm italic leading-6 text-muted-foreground">
                {project.testimonial.caption}
              </p>
            ) : null}
          </DocSection>
        ) : null}
      </div>
    </section>
  )
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return {
      title: "Project Not Found | Bhuvesh Kumar",
    }
  }

  return {
    title: `${project.title} | Bhuvesh Kumar`,
    description: project.description,
  }
}

function DetailCard({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-neutral-200/80 bg-card p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange">{eyebrow}</p>
      ) : null}
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-4 min-h-0 flex-1">{children}</div>
    </section>
  )
}

function PipelineDiagram({
  pipeline,
}: {
  pipeline: NonNullable<Awaited<ReturnType<typeof getProjectById>>>["pipeline"]
}) {
  if (!pipeline) return null
  return (
    <div className="space-y-3">
      <ol className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-stretch">
        {pipeline.stages.map((stage, i) => (
          <li key={stage.label} className="flex min-w-[140px] flex-1 items-center gap-2">
            <div className="flex-1 rounded-xl border border-neutral-200 bg-white px-3 py-2.5">
              <p className="text-sm font-semibold text-foreground">{stage.label}</p>
              {stage.sublabel ? (
                <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
                  {stage.sublabel}
                </p>
              ) : null}
            </div>
            {i < pipeline.stages.length - 1 ? (
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            ) : null}
          </li>
        ))}
      </ol>
      {pipeline.feedback ? (
        <p className="text-xs italic leading-snug text-muted-foreground">
          ↺ {pipeline.feedback}
        </p>
      ) : null}
    </div>
  )
}

function DecompositionFlow({
  decomposition,
}: {
  decomposition: NonNullable<Awaited<ReturnType<typeof getProjectById>>>["decomposition"]
}) {
  if (!decomposition) return null
  const allSteps = [
    ...decomposition.steps.map((s) => ({ ...s, highlight: false })),
    { ...decomposition.final, highlight: true },
  ]
  return (
    <ol className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-stretch">
      {allSteps.map((step, i) => {
        const isLast = i === allSteps.length - 1
        return (
          <li key={`${step.label}-${i}`} className="flex min-w-[110px] flex-1 items-center gap-2">
            <div
              className={cn(
                "flex-1 rounded-xl border px-3 py-3 text-center",
                step.highlight
                  ? "border-orange/40 bg-orange/5"
                  : "border-neutral-200 bg-white",
              )}
            >
              <p
                className={cn(
                  "font-display text-xl font-bold tracking-tight",
                  step.highlight ? "text-orange" : "text-foreground",
                )}
              >
                {step.value}
              </p>
              <p className="mt-1 text-[10px] uppercase leading-snug tracking-[0.14em] text-muted-foreground">
                {step.label}
              </p>
            </div>
            {!isLast ? (
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            ) : null}
          </li>
        )
      })}
    </ol>
  )
}

function BeforeAfterTable({
  beforeAfter,
}: {
  beforeAfter: NonNullable<Awaited<ReturnType<typeof getProjectById>>>["beforeAfter"]
}) {
  if (!beforeAfter) return null
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200">
      <table className="w-full min-w-[520px] text-sm">
        <thead className="bg-neutral-50">
          <tr>
            <th className="px-4 py-3 text-left text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-muted-foreground" />
            <th className="px-4 py-3 text-left text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {beforeAfter.headers.before}
            </th>
            <th className="px-4 py-3 text-left text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-orange">
              {beforeAfter.headers.after}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200">
          {beforeAfter.rows.map((row) => (
            <tr key={row.aspect}>
              <td className="px-4 py-3 font-semibold text-foreground">{row.aspect}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.before}</td>
              <td className="px-4 py-3 font-medium text-foreground">{row.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  const status = statusConfig[project.status]
  const StatusIcon = status.icon
  const hasDemo = Boolean(project.videoPlaceholder.title || project.videoPlaceholder.description)
  const hasDiagrams = project.diagrams.length > 0
  const hasGallery = project.gallery.length > 0

  const architectureSection =
    project.design.length > 0 || project.architecture.length > 0 ? (
      <div className="grid gap-6 lg:grid-cols-2">
        {project.design.length > 0 ? (
          <DetailCard eyebrow="Design" title="Design decisions">
            <div className="space-y-4">
              {project.design.map((item) => (
                <div key={item.title} className="rounded-xl border border-neutral-100 bg-neutral-50/80 p-4">
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  {item.bullets ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="inline-flex items-center rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-foreground ring-1 ring-neutral-200/80"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </DetailCard>
        ) : null}

        {project.architecture.length > 0 ? (
          <DetailCard eyebrow="Architecture" title="Architecture notes">
            <div className="space-y-4">
              {project.architecture.map((item) => (
                <div key={item.title} className="rounded-xl border border-neutral-100 bg-neutral-50/80 p-4">
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  {item.bullets ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="inline-flex items-center rounded-lg bg-orange/10 px-2.5 py-1 text-xs font-medium text-orange"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </DetailCard>
        ) : null}
      </div>
    ) : null

  const diagramsSection =
    project.id !== "jms" && hasDiagrams ? (
      <DetailCard eyebrow="Architecture & system design" title="How the system fits together">
        <div className="grid gap-4 md:grid-cols-3">
          {project.diagrams.map((diagram) => (
            <ProjectVisualCard
              key={diagram.title}
              visual={diagram}
              aspectClassName="aspect-[4/3]"
            />
          ))}
        </div>
      </DetailCard>
    ) : null

  if (project.layout === "document") {
    return (
      <DocumentDetail
        project={project}
        statusLabel={status.label}
        statusClassName={status.className}
        StatusIcon={StatusIcon}
      />
    )
  }

  const challengesSection = project.challenges?.length ? (
    <DetailCard eyebrow="Under the hood" title="Key technical challenges">
      <div className="space-y-4">
        {project.challenges.map((item) => (
          <div key={item.title} className="rounded-xl border border-neutral-100 bg-neutral-50/80 p-4">
            <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">The hurdle: </span>
              {item.challenge}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">How I solved it: </span>
              {item.solution}
            </p>
          </div>
        ))}
      </div>
    </DetailCard>
  ) : null

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto w-full max-w-none space-y-6">
          <div className="sticky top-16 z-40 -mx-6 border-b border-neutral-200/60 bg-background/95 px-6 py-3 backdrop-blur-sm md:top-0">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </div>

          <section className="rounded-2xl border border-neutral-200/80 bg-card p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  {project.organizationHref ? (
                    <Link
                      href={project.organizationHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {project.organizationIcon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={project.organizationIcon} alt="" className="h-3.5 w-3.5 shrink-0 rounded-sm" />
                      ) : null}
                      {project.organization}
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
                      {project.organizationIcon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={project.organizationIcon} alt="" className="h-3.5 w-3.5 shrink-0 rounded-sm" />
                      ) : null}
                      {project.organization}
                    </span>
                  )}
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium",
                      status.className
                    )}
                  >
                    <StatusIcon className="h-3.5 w-3.5" />
                    {status.label}
                  </span>
                  {project.period ? (
                    <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
                      {project.period}
                    </span>
                  ) : null}
                </div>

                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {project.title}
                  </h1>
                  <p className="mt-2 text-lg text-muted-foreground">{project.subtitle}</p>
                </div>

                {project.detailSummary ? (
                  <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
                    {project.detailSummary}
                  </p>
                ) : null}

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-blue/8 px-2.5 py-1 text-xs font-medium text-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex w-full max-w-xs flex-col gap-3 md:self-stretch">
                {project.metric ? (
                  <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 p-4 text-center">
                    <p className="text-2xl font-bold tracking-tight text-orange">{project.metric.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{project.metric.label}</p>
                  </div>
                ) : null}

                <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
                  {project.links?.github ? (
                    <Button asChild className="bg-foreground text-primary-foreground hover:bg-foreground/90">
                      <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        View source
                      </Link>
                    </Button>
                  ) : null}
                  {project.links?.demo ? (
                    <Button asChild variant="outline" className="border-neutral-200">
                      <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="h-4 w-4" />
                        Open demo
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </section>

          {project.story ? (
            <>
              {project.videos?.length ? (
                <DetailCard eyebrow="Videos" title="Watch it in action">
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.videos.map((video) => (
                      <div key={video.youtubeId}>
                        <div className="overflow-hidden rounded-2xl border border-neutral-200">
                          <iframe
                            className="aspect-video w-full"
                            src={`https://www.youtube.com/embed/${video.youtubeId}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                        <p className="mt-2 text-center text-xs font-medium text-muted-foreground">
                          {video.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </DetailCard>
              ) : null}

              {project.demoSlot ? (
                <DetailCard eyebrow={project.demoSlot.title} title="Walkthrough">
                  {project.videoPlaceholder.youtubeId ? (
                    <div className="overflow-hidden rounded-2xl border border-neutral-200">
                      <iframe
                        className="aspect-video w-full"
                        src={`https://www.youtube.com/embed/${project.videoPlaceholder.youtubeId}`}
                        title={project.videoPlaceholder.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-2xl border border-dashed border-neutral-200 bg-neutral-50">
                      <div className="flex aspect-video items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),rgba(244,244,245,0.9))]">
                        <div className="text-center">
                          <PlayCircle className="mx-auto h-10 w-10 text-orange" />
                          <p className="mt-3 text-sm font-medium text-foreground">Demo placeholder</p>
                          <p className="mt-1 max-w-md text-xs leading-5 text-muted-foreground">
                            {project.demoSlot.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </DetailCard>
              ) : null}

              <DetailCard eyebrow="The problem" title="Why this needs to exist">
                <p className="text-sm leading-6 text-muted-foreground md:text-base">
                  {project.story.problem.intro}
                </p>
                {project.story.problem.failureModes.length > 0 ? (
                  <>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground md:text-base">
                      Three expensive failure modes:
                    </p>
                    <div className="mt-3 space-y-3">
                      {project.story.problem.failureModes.map((mode) => (
                        <div
                          key={mode.title}
                          className="rounded-xl border border-neutral-100 bg-neutral-50/80 px-4 py-3"
                        >
                          <p className="text-sm font-semibold text-foreground">{mode.title}</p>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">{mode.body}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
                {project.story.problem.conclusion ? (
                  <p className="mt-4 text-sm leading-6 text-muted-foreground md:text-base">
                    {project.story.problem.conclusion}
                  </p>
                ) : null}
              </DetailCard>

              <DetailCard eyebrow="Who it's for" title="The user">
                <p className="text-sm leading-6 text-muted-foreground md:text-base">
                  {project.story.audience}
                </p>
              </DetailCard>

              <DetailCard eyebrow="What I built" title="The approach">
                <p className="text-sm leading-6 text-muted-foreground md:text-base">
                  {project.story.approach.intro}
                </p>
                <div className="mt-3 space-y-3">
                  {project.story.approach.bullets.map((bullet) => (
                    <div
                      key={bullet.title}
                      className="rounded-xl border border-neutral-100 bg-neutral-50/80 px-4 py-3"
                    >
                      <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        {bullet.icon ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={bullet.icon} alt="" className="h-5 w-5 shrink-0" />
                        ) : null}
                        {bullet.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{bullet.body}</p>
                    </div>
                  ))}
                </div>

                {project.pipeline ? (
                  <div className="mt-6">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Pipeline
                    </p>
                    <PipelineDiagram pipeline={project.pipeline} />
                  </div>
                ) : null}
              </DetailCard>

              {project.toolSurface ? (
                <DetailCard
                  eyebrow={project.toolSurface.heading?.eyebrow ?? "Tool surface"}
                  title={project.toolSurface.heading?.title ?? "What the agent can call"}
                >
                  <ToolSurfaceGrid data={project.toolSurface} />
                </DetailCard>
              ) : null}

              {project.redactionCompare ? (
                <DetailCard eyebrow="Interactive" title="Drag to redact">
                  <RedactionCompare />
                </DetailCard>
              ) : null}

              {project.inferenceFlow ? (
                <DetailCard eyebrow="Walkthrough" title="One flat through the pipeline">
                  <InferenceFlowStepper data={project.inferenceFlow} />
                </DetailCard>
              ) : null}

              {project.modelComparison || project.temporalSplit ? (
                <DetailCard eyebrow="Why the model is good" title="Architecture vs accuracy">
                  {project.modelComparison ? (
                    <div>
                      <p className="mb-4 text-sm leading-6 text-muted-foreground md:text-base">
                        A single XGBoost hit 12.18% MAPE. A four-model stacked ensemble got to 6.21%. Splitting the market by cluster and giving each its own ensemble dropped error to 3.92% — R² 0.96 on a strict temporal hold-out.
                      </p>
                      <ModelComparisonChart data={project.modelComparison} />
                    </div>
                  ) : null}
                  {project.temporalSplit ? (
                    <div className="mt-8">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Temporal hold-out
                      </p>
                      <TemporalSplitTimeline data={project.temporalSplit} />
                    </div>
                  ) : null}
                </DetailCard>
              ) : null}

              {project.clusters ? (
                <DetailCard eyebrow="How the clusters specialise" title="Three sub-markets, three weightings">
                  <p className="mb-4 text-sm leading-6 text-muted-foreground md:text-base">
                    The three clusters don&apos;t just split the data — each one leans on the four base learners differently, and the pattern matches the domain. Select a cluster to see the weighting.
                  </p>
                  <ClusterExplorer clusters={project.clusters} />
                </DetailCard>
              ) : null}

              {project.shapDrivers || project.xaiMethods || project.shapValidation ? (
                <DetailCard eyebrow="Why explainability was the point" title="Defensibility was the hard part">
                  <p className="mb-6 text-sm leading-6 text-muted-foreground md:text-base">
                    Accuracy was never the hard part — defensibility was. Composite TreeSHAP runs TreeSHAP on each tree learner and blends them by the meta-learner&apos;s coefficients, staying mathematically exact for the tree portion. Across 100 held-out cases, the attributions reconstruct the model&apos;s prediction to machine precision.
                  </p>

                  {project.shapDrivers ? (
                    <div className="mb-8">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        SHAP drivers — one prediction
                      </p>
                      <ShapDriversChart data={project.shapDrivers} />
                    </div>
                  ) : null}

                  {project.xaiMethods ? (
                    <div className="mb-8">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Four methods, four questions
                      </p>
                      <XaiMethodsTabs methods={project.xaiMethods} />
                    </div>
                  ) : null}

                  {project.shapValidation ? (
                    <div>
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Faithfulness validation
                      </p>
                      <ShapValidationCards items={project.shapValidation} />
                    </div>
                  ) : null}
                </DetailCard>
              ) : null}

              {architectureSection}
              {diagramsSection}
              {challengesSection}

              {project.impactMetrics || project.decomposition ? (
                <DetailCard eyebrow="Results & impact" title="What changed">
                  {project.impactMetrics ? (
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      {project.impactMetrics.map((m) => (
                        <div
                          key={m.title}
                          className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4"
                        >
                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                            {m.title}
                          </p>
                          <p className="mt-2 font-display text-2xl font-bold leading-tight text-orange">
                            {m.value}
                          </p>
                          <p className="mt-1 text-xs leading-snug text-muted-foreground">
                            {m.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {project.decomposition ? (
                    <div className="mt-6">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        A representative run
                      </p>
                      <DecompositionFlow decomposition={project.decomposition} />
                    </div>
                  ) : null}

                </DetailCard>
              ) : null}

              {project.beforeAfter ? (
                <DetailCard eyebrow="Before vs after" title="The shift">
                  <BeforeAfterTable beforeAfter={project.beforeAfter} />
                </DetailCard>
              ) : null}

              {project.traceExplorer ? (
                <DetailCard eyebrow="Traceability" title="Mini trace explorer">
                  <TraceExplorer />
                </DetailCard>
              ) : null}

              <DetailCard eyebrow="Why it matters" title="The bigger picture">
                <p className="text-sm leading-6 text-muted-foreground md:text-base">
                  {project.story.significance}
                </p>
              </DetailCard>

              {project.productScreens ? (
                <DetailCard eyebrow="Product screens" title="The running app">
                  <ProductScreensPlaceholder data={project.productScreens} />
                </DetailCard>
              ) : null}
            </>
          ) : project.id === "jms" ? (
            <DetailCard eyebrow="Overview" title="Project details">
              <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
              <div className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-xl border border-neutral-100 bg-neutral-50/80 px-4 py-3 text-sm text-muted-foreground"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </DetailCard>
          ) : hasDemo ? (
            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <DetailCard eyebrow="Overview" title="Project details">
                <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
                <div className="mt-4 space-y-3">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-xl border border-neutral-100 bg-neutral-50/80 px-4 py-3 text-sm text-muted-foreground"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </DetailCard>

              <DetailCard eyebrow="Demo" title={project.videoPlaceholder.title} className="flex flex-col">
                {project.videoPlaceholder.youtubeId ? (
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200">
                    <iframe
                      className="aspect-video w-full flex-1"
                      src={`https://www.youtube.com/embed/${project.videoPlaceholder.youtubeId}`}
                      title={project.videoPlaceholder.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-2xl border border-dashed border-neutral-200 bg-neutral-50">
                    <div className="flex aspect-video items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),rgba(244,244,245,0.9))]">
                      <div className="text-center">
                        <PlayCircle className="mx-auto h-10 w-10 text-orange" />
                        <p className="mt-3 text-sm font-medium text-foreground">Working demo placeholder</p>
                        <p className="mt-1 max-w-xs text-xs leading-5 text-muted-foreground">
                          {project.videoPlaceholder.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </DetailCard>
            </div>
          ) : (
            <DetailCard eyebrow="Overview" title="Project details">
              <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
              <div className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-xl border border-neutral-100 bg-neutral-50/80 px-4 py-3 text-sm text-muted-foreground"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </DetailCard>
          )}

          {!project.story ? (
            <>
              {architectureSection}
              {diagramsSection}
              {challengesSection}
            </>
          ) : null}

          {project.id !== "jms" && hasGallery ? (
            <DetailCard eyebrow="Gallery" title="Project images">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.gallery.map((image) => (
                  <ProjectVisualCard
                    key={image.title}
                    visual={image}
                    aspectClassName="aspect-[4/3]"
                  />
                ))}
              </div>
            </DetailCard>
          ) : null}
        </div>
    </section>
  )
}
