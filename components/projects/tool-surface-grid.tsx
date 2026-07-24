import type { ProjectToolSurface } from "@/data/projects"

export function ToolSurfaceGrid({ data }: { data: ProjectToolSurface }) {
  const badge = data.newBadge ?? "new"
  return (
    <div>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {data.groups.map((group) => (
          <li
            key={group.label}
            className="rounded-xl border border-border bg-card px-4 py-3"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-semibold text-foreground">{group.label}</p>
              {group.isNew ? (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[color:var(--accent-lime-bg)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-green)]"
                  />
                  {badge}
                </span>
              ) : null}
            </div>
            {group.tool ? (
              <p className="mt-1 font-mono text-[11px] leading-snug text-muted-foreground">
                {group.tool}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
      {data.caption ? (
        <p className="mt-3 text-xs italic text-muted-foreground">{data.caption}</p>
      ) : null}
    </div>
  )
}
