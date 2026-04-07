import Link from "next/link";
import { Compass } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#top", label: "Home" },
  { href: "#quests", label: "Quests" },
  { href: "#tools", label: "Tools" },
  { href: "#faq", label: "Blog" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-slate-100/75 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-950/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="#top"
          className="flex items-center gap-2 rounded-xl px-2 py-1 font-bold text-zinc-800 transition-colors hover:text-violet-700 dark:text-zinc-100 dark:hover:text-violet-300"
        >
          <span className="flex size-9 items-center justify-center rounded-xl neu-icon text-violet-600 dark:text-violet-400">
            <Compass className="size-5" aria-hidden />
          </span>
          <span className="hidden font-display text-lg tracking-tight sm:inline">
            Marketing Quest
          </span>
        </Link>
        <nav
          aria-label="Main"
          className="hidden items-center gap-1 md:flex md:gap-2"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200/50 hover:text-violet-700 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-violet-300"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="#adventure">Join the Adventure</Link>
          </Button>
        </div>
      </div>
      <nav
        aria-label="Mobile sections"
        className="flex justify-center gap-2 border-t border-zinc-200/50 px-2 py-2 md:hidden dark:border-zinc-800/50"
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="rounded-lg px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
