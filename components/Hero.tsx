import { existsSync } from "node:fs";
import { join } from "node:path";

import Image from "next/image";
import { siteData } from "@/data/site";

import { FadeIn } from "./motion/FadeIn";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function Hero() {
  const hasProfileImageLower = existsSync(join(process.cwd(), "public", "profile.jpg"));
  const hasProfileImageUpper = existsSync(join(process.cwd(), "public", "profile.JPG"));
  const profileImageSrc = hasProfileImageLower ? "/profile.jpg" : hasProfileImageUpper ? "/profile.JPG" : null;

  return (
    <section className="container-shell pt-8 md:pt-10">
      <Card className="relative overflow-visible rounded-[2rem] md:rounded-[2.2rem]">
        <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] rounded-sm bg-[#bfd1df] shadow-[0_8px_20px_rgba(23,22,20,0.08)]" />
        <CardContent className="px-4 pb-5 pt-5 sm:px-8 md:px-12 md:pb-10 md:pt-8">
          <FadeIn>
            <div className="mx-auto max-w-[900px]">
              <div className="flex items-center justify-between gap-4 pb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[rgba(23,22,20,0.34)]">
                <span>BKV_P_2026</span>
                <span>2019&gt;&gt;2026</span>
              </div>
              <div className="mt-5 max-w-[760px]">
                <h1 className="text-balance text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.06em] text-[var(--color-ink)] sm:text-[4.2rem]">
                  Hi, I&apos;m{" "}
                  <span className="inline-flex translate-y-[-0.08em] items-center gap-2 rounded-full bg-[rgba(24,24,24,0.08)] px-2.5 py-1.5 align-middle text-[0.55em]">
                    {profileImageSrc ? (
                      <span className="relative size-[52px] overflow-hidden rounded-full border border-white/70 shadow-[0_10px_22px_rgba(23,22,20,0.14)]">
                        <Image src={profileImageSrc} alt="Bhuvesh Kumar" fill className="object-cover" sizes="52px" />
                      </span>
                    ) : (
                      <span className="grid size-[52px] place-items-center rounded-full border border-white/70 bg-[var(--color-ink)] text-[0.42em] font-semibold tracking-normal text-white shadow-[0_10px_22px_rgba(23,22,20,0.14)]">
                        BK
                      </span>
                    )}
                    Bhuvesh Kumar!
                  </span>
                  <span className="mt-2 block">AI/ML engineer.</span>
                  <span className="mt-2 block text-[rgba(23,22,20,0.34)]">3.5 years shipping enterprise software at Oracle.</span>
                  <span className="mt-2 block font-bold text-[var(--color-accent)]">Now building full-time.</span>
                </h1>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Badge variant="status">{siteData.status}</Badge>
                  <Badge variant="secondary">{siteData.location}</Badge>
                  <Badge variant="secondary">🟢 Open to work</Badge>
                </div>

                <p className="mt-6 max-w-2xl text-[15px] leading-7">
                  Contributed to every JMS release from v6.0 to v11 - platform features, APIs, vulnerability scanning, performance analysis, crypto analysis. Built and deployed 2 enterprise AI tools on OCI. Now pursuing MTech in AI Systems at NUS-ISS full-time, targeting dedicated AI/ML engineering roles.
                </p>
              </div>
            </div>
          </FadeIn>
        </CardContent>
      </Card>
    </section>
  );
}
