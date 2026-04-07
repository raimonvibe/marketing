import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-zinc-900 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-[3px_3px_12px_rgba(124,58,237,0.35),inset_1px_1px_0_rgba(255,255,255,0.25)] hover:brightness-105 active:scale-[0.98] dark:shadow-[3px_3px_14px_rgba(139,92,246,0.25),inset_1px_1px_0_rgba(255,255,255,0.12)]",
        secondary:
          "neu-press text-zinc-800 hover:text-violet-700 dark:text-zinc-100 dark:hover:text-violet-300",
        ghost:
          "rounded-xl text-violet-700 underline-offset-4 hover:underline dark:text-violet-300",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-7 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
