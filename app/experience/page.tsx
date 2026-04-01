import type { Metadata } from "next";

import { ExperienceSection } from "@/components/ExperienceSection";
import { StudiesSection } from "@/components/StudiesSection";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience and study history for Bhuvesh Kumar."
};

export default function ExperiencePage() {
  return (
    <div className="pb-20 pt-4">
      <ExperienceSection />
      <StudiesSection />
    </div>
  );
}
