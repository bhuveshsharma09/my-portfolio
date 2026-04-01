"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

function Sheet({ ...props }: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root {...props} />;
}

function SheetTrigger({ ...props }: React.ComponentProps<typeof Dialog.Trigger>) {
  return <Dialog.Trigger {...props} />;
}

function SheetPortal({ ...props }: React.ComponentProps<typeof Dialog.Portal>) {
  return <Dialog.Portal {...props} />;
}

function SheetClose({ ...props }: React.ComponentProps<typeof Dialog.Close>) {
  return <Dialog.Close {...props} />;
}

function SheetOverlay({ className, ...props }: React.ComponentProps<typeof Dialog.Overlay>) {
  return (
    <Dialog.Overlay
      className={cn("fixed inset-0 z-50 bg-[rgba(21,34,53,0.34)] backdrop-blur-sm", className)}
      {...props}
    />
  );
}

function SheetContent({ className, children, ...props }: React.ComponentProps<typeof Dialog.Content>) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <Dialog.Content
        className={cn(
          "fixed inset-y-3 right-3 z-50 w-[min(22rem,calc(100vw-1.5rem))] rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_28px_90px_rgba(21,34,53,0.2)]",
          className
        )}
        {...props}
      >
        {children}
        <SheetClose className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-[var(--color-line)] bg-white/80">
          <X className="size-4 text-[var(--color-ink)]" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </Dialog.Content>
    </SheetPortal>
  );
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof Dialog.Title>) {
  return <Dialog.Title className={cn(className)} {...props} />;
}

export { Sheet, SheetClose, SheetContent, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger };

