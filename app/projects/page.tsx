import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Linkedin, MessageSquareQuote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/data/projects"

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

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => latestDate(b.period) - latestDate(a.period))

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-none">
        <div className="sticky top-16 z-40 -mx-6 mb-10 border-b border-neutral-200/60 bg-background/95 px-6 pt-4 backdrop-blur-sm md:top-0">
          <SectionHeading
            eyebrow="All Projects"
            title="Things I've shipped and what they shipped for."
            className="mb-4 gap-2"
          />
        </div>

        <div className="divide-y divide-neutral-200/80 border-b border-neutral-200/80">
          {sorted.map((project) => (
            <div
              key={project.id}
              className="group relative flex items-center justify-between gap-4 py-4"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={`/projects/${project.id}`}
                    className="font-medium text-foreground transition-colors after:absolute after:inset-0 group-hover:text-orange"
                  >
                    {project.title}
                  </Link>
                  {project.testimonial ? (
                    <Link
                      href={`/projects/${project.id}#testimonial`}
                      title="Jump to the colleague testimonial"
                      className="relative z-10 inline-flex items-center gap-1 rounded-full border border-green/20 bg-green/10 px-1.5 py-0.5 text-[10px] font-medium text-green transition-colors hover:bg-green/20"
                    >
                      <MessageSquareQuote className="h-3 w-3" />
                      Testimonial
                    </Link>
                  ) : null}
                  {project.linkedinEmbed ? (
                    <Link
                      href={`/projects/${project.id}#linkedin`}
                      title="Jump to the LinkedIn post"
                      className="relative z-10 inline-flex items-center gap-1 rounded-full border border-green/20 bg-green/10 px-1.5 py-0.5 text-[10px] font-medium text-green transition-colors hover:bg-green/20"
                    >
                      <Linkedin className="h-3 w-3" />
                      Post
                    </Link>
                  ) : null}
                </div>
                <p className="mt-0.5 truncate text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-blue/8 px-2 py-0.5 text-[11px] font-medium text-blue"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 ? (
                    <span className="text-[11px] text-muted-foreground">
                      +{project.techStack.length - 5} more
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-4">
                <div className="text-right">
                  <p className="flex items-center justify-end gap-1.5 text-sm text-foreground">
                    {project.organizationIcon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={project.organizationIcon} alt="" className="h-4 w-4 shrink-0 rounded-sm" />
                    ) : null}
                    {project.organization}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{project.period}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-orange" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
