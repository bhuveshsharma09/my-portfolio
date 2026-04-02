export interface ProjectMetric {
  value: string
  label: string
}

export interface ProjectDetailBlock {
  title: string
  description: string
  bullets?: string[]
}

export interface ProjectVisual {
  title: string
  caption: string
  src?: string
  alt?: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  organization: string
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
  }
}

export const projects: Project[] = [
  {
    id: "jms",
    title: "Java Management Service",
    subtitle: "Software Engineer · Quality & Test Engineering · Oracle (v6.0–v11)",
    description:
      "Quality-focused software engineering on Oracle's Java Management Service, covering automated validation, release integrity, and production-grade test infrastructure across six major product versions.",
    organization: "Oracle",
    status: "shipped",
    period: "Oct 2022 – Apr 2026",
    featured: true,
    metric: { value: "6", label: "major JMS releases — quality owned (v6.0–v11)" },
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
      "Software Engineer at Oracle with a quality engineering specialisation — owning test infrastructure, validation pipelines, and release integrity across 6 major JMS versions (v6.0–v11). Alongside that core remit, I sat in design discussions, understood the full feature lifecycle, and self-initiated three AI tools that went into production: a RAG pipeline for test spec generation, a computer vision redaction system, and a LiveLabs content generator. Quality engineering at Oracle scale teaches you to think precisely about correctness — the same discipline that makes good AI engineering.",
    highlights: [
      "Software Engineer specialising in quality — designed and owned automated test coverage for major JMS platform features including Dynamic and Static Java Library Scanning, Vulnerability Scan and Risk Scoring, Automatic Java Update distribution, Performance Analysis Reports (JDK Flight Recording), and Java Migration Analysis Reports across 6 major product releases.",
      "Built test infrastructure beyond test cases: canary deployments, Grafana-based alerting, and automated validation pipelines that caught quality issues before release rollout — not after.",
      "Participated in feature design discussions as part of the core engineering team — understanding the full feature lifecycle from specification through delivery, which informed how test coverage was designed.",
      "Self-initiated three AI tools targeting real team pain points — proposed, got leadership approval, designed, and shipped independently within the same Software Engineer role: JMS AI Toolkit (RAG pipeline, 60% faster test spec generation), LiveLabs Generator, and Agentic UI Test Navigator.",
      "Collaborated across 4 global regions (Singapore, India, Europe, US) with SRE, development, SQE, and documentation teams throughout each release cycle. Full enterprise delivery: Agile sprints, Jira, Confluence, internal tech talks.",
    ],
    design: [
      {
        title: "Product surface",
        description:
          "Owning test coverage for complex platform features requires deep product understanding. Testing vulnerability scan scoring, JDK Flight Recording analysis, and Java migration risk assessment meant learning the domain thoroughly — sitting in design discussions, reading specs, and understanding customer impact before a single test was written.",
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
          "JMS is a distributed OCI cloud service with fleet-management agents deployed across cloud, on-premises, and hybrid environments. Understanding the service topology — how scan jobs propagate, how telemetry flows, how update distribution works — was essential for designing test coverage that caught real failure modes rather than just happy-path scenarios.",
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
        title: "JMS fleet console — library scan and vulnerability views",
        caption: "JMS fleet console — library scan and vulnerability views.",
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
    videoPlaceholder: {
      title: "JMS demo",
      description: "Reserved for a narrated walkthrough of the fleet-management and release-tested workflows.",
    },
  },
  {
    id: "jms-ai-toolkit",
    title: "JMS Test Specification Generator",
    subtitle: "Enterprise RAG · Test Intelligence Platform · Oracle (Deployed)",
    description:
      "An enterprise RAG pipeline that transforms source documentation into grounded, auditable test specifications. Every generated test traces back to its source passage through a 4-layer citation chain: Citation -> Evidence Fact -> Requirement -> Testable Assertion -> Test Case. Built for the Oracle JMS SQE team and deployed at enterprise scale on OCI.",
    organization: "Oracle",
    status: "shipped",
    period: "2024 – 2026",
    featured: true,
    metric: {
      value: "60%",
      label: "reduction in test spec creation time · deployed to Oracle SQE team",
    },
    techStack: [
      "Java",
      "Helidon SE",
      "OCI GenAI",
      "OCI GenAI Agent",
      "RAG",
      "LLM Evaluation",
      "SSE",
      "Citation Validation",
      "OCI Object Storage",
      "DOCX Export",
      "Python",
    ],
    detailSummary:
      "5-stage LLM pipeline (LLM0–LLM5+N) with each stage producing independently reviewable intermediate artifacts. CitationService enforces citation validity post-generation. Real-time progress streaming via SSE. Session persistence to OCI Object Storage. DOCX export via ConfluenceDocBuilder. Supports concurrent multi-user sessions.",
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
        caption: "Generation entry point where users choose workflow mode, provide topic context, and upload supporting files.",
        src: "/projects/jms-test-spec-generator/ts-new-test-spec.png",
        alt: "New test specification screen for JMS Test Specification Generator",
      },
      {
        title: "HITL citation review",
        caption: "Human-in-the-loop stage for validating the retrieved citations before evidence derivation continues.",
        src: "/projects/jms-test-spec-generator/ts-hitl-citations.png",
        alt: "HITL citation review screen",
      },
      {
        title: "HITL evidence curation",
        caption: "Evidence pack review where users keep the grounded facts and remove noisy or irrelevant material.",
        src: "/projects/jms-test-spec-generator/ts-hitl-evidence.png",
        alt: "HITL evidence review screen",
      },
      {
        title: "HITL testable assertions",
        caption: "Reviewer-facing checkpoint for curating the final set of verifiable assertions before tests are generated.",
        src: "/projects/jms-test-spec-generator/ts-hitl-ta.png",
        alt: "HITL testable assertions screen",
      },
      {
        title: "Generated test cases",
        caption: "Finalized test scenarios mapped back to curated assertions and evidence for enterprise review.",
        src: "/projects/jms-test-spec-generator/ts-hitl-test-cases.png",
        alt: "Generated test cases screen",
      },
      {
        title: "Context continuity analysis",
        caption: "Continuity scoring across the artifact chain to detect structural or semantic drift before delivery.",
        src: "/projects/jms-test-spec-generator/ts-context-preservation.png",
        alt: "Context continuity analysis screen",
      },
    ],
    videoPlaceholder: {
      title: "Product walkthrough",
      description: "Reserved for a walkthrough of the five-stage pipeline, HITL review flow, traceability explorer, and final export experience.",
    },
  },
  {
    id: "data-redaction",
    title: "Sensitive Data Redaction",
    subtitle: "Automated PII Detection and Masking",
    description:
      "Built a Helidon SE pipeline using OCI Vision and OCI GenAI to detect and redact sensitive data from images before publication.",
    organization: "Oracle",
    status: "shipped",
    period: "2024 – 2025",
    featured: true,
    metric: { value: "85%", label: "reduction in manual effort" },
    techStack: ["Java", "Helidon SE", "OCI Vision", "OCI GenAI", "Image Processing"],
    detailSummary:
      "This tool automated a slow manual process around sanitizing tutorial images by combining visual detection with context-aware masking.",
    highlights: [
      "Combined OCI Vision detection with context-aware masking logic.",
      "Redacted sensitive data before publication in LiveLabs tutorials.",
      "Reduced manual effort by 85 percent and was adopted internally across teams.",
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
      {
        title: "Processed redacted outputs",
        caption: "Comparison view of sanitized output images after the redaction pipeline removes sensitive content.",
        src: "/projects/redact-sensetive-data/redacted-images.png",
        alt: "Processed redacted image outputs",
      },
      {
        title: "Execution logs and traceability",
        caption: "Operational log view used to inspect processing events, outcomes, and pipeline execution details for redaction runs.",
        src: "/projects/redact-sensetive-data/logs-for-user.png",
        alt: "Execution logs for sensitive data redaction pipeline",
      },
    ],
    gallery: [
      {
        title: "Run summary",
        caption: "Summary dashboard showing completion state, execution time, agent coordination, and processed image counts.",
        src: "/projects/redact-sensetive-data/final-screen.png",
        alt: "Run summary for sensitive data redaction",
      },
      {
        title: "Sanitized image set",
        caption: "Processed images ready for publication after sensitive information has been removed.",
        src: "/projects/redact-sensetive-data/redacted-images.png",
        alt: "Sanitized image set after redaction",
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
      description: "Reserved for a demo of automated detection, masking, and final publication-ready output.",
    },
  },
  {
    id: "oci-jms-mcp",
    title: "OCI JMS MCP Server",
    subtitle: "Open Source · Oracle's Official MCP Repository · 13-Tool JMS Agent Integration",
    description:
      "A Python MCP server contributing to Oracle's public oracle/mcp repository — enabling LLM agents to query Java Management Service fleets for health diagnostics, runtime compliance, security notices, and inventory. 13 tools. 55 unit tests. 90% coverage. PR open against Oracle's official repo.",
    organization: "Oracle · Open Source",
    status: "in-progress",
    period: "2026 – Ongoing",
    featured: true,
    metric: { value: "13", label: "JMS tools — fleet health · compliance · notices · inventory" },
    techStack: [
      "Python",
      "FastMCP",
      "MCP",
      "OCI Python SDK",
      "OCI JMS",
      "pytest",
      "Behave",
      "BDD",
      "Open Source",
      "Oracle",
      "uv",
      "TypeScript",
    ],
    links: {
      github: "https://github.com/oracle/mcp/pull/175",
    },
    detailSummary:
      "An open source contribution to oracle/mcp — Oracle's official Model Context Protocol repository on GitHub (316 stars). This MCP server bridges enterprise Java tooling with LLM-native agent workflows, enabling any AI agent to query Java Management Service fleets using natural language.\n\nThe server exposes 13 read-only JMS tools across the full fleet surface: fleet inventory and discovery, fleet health summaries (chat-friendly), detailed fleet health diagnostics, JMS service notices for troubleshooting, Java runtime compliance reporting (runtime versions, security status, outdated installations), plugin management, installation sites, and fleet configuration.\n\nBuilt with FastMCP on the OCI Python SDK. All tools include blank optional filter handling — empty inputs are treated as unset rather than passed to the OCI SDK. The PR includes 55 unit tests at 90.04% coverage (meeting the project's required 90% threshold), 10 BDD e2e scenarios with 40 steps via Behave, and full per-tool reference documentation in DETAILS_OF_TOOLS.md. Reviewed by Oracle code owners. OCA (Oracle Contributor Agreement) signed and verified.",
    highlights: [
      "Contribution to Oracle's official open source MCP repo: PR #175 open against oracle/mcp — Oracle's public Model Context Protocol repository. Reviewed by Oracle code owners. OCA signed and verified. 9 commits expanding the server from basic inventory into a full JMS troubleshooting and compliance workflow.",
      "13 tools across the full JMS agent surface: Fleet inventory, health summaries, detailed diagnostics, JMS service notices, Java runtime compliance reporting (versions, security status, outdated installations), plugins, installation sites, and fleet configuration — all queryable by any LLM agent via MCP.",
      "Production-grade test discipline — 90% coverage required: 55 unit tests passing, 90.04% coverage meeting Oracle's required 90% threshold. 10 BDD e2e scenarios via Behave with 40 steps passing. Blank optional filter handling tested for enum-list and timestamp inputs.",
    ],
    design: [
      {
        title: "Read-only agent workflow design",
        description:
          "The server is intentionally read-only so agents can troubleshoot fleets, inspect compliance posture, and summarize health safely without introducing write-path risk into enterprise environments.",
      },
    ],
    architecture: [
      {
        title: "FastMCP tool layer",
        description:
          "FastMCP exposes JMS fleet, notice, compliance, plugin, installation-site, and configuration queries on top of the OCI Python SDK, with chat-friendly summaries and detailed diagnostics tailored for agent use.",
        bullets: ["13 read-only tools", "OCI Python SDK integration", "Agent-friendly summaries and diagnostics"],
      },
    ],
    diagrams: [
      {
        title: "Tool catalog",
        caption: "MCP prompt asking the OCI JMS server to list all available tools across fleet inventory, plugins, installation sites, configuration, and usage summaries.",
        src: "/projects/oracle-jms-mcp/get-tool-list.png",
        alt: "OCI JMS MCP tool catalog screenshot",
      },
      {
        title: "Active fleets via MCP",
        caption: "Natural-language query returning active JMS fleets through the MCP server, showing agent-friendly fleet inventory access.",
        src: "/projects/oracle-jms-mcp/get-active-fleets-using-mcp.png",
        alt: "Active fleets query through OCI JMS MCP",
      },
      {
        title: "Fleet details via MCP",
        caption: "Detailed fleet retrieval through the MCP server, demonstrating structured health and configuration diagnostics for agents.",
        src: "/projects/oracle-jms-mcp/get-fleet-details.png",
        alt: "Detailed fleet response from OCI JMS MCP",
      },
    ],
    gallery: [
      {
        title: "Tool list result",
        caption: "Prompt-and-response view listing the 13 OCI JMS MCP tools available to an LLM agent.",
        src: "/projects/oracle-jms-mcp/get-tool-list.png",
        alt: "List tools response for OCI JMS MCP",
      },
      {
        title: "Fleet inventory result",
        caption: "Interactive example of querying active JMS fleets through the MCP layer.",
        src: "/projects/oracle-jms-mcp/get-active-fleets-using-mcp.png",
        alt: "Fleet inventory via OCI JMS MCP",
      },
      {
        title: "Detailed diagnostics result",
        caption: "Example of retrieving fleet-specific JMS details and diagnostics through the MCP interface.",
        src: "/projects/oracle-jms-mcp/get-fleet-details.png",
        alt: "Fleet diagnostics via OCI JMS MCP",
      },
    ],
    videoPlaceholder: {
      title: "OCI JMS MCP walkthrough",
      description: "Reserved for a walkthrough of PR #175, tool discovery, fleet inventory queries, and detailed diagnostics from an LLM client.",
    },
  },
  {
    id: "jms-livelabs-generator",
    title: "JMS LiveLabs Generator",
    subtitle: "RAG-Powered Documentation Intelligence · Oracle (Proposed & PoC Delivered)",
    description:
      "An OCI Generative AI RAG system that ingests JMS design documents — PRDs, Figma files, API specs, meeting notes — into a knowledge base, enabling authors to generate LiveLabs tutorials and SQE test instructions via a chat interface. Proposed, costed, and PoC-delivered.",
    organization: "Oracle",
    status: "shipped",
    period: "2025 – 2026",
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
      "LiveLabs content creation at Oracle required authors to manually research feature documentation across PRDs, one-pagers, Figma UI files, test specs, and meeting minutes before writing a single line. This project proposed and delivered a PoC for an OCI Generative AI Agent with RAG that ingests all these document types into a structured knowledge base. Authors then interact via a chat interface — similar to ChatGPT — to generate tailored LiveLabs content and SQE testing instructions from the same knowledge base. A full cost model was produced: one-time embedding, monthly OCI Object Storage, and per-query transaction costs at ~$0.018/request.",
    highlights: [
      "Dual-use RAG knowledge base: The same knowledge base generates both LiveLabs tutorials for customers and SQE testing instructions for internal QA teams — one ingestion pipeline, two content surfaces.",
      "Heterogeneous document ingestion: Designed ingestion pipelines for one-pagers, PRDs, UI Figma files, API specifications, design documents, meeting minutes, and test specs — not a single document type, but the full authoring ecosystem.",
      "Full cost model and OAR compliance scope: Delivered a production-ready cost estimate (embedding + storage + query tiers on OCI) and scoped OAR compliance requirements for enterprise deployment — not just a prototype, but a deployable proposal.",
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
        caption: "Current manual authoring workflow — the problem being solved.",
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
    gallery: [
      {
        title: "Architecture screenshot",
        caption: "OCI Gen AI Agent architecture with RAG knowledge base.",
        src: "/projects/jms-livelabs-generator/livelabs-generator-arch.png",
        alt: "JMS LiveLabs Generator architecture screenshot",
      },
      {
        title: "Manual flow snapshot",
        caption: "Current manual authoring workflow — the problem being solved.",
        src: "/projects/jms-livelabs-generator/livelabs-manual-flow.png",
        alt: "Manual workflow snapshot",
      },
      {
        title: "Use case snapshot",
        caption: "Three AI-assisted use cases in the LiveLabs authoring process.",
        src: "/projects/jms-livelabs-generator/livelabs-use-cases.png",
        alt: "LiveLabs Generator use case snapshot",
      },
    ],
    videoPlaceholder: {
      title: "LiveLabs generator demo",
      description: "Reserved for a walkthrough of the ingestion flow, chat generation experience, and cost-aware deployment model.",
    },
  },
  {
    id: "agentic-ui-navigator",
    title: "Agentic UI Test Navigator",
    subtitle: "ReAct-Pattern Browser Agent · Oracle (Research & PoC)",
    description:
      "A ReAct-pattern agentic system built on OCI GenAI that autonomously navigates the JMS web UI to perform exploratory testing. The agent reasons, decides, and observes across 39 steps — mapping interactive elements, clicking, navigating, and completing tasks without scripted test paths.",
    organization: "Oracle",
    status: "shipped",
    period: "2025 – 2026",
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
      "Traditional UI testing requires scripted paths — brittle, expensive to maintain, and blind to unscripted user behaviour. This project explores a ReAct-pattern agent that operates a browser autonomously using six tools: Login, Map Elements, Navigate, Click, Screenshot, and Wait. Given a natural language goal — for example, 'Start a Static Java Library Scan Work request and view the Work request' — the agent decomposes the task, maps 238 interactive page elements, reasons through 39 steps using THOUGHT -> DECISION -> OBSERVATION cycles, and completes the workflow. The reasoning trace is logged in full, making the agent's decision process auditable and debuggable.",
    highlights: [
      "ReAct reasoning framework — not scripted automation: The agent uses a THOUGHT -> DECISION -> OBSERVATION loop at every step. It detects stale element maps, decides when to re-scan, handles empty states, and self-corrects — behaviour that scripted Playwright or Selenium tests cannot replicate.",
      "238 interactive elements mapped per page: The Map Elements tool dynamically scans and classifies every interactive element on a page (divs, buttons, anchors, SVGs, paths) giving the agent a real-time element graph to reason over — no hard-coded selectors.",
      "Full reasoning trace — auditable by design: Every reasoning step is logged with structured labels (THOUGHT, DECISION, OBSERVATION, FINAL DECISION), producing an audit trail of why the agent took each action. 39 steps. Zero scripted paths.",
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
        caption: "ReAct agent architecture — LLM reasoning with 6 browser tools.",
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
    gallery: [
      {
        title: "Architecture view",
        caption: "ReAct agent architecture — LLM reasoning with 6 browser tools.",
        src: "/projects/agentic-ui-navigator/agentic-ui-arch.png",
        alt: "Architecture view for Agentic UI Test Navigator",
      },
      {
        title: "Trace log view",
        caption: "39-step reasoning trace: THOUGHT -> DECISION -> OBSERVATION log.",
        src: "/projects/agentic-ui-navigator/agentic-ui-results.png",
        alt: "Trace log view for Agentic UI Test Navigator",
      },
    ],
    videoPlaceholder: {
      title: "Agentic UI demo",
      description: "Reserved for a walkthrough of the six-tool browser agent, element mapping, and reasoning trace playback.",
    },
  },
  {
    id: "agentic-sqe-portal",
    title: "Agentic SQE Portal",
    subtitle: "LangGraph-Orchestrated QA Intelligence Platform · Oracle (Proposed & Designed)",
    description:
      "A workflow-first agentic web portal for the Oracle JMS SQE team — designed before the role ended. Sprint Agent reads Jira, retrieves Confluence context, maps Jenkins coverage, and publishes structured test plans with human approval gates. Built on LangGraph with typed tool layers for Jira, Confluence, Slack, and Jenkins.",
    organization: "Oracle",
    status: "designed",
    period: "2026",
    featured: true,
    metric: { value: "3", label: "workflow phases designed (Sprint Agent · Test Advisor · Scheduled Ops)" },
    techStack: [
      "LangGraph",
      "LangChain",
      "Python",
      "React",
      "Next.js",
      "Jira API",
      "Confluence API",
      "Jenkins API",
      "RAG",
      "Human-in-the-Loop",
      "Agentic AI",
      "Playwright",
    ],
    detailSummary:
      "Designed in the final weeks at Oracle as a response to a clear operational problem: SQE sprint planning, test selection, and reporting were slow, manual, and siloed across Jira, Confluence, Slack, and Jenkins. This proposal describes a workflow-first agentic portal where managers trigger a Sprint Agent to produce structured test plans, engineers get natural-language test recommendations with one-click Jenkins execution, and scheduled jobs handle recurring SQE operations automatically.\n\nThe architecture uses LangGraph for durable, auditable workflow orchestration with human-in-the-loop approval gates before any write action. Tool layers are typed and permission-separated — read tools, write tools, and destructive tools are distinct. A narrow RAG layer provides sprint context, test catalog metadata, and selected Confluence knowledge without mixing all enterprise data into a single pool.\n\nThe proposal covers a 3-phase delivery plan, full data model, security and governance design, and open integration questions. The role ended due to Oracle's global restructuring before implementation began. The design is complete.",
    highlights: [
      "LangGraph-orchestrated workflows — not a chatbot: Three core workflows (Sprint Agent, Test Recommendation & Execution, Scheduled Monitoring) are modelled as durable LangGraph subgraphs with state, branching, pause/resume, and human approval nodes — not free-roaming agent prompts.",
      "Human-in-the-loop gates on every write action: Confluence publishing, Slack announcements, and Jenkins test runs all require explicit human approval before execution. The system is designed to assist and accelerate SQE work, not replace human judgment on consequential actions.",
      "Typed, permission-separated tool layer: Separate tool interfaces for Jira, Confluence, Slack, Jenkins, and Playwright — with read, write, and destructive tools in distinct permission tiers. Browser automation is scoped only to the application under test, never production.",
    ],
    design: [
      {
        title: "Workflow-first portal experience",
        description:
          "The proposal is centered on explicit SQE workflows rather than a generic chat surface: sprint planning, recommendation-and-run flows, and scheduled operational jobs are first-class product paths.",
        bullets: ["Sprint Agent", "Test Advisor", "Scheduled Ops"],
      },
      {
        title: "Governed automation model",
        description:
          "Human approval is a core product constraint. Every consequential write action pauses for review so the portal accelerates work without bypassing operational accountability.",
        bullets: ["Approval gates", "Auditable state", "Permission-separated actions"],
      },
    ],
    architecture: [
      {
        title: "LangGraph orchestration layer",
        description:
          "LangGraph coordinates durable subgraphs for planning, recommendation, execution, and monitoring, with pause/resume checkpoints and structured state carried across each workflow.",
        bullets: ["Durable state", "Subgraph orchestration", "Pause/resume with approval nodes"],
      },
      {
        title: "Typed enterprise tool layer",
        description:
          "Jira, Confluence, Slack, Jenkins, and Playwright integrations are split by permission tier so read, write, and destructive actions can be governed independently.",
        bullets: ["Typed tool interfaces", "Permission tiers", "Scoped browser automation"],
      },
      {
        title: "Narrow-context RAG design",
        description:
          "The knowledge layer is intentionally narrow: sprint context, test catalog metadata, and selected Confluence material are retrieved per workflow instead of dumping all enterprise content into one agent context.",
        bullets: ["Sprint context", "Test metadata", "Selective Confluence retrieval"],
      },
    ],
    diagrams: [
      {
        title: "Agentic SQE Portal architecture",
        caption: "LangGraph-orchestrated portal architecture with Sprint Agent, Test Advisor, Scheduled Monitoring, typed tool layers, RAG, and human approval gates.",
        src: "/projects/agentic-sqe-portal/agentic-sqe-portal-arch.svg",
        alt: "Agentic SQE Portal architecture diagram",
      },
    ],
    gallery: [],
    videoPlaceholder: {
      title: "",
      description: "",
    },
  },
  {
    id: "hdb-resale-xai",
    title: "HDB ResaleXAI",
    subtitle: "Explainable AI Dashboard",
    description:
      "Building an end-to-end explainable AI system for Singapore HDB resale price prediction using XGBoost, SHAP, LIME, React, and FastAPI.",
    organization: "NUS-ISS",
    status: "in-progress",
    period: "2026 – Ongoing",
    featured: true,
    metric: { value: "XGBoost + SHAP + LIME", label: "full XAI stack" },
    techStack: ["Python", "XGBoost", "SHAP", "LIME", "FastAPI", "React", "Neo4j", "RAG"],
    detailSummary:
      "This project combines predictive performance with transparent reasoning by making model explanations first-class in the user experience.",
    highlights: [
      "Benchmarks XGBoost against Random Forest and LightGBM using RMSE, MAE, and latency.",
      "Uses SHAP and LIME explanations surfaced through a React dashboard and FastAPI backend.",
      "Adds learned block embeddings, feature pipelines, Neo4j, and a Gemini-powered RAG interface.",
    ],
    design: [
      {
        title: "Explainability UX",
        description:
          "Explanation artifacts are treated as core product surfaces, not side outputs, so users can inspect prediction reasoning directly.",
      },
    ],
    architecture: [
      {
        title: "Prediction stack",
        description: "The system combines data prep, model training, explanation generation, and interactive serving.",
        bullets: ["FastAPI serving layer", "React exploration frontend", "XGBoost with SHAP and LIME"],
      },
    ],
    diagrams: [
      { title: "ML flow", caption: "Placeholder for ingestion, training, evaluation, and serving flow." },
      { title: "Explanation layer", caption: "Placeholder for SHAP, LIME, and dashboard interactions." },
      { title: "Knowledge graph path", caption: "Placeholder for Neo4j and RAG integration." },
    ],
    gallery: [
      { title: "Dashboard", caption: "Placeholder for the main resale-price dashboard." },
      { title: "Local explanations", caption: "Placeholder for SHAP and LIME views." },
      { title: "Benchmarking", caption: "Placeholder for model comparison outputs." },
    ],
    videoPlaceholder: {
      title: "HDB ResaleXAI demo",
      description: "Reserved for a walkthrough of predictions, explanations, and the conversational assistant.",
    },
  },
  {
    id: "explainable-ai-web-app",
    title: "XAI Dashboard — Explainable ML Web Application",
    subtitle: "Interactive Model Explanation Platform · A*STAR Research Collaboration · Final Year Project",
    description:
      "A Flask + Dash web application where users upload any trained scikit-learn model and dataset and instantly receive an interactive XAI dashboard — SHAP, LIME, permutation importance, ICE plots, surrogate decision trees, and live what-if analysis. No code required.",
    organization: "A*STAR · NUS",
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
      "Built in close collaboration with A*STAR researchers during my final year at Coventry University / PSB Academy. The problem: XAI tools like SHAP and LIME require significant coding knowledge, making model interpretability inaccessible to non-technical stakeholders. The solution: a web application where users upload their trained model and dataset as pickle files, select the model type, and instantly receive a multi-view interactive explanation dashboard — without writing a single line of code.\n\nThe application supports three model types (linear regression, random forest, classification) and dynamically routes to the correct explainer: SHAP TreeExplainer for tree-based models, SHAP KernelExplainer for classifiers, and LimeTabularExplainer for local instance explanations. A live what-if interface lets users edit feature values in a Dash DataTable and watch the SHAP force plot update in real time. The ExplainerDashboard integration runs as a threaded sub-application for deep regression model inspection.",
    highlights: [
      "Upload-and-explain — not a hardcoded demo: Users upload their own pickle files (model, X_data, y_data). The app dynamically selects the correct SHAP explainer per model type and generates all explanation views without any user configuration.",
      "Five XAI techniques across global and local interpretability: Global: SHAP summary plots, permutation importance (eli5), surrogate decision tree visualisation. Local: SHAP force plots per instance, LIME instance explanations. Interactive: real-time what-if editor where changing a feature value updates the SHAP force plot live.",
      "A*STAR research collaboration — XAI before it was mainstream: Built alongside A*STAR researchers formally studying SHAP, LIME, and PDP explanation techniques in 2020–2021 — well before XAI became a standard expectation in AI engineering. The same evaluation thinking carried forward into HDB ResaleXAI and the JMS AI Toolkit's LLM-as-judge pipeline.",
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
    diagrams: [
      { title: "Upload flow", caption: "Placeholder for model upload to explanation generation." },
      { title: "Explanation engine", caption: "Placeholder for SHAP, LIME, and PDP pipeline." },
      { title: "Dashboard structure", caption: "Placeholder for the interactive explanation views." },
    ],
    gallery: [
      { title: "Upload screen", caption: "Placeholder for the model upload interface." },
      { title: "Explanation dashboard", caption: "Placeholder for SHAP, LIME, and PDP views." },
      { title: "Interpretation output", caption: "Placeholder for explanation comparison screens." },
    ],
    videoPlaceholder: {
      title: "Explainable AI app demo",
      description: "Reserved for a walkthrough from model upload to interactive explanation outputs.",
    },
  },
]

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id)
}
