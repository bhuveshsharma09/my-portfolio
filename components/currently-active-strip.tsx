"use client"

const activeCards = [
  {
    label: "BUILDING",
    title: "HDB ResaleXAI",
    subtitle: "NUS-ISS · IRS module project",
  },
  {
    label: "ENGINEERING",
    title: "AI Engineer",
    subtitle: "better.sg · volunteer",
  },
  {
    label: "STUDYING",
    title: "MTech AI Systems",
    subtitle: "NUS-ISS · full-time from Apr 2026",
  },
]

export function CurrentlyActiveStrip() {
  return (
    <section className="px-6 pb-4">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {activeCards.map((card) => (
            <div key={card.label} className="rounded-xl bg-muted px-4 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-[7px] w-[7px] rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {card.label}
                </span>
              </div>
              <p className="mt-2 text-[14px] font-medium text-foreground">{card.title}</p>
              <p className="mt-1 text-[12px] text-muted-foreground">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
