import { capabilities } from "@/data/site";

import { SectionHeading } from "./SectionHeading";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="container-shell mt-6 scroll-mt-28 md:mt-8">
      <Card className="rounded-[1.8rem]">
        <CardContent className="p-6 md:p-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Focused capability areas instead of an unfiltered skills cloud."
            description="The emphasis is on systems thinking, AI productization, and reliable engineering delivery."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {capabilities.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.4rem] border border-[var(--color-line)] bg-white/62 p-5"
              >
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">{group.title}</h3>
                <p className="mt-3 text-sm leading-7">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
