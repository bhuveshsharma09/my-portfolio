import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { experiences } from "@/data/experience"
import { getProjectById } from "@/data/projects"

export const metadata: Metadata = {
  title: "Experience | Bhuvesh Kumar",
  description: "Work experience, newest first.",
}

const companyIcons: Record<string, string> = {
  Oracle: "/icons/oracle.png",
  Waystone: "/icons/waystone.png",
  "Tosba Technologies": "/icons/tosba.jpg",
  Exicom: "/icons/exicom.png",
}

export default function ExperiencePage() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-none">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Experience"
            title="Where I've built and what I shipped there."
          />
        </div>

        <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
          {experiences.map((exp) => {
            const icon = companyIcons[exp.company]
            return (
              <div key={exp.id} className="flex items-start justify-between gap-4 py-5">
                <div className="min-w-0">
                  <p className="font-bold text-foreground">
                    {exp.role}
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      {exp.type} · {exp.mode}
                    </span>
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {exp.description}
                    {exp.linkLabel ? `${exp.linkLabel}${exp.descriptionSuffix ?? ""}` : null}
                  </p>
                  {exp.techTags?.length ? (
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      {exp.techTags.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-blue/8 px-2 py-0.5 text-[11px] font-medium text-blue"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.techTags.length > 5 ? (
                        <span className="text-[11px] text-muted-foreground">
                          +{exp.techTags.length - 5} more
                        </span>
                      ) : null}
                    </div>
                  ) : null}

                  {exp.highlights.length > 0 ? (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}

                  {exp.projectIds?.length ? (
                    <div className="mt-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Projects
                      </p>
                      <ul className="mt-1.5 space-y-1 text-sm">
                        {exp.projectIds.map((projectId) => {
                          const project = getProjectById(projectId)
                          if (!project) return null
                          return (
                            <li key={projectId}>
                              <Link
                                href={`/projects/${projectId}`}
                                className="inline-flex items-center gap-0.5 font-medium text-orange underline-offset-4 transition-colors hover:text-foreground hover:underline"
                              >
                                {project.title}
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ) : null}
                </div>
                <div className="shrink-0 text-right">
                  {exp.companyHref ? (
                    <Link
                      href={exp.companyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-end gap-1.5 text-sm text-foreground transition-colors hover:text-orange"
                    >
                      {icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={icon} alt="" className="h-4 w-4 shrink-0 rounded-sm" />
                      ) : null}
                      {exp.company}
                    </Link>
                  ) : (
                    <p className="text-sm text-foreground">{exp.company}</p>
                  )}
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {exp.startDate} – {exp.endDate} · {exp.location}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
