import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "h-10 w-full appearance-none rounded-xl border bg-[var(--surface)] px-3 pr-10 text-sm text-[var(--foreground)] outline-none transition hover:border-[rgb(189_241_70/0.28)] focus:border-[var(--brand-600)] focus:ring-1 focus:ring-[var(--brand-600)] disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
Select.displayName = "Select";

export { Select, type SelectProps };
