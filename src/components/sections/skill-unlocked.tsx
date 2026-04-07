import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type SkillUnlockedProps = {
  title: string;
  why: string;
  science: string;
  test: string;
  icon?: LucideIcon;
  className?: string;
};

export function SkillUnlocked({
  title,
  why,
  science,
  test,
  icon: Icon = Sparkles,
  className,
}: SkillUnlockedProps) {
  return (
    <details
      className={cn(
        "group rounded-xl border-l-4 border-violet-400 bg-violet-50/90 shadow-[inset_2px_2px_6px_rgba(255,255,255,0.85),inset_-2px_-2px_6px_rgba(124,58,237,0.08),2px_2px_8px_rgba(124,58,237,0.1)] dark:border-violet-500 dark:bg-violet-950/40 dark:shadow-[inset_2px_2px_6px_rgba(139,92,246,0.12),inset_-2px_-2px_6px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-left [&::-webkit-details-marker]:hidden">
        <Icon
          className="size-4 shrink-0 text-violet-600 dark:text-violet-300"
          aria-hidden
        />
        <span className="text-xs font-bold uppercase tracking-wide text-violet-800 dark:text-violet-200">
          Skill Unlocked: {title}
        </span>
        <span className="ml-auto text-[10px] font-medium text-violet-500/80 group-open:hidden dark:text-violet-400/80">
          Tap to peek
        </span>
      </summary>
      <div className="space-y-2 border-t border-violet-200/60 px-4 pb-3 pt-2 text-[11px] leading-relaxed text-violet-900/90 dark:border-violet-800/50 dark:text-violet-100/90">
        <p>
          <span className="font-semibold text-violet-700 dark:text-violet-300">
            Why it works:{" "}
          </span>
          {why}
        </p>
        <p>
          <span className="font-semibold text-violet-700 dark:text-violet-300">
            Science:{" "}
          </span>
          {science}
        </p>
        <p>
          <span className="font-semibold text-violet-700 dark:text-violet-300">
            Test it:{" "}
          </span>
          {test}
        </p>
      </div>
    </details>
  );
}
