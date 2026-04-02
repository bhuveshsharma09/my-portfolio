"use client"

const activeItems = [
  "HDB ResaleXAI — NUS-ISS capstone, actively building",
  "AI Engineer @ better.sg — live volunteer engineering",
  "MTech AI Systems @ NUS-ISS — full-time from Apr 2026",
]

export function CurrentlyActiveStrip() {
  return (
    <section className="px-6 pb-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-2 rounded-2xl border border-orange/15 bg-orange/5 px-4 py-2.5 md:flex-row md:items-center md:gap-3">
          <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Currently Active
          </p>
          <div className="flex flex-1 flex-wrap gap-2">
            {activeItems.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-orange/10 bg-background/80 px-3 py-1 text-[13px] text-muted-foreground"
              >
                <span className="h-2 w-2 rounded-full bg-green animate-pulse" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
