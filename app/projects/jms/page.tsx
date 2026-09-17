import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"
import { getProjectById } from "@/data/projects"

const project = getProjectById("jms")!
const PRODUCT_URL = "https://www.oracle.com/asean/java/jms/"

export const metadata: Metadata = {
  title: `${project.title} | Bhuvesh Kumar`,
  description: project.description,
}

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "scope", label: "Scope" },
  { id: "what-jms-is", label: "What JMS is" },
  { id: "my-role", label: "My role" },
  { id: "features", label: "Feature contributions" },
  { id: "how-i-contributed", label: "How I contributed" },
  { id: "release-validation", label: "Release validation" },
  { id: "proofs-of-concept", label: "Proofs of concept" },
  { id: "challenges", label: "Challenges" },
  { id: "related-projects", label: "Related projects" },
  { id: "results", label: "Results" },
]

const SCOPE = [
  { value: "3.5 years", copy: "My primary engineering role at Oracle." },
  { value: "Six release versions", copy: "Contributed across JMS v6.0 through v11." },
  { value: "Development + quality engineering", copy: "Worked on selected features from planning through validation." },
  { value: "Technical PoCs", copy: "Helped evaluate new ideas through planning and implementation." },
]

const USERS = [
  "Enterprise administrators managing Java estates",
  "Developers analysing Java applications and migration effort",
  "Operations and security teams monitoring Java versions and vulnerabilities",
  "Internal JMS development, SRE, quality engineering, and documentation teams",
]

const RESPONSIBILITIES = [
  "Feature planning and technical discussions",
  "Selected feature development",
  "Test design and automation",
  "API and UI validation",
  "Defect investigation",
  "Regression testing",
  "Release validation",
  "Proof-of-concept development",
  "Cross-functional collaboration",
]

const FEATURES = [
  { area: "Dynamic and static Java library scanning", tag: "Static code analysis" },
  { area: "Vulnerability scanning and risk scoring", tag: "Vulnerability scanning" },
  { area: "Automatic Java updates", tag: "Lifecycle automation" },
  { area: "JDK Flight Recording analysis", tag: "JDK Flight Recording" },
  { area: "Java migration analysis", tag: "Migration analysis" },
]

const LIFECYCLE = [
  "Feature requirements",
  "Design and planning",
  "Development or proof of concept",
  "Test strategy",
  "Automated and exploratory validation",
  "Defect investigation",
  "Regression coverage",
  "Release validation",
]

const CHALLENGES = [
  {
    heading: "Understanding behaviour beyond the console",
    challenge:
      "JMS capabilities span APIs, background processing, agents, cloud resources, and user-facing workflows. UI-only testing would not cover the complete behaviour.",
    contribution:
      "I studied feature specifications and service interactions before designing coverage, then combined API, integration, and user-flow validation where applicable.",
  },
  {
    heading: "Maintaining coverage across releases",
    challenge: "New features and changing service behaviour could make older test coverage difficult to maintain.",
    contribution: "I developed reusable test patterns and regression coverage that could evolve across release versions.",
  },
  {
    heading: "Moving ideas from planning to proof of concept",
    challenge: "New engineering ideas needed evidence before the team could decide whether to invest further.",
    contribution:
      "I helped define the problem, plan the proposed approach, build proofs of concept, and present the results for technical feedback.",
  },
]

const RELATED = [
  {
    title: "JMS Test Specification Generator",
    href: "/projects/jms-ai-toolkit",
    status: "Internal enterprise implementation",
    copy: "A staged RAG and human-review workflow for generating traceable test specifications.",
  },
  {
    title: "Sensitive Data Redaction for LiveLabs Images",
    href: "/projects/data-redaction",
    status: "Internal enterprise application",
    copy: "A multi-agent, human-reviewed workflow for detecting and redacting sensitive information from tutorial screenshots.",
  },
  {
    title: "Agentic UI Test Navigator",
    href: "/projects/agentic-ui-navigator",
    status: "Research PoC",
    copy: "A Java, LangChain4j and Selenium WebDriver agent for executing natural-language JMS Console workflows.",
  },
]

const RESULTS = [
  { value: "3.5 years on Oracle JMS", copy: "Java Management Service was my primary engineering focus at Oracle." },
  { value: "Six release versions", copy: "Contributed to selected feature development and validation across JMS v6.0 through v11." },
  { value: "Development and quality engineering", copy: "Worked across planning, implementation, test design, automation, defect investigation, and release validation." },
  { value: "Technical experimentation", copy: "Helped move new ideas from problem definition through proof of concept and engineering review." },
]

const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

function Section({ eyebrow, title, id, children }: { eyebrow: string; title: string; id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-neutral-200/80 pt-12 md:pt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  )
}

const prose = "text-[15px] leading-7 text-muted-foreground"
const h3 = "text-base font-semibold text-foreground"

export default function JmsPage() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto w-full max-w-4xl">
        <div className="sticky top-16 z-40 -mx-6 border-b border-neutral-200/60 bg-background/95 px-6 py-3 backdrop-blur-sm md:top-0">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>

        <header id="overview" className="scroll-mt-24 pt-10">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={project.organizationHref!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.organizationIcon} alt="" className="h-3.5 w-3.5 shrink-0 rounded-sm" />
              {project.organization}
            </Link>
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              <Briefcase className="h-3.5 w-3.5" />
              Core Oracle role
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.period}
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
              Software Engineer
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{project.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Feature development, quality engineering and technical experimentation across JMS v6.0–v11
          </p>

          <nav aria-label="On this page" className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">On this page</span>
            {TOC.map((item, index) => (
              <span key={item.id} className="flex items-center gap-x-2.5">
                {index > 0 ? <span aria-hidden className="text-neutral-300">·</span> : null}
                <a href={`#${item.id}`} className="font-medium text-orange underline-offset-4 transition-colors hover:text-foreground hover:underline">
                  {item.label}
                </a>
              </span>
            ))}
          </nav>

          <p className={cn("mt-8 max-w-3xl", prose)}>
            Over 3.5 years at Oracle, I contributed to the development and quality engineering of Java Management
            Service (JMS), an OCI service for managing Java runtimes and workloads across enterprise environments.
            Across releases v6.0 through v11, I worked on selected features from design and proof of concept through
            implementation, test planning, automation, and release validation. I also helped evaluate new product and
            engineering ideas through technical planning and proofs of concept.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-md bg-blue/8 px-2.5 py-1 text-xs font-medium text-blue">
                {tag}
              </span>
            ))}
          </div>

          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the official Oracle Java Management Service product page"
            className={cn(
              "mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-neutral-100",
              FOCUS
            )}
          >
            View Oracle JMS product page ↗
          </a>
        </header>

        <Section eyebrow="AT A GLANCE" title="Scope of the role" id="scope">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {SCOPE.map((item) => (
              <div key={item.value}>
                <dt className="text-base font-semibold text-foreground">{item.value}</dt>
                <dd className="mt-0.5 text-sm leading-6 text-muted-foreground">{item.copy}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section eyebrow="PRODUCT CONTEXT" title="What Oracle Java Management Service (JMS) is" id="what-jms-is">
          <p className={prose}>
            Java Management Service is an OCI service that helps organizations discover, monitor, secure, and manage
            Java runtimes and applications across enterprise environments. It provides Java inventory and usage
            visibility, vulnerability assessment, lifecycle automation, Java Flight Recording analysis, and migration
            analysis.
          </p>
          <p className={prose}>
            The product supports cloud, on-premises, and hybrid Java environments, which makes feature behaviour and
            release validation more complex than testing a single user interface.
          </p>
          <div>
            <h3 className={h3}>Who uses it</h3>
            <ul className={cn("mt-2 list-disc space-y-1 pl-5", prose)}>
              {USERS.map((user) => (
                <li key={user}>{user}</li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-muted-foreground">
            Product description based on Oracle&rsquo;s public product information.
          </p>
        </Section>

        <Section eyebrow="MY ROLE" title="My role" id="my-role">
          <p className={prose}>
            My work combined software development and quality engineering. I participated in feature discussions,
            studied product requirements and service behaviour, contributed to selected feature implementations,
            created test plans and automated coverage, investigated defects, and supported release validation. I also
            helped plan and build proofs of concept for new product and engineering ideas.
          </p>
          <ul className={cn("grid list-disc grid-cols-1 gap-x-8 gap-y-1 pl-5 sm:grid-cols-2", prose)}>
            {RESPONSIBILITIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={prose}>
            I collaborated with cross-functional and geographically distributed teams throughout each release cycle.
          </p>
        </Section>

        <Section eyebrow="FEATURE CONTRIBUTIONS" title="Feature areas I worked on" id="features">
          <p className={prose}>
            These are feature areas I contributed to, not areas I was solely responsible for. My involvement varied by
            feature and release.
          </p>
          <div className="overflow-x-auto rounded-xl border border-neutral-200/80" tabIndex={0} role="region" aria-label="Feature contributions table, scrollable on small screens">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200/80 bg-neutral-50">
                  <th scope="col" className="px-4 py-2 font-medium text-muted-foreground">Feature area</th>
                  <th scope="col" className="px-4 py-2 font-medium text-muted-foreground">My contribution</th>
                  <th scope="col" className="px-4 py-2 font-medium text-muted-foreground">Release scope</th>
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((feature) => (
                  <tr key={feature.area} className="border-b border-neutral-200/60 align-top last:border-0">
                    <th scope="row" className="px-4 py-3 font-semibold text-foreground">{feature.area}</th>
                    <td className="px-4 py-3 text-muted-foreground">
                      Contributed to development and/or validation: test planning, automated test implementation and
                      release validation
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">Within JMS v6.0–v11</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            Related areas: static code analysis, vulnerability scanning, JDK Flight Recording and microservices.
          </p>
        </Section>

        <Section eyebrow="DEVELOPMENT AND TESTING APPROACH" title="How I contributed" id="how-i-contributed">
          <p className={prose}>
            My contribution followed the feature lifecycle rather than beginning only after implementation. I joined
            planning and design discussions, learned the feature&rsquo;s intended behaviour and service interactions,
            contributed to implementation where required, designed test coverage, automated repeatable scenarios,
            investigated failures, and supported release validation.
          </p>
          <ol
            aria-label="Typical feature lifecycle"
            className="flex flex-wrap items-center gap-2"
          >
            {LIFECYCLE.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-center text-xs font-semibold text-blue-900">
                  {step}
                </span>
                {i < LIFECYCLE.length - 1 ? (
                  <span aria-hidden className="text-neutral-400">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="text-sm text-muted-foreground">
            This is the typical shape of the work. Not every feature followed every step. Day-to-day delivery ran on
            Agile sprints with Jira and Confluence.
          </p>
        </Section>

        <Section eyebrow="RELEASE WORK" title="Maintaining release confidence across an evolving cloud service" id="release-validation">
          <p className={prose}>
            I contributed across six JMS release versions, from v6.0 through v11. As the service evolved, test coverage
            and validation logic had to evolve with it while preserving established behaviour and API compatibility.
          </p>
          <ul className={cn("list-disc space-y-1 pl-5", prose)}>
            <li>Used canary validation and Grafana monitoring during staged release verification</li>
            <li>Contributed to rollout-validation workflows</li>
            <li>Ran API-compatibility and regression coverage as part of each release cycle</li>
          </ul>
          <p className={prose}>Staged validation helps identify unexpected behaviour before a broader rollout.</p>
        </Section>

        <Section eyebrow="EXPERIMENTATION" title="Planning and proofs of concept" id="proofs-of-concept">
          <p className={prose}>
            Alongside feature and release work, I helped explore new ideas through technical planning and proofs of
            concept. This involved identifying a team problem, defining a small testable scope, building an initial
            implementation, presenting the result, and incorporating engineering feedback.
          </p>
          <p className={prose}>Not every proof of concept was taken further; the aim was to give the team evidence for the decision.</p>
        </Section>

        <Section eyebrow="UNDER THE HOOD" title="Technical challenges" id="challenges">
          <div className="space-y-6">
            {CHALLENGES.map((item) => (
              <div key={item.heading}>
                <h3 className={h3}>{item.heading}</h3>
                <p className={cn("mt-1.5", prose)}>
                  <span className="font-medium text-foreground">The challenge: </span>
                  {item.challenge}
                </p>
                <p className={cn("mt-1.5", prose)}>
                  <span className="font-medium text-foreground">My contribution: </span>
                  {item.contribution}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="RELATED WORK" title="Related AI and automation projects" id="related-projects">
          <p className={prose}>
            Alongside my core role, I helped develop internal AI tools and research prototypes addressing
            quality-engineering and documentation workflows. Each has its own case study and its own status.
          </p>
          <ul className="divide-y divide-neutral-200/70 rounded-xl border border-neutral-200/80">
            {RELATED.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-label={`${item.title} case study, status: ${item.status}`}
                  className={cn("group flex items-start justify-between gap-4 px-4 py-4 transition-colors hover:bg-neutral-50", FOCUS)}
                >
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground group-hover:text-orange">{item.title}</span>
                    <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {item.status}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-muted-foreground">{item.copy}</span>
                  </span>
                  <ArrowRight aria-hidden className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-orange" />
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="RESULTS" title="Results and professional impact" id="results">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {RESULTS.map((item) => (
              <div key={item.value}>
                <dt className="text-base font-semibold text-foreground">{item.value}</dt>
                <dd className="mt-0.5 text-sm leading-6 text-muted-foreground">{item.copy}</dd>
              </div>
            ))}
          </dl>
          <div>
            <h3 className={h3}>Why it matters</h3>
            <p className={cn("mt-1.5", prose)}>
              This role taught me to approach software quality as an engineering problem: understand how a feature is
              designed, identify where it can fail, build repeatable validation, and use evidence to support a release
              decision. The same discipline shaped the AI and automation projects I later developed for the team.
            </p>
          </div>
          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the official Oracle Java Management Service product page"
            className={cn("inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-foreground underline underline-offset-4 hover:text-orange", FOCUS)}
          >
            View Oracle JMS product page
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Section>
      </div>
    </section>
  )
}
