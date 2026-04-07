import Image from "next/image";
import {
  BookOpen,
  Gem,
  Megaphone,
  MousePointerClick,
  Target,
  Wand2,
} from "lucide-react";
import { SkillUnlocked } from "@/components/sections/skill-unlocked";
import { cn } from "@/lib/utils";

const quests = [
  {
    step: "Quest 1",
    title: "Defeat the Feature Trap",
    icon: Target,
    hook: "Before you tried stacking bullet points like armor, you win with one enemy — the old way — and one weapon: the upgrade path only you can grant.",
    win: "Teams report nearly double signups when the hero is the buyer’s old workflow, not your roadmap.",
    image: "/quest-1.svg",
  },
  {
    step: "Quest 2",
    title: "Storytelling Copy That Converts",
    icon: BookOpen,
    hook: "Before you wrote safe sentences that yawn, you win with a three-beat micro-story — stumble, twist, triumph — on every fold.",
    win: "Quick win metric: many founders see roughly double signups after swapping jargon for a single vivid scene.",
    image: "/quest-2.svg",
  },
  {
    step: "Quest 3",
    title: "Demo as Daring Heist",
    icon: MousePointerClick,
    hook: "Before you toured every tab like a museum docent, you win with a heist plan — enter the messy file, steal back an hour, escape before skepticism wakes.",
    win: "Shorter demos with a storyline often close larger annual contracts than feature marathons.",
    image: "/quest-3.svg",
  },
  {
    step: "Quest 4",
    title: "Newsletter as Sidekick",
    icon: Megaphone,
    hook: "Before you blasted broadcasts that felt like homework, you win with a sidekick voice — weekly letters that feel like a wise friend spilling the cheat code.",
    win: "Open rates climb when each issue opens mid-action, not with greetings from a corporation.",
    image: "/quest-4.svg",
  },
  {
    step: "Quest 5",
    title: "The Offer Crystal",
    icon: Gem,
    hook: "Before you hid your best template behind mystery, you win with a crystal-clear free gift that proves taste before money changes hands.",
    win: "Lead quality spikes when the magnet teases transformation, not a PDF graveyard.",
    image: "/quest-5.svg",
  },
  {
    step: "Quest 6",
    title: "Retention Runes",
    icon: Wand2,
    hook: "Before you celebrated signup and vanished, you win with onboarding runes — tiny story beats in product that remind users why they started the quest.",
    win: "Small narrative nudges in week one frequently lift activation without adding engineering sprints.",
    image: "/quest-6.svg",
  },
] as const;

export function Quests() {
  return (
    <section
      id="quests"
      aria-labelledby="quests-heading"
      className="border-t border-zinc-200/70 bg-zinc-100 px-4 py-16 dark:border-zinc-800/70 dark:bg-zinc-900 sm:px-6"
    >
      <div className="mx-auto max-w-6xl space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2
            id="quests-heading"
            className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            Your superpower quests
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Each chapter is a skill tree branch — finish one, the map reveals
            the next. You are the struggling indie founder hero; these are the
            trials that turn curiosity into cashflow without selling your soul
            to Growth Hacks™.
          </p>
        </div>
        <div className="space-y-16">
          {quests.map((q, i) => {
            const Icon = q.icon;
            const reverse = i % 2 === 1;
            return (
              <article
                key={q.step}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div className={cn("space-y-4", reverse && "lg:order-2")}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-violet-800 dark:bg-violet-950/80 dark:text-violet-200">
                    <Icon className="size-3.5" aria-hidden />
                    {q.step}: {q.title}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {q.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300">{q.hook}</p>
                  <p className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50/90 px-4 py-3 text-sm font-medium text-emerald-900 dark:border-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-100">
                    {q.win}
                  </p>
                </div>
                <div
                  className={cn(
                    "neu-float overflow-hidden rounded-[1.75rem] p-4",
                    reverse && "lg:order-1",
                  )}
                >
                  <Image
                    src={q.image}
                    alt=""
                    width={520}
                    height={360}
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </article>
            );
          })}
        </div>
        <SkillUnlocked
          title="Progressive Disclosure"
          why="Humans finish quests when each step feels achievable — not when you dump the whole grimoire upfront."
          science="Goal-gradient effect — partial completion increases motivation to continue sequences."
          test="Split a long guide into three emails with cliffhangers — measure click-through to the next chapter."
          className="max-w-2xl"
        />
      </div>
    </section>
  );
}
