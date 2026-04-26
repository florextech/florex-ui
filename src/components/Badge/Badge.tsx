import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border",
  {
    variants: {
      tone: {
        neutral:
          "border-(--border) bg-[rgb(23_28_25/0.7)] text-(--muted)",
        brand:
          "border-[rgb(189_241_70/0.35)] bg-[rgb(189_241_70/0.08)] text-(--brand-700)",
        success:
          "border-[rgb(189_241_70/0.35)] bg-[rgb(189_241_70/0.08)] text-(--brand-600)",
        warning:
          "border-[rgb(245_158_11/0.35)] bg-[rgb(245_158_11/0.08)] text-(--warning)",
        danger:
          "border-[rgb(239_68_68/0.35)] bg-[rgb(239_68_68/0.08)] text-(--danger)",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, tone, ...props }: Readonly<BadgeProps>) {
  return (
    <span className={cn(badgeVariants({ tone }), className)} {...props} />
  );
}

export { Badge, badgeVariants, type BadgeProps };
