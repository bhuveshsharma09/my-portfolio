export function InitialsAvatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-orange/10 font-semibold text-orange ${className ?? ""}`}
      aria-hidden
    >
      {initials}
    </div>
  )
}
