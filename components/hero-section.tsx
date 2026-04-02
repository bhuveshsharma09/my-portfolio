"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/status-badge"
import { siteConfig } from "@/data/site"
import { Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Main Headline with inline avatar */}
        <div className="mb-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-muted-foreground/60">Hi, I&apos;m </span>
            <span className="text-foreground">Bhuvesh</span>
            <span className="inline-flex items-center gap-1.5 align-middle mx-2">
              <Image
                src={siteConfig.avatar}
                alt={siteConfig.name}
                width={48}
                height={48}
                className="rounded-full border-2 border-neutral-200 inline-block"
              />
            </span>
            <span className="text-foreground">!</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-4 space-y-1">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
            {siteConfig.title}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-orange">
              {siteConfig.company}
            </span>
            {siteConfig.openToWork && (
              <StatusBadge text={siteConfig.badgeText} variant="success" pulse />
            )}
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {siteConfig.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-6 bg-foreground text-primary-foreground hover:bg-foreground/90"
          >
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get in touch
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-6 border-neutral-200">
            {/* TODO: place resume PDF at public/resume/Bhuvesh_Kumar_Resume.pdf */}
            <Link href="/resume/Bhuvesh_Kumar_Resume.pdf" download>
              Download Resume ↓
            </Link>
          </Button>
          <Link
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            &rarr; View my GitHub
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-neutral-200/80 bg-card px-4 py-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]"
            >
              <p className="text-2xl font-bold tracking-tight text-foreground">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
