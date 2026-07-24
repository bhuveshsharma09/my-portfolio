import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { communityRoles } from "@/data/experience"

export const metadata: Metadata = {
  title: "Community | Bhuvesh Kumar",
  description: "Community roles and volunteering.",
}

const organizations: Record<string, { icon?: string; href?: string }> = {
  "Singapore Computer Society": { icon: "/icons/scs.png", href: "https://www.scs.org.sg/" },
  "Google Developer Student Clubs NUS": { icon: "/icons/gdsc.png", href: "https://developers.google.com/community/gdsc" },
  "better.sg": { icon: "/icons/better-sg.png", href: "https://better.sg/" },
  "Willing Hearts Soup Kitchen": { icon: "/icons/willing-hearts.png", href: "https://www.willinghearts.org.sg/" },
}

function latestYear(dates: string): number {
  if (/present/i.test(dates)) return Number.MAX_SAFE_INTEGER
  const years = dates.match(/\d{4}/g)
  return years ? Math.max(...years.map(Number)) : 0
}

export default function CommunityPage() {
  const sorted = [...communityRoles].sort((a, b) => latestYear(b.dates) - latestYear(a.dates))

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-none">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Community"
            title="Giving back, outside the day job."
          />
        </div>

        <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
          {sorted.map((role) => {
            const org = organizations[role.organization]
            return (
              <div key={role.id} className="flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <p className="font-medium text-foreground">{role.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{role.description}</p>
                </div>
                <div className="shrink-0 text-right">
                  {org?.href ? (
                    <Link
                      href={org.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-end gap-1.5 text-sm text-foreground transition-colors hover:text-orange"
                    >
                      {org.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={org.icon} alt="" className="h-4 w-4 shrink-0 rounded-sm" />
                      ) : null}
                      {role.organization}
                    </Link>
                  ) : (
                    <p className="text-sm text-foreground">{role.organization}</p>
                  )}
                  <p className="mt-0.5 text-xs text-muted-foreground">{role.dates}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
