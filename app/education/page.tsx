import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { certifications, education } from "@/data/experience"

const institutions: Record<string, { icon: string; href: string }> = {
  "NUS-ISS": { icon: "/icons/nus-iss.svg", href: "https://www.iss.nus.edu.sg/" },
  "IIT Roorkee": { icon: "/icons/iit-roorkee.png", href: "https://www.iitr.ac.in/" },
  "Coventry University": { icon: "/icons/coventry.png", href: "https://www.coventry.ac.uk/" },
  "Indo Swiss Training Centre": { icon: "/icons/istc.png", href: "https://istc.csio.res.in/" },
}

export const metadata: Metadata = {
  title: "Education | Bhuvesh Kumar",
  description: "Education and certifications.",
}

export default function EducationPage() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-none">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Education"
            title="Where I learned what I use."
          />
        </div>

        <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
          {education.map((edu) => (
            <div key={edu.id} className="flex items-center justify-between gap-4 py-4">
              <div className="min-w-0">
                <p className="font-bold text-foreground">
                  {edu.degree}
                  {edu.status === "In Progress" ? (
                    <span className="ml-2 text-sm font-normal text-orange">In progress</span>
                  ) : null}
                </p>
                {edu.description ? (
                  <p className="mt-0.5 truncate text-sm text-muted-foreground">{edu.description}</p>
                ) : null}
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  {edu.achievement ? (
                    <span className="inline-flex items-center rounded-md bg-orange/10 px-2 py-0.5 text-[11px] font-medium text-orange">
                      {edu.achievement}
                    </span>
                  ) : null}
                  {edu.gpa ? (
                    <span className="inline-flex items-center rounded-md bg-orange/10 px-2 py-0.5 text-[11px] font-medium text-orange">
                      GPA {edu.gpa}
                    </span>
                  ) : null}
                  {edu.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="inline-flex items-center rounded-md bg-blue/8 px-2 py-0.5 text-[11px] font-medium text-blue"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 text-right">
                {institutions[edu.institution] ? (
                  <Link
                    href={institutions[edu.institution].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-end gap-1.5 text-sm text-foreground transition-colors hover:text-orange"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={institutions[edu.institution].icon}
                      alt=""
                      className="h-4 w-4 shrink-0 rounded-sm"
                    />
                    {edu.institution}
                  </Link>
                ) : (
                  <p className="text-sm text-foreground">{edu.institution}</p>
                )}
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {edu.period} · {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
              Certifications
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              Certified along the way.
            </h2>
          </div>
          <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-center justify-between gap-4 py-3">
                <p className="min-w-0 truncate text-sm font-medium text-foreground">{cert.name}</p>
                <p className="shrink-0 text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
