import type { Metadata } from "next"
import { Fragment, type ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2, MessageSquareQuote } from "lucide-react"
import { cn } from "@/lib/utils"
import { getProjectById } from "@/data/projects"
import { getTestimonialById } from "@/data/testimonials"
import { DocFigure } from "@/components/projects/doc-figure"
import { InitialsAvatar } from "@/components/initials-avatar"
import { RedactionCompare } from "@/components/projects/redaction-compare"

const project = getProjectById("data-redaction")!
const testimonial = getTestimonialById("sensitive-data-redaction")!

const PAGE_TITLE = "Sensitive Data Redaction for LiveLabs Images"

export const metadata: Metadata = {
  title: `${PAGE_TITLE} | Bhuvesh Kumar`,
  description: project.description,
}

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "demo", label: "Demo" },
  { id: "problem", label: "Problem" },
  { id: "users", label: "Users" },
  { id: "contribution", label: "What I built" },
  { id: "workflow", label: "Workflow" },
  { id: "architecture", label: "Architecture" },
  { id: "human-review", label: "Human review" },
  { id: "challenges", label: "Challenges" },
  { id: "results", label: "Results" },
  { id: "testimonial", label: "Testimonial" },
]

const HERO_TAGS = ["Java", "Helidon SE", "OCI Generative AI", "OCI Object Storage", "Multi-agent Systems", "Human-in-the-Loop"]
const HERO_TAGS_MORE = project.techStack.filter((t) => !HERO_TAGS.includes(t)).length

const AT_A_GLANCE = [
  { value: "Reported ~80% time saving", label: "Reported by an internal user for multi-image work" },
  { value: "1 orchestrator + 4 specialist agents", label: "Vision, Security, Redaction and Quality" },
  { value: "Human-reviewed", label: "Every proposed image is reviewed before it is saved" },
]

const WORKFLOW_STEPS = [
  "The author uploads or places source screenshots in OCI Object Storage.",
  "The author logs into the web application.",
  "The author selects the relevant bucket and images.",
  "The Orchestrator Agent independently invokes the required specialist agents and receives their results. The specialist agents do not communicate directly with one another.",
  "A proposed redacted image is presented beside the original.",
  "The reviewer approves it or enters a natural-language correction.",
  "The system processes the requested edit and returns an updated result.",
  "The approved image is saved to OCI Object Storage.",
  "Review feedback is stored in OCI Autonomous Database.",
]

const SPECIALIST_AGENTS = [
  { name: "Vision Agent", copy: "Inspects the image and identifies text or visual regions requiring analysis." },
  { name: "Security Agent", copy: "Determines which detected information should be treated as sensitive in its interface and business context." },
  { name: "Redaction Agent", copy: "Applies the required masking or image modification." },
  { name: "Quality Agent", copy: "Reviews the processed result for missed sensitive regions and redaction quality before human review." },
]

const CHALLENGES = [
  {
    heading: "Context-dependent sensitive information",
    challenge:
      "OCI screenshots can contain values that are sensitive because of their surrounding context, even when they do not match a standard PII pattern.",
    response:
      "The workflow separates visual inspection from contextual security classification so the system can reason about what a detected value represents before redaction.",
  },
  {
    heading: "Coordinating multiple specialist agents",
    challenge:
      "Detection, security classification, image editing, and quality review require different capabilities and are difficult to manage as one opaque model call.",
    response:
      "An Orchestrator Agent coordinates four specialist agents with clearly separated responsibilities, making the workflow easier to inspect, refine, and troubleshoot.",
  },
  {
    heading: "Preserving human control",
    challenge: "Automated redaction can either miss sensitive content or hide information that should remain visible.",
    response:
      "The system presents every result for human review and allows the reviewer to request another edit through a natural-language instruction before approving the final image.",
  },
]

const RESULTS = [
  {
    value: "Reported ~80% time saving",
    copy: "An Oracle teammate reported approximately 80% less processing time when working with multiple images.",
  },
  {
    value: "Batch-oriented workflow",
    copy: "A manual image-by-image task became an integrated workflow spanning Object Storage, agent processing, review, correction, and final storage.",
  },
  {
    value: "Human-controlled output",
    copy: "Reviewers could inspect each proposed redaction, request corrections, and approve the final image.",
  },
]

const BEFORE_AFTER = [
  {
    before: "Approximately 50 images could take more than two hours",
    after: "Reported approximately 80% less processing time for multi-image work",
  },
  {
    before: "Each image inspected and edited manually",
    after: "Multi-agent processing handles the initial analysis and redaction",
  },
  {
    before: "Correction rounds handled separately",
    after: "Reviewers request corrections directly from the review screen",
  },
  {
    before: "Review knowledge was not captured in the workflow",
    after: "Feedback is stored in OCI Autonomous Database",
  },
]

function Section({ eyebrow, title, id, children }: { eyebrow: string; title: string; id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-neutral-200/80 pt-12 md:pt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  )
}

function FlowNode({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "agent" | "human" | "store" }) {
  const tones = {
    neutral: "border-neutral-200 bg-neutral-50 text-foreground",
    agent: "border-violet-200 bg-violet-50 text-violet-900",
    human: "border-orange/30 bg-orange/10 text-foreground",
    store: "border-blue-200 bg-blue-50 text-blue-900",
  }
  return (
    <div className={cn("rounded-xl border px-4 py-2.5 text-center text-sm font-semibold", tones[tone])}>{children}</div>
  )
}

function Down({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("block text-center text-neutral-400", className)}>
      ↓
    </span>
  )
}

// Two-way connector between the Orchestrator and exactly one specialist agent.
function Spoke({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("flex items-center px-1.5 text-lg leading-none text-neutral-500 md:px-2.5", className)}>
      ⟷
    </span>
  )
}

// Grid placement: on mobile the Orchestrator spans the left column and each
// specialist sits in its own row on the right; on desktop the Orchestrator is
// centred with two specialists on each side. No specialist touches another.
const HUB_AGENTS = [
  { name: "Vision Agent", spokeClass: "col-start-2 row-start-1 md:col-start-2 md:row-start-1", cardClass: "col-start-3 row-start-1 md:col-start-1 md:row-start-1" },
  { name: "Security Agent", spokeClass: "col-start-2 row-start-2 md:col-start-2 md:row-start-2", cardClass: "col-start-3 row-start-2 md:col-start-1 md:row-start-2" },
  { name: "Redaction Agent", spokeClass: "col-start-2 row-start-3 md:col-start-4 md:row-start-1", cardClass: "col-start-3 row-start-3 md:col-start-5 md:row-start-1" },
  { name: "Quality Agent", spokeClass: "col-start-2 row-start-4 md:col-start-4 md:row-start-2", cardClass: "col-start-3 row-start-4 md:col-start-5 md:row-start-2" },
]

const prose = "text-[15px] leading-7 text-muted-foreground"

export default function DataRedactionPage() {
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
            <span className="inline-flex items-center gap-1 rounded-full border border-green/20 bg-green/10 px-3 py-1 text-xs font-medium text-green">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Internal deployment
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.period}
            </span>
            <a
              href="#testimonial"
              className="inline-flex items-center gap-1.5 rounded-full border border-green/20 bg-green/10 px-3 py-1 text-xs font-medium text-green transition-colors hover:bg-green/20"
            >
              <MessageSquareQuote className="h-3.5 w-3.5" />
              Testimonial
            </a>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{PAGE_TITLE}</h1>
          <p className="mt-2 text-lg text-muted-foreground">Human-reviewed multi-agent image redaction</p>

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

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[60%_1fr] md:items-start">
            <div>
              <p className={prose}>
                An internal Helidon SE application built to help{" "}
                <a href="https://oracle.com/goto/livelabs-400452680" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-orange">Oracle LiveLabs</a>{" "}
                teams identify and redact
                sensitive information from tutorial screenshots. Images are loaded from OCI Object Storage and
                processed by an orchestrator coordinating Vision, Security, Redaction, and Quality agents. Authors
                then review the results, request corrections directly from the interface, and save approved
                images back to Object Storage. Reviewer feedback is retained in OCI Autonomous Database.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {HERO_TAGS.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-md bg-blue/8 px-2.5 py-1 text-xs font-medium text-blue">
                    {tag}
                  </span>
                ))}
                {HERO_TAGS_MORE > 0 ? (
                  <span className="self-center text-xs font-medium text-muted-foreground">+{HERO_TAGS_MORE} more</span>
                ) : null}
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">At a glance</p>
              <div className="mt-4 space-y-4">
                {AT_A_GLANCE.map((item) => (
                  <div key={item.value}>
                    <p className="text-base font-semibold leading-tight text-orange">{item.value}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <Section eyebrow="DEMO" title="See the review workflow" id="demo">
          {project.videoPlaceholder.youtubeId ? (
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${project.videoPlaceholder.youtubeId}`}
                title="Sensitive data redaction demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : null}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Before and after comparison</h3>
            <RedactionCompare />
          </div>
        </Section>

        <Section eyebrow="THE PROBLEM" title="Screenshot review was slow and repetitive" id="problem">
          <p className={prose}>
            <a href="https://oracle.com/goto/livelabs-400452680" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-orange">Oracle LiveLabs</a>{" "}
            tutorials use screenshots to teach users how to work with OCI services. Before
            publication, every screenshot must be checked for sensitive information such as email addresses, OCIDs,
            tenancy details, compartment names, internal identifiers, and other contextual data.
          </p>
          <p className={prose}>
            Reviewing and manually editing these images was slow and repetitive. A tutorial containing
            approximately 50 screenshots could require more than two hours of manual inspection and redaction,
            followed by additional correction rounds after reviewer feedback.
          </p>
          <p className={prose}>
            The challenge was to automate the repetitive work without allowing an unreviewed AI decision to
            determine the final published image.
          </p>
          <p className={prose}>
            Rule-based matching alone was insufficient because sensitive information could depend on the
            surrounding interface and business context.
          </p>
        </Section>

        <Section eyebrow="TARGET USERS" title="Who it was built for" id="users">
          <p className={prose}>
            Oracle LiveLabs authors and documentation teams preparing OCI tutorial screenshots for publication.
          </p>
          <p className={prose}>
            <span className="font-medium text-foreground">Their goal: </span>
            To process batches of screenshots faster while retaining human control over every final image.
          </p>
        </Section>

        <Section eyebrow="MY CONTRIBUTION" title="What I built" id="contribution">
          <p className={prose}>
            I designed and developed the internal web application, including its review-focused UI, Helidon SE
            backend, OCI Object Storage workflow, multi-agent orchestration, natural-language correction
            experience, and Autonomous Database feedback capture.
          </p>
        </Section>

        <Section eyebrow="USER WORKFLOW" title="From bucket to approved image" id="workflow">
          <ol className={cn("list-decimal space-y-1.5 pl-5", prose)}>
            {WORKFLOW_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Section>

        <Section eyebrow="SYSTEM DESIGN" title="One orchestrator, four specialist agents" id="architecture">
          <p className={prose}>
            The Helidon SE backend runs a multi-agent workflow. An Orchestrator Agent manages the overall workflow
            and coordinates four specialist agents, so the system has five agents in total. Each specialist has
            one responsibility, which keeps the workflow easier to inspect than a single opaque model call.
          </p>

          <div
            role="img"
            aria-label="Hub-and-spoke architecture in which the Orchestrator Agent independently coordinates Vision, Security, Redaction, and Quality agents. Specialist agents do not communicate directly. Results proceed to human review, Object Storage, and Autonomous Database."
            className="rounded-2xl border border-neutral-200/80 p-4 md:p-6"
          >
            <div className="space-y-1.5 md:mx-auto md:max-w-xs">
              <FlowNode tone="store">OCI Object Storage</FlowNode>
              <Down className="pl-10 text-left md:pl-0 md:text-center" />
              <FlowNode>User selects bucket and images</FlowNode>
              <Down className="pl-10 text-left md:pl-0 md:text-center" />
            </div>

            <div className="mt-1.5 grid grid-cols-[minmax(0,0.85fr)_auto_minmax(0,1.15fr)] items-stretch gap-y-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-y-4">
              <div className="col-start-1 row-span-4 row-start-1 flex flex-col items-center justify-center rounded-2xl border-2 border-violet-300 bg-violet-100 px-3 py-4 text-center md:col-start-3 md:row-span-2">
                <p className="text-sm font-bold text-violet-950 md:text-base">Orchestrator Agent</p>
                <p className="mt-1 text-[11px] leading-4 text-violet-900/80">
                  Invokes each specialist separately and receives every result
                </p>
              </div>

              {HUB_AGENTS.map((agent) => (
                <Fragment key={agent.name}>
                  <Spoke className={agent.spokeClass} />
                  <div className={cn("flex items-center justify-center rounded-xl border border-violet-200 bg-violet-50 px-3 py-3 text-center text-sm font-semibold text-violet-900", agent.cardClass)}>
                    {agent.name}
                  </div>
                </Fragment>
              ))}
            </div>

            <div className="mt-2 flex justify-start gap-6 pl-2 text-xs text-muted-foreground md:justify-center md:pl-0">
              <span>
                <span aria-hidden className="mr-1 text-neutral-400">↓</span>
                Proposed result
              </span>
              <span>
                <span aria-hidden className="mr-1 text-neutral-400">↑</span>
                Correction instruction
              </span>
            </div>

            <div className="mt-2 md:mx-auto md:max-w-md">
              <FlowNode tone="human">Human review and natural-language correction</FlowNode>
            </div>

            <p className="mt-2 text-center text-xs text-muted-foreground">On approval</p>
            <div className="mt-1 grid grid-cols-2 gap-3 md:mx-auto md:max-w-xl">
              <div className="space-y-1.5">
                <Down />
                <FlowNode tone="store">Approved image saved to OCI Object Storage</FlowNode>
              </div>
              <div className="space-y-1.5">
                <Down />
                <FlowNode tone="store">Review feedback stored in OCI Autonomous Database</FlowNode>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Specialist agents communicate only with the Orchestrator. Human correction requests return to the
            Orchestrator, which decides which agent to invoke again.
          </p>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Orchestrator Agent</h3>
            <p className={cn("mt-1", prose)}>
              Assigns tasks to the required specialist agents, collects their results, and determines the next action.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {SPECIALIST_AGENTS.map((agent) => (
              <div key={agent.name} className="rounded-xl border border-neutral-200/80 p-4">
                <h3 className="text-sm font-semibold text-foreground">{agent.name}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{agent.copy}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Human reviewer</h3>
            <p className={cn("mt-1", prose)}>
              Approves the result or requests another edit using a natural-language instruction.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Also used: OCI Vision, OCI Autonomous Database and Java image processing.
          </p>
        </Section>

        <Section eyebrow="HUMAN IN THE LOOP" title="Human review remains the final quality gate" id="human-review">
          <p className={prose}>
            The agents produce a proposed result, not an automatically published image. The review interface
            presents the original and processed versions together so the author can inspect the changes. If the
            result needs adjustment, the reviewer can enter a natural-language instruction directly on the review
            screen and request another edit. Approved images are saved to OCI Object Storage, while reviewer
            feedback is retained in OCI Autonomous Database.
          </p>
          <p className={prose}>
            The stored feedback supports analysis of where corrections were needed and informs future
            improvements to the workflow.
          </p>
          <div className="max-w-2xl">
            <DocFigure
              visual={{
                title: "Review screen",
                caption:
                  "Review screen showing the original and processed versions of a screenshot. The reviewer can approve the result or request another edit with a prompt-based correction. Sensitive values in this capture are already masked.",
                src: "/projects/redact-sensetive-data/redacted-images.png",
                alt: "Review screen with a before and after comparison of a cloud console screenshot, masked sensitive fields, and controls to edit the redaction, discard, or finish and upload",
              }}
            />
          </div>
        </Section>

        <Section eyebrow="UNDER THE HOOD" title="Technical challenges" id="challenges">
          <div className="space-y-6">
            {CHALLENGES.map((item) => (
              <div key={item.heading}>
                <h3 className="text-base font-semibold text-foreground">{item.heading}</h3>
                <p className={cn("mt-1.5", prose)}>
                  <span className="font-medium text-foreground">The challenge: </span>
                  {item.challenge}
                </p>
                <p className={cn("mt-1.5", prose)}>
                  <span className="font-medium text-foreground">The response: </span>
                  {item.response}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="RESULTS & IMPACT" title="What changed" id="results">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {RESULTS.map((result) => (
              <div key={result.value} className="rounded-xl border border-neutral-200/80 p-4">
                <p className="text-lg font-semibold leading-tight text-orange">{result.value}</p>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{result.copy}</p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-xl border border-neutral-200/80">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-neutral-200/80 bg-neutral-50 text-left">
                  <th scope="col" className="px-4 py-2 font-medium text-muted-foreground">Manual process</th>
                  <th scope="col" className="px-4 py-2 font-medium text-muted-foreground">With the application</th>
                </tr>
              </thead>
              <tbody>
                {BEFORE_AFTER.map((row) => (
                  <tr key={row.before} className="border-b border-neutral-200/60 last:border-0">
                    <td className="px-4 py-3 text-muted-foreground">{row.before}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            The ~80% figure is one teammate&rsquo;s reported estimate for multi-image work, not a measurement across every batch.
          </p>
        </Section>

        <Section eyebrow="TESTIMONIAL" title="From a teammate" id="testimonial">
          <figure className="max-w-2xl rounded-xl border border-neutral-200 p-5">
            <div className="flex items-center gap-3">
              <InitialsAvatar name={testimonial.name} className="h-10 w-10 text-sm" />
              <div className="min-w-0">
                <Link
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-orange"
                >
                  {testimonial.name}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
            <blockquote className="mt-3 text-sm italic leading-6 text-muted-foreground">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs text-muted-foreground">
                {testimonial.context} · via {testimonial.source}
              </span>
              <span className="shrink-0 whitespace-nowrap rounded-full bg-orange/10 px-2.5 py-1 text-xs font-semibold text-orange">
                Reported: {testimonial.metric}
              </span>
            </figcaption>
          </figure>
        </Section>
      </div>
    </section>
  )
}
