import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-10 w-full rounded-xl border bg-(--surface) px-4 text-sm text-(--foreground) placeholder:text-(--muted) focus:border-(--brand-600) focus:outline-none focus:ring-1 focus:ring-(--brand-600) disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input, type InputProps };
