import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { CommunitySection } from "@/components/community-section"
import { experiences } from "@/data/experience"
import { getProjectById } from "@/data/projects"

export const metadata: Metadata = {
  title: "Experience | Bhuvesh Kumar",
  description: "Experience across AI engineering, enterprise software, workflow automation and product development.",
}

const companyIcons: Record<string, string> = {
  Oracle: "/icons/oracle.png",
  Waystone: "/icons/waystone.png",
  "Tosba Technologies": "/icons/tosba.jpg",
  Exicom: "/icons/exicom.png",
}

const FOCUS =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

export default function ExperiencePage() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-none">
        <header className="mb-10 flex flex-col gap-3">
          <h1 className="text-h2">Experience</h1>
          <p className="text-body max-w-2xl text-muted-foreground">
            Experience across AI engineering, enterprise software, workflow automation and product development.
          </p>
        </header>

        <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
          {experiences.map((exp) => {
            const icon = companyIcons[exp.company]
            const headingId = `${exp.id}-heading`
            return (
              <article key={exp.id} aria-labelledby={headingId} className="py-8">
                <div className="flex flex-col gap-x-8 gap-y-2 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <h2 id={headingId} className="text-xl font-bold tracking-tight text-foreground">
                      {exp.companyHref ? (
                        <Link
                          href={exp.companyHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn("inline-flex items-center gap-2 transition-colors hover:text-orange", FOCUS)}
                        >
                          {icon ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={icon} alt="" className="h-5 w-5 shrink-0 rounded-sm" />
                          ) : null}
                          {exp.company}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </Link>
                      ) : (
                        exp.company
                      )}
                    </h2>
                    <p className="mt-1 text-base font-semibold text-foreground">{exp.role}</p>
                  </div>
                  <div className="text-sm text-muted-foreground md:shrink-0 md:pt-1 md:text-right">
                    <p>
                      {exp.type} · {exp.mode}
                    </p>
                    <p className="mt-0.5">
                      {exp.startDate} – {exp.endDate} · {exp.location}
                    </p>
                  </div>
                </div>

                <p className="mt-4 max-w-3xl text-[15px] leading-7 text-muted-foreground">{exp.description}</p>
                {exp.evidenceNote ? (
                  <p className="mt-3 max-w-3xl border-l-2 border-neutral-300 pl-3 text-sm leading-6 text-muted-foreground">
                    {exp.evidenceNote}
                  </p>
                ) : null}

                {exp.techTags?.length ? (
                  <ul aria-label="Technologies" className="mt-4 flex flex-wrap items-center gap-1.5">
                    {exp.techTags.map((tech) => (
                      <li
                        key={tech}
                        className="inline-flex items-center rounded-md bg-blue/8 px-2 py-0.5 text-[11px] font-medium text-blue"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {exp.highlights.length > 0 ? (
                  <ul className="mt-4 max-w-3xl list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground">
                    {exp.highlights.slice(0, 4).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}

                {exp.projectIds?.length ? (
                  <div className="mt-5">
                    <h3 className="font-mono text-[10px] font-normal uppercase tracking-[0.18em] text-muted-foreground">
                      Related case studies
                    </h3>
                    <ul className="mt-2 flex flex-col gap-x-5 gap-y-1.5 text-sm sm:flex-row sm:flex-wrap">
                      {exp.projectIds.map((projectId) => {
                        const project = getProjectById(projectId)
                        if (!project) return null
                        return (
                          <li key={projectId}>
                            <Link
                              href={`/projects/${projectId}`}
                              className={cn(
                                "inline-flex items-center gap-0.5 font-medium text-orange underline-offset-4 transition-colors hover:text-foreground hover:underline",
                                FOCUS,
                              )}
                            >
                              {project.title}
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>

        <CommunitySection />
      </div>
    </section>
  )
}
