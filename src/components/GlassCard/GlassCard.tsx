import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const glassCardVariants = cva(
  "rounded-2xl border border-[var(--border)] backdrop-blur-[var(--blur-glass,20px)] bg-[var(--surface,rgba(17,21,19,0.6))] transition-all",
  {
    variants: {
      padding: {
        none: "",
        sm: "p-3",
        md: "p-5",
        lg: "p-8",
      },
      glow: {
        true: "hover:border-[var(--border-hover,rgba(189,241,70,0.2))] hover:shadow-[var(--shadow-glow)]",
        false: "",
      },
    },
    defaultVariants: { padding: "md", glow: false },
  },
);

type GlassCardProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof glassCardVariants>;

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, padding, glow, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(glassCardVariants({ padding, glow }), className)}
      {...props}
    />
  ),
);
GlassCard.displayName = "GlassCard";

export { GlassCard, glassCardVariants, type GlassCardProps };
