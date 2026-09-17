import type { Metadata } from "next"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { additionalExposure, skillCategories, type SkillCategory } from "@/data/experience"

export const metadata: Metadata = {
  title: "Skills | Bhuvesh Kumar",
  description:
    "Capabilities in RAG pipelines, agentic workflows, explainable AI, enterprise engineering and automation, with the projects that back them.",
}

const CORE_STACK = [
  "Python",
  "Java",
  "OCI Generative AI",
  "RAG and Agentic Workflows",
  "LangChain4j",
  "React / Next.js",
  "Helidon SE / Spring Boot",
  "Microsoft Power Platform",
]

interface Evidence {
  label: string
  href: string
  ariaLabel?: string
}

interface Capability {
  title: string
  description: string
  technologies: string[]
  evidence: Evidence[]
}

const project = (label: string, id: string): Evidence => ({
  label,
  href: `/projects/${id}`,
  ariaLabel: `View ${label} case study`,
})

const CAPABILITIES: Capability[] = [
  {
    title: "Agentic AI and RAG Systems",
    description:
      "Design multi-stage AI workflows that retrieve enterprise knowledge, preserve source traceability and keep people involved in review and approval.",
    technologies: ["OCI Generative AI", "RAG", "LangChain4j", "Vector search", "Ollama", "MCP", "Java"],
    evidence: [
      project("JMS Test Specification Generator", "jms-ai-toolkit"),
      project("JMS LiveLabs Generator", "jms-livelabs-generator"),
      project("BizAgento", "bizagento"),
    ],
  },
  {
    title: "Explainable and Responsible AI",
    description:
      "Build interfaces and evaluation workflows that make model predictions and AI-generated outputs easier to inspect, question and validate.",
    technologies: [
      "SHAP",
      "Surrogate models",
      "Counterfactuals",
      "Knowledge graphs",
      "Human-in-the-loop evaluation",
      "LLM-as-judge",
      "RAGAS",
    ],
    evidence: [
      project("PropertyLens", "hdb-resale-xai"),
      project("Explainable AI Dashboard", "explainable-ai-web-app"),
      project("Sensitive Data Redaction", "data-redaction"),
      project("JMS Test Specification Generator", "jms-ai-toolkit"),
    ],
  },
  {
    title: "Enterprise Application Engineering",
    description:
      "Turn complex internal workflows into maintainable services and APIs across Java, Python and TypeScript environments.",
    technologies: ["Java", "Helidon SE", "Spring Boot", "Python", "FastAPI", "Node.js", "React / Next.js"],
    evidence: [
      project("Java Management Service", "jms"),
      project("BizAgento", "bizagento"),
      project("Agentic UI Test Navigator", "agentic-ui-navigator"),
      project("PropertyLens", "hdb-resale-xai"),
    ],
  },
  {
    title: "Automation and Decision Support",
    description:
      "Translate manual business processes into governed data-entry, reporting and document-automation systems.",
    technologies: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "Power Query", "DAX"],
    evidence: [
      project("Time Utilization Automation", "waystone-time-utilization"),
      project("Quarterly Compliance Report Automation", "waystone-report-automation"),
    ],
  },
  {
    title: "Quality Engineering and Test Automation",
    description:
      "Build repeatable validation workflows, automated UI testing and quality controls for enterprise software and hardware systems.",
    technologies: ["Selenium WebDriver", "Test automation", "Java", "Python", "CI/CD", "Jenkins"],
    evidence: [
      project("Java Management Service", "jms"),
      project("Agentic UI Test Navigator", "agentic-ui-navigator"),
      {
        label: "Validation Engineer at Exicom",
        href: "/experience#exicom-heading",
        ariaLabel: "View the Validation Engineer role at Exicom on the Experience page",
      },
    ],
  },
]

const FOCUS =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
const tag =
  "inline-flex items-center rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs font-medium text-neutral-700"
const label = "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"

function CategoryRows({ categories, secondary = false }: { categories: SkillCategory[]; secondary?: boolean }) {
  return (
    <dl className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
      {categories.map((category) => (
        <div key={category.title} className="flex flex-col gap-2 py-4 md:flex-row md:items-baseline md:gap-6">
          <dt className={cn("shrink-0 text-sm font-medium md:w-60", secondary ? "text-muted-foreground" : "text-foreground")}>
            {category.title}
          </dt>
          <dd className="min-w-0">
            {secondary ? (
              <p className="text-sm leading-6 text-muted-foreground">{category.tags.join(" · ")}</p>
            ) : (
              <ul className="flex flex-wrap items-center gap-1.5">
                {category.tags.map((item) => (
                  <li key={item} className={tag}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default function SkillsPage() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-none">
        <header className="mb-10 flex flex-col gap-3">
          <p className="text-label text-muted-foreground">Skills</p>
          <h1 className="text-h2">Capabilities backed by shipped work.</h1>
          <p className="text-body max-w-2xl text-muted-foreground">
            AI engineer with experience building RAG pipelines, agentic workflows, explainable-AI interfaces and
            enterprise automation across Oracle, regulated services and early-stage product teams.
          </p>
        </header>

        <section aria-labelledby="core-stack-heading" className="border-y border-neutral-200/80 py-5">
          <h2 id="core-stack-heading" className={label}>
            Core stack
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
            {CORE_STACK.map((item) => (
              <li
                key={item}
                className="inline-flex items-center rounded-md border border-neutral-300 px-2.5 py-1 text-sm font-semibold text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="capabilities-heading" className="mt-14">
          <h2 id="capabilities-heading" className="text-2xl font-semibold tracking-tight text-foreground">
            Core capabilities
          </h2>

          <div className="mt-6 divide-y divide-neutral-200/80 border-y border-neutral-200/80">
            {CAPABILITIES.map((capability, index) => {
              const headingId = `capability-${index + 1}`
              return (
                <article
                  key={capability.title}
                  aria-labelledby={headingId}
                  className="grid grid-cols-1 gap-x-12 gap-y-5 py-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
                >
                  <div className="flex gap-4">
                    <span aria-hidden className="pt-0.5 font-mono text-sm font-semibold text-orange">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 id={headingId} className="text-lg font-bold tracking-tight text-foreground">
                        {capability.title}
                      </h3>
                      <p className="mt-2 max-w-[60ch] text-[15px] leading-7 text-muted-foreground">
                        {capability.description}
                      </p>
                    </div>
                  </div>

                  <div className="min-w-0 space-y-4 pl-9 lg:pl-0">
                    <div>
                      <h4 className={label}>Key technologies</h4>
                      <ul className="mt-2 flex flex-wrap items-center gap-1.5">
                        {capability.technologies.map((item) => (
                          <li key={item} className={tag}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className={label}>Used in</h4>
                      <ul className="mt-2 space-y-1.5 text-sm">
                        {capability.evidence.map((item) => (
                          <li key={item.href} className="flex gap-1.5">
                            <span aria-hidden className="text-orange">
                              →
                            </span>
                            <Link
                              href={item.href}
                              aria-label={item.ariaLabel}
                              className={cn(
                                "font-medium text-orange underline-offset-4 transition-colors hover:text-foreground hover:underline motion-reduce:transition-none",
                                FOCUS,
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section aria-labelledby="toolbox-heading" className="mt-14">
          <h2 id="toolbox-heading" className="text-2xl font-semibold tracking-tight text-foreground">
            Technical toolbox
          </h2>
          <p className="mt-2 max-w-[75ch] text-[15px] leading-7 text-muted-foreground">
            Additional languages, frameworks and platforms used across professional, project and academic work.
          </p>
          <div className="mt-6">
            <CategoryRows categories={skillCategories} />
          </div>
        </section>

        <section aria-labelledby="exposure-heading" className="mt-12">
          <h2 id="exposure-heading" className="text-base font-semibold text-foreground">
            Additional exposure
          </h2>
          <p className="mt-1 max-w-[75ch] text-sm leading-6 text-muted-foreground">
            Covered in coursework, certifications or a small part of a project. Not yet used in depth professionally.
          </p>
          <div className="mt-4">
            <CategoryRows categories={additionalExposure} secondary />
          </div>
        </section>
      </div>
    </section>
  )
}
