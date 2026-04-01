import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/project";

import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const metrics = project.metrics ?? [project.metric];

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full rounded-[1.6rem] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_44px_rgba(23,22,20,0.08)]">
        <CardContent className="flex h-full flex-col gap-5 p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant={project.categoryVariant ?? "status"}>{project.subtitle}</Badge>
                {project.orgLabel ? (
                  <Badge variant="secondary" className="bg-[rgba(255,255,255,0.58)] text-[var(--color-ink)]">
                    {project.orgLabel}
                  </Badge>
                ) : null}
                <Badge variant="secondary" className="text-[var(--color-ink)]">
                  {project.status}
                </Badge>
              </div>
              <div>
                <h3 className="text-[1.65rem] font-semibold text-[var(--color-ink)]">{project.title}</h3>
                <p className="mt-3 font-mono text-sm leading-7 text-[var(--color-muted)]">{project.summary}</p>
              </div>
            </div>
            <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[var(--color-line)] bg-white/75">
              <ArrowUpRight className="size-4 text-[var(--color-ink)] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.54)] p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Outcome</p>
            <p className="mt-3 text-base font-medium leading-7 text-[var(--color-ink)]">{project.outcome}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {metrics.map((metric) => (
                <p key={metric} className="text-sm font-semibold text-[var(--color-accent)]">
                  {metric}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
