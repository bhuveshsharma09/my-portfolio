import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, FileText, FlaskConical } from "lucide-react"
import { cn } from "@/lib/utils"
import { getProjectById } from "@/data/projects"

const project = getProjectById("explainable-ai-web-app")!
const SLIDES = "/projects/explainable-ai-web-app/explainable-ai-presentation.pdf"

export const metadata: Metadata = {
  title: `${project.title} | Bhuvesh Kumar`,
  description: project.description,
}

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The problem" },
  { id: "users", label: "Who it was for" },
  { id: "what-i-built", label: "What I built" },
  { id: "data-explanation", label: "Data explanation" },
  { id: "model-explanation", label: "Model explanation" },
  { id: "workflow", label: "User workflow" },
  { id: "architecture", label: "Architecture" },
  { id: "challenges", label: "Challenges" },
  { id: "results", label: "Evaluation" },
  { id: "limitations", label: "Limitations" },
  { id: "why-it-matters", label: "Why it matters" },
]

const META = [
  { term: "Context", copy: "Final-year project and A*STAR research collaboration" },
  { term: "Focus", copy: "Explainable AI, data exploration, model interpretation and interaction design" },
  { term: "Status", copy: "Research prototype" },
]

const PROBLEMS = [
  "Explanation workflows were gated behind code.",
  "Different questions required separate scripts and visualizations.",
  "Static plots made it difficult to explore counterfactual questions such as what happens when an input value changes.",
]

const DATA_SUMMARY = [
  "Upload and explore a prepared dataset.",
  "Visualize the data using two-component PCA.",
  "Explore a three-component PCA representation.",
  "Use t-SNE to investigate nonlinear structure and clustering.",
]

const MODEL_SUMMARY = [
  "Upload a trained model and prepared test data.",
  "Inspect global feature importance.",
  "Explore individual prediction contributions.",
  "Review partial-dependence behaviour.",
  "Modify feature inputs in a what-if interface and observe how the explanation changes.",
  "Access a combined interactive explanation dashboard.",
]

const DATA_SERVICES = [
  {
    heading: "Data exploration",
    copy: "An uploaded CSV file is plotted as an interactive scatter chart. The user picks columns for the x axis, y axis, colour, and row and column facets, so up to five dimensions can be compared in one view.",
  },
  {
    heading: "PCA with two components",
    copy: "The dataset is projected onto two principal components and shown as a 2D scatter plot, giving a quick view of overall structure.",
  },
  {
    heading: "PCA with three components",
    copy: "The same projection with three components, shown as a rotatable 3D scatter plot.",
  },
  {
    heading: "t-SNE in 3D",
    copy: "A three-component t-SNE embedding for investigating nonlinear structure and clustering that PCA can miss.",
  },
]

const MODEL_SERVICES = [
  {
    heading: "Global explanation",
    copy: "A SHAP summary plot and permutation importance (eli5) show which features matter most across the test data. A shallow surrogate decision tree, fitted to the model's own predictions, gives a readable approximation of its behaviour.",
  },
  {
    heading: "Local explanation",
    copy: "The user selects a row of the test data in a table and sees a SHAP force plot of how each feature pushed that prediction up or down.",
  },
  {
    heading: "Partial dependence",
    copy: "For the two regression configurations, the global view includes a 3D partial-dependence surface (pdpbox with Plotly) showing how the prediction changes as two features vary together. The combined dashboard also includes partial-dependence views for individual predictions.",
  },
  {
    heading: "What-if analysis",
    copy: "An editable table starts from the mean value of each feature. When the user changes a value, the application builds a new instance and redraws the SHAP force plot for it.",
  },
  {
    heading: "Combined dashboard",
    copy: "For the random forest regression configuration, the open-source ExplainerDashboard library is launched alongside the main application, with tabs for feature importances, individual predictions and what-if analysis.",
  },
]

const WORKFLOW = [
  "Train the model outside the application.",
  "Prepare the model and test data.",
  "Upload the required files to the research application.",
  "Choose a data- or model-explanation workflow.",
  "Explore global, local or what-if visualizations interactively.",
]

const EXPLAINER_ROUTING = [
  { config: "Regression", explainer: "shap.Explainer", note: "General SHAP explainer built from the model and test data" },
  { config: "Random forest regressor", explainer: "shap.TreeExplainer", note: "Tree-specific explainer; also unlocks the combined dashboard" },
  { config: "Classifier", explainer: "shap.KernelExplainer", note: "Kernel explainer over the model's predicted probabilities" },
]

const IMPLEMENTATION = [
  {
    heading: "Flask shell, Dash visualizations",
    copy: "Flask serves the landing, upload and result pages and handles file uploads. Each interactive view is a separate Dash application mounted on the same Flask server under its own URL prefix and embedded in the result page.",
  },
  {
    heading: "User-declared configuration",
    copy: "On upload, the user chooses a model configuration and an explanation type (global, local, what-if or dashboard). The application uses those two choices to decide which explainer and which view to build.",
  },
  {
    heading: "Threaded dashboard",
    copy: "ExplainerDashboard runs as its own server, so it is started in a background Python thread to keep the main Flask application responsive.",
  },
  {
    heading: "Inputs",
    copy: "Model explanation takes three pickle files: the trained model, the test features and the test targets. Data explanation takes a CSV file.",
  },
]

const CHALLENGES = [
  {
    heading: "Presenting multiple explanation workflows through one consistent interface",
    copy: "Global, local, what-if and dashboard views answer different questions and come from different libraries. I put them behind one upload form with two dropdowns so the user makes the same two decisions every time.",
  },
  {
    heading: "Connecting Flask request handling with interactive Dash visualizations",
    copy: "Uploads arrive as ordinary Flask requests, while the charts are Dash applications with their own callbacks. I mounted the Dash applications on the Flask server and rebuilt their layouts from the uploaded model and data before rendering the result page.",
  },
  {
    heading: "Updating local explanations when users changed feature values",
    copy: "SHAP force plots are static HTML. To make them interactive, a Dash callback listens for table edits or row selections, recomputes the SHAP values, and swaps the new plot into the page.",
  },
  {
    heading: "Designing technical explanation outputs for less-technical users",
    copy: "The global explanation page pairs each chart with a short plain-language description and a link to learn more, the upload page lists the steps in order, and the services are named by the question they answer (global, local, what-if) rather than by library.",
  },
]

const RESULTS = [
  "Delivered interactive data-exploration workflows using PCA and t-SNE.",
  "Delivered global, local and what-if model-explanation workflows.",
  "Enabled users to inspect feature importance, individual prediction contributions and partial-dependence behaviour through a browser interface.",
  "Demonstrated how multiple explanation techniques could be brought into a unified no-code research workflow.",
  "Produced a functional prototype for presentation and evaluation in the A*STAR research-collaboration context.",
]

const LESSONS = [
  "Only three model configurations are handled, and the user has to declare the right one. The application does not detect the model type or check that the uploaded files match each other.",
  "The combined dashboard is wired up for the random forest regression configuration only.",
  "Explanations are recomputed on each interaction, so responsiveness depends on the size of the model and test data.",
  "The repository also contains an experimental LIME route (LimeTabularExplainer in regression mode) that is not linked from the main upload flow, so I do not count it as a delivered feature.",
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

function GroupLabel({ tone, children }: { tone: "data" | "model"; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
        tone === "data" ? "border-blue-200 bg-blue-50 text-blue-900" : "border-violet-200 bg-violet-50 text-violet-900",
      )}
    >
      {children}
    </span>
  )
}

function ServiceCards({ tone, items }: { tone: "data" | "model"; items: { heading: string; copy: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.heading}
          className={cn(
            "rounded-xl border border-l-4 border-neutral-200/80 bg-background p-4",
            tone === "data" ? "border-l-blue-300" : "border-l-violet-300",
          )}
        >
          <h3 className={h3}>{item.heading}</h3>
          <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.copy}</p>
        </div>
      ))}
    </div>
  )
}

const prose = "text-[15px] leading-7 text-muted-foreground"
const h3 = "text-base font-semibold text-foreground"

export default function ExplainableAiDashboardPage() {
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
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.organization}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-blue/20 bg-blue/8 px-3 py-1 text-xs font-medium text-blue">
              <FlaskConical className="h-3.5 w-3.5" />
              Research Prototype
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.period}
            </span>
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

          <p className={cn("mt-8 max-w-3xl", prose)}>
            A final-year research prototype developed in collaboration with A*STAR to make machine-learning
            explanations more accessible to users without specialist XAI programming experience. Users supplied a
            trained model and prepared test data, then explored dimensionality reduction, global feature importance,
            local prediction explanations, partial-dependence views, and editable what-if scenarios through a Flask
            and Dash interface.
          </p>

          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 rounded-xl border border-neutral-200/80 bg-neutral-50/60 p-4 sm:grid-cols-3">
            {META.map((item) => (
              <div key={item.term}>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">{item.term}</dt>
                <dd className="mt-1 text-sm leading-6 text-foreground">{item.copy}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-md bg-blue/8 px-2.5 py-1 text-xs font-medium text-blue">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.links?.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub (opens in a new tab)"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-orange hover:text-orange",
                FOCUS,
              )}
            >
              View source
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={SLIDES}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the project presentation slides, PDF (opens in a new tab)"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-orange hover:text-orange",
                FOCUS,
              )}
            >
              <FileText className="h-4 w-4" aria-hidden />
              View presentation (PDF)
            </a>
          </div>
        </header>

        <Section eyebrow="THE PROBLEM" title="Model explanations were gated behind code" id="problem">
          <p className={prose}>
            Explainability libraries such as SHAP required users to work in code and understand model-specific APIs.
            This made it difficult for researchers, analysts and non-technical stakeholders to investigate how a
            model reached a prediction without help from a programmer.
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {PROBLEMS.map((item) => (
              <li key={item} className="rounded-xl border border-neutral-200/80 bg-neutral-50/60 p-4 text-sm leading-6 text-foreground">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="TARGET USER" title="Who it was for" id="users">
          <p className={prose}>
            The prototype was designed for researchers studying explainability and stakeholders who needed to inspect
            data and model behaviour without writing custom analysis code.
          </p>
        </Section>

        <Section
          eyebrow="WHAT I BUILT"
          title="One interface for exploring data and explaining supported model configurations"
          id="what-i-built"
        >
          <p className={prose}>
            The application is organized as two connected service groups. Each group has its own upload page and its
            own set of interactive views.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-5">
              <GroupLabel tone="data">Data explanation</GroupLabel>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-foreground">
                {DATA_SUMMARY.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-violet-200 bg-violet-50/40 p-5">
              <GroupLabel tone="model">Model explanation</GroupLabel>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-foreground">
                {MODEL_SUMMARY.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section eyebrow="SERVICE GROUP 1" title="Data explanation" id="data-explanation">
          <GroupLabel tone="data">Understand the data first</GroupLabel>
          <p className={prose}>
            The data services help a user see the shape of a dataset before asking questions about a model. PCA and
            t-SNE are dimensionality-reduction techniques for exploring data. They are not model-explanation methods.
          </p>
          <ServiceCards tone="data" items={DATA_SERVICES} />
        </Section>

        <Section eyebrow="SERVICE GROUP 2" title="Model explanation" id="model-explanation">
          <GroupLabel tone="model">Then question the model</GroupLabel>
          <p className={prose}>
            The model services cover three kinds of question: what matters overall, why a single prediction came out
            the way it did, and what would happen if an input changed.
          </p>
          <ServiceCards tone="model" items={MODEL_SERVICES} />
        </Section>

        <Section eyebrow="USER WORKFLOW" title="From trained model to interactive explanation" id="workflow">
          <ol className="space-y-3">
            {WORKFLOW.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange/10 text-sm font-semibold text-orange"
                >
                  {index + 1}
                </span>
                <span className={cn("pt-0.5", prose)}>{step}</span>
              </li>
            ))}
          </ol>
          <p className="max-w-3xl border-l-2 border-neutral-300 pl-3 text-sm leading-6 text-muted-foreground">
            &ldquo;No-code&rdquo; refers to using the explanation interface. A user still needed an already-trained
            model and prepared data.
          </p>
        </Section>

        <Section eyebrow="ARCHITECTURE" title="Architecture and implementation" id="architecture">
          <div
            role="img"
            aria-label="Architecture flow: the user uploads files in the browser, Flask handles the upload and the chosen model configuration and explanation type, the matching explanation library builds the result, and a Dash application mounted on the Flask server renders the interactive view back in the browser."
            className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-4"
          >
            <div className="grid grid-cols-1 items-center gap-2 text-center text-sm font-semibold md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
              <div className="rounded-xl border border-neutral-200 bg-background px-3 py-2 text-foreground">Browser upload form</div>
              <span aria-hidden className="text-neutral-400 md:rotate-0">
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </span>
              <div className="rounded-xl border border-orange/30 bg-orange/10 px-3 py-2 text-foreground">Flask routes and file handling</div>
              <span aria-hidden className="text-neutral-400">
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </span>
              <div className="rounded-xl border border-violet-200 bg-violet-50 px-3 py-2 text-violet-900">SHAP · eli5 · pdpbox · scikit-learn</div>
              <span aria-hidden className="text-neutral-400">
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </span>
              <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-blue-900">Dash and Plotly views</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {IMPLEMENTATION.map((item) => (
              <div key={item.heading}>
                <h3 className={h3}>{item.heading}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>

          <h3 className={cn("pt-2", h3)}>Explainer selection by model configuration</h3>
          <div
            className={cn("overflow-x-auto rounded-xl border border-neutral-200/80", FOCUS)}
            tabIndex={0}
            role="region"
            aria-label="SHAP explainer used for each supported model configuration"
          >
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-neutral-50 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Configuration chosen at upload</th>
                  <th scope="col" className="px-4 py-3 font-semibold">SHAP explainer</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/80">
                {EXPLAINER_ROUTING.map((row) => (
                  <tr key={row.config}>
                    <th scope="row" className="px-4 py-3 font-medium text-foreground">{row.config}</th>
                    <td className="px-4 py-3 font-mono text-[13px] text-foreground">{row.explainer}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            The prototype supports these configurations only. It is not a model-agnostic service.
          </p>
        </Section>

        <Section eyebrow="TECHNICAL CHALLENGES" title="What was hard" id="challenges">
          <div className="space-y-5">
            {CHALLENGES.map((item) => (
              <div key={item.heading}>
                <h3 className={h3}>{item.heading}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="RESULTS" title="Evaluation and demonstrated outputs" id="results">
          <p className={prose}>
            The project was assessed as a working research prototype. There are no usage, adoption or time-saving
            figures to report, so the outcomes below describe what was built and demonstrated.
          </p>
          <p className={prose}>
            The 20-slide project presentation covers the motivation, literature review and each service with
            screenshots.{" "}
            <a
              href={SLIDES}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("font-medium text-orange underline-offset-4 hover:underline", FOCUS)}
            >
              View the presentation (PDF)
            </a>
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-7 text-muted-foreground">
            {RESULTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="LIMITATIONS" title="Limitations and lessons learned" id="limitations">
          <p className={prose}>
            This was a controlled academic research prototype. It accepted serialized models and prepared datasets
            rather than providing a complete model-training workflow. Python pickle files must not be accepted from
            untrusted users because deserialization can execute arbitrary code. A production implementation would
            require safer model formats, isolated processing, authentication, stricter validation and resource
            controls.
          </p>
          <p className={prose}>
            The project demonstrates a workflow and an interface. It does not represent validated production adoption.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
            {LESSONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="WHY IT MATTERS" title="Why it matters" id="why-it-matters">
          <p className={prose}>
            This project introduced me to the engineering and UX challenges of explainable AI: selecting appropriate
            explanation techniques, communicating model behaviour clearly, and giving users an interactive way to test
            their assumptions. Those foundations later informed my work on{" "}
            <Link href="/projects/hdb-resale-xai" className={cn("font-medium text-orange underline-offset-4 hover:underline", FOCUS)}>
              PropertyLens
            </Link>{" "}
            and{" "}
            <Link href="/projects/jms-ai-toolkit" className={cn("font-medium text-orange underline-offset-4 hover:underline", FOCUS)}>
              AI-assisted testing tools
            </Link>
            .
          </p>
        </Section>
      </div>
    </section>
  )
}
