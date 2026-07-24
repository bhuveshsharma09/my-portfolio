"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { siteConfig } from "@/data/site"

const navItems = [
  { href: "/", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/blog", label: "Blog" },
  { href: "/skills", label: "Skills" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm md:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-primary-foreground font-display font-medium text-sm">
              BK
            </div>
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {siteConfig.email}
          </Link>
        </div>

        {/* Right group: nav + CTA */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden lg:flex flex-col items-end leading-tight border-l border-border pl-6 group"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Got a project in mind?
            </span>
            <span className="text-sm font-medium text-foreground group-hover:text-orange transition-colors">
              Let&apos;s chat &rarr;
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border px-6 py-4 bg-background">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
