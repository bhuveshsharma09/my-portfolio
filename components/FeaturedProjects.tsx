import Link from "next/link";

import { projects } from "@/data/projects";

import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="container-shell mt-6 scroll-mt-28 md:mt-8">
      <Card className="rounded-[1.9rem]">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured work"
              title="Featured work"
              description="Stacked case studies with stronger emphasis on impact metrics, delivery context, and readable product framing."
            />
            <Button variant="outline" asChild>
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
