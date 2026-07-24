import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
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
      <h2 className="text-h2">{title}</h2>
      {subtitle && (
        <p className="text-body max-w-2xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}
