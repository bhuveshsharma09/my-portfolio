import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowUpRight, ArrowLeft, CheckCircle2, MessageSquareQuote } from "lucide-react"
import { cn } from "@/lib/utils"
import { getProjectById } from "@/data/projects"
import { getTestimonialById } from "@/data/testimonials"
import { DocFigure } from "@/components/projects/doc-figure"
import { InitialsAvatar } from "@/components/initials-avatar"
import { TraceExplorer } from "@/components/projects/TraceExplorer"

const project = getProjectById("jms-ai-toolkit")!
const testimonial = getTestimonialById("test-spec-generator")!

export const metadata: Metadata = {
  title: `${project.title} | Bhuvesh Kumar`,
  description: project.description,
}

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "contribution", label: "My contribution" },
  { id: "problem", label: "Problem" },
  { id: "workflow", label: "Workflow" },
  { id: "architecture", label: "Architecture" },
  { id: "evaluation", label: "Evaluation" },
  { id: "traceability", label: "Traceability" },
  { id: "challenges", label: "Challenges" },
  { id: "results", label: "Results" },
]

const HERO_TAGS = ["Java", "Helidon SE", "OCI Generative AI", "RAG", "Citation Traceability", "Human-in-the-Loop", "Gemini"]
const HERO_TAGS_MORE = project.techStack.filter((t) => !HERO_TAGS.includes(t)).length

const PROOF_STRIP = [
  { value: "Reported 55–60%", label: "time saved, per an Oracle SQE colleague" },
  { value: "Reviewable", label: "source traceability, citation to test case" },
  { value: "Internal platform", label: "in use by the JMS SQE team" },
]

const WORKFLOW_STEPS = [
  "Describes the JMS feature.",
  "Selects a testing area such as UI or API.",
  "Selects Auto, HITL or SuperHuman.",
  "Reviews the generated specification and its source traceability.",
  "Exports the approved specification.",
]

const MODES = [
  { heading: "Auto", copy: "Runs the complete pipeline and presents the final test specification." },
  { heading: "HITL", copy: "Pauses at each stage so the reviewer can inspect, edit or approve the intermediate output." },
  { heading: "SuperHuman", copy: "Exposes every processing layer and allows the reviewer to modify the input passed into the next stage." },
]

const ARCHITECTURE_FLOW = [
  "Source documents",
  "OCI Knowledge Base ingestion and vectorization",
  "Initial evidence retrieval via the agent's RAG tool",
  "Citations and evidence facts",
  "Requirements",
  "Testable assertions",
  "Batched test-case generation",
  "Traceability validation and human approval",
  "DOCX export",
]

const ARCH_TAGS = ["OCI Knowledge Base", "LangChain4j", "Grok", "RAGAS", "LLM-as-judge"]

const CHALLENGES = [
  {
    heading: "Detecting unsupported claims before they reach the reviewer",
    problem: "A fluent test specification can include a requirement that sounds plausible but isn't actually backed by the source material, and that's hard for a reviewer to catch on read-through alone.",
    decision: "Added a verification step at every link in the citation chain, plus automated citation validation, so an unsupported claim is flagged where it appears rather than carried forward.",
    result: "Reduces the risk that an unsupported requirement reaches the final specification unreviewed.",
  },
  {
    heading: "One-shot generation breaks down on real documentation",
    problem: "Long, scattered source material makes single-prompt generation drop requirements and compound errors in ways that are hard to spot.",
    decision: "Decomposed generation into five staged artifacts, citations, facts, requirements, assertions, tests, each independently reviewable, with duplicate detection and coverage-gap scoring surfacing anything that fell through.",
    result: "Errors are caught at the stage where they're introduced instead of propagating into the final spec.",
  },
  {
    heading: "Matching oversight to the stakes",
    problem: "A routine feature and a high-scrutiny release document don't need the same level of review, but the tool only had one workflow.",
    decision: "Built three modes, Auto end-to-end, HITL with review checkpoints between every stage, and SuperHuman with full preview and run control.",
    result: "Reviewer effort scales with how much scrutiny a given spec actually needs.",
  },
]

const BEFORE_AFTER = [
  { aspect: "Time per spec", before: "Hours of reading and synthesis", after: "Reported 55–60% saving on the most time-consuming part" },
  { aspect: "Traceability", before: "Hand-maintained, decays over time", after: "Built-in evidence chain for reviewer verification" },
  { aspect: "Coverage risk", before: "Easy to miss scattered requirements", after: "Systematic decomposition across stages" },
  { aspect: "Audit-readiness", before: "Reconstructed after the fact", after: "Native and navigable" },
]

const RESULTS = [
  { value: "Reported 55–60% time saving", label: "An Oracle SQE colleague estimated a 55–60% reduction in the most time-consuming part of preparing a JMS 11 test specification." },
  { value: "Reviewable source traceability", label: "Generated tests could be inspected through the chain of assertion, requirement, fact, citation and source document." },
  { value: "Internal enterprise implementation", label: "The accepted proof of concept was expanded into an internal application for the JMS SQE workflow." },
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

const prose = "text-[15px] leading-7 text-muted-foreground"

export default function JmsAiToolkitPage() {
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
              href="#results"
              className="inline-flex items-center gap-1.5 rounded-full border border-green/20 bg-green/10 px-3 py-1 text-xs font-medium text-green transition-colors hover:bg-green/20"
            >
              <MessageSquareQuote className="h-3.5 w-3.5" />
              Testimonial
            </a>
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
                An internal platform built for Oracle&rsquo;s JMS Software Quality Engineering team. It retrieves
                evidence from product documentation, derives requirements and testable assertions in reviewable
                stages, and generates test cases with traceability back to the supporting source passages. I began
                with a proof of concept, presented it to the SQE team, and then developed the enterprise
                implementation after the concept was accepted.
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
                {PROOF_STRIP.map((item) => (
                  <div key={item.value}>
                    <p className="text-base font-semibold leading-tight text-orange">{item.value}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <Section eyebrow="MY ROLE" title="From proof of concept to internal platform" id="contribution">
          <p className={prose}>
            I first developed the idea as a proof of concept and presented it to Oracle&rsquo;s JMS Software
            Quality Engineering team. Following positive feedback, I expanded it into a complete internal
            implementation designed for real test-specification workflows.
          </p>
          <p className={prose}>
            I designed and implemented the product workflow, staged generation pipeline, OCI Generative AI
            integration, knowledge-base retrieval, human-review modes, citation traceability, evaluation workflow
            and enterprise backend. The original Spring Boot backend was later migrated to Helidon SE to align
            with Oracle&rsquo;s supported stack.
          </p>
        </Section>

        <Section eyebrow="THE PROBLEM" title="Manual test specs don't scale, and one-shot generation doesn't fix it" id="problem">
          <p className={prose}>
            Writing a JMS test specification means reading across PRDs, architecture docs, LiveLabs tutorials and
            feature tickets, then manually deriving requirements and test cases from all of it. Requirements
            scattered across documents get missed, and a traceability mapping maintained by hand is tedious to
            build and the first thing to decay. Asking a model to generate the whole spec in one shot doesn&rsquo;t
            solve this either: it can produce a fluent, plausible-looking spec with requirements that aren&rsquo;t
            actually supported by the source material, and no way to check where any of it came from.
          </p>
          <p className={cn(prose, "text-sm italic")}>
            Target user: a JMS test engineer at the start of a release, working through a pile of feature
            documentation, who needs a complete, reviewable spec without losing the thread back to the source.
          </p>
        </Section>

        <Section eyebrow="PRODUCT WORKFLOW" title="Three modes of oversight, matched to the stakes" id="workflow">
          <p className={prose}>The user:</p>
          <ol className={cn("list-decimal space-y-1.5 pl-5", prose)}>
            {WORKFLOW_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {MODES.map((mode) => (
              <div key={mode.heading} className="rounded-xl border border-neutral-200/80 p-4">
                <h3 className="text-sm font-semibold text-foreground">{mode.heading}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{mode.copy}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="SYSTEM DESIGN" title="Retrieve once, then carry evidence through focused stages" id="architecture">
          <p className={prose}>
            The retrieval agent queries the OCI Knowledge Base at the beginning of the workflow. The resulting
            evidence and citations are then carried through a series of focused prompts. Each downstream stage
            operates on the reviewed output of the previous stage, preserving context without repeatedly
            retrieving new material.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {ARCHITECTURE_FLOW.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-center text-xs font-semibold text-blue-900">
                  {step}
                </span>
                {i < ARCHITECTURE_FLOW.length - 1 ? <span aria-hidden className="text-neutral-400">→</span> : null}
              </div>
            ))}
          </div>

          <p className={prose}>
            The backend is Java on Helidon SE (migrated from an initial Spring Boot implementation to align with
            Oracle&rsquo;s supported stack), orchestrating retrieval and generation with LangChain4j. Gemini and
            Grok are both accessed through OCI Generative AI API calls for different pipeline stages. Downstream
            of the LLM stages, deterministic Java services validate citation ranges, check coverage and
            duplicates, and score continuity across the chain before a spec is finalized.
          </p>

          <div className="flex flex-wrap gap-2">
            {ARCH_TAGS.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-md bg-blue/8 px-2.5 py-1 text-xs font-medium text-blue">
                {tag}
              </span>
            ))}
          </div>

          <DocFigure
            visual={{
              title: "System architecture",
              caption: "End-to-end architecture across frontend, orchestration, retrieval, generation, validation, storage and export.",
              src: "/projects/jms-test-spec-generator/test-spec-generator-arch.png",
              alt: "System architecture diagram for JMS Test Specification Generator",
            }}
          />
        </Section>

        <Section eyebrow="EVALUATION" title="Evaluation and validation" id="evaluation">
          <p className={prose}>
            I evaluated the system using a reference set created from existing JMS test specifications and their
            supporting source documents. The generated artifacts could therefore be compared with specifications
            already used for testing rather than being judged only for fluency.
          </p>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Automated evaluation</h3>
            <p className={cn("mt-1.5", prose)}>
              RAGAS-based metrics provided supporting signals for retrieval relevance, context coverage,
              faithfulness and factual correctness. Gemini and Grok were accessed through OCI Generative AI API
              calls and evaluated using the reference cases while the surrounding retrieval and traceability
              workflow remained consistent.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Human evaluation</h3>
            <p className={cn("mt-1.5", prose)}>
              Automated scores were not treated as final approval. In Human-in-the-Loop mode, reviewers could
              approve, edit or reject citations, facts, requirements, testable assertions and final test cases.
              Deterministic checks also verified that downstream artifacts retained links to their supporting
              evidence. Human SQE judgment remained the final quality gate.
            </p>
            <p className={cn("mt-1.5", prose)}>
              LLM-as-judge scoring was used as a stage-level diagnostic signal to identify outputs requiring
              closer review; it did not replace SQE approval.
            </p>
          </div>
        </Section>

        <Section eyebrow="TRACEABILITY" title="Every test traces back to its source" id="traceability">
          <p className={prose}>
            The application includes a traceability screen connecting source document, citation, fact,
            requirement, testable assertion and test case. A reviewer can click any test and walk the chain back
            to the exact passage it came from.
          </p>
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Mini trace explorer · Illustrative pipeline example
            </p>
            <TraceExplorer />
          </div>
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

        <Section eyebrow="RESULTS" title="What changed" id="results">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {RESULTS.map((result) => (
              <div key={result.value} className="rounded-xl border border-neutral-200/80 p-4">
                <p className="text-lg font-semibold leading-tight text-orange">{result.value}</p>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{result.label}</p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-xl border border-neutral-200/80">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-neutral-200/80 bg-neutral-50 text-left">
                  <th className="px-4 py-2 font-medium text-muted-foreground"></th>
                  <th className="px-4 py-2 font-medium text-muted-foreground">Manual process</th>
                  <th className="px-4 py-2 font-medium text-muted-foreground">With the generator</th>
                </tr>
              </thead>
              <tbody>
                {BEFORE_AFTER.map((row) => (
                  <tr key={row.aspect} className="border-b border-neutral-200/60 last:border-0">
                    <td className="px-4 py-3 font-medium text-foreground">{row.aspect}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.before}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
                {testimonial.date ? ` · ${testimonial.date}` : ""}
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
