export interface ProjectMetric {
  value: string
  label: string
}

export interface ProjectDetailBlock {
  title: string
  description: string
  bullets?: string[]
  visuals?: ProjectVisual[]
}

export interface ProjectVisual {
  title: string
  caption: string
  src?: string
  alt?: string
}

export interface ProjectStory {
  problem: {
    intro: string
    failureModes: { title: string; body: string }[]
    conclusion: string
  }
  audience: string
  approach: {
    intro: string
    bullets: { title: string; body: string; icon?: string; visuals?: ProjectVisual[] }[]
  }
  significance: string
}

export interface ProjectPipeline {
  stages: { label: string; sublabel?: string }[]
  feedback?: string
}

export interface ProjectDecomposition {
  steps: { value: string; label: string }[]
  final: { value: string; label: string }
}

export interface ProjectBeforeAfter {
  headers: { before: string; after: string }
  rows: { aspect: string; before: string; after: string }[]
}

export interface ProjectImpactMetric {
  title: string
  value: string
  description: string
}

export interface ProjectInferenceFlow {
  steps: { title: string; detail?: string }[]
  result: { primary: string; secondary?: string }
  endNote?: string
}

export interface ProjectModelComparison {
  rows: {
    architecture: string
    mape: number
    r2?: number
    rmse?: number
    mae?: number
    deployed?: boolean
  }[]
  caption?: string
}

export interface ProjectTemporalSplit {
  segments: { label: string; period: string; size: string; pct?: string }[]
  footnote?: string
}

export interface ProjectCluster {
  id: number
  character: string
  share: string
  testMape: string
  weights: { xgb: number; lgb: number; rf: number; ridge: number }
  insight: string
}

export interface ProjectShapDrivers {
  flat: string
  predictedPrice: string
  features: { name: string; rawValue: string; shap: number }[]
  caption?: string
}

export interface ProjectXaiMethod {
  name: string
  question: string
  how: string
}

export interface ProjectShapValidation {
  value: string
  title: string
  description: string
}

export interface ProjectProductScreens {
  description?: string
  items: { title: string; credit?: string }[]
}

export interface ProjectToolSurface {
  groups: { label: string; tool?: string; isNew?: boolean }[]
  caption?: string
  newBadge?: string
  heading?: { eyebrow: string; title: string }
}

export interface ProjectFlowBox {
  title: string
  sub: string
  variant?: "neutral" | "problem" | "warn" | "good" | "flow" | "ai" | "app"
}

export interface ProjectFlowSpec {
  label: string
  lanes: ProjectFlowBox[][]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  organization: string
  organizationHref?: string
  organizationIcon?: string
  cardMeta?: string
  status: "shipped" | "in-progress" | "planned" | "designed"
  period?: string
  featured?: boolean
  metric?: ProjectMetric
  techStack: string[]
  links?: {
    github?: string
    demo?: string
    docs?: string
  }
  detailSummary: string
  highlights: string[]
  design: ProjectDetailBlock[]
  architecture: ProjectDetailBlock[]
  diagrams: ProjectVisual[]
  gallery: ProjectVisual[]
  videoPlaceholder: {
    title: string
    description: string
    youtubeId?: string
  }
  story?: ProjectStory
  pipeline?: ProjectPipeline
  decomposition?: ProjectDecomposition
  beforeAfter?: ProjectBeforeAfter
  impactMetrics?: ProjectImpactMetric[]
  demoSlot?: { title: string; description: string }
  inferenceFlow?: ProjectInferenceFlow
  modelComparison?: ProjectModelComparison
  temporalSplit?: ProjectTemporalSplit
  clusters?: ProjectCluster[]
  shapDrivers?: ProjectShapDrivers
  xaiMethods?: ProjectXaiMethod[]
  shapValidation?: ProjectShapValidation[]
  productScreens?: ProjectProductScreens
  toolSurface?: ProjectToolSurface
  traceExplorer?: boolean
  redactionCompare?: boolean
  reportFlows?: boolean
  videos?: { title: string; youtubeId: string }[]
  linkedinEmbed?: string
  linkedinEmbedHeight?: number
  testimonial?: { image: string; alt?: string; caption?: string }
  challenges?: { title: string; challenge: string; solution: string }[]
  howItWorks?: { title?: string; steps: string[]; outro?: string }
  problemFlows?: ProjectFlowSpec[]
  solutionFlows?: ProjectFlowSpec[]
  layout?: "document"
}

export const projects: Project[] = [
  {
    id: "bizagento",
    layout: "document",
    title: "BizAgento",
    subtitle: "Self-hosted visual workflow automation platform",
    description:
      "A workflow automation product in the style of n8n, designed and built front to back at Tosba Technologies. Users compose automations on a visual node canvas, triggers, branching, loops, and local LLM agent steps, and run everything on their own server, so no data leaves the machine.",
    organization: "Tosba Technologies",
    organizationHref: "https://tosba.tech/",
    organizationIcon: "/icons/tosba.jpg",
    cardMeta: "Tosba Technologies · 2026",
    status: "shipped",
    period: "May 2026 – Jun 2026",
    featured: true,
    metric: { value: "0", label: "data egress, self-hosted with local LLM inference" },
    linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:share:7358121198624432128?collapsed=1",
    linkedinEmbedHeight: 264,
    techStack: [
      "React 19",
      "TypeScript",
      "React Flow",
      "React Query",
      "Zustand",
      "Node.js",
      "Fastify",
      "SQLite",
      "Knex",
      "Zod",
      "Ollama",
      "sqlite-vec",
    ],
    detailSummary:
      "BizAgento is a self-hosted workflow automation platform in the spirit of n8n, built for regulated businesses — hospitals, banks and financial institutions, law firms, government agencies — that can't send their data to cloud tools, and for whom AI steps that call external APIs are doubly off-limits. It's low-code by design: non-developers compose automations by dragging and dropping nodes on a visual canvas — triggers, branching, loops, and AI agent steps — and everything runs 100% locally, including LLM inference via Ollama. No data ever leaves the company's server, which makes it safe for enterprise use and keeps running costs low. As the AI Engineer at Tosba Technologies, I worked directly with the founder to shape the product from idea to working platform: we workshopped the node set and how non-technical users would interact with it, and I designed and developed the project end to end — React 19 + React Flow up front, Node/Fastify/SQLite behind, Ollama for zero-egress AI.",
    highlights: [
      "Visual builder that does real work: a React Flow node canvas with triggers, IF/ELSE branching, loops, and local LLM agent steps via Ollama. Graphs validate live, can be dry-run, and export as portable JSON with automatic secret stripping.",
      "Fully local RAG pipeline using Ollama embeddings (nomic-embed-text) and sqlite-vec, with async document ingestion and per-document status tracking, no external API calls.",
      "Security-first for regulated buyers: JWT auth with MFA, AES-256-GCM credential encryption, tamper-evident hash-chained audit logging, zero-egress enforcement, and full-instance backup/restore.",
      "Production plumbing most demos skip: a DB-backed schedule/cron trigger with timezone and missed-run handling, inspectable run history with full logs, and connectors for MongoDB, Neo4j, Google Cloud, and S3.",
    ],
    design: [
      {
        title: "Composable automation for non-technical users",
        description:
          "The core product bet is that LLM agent steps can be composed, run, and trusted by non-technical users. Every workflow is a visible graph: what triggers it, where it branches, what the LLM step is allowed to do, and what each run actually produced.",
        bullets: ["Node canvas with live validation", "Dry-run test mode", "Inspectable run history"],
      },
      {
        title: "Local-first by principle",
        description:
          "Built for regulated businesses that cannot send data to cloud tools: local or OpenAI-compatible LLMs via Ollama, on-server execution, and automations that export as portable JSON.",
        bullets: ["Ollama / vLLM inference", "Zero-egress enforcement", "Portable JSON export"],
      },
    ],
    architecture: [
      {
        title: "Frontend",
        description:
          "React 19 and TypeScript with React Flow powering the canvas, React Query for server state, Zustand for local state, and a custom CSS-variable design system.",
        bullets: ["React Flow canvas", "React Query + Zustand", "Custom design system"],
      },
      {
        title: "Backend",
        description:
          "Node and TypeScript on Fastify, Knex over SQLite, and Zod validation, with JWT auth plus MFA, AES-256-GCM credential encryption, and a hash-chained audit log.",
        bullets: ["Fastify + Knex + SQLite", "Zod validation", "Hash-chained audit log"],
      },
      {
        title: "Execution and integrations",
        description:
          "Local-first execution with local or OpenAI-compatible LLMs via Ollama, a fully local RAG pipeline on sqlite-vec, and connectors for MongoDB, Neo4j, Google Cloud, and S3.",
        bullets: ["Local LLM agent steps", "sqlite-vec RAG", "MongoDB · Neo4j · GCP · S3 connectors"],
      },
    ],
    diagrams: [],
    gallery: [],
    videoPlaceholder: {
      title: "BizAgento walkthrough",
      description: "Composing a workflow on the canvas, dry-running it, and inspecting a real run's logs.",
    },
    story: {
      problem: {
        intro:
          "Every mainstream automation platform, n8n cloud, Zapier, Make, assumes your data can leave the building. For regulated businesses it can't, and the gap gets worse the moment AI enters the workflow.",
        failureModes: [
          {
            title: "Cloud tools are off the table.",
            body: "Workflow platforms run your data through their servers. For regulated buyers, that's disqualifying before the feature list is even read.",
          },
          {
            title: "AI steps are doubly so.",
            body: "LLM features in these platforms call external APIs, a non-starter when the workflow touches client data.",
          },
          {
            title: "Self-hosting alone isn't enough.",
            body: "Regulated buyers also need evidence: who ran what, when, with which credentials, in a record that can't be silently edited.",
          },
        ],
        conclusion:
          "The product bet: a workflow platform that is local-first from the ground up, execution, LLM inference, RAG, and the audit trail all on the customer's own server.",
      },
      audience:
        "Regulated businesses that want n8n-style automation, including AI agent steps, without any data leaving their server, and the non-technical operators who need to compose, run, and trust those workflows.",
      approach: {
        intro:
          "Designed and built front to back during my internship at Tosba Technologies:",
        bullets: [
          {
            title: "A visual builder that does real work.",
            body: "A React Flow node canvas with triggers, IF/ELSE branching, loops, and LLM agent steps. Graphs validate live, support dry-run test mode, and export as portable JSON with automatic secret stripping.",
            visuals: [
              {
                title: "The visual builder",
                caption: "The node canvas: a workflow that loops over candidates, branches on seniority with an IF/ELSE node, and drafts a tailored note with a local LLM via Ollama.",
                src: "/projects/bizagento/visual-builder.png",
                alt: "BizAgento visual workflow builder with node canvas",
              },
              {
                title: "It runs, for real",
                caption: "Run history with full logs: each run is inspectable step by step, down to the generated outreach messages.",
                src: "/projects/bizagento/run-history.png",
                alt: "BizAgento run history with step-by-step logs",
              },
            ],
          },
          {
            title: "Local-first AI.",
            body: "LLM agent steps run against Ollama or any OpenAI-compatible local endpoint, and a fully local RAG pipeline (nomic-embed-text + sqlite-vec) handles document ingestion asynchronously with per-document status tracking.",
          },
          {
            title: "Security as a feature, not a checkbox.",
            body: "JWT auth with MFA, AES-256-GCM credential encryption, a tamper-evident hash-chained audit log, zero-egress enforcement, and full-instance backup/restore.",
          },
          {
            title: "Production plumbing most demos skip.",
            body: "A DB-backed schedule/cron trigger with timezone and missed-run handling, inspectable run history with full step-by-step logs, and connectors for MongoDB, Neo4j, Google Cloud, and S3.",
          },
        ],
      },
      significance:
        "Designing LLM agent steps that non-technical users can compose, run, and trust is the heart of this product, and local-first AI is exactly where regulated industries are heading. Built solo, front to back, with Claude as my primary agentic coding partner.",
    },
    pipeline: {
      stages: [
        { label: "Trigger", sublabel: "manual · webhook · DB-backed cron" },
        { label: "Canvas graph", sublabel: "live validation · dry-run" },
        { label: "Execution engine", sublabel: "branching · loops" },
        { label: "LLM agent steps", sublabel: "Ollama · local RAG" },
        { label: "Connectors", sublabel: "MongoDB · Neo4j · GCP · S3" },
        { label: "Run history", sublabel: "step-by-step logs" },
      ],
      feedback: "Dry-run executes the graph without side effects; every real run is inspectable down to each step's output",
    },
    challenges: [
      {
        title: "Scheduling that survives a restart",
        challenge:
          "In-memory schedulers lose their jobs the moment the server restarts, and a self-hosted box will restart. Timezones and missed runs while the server was down make naive cron wrong in quiet, hard-to-notice ways.",
        solution:
          "Built the schedule trigger DB-backed: schedule state persists in SQLite, evaluation is timezone-aware, and a missed-run policy decides on startup whether overdue runs fire or skip, so a reboot never silently drops an automation.",
      },
      {
        title: "Portable workflows without leaking secrets",
        challenge:
          "Workflow JSON export is essential for moving automations between instances, but a naive export drags embedded credentials along with it.",
        solution:
          "Credentials live encrypted (AES-256-GCM) and are referenced by workflows, never embedded; export strips secrets automatically, so a shared workflow file is safe by construction.",
      },
      {
        title: "An audit trail a regulator can trust",
        challenge:
          "A plain log table fails the core question a regulated buyer asks: how do I know nobody edited the record after the fact?",
        solution:
          "Made the audit log hash-chained, each entry commits to the previous one, so any tampering breaks the chain visibly. Combined with zero-egress enforcement, the evidence stays on the box and stays honest.",
      },
    ],
    impactMetrics: [
      { title: "Data egress", value: "0", description: "execution, LLM inference, and RAG all on the customer's server" },
      { title: "Scope", value: "Front to back", description: "solo build: canvas UI, execution engine, security layer, and connectors" },
      { title: "It runs, for real", value: "Full logs", description: "every run inspectable step by step, down to generated outputs" },
    ],
  },
  {
    id: "waystone-time-utilization",
    layout: "document",
    title: "Time Utilization Automation",
    subtitle: "Power Platform workflow with a management dashboard",
    description:
      "When I joined, every consultant kept their own Excel sheet of billable and non-billable hours, and every week a manager had to trawl through those sheets by hand to work out utilization and charge clients fairly. I learned the process from the people running it, then automated the pipeline end-to-end: a Power Apps canvas app where consultants log their hours in seconds, SharePoint Lists as the database behind it, and a Power BI dashboard where managers get what used to take hours of spreadsheet work.",
    organization: "Waystone Compliance Solutions",
    organizationHref: "https://www.waystone.com/",
    organizationIcon: "/icons/waystone.png",
    cardMeta: "Waystone · 2026",
    status: "shipped",
    period: "Jun 2026 – Jul 2026",
    featured: true,
    metric: { value: "Hassle-free", label: "time entry for consultants · an insightful, actionable dashboard for managers" },
    techStack: ["Power Apps", "SharePoint", "Power BI", "Power Query", "DAX"],
    linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:share:7483692160689532928?collapsed=1",
    detailSummary:
      "Consultants tracked billable hours in hand-kept Excel sheets, and managers reconciled them by hand every week to bill clients fairly. During my internship, I interviewed the consultants and the manager to understand the pain points and the current process. I then designed the data model and developed a user-friendly Power Apps interface where consultants input their entries, and a detailed Power BI dashboard where the manager can see the insights and take action. All of it runs on the standard Microsoft 365 licensing the firm already had.",
    highlights: [
      "Five screens in the canvas app: a color-coded home calendar (green = day complete, red = missed weekday), Day Entry, a Week editor for filling a whole week fast, a History calendar for backfilling, plus a manager-only Admin dashboard for maintaining clients and activity types. Editing is staged: nothing touches SharePoint until the user submits.",
      "More than utilization: billable hours resolve through charge-out rates into fees and effort-value per client, and retainer clients' contracted allowances are tracked, including non-billable and write-off variants, so management sees exactly how much unbilled effort each retainer client consumes.",
      "Solved the critical Power BI trap: SharePoint lookup columns import as structured records and silently break every relationship. Each lookup is expanded to text in Power Query, and the step is documented in the refresh runbook.",
      "Headcount-aware DAX capacity measures computed from weekdays only. Leave and holidays are excluded from capacity, so time off never dents a consultant's utilization.",
      "Shipped for adoption, not just delivery: handoff documentation and runbooks, a consultant-facing Activity Guide with a 10-second decision chart for billable classification, and a Power Automate workshop so the team can build their own flows.",
    ],
    story: {
      problem: {
        intro:
          "Every consultant kept a personal Excel sheet of billable and non-billable hours. To bill clients fairly, a manager had to collect and trawl through those sheets by hand, every week, and again each quarter.",
        failureModes: [
          {
            title: "Slow and repetitive.",
            body: "Weekly and quarterly reconciliation consumed manager hours on work a system should be doing.",
          },
          {
            title: "Error-prone attribution.",
            body: "Mis-tagged hours understate or overstate what a client costs. For retainer clients, they quietly drain or hide the contracted allowance.",
          },
          {
            title: "No live visibility.",
            body: "Utilization, fees per client, and retainer positions only existed after someone assembled them, and they were already out of date when read.",
          },
        ],
        conclusion:
          "The constraint made it interesting: no new vendors, no new licenses. Whatever replaced the spreadsheets had to run entirely on the Microsoft 365 stack the firm already paid for.",
      },
      audience:
        "Consultants who need to log time in seconds without decoding billing rules.\nManagers who need utilization, fees per client, and retainer positions they can act on.\nAdmins who add new clients and activity types as the business grows.",
      approach: {
        intro:
          "I learned the process from the people actually running it, then rebuilt the pipeline end-to-end on the Power Platform:",
        bullets: [
          {
            title: "Power Apps for input.",
            body: "A five-screen canvas app: a color-coded home calendar, Day Entry, a Week editor, a History calendar for backfill, and a manager-only Admin dashboard. Nothing saves until the user submits.",
            icon: "/icons/power-apps.svg",
            visuals: [
              {
                title: "Home calendar",
                caption: "The consultant's starting point: green = day complete, red = missed weekday. Clear the reds before Friday.",
                src: "/projects/waystone-time-utilization/home-calendar.jpg",
                alt: "Power Apps home calendar with green and red day status",
              },
              {
                title: "History calendar",
                caption: "Click any day in any month and edit it in place: one row per piece of work, with client, activity, hours, and a description. Nothing saves until submit.",
                src: "/projects/waystone-time-utilization/history-calendar.png",
                alt: "History calendar screen with month view and day editing rows",
              },
              {
                title: "Week editor",
                caption: "Fill a whole week fast: the day strip mirrors the calendar colors, and header counters show exactly what will change on save.",
                src: "/projects/waystone-time-utilization/week-editor.jpg",
                alt: "Week editor screen with day strip and editable rows",
              },
            ],
          },
          {
            title: "SharePoint as the governed database.",
            body: "A five-list star schema: the app writes to one list only, and ActivityType is the single source of truth for billable classification.",
            icon: "/icons/sharepoint.svg",
            visuals: [
              {
                title: "Star-schema data model",
                caption: "Five SharePoint lists; TimeEntriesNew is the only list the app writes to, and ActivityType is the single source of truth for billable classification.",
                src: "/projects/waystone-time-utilization/star-schema-data-model.png",
                alt: "Six-list SharePoint star schema data model",
              },
            ],
          },
          {
            title: "Power BI for decisions.",
            body: "KPI cards, a RAG-formatted consultant table against the utilization target, fees per client, hours per activity group, and retainer draw-down. Managers get it self-serve, refreshed on schedule.",
            icon: "/icons/power-bi.svg",
            visuals: [
              {
                title: "Power BI: Client Retainer Usage",
                caption: "Retainer hours allowed vs. spent per client, with over/within status at a glance. Client and consultant names blurred.",
                src: "/projects/waystone-time-utilization/powerbi-retainer-usage.png",
                alt: "Power BI Client Retainer Usage report with sensitive data blurred",
              },
              {
                title: "Power BI: Client Profitability",
                caption: "Billable hours and effort value per client, plus the top clients by fee share. Client names blurred.",
                src: "/projects/waystone-time-utilization/powerbi-client-profitability.png",
                alt: "Power BI Client Profitability report with sensitive data blurred",
              },
              {
                title: "Power BI: Consultant drill-down",
                caption: "Per-consultant view: utilization gauge against the target, weekly trend, hours by activity type, and per-client hours. Names blurred.",
                src: "/projects/waystone-time-utilization/powerbi-consultant-drilldown.png",
                alt: "Power BI consultant drill-down report with sensitive data blurred",
              },
            ],
          },
          {
            title: "Designed for honest data.",
            body: "Every row needs a client and an activity; dedicated internal clients route leave and internal work; weekends are auto-excluded; and an Activity Guide with a 10-second decision chart makes correct classification the easy path.",
          },
        ],
      },
      significance:
        "This is requirements-to-adoption work: learn a messy human process, respect a hard licensing constraint, and ship something people actually switch to. It shipped with the documentation and admin tooling to outlive the person who built it.",
    },
    pipeline: {
      stages: [
        { label: "Consultant", sublabel: "five-screen Power Apps canvas app" },
        { label: "SharePoint Lists", sublabel: "five-list star schema" },
        { label: "Power Query", sublabel: "lookups expanded to text" },
        { label: "DAX measures", sublabel: "headcount-aware capacity" },
        { label: "Power BI dashboard", sublabel: "self-serve for managers" },
      ],
      feedback: "Nothing saves until submit: staged edits commit in a single pass",
    },
    challenges: [
      {
        title: "The Power BI lookup-column trap",
        challenge:
          "SharePoint lookup columns import into Power BI as structured records, which silently break every relationship in the model. The dashboard shows wrong numbers with no error anywhere.",
        solution:
          "Expanded each lookup to plain text in Power Query before relationships resolve, verified the model against hand-computed totals, and documented the step in the refresh runbook so the fix survives the next rebuild.",
      },
      {
        title: "Editing without corrupting the source of truth",
        challenge:
          "Letting consultants freely edit historical days risked partial writes: a save that half-completes leaves SharePoint in a state no report can trust.",
        solution:
          "Built a staged-edit pattern: edits, additions, and deletions accumulate locally and commit in a single three-pass submit. Nothing touches SharePoint until the user confirms, and header counters show exactly what will change before saving.",
      },
      {
        title: "Utilization numbers that don't lie",
        challenge:
          "The naive utilization formula divided by fixed capacity, inflating percentages when headcount changed mid-period and penalizing consultants for taking leave.",
        solution:
          "Proved the discrepancy with worked examples, then rebuilt capacity as headcount-aware DAX measures computed from weekdays only, with leave and public holidays excluded entirely. Time off never dents a consultant's numbers.",
      },
    ],
    impactMetrics: [
      { title: "Manual reconciliation", value: "Eliminated", description: "weekly and quarterly spreadsheet trawls replaced by self-serve reporting" },
      { title: "Billing visibility", value: "Per client", description: "fees, effort value, and retainer draw-down, including unbilled write-offs" },
      { title: "Built to outlive me", value: "Docs + admin UI", description: "runbooks, Activity Guide, and manager-only reference-list tooling" },
    ],
    design: [
      {
        title: "How the pieces connect",
        description:
          "Consultants add their entries in the Power Apps app. Every submitted entry is saved to the SharePoint lists, which act as the system's database. Power BI reads those lists on a scheduled refresh and turns them into the dashboards the manager works from. And because the data lives in SharePoint, it can be exported to Excel in one click, so ad-hoc analysis in a familiar spreadsheet is still there whenever anyone needs it.",
      },
    ],
    architecture: [
      {
        title: "A governed data model, not a spreadsheet",
        description:
          "A five-list star schema keeps writes and classification separated: the app writes to a single list, and billable classification resolves through one source of truth.",
      },
      {
        title: "Designed for honest data",
        description:
          "Every entry needs a client and an activity: the activity decides whether hours are charged, the client decides who they're attributed to. Dedicated internal clients route leave, holidays, and internal work; weekends are excluded automatically; and the Activity Guide's decision chart makes the right classification the easy one.",
      },
      {
        title: "Why this beats the old Excel process",
        description:
          "The spreadsheet system worked, but it made people do the machine's job. The new system changes that:",
        bullets: [
          "One source of truth instead of a separate spreadsheet per consultant",
          "Managers see utilization, fees per client, and retainer positions live, with no manual reconciliation",
          "Billing rules are enforced at entry: every row needs a client and an activity, so misclassification is caught at the source",
          "Capacity math is consistent and automatic, and time off never hurts a consultant's numbers",
          "Data still exports to Excel in one click, so nobody loses the familiar view",
          "New clients and activity types are added through the Admin screen, with no formula edits or new templates to circulate",
        ],
      },
    ],
    diagrams: [],
    gallery: [],
    videoPlaceholder: { title: "", description: "" },
  },
  {
    id: "waystone-report-automation",
    layout: "document",
    reportFlows: true,
    title: "Quarterly Compliance Report Automation",
    subtitle: "Summary of Key Matters, a Power Automate + AI pipeline",
    description:
      "A Power Automate + AI pipeline that compiles a client's full quarterly communications log from Outlook into a ranked, reviewed Word report section, replacing hours of manual mailbox scrolling per client.",
    organization: "Waystone Compliance Solutions",
    organizationHref: "https://www.waystone.com/",
    organizationIcon: "/icons/waystone.png",
    cardMeta: "Waystone · 2026",
    status: "shipped",
    period: "Jun 2026 – Jul 2026",
    featured: true,
    metric: { value: "Hours → minutes", label: "Section 6 compilation per client, a flow run plus a short review pass" },
    techStack: [
      "Power Automate",
      "AI Builder · GPT-4.1 mini",
      "Exchange KQL",
      "SharePoint Lists",
      "Power Apps",
      "Word Online",
    ],
    detailSummary:
      "Every quarter, each client receives a Quarterly Summary Report — a document with many sections, each requiring a consultant's judgement. One of the heaviest is the Summary of Key Matters: a digest of everything discussed with the client over email that quarter, previously compiled by manually scrolling through 300 to 500 Outlook emails per client. After sitting down with the manager and consultants to understand the process, I automated that section end-to-end with a Power Automate + AI pipeline that compiles the full quarterly communications log into a ranked, human-reviewed Word report section — cutting a multi-hour manual task down to a minutes-long flow run plus a short review pass. The same approach could extend to the remaining sections one by one, a natural next step had the internship run longer.",
    highlights: [
      "Recall by construction: a server-side KQL query scoped to the client domain and quarter window makes relevance a WHERE clause, not an AI judgment, \"did the AI miss an email\" becomes a non-question.",
      "One AI call per deduplicated thread (GPT-4.1 mini, temperature 0, JSON output) extracts a description, the open follow-up or Closed status, and a 1–5 materiality score; ranking fills 8 report slots with a ninth rolling up routine threads.",
      "Idempotent writes (purge then insert per client and quarter), a Power Apps human-review gate before anything reaches the report, and a Word repeating-section control that grows the table to fit the quarter.",
    ],
    story: {
      problem: {
        intro:
          "Management requires a summary of every client communication each quarter. The consultant compiled it by manually scrolling Outlook through 300 to 500 emails per client, identifying material threads, and typing descriptions and open follow-ups by hand.",
        failureModes: [
          {
            title: "The single biggest reporting time sink.",
            body: "Hours of mailbox scrolling per client, repeated every quarter, just to find the threads that mattered.",
          },
          {
            title: "Recall depended on memory.",
            body: "Whether a matter made the report came down to memory and scrolling discipline, \"did we miss one?\" had no answer.",
          },
          {
            title: "Everything re-typed by hand.",
            body: "Descriptions and open follow-ups were manually written into Word for every material thread.",
          },
        ],
        conclusion:
          "A single-prompt approach could not survive real volumes: AI Builder has hard per-prompt limits, and long-context accuracy decays. The pipeline had to be decomposed.",
      },
      audience:
        "The consultant who compiles the Summary of Key Matters section of each client's Quarterly Summary Report, the managers who read it, and whoever runs the flow after handoff.",
      approach: {
        intro:
          "I used Power Automate to tackle this problem, orchestrating the whole pipeline end to end. The fix was to stop treating 'summarize the quarter's communications' as one AI problem and decompose it into three: a retrieval problem, a judgment problem, and a generation problem. Only the middle one needs an AI model.",
        bullets: [
          {
            title: "Retrieval became a database query.",
            body: "The Office 365 Outlook connector executes a **KQL search** directly against **Exchange's server-side index**: every email from: or to: the client's domain within the quarter window.\n- **A WHERE clause, not an AI decision.** Retrieval is deterministic code, with no model in the loop.\n- **Recall is guaranteed by construction.** \"Did we miss an email?\" is answered by the query semantics, not by hoping the model read everything.\n- **Domain as the predicate, deliberately.** Client names in subject lines are unreliable in both directions, and individual addresses break the first time someone new at the client emails.",
            icon: "/icons/power-automate.svg",
          },
          {
            title: "Judgment became many small AI calls instead of one large one.",
            icon: "/icons/ai-builder.svg",
            body: "Raw results are grouped by **conversationId**, so a 10-email back-and-forth collapses into **one matter assessed once**, from its full thread context.\n- **One GPT-4.1 mini call per thread**, returning **strict JSON**: a description of what happened, the open follow-up (or Closed), and a **materiality score from 1 to 5**.\n- **Small inputs by design.** Each call sees only one thread's subject plus its first and last messages, so the pipeline never approaches AI Builder's 25 MB / 50-page / 100-second limits.\n- **Long-context accuracy decay is structurally impossible**: no input is long.",
          },
          {
            title: "Generation became deterministic code again.",
            body: "The flow sorts threads by **materiality**, fills **eight report slots** with the most material matters, and rolls everything else into a **ninth catch-all slot** (\"plus N routine threads re: quarterly returns\").\n- **Staged, not written straight to the report.** Results land in a **SharePoint staging list** as one row per field.\n- **Idempotent re-runs.** Rows are **purged and re-inserted** per client and quarter, so running the flow again is always safe.",
            icon: "/icons/sharepoint.svg",
          },
          {
            title: "Human review in Power Apps.",
            body: "**Nothing reaches the report unreviewed.**\n- The consultant goes through each row in **Power Apps**, fixes anything the model got wrong, and **approves** it.\n- Only then does a second flow map the approved rows into the Word template's **repeating-section content control**, which grows the table to fit however many matters the quarter produced.",
            icon: "/icons/power-apps.svg",
          },
        ],
      },
      significance:
        "The key learning: guarantee recall with deterministic retrieval and reserve the LLM for judgment tasks. That turns \"did the AI miss an email\" from an unanswerable question into a non-question, the pattern for trustworthy AI reporting anywhere generated output feeds a document someone signs.",
    },
    pipeline: {
      stages: [
        { label: "Outlook", sublabel: "server-side KQL search" },
        { label: "Dedup", sublabel: "group by conversationId" },
        { label: "GPT-4.1 mini", sublabel: "per-thread extraction" },
        { label: "Rank & slot", sublabel: "8 slots + routine rollup" },
        { label: "DraftFields", sublabel: "SharePoint staging" },
        { label: "Review", sublabel: "Power Apps gate" },
        { label: "Word", sublabel: "repeating-section table" },
      ],
      feedback: "Purge-then-insert per client and quarter, every re-run is idempotent",
    },
    howItWorks: {
      steps: [
        "The consultant (or a scheduled trigger) starts the flow with three inputs: client name, client domain, quarter.",
        "Power Automate fires the KQL search against the mailbox and receives every matching email server-side filtered, so there is no client-side paging through thousands of messages.",
        "Flow expressions deduplicate on conversationId using a union(array, array) self-dedup, producing one entry per thread.",
        "Inside a loop (concurrency 10), each thread's first and last messages are converted from HTML to full text with length caps, then passed to the AI Builder prompt. Full body conversion matters: the connector's default bodyPreview truncates at 255 characters, which in early testing caused every follow-up to be misread as Closed because the model never saw the latest message state.",
        "The flow sorts the returned JSON by materiality and assigns slots, writes the staged rows to SharePoint, and flags them In Review.",
        "The consultant opens the review screen in Power Apps and goes through the staged rows one by one, editing descriptions, follow-ups, or materiality where the model got it wrong, then approves each row.",
        "Flow B reads approved rows and populates the Word report. Section 6 is done.",
      ],
      outro:
        "The design principle running through all of it: classify with the LLM, compute with code. The model's only job is summarization and ranking of already-retrieved, already-deduplicated threads. Retrieval, filtering, slotting, and document assembly are deterministic, which is why the output is auditable: any row in the final table traces back to a specific thread the query provably captured.",
    },
    design: [],
    architecture: [
      {
        title: "The stack",
        description:
          "Power Automate orchestrates end-to-end: the Office 365 Outlook and Content Conversion connectors handle retrieval and HTML-to-text, an AI Builder custom prompt (GPT-4.1 mini) does per-thread extraction, SharePoint Lists stage DraftFields, Power Apps hosts the review screen, and the Word Online connector populates the repeating-section content control.",
        bullets: ["Office 365 Outlook connector", "AI Builder custom prompt", "SharePoint Lists staging", "Power Apps review screen", "Word Online connector"],
      },
      {
        title: "Source & demo",
        description:
          "Proprietary internal system running inside the corporate tenant, no public repo and no live demo.",
      },
    ],
    challenges: [
      {
        title: "The silent 255-character truncation bug",
        challenge:
          "The Outlook connector's bodyPreview field truncates at 255 characters, so the model never saw the latest message state, and quietly marked every thread as Closed.",
        solution:
          "Converted the full first and last messages from HTML to text with 1200/800-character caps and a min(length, cap) guard against substring errors, so thread status is read from real message content.",
      },
      {
        title: "Flows that break when they move",
        challenge:
          "The flow broke at handoff: UI-generated folder references are base64 IDs bound to the original mailbox, so it could not run under anyone else's account.",
        solution:
          "Replaced them with well-known folder names in Code view and documented the re-bind step in the handoff runbook, the flow now runs under a teammate's account.",
      },
      {
        title: "Reading a colleague's mailbox responsibly",
        challenge:
          "The pipeline reads a colleague's mailbox, as much a trust and permissions question as a technical one.",
        solution:
          "Scoped access to one client domain and one date window, made that scope explicit in the demo, and planned the production migration to a shared mailbox.",
      },
    ],
    impactMetrics: [
      { title: "Section 6 compilation", value: "Hours → minutes", description: "a flow run plus a short review pass, per client" },
      { title: "Validated against", value: "Ground truth", description: "output diffed against the consultant's hand-written section for the same quarter; thread counts verified against an identical manual Outlook search, which uses the same KQL, so the comparison is exact" },
      { title: "Survived handoff", value: "Still running", description: "re-bound under a teammate's account after the internship ended, portability fixes documented" },
    ],
    diagrams: [
      {
        title: "The generated report",
        caption: "Sample output: Section 6, Summary of Key Matters, in the final Word report, generated after review and approval. Illustrative demo data with a dummy client.",
        src: "/projects/waystone-report-automation/generated-report.png",
        alt: "Generated Section 6 Summary of Key Matters table in the Word report",
      },
    ],
    gallery: [],
    videoPlaceholder: { title: "", description: "" },
  },
  {
    id: "jms",
    layout: "document",
    title: "Java Management Service",
    links: {
      docs: "https://www.oracle.com/java/jms/",
    },
    subtitle: "Platform Engineering · OCI Cloud Service · Oracle (v6.0–v11)",
    description:
      "Quality-focused software engineering on Oracle's Java Management Service, covering automated validation, release integrity, and production-grade test infrastructure across six major product versions.",
    organization: "Oracle",
    organizationHref: "https://www.oracle.com/",
    organizationIcon: "/icons/oracle.png",
    cardMeta: "Oracle · 2022–2026",
    status: "shipped",
    period: "Oct 2022 – Apr 2026",
    featured: true,
    metric: { value: "6", label: "major JMS releases, quality owned (v6.0–v11)" },
    techStack: [
      "Java",
      "OCI",
      "Test Automation",
      "Canary Deployments",
      "Grafana",
      "Jenkins",
      "Microservices",
      "REST APIs",
      "SCA",
      "Vulnerability Scanning",
      "JDK Flight Recording",
      "Agile",
      "Jira",
      "Confluence",
    ],
    detailSummary:
      "Software Engineer at Oracle with a quality engineering specialisation, owning test infrastructure, validation pipelines, and release integrity across 6 major JMS versions (v6.0–v11). Alongside that core remit, I sat in design discussions, understood the full feature lifecycle, and self-initiated three AI tools that went into production: a RAG pipeline for test spec generation, a computer vision redaction system, and a LiveLabs content generator. Quality engineering at Oracle scale teaches you to think precisely about correctness, the same discipline that makes good AI engineering.",
    highlights: [
      "Software Engineer specialising in quality, designed and owned automated test coverage for major JMS platform features including Dynamic and Static Java Library Scanning, Vulnerability Scan and Risk Scoring, Automatic Java Update distribution, Performance Analysis Reports (JDK Flight Recording), and Java Migration Analysis Reports across 6 major product releases.",
      "Built test infrastructure beyond test cases: canary deployments, Grafana-based alerting, and automated validation pipelines that caught quality issues before release rollout, not after.",
      "Participated in feature design discussions as part of the core engineering team, understanding the full feature lifecycle from specification through delivery, which informed how test coverage was designed.",
      "Self-initiated three AI tools targeting real team pain points, proposed, got leadership approval, designed, and shipped independently within the same Software Engineer role: JMS AI Toolkit (RAG pipeline, 60% faster test spec generation), LiveLabs Generator, and Agentic UI Test Navigator.",
      "Collaborated across 4 global regions (Singapore, India, Europe, US) with SRE, development, SQE, and documentation teams throughout each release cycle. Full enterprise delivery: Agile sprints, Jira, Confluence, internal tech talks.",
    ],
    design: [
      {
        title: "Product surface",
        description:
          "Owning test coverage for complex platform features requires deep product understanding. Testing vulnerability scan scoring, JDK Flight Recording analysis, and Java migration risk assessment meant learning the domain thoroughly, sitting in design discussions, reading specs, and understanding customer impact before a single test was written.",
      },
      {
        title: "Release focus",
        description:
          "Each of 6 JMS releases required release-safe validation: API compatibility regression testing, broad coverage across customer fleet configurations, and canary-based rollout monitoring via Grafana to catch production anomalies before customers did.",
      },
    ],
    architecture: [
      {
        title: "Service topology",
        description:
          "JMS is a distributed OCI cloud service with fleet-management agents deployed across cloud, on-premises, and hybrid environments. Understanding the service topology, how scan jobs propagate, how telemetry flows, how update distribution works, was essential for designing test coverage that caught real failure modes rather than just happy-path scenarios.",
        bullets: ["Java microservices on OCI", "API-driven management flows", "Release-safe validation"],
      },
    ],
    diagrams: [
      {
        title: "JMS fleet architecture and OCI service boundaries",
        caption: "JMS fleet architecture and OCI service boundaries.",
      },
      {
        title: "Feature -> canary -> validation -> release pipeline",
        caption: "Feature -> canary -> validation -> release pipeline.",
      },
      {
        title: "Enterprise fleet management: scan -> score -> patch -> verify",
        caption: "Enterprise fleet management: scan -> score -> patch -> verify.",
      },
    ],
    gallery: [
      {
        title: "JMS fleet console, library scan and vulnerability views",
        caption: "JMS fleet console, library scan and vulnerability views.",
      },
      {
        title: "Canary and regression test pipeline with Grafana alerting",
        caption: "Canary and regression test pipeline with Grafana alerting.",
      },
      {
        title: "Performance Analysis and Migration Report outputs",
        caption: "Performance Analysis and Migration Report outputs.",
      },
    ],
    videoPlaceholder: { title: "", description: "" },
    story: {
      problem: {
        intro:
          "Oracle's Java Management Service tracks Java runtimes across enterprise fleets, versions, security posture, outdated installations. Every release ships features like vulnerability risk scoring, JDK Flight Recorder analysis, and migration reports to customers who run them at fleet scale. A quality gap that reaches production means bad data driving real patching decisions.",
        failureModes: [
          {
            title: "Complex features, subtle failures.",
            body: "Vulnerability scoring or performance analysis can be wrong in ways a happy-path test never catches, coverage had to be designed from the service topology, not the console.",
          },
          {
            title: "Six releases, zero regressions allowed.",
            body: "Each release from v6.0 to v11 had to preserve API compatibility across the customer fleet configurations already in production.",
          },
          {
            title: "Issues found late are found by customers.",
            body: "Without staged rollout monitoring, the first detector of a production anomaly is a customer fleet.",
          },
        ],
        conclusion: "",
      },
      audience:
        "The JMS engineering organization across four global regions, development, SRE, SQE, and documentation teams, and the enterprise customers running Java fleets on the service.",
      approach: {
        intro: "Quality engineering treated as an engineering discipline, not a checklist:",
        bullets: [
          {
            title: "Coverage designed from the product.",
            body: "Owned automated test coverage for major platform features, dynamic and static library scanning, vulnerability scan and risk scoring, automatic Java updates, JFR performance analysis, migration analysis, across six major releases, informed by sitting in feature design discussions.",
          },
          {
            title: "Infrastructure beyond test cases.",
            body: "Canary deployments, Grafana-based alerting, and automated validation pipelines that caught quality issues before release rollout, not after.",
          },
          {
            title: "Release-safe validation.",
            body: "API-compatibility regression testing and broad coverage across customer fleet configurations, every release cycle.",
          },
          {
            title: "Self-initiated AI tooling.",
            body: "Proposed, won leadership approval for, and shipped three production AI tools targeting real team pain points, the Test Spec Generator, the LiveLabs Generator, and the Agentic UI Test Navigator, each with its own page here.",
          },
        ],
      },
      significance:
        "Quality engineering at Oracle scale teaches you to think precisely about correctness, where systems fail, how to catch it early, and how to prove it. That is the same discipline that makes good AI engineering, and it is the foundation the three AI tools were built on.",
    },
    pipeline: {
      stages: [
        { label: "Feature spec", sublabel: "design discussions" },
        { label: "Test design", sublabel: "coverage from service topology" },
        { label: "Automated pipelines", sublabel: "regression + API compatibility" },
        { label: "Canary rollout", sublabel: "Grafana alerting" },
        { label: "Release", sublabel: "6 majors · v6.0–v11" },
      ],
    },
    challenges: [
      {
        title: "Testing what you can't see from the console",
        challenge:
          "JMS is a distributed OCI service with agents across cloud, on-premises, and hybrid environments, the real failure modes live in how scan jobs propagate and telemetry flows, not in the UI.",
        solution:
          "Learned the service topology and feature specs before writing tests, and designed coverage against the distributed system's failure modes rather than happy-path console flows.",
      },
      {
        title: "Catching regressions before customers do",
        challenge:
          "With enterprise fleets consuming every release, a quality issue that reaches production is discovered by customers first.",
        solution:
          "Built canary-based rollout validation with Grafana alerting so anomalies surfaced during staged rollout, backed by automated regression pipelines run every release cycle.",
      },
      {
        title: "Quality across six release trains",
        challenge:
          "Six major versions with evolving features meant coverage had to grow without collapsing under its own maintenance burden.",
        solution:
          "Treated test infrastructure as a product: reusable coverage patterns, automated validation pipelines, and API-compatibility suites that carried forward from release to release.",
      },
    ],
    impactMetrics: [
      { title: "Major releases", value: "6", description: "quality owned from v6.0 through v11" },
      { title: "Global collaboration", value: "4 regions", description: "Singapore, India, Europe, US, dev, SRE, SQE, docs" },
      { title: "Self-initiated AI tools", value: "3", description: "proposed and shipped to production alongside the core role" },
    ],
  },
  {
    id: "jms-ai-toolkit",
    layout: "document",
    title: "JMS Test Specification Generator",
    subtitle: "Enterprise RAG pipeline",
    description:
      "A production RAG pipeline at Oracle that turns scattered product documentation into audit-grade test specifications, where every generated test traces back, line by line, to its source. Cut test-spec creation time by 60% for the JMS quality-engineering team.",
    organization: "Oracle",
    organizationHref: "https://www.oracle.com/",
    organizationIcon: "/icons/oracle.png",
    cardMeta: "Oracle · 2025",
    status: "shipped",
    period: "2025",
    featured: true,
    metric: {
      value: "60%",
      label: "faster spec creation · fully traceable",
    },
    testimonial: {
      image: "/projects/jms-test-spec-generator/colleague-testimonial-full.png",
      alt: "WhatsApp message from a JMS quality engineer about the Test Specification Generator",
      caption:
        "Unprompted feedback from a JMS quality engineer after using the generator on a JMS 11 feature: a 55–60% cut in the most time-consuming part of spec writing, and specs solid enough to base real test code on.",
    },
    techStack: [
      "RAG",
      "LLM-as-judge",
      "Citation Traceability",
      "Human-in-the-loop",
      "OCI GenAI",
      "Gemini",
    ],
    detailSummary:
      "This tool turns scattered product documentation (PRDs, design docs, feature tickets) into audit-ready test specifications. Instead of one giant AI generation, it works in five reviewable stages: retrieve the sources, extract evidence, derive requirements, then generate the test cases, and every claim in the final spec traces back to the exact source document it came from. Engineers watch progress stream in real time, can step in to review between stages, and export the finished spec to Word in one click. It runs as a shared internal web app for Oracle's JMS quality engineering team, supports multiple engineers working at once, and cut spec-writing time by 60%.",
    highlights: [
      "End-to-end traceability by design: A formal 5-stage ID model (Citation -> Fact -> Requirement -> TA -> Test) means every generated test is independently verifiable and auditable, not just raw LLM output.",
      "Architecture-level quality controls: Citation auto-validation and auto-fix, cross-batch duplicate detection, coverage gap scoring (facts never used in tests are surfaced automatically), and LLM-as-judge evaluation at each pipeline stage.",
      "Three workflow modes for different confidence levels: Auto (single end-to-end run), HITL / Human-in-the-Loop (human review checkpoints between each stage), and SuperHuman (preview/run control for power users and deeper artifact inspection).",
    ],
    design: [
      {
        title: "Staged generation instead of one-shot prompting",
        description:
          "The product deliberately breaks generation into focused steps so each artifact can be reviewed, verified, and corrected before downstream errors compound.",
        bullets: ["Evidence Pack", "Requirements Pack", "Testable Assertions", "Batched test generation"],
      },
      {
        title: "Review-first user experience",
        description:
          "HITL and SuperHuman modes expose intermediate artifacts, giving reviewers the ability to deselect noisy evidence, refine prompts, and finalize only when the chain is trustworthy.",
        bullets: ["AUTO", "HITL", "SuperHuman", "Open Editor and save flow"],
      },
      {
        title: "Enterprise auditability",
        description:
          "Outputs are built to be inspectable rather than magical, with citations, traceability views, gap analysis, and structured downstream export for QA teams operating in high-scrutiny environments.",
        bullets: ["Citation validation", "Coverage analysis", "Trace explorer", "DOCX export"],
      },
    ],
    architecture: [
      {
        title: "Application layers",
        description:
          "A static HTML and JavaScript frontend talks to Helidon handlers, which coordinate retrieval, staged generation services, citation mapping, export, persistence, and metrics.",
        bullets: ["Static UI", "Helidon routing and handlers", "TestSpecificationService orchestration", "OCI Object Storage"],
      },
      {
        title: "Five-stage generation pipeline",
        description:
          "The core pipeline moves from retrieval to evidence, requirements, testable assertions, and then batched test generation, with deterministic Java post-processing after the LLM stages.",
        bullets: ["RAG retrieval", "Evidence facts", "Requirements", "Testable assertions", "Batched tests"],
      },
      {
        title: "Verification and review services",
        description:
          "Post-generation services validate citation ranges, analyze coverage and duplicates, support traceability exploration, and score continuity across the chain before final delivery.",
        bullets: ["CitationService", "TestCoverageAnalyzer", "Context continuity", "Pipeline breakdown mapper"],
      },
    ],
    diagrams: [
      {
        title: "System architecture",
        caption: "End-to-end architecture across frontend, orchestration, retrieval, generation, validation, storage, and export.",
        src: "/projects/jms-test-spec-generator/test-spec-generator-arch.png",
        alt: "System architecture diagram for JMS Test Specification Generator",
      },
      {
        title: "Generation pipeline breakdown",
        caption: "The staged pipeline that carries source context through evidence, requirements, testable assertions, and test cases.",
        src: "/projects/jms-test-spec-generator/ts-pipeline-breakdown.png",
        alt: "Pipeline breakdown view for JMS Test Specification Generator",
      },
      {
        title: "Traceability explorer",
        caption: "Interactive traceability chain connecting citations, facts, requirements, assertions, and tests.",
        src: "/projects/jms-test-spec-generator/ts-traceibility.png",
        alt: "Traceability explorer for JMS Test Specification Generator",
      },
    ],
    gallery: [
      {
        title: "New test specification",
        caption: "Where it starts: pick a workflow mode (Auto, HITL, or SuperHuman), describe the feature, and upload the source documents.",
        src: "/projects/jms-test-spec-generator/ts-new-test-spec.png",
        alt: "New test specification screen for JMS Test Specification Generator",
      },
      {
        title: "HITL citation review",
        caption: "First checkpoint: the reviewer sees exactly which source passages were retrieved and drops anything irrelevant before the pipeline reads further.",
        src: "/projects/jms-test-spec-generator/ts-hitl-citations.png",
        alt: "HITL citation review screen",
      },
      {
        title: "HITL evidence curation",
        caption: "Second checkpoint: the evidence pack. Keep the grounded facts, remove the noise, and everything downstream inherits the cleanup.",
        src: "/projects/jms-test-spec-generator/ts-hitl-evidence.png",
        alt: "HITL evidence review screen",
      },
      {
        title: "HITL testable assertions",
        caption: "Third checkpoint: the testable assertions that will become tests. This is the last stop before generation, so the reviewer curates exactly what gets tested.",
        src: "/projects/jms-test-spec-generator/ts-hitl-ta.png",
        alt: "HITL testable assertions screen",
      },
      {
        title: "Generated test cases",
        caption: "The output: concrete test cases, each mapped back to the assertions and evidence that justify it.",
        src: "/projects/jms-test-spec-generator/ts-hitl-test-cases.png",
        alt: "Generated test cases screen",
      },
      {
        title: "Context continuity analysis",
        caption: "A final health check: continuity scoring across the whole chain flags structural or semantic drift before the spec ships.",
        src: "/projects/jms-test-spec-generator/ts-context-preservation.png",
        alt: "Context continuity analysis screen",
      },
    ],
    videoPlaceholder: {
      title: "",
      description: "",
    },
    story: {
      problem: {
        intro:
          "Every JMS release (I worked on v6.0 through v11) needs a test specification: a document mapping what the product is supposed to do to the concrete tests that prove it does. Writing one by hand means an engineer reading across PRDs, architecture docs, LiveLabs tutorials, and feature tickets, then manually deriving requirements and test cases from all of it.",
        failureModes: [
          {
            title: "It's slow.",
            body: "Synthesizing a release's worth of documentation into a complete spec is hours of focused work per feature.",
          },
          {
            title: "Coverage slips.",
            body: "Requirements are scattered across documents; it's easy to miss one and ship a gap in test coverage.",
          },
          {
            title: "Traceability decays.",
            body: "Enterprise work requires showing that every test maps to a requirement that maps to a real source. Maintained by hand, that mapping is tedious to build and the first thing to rot.",
          },
        ],
        conclusion:
          "And the obvious shortcut, \"just ask an LLM\", makes the last problem worse. A vanilla model produces fluent, confident specs that quietly hallucinate requirements and offer no way to audit where anything came from. When the output has to be defensible, fluent-but-ungrounded is worse than useless.",
      },
      audience:
        "The JMS Software Quality Engineering (SQE) team. The user is a test engineer at the start of a release cycle, staring at a pile of feature documentation, who needs to turn it into a complete, reviewable test spec, fast, and without losing the thread back to the source requirements.",
      approach: {
        intro:
          "A multi-stage pipeline that reads the source documents and builds the spec step by step, so nothing in the final document is orphaned from its evidence. In practice, that means:",
        bullets: [
          {
            title: "Retrieval and generation, split by job.",
            body: "OCI GenAI Agent finds the relevant source material; Gemini writes from it. Between every step sits a verification pass that checks the citations still hold, so a hallucination gets caught where it appears instead of propagating into the final spec.",
          },
          {
            title: "A four-layer citation chain.",
            body: "Every generated test traces back through Citation, Fact, Requirement, and Testable Assertion. In the reviewer, clicking any test walks that full chain back to the exact source documents, so an auditor never has to take the tool's word for anything.",
          },
          {
            title: "Three workflow modes, matched to the stakes.",
            body: "Auto runs end-to-end for routine features. HITL (human in the loop) pauses at every stage so a reviewer can curate citations, evidence, and assertions before generation continues. SuperHuman adds preview and run control for power users. The engineer chooses how much oversight each document deserves.",
          },
          {
            title: "Quality scored, not assumed.",
            body: "An LLM-as-judge stage grades the output of each pipeline stage, and structured reviewer feedback flows back into prompt and retrieval tuning, so the pipeline gets better with use.",
          },
          {
            title: "Built to run in production.",
            body: "Deployed inside Oracle for the JMS quality engineering team: live progress streaming, saved sessions, multiple engineers working concurrently, one-click Word export, and structured logging for ongoing monitoring.",
          },
        ],
      },
      significance:
        "The brief wasn't just generating text, it was generating text you can take to an audit. The same architecture (grounded retrieval + a complete citation chain + verification + human review) is exactly what regulated, compliance-sensitive document workflows need: KYC narratives, AML investigation write-ups, regulatory filings, compliance reports. This is the shape of GenAI that can pass an audit, not just sound right.",
    },
    pipeline: {
      stages: [
        { label: "Source docs", sublabel: "PRDs, architecture, LiveLabs, tickets" },
        { label: "Retrieval", sublabel: "OCI GenAI Agent" },
        { label: "Generation", sublabel: "Gemini" },
        { label: "Verification", sublabel: "Citation + LLM-as-judge" },
        { label: "Test specification" },
      ],
      feedback:
        "LLM-as-judge + human-in-the-loop feedback returns to prompt and retrieval tuning",
    },
    problemFlows: [
      {
        label: "The manual path, every release, per feature",
        lanes: [
          [
            { title: "Scattered sources", sub: "PRDs, architecture docs, LiveLabs, tickets" },
            { title: "Read everything", sub: "hours of focused work per feature", variant: "problem" },
            { title: "Derive requirements by hand", sub: "scattered, easy to miss one", variant: "problem" },
            { title: "Build traceability by hand", sub: "tedious, and the first thing to rot", variant: "problem" },
          ],
          [
            { title: "Coverage slips", sub: "a missed requirement ships as a gap in test coverage", variant: "warn" },
          ],
        ],
      },
      {
        label: "The obvious shortcut fails too",
        lanes: [
          [
            { title: "Just ask an LLM", sub: "one-shot generation" },
            { title: "Fluent, confident spec", sub: "reads perfectly" },
            { title: "Hallucinated requirements", sub: "no way to audit where anything came from", variant: "problem" },
          ],
          [
            { title: "Fluent but ungrounded is worse than useless", sub: "the output has to be defensible", variant: "warn" },
          ],
        ],
      },
    ],
    solutionFlows: [
      {
        label: "The five-stage pipeline, verified at every link",
        lanes: [
          [
            { title: "Source docs", sub: "PRDs, architecture, LiveLabs, tickets" },
            { title: "Citations", sub: "retrieved passages", variant: "flow" },
            { title: "Evidence facts", sub: "curated by the reviewer", variant: "flow" },
            { title: "Requirements", sub: "derived from evidence", variant: "flow" },
            { title: "Testable assertions", sub: "curated before generation", variant: "flow" },
            { title: "Test cases", sub: "batched generation", variant: "good" },
          ],
          [
            { title: "Verification between every stage", sub: "citation integrity enforced before errors can propagate", variant: "good" },
          ],
          [
            { title: "Every test traces to its source", sub: "click a test and walk Citation, Fact, Requirement, Assertion back to the document", variant: "warn" },
          ],
        ],
      },
      {
        label: "Oversight matched to the stakes",
        lanes: [
          [{ title: "Auto", sub: "runs end-to-end for routine features" }],
          [{ title: "HITL", sub: "reviewer curates citations, evidence, and assertions between stages", variant: "ai" }],
          [{ title: "SuperHuman", sub: "preview and run control for power users", variant: "app" }],
        ],
      },
    ],
    decomposition: {
      steps: [
        { value: "8", label: "source citations" },
        { value: "16", label: "evidence facts" },
        { value: "9", label: "requirements" },
        { value: "13", label: "testable assertions" },
      ],
      final: { value: "19", label: "concrete tests" },
    },
    beforeAfter: {
      headers: { before: "Manual process", after: "With the generator" },
      rows: [
        { aspect: "Time per spec", before: "Hours of reading + synthesis", after: "60% less" },
        { aspect: "Traceability", before: "Hand-maintained, decays", after: "Built-in, every test grounded" },
        { aspect: "Coverage risk", before: "Easy to miss scattered requirements", after: "Systematic decomposition" },
        { aspect: "Audit-readiness", before: "Reconstructed after the fact", after: "Native, navigable" },
      ],
    },
    impactMetrics: [
      { title: "Spec creation time", value: "60% faster", description: "for the JMS SQE team" },
      { title: "Ungrounded outputs", value: "Zero", description: "every test traces to source" },
      { title: "Deployment", value: "In production", description: "enterprise-deployed, monitored" },
    ],
    challenges: [
      {
        title: "Hallucination that survives review",
        challenge:
          "A fluent spec with an invented requirement is worse than no spec, reviewers can't catch what looks plausible.",
        solution:
          "A verification step at every chain link, plus CitationService auto-validation and auto-fix, so citation integrity is enforced after generation rather than assumed. Nothing ships orphaned from its evidence.",
      },
      {
        title: "One-shot generation collapses on real documentation",
        challenge:
          "Long, scattered source material makes single-prompt generation drop requirements and compound errors invisibly.",
        solution:
          "Decomposed generation into five staged artifacts, citations, facts, requirements, assertions, tests, each independently reviewable, with cross-batch duplicate detection and coverage-gap scoring surfacing anything that fell through.",
      },
      {
        title: "Trust calibrated to the stakes",
        challenge:
          "One workflow can't fit both a routine feature and a high-scrutiny release document.",
        solution:
          "Three modes, Auto end-to-end, HITL with review checkpoints between every stage, and SuperHuman with preview/run control, so human effort scales with the risk of the output.",
      },
    ],
    traceExplorer: true,
  },
  {
    id: "data-redaction",
    layout: "document",
    title: "Sensitive Data Redaction from Images",
    subtitle: "Automated PII Detection and Masking",
    description:
      "Built a Helidon SE pipeline using OCI Vision and OCI GenAI to detect and redact sensitive data from images before publication, with a user-friendly UI where users point the tool at the bucket holding their images, review each redaction, correct it if needed, and upload the processed images back to the bucket. Reduced manual effort by 85%.",
    organization: "Oracle",
    organizationHref: "https://www.oracle.com/",
    organizationIcon: "/icons/oracle.png",
    cardMeta: "Oracle · 2025",
    status: "shipped",
    period: "2025",
    featured: true,
    metric: { value: "85%", label: "reduction in manual effort" },
    techStack: ["Java", "Helidon SE", "OCI Vision", "OCI GenAI", "OCI Object Storage", "Multi-agent", "Image Processing"],
    testimonial: {
      image: "/projects/redact-sensetive-data/colleague-testimonial.png",
      alt: "Message from a colleague about the sensitive data redaction tool",
      caption:
        "Feedback from a colleague after adopting the tool: roughly 80% less time than manual processing when working with multiple images, with better consistency and less risk of human error.",
    },
    detailSummary:
      "A Helidon SE web application that ingests document images from OCI Object Storage and coordinates three AI agents, Vision for detection and OCR, Security for contextual sensitivity classification, and Redaction for masking, with a human reviewer approving every output before publication. Users point the tool at the bucket holding their images, review each proposed redaction against the original, correct it if needed, and upload the processed set back to the bucket. Reduced manual sanitization effort by 85% and was adopted internally across Oracle teams.",
    highlights: [
      "Three coordinated agents with clean separation of concerns: OCI Vision for detection and OCR, OCI GenAI for contextual sensitivity classification, not regex, so it catches sensitive data that matches no fixed pattern, and a dedicated redaction agent for masking.",
      "In-memory processing with a mandatory human approval gate: images are never written anywhere until the reviewer approves, edits, or discards each redaction. No unreviewed output leaves the system.",
      "Bucket-to-bucket workflow a non-engineer can run: point at an OCI Object Storage bucket, review before-and-after for each image, correct where needed, and publish the processed set back.",
    ],
    design: [
      {
        title: "Redaction workflow",
        description:
          "The workflow detects sensitive regions first, then masks only after enough contextual validation to keep images useful.",
      },
    ],
    architecture: [
      {
        title: "Image pipeline",
        description: "Helidon SE coordinates ingestion, detection, masking, and sanitized output generation.",
        bullets: ["Image preprocessing", "OCI Vision detection", "Context-aware masking"],
      },
    ],
    diagrams: [
      {
        title: "System architecture",
        caption: "End-to-end system diagram for the sensitive data redaction pipeline across ingestion, detection, redaction, validation, and storage.",
        src: "/projects/redact-sensetive-data/redact-sensitive-data-from-images-arch.png",
        alt: "System architecture diagram for sensitive data redaction",
      },
    ],
    gallery: [
      {
        title: "Human-in-the-loop review",
        caption: "The review surface with a before-and-after comparison, approve, edit, or discard each redaction before anything is published.",
        src: "/projects/redact-sensetive-data/redacted-images.png",
        alt: "Before-and-after redaction review surface",
      },
      {
        title: "Run summary",
        caption: "Summary dashboard showing completion state, execution time, agent coordination, and processed image counts.",
        src: "/projects/redact-sensetive-data/final-screen.png",
        alt: "Run summary for sensitive data redaction",
      },
      {
        title: "Processing log output",
        caption: "Operator-facing logs used to understand what the redaction workflow processed and where outputs were written.",
        src: "/projects/redact-sensetive-data/logs-for-user.png",
        alt: "Processing log output for redaction workflow",
      },
    ],
    videoPlaceholder: {
      title: "Redaction demo",
      description: "Automated detection, masking, and final publication-ready output.",
      youtubeId: "e5pXxOkBjKU",
    },
    demoSlot: {
      title: "Demo",
      description: "Automated detection, masking, and human review, end-to-end.",
    },
    story: {
      problem: {
        intro:
          "Oracle LiveLabs tutorials are full of screenshots of real cloud consoles, and real consoles are full of sensitive data: compartment names, OCIDs, email addresses, tenancy details. Before publication, every image had to be inspected and masked by hand.",
        failureModes: [
          {
            title: "It's slow.",
            body: "Sanitizing a tutorial's worth of screenshots is tedious pixel-level work, repeated for every release.",
          },
          {
            title: "A single miss is a leak.",
            body: "One overlooked OCID or email address in a published tutorial is exposed to the public internet, and screenshots rarely get a second review once shipped.",
          },
          {
            title: "Rules can't catch it.",
            body: "Sensitive values in screenshots are unstructured, names, internal project labels, console fields, data that matches no fixed pattern a regex could find.",
          },
        ],
        conclusion:
          "The work needed automation, but not blind automation: publication is irreversible, so a human had to stay in the loop.",
      },
      audience:
        "LiveLabs authors and documentation teams publishing console screenshots, people who need publication-ready images without doing pixel-level masking by hand, and without trusting an unreviewed model with an irreversible action.",
      approach: {
        intro:
          "A Helidon SE web application that coordinates three specialized agents over in-memory images, with a human approval gate before anything is written:",
        bullets: [
          {
            title: "Three agents, three jobs.",
            body: "OCI Vision handles detection and OCR; OCI GenAI classifies sensitivity in context, catching data no regex would; a dedicated redaction agent applies the masks.",
          },
          {
            title: "In-memory, gated output.",
            body: "Images are fetched from the bucket and processed entirely in memory. Nothing is uploaded until the reviewer signs off, approve, edit, or discard, per image.",
          },
          {
            title: "A review surface built for speed.",
            body: "A before-and-after comparison per image, with one-click editing of any redaction before final upload.",
          },
          {
            title: "Bucket-to-bucket UX.",
            body: "The user supplies the source bucket and output folder; the tool handles ingestion, processing, review, and publication back to OCI Object Storage.",
          },
        ],
      },
      significance:
        "This is the pattern for AI touching sensitive or irreversible surfaces: automation does the heavy lifting, a human approval gate owns the final action, and the outcome is measured. The same shape applies wherever generated output leaves the building, compliance documents, client communications, published content.",
    },
    pipeline: {
      stages: [
        { label: "OCI bucket", sublabel: "source images" },
        { label: "Vision agent", sublabel: "detection + OCR" },
        { label: "Security agent", sublabel: "GenAI sensitivity classification" },
        { label: "Redaction agent", sublabel: "masking" },
        { label: "Human review", sublabel: "approve · edit · discard" },
        { label: "Processed bucket" },
      ],
      feedback: "Nothing is uploaded until the reviewer approves, every image passes the human gate",
    },
    toolSurface: {
      heading: { eyebrow: "The agents", title: "Three agents, three jobs" },
      groups: [
        { label: "Vision Agent", tool: "OCI Vision, detection + OCR" },
        { label: "Security Agent", tool: "OCI GenAI, contextual sensitivity classification" },
        { label: "Redaction Agent", tool: "masking + publication-ready output" },
      ],
      caption: "Three specialized agents with clean separation of concerns, coordinated by Helidon SE over in-memory images.",
    },
    impactMetrics: [
      { title: "Manual effort", value: "85% less", description: "vs. hand-masking every screenshot" },
      { title: "Unreviewed images published", value: "Zero", description: "mandatory human approval gate" },
      { title: "Adoption", value: "Cross-team", description: "deployed internally across Oracle" },
    ],
    beforeAfter: {
      headers: { before: "Manual sanitization", after: "With the redaction pipeline" },
      rows: [
        { aspect: "Time per tutorial", before: "Hours of pixel-level masking", after: "85% less" },
        { aspect: "Coverage", before: "Depends on the reviewer's eye", after: "Vision + GenAI sweep every image" },
        { aspect: "Unstructured PII", before: "Easy to miss, no pattern to search", after: "Classified in context by GenAI" },
        { aspect: "Publication risk", before: "One miss ships forever", after: "Human gate before anything is written" },
      ],
    },
    challenges: [
      {
        title: "PII that matches no pattern",
        challenge:
          "Sensitive values in console screenshots, names, project labels, compartment identifiers, are unstructured. Regex-based scanning misses exactly the data that matters most.",
        solution:
          "Layered OCI GenAI contextual sensitivity classification on top of Vision OCR, so sensitivity is judged in context rather than by pattern, catching data no fixed rule could find.",
      },
      {
        title: "Publication is irreversible",
        challenge:
          "One unreviewed image reaching a public tutorial is a permanent leak, automation could never be allowed to publish on its own.",
        solution:
          "Processed everything in memory behind a mandatory approval gate: the reviewer approves, edits, or discards each image, and nothing is written to the output bucket until they do.",
      },
      {
        title: "Three jobs, one pipeline",
        challenge:
          "Detection, classification, and masking pull in different directions, a monolithic step is hard to tune and harder to debug.",
        solution:
          "Split the work across three coordinated agents with clean separation of concerns, so each stage can be tuned and audited independently.",
      },
    ],
    redactionCompare: true,
  },
  {
    id: "jms-livelabs-generator",
    layout: "document",
    title: "JMS LiveLabs Generator",
    subtitle: "RAG-Powered Documentation Intelligence · Oracle (Proposed & PoC Delivered)",
    description:
      "An OCI Generative AI RAG system that ingests JMS design documents, PRDs, Figma files, API specs, meeting notes, into a knowledge base, enabling authors to generate LiveLabs tutorials and SQE test instructions via a chat interface. Proposed, costed, and PoC-delivered.",
    organization: "Oracle",
    organizationHref: "https://www.oracle.com/",
    organizationIcon: "/icons/oracle.png",
    cardMeta: "Oracle · 2025",
    status: "shipped",
    period: "2025",
    featured: true,
    metric: { value: "60%+", label: "estimated reduction in LiveLabs authoring time" },
    techStack: [
      "Java",
      "OCI GenAI Agent",
      "RAG",
      "LLaMA",
      "Knowledge Base",
      "OCI Object Storage",
      "Prompt Engineering",
      "Python",
    ],
    detailSummary:
      "LiveLabs content creation at Oracle required authors to manually research feature documentation across PRDs, one-pagers, Figma UI files, test specs, and meeting minutes before writing a single line. This project proposed and delivered a PoC for an OCI Generative AI Agent with RAG that ingests all these document types into a structured knowledge base. Authors then interact via a chat interface, similar to ChatGPT, to generate tailored LiveLabs content and SQE testing instructions from the same knowledge base. A full cost model was produced: one-time embedding, monthly OCI Object Storage, and per-query transaction costs at ~$0.018/request.",
    highlights: [
      "Dual-use RAG knowledge base: The same knowledge base generates both LiveLabs tutorials for customers and SQE testing instructions for internal QA teams, one ingestion pipeline, two content surfaces.",
      "Heterogeneous document ingestion: Designed ingestion pipelines for one-pagers, PRDs, UI Figma files, API specifications, design documents, meeting minutes, and test specs, not a single document type, but the full authoring ecosystem.",
      "Full cost model and OAR compliance scope: Delivered a production-ready cost estimate (embedding + storage + query tiers on OCI) and scoped OAR compliance requirements for enterprise deployment, not just a prototype, but a deployable proposal.",
    ],
    design: [
      {
        title: "Authoring workflow transformation",
        description:
          "The concept starts from the real bottleneck: authors manually stitching together fragmented source material before they can draft tutorials or test instructions.",
        bullets: ["Manual research reduction", "Single chat interface", "Shared enterprise knowledge base"],
      },
      {
        title: "Two outputs from one RAG surface",
        description:
          "The same retrieved context can be shaped into customer-facing LiveLabs walkthroughs or internal SQE validation instructions, reducing duplicated documentation effort.",
        bullets: ["LiveLabs generation", "SQE instruction generation", "Prompt-shaped output"],
      },
    ],
    architecture: [
      {
        title: "Knowledge ingestion and retrieval",
        description:
          "Enterprise documents are chunked, embedded, and stored in a retrievable corpus so the agent can ground responses in product artifacts instead of open-ended generation.",
        bullets: ["OCI GenAI Agent", "RAG retrieval", "Object Storage-backed corpus"],
      },
      {
        title: "Deployment planning beyond the PoC",
        description:
          "The work included a realistic production cost model and deployment-readiness scope, covering embedding cost, storage growth, per-query economics, and OAR constraints.",
        bullets: ["~$0.018 per request", "Embedding cost model", "OAR compliance scope"],
      },
    ],
    diagrams: [
      {
        title: "RAG agent architecture",
        caption: "OCI Gen AI Agent architecture with RAG knowledge base.",
        src: "/projects/jms-livelabs-generator/livelabs-generator-arch.png",
        alt: "JMS LiveLabs Generator architecture diagram",
      },
      {
        title: "Manual authoring workflow",
        caption: "Current manual authoring workflow, the problem being solved.",
        src: "/projects/jms-livelabs-generator/livelabs-manual-flow.png",
        alt: "Manual authoring workflow for LiveLabs generation",
      },
      {
        title: "Primary use cases",
        caption: "Three AI-assisted use cases in the LiveLabs authoring process.",
        src: "/projects/jms-livelabs-generator/livelabs-use-cases.png",
        alt: "LiveLabs Generator use case overview",
      },
    ],
    gallery: [],
    videoPlaceholder: {
      title: "LiveLabs generator demo",
      description: "Walkthrough of the ingestion flow, chat generation experience, and cost-aware deployment model.",
      youtubeId: "Qr76JnveHps",
    },
    demoSlot: {
      title: "Demo",
      description: "From document ingestion to chat-driven tutorial generation.",
    },
    story: {
      problem: {
        intro:
          "Every JMS feature ships with a LiveLabs tutorial, the hands-on lab customers use to learn it. Before an author writes a single line, they have to research the feature across PRDs, one-pagers, Figma UI files, API specifications, design documents, meeting minutes, and test specs, scattered across different systems.",
        failureModes: [
          {
            title: "Research eats the authoring time.",
            body: "Authors spend more time hunting for context across documents and tools than actually writing the tutorial.",
          },
          {
            title: "The same synthesis happens twice.",
            body: "SQE teams derive test instructions from the same feature documentation, a separate team repeating the same research for a different output.",
          },
          {
            title: "Knowledge stays fragmented.",
            body: "There is no single queryable source: the feature's truth lives across formats (documents, Figma, minutes) that never converge.",
          },
        ],
        conclusion:
          "The bottleneck wasn't writing, it was assembling scattered context. That's a retrieval problem, not an authoring problem.",
      },
      audience:
        "LiveLabs authors writing customer-facing tutorials, and SQE engineers writing internal test instructions, two teams deriving different documents from the same underlying feature knowledge.",
      approach: {
        intro:
          "An OCI Generative AI Agent with RAG over a structured knowledge base of the full authoring ecosystem, proposed, costed, and delivered as a PoC:",
        bullets: [
          {
            title: "One ingestion pipeline, heterogeneous sources.",
            body: "One-pagers, PRDs, Figma UI files, API specifications, design documents, meeting minutes, and test specs, chunked, embedded, and stored in an OCI Object Storage-backed corpus.",
          },
          {
            title: "Chat interface, grounded answers.",
            body: "Authors interact the way they would with ChatGPT, but responses are grounded in retrieved product artifacts instead of open-ended generation.",
          },
          {
            title: "Two content surfaces from one knowledge base.",
            body: "The same retrieved context is shaped by prompting into either customer-facing LiveLabs walkthroughs or internal SQE validation instructions, one corpus, two audiences.",
          },
          {
            title: "Costed for production, not just demoed.",
            body: "A full cost model, one-time embedding, monthly Object Storage, ~$0.018 per query, plus OAR compliance scope for enterprise deployment.",
          },
        ],
      },
      significance:
        "Most PoCs stall because nobody prices them. This one shipped with the economics and the compliance scope attached, the difference between a demo and a deployable proposal. And the dual-surface pattern (one knowledge base serving multiple audiences) generalizes to any organization where several teams re-synthesize the same source material into different documents.",
    },
    pipeline: {
      stages: [
        { label: "Source documents", sublabel: "PRDs · Figma · API specs · minutes · test specs" },
        { label: "Ingestion", sublabel: "chunk + embed" },
        { label: "Knowledge base", sublabel: "OCI Object Storage corpus" },
        { label: "OCI GenAI Agent", sublabel: "RAG retrieval" },
        { label: "Chat interface" },
        { label: "Two outputs", sublabel: "LiveLabs tutorials · SQE instructions" },
      ],
      feedback: "Prompt shaping turns the same retrieved context into customer tutorials or internal test instructions",
    },
    impactMetrics: [
      { title: "Authoring time", value: "60%+ less", description: "estimated reduction in LiveLabs authoring" },
      { title: "Cost per query", value: "~$0.018", description: "full production cost model delivered" },
      { title: "Content surfaces", value: "2", description: "customer tutorials + SQE test instructions" },
    ],
    beforeAfter: {
      headers: { before: "Manual authoring", after: "With the generator" },
      rows: [
        { aspect: "Feature research", before: "Hunt across PRDs, Figma, minutes, tickets", after: "One chat query over the knowledge base" },
        { aspect: "SQE test instructions", before: "Re-synthesized separately by QA", after: "Generated from the same corpus" },
        { aspect: "Source of truth", before: "Whatever the author happens to find", after: "A single ingested, queryable corpus" },
        { aspect: "Path to production", before: "Demo-only PoCs stall", after: "Costed (~$0.018/query) with OAR scope" },
      ],
    },
    challenges: [
      {
        title: "Ingesting a heterogeneous corpus",
        challenge:
          "The authoring ecosystem spans one-pagers, PRDs, Figma files, API specs, design documents, meeting minutes, and test specs, wildly different formats and structures.",
        solution:
          "Designed per-document-type ingestion feeding one chunked, embedded corpus in OCI Object Storage, so the agent grounds on the full ecosystem instead of a single format.",
      },
      {
        title: "Two audiences, one knowledge base",
        challenge:
          "Customer tutorials and internal QA instructions need different tone, structure, and detail, but duplicating the corpus doubles the maintenance.",
        solution:
          "Kept one retrieval surface and shaped the output through per-audience prompting: one ingestion pipeline, two content surfaces, zero duplicated knowledge.",
      },
      {
        title: "Making a PoC deployable",
        challenge:
          "Most internal PoCs die at 'interesting demo' because nobody can say what production would cost.",
        solution:
          "Delivered the economics with the prototype, one-time embedding, monthly storage, ~$0.018 per query, and scoped OAR compliance, turning the PoC into a decision-ready proposal.",
      },
    ],
  },
  {
    id: "agentic-ui-navigator",
    layout: "document",
    title: "Agentic UI Test Navigator",
    subtitle: "ReAct-Pattern Browser Agent · Oracle (Research & PoC)",
    description:
      "A ReAct-pattern agentic system built on OCI GenAI that autonomously navigates the JMS web UI to perform exploratory testing. The agent reasons, decides, and observes across 39 steps, mapping interactive elements, clicking, navigating, and completing tasks without scripted test paths.",
    organization: "Oracle",
    organizationHref: "https://www.oracle.com/",
    organizationIcon: "/icons/oracle.png",
    cardMeta: "Oracle · 2026",
    status: "shipped",
    period: "2026",
    featured: true,
    metric: { value: "70%", label: "target reduction in manual QA triage" },
    techStack: [
      "Java",
      "OCI GenAI",
      "ReAct",
      "Playwright",
      "Browser Automation",
      "Agentic AI",
      "Function Calling",
      "LLM Reasoning",
      "QA Intelligence",
    ],
    detailSummary:
      "Traditional UI testing requires scripted paths, brittle, expensive to maintain, and blind to unscripted user behaviour. This project explores a ReAct-pattern agent that operates a browser autonomously using six tools: Login, Map Elements, Navigate, Click, Screenshot, and Wait. Given a natural language goal, for example, 'Start a Static Java Library Scan Work request and view the Work request', the agent decomposes the task, maps 238 interactive page elements, reasons through 39 steps using THOUGHT -> DECISION -> OBSERVATION cycles, and completes the workflow. The reasoning trace is logged in full, making the agent's decision process auditable and debuggable.",
    highlights: [
      "ReAct reasoning framework, not scripted automation: The agent uses a THOUGHT -> DECISION -> OBSERVATION loop at every step. It detects stale element maps, decides when to re-scan, handles empty states, and self-corrects, behaviour that scripted Playwright or Selenium tests cannot replicate.",
      "238 interactive elements mapped per page: The Map Elements tool dynamically scans and classifies every interactive element on a page (divs, buttons, anchors, SVGs, paths) giving the agent a real-time element graph to reason over, no hard-coded selectors.",
      "Full reasoning trace, auditable by design: Every reasoning step is logged with structured labels (THOUGHT, DECISION, OBSERVATION, FINAL DECISION), producing an audit trail of why the agent took each action. 39 steps. Zero scripted paths.",
    ],
    design: [
      {
        title: "Exploratory testing instead of fixed scripts",
        description:
          "The system accepts a user goal in natural language and then plans, reacts, and adapts at runtime instead of replaying a brittle scripted sequence.",
        bullets: ["Goal-driven execution", "Self-correction", "Unscripted path exploration"],
      },
      {
        title: "Tool-mediated browser control",
        description:
          "Reasoning stays separate from action execution: the model chooses among six browser tools and uses observation feedback to decide the next move.",
        bullets: ["Login", "Map Elements", "Navigate", "Click", "Screenshot", "Wait"],
      },
    ],
    architecture: [
      {
        title: "ReAct control loop",
        description:
          "OCI GenAI drives a repeated loop of thought, decision, action, and observation, allowing the browser agent to adapt when the UI changes or navigation branches unexpectedly.",
        bullets: ["Reasoning loop", "Tool calling", "Auditable trace log"],
      },
      {
        title: "Element graph generation",
        description:
          "Before acting, the agent scans and classifies interactive elements so it can reason over a live page model instead of relying on brittle selectors or pre-authored flows.",
        bullets: ["238 elements mapped", "Dynamic page scan", "No hard-coded selectors"],
      },
    ],
    diagrams: [
      {
        title: "Agent architecture",
        caption: "ReAct agent architecture, LLM reasoning with 6 browser tools.",
        src: "/projects/agentic-ui-navigator/agentic-ui-arch.png",
        alt: "Agentic UI Navigator architecture diagram",
      },
      {
        title: "Reasoning trace",
        caption: "39-step reasoning trace: THOUGHT -> DECISION -> OBSERVATION log.",
        src: "/projects/agentic-ui-navigator/agentic-ui-results.png",
        alt: "Reasoning trace for the Agentic UI Test Navigator",
      },
    ],
    gallery: [],
    videoPlaceholder: { title: "", description: "" },
    story: {
      problem: {
        intro:
          "Traditional UI test automation replays scripted paths. Scripts are brittle, a selector change breaks the suite, expensive to maintain, and blind to everything nobody thought to script. Exploratory testing stays manual because scripts can't decide anything.",
        failureModes: [
          {
            title: "Brittle by construction.",
            body: "Hard-coded selectors and fixed paths break with every UI change.",
          },
          {
            title: "Maintenance eats the savings.",
            body: "Teams spend the time saved on execution rewriting the scripts that broke.",
          },
          {
            title: "Zero exploration.",
            body: "A script only checks what someone thought to script, unscripted user behaviour goes untested.",
          },
        ],
        conclusion: "",
      },
      audience:
        "The JMS QA organization, where manual exploratory testing and triage was the target, with a 70% reduction in manual triage as the goal.",
      approach: {
        intro:
          "A ReAct-pattern agent on OCI GenAI that operates a real browser through six tools, given a natural-language goal, it plans, acts, and adapts:",
        bullets: [
          {
            title: "Reason, then act.",
            body: "A THOUGHT → DECISION → OBSERVATION loop at every step, acting through Login, Map Elements, Navigate, Click, Screenshot, and Wait tools and adapting to what it observes.",
          },
          {
            title: "A live element graph.",
            body: "Map Elements scans and classifies every interactive element on the page, 238 on the JMS console, so the agent reasons over a real-time page model with no hard-coded selectors.",
          },
          {
            title: "Self-correction built in.",
            body: "The agent detects stale element maps, decides when to re-scan, and handles empty states, behaviour scripted Playwright or Selenium tests cannot replicate.",
          },
          {
            title: "Auditable by design.",
            body: "Every reasoning step is logged with structured labels, producing a complete trace of why the agent took each action.",
          },
        ],
      },
      significance:
        "Goal-driven browser agents turn UI testing from replaying scripts into delegating intent. The pattern, tool-mediated control, a live model of the environment, an auditable reasoning trace, is the foundation for agentic QA anywhere.",
    },
    pipeline: {
      stages: [
        { label: "Goal", sublabel: "natural language task" },
        { label: "Map elements", sublabel: "238 interactive elements" },
        { label: "ReAct loop", sublabel: "THOUGHT → DECISION → OBSERVATION" },
        { label: "Browser tools", sublabel: "6 tools via Playwright" },
        { label: "Trace log", sublabel: "auditable, step by step" },
      ],
    },
    challenges: [
      {
        title: "No selectors to hold onto",
        challenge:
          "Scripted automation depends on stable selectors; an agent exploring freely has none.",
        solution:
          "The Map Elements tool builds a live element graph per page, divs, buttons, anchors, and SVGs classified on the fly, so the agent addresses the UI by its current state, not pre-authored selectors.",
      },
      {
        title: "Knowing when the map is stale",
        challenge:
          "After navigation or dynamic updates, the agent's model of the page silently drifts from reality.",
        solution:
          "Prompted the ReAct loop to treat failed observations as stale-map signals and decide when to re-scan, self-correction as a reasoned action rather than a hard-coded retry.",
      },
      {
        title: "39 steps without drifting off-goal",
        challenge:
          "Long tool-use chains compound small reasoning errors into dead ends.",
        solution:
          "Structured every cycle with labeled THOUGHT / DECISION / OBSERVATION stages and a FINAL DECISION gate, keeping the agent aligned to its goal and leaving a full audit trail of the 39-step run.",
      },
    ],
    impactMetrics: [
      { title: "Reasoning steps", value: "39", description: "one goal completed end-to-end, zero scripted paths" },
      { title: "Elements mapped", value: "238", description: "live per-page element graph, no hard-coded selectors" },
      { title: "Target triage reduction", value: "70%", description: "goal for manual QA triage effort" },
    ],
  },
  {
    id: "hdb-resale-xai",
    layout: "document",
    title: "PropertyLens",
    subtitle: "Explainable AI for Singapore HDB resale pricing",
    description:
      "An end-to-end explainable valuation system for Singapore HDB resale flats, built as a NUS-ISS Intelligent Reasoning Systems group capstone. A hybrid cluster-stack regressor hits 3.92% MAPE on a strict temporal hold-out — a 68% error reduction over a single XGBoost baseline — and every prediction ships with four complementary explanations: SHAP driver attributions, comparable past sales, counterfactual offer bands, and market sanity rules.",
    organization: "NUS-ISS capstone",
    organizationHref: "https://www.iss.nus.edu.sg/",
    organizationIcon: "/icons/nus-iss.svg",
    cardMeta: "NUS-ISS · 2026",
    status: "shipped",
    period: "Jan 2026 – May 2026",
    featured: true,
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "Neo4j",
      "XGBoost",
      "LightGBM",
      "SHAP",
      "EfficientNet",
      "Ollama",
      "Chrome Extension",
    ],
    detailSummary:
      "Every HDB resale transaction in Singapore needs three artefacts — a defensible fair value, a negotiation plan, and a pricing strategy — and today none of them exist outside the head of a property agent. PropertyLens closes that gap: an end-to-end explainable valuation system built on ~900k public transactions from data.gov.sg. A hybrid cluster-stack regressor delivers 3.92% MAPE on a strict temporal hold-out (68% below a single-XGBoost baseline), and every prediction carries four complementary explanations, a photo-condition score, an auditable knowledge-graph chatbot, an 11-view React app, and a Chrome extension that bridges PropertyGuru listings straight into the valuation flow. Built by a group of three for the Intelligent Reasoning Systems module of the NUS MTech in AI — I was responsible for the front end, the XAI layer, and the hybrid cluster-stack model. The design principle throughout: explainability is a product requirement, not a feature.",
    highlights: [
      "Hybrid cluster-stack regressor hitting 3.92% MAPE on a strict temporal hold-out — a 68% error reduction over a single XGBoost baseline (12.18%).",
      "Four complementary XAI methods on every prediction: Composite TreeSHAP attribution, case-based reasoning over comparable sales, counterfactual offer planning, and Apriori-mined surrogate rules.",
      "An auditable Ask AI chatbot on a Neo4j knowledge graph with 3-stage RAG — 80% strict pass on a 25-case stress suite vs. 60% for the vector-RAG alternative.",
      "A full product, not a notebook: FastAPI backend (37 endpoints), 11-view React app, EfficientNet-B0 photo condition scorer with a bounded ±10% adjustment, and a Chrome extension bridging PropertyGuru listings into the valuation flow.",
    ],
    design: [
      {
        title: "Six tiers, one responsibility each",
        description:
          "Data (ingest ~900k HDB transactions plus amenity data from OneMap, MOE schools, and OpenStreetMap) → feature (8 user inputs to 77 model features) → ML (K-means router into per-cluster ensembles) → explainability (Composite TreeSHAP, BallTree CBR index, Apriori rules) → chatbot (Neo4j knowledge graph behind 3-stage RAG and tool dispatch) → presentation (FastAPI backend with 37 endpoints, React 18 frontend, Chrome extension). Each tier has one responsibility and one serialized output artefact flowing to the next.",
        bullets: [
          "Versioned, frozen CSVs",
          "77-column feature table",
          "Single joblib bundle",
          "Explainer pickle · BallTree · rules.json",
          "Populated Neo4j database",
        ],
      },
      {
        title: "Decoupled by serialized artefacts",
        description:
          "Everything is loaded once at backend startup; there is no online learning anywhere. That single decision is what makes every prediction reproducible months later — a grader, auditor, or journalist can hit /api/model-meta, verify the loaded artefact versions, and replay any prediction.",
        bullets: ["No online learning", "Loaded once at startup", "Reproducible via /api/model-meta"],
      },
      {
        title: "8 inputs → 77 features",
        description:
          "The split keeps the UX clean: the user types block, street, town, flat type, area, storey, lease year, and sale month. The system geocodes the block, computes every amenity distance and count, derives remaining lease, and fills in the other 69 features itself.",
        bullets: ["Transit · schools · hawkers · noise", "Lease + market timing", "Geocoding from the block address"],
      },
    ],
    architecture: [
      {
        title: "Why a hybrid cluster stack",
        description:
          "We didn't jump to the fancy architecture. A single XGBoost hits 12.18% MAPE; stacking four learners (Ridge, XGBoost, LightGBM, RF) under a Ridge meta-learner gets to 6.21% — the practical ceiling for monolithic models on this data. Inspecting the residuals showed why: they concentrate in three sub-markets. Central premium flats are priced by location and lease, mature-estate flats by amenity proximity, large suburban flats by floor area and model. One regressor was trying to fit three different price-formation processes with one set of feature interactions. The fix: a K-means router (k=3, chosen by silhouette analysis on floor area, remaining lease, transaction year, and a town-effect numeric) assigns each flat to a cluster, and only that cluster's four-learner ensemble runs. Result: 3.92% MAPE — a 37% cut below the stacking ceiling. The per-cluster meta-learner weights even match domain intuition: gradient-boosted trees carry ~70% of the weight in the suburban cluster, while Ridge takes 42% in the central cluster, where prices scale more linearly with area and lease.",
        bullets: ["12.18% → 6.21% → 3.92% MAPE", "k=3 by silhouette analysis", "Weights match domain intuition"],
        visuals: [
          {
            title: "Per-cluster expert ensemble",
            caption: "Each K-means cluster trains Ridge, XGBoost, LightGBM, and Random Forest base learners, stacked under a Ridge meta-learner.",
            src: "/projects/propertylens/expert-ensemble.png",
            alt: "Per-cluster four-learner ensemble with Ridge meta-learner",
          },
        ],
      },
      {
        title: "Composite TreeSHAP — exact attribution over a mixed stack",
        description:
          "The stack mixes tree models with a linear Ridge learner, so a single TreeExplainer call can't be exact for the whole thing. My approach: route the query to its cluster, run TreeSHAP on each tree learner (XGBoost via native pred_contribs to sidestep a known SHAP incompatibility), then linearly combine per-model SHAP values using the Ridge meta-learner's own coefficients. SHAP additivity makes this exact for the tree portion — validated at machine precision (median reconstruction error 0.00003%) across 100 stratified hold-out cases. The Ridge component is deliberately excluded and surfaced in the UI as a transparent reconciliation line (median gap 0.07%) rather than hidden inside the bars.",
        bullets: ["Exact for the tree portion", "Median reconstruction error 0.00003%", "Ridge gap disclosed, not hidden"],
      },
      {
        title: "Knowledge graph over vector RAG — chosen for auditability",
        description:
          "We built both retrieval pipelines and ran the same 25-case evaluation against each. The Neo4j path (LLM extracts weights/filters → parameterised Cypher → grounded narrative, powered by a local Gemma3 via Ollama) scored 80% strict pass; the Pinecone vector path scored 60%. The gap was decisive exactly where it matters for a real purchase: graph traversals (\"flats near Nanyang Primary\") and impossible queries, where vector similarity happily returns plausible-looking wrong answers while Cypher correctly returns zero rows with an explanation. The inferred parameters render in a debug panel, so users can audit every search.",
        bullets: ["80% vs. 60% strict pass", "Deterministic Cypher in the middle", "Inferred params in a debug panel"],
      },
      {
        title: "Photo condition CNN — pricing what no dataset captures",
        description:
          "No labelled HDB-interior condition dataset exists, so I trained EfficientNet-B0 on a proxy: LSUN bedroom photos labelled with LAION aesthetic scores (a CLIP ViT-L/14 head). Validation MAE: 0.483 on a 0–10 scale. The score drives a rule-based, bounded ±10% price adjustment — deliberately, because a clean photo shouldn't turn a $400k flat into a $500k flat, and a bounded rule also defends against adversarial uploads.",
        bullets: ["LSUN + LAION proxy training", "Validation MAE 0.483", "Bounded ±10% adjustment"],
      },
    ],
    diagrams: [],
    gallery: [
      {
        title: "Buyer view",
        caption: "Asking price vs. AI estimate vs. recent comparable sales, with a plain-language verdict — this asking price is within 1.5% of fair value.",
        src: "/projects/propertylens/buyer-view-verdict.png",
        alt: "PropertyLens Buyer view comparing asking price, AI estimate, and recent sales with a fair-price verdict",
      },
      {
        title: "What drives this price",
        caption: "The SHAP waterfall behind one estimate — market timing, floor size, remaining lease, room count, and mall access — with the Ridge linear term disclosed as its own reconciliation line.",
        src: "/projects/propertylens/price-drivers-waterfall.png",
        alt: "SHAP driver waterfall for a single PropertyLens prediction",
      },
      {
        title: "Shortlist comparison",
        caption: "Up to three shortlisted flats side by side — pricing, schools, transport, and lifestyle, with per-row winners and amenity overlays on the map.",
        src: "/projects/propertylens/shortlist-compare.png",
        alt: "PropertyLens Shortlist view comparing three flats with amenity map overlays",
      },
    ],
    videoPlaceholder: { title: "", description: "" },
    videos: [
      { title: "Promotional", youtubeId: "MOw4ViujnxU" },
      { title: "System design", youtubeId: "DreQUlIwX9I" },
    ],
    story: {
      problem: {
        intro:
          "Every HDB resale transaction in Singapore needs three artefacts: a defensible fair value, a negotiation plan, and a pricing strategy. Today, none of these exist outside the head of a property agent. The market is huge — 77% of Singapore residents live in HDB flats, and 25,000–30,000 resale transactions happen every year — yet the tools serving this market are surprisingly thin.",
        failureModes: [
          {
            title: "Listing portals show asking prices, not closing prices.",
            body: "A buyer on PropertyGuru calibrates against what other sellers hope to get, not what flats actually sold for. The asking price might sit 15% above real comparable sales, and there's no way to tell.",
          },
          {
            title: "Nothing explains what drives a price.",
            body: "A listing shows floor area, town, lease, and storey — but not how each factor moves the price for this flat. Floor area might be lifting the value by S$80,000 while the remaining lease drags it down by S$45,000. That breakdown exists nowhere.",
          },
          {
            title: "Existing AI valuers are black boxes.",
            body: "SRX X Value claims ~98% accuracy but outputs a single point estimate with zero attribution. Telling your agent \"the AI says S$620,000\" loses the conversation. Saying \"S$620,000 because the 122 sqm floor area is exceptional for this band, partially offset by the 60-year lease\" wins it.",
          },
          {
            title: "Comparing shortlisted flats is a five-browser-tab nightmare.",
            body: "Schools, MRT distance, hawker centres, price per sqm — no portal puts flats side by side.",
          },
        ],
        conclusion:
          "The raw material to fix this is public: data.gov.sg publishes every closing price back to 1990. The gap is the layer between that CSV and a real decision.",
      },
      audience:
        "Buyers validating an asking price on the largest purchase of their life. Avoiding a 1% overpay on a S$600,000 flat saves S$6,000 — and they need an offer plan, not just a number.\nSellers setting an asking price that earns the best return without sitting unsold for months. A listing 2% closer to the right number sells faster and avoids ~S$2,000–3,000/month in carrying cost.\nProperty agents who want defensible, data-backed analysis to hand to clients instead of \"trust me on the comps.\"",
      approach: {
        intro:
          "The solution is a web application. A buyer brings in a listing from PropertyGuru and gets an AI price prediction calculated by the hybrid cluster model. That price is then explained using SHAP, case-based reasoning, counterfactual analysis, and more — exactly the insight a buyer needs to build a negotiation plan. A seller can value their own property the same way before setting an asking price. The app also lets a buyer shortlist multiple properties and compare them side by side, or filter them by what's good for a family, a commuter, or a single person. Under the hood, PropertyLens is an end-to-end explainable valuation system, not a notebook. It ships:",
        bullets: [
          {
            title: "A hybrid cluster-stack regressor.",
            body: "Hits 3.92% MAPE on a strict temporal hold-out — a 68% error reduction over a single XGBoost baseline (12.18%).",
          },
          {
            title: "Four complementary XAI methods on every prediction.",
            body: "Composite TreeSHAP for per-feature attribution, Case-Based Reasoning for comparable past sales, counterfactual offer planning (walk-away / opening / fair bands), and Apriori-mined surrogate rules as market sanity checks.",
          },
          {
            title: "A photo condition CNN.",
            body: "EfficientNet-B0 scores renovation quality from one interior photo and applies a bounded ±10% price adjustment — capturing a signal no public dataset has.",
          },
          {
            title: "An auditable \"Ask AI\" chatbot.",
            body: "Built on a Neo4j knowledge graph with 3-stage RAG. Every answer exposes its inferred query parameters and retrieved rows — the user can see exactly why a result surfaced.",
          },
          {
            title: "A React web app with 11 views.",
            body: "Buyer, Seller, and a Shortlist view that solves the multi-tab comparison problem with persona-weighted scoring (Family / Commuter / Investor) and map overlays.",
          },
          {
            title: "A Chrome extension for PropertyGuru.",
            body: "Scrapes listings and deep-links them into the valuation flow with one click. Discovery stays on PropertyGuru; valuation moves to PropertyLens.",
          },
          {
            title: "Explainability as a product requirement, not a feature.",
            body: "Singapore's housing market is heavily regulated, and any tool influencing pricing at scale will eventually be examined for fairness and consistency. Every prediction in PropertyLens is reproducible and auditable.",
          },
        ],
      },
      significance:
        "Beyond the numbers, the project proved three things: cluster-aware hybrid regression beats monolithic models on genuinely heterogeneous markets; per-prediction explainability doesn't have to cost accuracy or latency; and knowledge-graph RAG is a workable, more defensible alternative to vector RAG when queries reduce to structured filters over a curated schema. Honest limitations: no user study (academic timeline), no head-to-head against SRX/HomerAI (no public APIs), photo CNN trained on a proxy distribution, English-only chatbot. A production path — managed Postgres, hosted Neo4j, continuous retraining, and refactoring all backends into MCP tools behind an agentic dispatcher — is mapped out in the report's future work.",
    },
    pipeline: {
      stages: [
        { label: "Data", sublabel: "~900k transactions + amenity data → frozen CSVs" },
        { label: "Feature", sublabel: "8 user inputs → 77 model features" },
        { label: "ML", sublabel: "K-means router → per-cluster ensembles → Ridge meta-learner" },
        { label: "Explainability", sublabel: "Composite TreeSHAP · BallTree CBR · Apriori rules" },
        { label: "Chatbot", sublabel: "Neo4j graph · 3-stage RAG + tool dispatch" },
        { label: "Presentation", sublabel: "FastAPI (37 endpoints) · React 18 · Chrome extension" },
      ],
      feedback: "Tiers are decoupled by serialized artefacts — everything loads once at backend startup, nothing trains online",
    },
    impactMetrics: [
      { title: "Model accuracy", value: "3.92% MAPE", description: "on the temporal hold-out (Jan 2025+), with R² 0.9644 and MAE S$26,104" },
      { title: "vs. single XGBoost baseline", value: "68%", description: "MAPE reduction (12.18% → 3.92%)" },
      { title: "vs. best non-clustered stack", value: "37%", description: "MAPE reduction (6.21% → 3.92%)" },
      { title: "Composite TreeSHAP additivity", value: "100/100", description: "cases exact at machine precision" },
      { title: "Chatbot stress suite", value: "80%", description: "strict pass on the 25-case cross-category suite, vs. 60% for the vector-RAG alternative" },
      { title: "Chatbot capability suite", value: "100%", description: "pass on the 11-case end-to-end suite, all responses BERTScore F1 > 0.85" },
      { title: "Photo CNN validation MAE", value: "0.483", description: "on a 0–10 condition scale" },
      { title: "Latency", value: "0.8–1.2s", description: "Buyer view full payload; tool dispatch <1s; full RAG 5–8s — all within budget" },
    ],
    challenges: [
      {
        title: "Temporal leakage discipline",
        challenge:
          "Random train/test splits leak future prices and inflate scores.",
        solution:
          "We enforced a strict temporal split (train pre-2024, validate 2024, test Jan 2025+), which makes the 3.92% MAPE an honest forward-prediction number — and made every architecture comparison harder to win.",
      },
      {
        title: "Exact SHAP over a heterogeneous ensemble",
        challenge:
          "Off-the-shelf explainers don't handle a cluster-routed stack of trees + Ridge.",
        solution:
          "Designed the composite attribution — and proved additivity to machine precision rather than hand-waving it. This was the hardest technical piece of the project.",
      },
      {
        title: "Comparables that don't lie",
        challenge:
          "Naive nearest-neighbour retrieval returns stale comparables, and HDB prices have appreciated sharply since 2020.",
        solution:
          "The CBR layer uses a strict recency cascade (same town + same year → same town + 24 months → any town + 24 months) that refuses to widen further, accepting fewer results over systematically biased ones.",
      },
      {
        title: "Making an LLM auditable",
        challenge:
          "The chatbot's job was to be defensible, not just fluent.",
        solution:
          "Constraining the LLM to parameter extraction + narrative synthesis, with deterministic Cypher in the middle, meant every answer could be traced — and the negative-case evaluation (intentionally impossible queries) went from 40% pass with vector RAG to 100% with the graph.",
      },
      {
        title: "Domain transfer on a proxy dataset",
        challenge:
          "The photo CNN never saw an HDB interior in training.",
        solution:
          "Qualitative testing on real PropertyGuru photos showed the LAION aesthetic signal (lighting, clutter, staging) transfers surprisingly well — but I kept the adjustment bounded and overridable precisely because the training distribution doesn't match production.",
      },
    ],
  },
  {
    id: "explainable-ai-web-app",
    layout: "document",
    title: "XAI Dashboard, Explainable ML Web Application",
    subtitle: "Interactive Model Explanation Platform · A*STAR Research Collaboration · Final Year Project",
    description:
      "A Flask + Dash web application where users upload any trained scikit-learn model and dataset and instantly receive an interactive XAI dashboard, SHAP, LIME, permutation importance, ICE plots, surrogate decision trees, and live what-if analysis. No code required.",
    organization: "A*STAR · NUS",
    cardMeta: "A*STAR · NUS · 2020–2021",
    status: "shipped",
    period: "Sep 2020 – Apr 2021",
    metric: { value: "5+", label: "XAI techniques: SHAP · LIME · ICE · Surrogate Tree · What-if" },
    techStack: [
      "Python",
      "Flask",
      "Dash",
      "SHAP",
      "LIME",
      "eli5",
      "pdpbox",
      "scikit-learn",
      "Plotly",
      "ExplainerDashboard",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
    links: {
      github: "https://github.com/bhuveshsharma09/Web-application-XAI",
    },
    detailSummary:
      "Built in close collaboration with A*STAR researchers during my final year at Coventry University / PSB Academy. The problem: XAI tools like SHAP and LIME require significant coding knowledge, making model interpretability inaccessible to non-technical stakeholders. The solution: a web application where users upload their trained model and dataset as pickle files, select the model type, and instantly receive a multi-view interactive explanation dashboard, without writing a single line of code.\n\nThe application supports three model types (linear regression, random forest, classification) and dynamically routes to the correct explainer: SHAP TreeExplainer for tree-based models, SHAP KernelExplainer for classifiers, and LimeTabularExplainer for local instance explanations. A live what-if interface lets users edit feature values in a Dash DataTable and watch the SHAP force plot update in real time. The ExplainerDashboard integration runs as a threaded sub-application for deep regression model inspection.",
    highlights: [
      "Upload-and-explain, not a hardcoded demo: Users upload their own pickle files (model, X_data, y_data). The app dynamically selects the correct SHAP explainer per model type and generates all explanation views without any user configuration.",
      "Five XAI techniques across global and local interpretability: Global: SHAP summary plots, permutation importance (eli5), surrogate decision tree visualisation. Local: SHAP force plots per instance, LIME instance explanations. Interactive: real-time what-if editor where changing a feature value updates the SHAP force plot live.",
      "A*STAR research collaboration, XAI before it was mainstream: Built alongside A*STAR researchers formally studying SHAP, LIME, and PDP explanation techniques in 2020–2021, well before XAI became a standard expectation in AI engineering. The same evaluation thinking carried forward into HDB ResaleXAI and the JMS AI Toolkit's LLM-as-judge pipeline.",
    ],
    design: [
      {
        title: "No-code explainability",
        description:
          "The product experience was built so non-technical users could move from model upload to meaningful explanation views without opening a notebook or writing custom code.",
      },
    ],
    architecture: [
      {
        title: "Upload-to-dashboard flow",
        description:
          "Flask handles model and dataset upload, routing, and server orchestration while Dash powers the interactive explanation surfaces, including local explanations, what-if editing, and deep inspection views.",
        bullets: ["Pickle upload and validation", "Dynamic explainer selection", "Interactive Dash rendering"],
      },
    ],
    diagrams: [],
    gallery: [],
    videoPlaceholder: { title: "", description: "" },
    story: {
      problem: {
        intro:
          "In 2020, SHAP and LIME existed, but using them required real coding. The people who most needed model explanations, researchers, analysts, non-technical stakeholders, couldn't get them without a notebook and a programmer.",
        failureModes: [
          {
            title: "Explainability was code-gated.",
            body: "Every SHAP plot meant custom code per model type and dataset.",
          },
          {
            title: "One-off analyses everywhere.",
            body: "Each explanation request became a bespoke script nobody maintained.",
          },
          {
            title: "Static answers to interactive questions.",
            body: "A fixed plot can't answer the stakeholder's real question: what happens if this value changes?",
          },
        ],
        conclusion: "",
      },
      audience:
        "A*STAR researchers formally studying explanation techniques, and the non-technical stakeholders who needed to interrogate models without writing code.",
      approach: {
        intro:
          "A Flask + Dash web application: upload a trained scikit-learn model and dataset, get an interactive XAI dashboard -",
        bullets: [
          {
            title: "Upload-and-explain.",
            body: "Users upload their own pickle files (model, X, y), select the model type, and get the full dashboard, no configuration, no code.",
          },
          {
            title: "The right explainer, automatically.",
            body: "Dynamic routing per model type: SHAP TreeExplainer for tree models, KernelExplainer for classifiers, LimeTabularExplainer for local instance explanations.",
          },
          {
            title: "Global and local views.",
            body: "SHAP summary plots, permutation importance, and a surrogate decision tree for the global picture; per-instance force plots and LIME for the local one.",
          },
          {
            title: "Live what-if.",
            body: "Edit feature values in a Dash DataTable and watch the SHAP force plot update in real time.",
          },
        ],
      },
      significance:
        "Built alongside A*STAR researchers in 2020–21, before XAI became a standard expectation in AI engineering. The evaluation habits formed here carried directly into PropertyLens and the JMS toolkit's LLM-as-judge pipeline.",
    },
    pipeline: {
      stages: [
        { label: "Upload", sublabel: "model + data pickles" },
        { label: "Validate", sublabel: "type + schema checks" },
        { label: "Route explainer", sublabel: "Tree / Kernel / LIME" },
        { label: "Dashboard", sublabel: "global + local views" },
        { label: "What-if", sublabel: "live SHAP updates" },
      ],
    },
    challenges: [
      {
        title: "One dashboard, any model",
        challenge:
          "Different model families need different explainers with incompatible APIs, hardcoding one breaks on the next upload.",
        solution:
          "Dynamic explainer selection keyed on the declared model type, routing tree models, classifiers, and local explanations to the right backend automatically.",
      },
      {
        title: "What-if that feels instant",
        challenge:
          "Recomputing SHAP on every edited cell could freeze the dashboard.",
        solution:
          "Wired the Dash DataTable to targeted per-instance force-plot recomputation, so edits update the explanation live without recomputing the world.",
      },
      {
        title: "Deep inspection without a rebuild",
        challenge:
          "Full regression diagnostics would have meant rebuilding ExplainerDashboard's UI inside Dash.",
        solution:
          "Ran ExplainerDashboard as a threaded sub-application beside the main app, power users get the deep view without the team duplicating it.",
      },
    ],
    impactMetrics: [
      { title: "XAI techniques", value: "5+", description: "SHAP · LIME · permutation importance · surrogate tree · live what-if" },
      { title: "Model families", value: "3", description: "linear regression, random forest, classification" },
      { title: "Research context", value: "A*STAR", description: "built with researchers studying XAI in 2020–21" },
    ],
  },
]

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id)
}
