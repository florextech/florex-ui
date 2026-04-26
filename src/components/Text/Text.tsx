import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-(--foreground)",
      muted: "text-(--muted)",
      brand: "text-(--brand-700)",
      danger: "text-(--danger)",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: { variant: "default", size: "base", weight: "normal" },
});

type TextProps = {
    as?: "p" | "span" | "div" | "label";
    className?: string;
    children?: React.ReactNode;
  } & VariantProps<typeof textVariants> &
    Omit<HTMLAttributes<HTMLElement>, "color">;

function Text({ as: Tag = "p", className, variant, size, weight, ...props }: TextProps) {
  return <Tag className={cn(textVariants({ variant, size, weight }), className)} {...props} />;
}

export { Text, textVariants, type TextProps };
