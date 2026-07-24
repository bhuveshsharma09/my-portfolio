import Link from "next/link"
import { siteConfig } from "@/data/site"
import { SectionHeading } from "@/components/section-heading"

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-4">
      <div className="mx-auto w-full max-w-none">
        <SectionHeading title="A short version of the long story." className="mb-5" />

        <div className="space-y-4">
          {siteConfig.aboutMe.map((paragraph, idx) => (
            <p key={idx} className="text-body max-w-3xl text-muted-foreground md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {siteConfig.keyFacts.map((fact) => {
            const inner = (
              <>
                <span className="opacity-70">{fact.label}</span>
                <span aria-hidden className="opacity-40">·</span>
                <span className="font-medium">{fact.value}</span>
              </>
            )
            const className =
              "inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-4 py-1.5 text-sm text-foreground"
            return "href" in fact && fact.href ? (
              <Link
                key={fact.label}
                href={fact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} transition-colors hover:bg-neutral-200`}
              >
                {inner}
              </Link>
            ) : (
              <span key={fact.label} className={className}>
                {inner}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
