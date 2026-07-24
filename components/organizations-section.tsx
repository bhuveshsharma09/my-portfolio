import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getProjectById } from "@/data/projects"

interface OrgTestimonial {
  image: string
  alt: string
  caption: string
}

interface Organization {
  name: string
  icon: string
  href: string
  role: string
  period: string
  intro: string
  projectIds?: string[]
  linkedinEmbed?: { url: string; height: number }
  testimonials?: OrgTestimonial[]
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
    testimonials: [
      {
        image: "/projects/jms-test-spec-generator/colleague-testimonial-full.png",
        alt: "WhatsApp message from a JMS quality engineer about the Test Specification Generator",
        caption:
          "A JMS quality engineer on the Test Specification Generator: a 55–60% cut in the most time-consuming part of spec writing.",
      },
      {
        image: "/projects/redact-sensetive-data/colleague-testimonial.png",
        alt: "Message from a colleague about the sensitive data redaction tool",
        caption:
          "A colleague on the redaction tool: roughly 80% less time than manual processing, with better consistency and less human error.",
      },
    ],
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
                {org.testimonials?.length ? (
                  <div className="mt-3">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-right">
                      What colleagues said
                    </p>
                    <Carousel className="w-full">
                      <CarouselContent>
                        {org.testimonials.map((t) => (
                          <CarouselItem key={t.image}>
                            <figure>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={t.image}
                                alt={t.alt}
                                className="w-full rounded-xl border border-neutral-200"
                              />
                              <figcaption className="mt-2 text-xs italic leading-5 text-muted-foreground">
                                {t.caption}
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
