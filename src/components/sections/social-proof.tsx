import Image from "next/image";
import { Star } from "lucide-react";
import { SkillUnlocked } from "@/components/sections/skill-unlocked";

const quotes = [
  {
    name: "Avery K.",
    role: "B2B workflow SaaS",
    quote:
      "From zero to five thousand MRR in three months — I stopped pitching features and started naming the Tuesday afternoon my buyer wanted back.",
  },
  {
    name: "Marisol V.",
    role: "Indie devtools",
    quote:
      "My launch used to feel like shouting into a pillow. The quest map turned my changelog into a season arc — trials doubled and refunds chilled out.",
  },
  {
    name: "Jordan T.",
    role: "Analytics micro-SaaS",
    quote:
      "Cold email died. Warm story snippets in the inbox woke dormant users — we crossed ten thousand MRR without hiring a single SDR.",
  },
  {
    name: "Noor R.",
    role: "Creator-education stack",
    quote:
      "Pricing stopped haunting me once the page told the story of revenue leaked through manual ops. Annual plans started feeling obvious, not pushy.",
  },
] as const;

const brands = [
  { name: "Notion", src: "/brand-notion.svg" },
  { name: "Stripe", src: "/brand-stripe.svg" },
  { name: "Linear", src: "/brand-linear.svg" },
  { name: "Figma", src: "/brand-figma.svg" },
  { name: "Vercel", src: "/brand-vercel.svg" },
  { name: "Slack", src: "/brand-slack.svg" },
] as const;

export function SocialProof() {
  return (
    <section
      id="tools"
      aria-labelledby="proof-heading"
      className="border-t border-zinc-200/70 bg-slate-100 px-4 py-16 dark:border-zinc-800/70 dark:bg-zinc-950 sm:px-6"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2
              id="proof-heading"
              className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
            >
              Hero victory logs
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Real-ish tales from the trail — every win started as a messy
              draft and a nervous founder pressing publish. Before you tried to
              impress investors with slides, you win with receipts from
              customers who stayed.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl neu-press px-4 py-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="size-5 fill-amber-400 text-amber-500"
                aria-hidden
              />
            ))}
            <span className="pl-1 text-sm font-bold text-zinc-800 dark:text-zinc-100">
              4.9 / 5
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              founder rating
            </span>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {quotes.map(({ name, role, quote }) => (
            <figure
              key={name}
              className="rounded-[1.5rem] border border-zinc-200/80 bg-zinc-50 p-6 shadow-[6px_6px_16px_rgba(15,23,42,0.06),-4px_-4px_12px_rgba(255,255,255,0.85)] dark:border-zinc-700/70 dark:bg-zinc-900/60 dark:shadow-[5px_5px_14px_rgba(0,0,0,0.35)]"
            >
              <blockquote className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                “{quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold text-violet-700 dark:text-violet-300">
                {name} — <span className="font-normal">{role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="rounded-[1.75rem] border border-dashed border-zinc-300/80 bg-zinc-100/80 px-4 py-8 dark:border-zinc-600/60 dark:bg-zinc-900/40">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Quest kit plays nicely with the stacks you already love
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {brands.map(({ name, src }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <div className="flex h-12 w-24 items-center justify-center rounded-xl neu-icon p-2">
                  <Image
                    src={src}
                    alt=""
                    width={80}
                    height={32}
                    className="h-8 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <SkillUnlocked
          title="Social Proof That Breathes"
          why="When proof feels episodic, not braggy, trust sneaks past skeptic armor."
          science="The identifiable victim effect plus specificity bias: named moments beat faceless metrics."
          test="Swap one testimonial wall for a single before-and-after scene with a timestamp, then track demo requests."
          className="max-w-2xl"
        />
      </div>
    </section>
  );
}
