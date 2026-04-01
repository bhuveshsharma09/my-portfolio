import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  text: string
  variant?: "success" | "warning" | "info"
  pulse?: boolean
  className?: string
}

export function StatusBadge({
  text,
  variant = "success",
  pulse = true,
  className,
}: StatusBadgeProps) {
  const dotColors = {
    success: "bg-green",
    warning: "bg-orange",
    info: "bg-blue",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium shadow-sm",
        className
      )}
    >
      <span className="relative flex h-2.5 w-2.5">
        {pulse && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
              dotColors[variant]
            )}
          />
        )}
        <span
          className={cn(
            "relative inline-flex h-2.5 w-2.5 rounded-full",
            dotColors[variant]
          )}
        />
      </span>
      <span className="text-foreground">{text}</span>
    </span>
  )
}
