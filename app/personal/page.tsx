import type { Metadata } from "next";

import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { personalCards } from "@/data/site";

export const metadata: Metadata = {
  title: "Personal",
  description: "Personal context, travel, fitness, learning, and community work for Bhuvesh Kumar."
};

export default function PersonalPage() {
  return (
    <div className="container-shell pb-20 pt-28 md:pt-32">
      <div className="grid gap-4 lg:grid-cols-12">
        <Card className="rounded-[1.8rem] lg:col-span-12">
          <CardContent className="p-6 md:p-8">
            <SectionHeading eyebrow="Personal" title={personalCards.intro.title} description={personalCards.intro.body} />
          </CardContent>
        </Card>

        <Card className="rounded-[1.8rem] lg:col-span-6">
          <CardContent className="p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-muted)]">{personalCards.fitness.label}</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)]">{personalCards.fitness.title}</h2>
            <p className="mt-4 text-base leading-8">{personalCards.fitness.body}</p>
          </CardContent>
        </Card>

        <Card className="rounded-[1.8rem] lg:col-span-6">
          <CardContent className="p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-muted)]">{personalCards.travel.label}</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)]">{personalCards.travel.title}</h2>
            <p className="mt-4 text-base leading-8">{personalCards.travel.body}</p>
          </CardContent>
        </Card>

        <Card className="rounded-[1.8rem] lg:col-span-4">
          <CardContent className="p-6">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-muted)]">{personalCards.volunteering.label}</p>
            <ul className="mt-4 space-y-4 text-sm leading-7 text-[var(--color-ink)]">
              {personalCards.volunteering.items.map((item) => (
                <li key={item.title}>
                  <p className="font-medium text-[var(--color-ink)]">{item.title}</p>
                  <p className="mt-1 text-[var(--color-muted)]">{item.description}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-[1.8rem] lg:col-span-4">
          <CardContent className="p-6">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-muted)]">{personalCards.learning.label}</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-ink)]">
              {personalCards.learning.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-[1.8rem] lg:col-span-4">
          <CardContent className="p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-muted)]">{personalCards.hobbies.label}</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)]">{personalCards.hobbies.title}</h2>
            <p className="mt-4 text-base leading-8">{personalCards.hobbies.body}</p>
          </CardContent>
        </Card>

        <Card className="rounded-[1.8rem] lg:col-span-4">
          <CardContent className="p-6">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-muted)]">{personalCards.community.label}</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-ink)]">
              {personalCards.community.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
