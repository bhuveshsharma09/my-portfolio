export interface Experience {
  id: string
  role: string
  company: string
  companyHref?: string
  location: string
  type: "Full-time" | "Internship" | "Part-time" | "Volunteer"
  mode: "On-site" | "Remote" | "Hybrid"
  startDate: string
  endDate: string | "Present"
  description: string
  evidenceNote?: string
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
      "Built two internal automation systems for compliance operations: a consultant time-utilization platform and an AI-assisted quarterly reporting workflow. I led workflow discovery with consultants and managers, then designed and implemented the solutions within Waystone’s governed Microsoft Power Platform environment.",
    highlights: [
      "Replaced spreadsheet-based time entry with a five-screen Power Apps experience backed by a five-list SharePoint data model and Power BI reporting for utilization, retainers, fees and write-offs.",
      "Built a quarterly reporting pipeline using Power Automate and GPT-4.1 mini to classify email evidence, extract structured findings and generate review-ready Word reports.",
      "Designed compliance interfaces for document intake, monitoring plans and automated reminder workflows.",
      "Enabled team adoption through a Power Automate workshop and branded technical documentation.",
    ],
    techTags: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "GPT-4.1 mini"],
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
    description:
      "Worked directly with the founder to extend BizAgento’s existing codebase, a self-hosted workflow automation platform that can use locally hosted LLMs. I independently owned product discovery, UI/UX design and implementation of new workflow capabilities, incorporating founder feedback throughout development.",
    highlights: [
      "Researched competing platforms including n8n and Zapier, then translated feature gaps into a prioritized roadmap with implementation requirements.",
      "Designed and developed workflow capabilities including new node types, scheduling, run history, debugging and dry-run evaluation.",
      "Created data, input, LLM, flow and RAG-related workflow experiences.",
      "Integrated Ollama-based local AI execution so supported workflows could process enterprise data using locally hosted models.",
    ],
    techTags: ["React", "Node.js", "SQLite", "Ollama", "React Flow"],
    projectIds: ["bizagento"],
  },
  {
    id: "oracle-swe",
    role: "Software Engineer",
    company: "Oracle",
    companyHref: "https://www.oracle.com/",
    location: "Singapore",
    type: "Full-time",
    mode: "On-site",
    startDate: "Oct 2022",
    endDate: "Apr 2026",
    description:
      "Spent 3.5 years developing and testing Java Management Service features across multiple releases while also planning and building internal AI tools and proof-of-concepts for software quality engineering. My work covered Java services, OCI Generative AI, RAG, test automation and cross-functional release delivery.",
    evidenceNote:
      "Peer feedback indicated approximately 55–60% lower effort for the most time-intensive document-drafting stage of test-specification work. A teammate reported approximately 80% less processing time for multi-image redaction. Both figures are reported feedback, not measured studies.",
    highlights: [
      "Contributed development and quality-engineering work across Java Management Service releases spanning v6.0–v11, collaborating with product, engineering and globally distributed QA teams.",
      "Built an internal RAG-assisted test-specification generator using OCI Generative AI and a traceable knowledge base, with human-in-the-loop review and multiple interaction modes.",
      "Built a multi-agent image-redaction workflow for LiveLabs screenshots, combining automated detection and redaction with human review.",
      "Developed additional prototypes for AI-assisted LiveLabs generation and natural-language-driven UI testing.",
    ],
    techTags: ["Java", "Helidon SE", "OCI Generative AI", "RAG", "Selenium"],
    projectIds: ["jms", "jms-ai-toolkit", "data-redaction", "jms-livelabs-generator", "agentic-ui-navigator"],
  },
  {
    id: "oracle-intern",
    role: "Software Engineer Intern",
    company: "Oracle",
    companyHref: "https://www.oracle.com/",
    location: "Singapore",
    type: "Internship",
    mode: "On-site",
    startDate: "Mar 2022",
    endDate: "Jul 2022",
    description:
      "Built and published hands-on Oracle LiveLabs tutorials covering OCI, Java Management Service and network configuration, while automating recurring internal release activities.",
    highlights: [
      "Authored and validated step-by-step LiveLabs against current Oracle Cloud workflows.",
      "Automated recurring release tasks using scripting and CI/CD pipelines.",
      "Collaborated with engineering and quality teams to verify technical accuracy before publication.",
    ],
    techTags: ["OCI", "CI/CD", "LiveLabs"],
  },
  {
    id: "exicom",
    role: "Validation Engineer",
    company: "Exicom",
    companyHref: "https://www.exicom.com/",
    location: "India",
    type: "Full-time",
    mode: "On-site",
    startDate: "Jul 2016",
    endDate: "Nov 2019",
    description:
      "Developed Python-based automation and repeatable validation setups for electronic devices and EV chargers. Analyzed test failures, investigated root causes and supported engineering and production teams with data-driven findings.",
    highlights: [
      "Built repeatable automated test setups for EV-charging hardware.",
      "Wrote Python utilities to automate validation and test-data collection.",
      "Analyzed recurring failures and documented root causes for engineering and production teams.",
    ],
    techTags: ["Python", "Test Automation", "Hardware Validation", "EV Charging"],
  },
]

export interface Education {
  id: string
  degree: string
  institution: string
  institutionHref?: string
  institutionIcon?: string
  location: string
  period: string
  studyMode?: "Full-time" | "Part-time"
  status?: "In Progress" | "Completed"
  gpa?: string
  achievement?: string
  description?: string
  subjects: string[]
}

export const education: Education[] = [
  {
    id: "nus-mtech",
    degree: "Master of Technology in Artificial Intelligence Systems",
    institution: "National University of Singapore (NUS-ISS)",
    institutionHref: "https://www.iss.nus.edu.sg/",
    institutionIcon: "/icons/nus-iss.svg",
    location: "Singapore",
    period: "Jan 2026 – Expected Dec 2027",
    studyMode: "Full-time",
    status: "In Progress",
    achievement: "Graduate Certificate in Intelligent Reasoning Systems · A+",
    description:
      "Practice-focused postgraduate study in the design, development and deployment of intelligent systems, with an emphasis on explainable AI, knowledge-based reasoning, agentic systems and production-oriented AI engineering.",
    subjects: [
      "Intelligent Reasoning Systems",
      "Pattern Recognition Systems",
      "Practical Language Processing",
      "Explainable and Responsible AI",
      "Agentic AI Systems",
      "AI Deployment and Operations",
    ],
  },
  {
    id: "nus-gdip",
    degree: "Graduate Diploma in Systems Analysis",
    institution: "National University of Singapore (NUS-ISS)",
    institutionHref: "https://www.iss.nus.edu.sg/",
    institutionIcon: "/icons/nus-iss.svg",
    location: "Singapore",
    period: "Jul 2021 – Aug 2022",
    status: "Completed",
    gpa: "4.92/5",
    achievement: "Distinction · ISS Prize recipient for second-highest overall performance",
    description:
      "Completed an intensive software-development programme covering requirements analysis, solution design, full-stack implementation, testing, Agile delivery and CI/CD.",
    subjects: [
      "Requirements and solution design",
      "Java and Python",
      "C# and ASP.NET MVC",
      "Web application development",
      "Mobile application development",
      "Agile and CI/CD delivery",
    ],
  },
  {
    id: "iit-roorkee",
    degree: "Post Graduate Certificate Program in Data Science & Machine Learning",
    institution: "Indian Institute of Technology Roorkee",
    institutionHref: "https://www.iitr.ac.in/",
    institutionIcon: "/icons/iit-roorkee.png",
    location: "India",
    period: "2021–2022",
    studyMode: "Part-time",
    status: "Completed",
    achievement: "First place · Machine Learning Hackathon · Oct 2021",
    description:
      "Developed practical foundations in statistics, exploratory data analysis, supervised and unsupervised learning, natural language processing and deep-learning methods.",
    subjects: [
      "Statistical analysis",
      "Data preprocessing and visualization",
      "Supervised learning",
      "Unsupervised learning",
      "Natural language processing",
      "Model evaluation",
    ],
  },
  {
    id: "coventry",
    degree: "Bachelor of Science in Computer Science",
    institution: "Coventry University · PSB Academy",
    institutionHref: "https://www.coventry.ac.uk/",
    institutionIcon: "/icons/coventry.png",
    location: "Singapore",
    period: "2019 – 2021",
    status: "Completed",
    achievement: "First Class Honours · Top Graduate, Mar 2021",
    description:
      "Built a software-engineering foundation across programming, data structures, application development, architectural patterns and Agile delivery through individual and team projects.",
    subjects: [
      "Java and Python",
      "Data structures and algorithms",
      "Software engineering",
      "Architectural and design patterns",
      "Web and mobile development",
      "Agile delivery",
    ],
  },
  {
    id: "istc",
    degree: "Advanced Diploma in Mechatronics, Robotics and Automation Engineering",
    institution: "Indo Swiss Training Centre",
    institutionHref: "https://istc.csio.res.in/",
    institutionIcon: "/icons/istc.png",
    location: "India",
    period: "2012 – 2016",
    status: "Completed",
    achievement: "Silver Medalist",
    description:
      "Built an engineering foundation spanning electronics, embedded programming, industrial automation, robotics and hands-on mechanical systems.",
    subjects: [
      "Electronics",
      "Embedded C and Python",
      "PLC and ladder programming",
      "Industrial automation",
      "Robotics",
      "Mechanical systems",
    ],
  },
]

export interface Certification {
  id: string
  name: string
  issuer: string
  issued?: string
  credentialId?: string
  credentialUrl?: string
  note?: string
  group?: "primary" | "additional"
  featured?: boolean
}

export const certifications: Certification[] = [
  {
    id: "nus-graduate-certificate-irs",
    name: "Graduate Certificate in Intelligent Reasoning Systems",
    issuer: "National University of Singapore",
    issued: "Jul 2026",
    credentialId: "187128427",
    group: "primary",
    featured: true,
  },
  {
    id: "llm-engineering",
    name: "LLM Engineering: Master AI, Large Language Models & Agents",
    issuer: "Udemy",
    issued: "Nov 2025",
    note: "Course certificate",
    group: "primary",
    featured: true,
  },
  {
    id: "vector-databases-for-rag",
    name: "Vector Databases for RAG: An Introduction",
    issuer: "IBM",
    issued: "Oct 2025",
    group: "primary",
    featured: true,
  },
  {
    id: "build-rag-applications",
    name: "Build RAG Applications: Get Started",
    issuer: "IBM",
    issued: "Oct 2025",
    group: "primary",
  },
  {
    id: "machine-learning-explainability",
    name: "Machine Learning Explainability",
    issuer: "Kaggle",
    issued: "Oct 2020",
    group: "primary",
  },
  {
    id: "neural-networks-and-deep-learning",
    name: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    issued: "Apr 2021",
    group: "primary",
  },
  {
    id: "improving-deep-neural-networks",
    name: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    issuer: "DeepLearning.AI",
    issued: "Jun 2021",
    group: "primary",
  },
  {
    id: "oci-generative-ai-professional",
    name: "OCI Generative AI Professional",
    issuer: "Oracle",
    group: "additional",
  },
  {
    id: "ai-engineer-core-track",
    name: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    issuer: "Udemy",
    note: "Course certificate",
    group: "additional",
  },
  {
    id: "python-for-data-science-and-machine-learning",
    name: "Python for Data Science and Machine Learning Bootcamp",
    issuer: "Udemy",
    note: "Course certificate",
    group: "additional",
  },
]

export interface VolunteerExperience {
  id: string
  role: string
  organization: string
  organizationHref: string
  organizationIcon?: string
  marker: "Volunteer"
  dates: string
  location: string
  description: string
}

export const volunteerExperience: VolunteerExperience[] = [
  {
    id: "better-sg-volunteer",
    role: "AI Engineer",
    organization: "better.sg",
    organizationHref: "https://better.sg/",
    organizationIcon: "/icons/better-sg.png",
    marker: "Volunteer",
    dates: "Mar 2026 – Present",
    location: "Singapore",
    description:
      "Contributing AI engineering support to LLM-powered tools designed for Singapore nonprofit organisations.",
  },
]

export interface CommunityRole {
  id: string
  title: string
  organization: string
  organizationHref: string
  organizationIcon?: string
  dates: string
  secondary?: string
  description: string
}

export const communityRoles: CommunityRole[] = [
  {
    id: "scs",
    title: "Vice President, AI Focus Group",
    organization: "Singapore Computer Society",
    organizationHref: "https://www.scs.org.sg/",
    organizationIcon: "/icons/scs.png",
    dates: "2020 – 2021",
    secondary: "Member · 2025 – Present",
    description: "Led AI-focused community programmes and knowledge-sharing initiatives.",
  },
  {
    id: "gdsc-nus",
    title: "Product Design Contributor",
    organization: "Google Developer Student Clubs NUS",
    organizationHref: "https://developers.google.com/community/gdsc",
    organizationIcon: "/icons/gdsc.png",
    dates: "2021 – 2022",
    description: "Contributed UX and product design for developer-community events and initiatives.",
  },
  {
    id: "willing-hearts",
    title: "Weekly Volunteer",
    organization: "Willing Hearts",
    organizationHref: "https://willinghearts.org.sg/",
    organizationIcon: "/icons/willing-hearts.png",
    dates: "2025 – Present",
    description: "Volunteer weekly with a Singapore-based free-meal programme.",
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
    title: "Languages and querying",
    tags: ["Python", "Java", "TypeScript", "SQL", "Shell scripting", "DAX", "KQL"],
  },
  {
    title: "AI platforms and methods",
    tags: ["OCI Generative AI", "Ollama", "LangChain4j", "MCP", "Prompt engineering", "RAGAS"],
  },
  {
    title: "Machine learning",
    tags: ["scikit-learn", "XGBoost", "LightGBM", "SHAP", "Stacking ensembles", "K-Means clustering", "Surrogate models"],
  },
  {
    title: "Backend and APIs",
    tags: ["Helidon SE", "Spring Boot", "FastAPI", "Flask", "Dash", "Node.js", "Fastify", "REST APIs"],
  },
  {
    title: "Frontend",
    tags: ["React", "Next.js", "React Flow", "React Query", "Zustand", "Tailwind CSS"],
  },
  {
    title: "Data and infrastructure",
    tags: ["SQLite", "sqlite-vec", "Neo4j", "SharePoint Lists", "OCI Object Storage", "Oracle Cloud (OCI)", "Git", "CI/CD", "Jenkins"],
  },
  {
    title: "Testing and observability",
    tags: ["Selenium WebDriver", "Test automation", "Canary validation", "Grafana"],
  },
  {
    title: "Microsoft platform",
    tags: ["Power Apps", "Power Automate", "Power BI", "Power Query", "SharePoint", "AI Builder"],
  },
]

export const additionalExposure: SkillCategory[] = [
  {
    title: "Academic coursework and certifications",
    tags: ["C#", ".NET (ASP.NET MVC)", "PyTorch", "TensorFlow", "CNNs", "Transformers", "Hugging Face", "Text classification and NER"],
  },
  {
    title: "Secondary project exposure",
    tags: ["LIME", "Case-based reasoning", "Zod", "JWT authentication"],
  },
  {
    title: "Currently learning",
    tags: ["LangGraph"],
  },
]
