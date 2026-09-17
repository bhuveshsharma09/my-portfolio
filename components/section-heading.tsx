import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
  headingLevel?: "h1" | "h2"
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  headingLevel = "h2",
}: SectionHeadingProps) {
  const Heading = headingLevel
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="text-label text-muted-foreground">{eyebrow}</div>
      )}
      <Heading className="text-h2">{title}</Heading>
      {subtitle && (
        <p className="text-body max-w-2xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}
