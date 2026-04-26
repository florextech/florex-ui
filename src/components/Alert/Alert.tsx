import { type HTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const alertVariants = cva("flex gap-3 rounded-xl border p-4 text-sm", {
  variants: {
    variant: {
      info: "border-[rgb(189_241_70/0.25)] bg-[rgb(189_241_70/0.06)] text-(--brand-700)",
      success: "border-[rgb(189_241_70/0.35)] bg-[rgb(189_241_70/0.08)] text-(--brand-600)",
      warning: "border-[rgb(245_158_11/0.35)] bg-[rgb(245_158_11/0.08)] text-(--warning)",
      danger: "border-[rgb(239_68_68/0.35)] bg-[rgb(239_68_68/0.08)] text-(--danger)",
    },
  },
  defaultVariants: { variant: "info" },
});

type AlertProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants> & {
    icon?: ReactNode;
  };

function Alert({ className, variant, icon, children, ...props }: AlertProps) {
  return (
    <div role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
      {icon && <span className="mt-0.5 shrink-0">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}

export { Alert, alertVariants, type AlertProps };
