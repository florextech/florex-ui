import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const cardVariants = cva(
  "rounded-2xl border bg-[rgb(17_21_19/0.78)] backdrop-blur-sm",
  {
    variants: {
      variant: {
        default: "",
        muted: "bg-[rgb(23_28_25/0.7)]",
        hover:
          "transition-all hover:border-[rgb(157_223_75/0.48)] hover:shadow-[var(--shadow-glow)]",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: { variant: "default", padding: "md" },
  },
);

type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

export { Card, cardVariants, type CardProps };
