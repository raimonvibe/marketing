import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Why storytelling over features?",
    a: "Features are firewood; story is the spark. Buyers forget spec sheets by lunch — they remember the Tuesday you gave back to them. When you sequence pain, transformation, and proof like a season arc, demos stop feeling like surveillance and start feeling like relief. Before you tried listing every integration, you win with one scene where life after your app is unmissably better.",
  },
  {
    q: "Do I need ads to make this work?",
    a: "Gold burns faster than skill stacks. Ads amplify; they do not invent belief. Nail one narrative spine in organic places first — founder posts, a tight landing page, a tiny email loop — then rent attention when your message already rings true. Before you boostedPosts into the void, you win with stories people save and forward for free.",
  },
  {
    q: "What if my product is super niche?",
    a: "Niche is armor. You are not broadcasting to Earth — you are whispering to the guild that loses sleep over the same spreadsheet demon. Smaller audience, deeper lore, faster trust. Before you watered down your tale for everyone, you win with dialect only insiders speak fluently.",
  },
  {
    q: "How long until I see traction?",
    a: "Some heroes see sparks in two sprints; others need a season of reps. The curve bends when you ship weekly story beats instead of quarterly relaunches. Consistency beats intensity — your quest log rewards showing up, not perfect prose.",
  },
  {
    q: "What if I am no writer?",
    a: "We got you. Marketing Quest treats copy like a build step — templates, beats, and feedback loops that teach taste without torturing grammar. Before you froze at the blank page, you win with prompts that feel like a co-op raid: you bring the product truths, we bring the narrative scaffolding.",
  },
] as const;

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-zinc-200/70 bg-slate-100 px-4 py-16 dark:border-zinc-800/70 dark:bg-zinc-950 sm:px-6"
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-3 text-center sm:text-left">
          <h2
            id="faq-heading"
            className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            FAQ — campfire truths
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Warm answers, zero gatekeeping — like a friend who geeked out on
            SaaS psychology so you can sleep earlier.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {items.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>
                <p>{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
