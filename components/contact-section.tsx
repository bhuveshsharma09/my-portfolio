"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className={cn(
          "rounded-2xl bg-card p-8 md:p-12 text-center",
          "border border-neutral-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_3px_0_rgba(0,0,0,0.04)]"
        )}>
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Open to the right role.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm">
            I&apos;m looking for AI/ML engineering roles where production software rigour matters
            {" "}— not just prototype builders. Based in Singapore, open to on-site.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Button asChild size="lg" className="rounded-full px-8 bg-foreground text-primary-foreground hover:bg-foreground/90">
              <Link href={siteConfig.social.email}>
                <Mail className="mr-2 h-4 w-4" />
                Send me an email
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-neutral-200"
            >
              <Link href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 text-sm">
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <span className="text-neutral-300">|</span>
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <span className="text-neutral-300">|</span>
            <Link
              href={siteConfig.social.email}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
