import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-600) focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[linear-gradient(180deg,var(--brand-700),var(--brand-600))] text-[#111513] border border-[rgb(189_241_70/0.65)] hover:brightness-110",
        secondary: "bg-[rgb(23_28_25/0.7)] text-(--foreground) border border-(--border) hover:border-[rgb(189_241_70/0.35)]",
        ghost: "text-(--muted) hover:text-(--foreground) hover:bg-[rgb(255_255_255/0.05)]",
      },
      size: {
        sm: "size-8 rounded-lg",
        md: "size-10 rounded-xl",
        lg: "size-12 rounded-xl",
      },
    },
    defaultVariants: { variant: "ghost", size: "md" },
  },
);

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof iconButtonVariants> & {
    icon: ReactNode;
    "aria-label": string;
  };

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, icon, ...props }, ref) => (
    <button ref={ref} className={cn(iconButtonVariants({ variant, size }), className)} {...props}>
      {icon}
    </button>
  ),
);
IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants, type IconButtonProps };
