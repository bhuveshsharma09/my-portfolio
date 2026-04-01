import { siteData } from "@/data/site";

import { SectionHeading } from "./SectionHeading";
import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  return (
    <section id="about" className="container-shell mt-6 scroll-mt-28 md:mt-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="rounded-[1.8rem]">
          <CardContent className="space-y-5 p-6 md:p-8">
            <SectionHeading
              eyebrow="About"
              title="Engineering discipline first, applied AI where it creates real leverage."
              description="Bhuvesh works at the intersection of backend systems, intelligent tooling, and pragmatic AI delivery."
            />
            <p className="leading-8">{siteData.about}</p>
          </CardContent>
        </Card>

        <Card className="rounded-[1.8rem]">
          <CardContent className="grid gap-5 p-6 md:grid-cols-2 md:p-8">
            {siteData.aboutPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/62 p-5"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">{item.title}</p>
                <p className="mt-3 text-base leading-7">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
