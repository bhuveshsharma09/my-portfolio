"use client"

import { useState } from "react"
import Image from "next/image"
import { Expand, X } from "lucide-react"
import { cn } from "@/lib/utils"

type ProjectVisual = {
  title: string
  caption: string
  src?: string
  alt?: string
}

export function ProjectVisualCard({
  visual,
  aspectClassName,
}: {
  visual: ProjectVisual
  aspectClassName: string
}) {
  if (!visual.src) {
    return (
      <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50">
        <div
          className={cn(
            "flex items-center justify-center bg-[linear-gradient(135deg,rgba(251,146,60,0.1),rgba(59,130,246,0.08))]",
            aspectClassName
          )}
        >
          <Expand className="h-8 w-8 text-orange" />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-foreground">{visual.title}</h3>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">{visual.caption}</p>
        </div>
      </div>
    )
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 text-left transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Open full-size image for ${visual.title}`}
      >
        <div className={cn("relative", aspectClassName)}>
          <Image
            src={visual.src}
            alt={visual.alt ?? visual.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,245,245,0.95))]"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-end bg-gradient-to-t from-black/20 via-black/0 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[10px] font-medium text-foreground shadow-sm">
              <Expand className="h-3 w-3" />
              View full size
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-foreground">{visual.title}</h3>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">{visual.caption}</p>
        </div>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={visual.title}
        >
          <div
            className="relative flex w-[90vw] max-w-[1200px] max-h-[90vh] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-0 top-2 z-10 inline-flex items-center justify-center rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Close image viewer"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="w-full">
              <Image
                src={visual.src}
                alt={visual.alt ?? visual.title}
                width={1200}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "85vh",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
                className="bg-transparent"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
