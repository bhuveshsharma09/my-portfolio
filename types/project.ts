export type ProjectLink = {
  label: string;
  href: string;
  kind: "primary" | "secondary";
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  orgLabel?: string;
  status: string;
  section: "main" | "foundation";
  categoryVariant?: "default" | "secondary" | "status";
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  metric: string;
  metrics?: string[];
  techStack: string[];
  tags: string[];
  featured: boolean;
  highlights: string[];
  links: ProjectLink[];
};
