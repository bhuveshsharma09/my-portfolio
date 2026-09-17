import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { certifications, education, type Certification } from "@/data/experience"

export const metadata: Metadata = {
  title: "Education | Bhuvesh Kumar",
  description:
    "A multidisciplinary foundation in AI systems, software engineering, data science and automation.",
}

const FOCUS =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

const primaryCertifications = certifications.filter((cert) => cert.group !== "additional")
const additionalCertifications = certifications.filter((cert) => cert.group === "additional")

function CertificationRow({ cert, secondary = false }: { cert: Certification; secondary?: boolean }) {
  const meta = [cert.issuer, cert.note, cert.issued ? `Issued ${cert.issued}` : null].filter(Boolean).join(" · ")
  return (
    <li className="flex flex-col gap-x-6 gap-y-1 py-3 sm:flex-row sm:items-baseline sm:justify-between">
      <div className="min-w-0">
        <p className={cn("text-sm font-medium", secondary ? "text-muted-foreground" : "text-foreground")}>
          {cert.name}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {meta}
          {cert.credentialId ? ` · Credential ID ${cert.credentialId}` : null}
        </p>
      </div>
      {cert.credentialUrl ? (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex shrink-0 items-center gap-0.5 text-sm font-medium text-orange underline-offset-4 transition-colors hover:text-foreground hover:underline",
            FOCUS,
          )}
        >
          View credential
          <span className="sr-only">
            : {cert.name} (opens in a new tab)
          </span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      ) : null}
    </li>
  )
}

export default function EducationPage() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-none">
        <header className="mb-10 flex flex-col gap-3">
          <h1 className="text-h2">Education</h1>
          <p className="text-body max-w-2xl text-muted-foreground">
            A multidisciplinary foundation in AI systems, software engineering, data science and automation.
          </p>
        </header>

        <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
          {education.map((edu) => {
            const headingId = `${edu.id}-heading`
            const statusLine = [edu.studyMode, edu.status === "In Progress" ? "In progress" : null]
              .filter(Boolean)
              .join(" · ")
            const achievement = [edu.gpa ? `GPA: ${edu.gpa}` : null, edu.achievement].filter(Boolean).join(" · ")
            return (
              <article key={edu.id} aria-labelledby={headingId} className="py-8">
                <div className="flex flex-col gap-x-8 gap-y-2 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <h2 id={headingId} className="text-xl font-bold tracking-tight text-foreground">
                      {edu.institutionHref ? (
                        <Link
                          href={edu.institutionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn("inline-flex items-center gap-2 transition-colors hover:text-orange", FOCUS)}
                        >
                          {edu.institutionIcon ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={edu.institutionIcon} alt="" className="h-5 w-5 shrink-0 rounded-sm" />
                          ) : null}
                          <span>
                            {edu.institution}
                            <span className="sr-only"> (opens in a new tab)</span>
                          </span>
                        </Link>
                      ) : (
                        edu.institution
                      )}
                    </h2>
                    <p className="mt-1 text-base font-semibold text-foreground">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-muted-foreground md:shrink-0 md:pt-1 md:text-right">
                    {statusLine ? (
                      <p className={edu.status === "In Progress" ? "font-medium text-orange" : undefined}>
                        {statusLine}
                      </p>
                    ) : null}
                    <p className={statusLine ? "mt-0.5" : undefined}>
                      {edu.period} · {edu.location}
                    </p>
                  </div>
                </div>

                {edu.description ? (
                  <p className="mt-4 max-w-[75ch] text-[15px] leading-7 text-muted-foreground">{edu.description}</p>
                ) : null}

                {achievement ? (
                  <p className="mt-3 max-w-[75ch] border-l-2 border-orange/60 pl-3 text-sm font-medium leading-6 text-foreground">
                    {achievement}
                  </p>
                ) : null}

                {edu.subjects.length > 0 ? (
                  <div className="mt-4">
                    <h3 className="font-mono text-[10px] font-normal uppercase tracking-[0.18em] text-muted-foreground">
                      Selected focus areas
                    </h3>
                    <ul className="mt-2 flex flex-wrap items-center gap-1.5">
                      {edu.subjects.slice(0, 6).map((subject) => (
                        <li
                          key={subject}
                          className="inline-flex items-center rounded-md bg-blue/8 px-2 py-0.5 text-[11px] font-medium text-blue"
                        >
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>

        <section aria-labelledby="certifications-heading" className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">Certifications</p>
          <h2 id="certifications-heading" className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
            Selected certifications
          </h2>
          <p className="mt-2 max-w-[75ch] text-[15px] leading-7 text-muted-foreground">
            Recent credentials supporting my focus on intelligent systems, RAG, LLM engineering and explainable AI.
          </p>

          <ul className="mt-6 divide-y divide-neutral-200/80 border-y border-neutral-200/80">
            {primaryCertifications.map((cert) => (
              <CertificationRow key={cert.id} cert={cert} />
            ))}
          </ul>

          {additionalCertifications.length > 0 ? (
            <details className="group mt-6">
              <summary
                className={cn(
                  "inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden",
                  FOCUS,
                )}
              >
                <span aria-hidden className="transition-transform group-open:rotate-90">
                  ›
                </span>
                Additional certifications ({additionalCertifications.length})
              </summary>
              <ul className="mt-3 divide-y divide-neutral-200/60 border-y border-neutral-200/60">
                {additionalCertifications.map((cert) => (
                  <CertificationRow key={cert.id} cert={cert} secondary />
                ))}
              </ul>
            </details>
          ) : null}
        </section>
      </div>
    </section>
  )
}
