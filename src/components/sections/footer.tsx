import Link from "next/link";
import { AtSign, Compass, UsersRound, Video } from "lucide-react";

const questLinks = [
  { href: "#top", label: "Home" },
  { href: "#quests", label: "Quests" },
  { href: "#tools", label: "Tools" },
  { href: "#faq", label: "Blog" },
  { href: "#adventure", label: "Newsletter" },
] as const;

const socials = [
  { href: "https://twitter.com", label: "X (Twitter)", icon: AtSign },
  { href: "https://youtube.com", label: "YouTube", icon: Video },
  { href: "https://linkedin.com", label: "LinkedIn", icon: UsersRound },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-zinc-100 px-4 py-12 dark:border-zinc-800/70 dark:bg-zinc-900 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <Link
            href="#top"
            className="inline-flex items-center gap-2 font-display text-lg font-bold text-zinc-900 dark:text-zinc-50"
          >
            <span className="flex size-9 items-center justify-center rounded-xl neu-icon text-violet-600 dark:text-violet-400">
              <Compass className="size-5" aria-hidden />
            </span>
            Marketing Quest
          </Link>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Tiny lesson worth a tattoo in Helvetica: storytelling beats specs —
            always. Teach buyers the plot twist first; let features arrive like
            trusted side characters.
          </p>
        </div>
        <nav aria-label="Footer quests" className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Quest links
          </span>
          {questLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-zinc-700 transition-colors hover:text-violet-700 dark:text-zinc-300 dark:hover:text-violet-300"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Social
          </span>
          <div className="flex gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-xl neu-press text-zinc-600 transition-colors hover:text-violet-700 dark:text-zinc-400 dark:hover:text-violet-300"
                aria-label={label}
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-zinc-200/70 pt-6 text-center text-xs text-zinc-500 dark:border-zinc-800/70 dark:text-zinc-500">
        © {new Date().getFullYear()} Marketing Quest — educational saga, not
        financial advice; your MRR still loves good product discipline.
      </p>
    </footer>
  );
}
