import { cn } from "@/lib/utils"

type FlowBoxProps = {
  title: string
  sub: string
  variant?: "neutral" | "problem" | "warn" | "good" | "flow" | "ai" | "app"
  className?: string
}

export function FlowBox({ title, sub, variant = "neutral", className }: FlowBoxProps) {
  const styles = {
    neutral: "border-neutral-200 bg-neutral-50 text-foreground",
    problem: "border-red-200 bg-red-50 text-red-900",
    warn: "border-amber-200 bg-amber-50 text-amber-900",
    good: "border-emerald-200 bg-emerald-50 text-emerald-900",
    flow: "border-blue-200 bg-blue-50 text-blue-900",
    ai: "border-violet-200 bg-violet-50 text-violet-900",
    app: "border-rose-200 bg-rose-50 text-rose-900",
  }[variant]
  return (
    <div className={cn("rounded-xl border px-4 py-2.5 text-center", styles, className)}>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs opacity-80">{sub}</p>
    </div>
  )
}

export function Arrow() {
  return <span aria-hidden className="shrink-0 text-neutral-400">→</span>
}

function FixBar({ text }: { text: string }) {
  return (
    <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-center text-xs font-medium text-emerald-900">
      {text}
    </div>
  )
}

export function ManualProcessFlow() {
  return (
    <div className="rounded-2xl border border-neutral-200/80 bg-white p-5">
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        The manual process, every quarter, per client
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <FlowBox title="Outlook mailbox" sub="300 to 500 client emails" className="min-w-[160px] flex-1" />
        <Arrow />
        <FlowBox title="Manual scrolling" sub="hours per client" variant="problem" className="min-w-[160px] flex-1" />
        <Arrow />
        <FlowBox title="Memory filter" sub="what felt material" variant="problem" className="min-w-[160px] flex-1" />
        <Arrow />
        <FlowBox title="Retype into Word" sub="descriptions, follow-ups" variant="problem" className="min-w-[160px] flex-1" />
      </div>
      <div className="mt-3">
        <FlowBox
          title="Did we miss one?"
          sub="no way to answer, recall unverifiable"
          variant="warn"
          className="py-1"
        />
      </div>
    </div>
  )
}

export function SolutionFlow() {
  return (
    <div className="space-y-6 rounded-2xl border border-neutral-200/80 bg-white p-5">
      <div>
        <p className="mb-3 text-sm font-semibold text-foreground">
          Deterministic retrieval, guaranteed recall
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <FlowBox title="Server-side KQL query" sub="from:domain OR to:domain, quarter" />
          <Arrow />
          <FlowBox title="Thread dedup" sub="group by conversationId" />
        </div>
        <FixBar text="Fixes: no scrolling, no memory filter, recall is a WHERE clause not a judgment" />
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-foreground">
          AI where judgment is needed, small inputs only
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <FlowBox title="Per-thread extraction" sub="GPT-4.1 mini, one small call each" variant="ai" />
          <Arrow />
          <FlowBox title="Rank and slot" sub="materiality 1 to 5, slot 9 rollup" variant="ai" />
        </div>
        <FixBar text="Fixes: no giant prompt, no size limits hit, no lost-in-the-middle decay" />
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-foreground">
          Staged output, human in the loop
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <FlowBox title="DraftFields list" sub="purge then insert" />
          <Arrow />
          <FlowBox title="Consultant review" sub="Power Apps, approve" />
          <Arrow />
          <FlowBox title="Word report" sub="repeating table, grows to fit" />
        </div>
        <FixBar text="Fixes: no retyping, safe re-runs, AI never writes to the report unreviewed" />
      </div>

      <FlowBox
        title="Design principle: classify with the LLM, compute with code"
        sub="retrieval and filtering deterministic, model does summarization only"
        variant="warn"
      />
    </div>
  )
}

const legend = [
  { label: "Power Automate", className: "border-blue-200 bg-blue-50" },
  { label: "AI Builder", className: "border-violet-200 bg-violet-50" },
  { label: "SharePoint", className: "border-neutral-200 bg-neutral-50" },
  { label: "Power Apps", className: "border-rose-200 bg-rose-50" },
  { label: "Word Online", className: "border-emerald-200 bg-emerald-50" },
]

function DownArrow({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("justify-self-center text-neutral-400", className)}>
      ↓
    </span>
  )
}

export function ReportArchitectureFlow() {
  return (
    <div className="rounded-2xl border border-neutral-200/80 bg-white p-5">
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {legend.map((item) => (
          <span key={item.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className={cn("h-3 w-3 rounded border", item.className)} />
            {item.label}
          </span>
        ))}
      </div>

      {/* Desktop: snaking grid layout */}
      <div className="hidden md:block">
        <div className="rounded-xl border border-dashed border-neutral-300 p-4">
          <p className="mb-4 text-sm font-semibold text-foreground">
            Flow A: WSL Comms Log, one Power Automate run per client per quarter
          </p>
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 gap-y-2">
            <FlowBox title="KQL search" sub="Outlook connector" variant="flow" />
            <Arrow />
            <FlowBox title="Thread dedup" sub="flow expressions" variant="flow" />
            <Arrow />
            <FlowBox title="HTML to text" sub="Content Conversion" variant="flow" />

            <span /><span /><span /><span />
            <DownArrow />

            <FlowBox title="Write staging rows" sub="purge then insert" variant="flow" />
            <span aria-hidden className="shrink-0 text-neutral-400">←</span>
            <FlowBox title="Rank and slot" sub="sort, slot 9 rollup" variant="flow" />
            <span aria-hidden className="shrink-0 text-neutral-400">←</span>
            <FlowBox title="WSL Key Matter" sub="GPT-4.1 mini prompt" variant="ai" />
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 gap-y-2 pt-2">
          <DownArrow />
          <span /><span /><span /><span />

          <FlowBox title="DraftFields list" sub="SharePoint, In Review" />
          <Arrow />
          <FlowBox title="Review app" sub="edit, approve" variant="app" />
          <Arrow />
          <FlowBox title="Flow B: generate" sub="map approved rows" variant="flow" />

          <span /><span /><span /><span />
          <DownArrow />

          <span /><span /><span /><span />
          <FlowBox title="Word report" sub="repeating KeyMatters table" variant="good" />
        </div>
      </div>

      {/* Mobile: simple stacked flow */}
      <div className="flex flex-col items-stretch gap-2 md:hidden">
        <div className="rounded-xl border border-dashed border-neutral-300 p-3">
          <p className="mb-3 text-sm font-semibold text-foreground">
            Flow A: one Power Automate run per client per quarter
          </p>
          <div className="flex flex-col items-stretch gap-2">
            <FlowBox title="KQL search" sub="Outlook connector" variant="flow" />
            <DownArrow className="self-center" />
            <FlowBox title="Thread dedup" sub="flow expressions" variant="flow" />
            <DownArrow className="self-center" />
            <FlowBox title="HTML to text" sub="Content Conversion" variant="flow" />
            <DownArrow className="self-center" />
            <FlowBox title="WSL Key Matter" sub="GPT-4.1 mini prompt" variant="ai" />
            <DownArrow className="self-center" />
            <FlowBox title="Rank and slot" sub="sort, slot 9 rollup" variant="flow" />
            <DownArrow className="self-center" />
            <FlowBox title="Write staging rows" sub="purge then insert" variant="flow" />
          </div>
        </div>
        <DownArrow className="self-center" />
        <FlowBox title="DraftFields list" sub="SharePoint, In Review" />
        <DownArrow className="self-center" />
        <FlowBox title="Review app" sub="edit, approve" variant="app" />
        <DownArrow className="self-center" />
        <FlowBox title="Flow B: generate" sub="map approved rows" variant="flow" />
        <DownArrow className="self-center" />
        <FlowBox title="Word report" sub="repeating KeyMatters table" variant="good" />
      </div>

      <div className="mt-4">
        <FlowBox
          title="Power Automate is the orchestrator"
          sub="it calls every other platform; AI Builder is invoked inside the loop, once per thread"
          variant="warn"
        />
      </div>
    </div>
  )
}
