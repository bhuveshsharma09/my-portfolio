import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { ReactNode } from "react"
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Github, LayoutPanelTop, PlayCircle, Rocket } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
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
      <div className="mt-4">{children}</div>
    </section>
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <Link
            href={`/#project-${project.id}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <section className="rounded-2xl border border-neutral-200/80 bg-card p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {project.organization}
                  </span>
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

                <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
                  {project.detailSummary}
                </p>

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

              <div className="flex w-full max-w-xs flex-col gap-3">
                {project.metric ? (
                  <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4 text-center">
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

            <DetailCard eyebrow="Demo" title={project.videoPlaceholder.title}>
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
            </DetailCard>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
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
          </div>

          <DetailCard eyebrow="Diagrams" title="Design and architecture diagrams">
            <div className="grid gap-4 md:grid-cols-3">
              {project.diagrams.map((diagram) => (
                <div
                  key={diagram.title}
                  className="overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50"
                >
                  <div className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(135deg,rgba(251,146,60,0.1),rgba(59,130,246,0.08))]">
                    <LayoutPanelTop className="h-8 w-8 text-orange" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-foreground">{diagram.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{diagram.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </DetailCard>

          <DetailCard eyebrow="Gallery" title="Project images">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((image) => (
                <div
                  key={image.title}
                  className="overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50"
                >
                  <div className="aspect-[4/3] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,245,245,0.95))]" />
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-foreground">{image.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </DetailCard>
        </div>
      </main>
      <Footer />
    </div>
  )
}
