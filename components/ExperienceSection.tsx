import { experience } from "@/data/experience";

import { SectionHeading } from "./SectionHeading";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="container-shell mt-6 scroll-mt-28 md:mt-8">
      <Card className="rounded-[1.8rem]">
        <CardContent className="p-6 md:p-8">
          <SectionHeading
            eyebrow="Experience"
            title="Work experience focused on software engineering, cloud services, and enterprise AI tooling."
            description="This section is now strictly work history. Academic study is shown separately under Studies."
          />
          <div className="mt-8 space-y-4">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="grid gap-5 rounded-[1.4rem] border border-[var(--color-line)] bg-white/62 p-5 md:grid-cols-[0.7fr_1.3fr]"
              >
                <div className="space-y-3">
                  <Badge variant="secondary">{item.period}</Badge>
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--color-ink)]">{item.role}</h3>
                    <p className="mt-1 text-base font-medium text-[var(--color-ink)]">
                      {item.company}
                      {item.location ? ` • ${item.location}` : ""}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="leading-7">{item.summary}</p>
                  <ul className="grid gap-3 text-sm leading-7 text-[var(--color-muted)] md:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="rounded-2xl border border-[var(--color-line)] px-4 py-3">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
