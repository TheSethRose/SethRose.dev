import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "text-3xl font-bold tracking-tight",
      h3: "text-2xl font-bold",
      h4: "text-xl font-semibold",
      p: "leading-7",
      subtle: "dark:text-[var(--color-neutral-300)] text-gray-600",
      muted: "text-sm dark:text-[var(--color-neutral-400)] text-gray-500",
      sectionTitle: "text-3xl font-bold tracking-tight",
      sectionSubtitle: "dark:text-[var(--color-neutral-400)] text-gray-700 mt-2",
      gradient: "bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-accent-700)] bg-clip-text text-transparent",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

export function Typography({
  className,
  variant,
  size,
  weight,
  as: Component = "p",
  children,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(typographyVariants({ variant, size, weight, className }))}
      {...props}
    >
      {children}
    </Component>
  )
}
