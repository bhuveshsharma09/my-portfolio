"use client";

import { MessageCircle } from "lucide-react";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

export function FloatingAssistant() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          className="fixed bottom-5 right-5 z-50 rounded-full bg-[var(--color-ink)] px-5 py-3 text-white shadow-[0_14px_28px_rgba(23,22,20,0.18)]"
        >
          <MessageCircle className="size-4" />
          💬 Ask me anything
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[min(28rem,calc(100vw-1.5rem))]">
        <SheetTitle className="text-lg font-semibold text-[var(--color-ink)]">Ask me anything</SheetTitle>
        <div className="mt-8 rounded-[1.4rem] border border-[var(--color-line)] bg-white/72 p-5">
          <p className="text-base leading-7">
            AI assistant coming soon - this will let you ask anything about Bhuvesh&apos;s work, projects, and background.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
