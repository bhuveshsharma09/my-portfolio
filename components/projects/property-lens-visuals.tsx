"use client"

import { useState } from "react"
import {
  Bar,
  BarChart,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { cn } from "@/lib/utils"
import type {
  ProjectCluster,
  ProjectInferenceFlow,
  ProjectModelComparison,
  ProjectProductScreens,
  ProjectShapDrivers,
  ProjectShapValidation,
  ProjectTemporalSplit,
  ProjectXaiMethod,
} from "@/data/projects"

const COLORS = {
  green: "#00C763",
  gray: "#605F5F",
  coral: "#E54848",
  ink: "#000000",
  border: "rgba(0,0,0,0.10)",
}

function ChartTooltipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-white p-3 text-xs shadow-md">
      {children}
    </div>
  )
}

export function ModelComparisonChart({ data }: { data: ProjectModelComparison }) {
  const sorted = [...data.rows].sort((a, b) => a.mape - b.mape)
  return (
    <div>
      <div className="h-[420px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={sorted}
            margin={{ top: 8, right: 24, bottom: 8, left: 0 }}
          >
            <YAxis
              type="category"
              dataKey="architecture"
              width={210}
              tick={{ fill: COLORS.gray, fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <XAxis
              type="number"
              tick={{ fill: COLORS.gray, fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `${v}%`}
              domain={[0, Math.ceil(Math.max(...sorted.map((r) => r.mape)) + 2)]}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.04)" }}
              content={({ payload }) => {
                if (!payload?.length) return null
                const row = payload[0].payload as ProjectModelComparison["rows"][number]
                return (
                  <ChartTooltipBox>
                    <p className="font-semibold text-foreground">{row.architecture}</p>
                    <p className="mt-1 text-muted-foreground">MAPE: {row.mape.toFixed(2)}%</p>
                    {row.r2 != null && (
                      <p className="text-muted-foreground">R²: {row.r2.toFixed(4)}</p>
                    )}
                    {row.rmse != null && (
                      <p className="text-muted-foreground">
                        RMSE: ${row.rmse.toLocaleString()}
                      </p>
                    )}
                    {row.mae != null && (
                      <p className="text-muted-foreground">
                        MAE: ${row.mae.toLocaleString()}
                      </p>
                    )}
                  </ChartTooltipBox>
                )
              }}
            />
            <Bar dataKey="mape" radius={[0, 4, 4, 0]}>
              {sorted.map((row, i) => (
                <Cell key={i} fill={row.deployed ? COLORS.green : COLORS.gray} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {data.caption ? (
        <p className="mt-3 text-xs italic text-muted-foreground">{data.caption}</p>
      ) : null}
    </div>
  )
}

export function TemporalSplitTimeline({ data }: { data: ProjectTemporalSplit }) {
  const styles = [
    { bg: "#E5E5E5", fg: COLORS.ink },
    { bg: "#9C9C9C", fg: "#FFFFFF" },
    { bg: COLORS.green, fg: COLORS.ink },
  ]
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-border">
        <div className="flex">
          {data.segments.map((seg, i) => {
            const s = styles[i] ?? { bg: COLORS.gray, fg: "#FFFFFF" }
            return (
              <div
                key={seg.label}
                className="flex flex-1 flex-col justify-center px-4 py-5"
                style={{ backgroundColor: s.bg, color: s.fg }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-80">
                  {seg.label}
                </p>
                <p className="mt-1 text-base font-semibold">{seg.period}</p>
                <p className="text-xs opacity-80">
                  {seg.size}
                  {seg.pct ? ` · ${seg.pct}` : ""}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      {data.footnote ? (
        <p className="text-xs italic text-muted-foreground">{data.footnote}</p>
      ) : null}
    </div>
  )
}

export function InferenceFlowStepper({ data }: { data: ProjectInferenceFlow }) {
  return (
    <div className="space-y-4">
      <ol className="space-y-2">
        {data.steps.map((step, i) => (
          <li
            key={step.title}
            className="flex gap-3 rounded-xl border border-border bg-card px-4 py-3"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-mono font-medium text-background">
              {i + 1}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">{step.title}</p>
              {step.detail ? (
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{step.detail}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
      <div className="rounded-2xl border border-[color:var(--accent-green)]/30 bg-accent-lime-bg/50 p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Result
        </p>
        <p className="mt-2 text-3xl font-bold text-foreground">{data.result.primary}</p>
        {data.result.secondary ? (
          <p className="mt-1 text-sm text-muted-foreground">{data.result.secondary}</p>
        ) : null}
      </div>
      {data.endNote ? (
        <p className="text-xs italic leading-relaxed text-muted-foreground">{data.endNote}</p>
      ) : null}
    </div>
  )
}

export function ClusterExplorer({ clusters }: { clusters: ProjectCluster[] }) {
  const [active, setActive] = useState<number>(clusters[0]?.id ?? 0)
  const cluster = clusters.find((c) => c.id === active) ?? clusters[0]
  const learners: { key: keyof ProjectCluster["weights"]; label: string; color: string }[] = [
    { key: "xgb", label: "XGBoost", color: "#0A0A0A" },
    { key: "lgb", label: "LightGBM", color: "#4A4A4A" },
    { key: "rf", label: "Random Forest", color: "#9C9C9C" },
    { key: "ridge", label: "Ridge", color: COLORS.green },
  ]

  if (!cluster) return null

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {clusters.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActive(c.id)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              c.id === active
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card text-muted-foreground hover:bg-secondary",
            )}
          >
            Cluster {c.id}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Character
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">{cluster.character}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Share of test set
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">{cluster.share}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Test MAPE
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">{cluster.testMape}</p>
          </div>
        </div>

        <div className="mt-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Base-learner weights (stacked)
          </p>
          <div className="mt-2 flex h-7 overflow-hidden rounded-md">
            {learners.map((l) => {
              const v = cluster.weights[l.key]
              return (
                <div
                  key={l.key}
                  title={`${l.label}: ${v}%`}
                  style={{ width: `${v}%`, backgroundColor: l.color }}
                  className="flex items-center justify-center text-[10px] font-medium text-white"
                >
                  {v >= 18 ? `${v}%` : ""}
                </div>
              )
            })}
          </div>
          <div className="mt-3 flex flex-wrap gap-4">
            {learners.map((l) => (
              <div key={l.key} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span
                  style={{ backgroundColor: l.color }}
                  className="h-2.5 w-2.5 rounded-sm"
                />
                {l.label} · {cluster.weights[l.key]}%
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-muted-foreground">{cluster.insight}</p>
      </div>
    </div>
  )
}

export function ShapDriversChart({ data }: { data: ProjectShapDrivers }) {
  const sorted = [...data.features].sort((a, b) => Math.abs(b.shap) - Math.abs(a.shap))
  const max = Math.max(...sorted.map((f) => Math.abs(f.shap)))
  return (
    <div>
      <div className="mb-4 rounded-xl border border-border bg-card px-4 py-3">
        <p className="text-sm text-muted-foreground">{data.flat}</p>
        <p className="mt-1 text-lg font-semibold text-foreground">
          Predicted: {data.predictedPrice}
        </p>
      </div>
      <div style={{ height: sorted.length * 40 + 30 }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={sorted}
            margin={{ top: 8, right: 16, bottom: 8, left: 0 }}
          >
            <YAxis
              type="category"
              dataKey="name"
              width={170}
              tick={{ fill: COLORS.gray, fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <XAxis
              type="number"
              tick={{ fill: COLORS.gray, fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[-max, max]}
              tickFormatter={(v: number) =>
                v === 0 ? "0" : `${v > 0 ? "+" : ""}$${Math.round(v / 1000)}k`
              }
            />
            <ReferenceLine x={0} stroke={COLORS.ink} strokeWidth={1} />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.04)" }}
              content={({ payload }) => {
                if (!payload?.length) return null
                const row = payload[0].payload as ProjectShapDrivers["features"][number]
                return (
                  <ChartTooltipBox>
                    <p className="font-semibold text-foreground">{row.name}</p>
                    <p className="mt-1 text-muted-foreground">Value: {row.rawValue}</p>
                    <p className="text-muted-foreground">
                      Impact: {row.shap > 0 ? "+" : ""}${row.shap.toLocaleString()}
                    </p>
                  </ChartTooltipBox>
                )
              }}
            />
            <Bar dataKey="shap" radius={[2, 2, 2, 2]}>
              {sorted.map((row, i) => (
                <Cell key={i} fill={row.shap > 0 ? COLORS.green : COLORS.coral} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {data.caption ? (
        <p className="mt-3 text-xs italic text-muted-foreground">{data.caption}</p>
      ) : null}
    </div>
  )
}

export function XaiMethodsTabs({ methods }: { methods: ProjectXaiMethod[] }) {
  const [active, setActive] = useState(0)
  const m = methods[active]
  if (!m) return null
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {methods.map((method, i) => (
          <button
            key={method.name}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              i === active
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card text-muted-foreground hover:bg-secondary",
            )}
          >
            {method.name}
          </button>
        ))}
      </div>
      <div className="rounded-2xl border border-border bg-card p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {m.name}
        </p>
        <p className="mt-2 text-lg font-semibold text-foreground">{m.question}</p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{m.how}</p>
      </div>
    </div>
  )
}

export function ShapValidationCards({ items }: { items: ProjectShapValidation[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
          <p className="text-stat" style={{ fontSize: "40px" }}>
            {item.value}
          </p>
          <p className="mt-2 text-label">{item.title}</p>
          <p className="mt-2 text-xs leading-snug text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export function ProductScreensPlaceholder({ data }: { data: ProjectProductScreens }) {
  return (
    <div>
      {data.description ? (
        <p className="mb-4 text-sm text-muted-foreground">{data.description}</p>
      ) : null}
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {data.items.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-dashed border-border bg-secondary p-4"
          >
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            {item.credit ? (
              <p className="mt-1 text-xs italic text-muted-foreground">{item.credit}</p>
            ) : null}
            <div className="mt-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-white">
              <p className="text-xs text-muted-foreground">Screenshot placeholder</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
