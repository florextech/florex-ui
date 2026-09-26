import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const glassButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] backdrop-blur-[var(--blur-glass,20px)] font-medium transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--surface,rgba(17,21,19,0.6))] text-[var(--foreground)] hover:border-[var(--border-hover,rgba(189,241,70,0.2))] hover:bg-[var(--surface-elevated,rgba(23,28,25,0.7))]",
        brand:
          "bg-[rgba(189,241,70,0.1)] text-[var(--brand-700)] border-[rgba(189,241,70,0.15)] hover:bg-[rgba(189,241,70,0.18)]",
        ghost:
          "border-transparent bg-transparent text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

type GlassButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof glassButtonVariants>;

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(glassButtonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants, type GlassButtonProps };
