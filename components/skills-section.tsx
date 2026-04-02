"use client"

import { useState } from "react"
import { skills } from "@/data/experience"
import { cn } from "@/lib/utils"
import { Code, Brain, Cpu, MessageSquare, Bot, Wrench, Cloud } from "lucide-react"

const skillCategories = [
  { key: "languages", label: "Languages", icon: Code, color: "blue" },
  { key: "mlCore", label: "ML Core", icon: Brain, color: "purple" },
  { key: "deepLearning", label: "Deep Learning & CV", icon: Cpu, color: "green" },
  { key: "nlp", label: "NLP", icon: MessageSquare, color: "cyan" },
  { key: "llmsAgents", label: "LLMs & Agents", icon: Bot, color: "orange" },
  { key: "frameworks", label: "Frameworks & Tools", icon: Wrench, color: "pink" },
  { key: "infrastructure", label: "Infrastructure", icon: Cloud, color: "slate" },
] as const

const colorMap = {
  blue: "bg-blue/10 text-blue",
  purple: "bg-purple-500/10 text-purple-600",
  green: "bg-green/10 text-green",
  cyan: "bg-cyan-500/10 text-cyan-600",
  orange: "bg-orange/10 text-orange",
  pink: "bg-pink-500/10 text-pink-600",
  slate: "bg-slate-500/10 text-slate-600",
}

export function SkillsSection() {
  const [showAllSkills, setShowAllSkills] = useState(false)
  const visibleCategoryKeys = ["languages", "llmsAgents", "mlCore", "frameworks"]
  const primaryCategories = visibleCategoryKeys
    .map((key) => skillCategories.find((category) => category.key === key))
    .filter((category): category is (typeof skillCategories)[number] => Boolean(category))
  const hiddenCategories = skillCategories.filter((category) => !visibleCategoryKeys.includes(category.key))

  return (
    <section id="skills" className="scroll-mt-32 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground">
            Technical expertise spanning software engineering, machine learning, and cloud infrastructure.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {primaryCategories.map(({ key, label, icon: Icon, color }) => (
            <div
              key={key}
              className={cn(
                "group relative rounded-2xl bg-card p-5 transition-all duration-300",
                "border border-neutral-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]",
                "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
              )}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={cn("p-1.5 rounded-lg", colorMap[color])}>
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{label}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skills[key as keyof typeof skills].map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
                      colorMap[color]
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={showAllSkills}
          onClick={() => setShowAllSkills((current) => !current)}
          className="mt-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {showAllSkills ? "Show less ↑" : "Show all skills ↓"}
        </button>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-out",
            showAllSkills ? "mt-4 max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hiddenCategories.map(({ key, label, icon: Icon, color }) => (
              <div
                key={key}
                className={cn(
                  "group relative rounded-2xl bg-card p-5 transition-all duration-300",
                  "border border-neutral-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]",
                  "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
                )}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className={cn("rounded-lg p-1.5", colorMap[color])}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skills[key as keyof typeof skills].map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
                        colorMap[color]
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
