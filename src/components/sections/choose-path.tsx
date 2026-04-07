import Link from "next/link";
import { Crown, Map, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JoinAdventureForm } from "@/components/sections/join-adventure-form";

const paths = [
  {
    name: "Free Starter",
    icon: Map,
    badge: "Explore the realm",
    story:
      "Wander the blog like a choose-your-own-adventure — each article is a campfire tale where boring emails and cold calls lose, and narrative wins. You pay nothing but attention; profit is skills you keep forever.",
    cta: { label: "Start reading quests", href: "#quests" },
  },
  {
    name: "Pro Quest",
    icon: Zap,
    badge: "Email course — the deep playbook",
    story:
      "Seven daily chapters land with one job — replace hesitation with one bold move. Before you hoard tabs you never finish, you win with a guided saga that turns momentum into habit. Zero risk — unsubscribe anytime and the goblins release your inbox.",
    cta: { label: "Grab Free Playbook", href: "#playbook" },
  },
  {
    name: "Elite Roundtable",
    icon: Crown,
    badge: "Waitlist — small cohort",
    story:
      "When the waitlist opens, you join founders who workshop launches like guild raids — feedback sharp, egos soft, MRR stories loud. Before you learned alone at 2 a.m., you win with peers who speak fluent narrative revenue.",
    cta: { label: "Save my seat", href: "#adventure" },
  },
] as const;

export function ChoosePath() {
  return (
    <section
      aria-labelledby="path-heading"
      className="border-t border-zinc-200/70 bg-zinc-100 px-4 py-16 dark:border-zinc-800/70 dark:bg-zinc-900 sm:px-6"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2
            id="path-heading"
            className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            Choose your path
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            No paid tiers here — only forks in your saga. Pick the pace that
            matches your courage today; every route trains the same muscle:
            selling digital products without sounding like a tacky villain.
            Objection handled: zero risk — unsubscribe anytime and we part as
            friends who once shared a good quest.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {paths.map(({ name, icon: Icon, badge, story, cta }) => (
            <article
              key={name}
              className="flex flex-col rounded-[1.75rem] border border-zinc-200/80 bg-slate-100 p-6 shadow-[8px_8px_22px_rgba(15,23,42,0.07),-6px_-6px_18px_rgba(255,255,255,0.9),inset_0_1px_0_rgba(255,255,255,0.75)] dark:border-zinc-700/70 dark:bg-zinc-950/60 dark:shadow-[6px_6px_20px_rgba(0,0,0,0.4)]"
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-2xl neu-icon text-violet-600 dark:text-violet-400">
                <Icon className="size-6" aria-hidden />
              </div>
              <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {name}
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-violet-600 dark:text-violet-400">
                {badge}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {story}
              </p>
              <Button variant="secondary" className="mt-6 w-full" asChild>
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            </article>
          ))}
        </div>
        <div
          id="playbook"
          className="rounded-[1.75rem] border border-violet-200/80 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 sm:p-8 dark:border-violet-800/50 dark:from-violet-950/40 dark:to-fuchsia-950/30"
        >
          <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Grab the free playbook drop
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Before you tried generic PDFs that nap in Downloads, you win with a
            playbook written like a campaign journal — swipe story frames,
            email skeletons, and pricing reframes you can ship this week.
          </p>
          <div className="mt-6 max-w-xl">
            <JoinAdventureForm id="playbook-form" />
          </div>
        </div>
      </div>
    </section>
  );
}
