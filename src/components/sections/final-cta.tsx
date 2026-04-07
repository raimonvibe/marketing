import Link from "next/link";
import { Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JoinAdventureForm } from "@/components/sections/join-adventure-form";
import { SkillUnlocked } from "@/components/sections/skill-unlocked";

export function FinalCta() {
  return (
    <section
      id="adventure"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden border-t border-zinc-200/70 bg-gradient-to-br from-fuchsia-100 via-slate-100 to-violet-100 px-4 py-20 dark:border-zinc-800/70 dark:from-fuchsia-950/35 dark:via-zinc-950 dark:to-violet-950/35 sm:px-6"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-30"
        aria-hidden
      >
        <div className="absolute left-1/4 top-0 size-56 rounded-full bg-violet-300/40 blur-3xl dark:bg-violet-600/20" />
        <div className="absolute bottom-0 right-1/4 size-64 rounded-full bg-fuchsia-300/35 blur-3xl dark:bg-fuchsia-600/15" />
      </div>
      <div className="relative mx-auto max-w-3xl space-y-8 text-center">
        <h2
          id="final-cta-heading"
          className="font-display text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
        >
          Your marketing saga starts now
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          Before you tried waiting for motivation to strike like lightning, you
          win with a newsletter that feels like a party invite — playful
          playbooks in your inbox, no purchase pitch, pure skill XP. Join the
          adventure; name the villain in your funnel and swing the story-shaped
          sword.
        </p>
        <div className="mx-auto max-w-lg text-left">
          <JoinAdventureForm id="final-form" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
            No spam sigils
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Lock className="size-4 text-violet-600 dark:text-violet-400" />
            We guard your email like loot
          </span>
        </div>
        <div className="flex justify-center gap-3">
          <Button variant="secondary" asChild>
            <Link href="#playbook">Grab Free Playbook</Link>
          </Button>
        </div>
        <SkillUnlocked
          title="Commitment Consistency"
          why="A tiny public yes today makes tomorrow’s bigger ask feel natural — adventures love momentum."
          science="The consistency principle — aligned small actions reduce cognitive dissonance ahead of larger steps."
          test="Lead with a one-line pledge in the signup thank-you — measure replies and course opens."
          className="mx-auto max-w-xl text-left"
        />
      </div>
    </section>
  );
}
