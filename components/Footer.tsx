import Link from "next/link";

import { siteData } from "@/data/site";

export function Footer() {
  return (
    <footer className="container-shell py-8">
      <div className="flex flex-col gap-4 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
        <p>{siteData.name} • {siteData.title}</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="transition hover:text-[var(--color-ink)]">
            Projects
          </Link>
          <Link href="/personal" className="transition hover:text-[var(--color-ink)]">
            Personal
          </Link>
          <Link href="/resume" className="transition hover:text-[var(--color-ink)]">
            Resume
          </Link>
          <a href={`mailto:${siteData.email}`} className="transition hover:text-[var(--color-ink)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
