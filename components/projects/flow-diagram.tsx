import { Fragment } from "react"
import { ArrowRight } from "lucide-react"
import { Arrow, FlowBox } from "@/components/projects/report-flow-diagrams"
import type { ProjectFlowBox, ProjectFlowSpec } from "@/data/projects"

function PlainBox({ box, center }: { box: ProjectFlowBox; center?: boolean }) {
  return (
    <div
      className={
        center
          ? "flex-1 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-center"
          : "flex-1 rounded-xl border border-neutral-200 bg-white px-3 py-2.5"
      }
    >
      <p className="text-sm font-semibold text-foreground">{box.title}</p>
      <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">{box.sub}</p>
    </div>
  )
}

export function FlowDiagramCards({
  specs,
  plain,
}: {
  specs: ProjectFlowSpec[]
  plain?: boolean
}) {
  if (plain) {
    return (
      <div className="space-y-6">
        {specs.map((spec) => (
          <div key={spec.label} className="space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {spec.label}
            </p>
            {spec.lanes.map((lane, laneIndex) =>
              lane.length === 1 ? (
                <div key={lane[0].title} className="flex">
                  <PlainBox box={lane[0]} center />
                </div>
              ) : (
                // eslint-disable-next-line react/no-array-index-key
                <div key={laneIndex} className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-stretch">
                  {lane.map((box, boxIndex) => (
                    <div key={box.title} className="flex min-w-[140px] flex-1 items-center gap-2">
                      <PlainBox box={box} />
                      {boxIndex < lane.length - 1 ? (
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                      ) : null}
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {specs.map((spec) => (
        <div key={spec.label} className="rounded-2xl border border-neutral-200/80 bg-white p-5">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {spec.label}
          </p>
          <div className="space-y-3">
            {spec.lanes.map((lane, laneIndex) =>
              lane.length === 1 ? (
                <FlowBox
                  key={lane[0].title}
                  title={lane[0].title}
                  sub={lane[0].sub}
                  variant={lane[0].variant}
                />
              ) : (
                // eslint-disable-next-line react/no-array-index-key
                <div key={laneIndex} className="flex flex-wrap items-center gap-3">
                  {lane.map((box, boxIndex) => (
                    <Fragment key={box.title}>
                      {boxIndex > 0 ? <Arrow /> : null}
                      <FlowBox title={box.title} sub={box.sub} variant={box.variant} />
                    </Fragment>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
