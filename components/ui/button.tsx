import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg border-2 border-primary/20 hover:bg-primary/90 hover:shadow-xl transform hover:scale-[1.02]",
        destructive:
          "bg-destructive text-white shadow-lg border-2 border-destructive/20 hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:shadow-xl transform hover:scale-[1.02]",
        outline:
          "border-2 border-primary bg-background shadow-lg hover:bg-primary hover:text-primary-foreground dark:bg-input/30 dark:border-primary dark:hover:bg-primary hover:shadow-xl transform hover:scale-[1.02]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-lg border-2 border-secondary/20 hover:bg-secondary/80 hover:shadow-xl transform hover:scale-[1.02]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 border-2 border-transparent hover:border-accent/20",
        link: "text-primary underline-offset-4 hover:underline border-2 border-transparent",
      },
      size: {
        default: "h-11 px-6 py-3 has-[>svg]:px-4",
        sm: "h-9 rounded-md gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-12 rounded-md px-8 py-4 has-[>svg]:px-6 text-base font-semibold",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
