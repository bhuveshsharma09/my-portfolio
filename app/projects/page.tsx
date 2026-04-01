import type { Metadata } from "next";

import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected applied AI, backend, and intelligent tooling projects by Bhuvesh Kumar."
};

export default function ProjectsPage() {
  const mainProjects = projects.filter((project) => project.section === "main");
  const foundationProjects = projects.filter((project) => project.section === "foundation");

  return (
    <div className="container-shell pb-20 pt-28 md:pt-32">
      <section className="soft-card rounded-[2rem] px-6 py-10 sm:px-8 md:px-12 md:py-14">
        <SectionHeading
          eyebrow="Project archive"
          title="Applied AI systems, backend tooling, and product-minded engineering."
          description="A curated view of projects built around production workflows, evaluation loops, developer experience, and pragmatic AI delivery."
        />
        <div className="mt-10">
          <ProjectGrid projects={mainProjects} />
        </div>
        <div className="mt-14 border-t border-[var(--color-line)] pt-12">
          <SectionHeading
            eyebrow="Foundation projects"
            title="Earlier work"
            description="Early-career and academic projects that built the software engineering base behind the current AI systems work."
          />
          <div className="mt-10">
            <ProjectGrid projects={foundationProjects} />
          </div>
        </div>
      </section>
    </div>
  );
}
