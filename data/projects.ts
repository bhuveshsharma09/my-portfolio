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
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  organization: string
  status: "shipped" | "in-progress" | "planned"
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
    subtitle: "Enterprise Java Fleet Management",
    description:
      "Contributed across every JMS release from version 6.0 to 11, shipping features, APIs, and test suites in a cloud-native OCI microservices environment.",
    organization: "Oracle",
    status: "shipped",
    period: "Oct 2022 – Apr 2026",
    featured: true,
    metric: { value: "6", label: "major releases across Oracle" },
    techStack: ["Java", "OCI", "Microservices", "REST APIs", "Terraform", "Jenkins"],
    detailSummary:
      "JMS was the core product thread of my Oracle work. I shipped features, authored test coverage, and supported release quality throughout every major JMS release from 6.0 through 11.",
    highlights: [
      "Built features and APIs across a Java microservices codebase on OCI.",
      "Authored comprehensive validation and regression test coverage.",
      "Worked across globally distributed engineering, product, and QA teams.",
    ],
    design: [
      {
        title: "Product surface",
        description:
          "The work covered fleet management, compliance, and customer operations across a large enterprise Java service.",
      },
      {
        title: "Release focus",
        description:
          "Each change had to fit release-safe workflows, API compatibility, and broad regression coverage.",
      },
    ],
    architecture: [
      {
        title: "Service topology",
        description:
          "JMS operates as a distributed OCI service with API-driven workflows and multiple cooperating service boundaries.",
        bullets: ["Java microservices on OCI", "API-driven management flows", "Release-safe validation"],
      },
    ],
    diagrams: [
      { title: "Service topology", caption: "Placeholder for JMS service boundaries and API interactions." },
      { title: "Release flow", caption: "Placeholder for feature to validation to rollout flow." },
      { title: "Customer workflow", caption: "Placeholder for enterprise fleet-management journey." },
    ],
    gallery: [
      { title: "Workflow screen", caption: "Placeholder for JMS product or workflow screenshots." },
      { title: "Test harness", caption: "Placeholder for release validation views." },
      { title: "Release artifacts", caption: "Placeholder for notes or ship-room assets." },
    ],
    videoPlaceholder: {
      title: "JMS demo",
      description: "Reserved for a narrated walkthrough of the fleet-management and release-tested workflows.",
    },
  },
  {
    id: "jms-ai-toolkit",
    title: "JMS AI Toolkit",
    subtitle: "RAG-Based Test Specification Generator",
    description:
      "Designed and deployed a multi-stage LLM pipeline on OCI that generates test specifications from requirements with verification and citation traceability.",
    organization: "Oracle",
    status: "shipped",
    period: "2024 – 2026",
    featured: true,
    metric: { value: "60%", label: "reduction in spec creation time" },
    techStack: ["Python", "OCI GenAI Agent", "Gemini", "RAG", "LLM Evaluation", "Structured Logging"],
    detailSummary:
      "This enterprise-deployed toolkit automated a high-friction SQE workflow by turning requirements into test specs through a controlled, observable multi-stage pipeline.",
    highlights: [
      "Used OCI GenAI Agent for retrieval and Gemini for generation.",
      "Added verification at every stage to reduce hallucination and preserve citation traceability.",
      "Implemented LLM-as-judge scoring and structured human feedback loops.",
      "Deployed internally with logging to monitor quality and pipeline performance.",
    ],
    design: [
      {
        title: "Pipeline design",
        description:
          "The system separates retrieval, generation, verification, and evaluation so each stage is measurable and controllable.",
      },
      {
        title: "Feedback loop",
        description:
          "Human review is captured in a structured way so generation quality can improve over time.",
      },
    ],
    architecture: [
      {
        title: "Multi-stage RAG flow",
        description: "The pipeline orchestrates retrieval, synthesis, checking, and evaluation as separate layers.",
        bullets: ["OCI retrieval layer", "Gemini generation layer", "Scoring and logging layer"],
      },
    ],
    diagrams: [
      { title: "RAG pipeline", caption: "Placeholder for retrieval, generation, verification, and evaluation stages." },
      { title: "Feedback loop", caption: "Placeholder for LLM-as-judge plus human review loop." },
      { title: "Deployment flow", caption: "Placeholder for internal deployment and monitoring on OCI." },
    ],
    gallery: [
      { title: "Generation view", caption: "Placeholder for requirement submission and generated spec review." },
      { title: "Citation trace", caption: "Placeholder for evidence-linked outputs." },
      { title: "Quality dashboard", caption: "Placeholder for scoring and logging visualizations." },
    ],
    videoPlaceholder: {
      title: "Toolkit demo",
      description: "Reserved for a walkthrough of staged generation, evaluation, and final spec output.",
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
      { title: "Pipeline", caption: "Placeholder for end-to-end image redaction flow." },
      { title: "Service interaction", caption: "Placeholder for Helidon, OCI Vision, and OCI GenAI interaction." },
      { title: "Publishing path", caption: "Placeholder for internal publication workflow integration." },
    ],
    gallery: [
      { title: "Before and after", caption: "Placeholder for redacted image comparisons." },
      { title: "Detection overlay", caption: "Placeholder for sensitive-region detection output." },
      { title: "Final asset", caption: "Placeholder for publication-ready sanitized images." },
    ],
    videoPlaceholder: {
      title: "Redaction demo",
      description: "Reserved for a demo of automated detection, masking, and final publication-ready output.",
    },
  },
  {
    id: "oracletest-agent",
    title: "OracleTest Agent",
    subtitle: "AI-Powered QA Intelligence Platform",
    description:
      "Building an always-on QA agent on OCI GenAI with function calling to run exploratory web testing, monitor Jenkins, scan Jira, and recommend test cases via RAG.",
    organization: "Oracle",
    status: "in-progress",
    period: "2025 – 2026",
    featured: true,
    metric: { value: "70%", label: "target QA triage reduction" },
    techStack: ["Python", "OCI GenAI", "Function Calling", "Playwright", "Jenkins", "RAG"],
    detailSummary:
      "OracleTest Agent is an internal workflow automation and exploratory testing platform intended to reduce repetitive QA triage through an always-on agentic system.",
    highlights: [
      "Automates exploratory web testing with Playwright.",
      "Monitors Jenkins pipelines and scans Jira sprints for test gaps.",
      "Uses RAG-backed reasoning to recommend test cases.",
      "Applies extensibility patterns inspired by memory and skill-based agent systems.",
    ],
    design: [
      {
        title: "Agent experience",
        description:
          "The product is designed as an always-on assistant for QA, not a one-off script, combining monitoring, workflow execution, and recommendations.",
      },
      {
        title: "Extensibility",
        description:
          "Tool-use and workflow modules are designed to be reusable so new QA tasks can be added without heavy rewrites.",
      },
    ],
    architecture: [
      {
        title: "Agentic control loop",
        description: "The platform gathers signals, reasons over them, calls tools, and returns actionable QA outputs.",
        bullets: ["Playwright browser actions", "Jenkins and Jira integrations", "RAG-backed recommendation layer"],
      },
    ],
    diagrams: [
      { title: "Control loop", caption: "Placeholder for monitor, reason, act, and evaluate stages." },
      { title: "Tool map", caption: "Placeholder for Jenkins, Jira, and browser automation integrations." },
      { title: "Extension model", caption: "Placeholder for skill and memory-inspired extensibility." },
    ],
    gallery: [
      { title: "Triage dashboard", caption: "Placeholder for the QA workspace and agent output." },
      { title: "Workflow runs", caption: "Placeholder for automated exploratory testing sessions." },
      { title: "Recommendations", caption: "Placeholder for generated test-case and failure insights." },
    ],
    videoPlaceholder: {
      title: "OracleTest Agent demo",
      description: "Reserved for a walkthrough of autonomous testing and QA triage recommendations.",
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
    id: "oci-jms-mcp",
    title: "OCI JMS MCP Server",
    subtitle: "Open-Source MCP Integration",
    description:
      "Building an MCP server for Java Management Service so agentic systems can query JMS context and trigger useful workflows through a clean tool layer.",
    organization: "Oracle Open Source",
    status: "in-progress",
    period: "2026 – Ongoing",
    techStack: ["TypeScript", "MCP", "OCI SDK", "JMS APIs", "Agent Integrations"],
    links: {
      github: "https://github.com/bhuveshsharma09/oci-jms-mcp",
    },
    detailSummary:
      "This project exposes JMS capabilities through the Model Context Protocol so assistants can use structured tool calls instead of brittle prompt-only flows.",
    highlights: [
      "Contributes to the public Oracle MCP GitHub effort.",
      "Maps JMS operations into usable MCP tools for agent workflows.",
      "Keeps outputs structured so assistants can plan against real JMS context.",
    ],
    design: [
      {
        title: "Developer experience",
        description:
          "The protocol layer is designed around discoverable, practical tools rather than thin wrappers or toy demos.",
      },
    ],
    architecture: [
      {
        title: "Protocol layer",
        description: "The server maps MCP tool calls onto JMS APIs while preserving structured results for assistant planning.",
        bullets: ["MCP server entrypoints", "OCI SDK and JMS API integration", "Structured tool outputs"],
      },
    ],
    diagrams: [
      { title: "Protocol mapping", caption: "Placeholder for MCP tools mapped onto JMS operations." },
      { title: "Assistant integration", caption: "Placeholder for an assistant invoking JMS via MCP." },
      { title: "Response contract", caption: "Placeholder for structured output returned to agents." },
    ],
    gallery: [
      { title: "Tool catalog", caption: "Placeholder for exposed MCP tools." },
      { title: "Invocation example", caption: "Placeholder for request and response examples." },
      { title: "Repo snapshot", caption: "Placeholder for open-source workflow visuals." },
    ],
    videoPlaceholder: {
      title: "MCP server demo",
      description: "Reserved for a tool-use walkthrough showing an assistant interacting with JMS via MCP.",
    },
  },
  {
    id: "explainable-ai-web-app",
    title: "Explainable AI Web Application",
    subtitle: "Interactive Explanation Dashboards",
    description:
      "Built a web application with A*STAR researchers that lets users upload ML models and generate SHAP, LIME, and PDP explanation dashboards without code.",
    organization: "A*STAR",
    status: "shipped",
    period: "Sep 2020 – Apr 2021",
    techStack: ["Python", "SHAP", "LIME", "PDP", "Web Application", "Explainable AI"],
    detailSummary:
      "This final-year project focused on making model explainability accessible to users who needed interactive insight without writing custom analysis code.",
    highlights: [
      "Collaborated with A*STAR researchers studying SHAP, LIME, and PDP techniques.",
      "Built a web app that accepts uploaded models and generates interactive explanation dashboards.",
      "Made advanced explainability methods usable through a guided no-code flow.",
    ],
    design: [
      {
        title: "No-code explainability",
        description:
          "The product experience helps users move quickly from model upload to meaningful explanation dashboards.",
      },
    ],
    architecture: [
      {
        title: "Upload-to-dashboard flow",
        description: "The application validates uploaded models, generates explanation artifacts, and renders them in interactive views.",
        bullets: ["Model upload and validation", "Explanation generation services", "Interactive dashboard rendering"],
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
