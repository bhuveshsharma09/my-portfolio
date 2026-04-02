"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#contact", label: "Contact", id: "contact" },
]

export function SectionAnchorNav() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    if (sections.length === 0) {
      return
    }

    const headerHeight = 64
    const anchorNavHeight = 40
    const navOffset = headerHeight + anchorNavHeight

    const updateActiveSection = () => {
      const firstSectionTop = sections[0].offsetTop - navOffset

      if (window.scrollY < firstSectionTop) {
        setActiveId(null)
        return
      }

      let currentActiveId: string | null = null

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navOffset

        if (window.scrollY >= sectionTop) {
          currentActiveId = section.id
        }
      })

      setActiveId(currentActiveId)
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  return (
    <div className="sticky top-16 z-40">
      <div className="border-b border-neutral-200/80 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center gap-4 overflow-x-auto px-6 py-2">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={activeId === link.id ? "true" : undefined}
              className={cn(
                "text-[13px] font-medium transition-colors",
                activeId === link.id ? "text-orange" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
