import Link from "next/link"
import { siteConfig } from "@/data/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface-footer">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-body text-muted-foreground">
            {currentYear} {siteConfig.name}. Built with Next.js.
          </p>

          <nav className="flex items-center gap-6">
            {[
              { href: "/projects", label: "Projects" },
              { href: "/education", label: "Education" },
              { href: "/experience", label: "Experience" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
