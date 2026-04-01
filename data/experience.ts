export interface Experience {
  id: string
  role: string
  company: string
  location: string
  type: "Full time" | "Internship" | "Part time" | "Volunteer"
  mode: "On site" | "Remote" | "Hybrid"
  startDate: string
  endDate: string | "Present"
  description: string
  highlights: string[]
  techTags?: string[]
  isCurrent?: boolean
}

export const experiences: Experience[] = [
  {
    id: "oracle-swe",
    role: "Software Engineer",
    company: "Oracle",
    location: "Singapore",
    type: "Full time",
    mode: "On site",
    startDate: "Oct 2022",
    endDate: "Apr 2026",
    description:
      "Contributed to every Java Management Service release from JMS 6.0 to 11, building features, designing APIs, authoring comprehensive test suites, and shipping multiple AI-powered internal tools on OCI.",
    highlights: [
      "Contributed across every JMS release from v6.0 to v11",
      "Built enterprise AI tools on OCI for test generation and workflow automation",
      "Partnered across globally distributed engineering, product, and QA teams",
    ],
  },
  {
    id: "oracle-intern",
    role: "Software Engineer Intern",
    company: "Oracle",
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
    id: "better-sg-ai-engineer",
    role: "AI Engineer",
    company: "better.sg",
    location: "Singapore",
    type: "Volunteer",
    mode: "Hybrid",
    startDate: "Mar 2026",
    endDate: "Present",
    description:
      "Building AI-powered tools for Singapore nonprofits as a volunteer engineer, applying LLM and automation techniques to real social-sector problems.",
    highlights: [
      "Building AI-driven solutions for Singapore-based nonprofits using LLMs, automation, and data pipelines.",
      "Applying production engineering practices to social sector challenges — design, build, and deploy.",
      "Collaborating with cross-functional volunteer teams to deliver working software with real impact.",
    ],
    techTags: ["Python", "LLMs", "FastAPI", "Automation", "Social Impact"],
  },
  {
    id: "exicom",
    role: "Validation Engineer",
    company: "Exicom",
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
    period: "Jan 2026 – Dec 2028",
    status: "In Progress",
    description:
      "Full-time, in progress. Coursework is centered on production-oriented AI systems, model understanding, and deployment.",
    subjects: [
      "Computer Vision & Pattern Recognition",
      "Deep Learning",
      "Natural Language Processing",
      "Explainable & Responsible AI",
      "Intelligent Reasoning Systems",
      "Knowledge Graphs",
      "Intelligent Robotic Systems",
      "Recommender Systems",
      "Architecting Agentic AI Solutions",
      "AI & Cybersecurity",
      "MLSecOps / LLMSecOps",
      "Integrating & Deploying AI Solutions",
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
      "Java enterprise development",
      "Spring Boot application design",
      "C# and .NET application development",
      "Android application development",
      "Database-backed full-stack systems",
      "Agile software delivery",
    ],
  },
  {
    id: "iit-roorkee",
    degree: "PG Certificate in Data Science & ML",
    institution: "IIT Roorkee",
    location: "India",
    period: "2021 – 2022",
    status: "Completed",
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
