"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  User,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Wrench,
  Users,
  PenLine,
  Mail,
} from "lucide-react"
import { siteConfig } from "@/data/site"
import { StatusBadge } from "@/components/status-badge"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "About Me", icon: User },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/blog", label: "Blog", icon: PenLine },
  { href: "/skills", label: "Skills", icon: Wrench },
  { href: "/community", label: "Community", icon: Users },
  { href: "/contact", label: "Contact", icon: Mail },
]

export function Sidebar() {
  const pathname = usePathname()
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href))

  return (
    <aside className="hidden md:sticky md:top-0 md:flex md:h-screen md:w-[260px] md:flex-col md:border-r md:border-border md:px-6 md:py-8">
      <Link
        href="/"
        className="font-display text-sm font-medium uppercase tracking-[0.18em] text-foreground"
      >
        {siteConfig.name}
      </Link>

      <nav className="mt-12 flex flex-col gap-0.5">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-secondary",
                active
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span>{item.label}</span>
              <Icon className={cn("h-3.5 w-3.5 transition-opacity", active ? "opacity-100" : "opacity-50 group-hover:opacity-100")} />
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto space-y-6 pt-8">
        {siteConfig.openToWork && (
          <div>
            {pathname !== "/" && (
              <StatusBadge text={siteConfig.badgeText} variant="success" pulse />
            )}
            {siteConfig.social.resume && (
              <Link
                href={siteConfig.social.resume}
                download
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-orange"
              >
                View Resume &rarr;
              </Link>
            )}
          </div>
        )}

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Have a project in mind?
          </p>
          <p className="mt-0.5 text-sm font-medium text-foreground">Let&apos;s Chat</p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-orange"
          >
            Contact &rarr;
          </Link>
        </div>
      </div>
    </aside>
  )
}
