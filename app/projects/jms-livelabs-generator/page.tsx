import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { getProjectById } from "@/data/projects"
import { DocFigure } from "@/components/projects/doc-figure"

const project = getProjectById("jms-livelabs-generator")!
const IMG = "/projects/jms-livelabs-generator"
const VIDEO_ID = project.videoPlaceholder.youtubeId

export const metadata: Metadata = {
  title: `${project.title} | Bhuvesh Kumar`,
  description: project.description,
}

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "evidence", label: "Evidence" },
  { id: "problem", label: "Problem" },
  { id: "users", label: "Users" },
  { id: "what-i-built", label: "What I built" },
  { id: "workflow", label: "Authoring workflow" },
  { id: "architecture", label: "Architecture" },
  { id: "human-review", label: "Human review" },
  { id: "related", label: "Test Specification Generator" },
  { id: "cost-model", label: "Cost model" },
  { id: "challenges", label: "Challenges" },
  { id: "results", label: "Results" },
]

const EVIDENCE = [
  { value: "Internal deployment", copy: "Deployed for internal authoring workflows alongside the JMS Test Specification Generator." },
  { value: "Used by LiveLabs authors", copy: "Internal authors used it to gather feature context and prepare tutorial drafts." },
  { value: "Peer-reported ~60% time saving", copy: "Reported through internal feedback, not a controlled time study." },
  { value: "Internally costed", copy: "Approximately US$0.018 per request under the documented OCI usage assumptions." },
]

const COMPONENTS = [
  "Document ingestion and retrieval",
  "OCI knowledge base",
  "OCI Generative AI Agent",
  "Figma MCP integration",
  "Audience-specific prompting",
  "Chat-based authoring interface",
  "Human review workflow",
  "Knowledge refresh/re-ingestion process",
  "Internal cost model",
  "Deployment and architecture-review planning",
]

const WORKFLOW = [
  "Curated product documents are ingested into the OCI knowledge base.",
  "The author enters a feature or tutorial request.",
  "The agent retrieves relevant document context through RAG.",
  "The agent obtains current design context through Figma MCP where required.",
  "The system generates a grounded tutorial outline or draft.",
  "The author reviews the content for accuracy, clarity, and completeness.",
  "The author requests corrections or edits the draft.",
  "Only author-approved content proceeds toward publication.",
  "Updated source documents are re-ingested when the knowledge base needs refreshing.",
]

const DOC_PATH = ["OCI Object Storage", "Chunking and embedding", "OCI Knowledge Base", "RAG retrieval"]
const GENERATION_PATH = [
  "Audience-specific prompt",
  "Grounded LiveLabs draft",
  "Author review and correction",
  "Final author-approved content",
]

const COMPARISON = [
  { row: "Primary user", livelabs: "LiveLabs author", testspec: "JMS SQE engineer" },
  { row: "Output", livelabs: "Customer-facing tutorial draft", testspec: "Traceable test specification" },
  { row: "Context", livelabs: "Product documents plus Figma MCP", testspec: "OCI knowledge base and staged evidence chain" },
  { row: "Workflow", livelabs: "Chat-based authoring and human review", testspec: "Multi-stage generation, validation, and human review" },
  { row: "Status", livelabs: "Internal deployment", testspec: "Internal enterprise implementation" },
  { row: "Evidence", livelabs: "Internal author use and peer-reported time saving", testspec: "SQE use and reported test-specification preparation savings" },
]

const BEFORE_AFTER = [
  { before: "Search across multiple documents and systems", after: "Query a shared authoring interface" },
  { before: "Open Figma separately to understand the interface", after: "Retrieve grounded product context from the OCI knowledge base" },
  { before: "Assemble feature context manually", after: "Retrieve design context through Figma MCP" },
  { before: "Draft the tutorial from a blank page", after: "Start from an AI-generated draft" },
  { before: "Repeat research when context is missing", after: "Review and correct the content before publication" },
]

const CHALLENGES = [
  {
    heading: "Heterogeneous source material",
    challenge: "Product context was distributed across structured and unstructured documents with different formats and levels of detail.",
    response: "I designed a curated ingestion workflow that normalized supported documents into a shared OCI knowledge base for retrieval.",
  },
  {
    heading: "Connecting live design context",
    challenge: "Figma designs changed independently from the documents stored in the knowledge base.",
    response: "I connected Figma through MCP so the agent could obtain design context separately instead of treating a potentially stale export as the only source.",
  },
  {
    heading: "Grounded drafts still require judgment",
    challenge: "A generated tutorial can sound correct while containing incomplete or outdated steps.",
    response: "The workflow treated generation as a first draft and retained mandatory author review before publication.",
  },
  {
    heading: "Making internal deployment economically understandable",
    challenge: "A useful technical prototype still required a realistic cost estimate before broader internal use.",
    response: "I developed an internal calculation covering embedding, storage, model usage, and per-request cost under the evaluated assumptions.",
  },
]

const RESULTS = [
  { value: "Internally deployed", copy: "Deployed alongside the JMS Test Specification Generator for internal authoring workflows." },
  { value: "Used by internal authors", copy: "LiveLabs authors used the system to gather feature context and prepare tutorial drafts." },
  { value: "Peer-reported ~60% time saving", copy: "Internal feedback indicated approximately 60% less authoring time. This was peer-reported rather than measured through a controlled study." },
  { value: "Approximately US$0.018 per request", copy: "Estimated through an internal calculation using the selected model, storage, token-volume, request-volume, and OCI pricing assumptions." },
  { value: "Human-controlled output", copy: "Generated drafts were reviewed and corrected by an author before publication." },
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

function Node({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "doc" | "design" | "agent" | "human" }) {
  const tones = {
    neutral: "border-neutral-200 bg-neutral-50 text-foreground",
    doc: "border-blue-200 bg-blue-50 text-blue-900",
    design: "border-rose-200 bg-rose-50 text-rose-900",
    agent: "border-violet-300 bg-violet-100 text-violet-950",
    human: "border-orange/30 bg-orange/10 text-foreground",
  }
  return <div className={cn("rounded-xl border px-3 py-2 text-center text-sm font-semibold", tones[tone])}>{children}</div>
}

function Arrow({ children = "↓" }: { children?: ReactNode }) {
  return (
    <span aria-hidden className="block text-center text-neutral-400">
      {children}
    </span>
  )
}

const prose = "text-[15px] leading-7 text-muted-foreground"
const h3 = "text-base font-semibold text-foreground"

export default function JmsLiveLabsGeneratorPage() {
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
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{project.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">RAG-powered LiveLabs authoring · Oracle internal deployment</p>

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
            An internally deployed OCI Generative AI authoring tool that helps Oracle LiveLabs authors turn
            fragmented JMS product documentation and Figma designs into grounded tutorial drafts. The system combines
            an OCI knowledge base for document retrieval with a Figma MCP connection for live design context. It was
            deployed alongside the JMS Test Specification Generator and used by internal authors, with peer feedback
            indicating approximately 60% less authoring time.
          </p>
          <p className="mt-3 max-w-3xl border-l-2 border-neutral-300 pl-3 text-sm text-muted-foreground">
            Generated drafts remained subject to author review before publication.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-md bg-blue/8 px-2.5 py-1 text-xs font-medium text-blue">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <Section eyebrow="AT A GLANCE" title="Project evidence" id="evidence">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {EVIDENCE.map((item) => (
              <div key={item.value}>
                <dt className="text-base font-semibold text-orange">{item.value}</dt>
                <dd className="mt-0.5 text-sm leading-6 text-muted-foreground">{item.copy}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section eyebrow="THE PROBLEM" title="Feature context was spread across many artefacts" id="problem">
          <p className={prose}>
            JMS features selected for LiveLabs documentation require authors to understand the feature across
            multiple product, engineering, and design artefacts.
          </p>
          <p className={prose}>
            Before drafting a LiveLabs tutorial, an author needed to collect and understand information spread across
            PRDs, one-pagers, API specifications, design documents, meeting notes, test material, and Figma designs.
            The research was repetitive, and relevant context could be difficult to locate consistently.
          </p>
          <p className={prose}>
            The goal was not to remove the author. It was to reduce the time spent assembling feature context and
            give the author a grounded first draft that could be reviewed, corrected, and finalized.
          </p>
          <div className="max-w-2xl">
            <DocFigure
              visual={{
                title: "Manual authoring workflow",
                caption: "The manual workflow this project addressed: design documents feed engineering sprints, while derived documents such as LiveLabs tutorials are assembled by hand from those sources and from engineers' domain knowledge.",
                src: `${IMG}/livelabs-manual-flow.png`,
                alt: "Diagram of the manual workflow: one-pagers, PRDs, Figma files, API specifications and design documents lead to Jira tickets and sprints, while derived documents such as test specifications and LiveLabs are written by hand from those sources and from engineers' prior domain knowledge",
              }}
            />
          </div>
        </Section>

        <Section eyebrow="TARGET USER" title="Who it was built for" id="users">
          <p className={prose}>Oracle LiveLabs authors preparing customer-facing tutorials for JMS features.</p>
        </Section>

        <Section eyebrow="MY CONTRIBUTION" title="What I built" id="what-i-built">
          <p className={prose}>
            I designed an authoring workflow that combines retrieval from a curated OCI knowledge base with live Figma
            design context exposed through Figma MCP. An OCI Generative AI Agent uses the retrieved context to produce
            a grounded LiveLabs draft, which the author then reviews and corrects before publication.
          </p>
          <p className={prose}>
            The project began as a proposed proof of concept. The cost model and architecture-review scope supported
            the decision to move from proof of concept to internal deployment.
          </p>
          <ul className={cn("grid list-disc grid-cols-1 gap-x-8 gap-y-1 pl-5 sm:grid-cols-2", prose)}>
            {COMPONENTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="AUTHORING WORKFLOW" title="From request to author-approved content" id="workflow">
          <ol className={cn("list-decimal space-y-1.5 pl-5", prose)}>
            {WORKFLOW.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          {VIDEO_ID ? (
            <div className="max-w-2xl">
              <h3 className={cn(h3, "mb-3")}>Demo</h3>
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="JMS LiveLabs Generator demo video showing the chat-based authoring workflow"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ) : null}
        </Section>

        <Section eyebrow="ARCHITECTURE" title="Two separate context sources, one agent" id="architecture">
          <p className={prose}>
            Documents and designs reach the agent by different paths. Product documents are ingested into an OCI
            knowledge base and retrieved through RAG. Figma designs are not part of that embedded corpus; the agent
            obtains design context through Figma MCP when it needs it.
          </p>

          <div
            role="img"
            aria-label="Architecture with two separate context sources. Document path: PRDs, one-pagers, API specifications, design documents, meeting minutes and test material go to OCI Object Storage, then chunking and embedding, then the OCI Knowledge Base, which serves RAG retrieval. Design path: Figma designs are reached through Figma MCP, which provides live design context. An author request goes to the OCI Generative AI Agent, which retrieves document evidence from the knowledge base and design context through Figma MCP; both results return to the agent. The agent applies an audience-specific prompt and produces a grounded LiveLabs draft, followed by author review and correction, then final author-approved content."
            className="rounded-2xl border border-neutral-200/80 p-4 md:p-6"
          >
            <div className="mx-auto max-w-xs space-y-1.5">
              <Node>Author request</Node>
              <Arrow />
              <Node tone="agent">OCI Generative AI Agent</Node>
            </div>

            <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-dashed border-blue-300 p-3">
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-blue-900">Document path</p>
                <p className="mt-1 text-center text-xs text-muted-foreground">
                  <span aria-hidden>↓ </span>agent requests evidence · <span aria-hidden>↑ </span>evidence returns to the agent
                </p>
                <div className="mt-2 space-y-1.5">
                  {[...DOC_PATH].reverse().map((step, i) => (
                    <div key={step} className="space-y-1.5">
                      <Node tone="doc">{step}</Node>
                      {i < DOC_PATH.length - 1 ? <Arrow>↑</Arrow> : null}
                    </div>
                  ))}
                  <Arrow>↑</Arrow>
                  <Node>PRDs · one-pagers · API specifications · design documents · meeting minutes · test material</Node>
                </div>
              </div>

              <div className="rounded-xl border border-dashed border-rose-300 p-3">
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-rose-900">Design path</p>
                <p className="mt-1 text-center text-xs text-muted-foreground">
                  <span aria-hidden>↓ </span>agent requests context · <span aria-hidden>↑ </span>context returns to the agent
                </p>
                <div className="mt-2 space-y-1.5">
                  <Node tone="design">Live design context</Node>
                  <Arrow>↑</Arrow>
                  <Node tone="design">Figma MCP</Node>
                  <Arrow>↑</Arrow>
                  <Node>Figma designs</Node>
                </div>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Not uploaded, embedded or stored in OCI Object Storage, and not a publishing mechanism.
                </p>
              </div>
            </div>

            <p className="mt-3 text-center text-xs font-medium text-foreground">
              Both results return to the agent, which then continues:
            </p>
            <div className="mx-auto mt-2 max-w-xs space-y-1.5">
              {GENERATION_PATH.map((step, i) => (
                <div key={step} className="space-y-1.5">
                  <Node tone={i >= 2 ? "human" : "agent"}>{step}</Node>
                  {i < GENERATION_PATH.length - 1 ? <Arrow /> : null}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={h3}>Shared retrieval layer over curated source documents</h3>
            <p className={cn("mt-1.5", prose)}>
              The knowledge base reflected the document versions most recently ingested. When a PRD, API
              specification, or other source changed, the updated artefact needed to be re-ingested before the new
              information was available to the agent.
            </p>
          </div>

          <div className="max-w-2xl">
            <DocFigure
              visual={{
                title: "Early agent design sketch",
                caption: "Early design sketch of the OCI Generative AI Agent from the proof-of-concept stage: a tailored prompt, a LLaMA model inside the agent, and the document knowledge base. It predates the Figma MCP connection, which the diagram above shows as a separate path.",
                src: `${IMG}/livelabs-generator-arch.png`,
                alt: "Early sketch of an OCI Generative AI Agent running a LLaMA model with memory, tools and prompt inputs, connected to a knowledge base of design documents, public JMS documentation and previous LiveLabs, returning generated content through an API response",
              }}
            />
          </div>
        </Section>

        <Section eyebrow="HUMAN IN THE LOOP" title="Author review remains the final quality gate" id="human-review">
          <p className={prose}>
            The generator produced a grounded first draft rather than publication-ready content. LiveLabs authors
            remained responsible for checking technical accuracy, confirming that the steps matched the current
            product experience, correcting unclear instructions, and approving the final tutorial.
          </p>
          <p className={prose}>
            Figma MCP helped retrieve current interface context, but the author still verified that the generated
            steps matched the intended release.
          </p>
          <div className="max-w-md">
            <DocFigure
              visual={{
                title: "Review steps in the authoring process",
                caption: "Slide from the original proposal. The authoring process keeps content review and a final step-verification review before a LiveLab is published, with AI assisting the author at each stage.",
                src: `${IMG}/livelabs-use-cases.png`,
                alt: "Proposal slide showing the LiveLabs authoring process: review documents, prepare and review content, create the initial LiveLab with screenshots, a final review to verify steps, then publish, alongside the AI-assisted use cases considered for each stage",
              }}
            />
          </div>
        </Section>

        <Section eyebrow="RELATED PROJECT" title="Shared foundation, different workflow" id="related">
          <p className={prose}>
            The LiveLabs Generator and JMS Test Specification Generator share the same foundational idea: retrieve
            trusted product evidence before generating content. They were deployed internally as related tools, but
            they served different users and produced different outputs.
          </p>
          <div className="overflow-x-auto rounded-xl border border-neutral-200/80" tabIndex={0} role="region" aria-label="Comparison of the LiveLabs Generator and the JMS Test Specification Generator, scrollable on small screens">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200/80 bg-neutral-50">
                  <th scope="col" className="px-4 py-2 font-medium text-muted-foreground"><span className="sr-only">Attribute</span></th>
                  <th scope="col" className="px-4 py-2 font-medium text-foreground">LiveLabs Generator</th>
                  <th scope="col" className="px-4 py-2 font-medium text-foreground">JMS Test Specification Generator</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.row} className="border-b border-neutral-200/60 align-top last:border-0">
                    <th scope="row" className="px-4 py-3 font-semibold text-foreground">{row.row}</th>
                    <td className="px-4 py-3 text-muted-foreground">{row.livelabs}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.testspec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link
            href="/projects/jms-ai-toolkit"
            aria-label="View the JMS Test Specification Generator case study"
            className={cn("group inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-foreground underline underline-offset-4 hover:text-orange", FOCUS)}
          >
            View the JMS Test Specification Generator case study
            <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Section>

        <Section eyebrow="COST AND DEPLOYMENT" title="Cost model for internal deployment" id="cost-model">
          <p className={prose}>
            The project included an internal cost calculation covering initial embedding, document storage, and
            model/request usage. Under the selected model, token-volume, storage, and OCI pricing assumptions, the
            estimated request cost was approximately US$0.018.
          </p>
          <p className={prose}>
            This figure represents the internal calculation for the evaluated configuration; it is not a universal OCI
            request price.
          </p>
          <p className="text-sm text-muted-foreground">
            Only the rounded estimate and the categories in the model are shown here. The underlying assumptions are
            internal. Deployment planning also covered internal architecture-review requirements.
          </p>
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
                  <span className="font-medium text-foreground">The response: </span>
                  {item.response}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="RESULTS" title="Results and limitations" id="results">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {RESULTS.map((item) => (
              <div key={item.value}>
                <dt className="text-base font-semibold text-foreground">{item.value}</dt>
                <dd className="mt-0.5 text-sm leading-6 text-muted-foreground">{item.copy}</dd>
              </div>
            ))}
          </dl>

          <div className="overflow-x-auto rounded-xl border border-neutral-200/80" tabIndex={0} role="region" aria-label="Manual workflow compared with the generator, scrollable on small screens">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200/80 bg-neutral-50">
                  <th scope="col" className="px-4 py-2 font-medium text-muted-foreground">Manual workflow</th>
                  <th scope="col" className="px-4 py-2 font-medium text-muted-foreground">With the generator</th>
                </tr>
              </thead>
              <tbody>
                {BEFORE_AFTER.map((row) => (
                  <tr key={row.before} className="border-b border-neutral-200/60 align-top last:border-0">
                    <td className="px-4 py-3 text-muted-foreground">{row.before}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className={h3}>Limitations</h3>
            <ul className={cn("mt-2 list-disc space-y-1 pl-5", prose)}>
              <li>The ~60% figure is peer-reported, not measured through a controlled study.</li>
              <li>Generated drafts still required author review and correction.</li>
              <li>The knowledge base required re-ingestion to reflect updated source material.</li>
              <li>The per-request cost is an estimate for one evaluated configuration.</li>
            </ul>
          </div>

          <div>
            <h3 className={h3}>Why it matters</h3>
            <p className={cn("mt-1.5", prose)}>
              This project demonstrated how a shared retrieval layer and tool-based design context could support
              documentation workflows without removing human ownership. Its architecture also informed the related
              Test Specification Generator, while the internal cost calculation and peer feedback helped support
              deployment decisions.
            </p>
          </div>
        </Section>
      </div>
    </section>
  )
}
