import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found"
    };
  }

  return {
    title: project.title,
    description: project.summary
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="container-shell flex min-h-[60vh] items-center justify-center pt-24">
        <Card className="max-w-xl rounded-[2rem]">
          <CardContent className="space-y-4 p-8 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Missing case study</p>
            <h1 className="text-3xl font-semibold text-[var(--color-ink)]">This project page is not available.</h1>
            <p>Update the project data source to publish this case study.</p>
            <Button asChild>
              <Link href="/projects">Back to all projects</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container-shell pb-20 pt-28 md:pt-32">
      <div className="soft-card rounded-[2rem] px-6 py-10 sm:px-8 md:px-12 md:py-14">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
        >
          <ArrowLeft className="size-4" />
          All projects
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <Badge variant="status">{project.subtitle}</Badge>
              <h1 className="max-w-3xl text-balance text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8">{project.summary}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="space-y-3 p-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">Problem</p>
                  <p className="leading-7">{project.problem}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-3 p-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">Solution</p>
                  <p className="leading-7">{project.solution}</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="space-y-4 p-6 md:p-8">
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">Outcome</p>
                <p className="text-xl font-medium leading-8 text-[var(--color-ink)]">{project.outcome}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="h-fit">
            <CardContent className="space-y-8 p-6 md:p-8">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">Highlights</p>
                <ul className="space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="border-b border-[var(--color-line)] pb-3 last:border-b-0 last:pb-0">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">Links</p>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) =>
                    link.href.startsWith("/") ? (
                      <Button key={link.href} variant={link.kind === "primary" ? "default" : "outline"} asChild>
                        <Link href={link.href}>
                          {link.label}
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button key={link.href} variant={link.kind === "primary" ? "default" : "outline"} asChild>
                        <a href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                          <ArrowUpRight className="size-4" />
                        </a>
                      </Button>
                    )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
