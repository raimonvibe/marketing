"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50/80 shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(15,23,42,0.06),4px_4px_12px_rgba(15,23,42,0.08)] dark:border-zinc-700/60 dark:bg-zinc-900/50 dark:shadow-[inset_2px_2px_6px_rgba(63,63,70,0.35),inset_-2px_-2px_6px_rgba(0,0,0,0.45),3px_3px_10px_rgba(0,0,0,0.35)]",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between gap-3 py-4 pl-5 pr-4 text-left text-sm font-semibold text-zinc-800 transition-all hover:text-violet-700 dark:text-zinc-100 dark:hover:text-violet-300 [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-4 shrink-0 text-violet-500 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="accordion-content overflow-hidden text-sm"
    {...props}
  >
    <div
      className={cn(
        "border-t border-zinc-200/60 px-5 pb-4 pt-3 text-zinc-600 dark:border-zinc-700/60 dark:text-zinc-300",
        className,
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
