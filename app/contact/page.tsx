import type { Metadata } from "next";

import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for Bhuvesh Kumar."
};

export default function ContactPage() {
  return (
    <div className="pb-20 pt-4">
      <ContactSection />
    </div>
  );
}
