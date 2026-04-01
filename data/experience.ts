import type { Experience } from "@/types/experience";

export const experience: Experience[] = [
  {
    company: "Oracle",
    role: "Software Engineer",
    location: "Singapore",
    period: "Oct 2022 – Apr 2026",
    summary:
      "Contributed to every Java Management Service release from JMS 6.0 to JMS 11, building features, designing APIs, and authoring comprehensive test suites across a cloud-native microservices codebase on OCI.",
    highlights: [
      "Contributed to every Java Management Service release from JMS v6.0 to v11 - involved in feature design, API development, and test suite authorship across a cloud-native OCI microservices codebase.",
      "Built and maintained core JMS platform features including: Java library vulnerability scanning (third-party SCA), cryptographic event analysis, application performance analysis (JDK Flight Recording processing), and Deployment Rule Set (DRS) management.",
      "Designed and built multiple internal APIs for JMS features - responsible for both the implementation and the corresponding test coverage from unit through integration level.",
      "Initiated and built enterprise-deployed AI tools on OCI: a multi-stage RAG pipeline that reduced test specification generation time by 60%, and a computer vision pipeline to redact sensitive data from images (85% reduction in manual effort).",
      "Contributing to the OCI JMS MCP server on Oracle's public GitHub - bridging enterprise Java tooling with LLM-native agent workflows.",
      "Collaborated across globally distributed engineering, product, and QA teams; consistently part of design discussions from early feature scoping through delivery."
    ]
  },
  {
    company: "Oracle",
    role: "Intern",
    location: "Singapore",
    period: "Mar 2022 - Jul 2022",
    summary:
      "Built and published Oracle LiveLabs tutorials for OCI, JMS, and network configurations while also automating internal software release processes with scripting and CI/CD pipelines.",
    highlights: [
      "Published learning content for OCI and JMS workflows used by internal and external users.",
      "Improved internal release processes through scripting and automation.",
      "Worked closely with cloud and platform engineering material during the internship.",
      "Built early familiarity with Oracle delivery standards and platform workflows."
    ]
  },
  {
    company: "Exicom Tele-Systems Limited",
    role: "Validation Engineer",
    location: "Gurgaon, India",
    period: "Jul 2016 - Nov 2019",
    summary:
      "Developed automated test setups and Python scripts for validating electronic devices and EV chargers, improving production processes through data-driven root cause analysis.",
    highlights: [
      "Built automated validation setups for production hardware workflows.",
      "Used Python scripting to reduce repetitive testing effort and increase repeatability.",
      "Improved production troubleshooting with structured root cause analysis.",
      "Developed an early engineering discipline around correctness, validation, and measurable results."
    ]
  }
];
