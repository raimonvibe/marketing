import Image from "next/image";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillUnlocked } from "@/components/sections/skill-unlocked";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-violet-100 via-slate-100 to-fuchsia-100 px-4 py-16 sm:px-6 sm:py-24 dark:from-violet-950/50 dark:via-zinc-950 dark:to-fuchsia-950/40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        aria-hidden
      >
        <div className="absolute -left-20 top-10 size-64 rounded-full bg-violet-300/40 blur-3xl dark:bg-violet-600/20" />
        <div className="absolute -right-16 bottom-0 size-72 rounded-full bg-fuchsia-300/35 blur-3xl dark:bg-fuchsia-600/15" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-700 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),2px_2px_8px_rgba(124,58,237,0.12)] dark:border-violet-700/50 dark:bg-zinc-900/60 dark:text-violet-300 dark:shadow-[inset_1px_1px_4px_rgba(0,0,0,0.4)]">
            <Rocket className="size-3.5" aria-hidden />
            Level up your SaaS sales in seven days — no VC needed
          </p>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] dark:text-zinc-50"
          >
            You built the app.{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-fuchsia-400">
              Now make it sell itself.
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Tired of building cool software nobody buys? Your SaaS launch flops
            because the world never feels the itch you solve — wasted months,
            zero users, ramen nights that taste like regret. Here is your
            escape plan: story-first marketing that turns strangers into fans
            before you ever pitch a feature. Unlock this skill and watch your
            MRR climb like a rocket.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button size="lg" asChild>
              <Link href="#adventure">Join the Adventure</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#playbook">Grab Free Playbook</Link>
            </Button>
          </div>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Helped two thousand five hundred founders hit ten thousand dollars
            MRR — without turning into a cringe bro-marketer.
          </p>
          <SkillUnlocked
            title="The Three-Second Hook"
            why="Brains gatekeep attention — if you do not spark emotion instantly, the tab closes and the quest ends."
            science="The serial-position effect plus emotional salience: first moments anchor every other belief about your product."
            test="A/B your hero line: feature dump versus one painful moment your buyer lived yesterday — measure scroll depth and signup."
            className="max-w-lg"
          />
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="neu-float relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] p-3 sm:mx-0 lg:ml-auto">
            <Image
              src="/hero-quest.svg"
              alt=""
              width={440}
              height={550}
              priority
              className="h-full w-full object-cover opacity-95 dark:opacity-90"
            />
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 rounded-2xl neu-press px-4 py-3 text-center sm:text-left">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
              <Rocket className="size-6 text-white" aria-hidden />
            </span>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Before you chased vanity metrics, you wandered in the fog. Now you
              win with one narrative spine that pulls every page, email, and
              demo toward the same promised land.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
