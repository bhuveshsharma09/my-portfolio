import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black px-5 py-3 text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] hover:translate-y-[-1px]",
        outline:
          "border border-[var(--color-line)] bg-white/72 px-5 py-3 text-[var(--color-ink)] hover:bg-white",
        accent: "bg-[var(--color-accent)] px-5 py-3 text-white hover:brightness-[1.02]",
        ghostLight:
          "border border-[var(--color-line)] bg-[rgba(255,255,255,0.52)] px-5 py-3 text-[var(--color-ink)] hover:bg-white/70"
      },
      size: {
        default: "",
        sm: "px-4 py-2.5 text-xs"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
