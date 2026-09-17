import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { getProjectById } from "@/data/projects"
import { DocFigure } from "@/components/projects/doc-figure"
import { ManualProcessFlow, AutomatedProcessFlow, ReportArchitectureFlow } from "@/components/projects/report-flow-diagrams"

const project = getProjectById("waystone-report-automation")!

export const metadata: Metadata = {
  title: `${project.title} | Bhuvesh Kumar`,
  description: project.description,
}

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "before-after", label: "Before & after" },
  { id: "contribution", label: "My contribution" },
  { id: "system-design", label: "System design" },
  { id: "challenges", label: "Challenges" },
  { id: "impact", label: "Impact" },
  { id: "evidence", label: "Evidence" },
]

const HERO_TAGS = ["Power Automate", "AI Builder · GPT-4.1 mini", "Exchange KQL", "SharePoint Lists", "Power Apps"]

const IMPACT_ITEMS = [
  { value: "300–500", label: "Emails processed per client per quarter" },
  { value: "Hours → minutes", label: "Section 6 preparation plus a short review" },
  { value: "Human-reviewed", label: "Nothing reaches the report without approval" },
  { value: "Operational after handoff", label: "Rebound to a teammate's account" },
]

const CONTRIBUTION_ITEMS = [
  "Interviewed the manager and consultants to map the reporting workflow and identify the highest-effort section.",
  "Designed the retrieval, AI extraction, staging, review and document-generation architecture.",
  "Built both Power Automate flows and the AI Builder structured-output prompt.",
  "Built the Power Apps review step and integrated approved rows with the Word template.",
  "Validated the generated output, resolved portability issues and documented the handoff.",
]

const DESIGN_DECISIONS = [
  {
    heading: "1. Deterministic retrieval",
    copy: "Exchange KQL queries the mailbox by client domain and quarter. Retrieval coverage is reproducible and auditable from the query rather than dependent on whether a model noticed every email.",
    supporting: "Client domains are more reliable than subject-line keywords or individual email addresses.",
  },
  {
    heading: "2. Bounded AI judgment",
    copy: "Emails are grouped by conversationId so each thread is assessed once. GPT-4.1 mini receives the first and last messages of one thread and returns structured JSON containing a description, open follow-up and materiality score.",
    supporting: "Processing one bounded conversation at a time reduces long-context degradation and keeps the prompt within platform limits.",
  },
  {
    heading: "3. Human-controlled generation",
    copy: "Model output is written to a SharePoint staging list instead of directly into the report. A consultant reviews and edits every row in Power Apps before a second flow writes approved content into the Word template.",
    supporting: "Nothing reaches the final report without human approval.",
  },
]

const IMPLEMENTATION_STEPS = [
  "Query Exchange with KQL using the client domain and quarter.",
  "Group results by conversationId and convert the first and last messages from HTML to text.",
  "Extract structured JSON per thread, rank matters and write staged rows to SharePoint.",
  "Review in Power Apps and generate the Word section from approved rows.",
]

const CHALLENGES = [
  {
    heading: "The silent 255-character truncation bug",
    problem:
      "The Outlook connector's bodyPreview field silently truncates content at 255 characters. The model could not see the latest message state and incorrectly classified every follow-up as closed.",
    decision:
      "Convert the complete first and last messages from HTML to text, apply explicit 1200/800-character caps and guard substring operations with min(length, cap).",
    result: "The model evaluates actual message content instead of a truncated preview.",
  },
  {
    heading: "Making the flow portable",
    problem:
      "UI-generated folder references were encoded as mailbox-specific IDs, causing the flow to fail when handed to another user.",
    decision: "Replace mailbox-bound IDs with well-known folder names and document the connector rebind process.",
    result: "The flow was successfully rebound and continued running under a teammate's account.",
  },
  {
    heading: "Responsible mailbox access",
    problem: "Processing a colleague's mailbox introduced permissions and trust considerations in addition to the technical work.",
    decision: "Restrict retrieval to one client domain and one quarter, make the active scope visible and plan migration to a shared mailbox.",
    result: "The system limits the data processed by each run and preserves a clear path to more appropriate production ownership.",
  },
]

const RESULTS = [
  {
    value: "Hours → minutes",
    label: "Section 6 preparation per client",
    explanation: "A flow run plus a short consultant review replaced a multi-hour manual mailbox exercise.",
  },
  {
    value: "Validated against ground truth",
    label: "Consultant-written report and manual Outlook search",
    explanation:
      "The generated section was compared with the consultant's report for the same quarter, while thread counts were checked against an equivalent manual KQL search.",
  },
  {
    value: "Operational after handoff",
    label: "Successfully rebound to a teammate's account",
    explanation: "Mailbox portability fixes and the rebind process were documented before the internship ended.",
  },
]

function Section({
  eyebrow,
  title,
  id,
  children,
}: {
  eyebrow: string
  title: string
  id: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-neutral-200/80 pt-12 md:pt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  )
}

const prose = "text-[15px] leading-7 text-muted-foreground"

export default function WaystoneReportAutomationPage() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto w-full max-w-4xl">
        <div className="sticky top-16 z-40 -mx-6 border-b border-neutral-200/60 bg-background/95 px-6 py-3 backdrop-blur-sm md:top-0">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
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
            <span className="inline-flex items-center gap-1 rounded-full border border-green/20 bg-green/10 px-3 py-1 text-xs font-medium text-green">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Internal deployment
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.period}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{project.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{project.subtitle}</p>

          <nav aria-label="On this page" className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              On this page
            </span>
            {TOC.map((item, index) => (
              <span key={item.id} className="flex items-center gap-x-2.5">
                {index > 0 ? <span aria-hidden className="text-neutral-300">·</span> : null}
                <a
                  href={`#${item.id}`}
                  className="font-medium text-orange underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {item.label}
                </a>
              </span>
            ))}
          </nav>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[60%_1fr] md:items-start">
            <div>
              <p className={prose}>
                Automated the most time-consuming section of Waystone&rsquo;s quarterly compliance report by turning
                300&ndash;500 client emails into a ranked, human-reviewed Word report section. The pipeline reduced
                a multi-hour manual task to a minutes-long flow run plus a short review and remained operational
                after handoff.
              </p>

              <div className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">My role:</span> AI Engineer Intern · Designed and
                  built end-to-end
                </p>
                <p>
                  <span className="font-medium text-foreground">Users:</span> Compliance consultants preparing the
                  report and managers reviewing it
                </p>
                <p>
                  <span className="font-medium text-foreground">Environment:</span> Microsoft Power Platform ·
                  Corporate tenant
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {HERO_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-blue/8 px-2.5 py-1 text-xs font-medium text-blue"
                  >
                    {tag}
                  </span>
                ))}
                <span className="self-center text-xs font-medium text-muted-foreground">+1 more</span>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Impact summary
              </p>
              <div className="mt-4 space-y-4">
                {IMPACT_ITEMS.map((item) => (
                  <div key={item.label}>
                    <p className="text-lg font-semibold leading-tight text-orange">{item.value}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <Section eyebrow="THE WORKFLOW" title="From manual mailbox review to an auditable pipeline" id="before-after">
          <p className={prose}>
            Each quarter, a consultant had to identify material client discussions across hundreds of emails,
            describe what happened and record any open follow-up in Word. The new workflow makes retrieval
            reproducible, limits the model to bounded judgment tasks and keeps a consultant in control of the final
            report.
          </p>
          <div className="space-y-4">
            <ManualProcessFlow />
            <AutomatedProcessFlow />
          </div>
        </Section>

        <Section eyebrow="MY ROLE" title="What I owned" id="contribution">
          <ul className="divide-y divide-neutral-200/70 rounded-xl border border-neutral-200/80">
            {CONTRIBUTION_ITEMS.map((item) => (
              <li key={item} className={cn("px-4 py-3", prose)}>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="SYSTEM DESIGN" title="Classify with the LLM; compute with code" id="system-design">
          <p className={prose}>
            The system separates deterministic operations from model judgment. Retrieval, filtering, grouping,
            slotting and document assembly remain in code. GPT-4.1 mini is used only to extract and rank
            information from already-retrieved, bounded conversation threads.
          </p>

          <div className="space-y-6">
            {DESIGN_DECISIONS.map((decision) => (
              <div key={decision.heading}>
                <h3 className="text-base font-semibold text-foreground">{decision.heading}</h3>
                <p className={cn("mt-1.5", prose)}>{decision.copy}</p>
                <p className="mt-1.5 text-sm text-muted-foreground/80">{decision.supporting}</p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <h3 className="text-base font-semibold text-foreground">How the system runs</h3>
            <p className={cn("mt-1.5 mb-4", prose)}>
              Power Automate orchestrates every platform; AI Builder is invoked once per thread.
            </p>
            <ReportArchitectureFlow />
          </div>

          <details className="group rounded-xl border border-neutral-200/80 p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
              Technical implementation details
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <ol className={cn("mt-3 list-decimal space-y-2 pl-5", prose)}>
              {IMPLEMENTATION_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className={cn("mt-3", prose)}>
              The per-thread extraction loop runs with concurrency 10; message text is capped at 1200/800
              characters per message with a min(length, cap) guard; staging writes are purge-then-insert per client
              and quarter for idempotency; the Word section uses a repeating-section content control that grows to
              fit the quarter&rsquo;s matters.
            </p>
          </details>
        </Section>

        <Section eyebrow="UNDER THE HOOD" title="Key technical challenges" id="challenges">
          <div className="space-y-6">
            {CHALLENGES.map((item) => (
              <div key={item.heading}>
                <h3 className="text-base font-semibold text-foreground">{item.heading}</h3>
                <p className={cn("mt-1.5", prose)}>
                  <span className="font-medium text-foreground">Problem: </span>
                  {item.problem}
                </p>
                <p className={cn("mt-1.5", prose)}>
                  <span className="font-medium text-foreground">Decision: </span>
                  {item.decision}
                </p>
                <p className={cn("mt-1.5", prose)}>
                  <span className="font-medium text-foreground">Result: </span>
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="RESULTS & IMPACT" title="What changed" id="impact">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {RESULTS.map((result) => (
              <div key={result.label} className="rounded-xl border border-neutral-200/80 p-4">
                <p className="text-lg font-semibold leading-tight text-orange">{result.value}</p>
                <p className="mt-1 text-sm font-medium text-foreground">{result.label}</p>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{result.explanation}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="EVIDENCE" title="Sample generated output" id="evidence">
          <p className={prose}>
            This was a proprietary internal system running inside the corporate tenant, so there is no public
            repository or live demo. The example below uses fully synthetic client data.
          </p>
          <div className="max-w-xl">
            <DocFigure
              visual={{
                title: "Sample Section 6 output",
                caption:
                  "Sample Section 6 output after AI-assisted extraction, consultant review and approval. All displayed client data is synthetic.",
                src: "/projects/waystone-report-automation/generated-report-sanitized.png",
                alt: "Synthetic example of an AI-generated quarterly compliance report section",
              }}
            />
          </div>
        </Section>

        <Section eyebrow="WHY IT MATTERS" title="The bigger picture" id="takeaway">
          <p className={prose}>
            Trustworthy AI reporting comes from deterministic retrieval, bounded model responsibilities and
            mandatory human approval&mdash;not from sending an entire mailbox to one prompt. This design makes
            coverage reproducible, model output reviewable and every final report row traceable to a retrieved
            conversation.
          </p>
          <h3 className="text-base font-semibold text-foreground">What I would build next</h3>
          <p className={prose}>
            Extend the same retrieval, review and generation pattern to additional report sections and migrate
            production access to a shared mailbox.
          </p>
        </Section>
      </div>
    </section>
  )
}
