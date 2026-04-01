import { ArrowUpRight, ExternalLink, FolderGit2, Mail } from "lucide-react";

import { siteData } from "@/data/site";

import { Button } from "./ui/button";

const iconMap = {
  Email: Mail,
  GitHub: FolderGit2,
  LinkedIn: ExternalLink
};

export function ContactSection() {
  return (
    <section id="contact" className="container-shell mt-6 scroll-mt-28 md:mt-8">
      <div className="soft-card rounded-[1.9rem] px-6 py-10 sm:px-8 md:px-12 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-muted)]">Contact</p>
            <h2 className="max-w-2xl text-balance text-4xl font-semibold sm:text-5xl">
              Open to thoughtful engineering roles building useful AI products.
            </h2>
            <p className="max-w-2xl text-lg leading-8">
              Reach out for applied AI engineering, backend-heavy product work, or developer tooling conversations.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {siteData.contactLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] ?? ArrowUpRight;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="rounded-[1.35rem] border border-[var(--color-line)] bg-white/62 p-5 transition hover:bg-white/78"
                >
                  <Icon className="size-5 text-[var(--color-accent)]" />
                  <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">{link.label}</p>
                  <p className="mt-2 text-lg font-medium text-[var(--color-ink)]">{link.value}</p>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <a href={`mailto:${siteData.email}`}>
              Start a conversation
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
          <Button variant="ghostLight" asChild>
            <a href={siteData.socials[1]?.href ?? siteData.url} target="_blank" rel="noreferrer">
              View GitHub
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
