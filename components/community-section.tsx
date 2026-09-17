import { communityRoles, volunteerExperience } from "@/data/experience"

const entries = [
  ...volunteerExperience.map((item) => ({
    id: item.id,
    organization: item.organization,
    href: item.organizationHref,
    icon: item.organizationIcon,
    title: item.role,
    marker: item.marker as string | undefined,
    dates: `${item.dates} · ${item.location}`,
    secondary: undefined as string | undefined,
    description: item.description,
  })),
  ...communityRoles.map((role) => ({
    id: role.id,
    organization: role.organization,
    href: role.organizationHref,
    icon: role.organizationIcon,
    title: role.title,
    marker: undefined as string | undefined,
    dates: role.dates,
    secondary: role.secondary,
    description: role.description,
  })),
]

export function CommunitySection() {
  return (
    <section id="community" aria-labelledby="community-heading" className="mt-14 scroll-mt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">Community</p>
      <h2 id="community-heading" className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
        Community &amp; Leadership
      </h2>
      <p className="mt-2 max-w-[75ch] text-[15px] leading-7 text-muted-foreground">
        Technical leadership and volunteer work supporting Singapore’s developer and nonprofit communities.
      </p>

      <div className="mt-6 divide-y divide-neutral-200/80 border-y border-neutral-200/80">
        {entries.map((entry) => (
          <article key={entry.id} aria-labelledby={`${entry.id}-heading`} className="py-8">
            <div className="flex flex-col gap-x-8 gap-y-2 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <h3 id={`${entry.id}-heading`} className="text-xl font-bold tracking-tight text-foreground">
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${entry.organization} website (opens in a new tab)`}
                    className="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {entry.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={entry.icon} alt="" className="h-5 w-5 shrink-0 rounded-sm" />
                    ) : null}
                    {entry.organization}
                  </a>
                </h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-semibold text-foreground">
                  {entry.title}
                  {entry.marker ? (
                    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {entry.marker}
                    </span>
                  ) : null}
                </p>
              </div>
              <div className="text-sm text-muted-foreground md:shrink-0 md:pt-1 md:text-right">
                <p>{entry.dates}</p>
                {entry.secondary ? <p className="mt-0.5 text-xs">{entry.secondary}</p> : null}
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-muted-foreground">{entry.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
