import { AlertCircle, Clock, DollarSign } from "lucide-react";
import { SkillUnlocked } from "@/components/sections/skill-unlocked";

const villains = [
  {
    title: "The Launch Nightmare",
    icon: AlertCircle,
    tale: "Your SaaS launch flops because you whisper specs into a void where buyers only hear noise. You ship on Product Hunt, pray for upvotes, then watch the spike vanish like a campfire in rain — wasted months crafting APIs while nobody felt the plot twist your product delivers.",
    agitate:
      "Ramens grow cold, your dog judges you from the couch, and every refresh on analytics feels like a tiny punch.",
    flip: "Before you tried the big-bang launch with no story spine, you win with a soft-opening saga that makes one niche say finally someone gets my week.",
  },
  {
    title: "The Content Black Hole",
    icon: Clock,
    tale: "The content black hole steals your Sundays — you draft posts that sound like Wikipedia had a baby with a press release. Hours dissolve, drafts pile up, and your calendar pretends it never saw you.",
    agitate:
      "You chase trends, burn goodwill, and your best ideas rot in half-finished drafts while competitors feel inevitable.",
    flip: "Before you treated content like homework, you win with one hero transformation you repeat like the chorus of a song people cannot stop humming.",
  },
  {
    title: "The Pricing Puzzle",
    icon: DollarSign,
    tale: "The pricing puzzle locks you in spreadsheet fog — you undercharge and resent every customer, or you overreach and hear crickets where you hoped for ka-ching.",
    agitate:
      "Every dollar feels personal; every competitor price is a phantom judging your life choices.",
    flip: "Before you copied somebody else’s tier chart, you win with value stories that make your price feel like the obvious rescue fee.",
  },
] as const;

export function ProblemVillains() {
  return (
    <section
      aria-labelledby="villains-heading"
      className="border-t border-zinc-200/70 bg-slate-100 px-4 py-16 dark:border-zinc-800/70 dark:bg-zinc-950 sm:px-6"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2
            id="villains-heading"
            className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            Meet the villains who hijacked your marketing quest
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Old marketing ways wear disguises — boring emails that nap in
            inboxes, cold calls that trigger fight-or-flight, feature walls
            that numb the soul. Your tutorials are the magic map. Problem named,
            pain sharpened, now watch the exit glow.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {villains.map(({ title, icon: Icon, tale, agitate, flip }) => (
            <article
              key={title}
              className="flex flex-col rounded-[1.75rem] border border-zinc-200/80 bg-zinc-100/90 p-6 shadow-[8px_8px_20px_rgba(15,23,42,0.08),-6px_-6px_16px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.85)] dark:border-zinc-700/70 dark:bg-zinc-900/70 dark:shadow-[6px_6px_18px_rgba(0,0,0,0.45),-4px_-4px_12px_rgba(63,63,70,0.25),inset_1px_1px_2px_rgba(82,82,91,0.15)]"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-2xl neu-icon text-rose-600 dark:text-rose-400">
                <Icon className="size-6" aria-hidden />
              </div>
              <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {tale}
              </p>
              <p className="mt-3 text-sm font-medium text-rose-700 dark:text-rose-300">
                {agitate}
              </p>
              <p className="mt-4 rounded-xl bg-violet-50/80 px-3 py-2 text-sm text-violet-900 dark:bg-violet-950/50 dark:text-violet-100">
                {flip}
              </p>
            </article>
          ))}
        </div>
        <SkillUnlocked
          title="Pain-First Empathy"
          why="When you mirror pain before pitch, trust unlocks faster than any credential ever could."
          science="Affect labeling and the empathy gap — naming struggle reduces defensive arousal so solutions land."
          test="Rewrite one landing section: lead with the awkward moment your buyer screenshots to a friend — watch time on page."
          className="max-w-2xl"
        />
      </div>
    </section>
  );
}
