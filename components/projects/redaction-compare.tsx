"use client"

import { useCallback, useRef, useState } from "react"

const rows = [
  { label: "Compartment", value: "finance-prod-sg", masked: true },
  { label: "Instance name", value: "analytics-demo-01", masked: false },
  { label: "Created by", value: "priya.nair@acme-corp.com", masked: true },
  { label: "Tenancy OCID", value: "ocid1.tenancy.oc1..aaaa4xb3", masked: true },
  { label: "Region", value: "ap-singapore-1", masked: false },
  { label: "State", value: "Active", masked: false },
]

function MockConsole({ redacted }: { redacted: boolean }) {
  return (
    <div className="bg-white">
      <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
        <p className="ml-2 font-mono text-[11px] text-neutral-300">Cloud console — instance details</p>
      </div>
      <div className="space-y-2.5 px-4 pb-12 pt-4">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline gap-3">
            <p className="w-28 shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              {row.label}
            </p>
            {redacted && row.masked ? (
              <span className="inline-block select-none rounded-sm bg-neutral-800 font-mono text-xs leading-5 text-transparent">
                {row.value}
              </span>
            ) : (
              <p className="font-mono text-xs leading-5 text-foreground">{row.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function RedactionCompare() {
  const [pos, setPos] = useState(30)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  return (
    <div>
      <div
        ref={containerRef}
        role="slider"
        aria-label="Reveal redacted output"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        className="relative cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-neutral-200"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId)
          updateFromClientX(e.clientX)
        }}
        onPointerMove={(e) => {
          if (e.buttons > 0) updateFromClientX(e.clientX)
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5))
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5))
        }}
      >
        <MockConsole redacted={false} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <MockConsole redacted />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-orange" />
          <div className="absolute top-1/2 -ml-3.5 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-orange/40 bg-white shadow-sm">
            <span className="text-[10px] font-semibold text-orange">⇄</span>
          </div>
        </div>

        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-neutral-900/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white">
          Original
        </span>
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-neutral-900/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white">
          Redacted
        </span>
      </div>
      <p className="mt-3 text-xs italic text-muted-foreground">
        Illustrative example with sample data — drag the divider to reveal what the redaction agents mask.
        In the real tool this comparison is shown per image, with one-click edit of any redaction.
      </p>
    </div>
  )
}
