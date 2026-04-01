import { heroCards } from "@/data/site";

import { FadeInStagger } from "./motion/FadeInStagger";
import { Card, CardContent } from "./ui/card";

export function HeroCards() {
  return (
    <section className="container-shell mt-6">
      <FadeInStagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {heroCards.map((card) => (
          <Card key={card.title} className="rounded-[1.75rem]">
            <CardContent className="space-y-4 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">{card.title}</p>
              <p className="text-2xl font-semibold text-[var(--color-ink)]">{card.value}</p>
              <p className="text-sm leading-7">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </FadeInStagger>
    </section>
  );
}

