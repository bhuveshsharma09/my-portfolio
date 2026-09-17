export interface Testimonial {
  id: string
  name: string
  role: string
  linkedin: string
  project: string
  context: string
  metric: string
  quote: string
  date?: string
  source: "WhatsApp" | "LinkedIn"
}

export const testimonials: Testimonial[] = [
  {
    id: "test-spec-generator",
    name: "Jiri Rechtacek",
    role: "Consulting Member of Technical Staff, Oracle",
    linkedin: "https://www.linkedin.com/in/jirirechtacek/",
    project: "Test Specification Generator",
    context: "Used for a JMS 11 feature",
    metric: "55–60% time saved",
    quote:
      "I used the Test Specification Generator for a JMS 11 feature. The time saving was significant — I'd estimate 55–60% on the most time-consuming part. When AgentUI is prompted well, the generated test specification is a solid base for real test code, especially the assertions.",
    date: "2026-04-16",
    source: "WhatsApp",
  },
  {
    id: "sensitive-data-redaction",
    name: "Marian Merino",
    role: "Senior Member of Technical Staff, Java Platform Group, Oracle",
    linkedin: "https://www.linkedin.com/in/marian-merino-b216a538/",
    project: "Sensitive Data Redaction Tool",
    context: "Redacting sensitive data in images",
    metric: "~80% time saved",
    quote:
      "After using the redaction tool for sensitive data in images, I observed a clear improvement in efficiency compared to manual processing. It reduced the time required by approximately 80%, particularly when working with multiple images. Beyond the time savings, it also improved consistency and reduced the risk of human error — both critical factors when handling sensitive information. Great work on developing such a practical and impactful tool.",
    source: "LinkedIn",
  },
]

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id)
}
