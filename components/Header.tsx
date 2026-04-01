"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { siteData } from "@/data/site";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/personal", label: "Personal" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume", label: "Resume" }
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[rgba(23,22,20,0.06)] bg-[rgba(255,255,255,0.94)] backdrop-blur-xl">
      <div className="container-shell py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-[rgba(23,22,20,0.08)] bg-white/72 px-4 py-2 shadow-[0_8px_22px_rgba(23,22,20,0.05)]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-ink)]">{siteData.name}</p>
              <p className="text-[11px] text-[var(--color-muted)]">{siteData.email}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-[rgba(23,22,20,0.08)] bg-white/72 px-2 py-2 shadow-[0_8px_22px_rgba(23,22,20,0.05)] md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-muted)] transition hover:bg-white/70 hover:text-[var(--color-ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="outline" asChild>
              <a href={`mailto:${siteData.email}`}>Book a call</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open navigation"
                  className="grid size-11 place-items-center rounded-2xl border border-[var(--color-line)] bg-white/78"
                >
                  <Menu className="size-5 text-[var(--color-ink)]" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="mt-10 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-2xl border border-[var(--color-line)] px-4 py-3 text-base font-medium text-[var(--color-ink)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-2">
                    <a href={`mailto:${siteData.email}`}>Book a call</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
