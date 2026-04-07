"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function JoinAdventureForm({ id }: { id?: string }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      id={id}
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label htmlFor={`email-${id ?? "default"}`} className="sr-only">
        Email for newsletter
      </label>
      <input
        id={`email-${id ?? "default"}`}
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@your-startup.com"
        className="h-11 min-w-0 flex-1 rounded-xl border border-zinc-200/80 bg-zinc-50 px-4 text-sm text-zinc-900 shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(15,23,42,0.06)] outline-none ring-violet-400/50 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.35)]"
      />
      <Button type="submit" className="shrink-0 gap-2">
        <Sparkles className="size-4" aria-hidden />
        {sent ? "You are in!" : "Join the Adventure"}
      </Button>
    </form>
  );
}
