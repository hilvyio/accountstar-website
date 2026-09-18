import type { ComponentProps, ReactNode } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-brand-500 bg-brand-500 text-white hover:bg-[#6e4f94]",
        gold: "border border-brand-gold bg-brand-gold text-white hover:bg-[#979034]",
        alternate: "border border-white bg-white text-brand-500 hover:bg-white/90",
        secondary: "border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white",
        "secondary-alt": "border border-white text-white hover:bg-white hover:text-brand-500",
        link: "gap-2 text-scheme-text",
        "link-alt": "gap-2 text-white",
        ghost: "hover:bg-brand-500 hover:text-white",
        none: "",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-5 py-2",
        link: "p-0",
        icon: "size-10",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ComponentProps<"button"> &
  ComponentProps<"a"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    title?: string;
    url?: string;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  iconLeft,
  iconRight,
  children,
  title,
  url,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : url ? "a" : "button";
  const isExternal = Boolean(url && /^https?:/i.test(url));

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      href={url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      {...props}
    >
      {iconLeft}
      <Slottable>{children ?? title}</Slottable>
      {iconRight}
    </Comp>
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
