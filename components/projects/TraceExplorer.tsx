"use client"

import { useState, type MouseEventHandler, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type TraceCitation = {
  id: string
  title: string
  hint: string
}

type TraceFact = {
  id: string
  text: string
  citations: string[]
}

type TraceRequirement = {
  id: string
  text: string
  facts: string[]
  citations: string[]
}

type TraceAssertion = {
  id: string
  text: string
  facts: string[]
  requirements: string[]
  citations: string[]
}

type TraceTest = {
  id: string
  title: string
  tas: string[]
}

type ActiveState =
  | { type: "citation"; id: string }
  | { type: "fact"; id: string }
  | { type: "requirement"; id: string }
  | { type: "assertion"; id: string }
  | { type: "test"; id: string }
  | null

const traceData: {
  citations: TraceCitation[]
  facts: TraceFact[]
  requirements: TraceRequirement[]
  assertions: TraceAssertion[]
  tests: TraceTest[]
  links: {
    citationToFacts: Record<string, string[]>
    factToRequirements: Record<string, string[]>
    requirementToAssertions: Record<string, string[]>
    factToAssertions: Record<string, string[]>
    assertionToTests: Record<string, string[]>
  }
} = {
  citations: [
    { id: "[1]", title: "PRD: Feature overview", hint: "High-level requirements excerpt." },
    { id: "[2]", title: "API contract", hint: "Endpoint details and expected behavior." },
    { id: "[3]", title: "Architecture doc", hint: "System components and constraints." },
  ],
  facts: [
    { id: "F-1", text: "The feature exposes POST /scan for initiating a scan. [2]", citations: ["[2]"] },
    { id: "F-2", text: "Requests require authentication, otherwise 401. [2]", citations: ["[2]"] },
    { id: "F-3", text: "Scans are processed asynchronously and return a job id. [3]", citations: ["[3]"] },
  ],
  requirements: [
    {
      id: "R-1",
      text: "System provides an authenticated endpoint to start a scan. [2]",
      facts: ["F-1", "F-2"],
      citations: ["[2]"],
    },
    {
      id: "R-2",
      text: "Scan execution is asynchronous and returns a job identifier. [3]",
      facts: ["F-3"],
      citations: ["[3]"],
    },
  ],
  assertions: [
    {
      id: "TA-1",
      text: "POST /scan returns 200 plus jobId when authenticated. [2][3]",
      facts: ["F-1", "F-3"],
      requirements: ["R-1", "R-2"],
      citations: ["[2]", "[3]"],
    },
    {
      id: "TA-2",
      text: "Missing auth token returns 401. [2]",
      facts: ["F-2"],
      requirements: ["R-1"],
      citations: ["[2]"],
    },
  ],
  tests: [
    { id: "T#1", title: "Successful scan request", tas: ["TA-1"] },
    { id: "T#2", title: "Unauthorized scan request", tas: ["TA-2"] },
  ],
  links: {
    citationToFacts: {
      "[1]": [],
      "[2]": ["F-1", "F-2"],
      "[3]": ["F-3"],
    },
    factToRequirements: {
      "F-1": ["R-1"],
      "F-2": ["R-1"],
      "F-3": ["R-2"],
    },
    requirementToAssertions: {
      "R-1": ["TA-1", "TA-2"],
      "R-2": ["TA-1"],
    },
    factToAssertions: {
      "F-1": ["TA-1"],
      "F-2": ["TA-2"],
      "F-3": ["TA-1"],
    },
    assertionToTests: {
      "TA-1": ["T#1"],
      "TA-2": ["T#2"],
    },
  },
}

function getConnectedKeys(active: Exclude<ActiveState, null>) {
  const keys = new Set<string>([active.id])

  if (active.type === "citation") {
    const facts = traceData.links.citationToFacts[active.id] ?? []
    const requirements = [...new Set(facts.flatMap((fact) => traceData.links.factToRequirements[fact] ?? []))]
    const assertions = [
      ...new Set([
        ...facts.flatMap((fact) => traceData.links.factToAssertions[fact] ?? []),
        ...requirements.flatMap((requirement) => traceData.links.requirementToAssertions[requirement] ?? []),
      ]),
    ]
    const tests = [...new Set(assertions.flatMap((assertion) => traceData.links.assertionToTests[assertion] ?? []))]

    for (const key of [...facts, ...requirements, ...assertions, ...tests]) {
      keys.add(key)
    }
  }

  if (active.type === "fact") {
    const fact = traceData.facts.find((item) => item.id === active.id)
    const requirements = traceData.links.factToRequirements[active.id] ?? []
    const assertions = [
      ...new Set([
        ...(traceData.links.factToAssertions[active.id] ?? []),
        ...requirements.flatMap((requirement) => traceData.links.requirementToAssertions[requirement] ?? []),
      ]),
    ]
    const tests = [...new Set(assertions.flatMap((assertion) => traceData.links.assertionToTests[assertion] ?? []))]

    for (const key of [...(fact?.citations ?? []), ...requirements, ...assertions, ...tests]) {
      keys.add(key)
    }
  }

  if (active.type === "requirement") {
    const requirement = traceData.requirements.find((item) => item.id === active.id)
    const assertions = traceData.links.requirementToAssertions[active.id] ?? []
    const tests = [...new Set(assertions.flatMap((assertion) => traceData.links.assertionToTests[assertion] ?? []))]

    for (const key of [...(requirement?.facts ?? []), ...(requirement?.citations ?? []), ...assertions, ...tests]) {
      keys.add(key)
    }
  }

  if (active.type === "assertion") {
    const assertion = traceData.assertions.find((item) => item.id === active.id)
    const tests = traceData.links.assertionToTests[active.id] ?? []

    for (const key of [...(assertion?.facts ?? []), ...(assertion?.requirements ?? []), ...(assertion?.citations ?? []), ...tests]) {
      keys.add(key)
    }
  }

  if (active.type === "test") {
    const test = traceData.tests.find((item) => item.id === active.id)
    const assertions = test?.tas ?? []
    const requirements = [
      ...new Set(
        assertions.flatMap(
          (assertionId) => traceData.assertions.find((item) => item.id === assertionId)?.requirements ?? []
        )
      ),
    ]
    const facts = [
      ...new Set(
        assertions.flatMap(
          (assertionId) => traceData.assertions.find((item) => item.id === assertionId)?.facts ?? []
        )
      ),
    ]
    const citations = [
      ...new Set(
        assertions.flatMap(
          (assertionId) => traceData.assertions.find((item) => item.id === assertionId)?.citations ?? []
        )
      ),
    ]

    for (const key of [...assertions, ...requirements, ...facts, ...citations]) {
      keys.add(key)
    }
  }

  return keys
}

function TraceColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-3 px-1 text-sm font-semibold text-neutral-900">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function TraceCard({
  title,
  subtitle,
  chips,
  state,
  onClick,
}: {
  title: string
  subtitle: string
  chips?: string[]
  state: "default" | "active" | "dimmed"
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full rounded-lg border bg-white p-3 text-left transition-all",
        "border-[#e5e7eb]",
        state === "active" && "border-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.14)]",
        state === "dimmed" && "opacity-40"
      )}
    >
      <div className="text-sm font-semibold text-neutral-950">{title}</div>
      <div className="mt-1 text-xs leading-5 text-neutral-600">{subtitle}</div>
      {chips?.length ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[10px] font-medium text-neutral-600"
            >
              {chip}
            </span>
          ))}
        </div>
      ) : null}
    </button>
  )
}

export function TraceExplorer() {
  const [active, setActive] = useState<ActiveState>(null)
  const activeKeys = active ? getConnectedKeys(active) : null

  function handleToggle(next: Exclude<ActiveState, null>) {
    setActive((current) =>
      current?.type === next.type && current.id === next.id ? null : next
    )
  }

  function getCardState(key: string) {
    if (!activeKeys) {
      return "default" as const
    }

    return activeKeys.has(key) ? ("active" as const) : ("dimmed" as const)
  }

  return (
    <div
      className="rounded-xl bg-[#f9fafb] p-5"
      onClick={() => setActive(null)}
    >
      <div className="mb-4 flex flex-wrap gap-2">
        {["[n] citation", "F-* fact", "R-* requirement", "TA-* assertion", "T# test"].map((label) => (
          <span
            key={label}
            className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs font-medium text-neutral-600"
          >
            {label}
          </span>
        ))}
      </div>

      <div className="overflow-x-auto" onClick={(event) => event.stopPropagation()}>
        <div className="grid min-w-[1100px] grid-cols-5 gap-4">
          <TraceColumn title="Citations">
            {traceData.citations.map((citation) => (
              <TraceCard
                key={citation.id}
                title={`${citation.id} ${citation.title}`}
                subtitle={citation.hint}
                state={getCardState(citation.id)}
                onClick={(event) => {
                  event.stopPropagation()
                  handleToggle({ type: "citation", id: citation.id })
                }}
              />
            ))}
          </TraceColumn>

          <TraceColumn title="Evidence facts">
            {traceData.facts.map((fact) => (
              <TraceCard
                key={fact.id}
                title={fact.id}
                subtitle={fact.text}
                chips={fact.citations}
                state={getCardState(fact.id)}
                onClick={(event) => {
                  event.stopPropagation()
                  handleToggle({ type: "fact", id: fact.id })
                }}
              />
            ))}
          </TraceColumn>

          <TraceColumn title="Requirements">
            {traceData.requirements.map((requirement) => (
              <TraceCard
                key={requirement.id}
                title={requirement.id}
                subtitle={requirement.text}
                chips={[...requirement.facts, ...requirement.citations]}
                state={getCardState(requirement.id)}
                onClick={(event) => {
                  event.stopPropagation()
                  handleToggle({ type: "requirement", id: requirement.id })
                }}
              />
            ))}
          </TraceColumn>

          <TraceColumn title="Testable assertions">
            {traceData.assertions.map((assertion) => (
              <TraceCard
                key={assertion.id}
                title={assertion.id}
                subtitle={assertion.text}
                chips={[...assertion.facts, ...assertion.requirements, ...assertion.citations]}
                state={getCardState(assertion.id)}
                onClick={(event) => {
                  event.stopPropagation()
                  handleToggle({ type: "assertion", id: assertion.id })
                }}
              />
            ))}
          </TraceColumn>

          <TraceColumn title="Tests">
            {traceData.tests.map((test) => (
              <TraceCard
                key={test.id}
                title={`${test.id} ${test.title}`}
                subtitle={`Maps to ${test.tas.join(", ")}`}
                chips={test.tas}
                state={getCardState(test.id)}
                onClick={(event) => {
                  event.stopPropagation()
                  handleToggle({ type: "test", id: test.id })
                }}
              />
            ))}
          </TraceColumn>
        </div>
      </div>
    </div>
  )
}
