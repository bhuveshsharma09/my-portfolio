"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { siteConfig } from "@/data/site"
import { StatusBadge } from "@/components/status-badge"
import { Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="px-6 pt-8 pb-4 md:pt-8 md:pb-6">
      <div className="mx-auto w-full max-w-none">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_260px] md:gap-12 lg:grid-cols-[1fr_300px]">
          <div>
            <h1 className="text-h1">
              Hi, I&apos;m {siteConfig.name.split(" ")[0]}
            </h1>

            <p className="text-h2 mt-4">
              An {siteConfig.title} based in {siteConfig.location}.
            </p>

            {siteConfig.company.split(" · ").map((line, index) => (
              <p key={line} className={index === 0 ? "text-h2 mt-3" : "text-h2 mt-1"}>
                {line}
              </p>
            ))}

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="lg"
                    className="rounded-full bg-orange px-6 text-white hover:bg-orange/90"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Get in touch
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="rounded-xl">
                  <DropdownMenuItem asChild>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href={siteConfig.social.email} className="cursor-pointer">
                      <Mail className="mr-2 h-4 w-4" />
                      Email me
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {siteConfig.social.resume && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-blue/20 bg-blue/10 px-6 text-blue hover:bg-blue/20 hover:text-blue"
                >
                  <Link href={siteConfig.social.resume} download>
                    Download Resume ↓
                  </Link>
                </Button>
              )}
              {siteConfig.openToWork && (
                <StatusBadge text={siteConfig.badgeText} variant="success" pulse />
              )}
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full bg-secondary md:max-w-none">
              <Image
                src={siteConfig.aboutPortrait.src}
                alt={siteConfig.aboutPortrait.alt}
                fill
                sizes="(min-width: 1024px) 24rem, (min-width: 768px) 20rem, 20rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
