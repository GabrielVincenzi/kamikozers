import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-3xl font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500",
        one: "bg-orange-300 text-primary-foreground hover:bg-orange-300/90 border-orange-400 border-b-4 active:border-b-0",
        onem: "bg-sky-300 text-primary-foreground hover:bg-sky-300/90 border-sky-400 border-b-4 active:border-b-0",
        two: "bg-orange-400 text-primary-foreground hover:bg-orange-400/90 border-orange-500 border-b-4 active:border-b-0",
        twom: "bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0",
        three: "bg-orange-500 text-primary-foreground hover:bg-orange-500/90 border-orange-600 border-b-4 active:border-b-0",
        threem: "bg-sky-500 text-primary-foreground hover:bg-sky-500/90 border-sky-600 border-b-4 active:border-b-0",
        five: "bg-orange-600 text-primary-foreground hover:bg-orange-600/90 border-orange-700 border-b-4 active:border-b-0",
        fivem: "bg-sky-600 text-primary-foreground hover:bg-sky-600/90 border-sky-700 border-b-4 active:border-b-0",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
