import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, FlaskConical, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { getProjectById } from "@/data/projects"
import { DocFigure } from "@/components/projects/doc-figure"

const project = getProjectById("hdb-resale-xai")!
const IMG = "/projects/propertylens"
const REPO_URL = "https://github.com/cloudriver-yc/PropertyLens"
const DEMO_VIDEO_ID = "MOw4ViujnxU"
const DESIGN_VIDEO_ID = "DreQUlIwX9I"

export const metadata: Metadata = {
  title: `${project.title} | Bhuvesh Kumar`,
  description: project.description,
}

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "evidence", label: "Evidence" },
  { id: "team", label: "Team and my contribution" },
  { id: "problem", label: "Problem" },
  { id: "demo", label: "Demo" },
  { id: "what-the-team-built", label: "What the team built" },
  { id: "model-and-xai", label: "My model and XAI work" },
  { id: "architecture", label: "Architecture" },
  { id: "evaluation", label: "Evaluation" },
  { id: "challenges", label: "Challenges" },
  { id: "limitations", label: "Limitations" },
  { id: "results", label: "Results" },
]

const HERO_TAGS = ["Python", "React", "FastAPI", "XGBoost / LightGBM", "SHAP", "Neo4j"]

const EVIDENCE = [
  { value: "3.92% test MAPE", copy: "Measured on transactions from January 2025 onward." },
  { value: "~900k transactions", copy: "Public HDB resale records used in the data pipeline." },
  { value: "4 explanation methods", copy: "TreeSHAP, case-based reasoning, counterfactuals, and surrogate rules." },
  { value: "3-person capstone team", copy: "My scope: frontend, hybrid modelling, and XAI." },
]

const MY_WORK = ["React frontend and product experience", "Hybrid cluster-stack model", "Composite TreeSHAP and the broader XAI layer"]
const TEAM_SYSTEM = ["FastAPI platform", "Neo4j chatbot", "Photo-condition CNN", "Chrome extension", "Data and supporting services"]

const USERS = [
  { who: "Buyers", need: "Assess an asking price and understand the evidence behind an estimate." },
  { who: "Sellers", need: "Explore pricing drivers and an evidence-based asking-price range." },
  { who: "Property agents", need: "Present comparable transactions and model explanations in a client-friendly format." },
]

const CAPABILITIES = [
  { heading: "Buyer valuation flow", copy: "Compares an asking price with the model estimate and recent comparable sales, then walks through the evidence." },
  { heading: "Seller pricing flow", copy: "Shows pricing drivers and an estimated price range to inform an asking price." },
  { heading: "Shortlist comparison", copy: "Up to three flats side by side on pricing, schools, transport and lifestyle, with amenity overlays on a map." },
  { heading: "Four complementary explanation methods", copy: "Per-feature drivers, comparable cases, counterfactual offer scenarios and interpretable market rules on each estimate." },
  { heading: "An inspectable knowledge-graph chatbot", copy: "A three-stage pipeline extracts structured parameters, executes parameterised Cypher against Neo4j, and generates a narrative grounded in the returned rows. The interface exposes inferred parameters and retrieved results so users can inspect why a result appeared." },
  { heading: "Chrome extension", copy: "An academic integration prototype that carries listing details from a PropertyGuru page into the PropertyLens valuation flow. PropertyLens is not affiliated with PropertyGuru." },
  { heading: "React application with 11 views", copy: "The product surface that ties the buyer, seller, shortlist, insight and chatbot flows together." },
]

const MODEL_STEPS = [
  { label: "Single XGBoost", value: "12.18% MAPE" },
  { label: "Non-clustered stacked ensemble", value: "6.21% MAPE" },
  { label: "Three-cluster routed stack", value: "3.92% MAPE" },
]

const XAI_METHODS = [
  { heading: "Composite TreeSHAP", copy: "Per-feature drivers for the routed cluster's tree learners, combined using the meta-learner's coefficients." },
  { heading: "Case-based reasoning", copy: "Comparable past sales retrieved with a strict recency cascade, so stale comparables are not shown." },
  { heading: "Counterfactual offer scenarios", copy: "What-if scenarios that show how an estimate moves when inputs change, to support offer planning." },
  { heading: "Apriori-mined surrogate rules", copy: "Interpretable market rules used as a plain-language sanity check on the estimate." },
]

const TIERS = [
  { label: "Data", copy: "~900k public transactions plus amenity data" },
  { label: "Feature engineering", copy: "8 user inputs expanded to 77 model features" },
  { label: "Hybrid model", copy: "K-means routing into per-cluster ensembles" },
  { label: "Explainability", copy: "Composite TreeSHAP, CBR, counterfactuals, and rules" },
  { label: "Knowledge-graph chatbot", copy: "Neo4j with parameterised Cypher and local Gemma3" },
  { label: "Product interfaces", copy: "FastAPI, React, and Chrome extension" },
]

const EVALUATION = [
  {
    component: "Valuation model",
    set: "Temporal test set from January 2025 onward",
    metric: "MAPE, R² and MAE",
    result: "3.92%, 0.9644 and S$26,104",
    limitation: "Academic dataset evaluation; no comparison against commercial AVMs on identical properties",
  },
  {
    component: "Composite TreeSHAP",
    set: "100-case stratified validation suite",
    metric: "Tree-stack additivity",
    result: "100/100 passed; median error 0.00003%",
    limitation: "Ridge contribution excluded and shown separately; median gap 0.07%",
  },
  {
    component: "Knowledge-graph search",
    set: "25 internally constructed stress cases",
    metric: "Strict pass rubric",
    result: "20 pass, 3 partial, 2 fail",
    limitation: "Small internal test set",
  },
  {
    component: "Chatbot capability suite",
    set: "11 end-to-end cases",
    metric: "Pass/fail and BERTScore",
    result: "11/11 passed; F1 above 0.85",
    limitation: "Small internally defined suite",
  },
  {
    component: "Photo-condition model",
    set: "200 held-out LSUN/LAION proxy images",
    metric: "MAE",
    result: "0.483 on a 0–10 proxy scale",
    limitation: "No labelled HDB-interior validation set",
  },
  {
    component: "Latency",
    set: "Local development environment",
    metric: "End-to-end response time",
    result: "Buyer payload 0.8–1.2 seconds; full RAG 5.2–7.8 seconds",
    limitation: "Measured locally on an M2 Pro MacBook with 16GB RAM",
  },
]

const CHALLENGES = [
  {
    heading: "Temporal leakage discipline",
    owner: "Team",
    challenge: "Random train/test splits leak future prices and inflate scores.",
    solution:
      "We enforced a strict temporal split: training on transactions before 2024, validation on 2024, and testing from January 2025 onward. Every architecture comparison in this project uses that same design.",
  },
  {
    heading: "Attribution over a mixed tree and linear stack",
    owner: "My work",
    challenge: "Off-the-shelf explainers do not handle a cluster-routed stack that mixes tree learners with a linear Ridge learner.",
    solution:
      "I route the query to its cluster, run TreeSHAP on each tree learner, and combine the per-model values using the meta-learner's coefficients. The tree-stack portion reconstructs at numerical precision; the Ridge component is excluded from the SHAP sum and shown separately as a reconciliation term.",
  },
  {
    heading: "Keeping comparables recent",
    owner: "My work",
    challenge: "Naive nearest-neighbour retrieval returns stale comparables, and HDB prices have moved sharply since 2020.",
    solution:
      "The case-based reasoning layer uses a strict recency cascade (same town and same year, then same town within 24 months, then any town within 24 months) and does not widen further, accepting fewer results over systematically biased ones.",
  },
  {
    heading: "Making chatbot retrieval inspectable",
    owner: "Team",
    challenge: "A fluent answer is not useful for a purchase decision if the user cannot see where it came from.",
    solution:
      "The team constrained the LLM to parameter extraction and narrative synthesis, with deterministic parameterised Cypher in between, and exposed the inferred parameters and returned rows in the interface.",
  },
  {
    heading: "Training the photo signal on a proxy dataset",
    owner: "Team",
    challenge: "No labelled HDB-interior condition dataset was available, so the photo model never saw an HDB interior in training.",
    solution:
      "The team treated the condition score as experimental and kept its rule-based price adjustment bounded and overridable, because the training distribution does not match real listing photos.",
  },
]

const LIMITATIONS = [
  "No study with real buyers, sellers, or property agents",
  "No head-to-head comparison with SRX X Value or HomerAI on the same properties",
  "Photo model trained on a proxy distribution rather than labelled HDB interiors",
  "English-only chatbot",
  "Local LLM and development infrastructure (SQLite, local Neo4j and Ollama, developer-mode Chrome extension)",
  "No production monitoring or continuous retraining",
  "No demonstrated fairness assessment across demographic groups",
  "No calibrated prediction-interval coverage metric; the displayed band is an estimated price range",
]

const RESULTS = [
  { value: "3.92% MAPE", copy: "on the temporal test set" },
  { value: "68% relative MAPE reduction", copy: "against the single-XGBoost baseline" },
  { value: "37% reduction", copy: "against the evaluated non-clustered stack" },
  { value: "100/100 tree-stack additivity checks passed", copy: "Median reconstruction error 0.00003%; Ridge contribution disclosed separately." },
  { value: "20/25 strict chatbot stress-case passes", copy: "with 3 partial and 2 fail, on an internal suite" },
  { value: "11/11 capability-suite passes", copy: "a small internal project evaluation" },
  { value: "0.8–1.2 seconds buyer payload latency", copy: "on the documented local machine" },
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

function Video({ id, title }: { id: string; title: string }) {
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        If the player does not load,{" "}
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("font-medium text-foreground underline underline-offset-4 hover:text-orange", FOCUS)}
        >
          watch it on YouTube ↗
        </a>
        . The page does not depend on the video.
      </p>
    </div>
  )
}

const FOCUS = "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
const prose = "text-[15px] leading-7 text-muted-foreground"
const h3 = "text-base font-semibold text-foreground"

export default function PropertyLensPage() {
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
              Working prototype
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
            PropertyLens is a working NUS-ISS capstone prototype that helps HDB buyers and sellers estimate resale
            value and understand the factors behind a prediction. Built on roughly 900,000 public transactions, its
            cluster-routed ensemble achieved 3.92% MAPE on a temporal test set. In our three-person team, I owned
            the React frontend, hybrid cluster-stack model, and explainability layer.
          </p>
          <p className="mt-3 max-w-3xl border-l-2 border-neutral-300 pl-3 text-sm text-muted-foreground">
            Academic prototype — not an official property valuation or financial-advice service.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {HERO_TAGS.map((tag) => (
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
          <div>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the PropertyLens team repository on GitHub (opens in a new tab)"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Github className="h-4 w-4" />
              View team repository on GitHub ↗
            </a>
            <p className="mt-2 text-xs text-muted-foreground">
              This is the three-person team&rsquo;s project repository, not a personal repository. Data source: public
              HDB resale transactions from data.gov.sg.
            </p>
          </div>
        </Section>

        <Section eyebrow="OWNERSHIP" title="Team and my contribution" id="team">
          <p className={prose}>
            PropertyLens was built by a three-person team for the NUS-ISS Intelligent Reasoning Systems practice
            module.
          </p>
          <div>
            <h3 className={h3}>My contribution</h3>
            <p className={cn("mt-1.5", prose)}>
              I designed and developed the React product experience, implemented the hybrid cluster-stack valuation
              model, and built the explainability layer that translates model output into per-feature drivers,
              comparable cases, counterfactual scenarios, and interpretable market rules.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-foreground">My work</h3>
              <ul className={cn("mt-1.5 list-disc space-y-1 pl-5", prose)}>
                {MY_WORK.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Team system</h3>
              <ul className={cn("mt-1.5 list-disc space-y-1 pl-5", prose)}>
                {TEAM_SYSTEM.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section eyebrow="PROBLEM AND USERS" title="Public data, but no explainable decision workflow" id="problem">
          <p className={prose}>
            Public HDB resale data is available, but buyers and sellers still need to combine transaction history,
            lease information, nearby amenities, comparable sales, and pricing drivers manually. Listing portals
            support property discovery, but they do not bring an explainable valuation, comparable evidence, offer
            planning, and side-by-side shortlist analysis into one workflow.
          </p>
          <p className={prose}>
            PropertyLens explored whether an explainable machine-learning system could turn public transaction data
            into a more transparent decision-support experience.
          </p>
          <dl className="divide-y divide-neutral-200/70 rounded-xl border border-neutral-200/80">
            {USERS.map((user) => (
              <div key={user.who} className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:gap-4">
                <dt className="text-sm font-semibold text-foreground sm:w-36 sm:shrink-0">{user.who}</dt>
                <dd className="text-sm leading-6 text-muted-foreground">{user.need}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section eyebrow="PRODUCT DEMO" title="A short look at the prototype" id="demo">
          <div className="max-w-2xl">
            <Video id={DEMO_VIDEO_ID} title="PropertyLens product demo video showing the buyer, seller and shortlist flows" />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <DocFigure
              visual={{
                title: "Buyer view",
                caption: "Buyer view: the asking price beside the model estimate, its estimated price range, and the median of recent comparable sales. Demo account and public listing details.",
                src: `${IMG}/buyer-view-verdict.png`,
                alt: "PropertyLens Buyer view comparing a flat's asking price with the model estimate and the median of five comparable recent sales, with a plain-language summary above the bars",
              }}
            />
            <DocFigure
              visual={{
                title: "Shortlist comparison",
                caption: "Shortlist view: three flats compared on pricing, schools, transport and lifestyle, with amenity overlays on the map.",
                src: `${IMG}/shortlist-compare.png`,
                alt: "PropertyLens Shortlist view with a comparison table for three flats covering pricing, schools, transport and lifestyle, next to a map with school markers around each flat",
              }}
            />
          </div>
        </Section>

        <Section eyebrow="THE SYSTEM" title="What the team built" id="what-the-team-built">
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {CAPABILITIES.map((item) => (
              <div key={item.heading}>
                <h3 className="text-sm font-semibold text-foreground">{item.heading}</h3>
                <p className="mt-0.5 text-sm leading-6 text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className={h3}>An experimental photo-condition signal</h3>
            <p className={cn("mt-1.5", prose)}>
              The team trained an EfficientNet-B0 regressor on LSUN bedroom images labelled with LAION aesthetic
              scores. It achieved a validation MAE of 0.483 on 200 held-out proxy images. Because this was not a
              labelled HDB-interior dataset, the resulting condition score was treated as experimental and its
              rule-based price adjustment was bounded and overridable.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Also used across the team system: EfficientNet, Ollama, a Chrome extension, Random Forest, Ridge and
            Tailwind CSS.
          </p>
        </Section>

        <Section eyebrow="MY CONTRIBUTION" title="The hybrid model and the explainability layer" id="model-and-xai">
          <div>
            <h3 className={h3}>Hybrid cluster-stack model</h3>
            <ol className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {MODEL_STEPS.map((step, i) => (
                <li key={step.label} className={cn("rounded-xl border p-4", i === 2 ? "border-orange/40 bg-orange/5" : "border-neutral-200/80")}>
                  <p className="text-sm font-medium text-foreground">{step.label}</p>
                  <p className={cn("mt-1 text-lg font-semibold", i === 2 ? "text-orange" : "text-foreground")}>{step.value}</p>
                </li>
              ))}
            </ol>
            <p className={cn("mt-3", prose)}>
              The hybrid model achieved a 67.8%, rounded to 68%, relative reduction in MAPE against the
              single-XGBoost baseline and a 36.9%, rounded to 37%, reduction against the non-clustered stack on the
              same temporal evaluation design. The best non-clustered stack evaluated in this project achieved 6.21%
              MAPE.
            </p>
            <ul className={cn("mt-2 list-disc space-y-1 pl-5", prose)}>
              <li>Training: transactions before 2024</li>
              <li>Validation: 2024</li>
              <li>Test: January 2025 onward</li>
            </ul>
            <p className={cn("mt-2", prose)}>
              The clusters showed different learner-weight and error profiles that were consistent with
              interpretable submarket patterns.
            </p>
          </div>

          <div className="max-w-2xl">
            <DocFigure
              visual={{
                title: "Per-cluster ensemble",
                caption: "Each K-means cluster trains Ridge, XGBoost, LightGBM and Random Forest base learners, stacked under a Ridge meta-learner.",
                src: `${IMG}/expert-ensemble.png`,
                alt: "Diagram of a per-cluster ensemble with four base learners, Ridge, XGBoost, LightGBM and Random Forest, feeding a Ridge meta-learner",
              }}
            />
          </div>

          <div>
            <h3 className={h3}>Explainability layer</h3>
            <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
              {XAI_METHODS.map((item) => (
                <div key={item.heading}>
                  <p className="text-sm font-semibold text-foreground">{item.heading}</p>
                  <p className="mt-0.5 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                </div>
              ))}
            </div>
            <p className={cn("mt-3", prose)}>
              Composite TreeSHAP reconstructed the tree-stack portion of the prediction at numerical precision across
              the 100-case validation suite. The linear Ridge component was excluded from the SHAP sum and shown
              separately as a reconciliation term; its median gap was 0.07%.
            </p>
          </div>

          <div className="max-w-2xl">
            <DocFigure
              visual={{
                title: "Price drivers for one estimate",
                caption: "Driver waterfall for one estimate. The chart sums to the tree-stack prediction, and the Ridge linear term is listed on its own line beneath it before the final hybrid estimate.",
                src: `${IMG}/price-drivers-waterfall.png`,
                alt: "Waterfall chart of the top five price drivers for one flat, market timing, floor size, remaining lease, number of rooms and mall access, followed by a breakdown that lists the tree-stack composite prediction, a separate Ridge linear term and the final hybrid model estimate",
              }}
            />
          </div>
        </Section>

        <Section eyebrow="SYSTEM ARCHITECTURE" title="Six tiers, decoupled by versioned artefacts" id="architecture">
          <ol
            aria-label="Six-tier flow from data to product interfaces"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"
          >
            {TIERS.map((tier, i) => (
              <li key={tier.label} className="rounded-xl border border-neutral-200/80 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Tier {i + 1}
                  {i < TIERS.length - 1 ? <span aria-hidden> →</span> : null}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">{tier.label}</p>
                <p className="mt-0.5 text-sm leading-6 text-muted-foreground">{tier.copy}</p>
              </li>
            ))}
          </ol>
          <p className={prose}>
            The tiers are decoupled by serialized, versioned artefacts that load once at backend startup; nothing
            trains online. Predictions can be reproduced from versioned data and model artefacts, with the loaded
            versions exposed through the model metadata endpoint.
          </p>
          <div className="max-w-2xl">
            <h3 className={cn(h3, "mb-3")}>System-design walkthrough (longer video)</h3>
            <Video id={DESIGN_VIDEO_ID} title="PropertyLens system-design walkthrough video covering the six-tier architecture" />
          </div>
        </Section>

        <Section eyebrow="EVALUATION" title="Evaluation methodology" id="evaluation">
          <p className={prose}>
            Each component was evaluated on its own terms. These are separate measurements and should not be read as
            one combined system score.
          </p>
          <div className="overflow-x-auto rounded-xl border border-neutral-200/80" tabIndex={0} role="region" aria-label="Evaluation methodology table, scrollable on small screens">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200/80 bg-neutral-50">
                  {["Component", "Evaluation set", "Metric", "Result", "Important limitation"].map((head) => (
                    <th key={head} scope="col" className="px-3 py-2 font-medium text-muted-foreground">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {EVALUATION.map((row) => (
                  <tr key={row.component} className="border-b border-neutral-200/60 align-top last:border-0">
                    <th scope="row" className="px-3 py-3 font-semibold text-foreground">{row.component}</th>
                    <td className="px-3 py-3 text-muted-foreground">{row.set}</td>
                    <td className="px-3 py-3 text-muted-foreground">{row.metric}</td>
                    <td className="px-3 py-3 font-medium text-foreground">{row.result}</td>
                    <td className="px-3 py-3 text-muted-foreground">{row.limitation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className={h3}>Knowledge-graph chatbot evaluation</h3>
            <ul className={cn("mt-2 list-disc space-y-1 pl-5", prose)}>
              <li>Knowledge graph: 20 PASS, 3 PARTIAL, 2 FAIL</li>
              <li>Strict pass rate: 80% across 25 cases</li>
              <li>Vector alternative: 15 PASS out of 25, or 60%</li>
              <li>The largest advantage appeared in graph traversal and intentionally impossible-query categories</li>
            </ul>
            <p className={cn("mt-2", prose)}>
              All 11 internally defined end-to-end capability cases passed, with BERTScore F1 above 0.85. This was a
              small project validation suite rather than an external benchmark.
            </p>
          </div>
        </Section>

        <Section eyebrow="UNDER THE HOOD" title="Technical challenges" id="challenges">
          <div className="space-y-6">
            {CHALLENGES.map((item) => (
              <div key={item.heading}>
                <h3 className={h3}>
                  {item.heading}{" "}
                  <span className="ml-1 align-middle font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {item.owner}
                  </span>
                </h3>
                <p className={cn("mt-1.5", prose)}>
                  <span className="font-medium text-foreground">The challenge: </span>
                  {item.challenge}
                </p>
                <p className={cn("mt-1.5", prose)}>
                  <span className="font-medium text-foreground">The approach: </span>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="LIMITATIONS" title="Limitations" id="limitations">
          <ul className={cn("list-disc space-y-1.5 pl-5", prose)}>
            {LIMITATIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={prose}>
            Explainability helps users inspect a model&rsquo;s output, but it does not by itself establish fairness.
          </p>
        </Section>

        <Section eyebrow="RESULTS" title="Results and evidence" id="results">
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
              The project demonstrated, within its academic evaluation, that cluster-aware modelling improved
              performance over the baselines tested, that detailed per-prediction explanations could be delivered
              within the local latency budget, and that structured knowledge-graph retrieval was more reliable than
              the evaluated vector alternative for filter-heavy property queries.
            </p>
          </div>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the PropertyLens team repository on GitHub (opens in a new tab)"
            className={cn("inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 hover:text-orange", FOCUS)}
          >
            <Github className="h-4 w-4" />
            View team repository on GitHub ↗
          </a>
        </Section>
      </div>
    </section>
  )
}
