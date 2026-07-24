"use client"

import { useState } from "react"
import Image from "next/image"
import { Expand, X } from "lucide-react"

type ProjectVisual = {
  title: string
  caption: string
  src?: string
  alt?: string
}

export function DocFigure({ visual }: { visual: ProjectVisual }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!visual.src) return null

  return (
    <figure>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group block w-full cursor-zoom-in overflow-hidden rounded-xl border border-neutral-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Open full-size image: ${visual.title}`}
      >
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={visual.src} alt={visual.alt ?? visual.title} className="w-full" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-end bg-gradient-to-t from-black/20 via-black/0 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[10px] font-medium text-foreground shadow-sm">
              <Expand className="h-3 w-3" />
              View full size
            </span>
          </div>
        </div>
      </button>
      <figcaption className="mt-2 text-xs italic leading-5 text-muted-foreground">
        {visual.caption}
      </figcaption>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={visual.title}
        >
          <div
            className="relative flex max-h-[90vh] w-[90vw] max-w-[1200px] items-center justify-center"
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
                width={1600}
                height={1000}
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
    </figure>
  )
}
