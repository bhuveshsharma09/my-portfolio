export interface Experience {
  id: string
  role: string
  company: string
  companyHref?: string
  location: string
  type: "Full time" | "Internship" | "Part time" | "Volunteer"
  mode: "On site" | "Remote" | "Hybrid"
  startDate: string
  endDate: string | "Present"
  description: string
  linkLabel?: string
  linkHref?: string
  descriptionSuffix?: string
  highlights: string[]
  techTags?: string[]
  projectIds?: string[]
  isCurrent?: boolean
}

export const experiences: Experience[] = [
  {
    id: "waystone-intern",
    role: "AI Engineer Intern",
    company: "Waystone",
    companyHref: "https://www.waystone.com/",
    location: "Singapore",
    type: "Internship",
    mode: "Hybrid",
    startDate: "Jun 2026",
    endDate: "Jul 2026",
    description:
      "Built internal automation end-to-end on Microsoft Power Platform, from a consultant time-tracking system to AI-powered compliance reporting, owning requirements, architecture, build, and production handoff.",
    highlights: [
      "Built a time utilization tracking system on Power Platform: star-schema SharePoint data model, Power Apps canvas app for consultant time entry, and a Power BI dashboard for billable utilization and fees per client",
      "Automated quarterly compliance reporting with an AI-powered map-reduce pipeline (Power Automate + GPT-4.1 mini) for email classification, extraction, and Word report generation",
      "Designed a client compliance interface for document uploads, monitoring plans, and automated client reminder flows",
      "Delivered a Power Automate workshop for the team and produced branded technical documentation for all systems",
    ],
    techTags: ["Power BI", "Power Automate", "Power Apps", "SharePoint", "GPT-4.1 mini"],
    projectIds: ["waystone-time-utilization", "waystone-report-automation"],
  },
  {
    id: "tosba-ai-intern",
    role: "AI Engineer Intern",
    company: "Tosba Technologies",
    companyHref: "https://tosba.tech/",
    location: "Singapore",
    type: "Internship",
    mode: "Remote",
    startDate: "May 2026",
    endDate: "Jun 2026",
    description: "Built ",
    linkLabel: "BizAgento",
    linkHref: "https://www.linkedin.com/company/bizagento/posts/?feedView=all",
    descriptionSuffix:
      ", a self-hosted, local-LLM-first workflow automation and AI agent platform for regulated businesses that cannot use cloud tools.",
    highlights: [
      "Designed and shipped a fully local RAG pipeline using Ollama embeddings (nomic-embed-text) and sqlite-vec, with async document ingestion and per-document status tracking",
      "Developed core workflow features: visual canvas nodes (React Flow), dry-run test mode, workflow import/export with automatic secret stripping, and a DB-backed schedule/cron trigger with timezone and missed-run handling",
      "Built security-first capabilities for regulated buyers: tamper-evident hash-chained audit logging, zero-egress enforcement, and full-instance backup/restore",
    ],
    techTags: ["Node.js", "React", "SQLite", "Ollama/vLLM", "Local LLM Inference"],
    projectIds: ["bizagento"],
  },
  {
    id: "oracle-swe",
    role: "Software Engineer",
    company: "Oracle",
    companyHref: "https://www.oracle.com/",
    location: "Singapore",
    type: "Full time",
    mode: "On site",
    startDate: "Oct 2022",
    endDate: "Apr 2026",
    description: "3.5 years on Oracle's ",
    linkLabel: "Java Management Service",
    linkHref: "https://www.oracle.com/asean/java/jms/",
    descriptionSuffix:
      " (v6.0–v11), platform quality engineering across 6 releases, and 3 self-initiated AI tools shipped to production on OCI.",
    highlights: [
      "Contributed across every JMS release from v6.0 to v11",
      "Built enterprise AI tools on OCI for test generation and workflow automation",
      "Partnered across globally distributed engineering, product, and QA teams",
    ],
    projectIds: ["jms", "jms-ai-toolkit", "data-redaction", "jms-livelabs-generator", "agentic-ui-navigator"],
  },
  {
    id: "oracle-intern",
    role: "Software Engineer Intern",
    company: "Oracle",
    companyHref: "https://www.oracle.com/",
    location: "Singapore",
    type: "Internship",
    mode: "On site",
    startDate: "Mar 2022",
    endDate: "Jul 2022",
    description:
      "Built and published Oracle LiveLabs tutorials for OCI, JMS, and network configurations while automating internal software release processes with scripting and CI/CD.",
    highlights: [
      "Published LiveLabs tutorials for OCI and JMS",
      "Automated release processes with scripting and CI/CD pipelines",
      "Worked inside Oracle cloud engineering workflows",
    ],
  },
  {
    id: "exicom",
    role: "Validation Engineer",
    company: "Exicom",
    companyHref: "https://www.exicom.com/",
    location: "India",
    type: "Full time",
    mode: "On site",
    startDate: "Jul 2016",
    endDate: "Nov 2019",
    description:
      "Developed automated test setups and Python scripts for validating electronic devices and EV chargers, improving production processes with data-driven root cause analysis.",
    highlights: [
      "Built automated validation setups for EV chargers",
      "Used Python scripting for test automation",
      "Improved production quality with root cause analysis",
    ],
  },
]

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  status?: "In Progress" | "Completed"
  gpa?: string
  achievement?: string
  description?: string
  subjects: string[]
}

export const education: Education[] = [
  {
    id: "nus-mtech",
    degree: "MTech in Artificial Intelligence Systems",
    institution: "NUS-ISS",
    location: "Singapore",
    period: "Jan 2026 – 2027",
    status: "In Progress",
    description:
      "Full-time, in progress. Coursework is centered on production-oriented AI systems, model understanding, and deployment.",
    subjects: [
      "Machine Reasoning",
      "Cognitive Systems",
      "Reasoning Systems",
      "Problem Solving using Pattern Recognition",
      "Intelligent Sensing and Sense Making",
      "Pattern Recognition and Machine Learning Systems",
      "Robotic Systems",
      "Autonomous Robots and Vehicles",
      "Human-Robot System Engineering",
      "Explainable and Responsible AI",
      "AI and Cybersecurity",
      "Architecting Agentic AI Solutions",
      "Deploying and Operating AI Solutions",
    ],
  },
  {
    id: "nus-gdip",
    degree: "Graduate Diploma in Systems Analysis",
    institution: "NUS-ISS",
    location: "Singapore",
    period: "Jul 2021 – Aug 2022",
    status: "Completed",
    gpa: "4.92/5",
    achievement: "Distinction | ISS Prize (2nd best)",
    description:
      "Built full-stack applications using Java, Spring Boot, C#, .NET, and Android while working in agile team environments across group projects.",
    subjects: [
      "Digital Solutions Development – Design",
      "Digital Solutions Development – Web Applications",
      "Digital Solutions Development – Mobile Applications",
      "Digital Solutions Development – Machine Learning Applications",
      "Digital Solutions Development – Agile Software Delivery",
      "Capstone & Internship",
    ],
  },
  {
    id: "iit-roorkee",
    degree: "PG Certificate in Data Science & ML",
    institution: "IIT Roorkee",
    location: "India",
    period: "2021 – 2022",
    status: "Completed",
    achievement: "1st place, Machine Learning Hackathon (Oct 2021)",
    description:
      "Part-time study focused on machine learning models, data processing, and statistical methods.",
    subjects: [
      "Supervised learning",
      "Unsupervised learning",
      "Data preprocessing",
      "Statistical methods",
      "Model evaluation",
    ],
  },
  {
    id: "coventry",
    degree: "BSc Computer Science",
    institution: "Coventry University",
    location: "Singapore",
    period: "2019 – 2021",
    status: "Completed",
    achievement: "First Class Honours | Top graduate",
    description:
      "Studied Python, software development methodologies, architectural patterns, and design principles.",
    subjects: [
      "Python programming",
      "Software development methodologies",
      "Architectural patterns",
      "Design principles",
      "Computer science fundamentals",
    ],
  },
  {
    id: "istc",
    degree: "Advanced Diploma in Mechatronics & Automation",
    institution: "Indo Swiss Training Centre",
    location: "India",
    period: "2012 – 2016",
    status: "Completed",
    description:
      "Foundation in electronics, robotics, and automation systems with hands-on embedded hardware work.",
    subjects: [
      "Electronics",
      "Robotics",
      "Automation systems",
      "Raspberry Pi",
      "Microcontrollers",
      "Mechatronics projects",
    ],
  },
]

export interface Certification {
  id: string
  name: string
  issuer: string
  featured?: boolean
}

export const certifications: Certification[] = [
  {
    id: "oci-generative-ai-professional",
    name: "OCI Generative AI Professional",
    issuer: "Oracle · OCI Academy",
    featured: true,
  },
  {
    id: "ai-engineer-core-track",
    name: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    issuer: "Udemy · Ed Donner",
    featured: true,
  },
  {
    id: "vector-databases-for-rag",
    name: "Vector Databases for RAG: An Introduction",
    issuer: "IBM",
    featured: true,
  },
  {
    id: "neural-networks-and-deep-learning",
    name: "Neural Networks and Deep Learning",
    issuer: "Coursera · deeplearning.ai",
  },
  {
    id: "improving-deep-neural-networks",
    name: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    issuer: "Coursera · deeplearning.ai",
  },
  {
    id: "llm-engineering",
    name: "LLM Engineering: Master AI, Large Language Models & Agents",
    issuer: "Udemy",
  },
  {
    id: "python-for-data-science-and-machine-learning",
    name: "Python for Data Science and Machine Learning Bootcamp",
    issuer: "Udemy",
  },
]

export interface CommunityRole {
  id: string
  title: string
  organization: string
  dates: string
  description: string
}

export const communityRoles: CommunityRole[] = [
  {
    id: "scs-ai-vp",
    title: "Vice President, AI Focus Group",
    organization: "Singapore Computer Society",
    dates: "2020 – 2021",
    description: "Led AI community programmes and knowledge sharing.",
  },
  {
    id: "gdsc-product-designer",
    title: "Product Designer (External)",
    organization: "Google Developer Student Clubs NUS",
    dates: "2021 – 2022",
    description: "UX and product design for developer community events.",
  },
  {
    id: "better-sg-volunteer",
    title: "AI Engineer (Volunteer)",
    organization: "better.sg",
    dates: "Mar 2026 – present",
    description: "Building LLM-powered tools for Singapore nonprofits.",
  },
  {
    id: "willing-hearts-volunteer",
    title: "Volunteer",
    organization: "Willing Hearts Soup Kitchen",
    dates: "2025 – present",
    description: "Weekly volunteer at Singapore's largest free meal programme.",
  },
  {
    id: "scs-member",
    title: "Member",
    organization: "Singapore Computer Society",
    dates: "2025 – present",
    description: "Active member of Singapore's largest ICT society.",
  },
]

export const skills = {
  languages: ["Java", "Python", "SQL", "C#", ".NET", "Shell Scripting", "TypeScript"],
  mlCore: ["Supervised Learning", "Unsupervised Learning", "Ensemble Methods", "Recommender Systems", "Feature Engineering"],
  deepLearning: ["PyTorch", "TensorFlow", "CNNs", "Object Detection", "Image Classification", "Transfer Learning"],
  nlp: ["Text Classification", "NER", "Transformers", "Hugging Face", "Small Language Models"],
  llmsAgents: ["RAG Pipelines", "Vector Databases", "LLM Orchestration", "Agentic AI", "MCP", "Prompt Engineering", "LLM Evaluation"],
  frameworks: ["FastAPI", "Flask", "Spring Boot", "Helidon SE", "Neo4j", "LangChain", "scikit-learn"],
  infrastructure: ["Oracle Cloud", "AWS", "Docker", "Jenkins", "CI/CD", "Git"],
}

export interface SkillCategory {
  title: string
  tags: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    tags: ["Python", "Java", "TypeScript", "SQL", "C#", ".NET", "Shell Scripting", "KQL", "DAX"],
  },
  {
    title: "LLMs & Agentic AI",
    tags: ["RAG Pipelines", "Agentic AI", "LLM Orchestration", "Prompt Engineering", "LLM-as-Judge", "LLM Evaluation", "Vector Databases", "MCP", "Local LLM Inference (Ollama)", "Human-in-the-Loop AI", "Knowledge Graphs"],
  },
  {
    title: "Machine Learning",
    tags: ["Supervised Learning", "Unsupervised Learning", "XGBoost", "LightGBM", "Stacking Ensembles", "K-Means Clustering", "Feature Engineering", "Recommender Systems", "Model Evaluation"],
  },
  {
    title: "Explainable AI",
    tags: ["SHAP", "LIME", "Counterfactuals", "Case-Based Reasoning", "Surrogate Models", "Association Rules"],
  },
  {
    title: "Deep Learning, CV & NLP",
    tags: ["PyTorch", "TensorFlow", "CNNs", "EfficientNet", "Transfer Learning", "Transformers", "Hugging Face", "Text Classification", "NER"],
  },
  {
    title: "Backend & APIs",
    tags: ["FastAPI", "Flask", "Node.js", "Fastify", "Spring Boot", "Helidon SE", "REST APIs", "Zod", "JWT Auth"],
  },
  {
    title: "Frontend",
    tags: ["React", "Next.js", "React Flow", "React Query", "Zustand", "Tailwind CSS", "Vite"],
  },
  {
    title: "Data & Storage",
    tags: ["SQLite", "Neo4j", "MongoDB", "SharePoint Lists", "sqlite-vec", "OCI Object Storage"],
  },
  {
    title: "Microsoft Power Platform",
    tags: ["Power Apps", "Power Automate", "Power BI", "Power Query", "AI Builder", "SharePoint"],
  },
  {
    title: "Cloud & DevOps",
    tags: ["Oracle Cloud (OCI)", "AWS", "Docker", "Jenkins", "CI/CD", "Git", "Grafana", "Canary Deployments", "Playwright", "Test Automation"],
  },
]
