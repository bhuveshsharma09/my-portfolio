import { PenLine } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function BlogSection() {
  return (
    <section id="blog" className="px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-none">
        <SectionHeading
          eyebrow="Blog"
          title="Notes from the lab."
          subtitle="Working notes on AI engineering, RAG, agents, and the MTech. First posts land later this year."
        />

        <div className="rounded-3xl border border-dashed border-border bg-card px-6 py-16 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-orange">
            <PenLine className="h-5 w-5" />
          </div>
          <p className="mt-4 font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Coming soon
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Drafting the first few posts now.
          </p>
        </div>
      </div>
    </section>
  )
}
