import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience summary and contact details for Bhuvesh Kumar."
};

export default function ResumePage() {
  const resumePdfExists = existsSync(join(process.cwd(), "public", "resume", "Bhuvesh_Kumar_Resume.pdf"));
  const resumeDocxExists = existsSync(join(process.cwd(), "public", "resume", "Bhuvesh_Kumar_Resume.docx"));
  const resumeHref = resumePdfExists
    ? "/resume/Bhuvesh_Kumar_Resume.pdf"
    : resumeDocxExists
      ? "/resume/Bhuvesh_Kumar_Resume.docx"
      : "/resume/Bhuvesh_Kumar_Resume.docx";
  const resumeLabel = resumePdfExists ? "Download Resume PDF" : "Download Resume";
  const skillGroups = [
    {
      label: "Languages",
      items: ["Java", "Python", "SQL", "C#", ".NET", "Shell Scripting"]
    },
    {
      label: "ML/AI",
      items: ["RAG Pipelines", "LLM Orchestration", "Agentic AI", "LLM Evaluation", "Prompt Engineering", "Vector Databases"]
    },
    {
      label: "ML Core",
      items: ["Supervised Learning", "Ensemble Methods", "Feature Engineering", "Recommender Systems"]
    },
    {
      label: "Deep Learning",
      items: ["PyTorch", "TensorFlow", "CNNs", "Object Detection", "Transfer Learning"]
    },
    {
      label: "NLP",
      items: ["Transformers", "Hugging Face", "Text Classification", "NER"]
    },
    {
      label: "Frameworks",
      items: ["FastAPI", "Spring Boot", "Helidon SE", "Flask", "LangChain", "Neo4j", "OR-Tools"]
    },
    {
      label: "Infrastructure",
      items: ["OCI", "AWS", "Docker", "Jenkins", "CI/CD", "Git"]
    },
    {
      label: "AI Services",
      items: ["OCI GenAI", "OCI Vision", "OCI AI Agents", "Gemini"]
    }
  ];

  const certifications = [
    "Neural Networks and Deep Learning — Coursera / deeplearning.ai",
    "Improving Deep Neural Networks — Coursera",
    "OCI Generative AI Professional — Oracle",
    "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents — Udemy",
    "Vector Databases for RAG — IBM",
    "Python for Data Science and ML Bootcamp — Udemy"
  ];

  const resumeExperience = [
    {
      title: "Software Engineer",
      company: "Oracle",
      period: "Oct 2022 – Apr 2026",
      bullets: [
        "Contributed to every JMS release v6.0-v11: feature development, API design, library vulnerability scanning (SCA), crypto event analysis, performance analysis, DRS management, and test authorship.",
        "Built 2 enterprise-deployed AI tools on OCI: RAG pipeline (60% faster spec generation) and image redaction pipeline (85% reduction in manual effort).",
        "Contributing to OCI JMS MCP server on public Oracle GitHub. Built OracleTest Agent (agentic QA platform targeting 70% QA triage reduction)."
      ]
    },
    {
      title: "Intern",
      company: "Oracle",
      period: "Mar 2022 – Jul 2022",
      bullets: [
        "Built and published Oracle LiveLabs tutorials for OCI and JMS. Automated release processes via scripting and CI/CD."
      ]
    },
    {
      title: "Validation Engineer",
      company: "Exicom Tele-Systems Limited",
      period: "Jul 2016 – Nov 2019",
      bullets: [
        "Built automated test setups and Python scripts for EV charger validation; improved production processes through root cause analysis."
      ]
    }
  ];

  const resumeEducation = [
    "MTech in AI Systems | NUS-ISS | Jan 2026 – Dec 2028 (Full-time from Apr 2026)",
    "Graduate Diploma in Systems Analysis | NUS-ISS | Jul 2021 – Aug 2022 | GPA 4.92/5, Distinction, ISS Prize",
    "PG Certificate in Data Science & ML | IIT Roorkee | 2021-2022",
    "BSc Computer Science | Coventry University (PSB Academy) | 2019-2021 | First Class Honours, Top Graduate",
    "Advanced Diploma in Mechatronics & Automation | Indo Swiss Training Centre | 2012-2016"
  ];

  return (
    <div className="container-shell pb-20 pt-28 md:pt-32">
      <div className="soft-card rounded-[2rem] px-6 py-10 sm:px-8 md:px-12 md:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Resume"
            title="A concise view of engineering experience, AI focus, and current fit."
          />
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <Link href="/contact">
                Contact
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild>
              <a href={resumeHref} download>
                {resumeLabel}
                <Download className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Card>
            <CardContent className="space-y-8 p-6 md:p-8">
              <div>
                <h1 className="text-3xl font-semibold text-[var(--color-ink)]">Bhuvesh Kumar</h1>
                <p className="mt-3 text-lg leading-8">Software Engineer &amp; AI/ML Engineer</p>
              </div>

              <div className="space-y-3 text-sm leading-7">
                <p><span className="text-[var(--color-muted)]">Location:</span> Singapore</p>
                <p><span className="text-[var(--color-muted)]">Email:</span> bhuveshsharma09@gmail.com</p>
                <p>
                  <span className="text-[var(--color-muted)]">LinkedIn:</span>{" "}
                  <a href="https://linkedin.com/in/bhuvesh-kumar-9732821b1" target="_blank" rel="noreferrer" className="text-[var(--color-ink)] hover:text-[var(--color-accent)]">
                    linkedin.com/in/bhuvesh-kumar-9732821b1
                  </a>
                </p>
                <p>
                  <span className="text-[var(--color-muted)]">GitHub:</span>{" "}
                  <a href="https://github.com/bhuveshsharma09" target="_blank" rel="noreferrer" className="text-[var(--color-ink)] hover:text-[var(--color-accent)]">
                    github.com/bhuveshsharma09
                  </a>
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">Skills</p>
                <div className="mt-4 space-y-5">
                  {skillGroups.map((group) => (
                    <div key={group.label}>
                      <p className="text-sm font-medium text-[var(--color-ink)]">{group.label}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-full border border-[var(--color-line)] bg-white/72 px-3 py-1.5 text-xs text-[var(--color-ink)]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">Certifications</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-ink)]">
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">Experience</p>
                <div className="mt-6 space-y-6">
                  {resumeExperience.map((item) => (
                    <div key={`${item.company}-${item.title}`} className="border-b border-[var(--color-line)] pb-6 last:border-b-0 last:pb-0">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
                            {item.title} | {item.company}
                          </h2>
                        </div>
                        <p className="text-sm text-[var(--color-muted)]">{item.period}</p>
                      </div>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-ink)]">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">Education</p>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-ink)]">
                  {resumeEducation.map((item) => (
                    <li key={item} className="rounded-2xl border border-[var(--color-line)] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">Current study detail</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-ink)]">
                  <p>{education[0]?.summary}</p>
                  <ul className="space-y-2 text-[var(--color-muted)]">
                    {education[0]?.highlights.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
