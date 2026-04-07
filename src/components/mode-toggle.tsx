"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        className={cn(
          "inline-flex size-10 rounded-xl neu-press sm:size-11",
          className,
        )}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-xl neu-press transition-transform active:scale-95 sm:size-11",
        className,
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="size-5 text-amber-500" aria-hidden />
      ) : (
        <Moon className="size-5 text-violet-600" aria-hidden />
      )}
    </button>
  );
}
