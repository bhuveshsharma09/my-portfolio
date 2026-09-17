import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, FlaskConical } from "lucide-react"
import { cn } from "@/lib/utils"
import { getProjectById } from "@/data/projects"
import { DocFigure } from "@/components/projects/doc-figure"

const project = getProjectById("agentic-ui-navigator")!
const IMG = "/projects/agentic-ui-navigator"

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
  { id: "workflow", label: "Agent workflow" },
  { id: "architecture", label: "Architecture" },
  { id: "representative-run", label: "Representative run" },
  { id: "challenges", label: "Challenges" },
  { id: "results", label: "Results" },
  { id: "limitations", label: "Limitations" },
]

const EVIDENCE = [
  { value: "6 browser tools", copy: "Java tools for login, element discovery, navigation, clicking, screenshots, and waiting." },
  { value: "238 elements discovered", copy: "Interactive elements mapped during one representative JMS Console workflow." },
  { value: "39 execution steps", copy: "Logged during one representative natural-language workflow." },
  { value: "70% triage-reduction target", copy: "A project objective, not a measured production result." },
]

const PROBLEMS = [
  "Pre-authored test paths require maintenance.",
  "UI changes can invalidate stored element locators.",
  "Exploratory workflows still require human effort.",
  "Long browser workflows can fail when the page state changes unexpectedly.",
]

const TOOLS = [
  { name: "Login", copy: "Authenticates into a controlled test environment without exposing credentials in the agent trace." },
  { name: "Map Elements", copy: "Uses Selenium WebDriver to inspect the current DOM and build an inventory of interactive elements." },
  { name: "Navigate", copy: "Opens or changes the relevant browser location." },
  { name: "Click", copy: "Activates the element selected by the agent." },
  { name: "Screenshot", copy: "Captures the current visual state as execution evidence." },
  { name: "Wait", copy: "Allows dynamic page content or navigation to reach the expected state." },
]

const LOOP_STEPS = [
  "LangChain4j agent orchestration",
  "OCI Generative AI selects a tool",
  "Java tool dispatcher",
  "Selenium WebDriver performs the browser action",
  "DOM, screenshot, or page-state observation",
  "Observation returns to the agent",
  "Continue, recover, or complete",
]

const CHALLENGES = [
  {
    heading: "Navigating without a pre-authored test path",
    challenge:
      "Conventional Selenium tests normally encode the expected sequence and locators in advance. The agent needed to determine what to interact with from the current page state.",
    solution:
      "I built a Map Elements tool using Selenium WebDriver to inspect and classify interactive DOM elements at runtime. The agent selected from that current inventory instead of replaying a predefined end-to-end sequence.",
  },
  {
    heading: "Detecting stale browser state",
    challenge: "Navigation and dynamic page updates could make the agent's existing element inventory outdated.",
    solution:
      "Failed or inconsistent observations triggered a new page scan, allowing the agent to rebuild its element inventory before choosing another action.",
  },
  {
    heading: "Maintaining intent through a long workflow",
    challenge: "Small errors can compound across long tool-use sequences and cause the agent to drift from the original goal.",
    solution:
      "The LangChain4j control loop maintained the task context across action and observation cycles, while the structured execution trace made failures and recovery attempts inspectable.",
  },
]

const DEMONSTRATED = [
  "Representative workflow completed",
  "238 interactive elements discovered in the demonstrated run",
  "39 logged execution steps in the demonstrated run",
  "No pre-authored end-to-end navigation sequence for the demonstrated workflow",
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

function Node({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "model" | "tool" | "browser" | "trace" }) {
  const tones = {
    neutral: "border-neutral-200 bg-neutral-50 text-foreground",
    model: "border-violet-200 bg-violet-50 text-violet-900",
    tool: "border-blue-200 bg-blue-50 text-blue-900",
    browser: "border-emerald-200 bg-emerald-50 text-emerald-900",
    trace: "border-orange/30 bg-orange/10 text-foreground",
  }
  return <div className={cn("rounded-xl border px-4 py-2.5 text-center text-sm font-semibold", tones[tone])}>{children}</div>
}

function Down() {
  return (
    <span aria-hidden className="block text-center text-neutral-400">
      ↓
    </span>
  )
}

const prose = "text-[15px] leading-7 text-muted-foreground"
const h3 = "text-base font-semibold text-foreground"

export default function AgenticUiNavigatorPage() {
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
              <FlaskConical className="h-3.5 w-3.5" />
              Research PoC
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.period}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{project.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Natural-language browser agent for Oracle Java Management Service testing
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
            I built a Java browser agent to support UI testing for Oracle Java Management Service (JMS) workflows in
            the OCI Console. A tester provides a scenario in natural language, and the agent interprets the intent,
            signs into a controlled test environment, discovers relevant interface elements, navigates between
            pages, and operates the UI through Selenium WebDriver tools. LangChain4j manages the agent workflow,
            while OCI Generative AI selects actions from the current browser state. Each tool call, browser
            observation, error, recovery attempt, and outcome is captured in a structured execution trace for
            review and debugging.
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
          <p className="text-xs text-muted-foreground">
            The 238 and 39 figures come from one representative run. They are not averages or benchmark results.
          </p>
        </Section>

        <Section eyebrow="THE PROBLEM" title="Pre-authored UI tests need upkeep as the interface changes" id="problem">
          <p className={prose}>
            Traditional UI automation usually encodes the expected navigation path and element locators in advance.
            This works well for deterministic regression tests, but those scripts require maintenance when the
            interface or workflow changes.
          </p>
          <p className={prose}>
            The purpose of this project was to explore a complementary approach for Oracle Java Management Service
            testing: allow a tester to describe the intended workflow in natural language and let an agent determine
            how to perform it from the current state of the OCI Console.
          </p>
          <ul className={cn("list-disc space-y-1.5 pl-5", prose)}>
            {PROBLEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="TARGET USER" title="Who it was intended for" id="users">
          <p className={prose}>
            The intended user was a tester working with Oracle Java Management Service workflows in the OCI Console.
            Instead of implementing every navigation step in a test script, the tester could provide a
            natural-language task and review the resulting browser execution.
          </p>
          <p className={prose}>
            The agent was designed to complement deterministic regression tests, particularly for workflow
            exploration and test scenarios where the navigation path may vary.
          </p>
        </Section>

        <Section eyebrow="WHAT I BUILT" title="A Java agent with Selenium WebDriver tools" id="what-i-built">
          <p className={prose}>
            I built a Java agent using LangChain4j, OCI Generative AI, and Selenium WebDriver. LangChain4j manages
            the ReAct-style control loop and exposes browser capabilities as tools. OCI Generative AI selects the
            next tool from the current goal and browser observation, while Selenium WebDriver performs the action in
            the OCI Console.
          </p>
          <p className={prose}>
            The agent does not receive a complete pre-authored sequence. It repeatedly observes the current
            interface, selects an action, executes it, and evaluates the resulting browser state before continuing.
          </p>
          <p className={prose}>
            This is agent-driven UI workflow execution intended to support JMS testing. The reviewer inspects the
            resulting execution and evidence.
          </p>
        </Section>

        <Section eyebrow="AGENT WORKFLOW" title="Observe, decide, act, and observe again" id="workflow">
          <div
            role="img"
            aria-label="Agent loop: a natural-language test scenario enters LangChain4j agent orchestration. OCI Generative AI selects a tool, the Java tool dispatcher calls it, Selenium WebDriver performs the browser action, and a DOM, screenshot or page-state observation returns to the agent, which continues, recovers or completes. The loop repeats until completion and produces a structured execution trace."
            className="mx-auto max-w-md space-y-1.5"
          >
            <Node>Natural-language test scenario</Node>
            <Down />
            <div className="rounded-2xl border-2 border-dashed border-orange/40 p-3">
              <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-orange">
                ↺ Repeats until the task completes
              </p>
              <div className="space-y-1.5">
                {LOOP_STEPS.map((step, i) => (
                  <div key={step} className="space-y-1.5">
                    <Node tone={i === 1 ? "model" : i === 3 ? "browser" : i === 0 || i === 5 || i === 6 ? "neutral" : "tool"}>{step}</Node>
                    {i < LOOP_STEPS.length - 1 ? <Down /> : null}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                <span aria-hidden>↑ </span>
                If continuing or recovering, control returns to the top of the loop with the new observation.
              </p>
            </div>
            <Down />
            <Node tone="trace">Structured execution trace</Node>
          </div>
          <p className={prose}>
            The browser observation always returns to the agent before the next action is chosen.
          </p>
        </Section>

        <Section eyebrow="ARCHITECTURE AND TOOLS" title="The model chooses; Selenium WebDriver acts" id="architecture">
          <p className={prose}>
            LangChain4j connects the OCI Generative AI model to a set of Java browser tools. The model determines
            which tool to use, but the model does not manipulate the browser directly. Selenium WebDriver executes
            the requested action and returns the resulting page state to the agent.
          </p>

          <div
            role="img"
            aria-label="Architecture: a natural-language instruction goes to LangChain4j ReAct orchestration, which connects OCI Generative AI and a Java tool registry of six tools: Login, Map Elements, Navigate, Click, Screenshot and Wait. The tools call Selenium WebDriver, which operates the OCI Console test environment. The browser observation returns to LangChain4j orchestration, and the run ends with a completion result and a structured execution trace."
            className="mx-auto max-w-xl space-y-1.5 rounded-2xl border border-neutral-200/80 p-4 md:p-5"
          >
            <Node>Natural-language instruction</Node>
            <Down />
            <div className="rounded-xl border border-neutral-300 p-3">
              <p className="text-center text-sm font-semibold text-foreground">LangChain4j ReAct orchestration</p>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                <Node tone="model">OCI Generative AI</Node>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-2.5">
                  <p className="text-center text-xs font-semibold text-blue-900">Java tool registry</p>
                  <div className="mt-2 grid grid-cols-2 gap-1.5">
                    {TOOLS.map((tool) => (
                      <span key={tool.name} className="rounded-lg border border-blue-200 bg-white px-2 py-1 text-center text-xs font-medium text-blue-900">
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Down />
            <Node tone="browser">Selenium WebDriver</Node>
            <Down />
            <Node tone="browser">OCI Console test environment</Node>
            <Down />
            <Node>Browser observation</Node>
            <p className="text-center text-xs font-medium text-orange">
              <span aria-hidden>↺ </span>
              Returns to LangChain4j orchestration
            </p>
            <Down />
            <Node tone="trace">Completion result and structured execution trace</Node>
          </div>

          <div>
            <h3 className={h3}>Six Java tools backed by Selenium WebDriver</h3>
            <dl className="mt-3 divide-y divide-neutral-200/70 rounded-xl border border-neutral-200/80">
              {TOOLS.map((tool) => (
                <div key={tool.name} className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:gap-4">
                  <dt className="text-sm font-semibold text-foreground sm:w-32 sm:shrink-0">{tool.name}</dt>
                  <dd className="text-sm leading-6 text-muted-foreground">{tool.copy}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className={h3}>Dynamic element discovery</h3>
            <p className={cn("mt-1.5", prose)}>
              The Map Elements tool uses Selenium WebDriver to inspect the current DOM and create a dynamic inventory
              of interactive controls. The agent selects from this current inventory rather than replaying a fully
              predefined end-to-end locator sequence. No pre-authored selector sequence was required for the
              demonstrated workflow.
            </p>
          </div>

          <div>
            <h3 className={h3}>Structured execution trace</h3>
            <p className={cn("mt-1.5", prose)}>
              The system records a structured execution trace containing the selected tool, action parameters,
              browser observation, errors, recovery attempts, and final outcome.
            </p>
          </div>

          <div className="max-w-2xl">
            <DocFigure
              visual={{
                title: "Agent design sketch",
                caption:
                  "Original design sketch of the agent: a natural-language prompt, the model's decision step, the six browser tools whose results return to the model, and the final response. The example prompt is the representative scenario used below.",
                src: `${IMG}/agentic-ui-arch.png`,
                alt: "Design sketch of a ReAct agent: a user prompt asking to start a Static Java Library Scan work request feeds a model decision step, which calls six tools named Login, Map Elements, Navigate, Click, Screenshot and Wait, receives their results, and ends with the agent's final response",
              }}
            />
          </div>
        </Section>

        <Section eyebrow="REPRESENTATIVE EXECUTION" title="One demonstrated JMS workflow" id="representative-run">
          <p className={prose}>
            The representative scenario for Oracle Java Management Service was: &ldquo;Start a Static Java Library
            Scan work request and view the work request.&rdquo;
          </p>
          <p className={prose}>
            In one representative run, the agent discovered 238 interactive elements and completed the workflow
            across 39 logged execution steps without a pre-authored end-to-end navigation sequence.
          </p>
          <DocFigure
            visual={{
              title: "Representative execution trace",
              caption:
                "Representative execution trace showing tool selection, browser observations, recovery decisions, and the final workflow outcome. The THOUGHT, DECISION and OBSERVATION labels are records generated by the application, not the model's private internal reasoning.",
              src: `${IMG}/agentic-ui-results.png`,
              alt: "Log excerpt from one run with 39 numbered steps labelled THOUGHT, DECISION, OBSERVATION and FINAL DECISION, including a decision to rescan an empty element map, an observation that 238 interactive elements were mapped, a click on Work requests, a wait, and a final navigation-successful record",
            }}
          />
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
                  <span className="font-medium text-foreground">The solution: </span>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="RESULTS" title="Demonstrated evidence and the project target" id="results">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className={h3}>Demonstrated in one representative run</h3>
              <ul className={cn("mt-2 list-disc space-y-1.5 pl-5", prose)}>
                {DEMONSTRATED.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={h3}>Project target</h3>
              <p className="mt-2 text-base font-semibold text-orange">Targeted 70% reduction in manual triage effort</p>
              <p className={cn("mt-1", prose)}>This was a project objective rather than a measured production outcome.</p>
            </div>
          </div>
        </Section>

        <Section eyebrow="LIMITATIONS" title="Limitations and next steps" id="limitations">
          <p className={prose}>
            This proof of concept demonstrated natural-language browser workflow execution, but agentic testing
            remains probabilistic. Production use would require a larger scenario set, repeatability measurement,
            explicit assertion handling, failure classification, credential safeguards, and clear rules for when
            deterministic Selenium tests remain the better choice.
          </p>
        </Section>
      </div>
    </section>
  )
}
