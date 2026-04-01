"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface BentoCardProps {
  children: ReactNode
  className?: string
  header?: string
  hover?: boolean
}

export function BentoCard({
  children,
  className,
  header,
  hover = true,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl bg-card p-5 transition-all duration-300",
        // Depth effect with inset shadow and subtle border
        "border border-neutral-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]",
        hover && "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5",
        className
      )}
    >
      {header && (
        <div className="mb-3">
          <span className="inline-flex items-center rounded-lg bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
            {header}
          </span>
        </div>
      )}
      {children}
    </div>
  )
}
