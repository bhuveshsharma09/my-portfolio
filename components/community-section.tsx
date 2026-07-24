"use client"

import { communityRoles } from "@/data/experience"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

export function CommunitySection() {
  return (
    <section id="community" className="px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-none">
        <SectionHeading
          eyebrow="Community & Leadership"
          title="Beyond the code."
          subtitle="Volunteering, society memberships, and community work in Singapore."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {communityRoles.map((role) => (
            <div
              key={role.id}
              className={cn(
                "group relative rounded-2xl bg-card p-4 transition-all duration-300",
                "border border-neutral-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]",
                "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
              )}
            >
              <h3 className="text-base font-semibold text-foreground">
                {role.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-orange">
                {role.organization}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {role.dates}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
