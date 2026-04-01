import { Card, CardContent } from "./ui/card";

export function ImpactSection() {
  return (
    <section className="container-shell mt-6 md:mt-8">
      <Card className="rounded-[1.6rem]">
        <CardContent className="p-5 md:p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">Impact</p>
          <p className="mt-5 max-w-4xl text-[15px] leading-7">
            Over 3.5 years at Oracle Singapore, I contributed to every release of Java Management Service from
            v6.0 to v11 - working across platform features, API design, security scanning, crypto event analysis,
            and performance tooling used by enterprise Java teams globally. I initiated and shipped two AI tools
            that went into production: a RAG pipeline that cut test specification time by 60%, and an image
            redaction system that reduced manual documentation effort by 85%. Every project shipped inside
            Oracle&apos;s cloud infrastructure - not side work, but product work with real deployment and real users.
          </p>
          <a
            href="#projects"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]"
          >
            → See the work
          </a>
        </CardContent>
      </Card>
    </section>
  );
}
