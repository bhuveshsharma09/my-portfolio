import Link from "next/link"
import { ArrowUpRight, Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getProjectById } from "@/data/projects"
import { getTestimonialById } from "@/data/testimonials"
import { InitialsAvatar } from "@/components/initials-avatar"

interface Organization {
  name: string
  icon: string
  href: string
  role: string
  period: string
  intro: string
  projectIds?: string[]
  linkedinEmbed?: { url: string; height: number }
  testimonialIds?: string[]
}

const organizations: Organization[] = [
  {
    name: "Waystone",
    icon: "/icons/waystone.png",
    href: "https://www.waystone.com/",
    role: "AI Engineer Intern",
    period: "Jun 2026 – Jul 2026",
    intro:
      "A global compliance and governance firm. I built internal automation end-to-end on Microsoft Power Platform — a consultant time-tracking system with a management dashboard, and an AI-powered pipeline that automates part of the quarterly compliance report.",
    projectIds: ["waystone-time-utilization", "waystone-report-automation"],
    linkedinEmbed: {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7483692160689532928?collapsed=1",
      height: 400,
    },
  },
  {
    name: "Tosba Technologies",
    icon: "/icons/tosba.jpg",
    href: "https://tosba.tech/",
    role: "AI Engineer Intern",
    period: "May 2026 – Jun 2026",
    intro:
      "An early-stage Singapore startup. Working directly with the founder, I designed and developed BizAgento — a self-hosted, low-code workflow automation platform with local LLM agent steps, built for regulated businesses that can't send data to cloud tools.",
    projectIds: ["bizagento"],
    linkedinEmbed: {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7358121198624432128?collapsed=1",
      height: 264,
    },
  },
  {
    name: "Oracle",
    icon: "/icons/oracle.png",
    href: "https://www.oracle.com/",
    role: "Software Engineer",
    period: "Oct 2022 – Apr 2026",
    intro:
      "3.5 years on Oracle's Java Management Service (v6.0–v11): platform quality engineering across six releases, plus four self-initiated AI tools built on OCI — a RAG test-spec generator, a sensitive-data redaction system, a LiveLabs tutorial generator, and an agentic UI test navigator.",
    projectIds: ["jms", "jms-ai-toolkit", "data-redaction", "jms-livelabs-generator", "agentic-ui-navigator"],
    testimonialIds: ["test-spec-generator", "sensitive-data-redaction"],
  },
  {
    name: "Exicom",
    icon: "/icons/exicom.png",
    href: "https://www.exicom.com/",
    role: "Validation Engineer",
    period: "Jul 2016 – Nov 2019",
    intro:
      "An EV charging and power systems company in India, where my engineering career started. I developed automated test setups and Python scripts for validating electronic devices and EV chargers, and improved production processes with data-driven root cause analysis.",
  },
]

export function OrganizationsSection() {
  return (
    <section aria-label="Organizations I have worked at" className="px-6 py-10 md:py-14">
      <div className="mx-auto w-full max-w-none">
        <SectionHeading
          title="Where I've worked."
          subtitle="The organizations behind the work — and what colleagues there said about it."
          className="mb-6"
        />

        <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
          {organizations.map((org) => (
            <div
              key={org.name}
              className="flex flex-col gap-2 py-5 md:flex-row md:items-start md:justify-between md:gap-4"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={org.icon} alt="" className="h-5 w-5 shrink-0 rounded-sm" />
                  <Link
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-foreground transition-colors hover:text-orange"
                  >
                    {org.name}
                  </Link>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{org.role}</p>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{org.intro}</p>

                {org.projectIds?.length ? (
                  <div className="mt-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Projects
                    </p>
                    <ul className="mt-1.5 space-y-1 text-sm">
                      {org.projectIds.map((projectId) => {
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

              <div className="shrink-0 md:w-[380px]">
                <p className="text-xs text-muted-foreground md:text-right">{org.period}</p>
                {org.linkedinEmbed ? (
                  <iframe
                    src={org.linkedinEmbed.url}
                    height={org.linkedinEmbed.height}
                    className="mt-3 w-full max-w-[504px] rounded-xl border border-neutral-200"
                    title={`LinkedIn post about work at ${org.name}`}
                    allowFullScreen
                  />
                ) : null}
                {org.testimonialIds?.length ? (
                  <div className="mt-3">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-right">
                      What colleagues said
                    </p>
                    <Carousel className="w-full">
                      <CarouselContent>
                        {org.testimonialIds
                          .map((id) => getTestimonialById(id))
                          .filter((t): t is NonNullable<typeof t> => Boolean(t))
                          .map((t) => (
                            <CarouselItem key={t.id}>
                              <figure className="rounded-xl border border-neutral-200 px-10 py-4">
                                <div className="flex items-center gap-2.5">
                                  <InitialsAvatar name={t.name} className="h-8 w-8 text-xs" />
                                  <div className="min-w-0">
                                    <Link
                                      href={t.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block truncate text-sm font-semibold text-foreground transition-colors hover:text-orange"
                                    >
                                      {t.name}
                                    </Link>
                                    <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                                  </div>
                                </div>
                                <Quote className="mt-3 h-4 w-4 text-orange/60" aria-hidden />
                                <blockquote className="mt-1.5 text-xs italic leading-5 text-muted-foreground">
                                  &ldquo;{t.quote}&rdquo;
                                </blockquote>
                                <figcaption className="mt-3 flex items-center justify-between gap-2">
                                  <span className="text-[10px] text-muted-foreground">via {t.source}</span>
                                  <span className="shrink-0 whitespace-nowrap rounded-full bg-orange/10 px-2.5 py-1 text-xs font-semibold text-orange">
                                    {t.metric}
                                  </span>
                                </figcaption>
                              </figure>
                            </CarouselItem>
                          ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
