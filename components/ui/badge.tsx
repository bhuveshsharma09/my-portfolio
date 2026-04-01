import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium tracking-[0.02em]",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[var(--color-ink)] text-white",
        secondary: "border-[var(--color-line)] bg-white/78 text-[var(--color-muted)]",
        status: "border-[rgba(45,122,82,0.1)] bg-white text-[var(--color-success)] shadow-[0_6px_18px_rgba(23,22,20,0.05)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
