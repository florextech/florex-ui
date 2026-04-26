import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Spinner } from "../Spinner/Spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-600)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(180deg,var(--brand-700),var(--brand-600))] text-[#111513] border border-[rgb(189_241_70/0.65)] hover:brightness-110 active:brightness-95",
        secondary:
          "bg-[rgb(23_28_25/0.7)] text-[var(--foreground)] border border-[var(--border)] hover:border-[rgb(189_241_70/0.35)] hover:bg-[rgb(23_28_25/0.9)]",
        ghost:
          "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[rgb(255_255_255/0.05)]",
        danger:
          "bg-[var(--danger)] text-white border border-[rgb(239_68_68/0.5)] hover:brightness-110",
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-lg",
        md: "h-10 px-5 text-sm rounded-xl",
        lg: "h-12 px-7 text-base rounded-xl",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, disabled, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner className="size-4" />}
      {children}
    </button>
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
