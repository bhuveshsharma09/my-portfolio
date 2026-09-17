import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronDown, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import { getProjectById } from "@/data/projects"
import { DocFigure } from "@/components/projects/doc-figure"

const project = getProjectById("bizagento")!

export const metadata: Metadata = {
  title: `${project.title} | Bhuvesh Kumar`,
  description: project.description,
}

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "product-discovery", label: "Product discovery" },
  { id: "contribution", label: "My contribution" },
  { id: "features", label: "Features" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "local-ai", label: "Local AI" },
  { id: "development-process", label: "Development process" },
  { id: "challenges", label: "Challenges" },
  { id: "demo", label: "Demo" },
  { id: "outcomes", label: "Outcomes" },
]

const HERO_TAGS = ["React 19", "TypeScript", "React Flow", "Node.js", "Ollama", "sqlite-vec"]
const HERO_TAGS_MORE = project.techStack.filter((t) => !HERO_TAGS.includes(t)).length

const HERO_OUTCOMES = [
  { value: "Market → roadmap", label: "Competitor research converted into prioritized features" },
  { value: "Visual workflow builder", label: "Node-based creation, configuration and execution" },
  { value: "Local AI", label: "Ollama-powered LLM and RAG capabilities" },
  { value: "Build → inspect", label: "Dry runs, debugging and execution history" },
]

const PROBLEM_POINTS = [
  { heading: "Cloud dependence", copy: "Workflow data may pass through infrastructure outside the organization's control." },
  { heading: "External AI APIs", copy: "AI steps can send sensitive context to third-party model providers." },
  { heading: "Limited operational visibility", copy: "Teams need to understand what ran, why it ran and what every workflow step produced." },
]

const DISCOVERY_STEPS = [
  { heading: "Research", copy: "Compared competitor features and user flows" },
  { heading: "Identify gaps", copy: "Focused on local AI, RAG, debugging and workflow visibility" },
  { heading: "Prioritize", copy: "Organized features by user value and implementation priority" },
  { heading: "Specify", copy: "Added implementation details before development" },
]

const CONTRIBUTION_GROUPS = [
  {
    heading: "Product and roadmap",
    items: [
      "Conducted competitor and market research.",
      "Maintained a feature matrix and prioritized backlog.",
      "Converted feature ideas into implementation-ready requirements.",
      "Reviewed priorities and iterations directly with the founder.",
    ],
  },
  {
    heading: "UI/UX",
    items: [
      "Designed and refined major web-application flows.",
      "Worked extensively on the visual node-canvas experience.",
      "Designed configuration, debugging, run-history and dry-run interactions.",
      "Improved how non-technical users compose and inspect workflows.",
    ],
  },
  {
    heading: "Workflow engineering",
    items: [
      "Implemented node types for workflow inputs, data operations, control flow and LLM steps.",
      "Implemented triggers and scheduling capabilities.",
      "Implemented dry-run evaluation and debugging workflows.",
      "Implemented run-history and execution-inspection screens.",
    ],
  },
  {
    heading: "Local AI",
    items: [
      "Integrated local Ollama-powered LLM execution.",
      "Worked on the RAG node and local retrieval workflow.",
      "Connected AI behavior with the visual workflow-building experience.",
    ],
  },
]

const FEATURES = [
  { heading: "Node-based workflows", copy: "Compose workflows visually using Input, Data, Flow, LLM and RAG nodes." },
  { heading: "Triggers and scheduling", copy: "Start workflows manually, from supported triggers or according to a schedule." },
  { heading: "Flow control", copy: "Connect steps, branch workflow behavior and create repeatable execution paths." },
  { heading: "Local LLM steps", copy: "Run AI operations against Ollama models hosted on customer-controlled infrastructure." },
  { heading: "Dry-run evaluation", copy: "Test workflow behavior and inspect intermediate results before a real execution." },
  { heading: "Debugging and run history", copy: "Inspect execution state, logs and node outputs through dedicated debugging and runs screens." },
]

const DESIGN_GOALS = ["Visible workflow structure", "Clear node configuration", "Safe testing through dry runs", "Inspectable results and failures"]

const AI_FLOW_STEPS = ["Workflow input", "Data and flow nodes", "LLM or RAG node", "Local Ollama inference", "Inspectable output"]

const DEV_LOOP = [
  { heading: "Define", copy: "Document the feature and implementation requirements" },
  { heading: "Implement", copy: "Use agentic coding tools to accelerate development" },
  { heading: "Review and integrate", copy: "Check the generated changes within the existing codebase" },
  { heading: "Demo and refine", copy: "Review working functionality with the founder and incorporate feedback" },
]

const CHALLENGES = [
  {
    heading: "Making a flexible node system understandable",
    problem: "Different node types require different inputs, outputs and configuration without overwhelming non-technical users.",
    decision: "Use a consistent node model and configuration pattern while adapting controls to Input, Data, Flow, LLM and RAG behavior.",
    result: "Users can understand how nodes connect while still accessing feature-specific settings.",
  },
  {
    heading: "Testing workflows without triggering real effects",
    problem: "Users need to evaluate workflow logic without accidentally executing every side effect.",
    decision: "Introduce a dry-run path that exposes intermediate behavior and results through the debugging experience.",
    result: "Workflows can be evaluated and corrected before a real run.",
  },
  {
    heading: "Integrating local models into visual workflows",
    problem: "Local inference must fit into the same node and execution model as ordinary workflow operations.",
    decision: "Expose Ollama-powered LLM and RAG capabilities as configurable workflow nodes with inspectable inputs and outputs.",
    result: "Users can incorporate local AI without leaving the visual workflow experience.",
  },
]

const OUTCOMES = [
  { value: "Research → roadmap", label: "Competitor findings converted into prioritized, implementation-ready features" },
  { value: "Visual product experience", label: "Workflow creation, configuration, debugging and run inspection" },
  { value: "Local AI integration", label: "Ollama-powered LLM and RAG capabilities inside visual workflows" },
  { value: "Independent implementation", label: "Features delivered within an existing codebase through direct founder feedback" },
]

const LINKEDIN_CANONICAL_URL = "https://www.linkedin.com/feed/update/urn:li:share:7358121198624432128/"

function Section({ eyebrow, title, id, children }: { eyebrow: string; title: string; id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-neutral-200/80 pt-12 md:pt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  )
}

function Step({ index, heading, copy }: { index: number; heading: string; copy: string }) {
  return (
    <div className="rounded-xl border border-neutral-200/80 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Step {index}</p>
      <p className="mt-1 text-sm font-semibold text-foreground">{heading}</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p>
    </div>
  )
}

const prose = "text-[15px] leading-7 text-muted-foreground"

export default function BizagentoPage() {
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
              Deployed
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.period}
            </span>
            <a
              href="#linkedin-evidence"
              className="inline-flex items-center gap-1.5 rounded-full border border-green/20 bg-green/10 px-3 py-1 text-xs font-medium text-green transition-colors hover:bg-green/20"
            >
              <Linkedin className="h-3.5 w-3.5" />
              Post
            </a>
            {project.productLink ? (
              <a
                href={project.productLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.productLink.ariaLabel}
                className="inline-flex items-center gap-1.5 rounded-full border border-green/20 bg-green/10 px-3 py-1 text-xs font-medium text-green transition-colors hover:bg-green/20"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
                {project.productLink.label}
              </a>
            ) : null}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{project.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{project.subtitle}</p>

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
                BizAgento is a self-hosted visual workflow automation platform that lets teams build, trigger,
                schedule, dry-run and inspect node-based workflows. Its AI and RAG steps can call local Ollama
                models, helping organizations keep sensitive workflow data and inference on infrastructure they
                control.
              </p>

              <div className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">My role:</span> AI Engineering Intern
                </p>
                <p>
                  <span className="font-medium text-foreground">Scope:</span> Product discovery, UI/UX, workflow
                  engineering and local AI integration
                </p>
              </div>

              <p className={cn("mt-4", prose)}>
                Working directly with the founder, I independently implemented my contributions within an existing
                starter codebase. I researched competing platforms, converted product gaps into a prioritized
                feature roadmap, detailed implementation requirements, designed major UI flows and developed
                workflow and local-AI capabilities through short Scrum-style iterations.
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
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">What I delivered</p>
              <div className="mt-4 space-y-4">
                {HERO_OUTCOMES.map((item) => (
                  <div key={item.value}>
                    <p className="text-base font-semibold leading-tight text-orange">{item.value}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <Section eyebrow="THE PRODUCT OPPORTUNITY" title="Workflow automation without surrendering data control" id="product-problem">
          <p className={prose}>
            Mainstream workflow platforms make automation accessible, but AI-enabled workflows often depend on
            externally hosted services. That creates a barrier for organizations that need stronger control over
            where workflow data and model inference run.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PROBLEM_POINTS.map((point) => (
              <div key={point.heading} className="rounded-xl border border-neutral-200/80 p-4">
                <p className="text-sm font-semibold text-foreground">{point.heading}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{point.copy}</p>
              </div>
            ))}
          </div>
          <p className={prose}>
            The product direction was a self-hosted visual automation platform with locally executable AI,
            inspectable runs and workflow controls designed for sensitive environments.
          </p>
          <p className={cn(prose, "text-sm italic")}>
            Local LLM and RAG execution are designed to run on customer-controlled infrastructure. External
            integrations transmit data only when an organization explicitly configures and permits them.
          </p>
        </Section>

        <Section eyebrow="PRODUCT DISCOVERY" title="From competitor research to a prioritized roadmap" id="product-discovery">
          <p className={prose}>
            I compared workflow products such as n8n and Zapier to understand their node libraries,
            workflow-building experience, debugging tools, scheduling capabilities and AI integrations. I recorded
            the findings in a feature matrix, identified opportunities relevant to local-first AI and converted
            them into a prioritized implementation backlog with the founder.
          </p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            {DISCOVERY_STEPS.map((step, i) => (
              <Step key={step.heading} index={i + 1} heading={step.heading} copy={step.copy} />
            ))}
          </div>
        </Section>

        <Section eyebrow="MY ROLE" title="What I independently implemented" id="contribution">
          <p className={prose}>
            The founder provided the initial codebase structure, product direction and iterative feedback. Within
            that environment, I independently designed and implemented my assigned features.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {CONTRIBUTION_GROUPS.map((group) => (
              <div key={group.heading} className="rounded-xl border border-neutral-200/80 p-4">
                <h3 className="text-sm font-semibold text-foreground">{group.heading}</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="FEATURES" title="What users can build and inspect" id="features">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <div key={feature.heading} className="rounded-xl border border-neutral-200/80 p-4">
                <h3 className="text-sm font-semibold text-foreground">{feature.heading}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{feature.copy}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <DocFigure
              visual={{
                title: "Visual workflow builder",
                caption: "Visual workflow builder with connected workflow nodes and configurable execution paths.",
                src: "/projects/bizagento/visual-builder.png",
                alt: "BizAgento visual workflow builder with node canvas",
              }}
            />
            <DocFigure
              visual={{
                title: "Run and debugging view",
                caption: "Run and debugging view showing execution history, step-level state and generated output.",
                src: "/projects/bizagento/run-history.png",
                alt: "BizAgento run history with step-by-step logs",
              }}
            />
          </div>
        </Section>

        <Section eyebrow="PRODUCT EXPERIENCE" title="Making agentic workflows understandable" id="ui-ux">
          <p className={prose}>
            My UI/UX work focused on making a technically complex system understandable to non-technical
            operators. Users need to see how data enters the workflow, where it branches, when an AI step is
            invoked and what each run produced.
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {DESIGN_GOALS.map((goal) => (
              <div key={goal} className="rounded-xl border border-neutral-200/80 p-3 text-center">
                <p className="text-sm font-medium text-foreground">{goal}</p>
              </div>
            ))}
          </div>
          <p className={prose}>
            The interface was refined through short feedback cycles with the founder, moving from implementation
            ideas to working UI and then iterating on usability.
          </p>
        </Section>

        <Section eyebrow="LOCAL AI" title="AI capabilities on controlled infrastructure" id="local-ai">
          <p className={prose}>
            BizAgento can invoke local Ollama models from workflow nodes, allowing AI processing to remain on
            infrastructure controlled by the organization. I also worked on the RAG node, connecting document
            retrieval and model generation to the same visual workflow experience.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {AI_FLOW_STEPS.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-xl border border-violet-200 bg-violet-50 px-3 py-2 text-center text-xs font-semibold text-violet-900">
                  {step}
                </span>
                {i < AI_FLOW_STEPS.length - 1 ? <span aria-hidden className="text-neutral-400">→</span> : null}
              </div>
            ))}
          </div>

          <p className={prose}>
            The RAG node retrieves relevant document context before invoking the local model, enabling workflows
            to generate answers grounded in organization-controlled knowledge.
          </p>

          <details className="group rounded-xl border border-neutral-200/80 p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
              Technical stack and implementation details
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <div className={cn("mt-3 space-y-2", prose)}>
              <p>
                <span className="font-medium text-foreground">Frontend:</span> React 19 and TypeScript, with React
                Flow powering the node canvas, React Query for server state and Zustand for local state.
              </p>
              <p>
                <span className="font-medium text-foreground">Backend:</span> Node.js and TypeScript on Fastify,
                with Knex over SQLite and Zod validation.
              </p>
              <p>
                <span className="font-medium text-foreground">Local AI:</span> Ollama for local LLM inference, with
                a RAG pipeline using Ollama embeddings (nomic-embed-text) and sqlite-vec for local vector search.
              </p>
              <p>
                The platform also includes JWT-based authentication, encrypted credential storage and audit
                logging as part of its broader security model, inherited from the starter codebase rather than
                built independently for this internship.
              </p>
            </div>
          </details>
        </Section>

        <Section eyebrow="ENGINEERING PROCESS" title="Building with agentic coding tools" id="development-process">
          <p className={prose}>
            I used Claude Code and Codex as implementation accelerators during short, Scrum-style iterations. The
            tools helped me move from implementation requirements to working code, debug issues and explore
            solutions faster, while I remained responsible for feature decisions, integration and the final
            product behavior.
          </p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            {DEV_LOOP.map((step, i) => (
              <Step key={step.heading} index={i + 1} heading={step.heading} copy={step.copy} />
            ))}
          </div>
        </Section>

        <Section eyebrow="UNDER THE HOOD" title="Key product and engineering challenges" id="challenges">
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

        <Section eyebrow="DEMO" title="Video walkthrough coming soon" id="demo">
          <div className="rounded-xl border border-dashed border-neutral-300 p-5">
            <p className="text-sm font-semibold text-foreground">Video walkthrough coming soon</p>
            <p className={cn("mt-1.5", prose)}>
              The walkthrough will demonstrate building a workflow, configuring a local Ollama-powered AI step,
              performing a dry run, debugging execution, scheduling the workflow and inspecting the completed run.
            </p>
          </div>
          <p className={prose}>
            In the meantime, the{" "}
            <a href="#features" className="font-medium text-orange underline-offset-4 hover:underline">
              node-canvas and run-history screenshots above
            </a>{" "}
            show the builder and debugging experience directly, or open the live application below.
          </p>
          {project.productLink ? (
            <a
              href={project.productLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.productLink.ariaLabel}
              className="inline-flex items-center gap-1.5 rounded-full border border-green/20 bg-green/10 px-4 py-1.5 text-sm font-medium text-green transition-colors hover:bg-green/20"
            >
              <ArrowUpRight className="h-4 w-4" />
              {project.productLink.label}
            </a>
          ) : null}
        </Section>

        <Section eyebrow="OUTCOMES" title="What I delivered" id="outcomes">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {OUTCOMES.map((item) => (
              <div key={item.value} className="rounded-xl border border-neutral-200/80 p-4">
                <p className="text-lg font-semibold leading-tight text-orange">{item.value}</p>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="WHY IT MATTERS" title="The bigger picture" id="takeaway">
          <p className={prose}>
            BizAgento showed me that building an AI product is not only an implementation problem. It requires
            understanding the market, identifying meaningful product gaps, prioritizing what to build, designing
            an experience people can understand and integrating AI in a way that respects the user&rsquo;s
            infrastructure and data constraints.
          </p>
          <p className={prose}>
            The project also gave me practical experience using agentic coding tools inside a structured
            product-development process rather than treating generated code as the finished result.
          </p>
        </Section>

        <Section eyebrow="EVIDENCE" title="LinkedIn evidence" id="linkedin-evidence">
          <div className="rounded-xl border border-neutral-200/80 p-4">
            <iframe
              src={project.linkedinEmbed}
              height={project.linkedinEmbedHeight ?? 264}
              className="w-full max-w-[504px] rounded-lg border border-neutral-200"
              title="Embedded LinkedIn post about BizAgento"
              allowFullScreen
            />
            <a
              href={LINKEDIN_CANONICAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-green underline-offset-4 hover:underline"
            >
              <Linkedin className="h-4 w-4" />
              View the BizAgento LinkedIn post ↗
            </a>
          </div>
        </Section>
      </div>
    </section>
  )
}
