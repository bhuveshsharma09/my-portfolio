import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "java-management-service-core-platform",
    title: "Java Management Service - Core Platform",
    subtitle: "Cloud platform engineering",
    orgLabel: "Oracle",
    status: "✅ Enterprise shipped",
    section: "main",
    categoryVariant: "secondary",
    summary:
      "Contributed to every JMS release from v6.0 to v11 on Oracle Cloud Infrastructure. Worked across the full product surface: feature development, API design, library vulnerability scanning (SCA), cryptographic event analysis, performance analysis, Deployment Rule Set (DRS) management, and comprehensive test suite authorship. Always involved in design discussions.",
    problem:
      "Enterprise Java management products need to evolve across multiple release cycles while remaining reliable, observable, secure, and maintainable across a broad product surface.",
    solution:
      "Worked across the JMS platform stack on OCI, contributing to features, APIs, analysis capabilities, and automated test coverage while participating in design discussions throughout the delivery lifecycle.",
    outcome:
      "A foundational understanding of what it takes to ship and maintain a cloud-native enterprise product through 6 major versions - from design through delivery and beyond.",
    metric: "JMS v6.0 -> v11 · 6 major releases",
    techStack: ["OCI", "Java", "Cloud platform", "API design", "SCA", "Crypto analysis"],
    tags: ["OCI", "Java", "Cloud platform", "API design", "SCA", "Crypto analysis"],
    featured: true,
    highlights: [
      "Contributed across every JMS major release from v6.0 to v11.",
      "Worked across platform features, APIs, analysis tooling, and test coverage.",
      "Built depth in secure and operationally aware cloud product delivery.",
      "Participated consistently in design discussions, not just implementation."
    ],
    links: [
      { label: "Oracle JMS", href: "https://www.oracle.com/asean/java/jms/", kind: "primary" }
    ]
  },
  {
    slug: "jms-ai-toolkit",
    title: "JMS AI Toolkit",
    subtitle: "Developer tooling",
    orgLabel: "Oracle",
    status: "✅ Enterprise deployed",
    section: "main",
    summary:
      "An AI-assisted toolkit for exploring, operating, and accelerating Java messaging workflows with a product-minded developer experience.",
    problem:
      "Messaging-heavy systems are powerful but operationally dense. Teams often lose time switching between docs, dashboards, and manual troubleshooting steps.",
    solution:
      "Structured the workflow into guided AI-assisted actions that help engineers inspect context, reason through system state, and move faster with less operational friction.",
    outcome:
      "A more usable developer-facing experience for JMS-heavy tasks, with clearer workflows and less context-switching overhead.",
    metric: "60% reduction in spec creation time",
    techStack: ["Next.js", "TypeScript", "Java", "Oracle", "AI tooling"],
    tags: ["Developer experience", "Agent workflows", "Backend"],
    featured: true,
    highlights: [
      "Framed AI as an acceleration layer on top of real system workflows.",
      "Reduced friction around high-context engineering tasks by organizing actions into guided flows.",
      "Kept the implementation grounded in operational usability instead of novelty features.",
      "Designed for extensibility so more workflows can be layered in cleanly."
    ],
    links: [
      { label: "Portfolio home", href: "/", kind: "secondary" }
    ]
  },
  {
    slug: "sensitive-data-redaction",
    title: "Sensitive Data Redaction in Images",
    subtitle: "Privacy-aware AI workflow",
    orgLabel: "Oracle",
    status: "✅ Enterprise deployed",
    section: "main",
    summary:
      "A pipeline for detecting and masking sensitive data in images, designed around practical reviewability rather than opaque one-shot automation.",
    problem:
      "Image-based sensitive data handling is difficult because false positives and false negatives both carry real risk. Teams need review-friendly outputs, not just raw model predictions.",
    solution:
      "Built a staged workflow combining detection, processing, and comparison steps so outputs can be reviewed and trusted more easily.",
    outcome:
      "A safer, more inspectable redaction workflow that emphasizes visibility, controlled automation, and privacy-conscious handling.",
    metric: "85% reduction in manual effort",
    techStack: ["Python", "Computer Vision", "Flask", "OCR", "LLM-assisted tooling"],
    tags: ["Privacy", "Vision pipelines", "Applied AI"],
    featured: true,
    highlights: [
      "Separated detection and presentation concerns to make outputs easier to verify.",
      "Focused on reviewability and user confidence rather than black-box automation.",
      "Designed for operational workflows where correctness matters more than demo speed.",
      "Built comparison-friendly outputs to support evaluation and iteration."
    ],
    links: [
      { label: "Portfolio home", href: "/", kind: "secondary" }
    ]
  },
  {
    slug: "oracletest-agent",
    title: "OracleTest Agent",
    subtitle: "AI test automation",
    orgLabel: "Oracle",
    status: "🟢 In progress",
    section: "main",
    summary:
      "An autonomous testing concept aimed at helping teams move from specification to runnable checks with tighter feedback loops.",
    problem:
      "Test authoring and environment setup are often repetitive, fragile, and slow to scale across evolving product surfaces.",
    solution:
      "Explored an agentic workflow that can interpret testing goals, scaffold execution steps, and make the path from intent to verification more direct.",
    outcome:
      "A strong proof point for how agentic systems can support engineering teams without replacing core validation discipline.",
    metric: "Targeting 70% QA triage reduction",
    techStack: ["Python", "Browser automation", "LLM agents", "Testing workflows"],
    tags: ["Agentic QA", "Automation", "Developer tooling"],
    featured: true,
    highlights: [
      "Positioned the agent as a collaborator in the testing loop, not an opaque replacement.",
      "Centered the design on repeatable workflows and observable execution steps.",
      "Combined pragmatic automation with engineering-reviewable outputs.",
      "Showed how AI can reduce repetitive test setup friction."
    ],
    links: [
      { label: "Portfolio home", href: "/", kind: "secondary" }
    ]
  },
  {
    slug: "hdb-resalexai",
    title: "HDB ResaleXAI",
    subtitle: "Explainable ML product",
    orgLabel: "NUS-ISS",
    status: "🟢 In progress",
    section: "main",
    summary:
      "A housing-price prediction concept focused on explainability, transparency, and user trust alongside model outputs.",
    problem:
      "Prediction products can be technically accurate but still hard to trust if users cannot understand what is driving the result.",
    solution:
      "Built the experience around interpretable signals, feature influence, and user-facing clarity so the prediction feels accountable.",
    outcome:
      "A more credible ML product narrative that pairs predictions with explanations instead of leaving the user with a raw score.",
    metric: "XGBoost + SHAP + LIME - full XAI stack",
    metrics: ["XGBoost + SHAP + LIME - full XAI stack", "NUS-ISS IRS Capstone · 2026"],
    techStack: ["Python", "Machine Learning", "Explainability", "Data visualization"],
    tags: ["XAI", "ML product", "Data storytelling"],
    featured: true,
    highlights: [
      "Treated explainability as a product requirement, not just a model-side add-on.",
      "Used clearer presentation to improve trust in ML outputs.",
      "Balanced technical modeling with end-user comprehension.",
      "Demonstrated how data products benefit from stronger narrative framing."
    ],
    links: [
      { label: "Portfolio home", href: "/", kind: "secondary" }
    ]
  },
  {
    slug: "oci-jms-mcp-server",
    title: "OCI JMS MCP Server",
    subtitle: "Open source",
    orgLabel: "Oracle · Open Source",
    status: "🟢 In progress",
    section: "main",
    summary:
      "An MCP (Model Context Protocol) server enabling agentic integrations with Oracle Java Management Service, bridging enterprise Java tooling with LLM-native agent workflows.",
    problem:
      "Enterprise Java management workflows are powerful but not yet naturally accessible to LLM-native agents that need structured tool access.",
    solution:
      "Contributing an MCP server that exposes Oracle JMS capabilities through agent-friendly interfaces so AI systems can interact with enterprise Java tooling programmatically.",
    outcome:
      "Enables AI agents to interact with JMS programmatically - the first open-source MCP integration for Oracle JMS.",
    metric: "Open-source MCP integration for Oracle JMS",
    techStack: ["Java", "MCP", "OCI", "Agent tooling"],
    tags: ["Open source", "Agent workflows", "Enterprise Java"],
    featured: false,
    highlights: [
      "Built around the public Oracle GitHub repository and open-source contribution workflows.",
      "Connects enterprise Java management capabilities to agent-native interfaces.",
      "Designed to make JMS operations accessible to tool-using AI systems.",
      "Extends applied AI work into reusable infrastructure for developers."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/bhuveshsharma09/oracle-jms-mcp-server", kind: "primary" }
    ]
  },
  {
    slug: "xai-dashboard-astar",
    title: "XAI Dashboard - A*STAR Research Collaboration",
    subtitle: "Research / XAI",
    orgLabel: "A*STAR · NUS",
    status: "✅ Completed",
    section: "main",
    summary:
      "A web application built with A*STAR researchers that lets users upload ML models and generate interactive explanation dashboards with SHAP, LIME, and PDP without writing code.",
    problem:
      "Explainable AI techniques are often difficult for non-technical users to access because most tooling assumes model expertise and code-driven workflows.",
    solution:
      "Built an upload-and-explore web application that surfaces explanation techniques through an accessible interface instead of a notebook-heavy workflow.",
    outcome:
      "Reduced the barrier to XAI adoption by making model explanation accessible to non-technical users through an upload-and-explore interface.",
    metric: "Interactive SHAP, LIME, and PDP dashboards",
    techStack: ["Python", "Flask", "SHAP", "LIME", "PDP", "XAI"],
    tags: ["Research", "Explainability", "ML tooling"],
    featured: false,
    highlights: [
      "Built in collaboration with A*STAR researchers as a Final Year Project.",
      "Turned multiple explanation methods into a usable web workflow.",
      "Focused on accessibility for users who do not work directly in code.",
      "Showed how explainability can be presented as a product experience."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/bhuveshsharma09/Web-application-XAI", kind: "primary" }
    ]
  },
  {
    slug: "medical-book-android-health-app",
    title: "Medical Book - Android Health App",
    subtitle: "Mobile development",
    orgLabel: "Coventry University",
    status: "Academic / Early career",
    section: "foundation",
    summary:
      "An Android application built in Java that serves as a digital medical reference, demonstrating early native mobile development and data management work.",
    problem:
      "Medical reference content is more useful when it is portable, searchable, and available through a straightforward mobile interface.",
    solution:
      "Built a native Android app in Java with a structured content flow and supporting data management to turn static reference material into an app-based experience.",
    outcome:
      "An early full-stack mobile project that demonstrated end-to-end Android development, app structure, and shipping a working product demo.",
    metric: "Native Android app shipped with working demo",
    techStack: ["Java", "Android", "Gradle"],
    tags: ["Academic / Early career", "Mobile", "~2021"],
    featured: false,
    highlights: [
      "Built as an early native Android project in Java.",
      "Focused on turning reference content into a usable mobile experience.",
      "Demonstrated app structure, data handling, and deployment basics.",
      "Includes a recorded demo walkthrough."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/bhuveshsharma09/Medical_Book", kind: "primary" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=8NGgQHKac5g&feature=youtu.be", kind: "secondary" }
    ]
  },
  {
    slug: "laps-leave-management-system",
    title: "LAPS - Leave Management System",
    subtitle: "Full-stack web application",
    orgLabel: "NUS-ISS",
    status: "Academic / Early career",
    section: "foundation",
    summary:
      "A full-stack leave application and approval workflow system built with Spring Boot and Java, with role-based access control and a complete ERD.",
    problem:
      "Leave approval processes become messy when request flows, permissions, and records are handled manually or across fragmented systems.",
    solution:
      "Built a structured web application with role-aware workflows, backend data modeling, and a browser interface for managing submissions and approvals.",
    outcome:
      "A strong coursework example of full-stack application design, workflow thinking, and delivery discipline across 234 commits.",
    metric: "234 commits across a complete leave workflow system",
    techStack: ["Java", "Spring Boot", "HTML", "CSS"],
    tags: ["Academic / Early career", "Full-stack", "~2021-2022"],
    featured: false,
    highlights: [
      "Built as part of NUS-ISS Graduate Diploma coursework.",
      "Included ERD design and role-based access control.",
      "Covered both backend workflow logic and the web interface.",
      "Delivered across 234 commits."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/bhuveshsharma09/LAPS", kind: "primary" }
    ]
  },
  {
    slug: "agile-development-group-project",
    title: "Agile Development Group Project",
    subtitle: "Full-stack web application",
    orgLabel: "NUS-ISS",
    status: "Academic / Early career",
    section: "foundation",
    summary:
      "A multi-developer full-stack project built with Spring Boot, JavaScript, HTML, and CSS as part of NUS-ISS Graduate Diploma coursework.",
    problem:
      "Collaborative software delivery requires not just implementation ability, but also team coordination, iterative scope control, and consistent development habits.",
    solution:
      "Worked in an agile team to build a full-stack web application with shared ownership across backend, frontend, and iterative delivery workflows.",
    outcome:
      "Demonstrated collaborative software delivery in an agile environment across 244 commits, strengthening both technical and team-based execution.",
    metric: "244 commits in a multi-developer agile build",
    techStack: ["Java", "Spring Boot", "JavaScript", "HTML", "CSS"],
    tags: ["Academic / Early career", "Agile", "~2021-2022"],
    featured: false,
    highlights: [
      "Built as a multi-developer team project at NUS-ISS.",
      "Combined backend and frontend implementation across shared ownership.",
      "Demonstrated agile teamwork and delivery habits.",
      "Delivered across 244 commits."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/bhuveshsharma09/AD-Project", kind: "primary" }
    ]
  }
];
