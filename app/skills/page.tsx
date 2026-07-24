import type { Metadata } from "next"
import { SectionHeading } from "@/components/section-heading"
import { skillCategories } from "@/data/experience"

export const metadata: Metadata = {
  title: "Skills | Bhuvesh Kumar",
  description: "Languages, frameworks, and tools, grouped by area.",
}

const chipColors = [
  "bg-blue-50 text-blue-700",
  "bg-violet-50 text-violet-700",
  "bg-emerald-50 text-emerald-700",
  "bg-amber-50 text-amber-700",
  "bg-rose-50 text-rose-700",
  "bg-cyan-50 text-cyan-700",
  "bg-indigo-50 text-indigo-700",
  "bg-teal-50 text-teal-700",
  "bg-orange-50 text-orange-700",
  "bg-fuchsia-50 text-fuchsia-700",
]

export default function SkillsPage() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-none">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Skills"
            title="What I build with."
          />
        </div>

        <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="flex flex-col gap-2 py-4 md:flex-row md:items-baseline md:gap-6"
            >
              <p className="shrink-0 font-medium text-foreground md:w-60">{category.title}</p>
              <div className="flex flex-wrap items-center gap-1.5">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${chipColors[index % chipColors.length]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
