import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const calendarInput = type === "date" || type === "time" || type === "datetime-local";
    return (
    <input
      ref={ref}
      className={cn(
        "h-10 w-full rounded-xl border bg-(--surface) px-4 text-sm text-(--foreground) placeholder:text-(--muted) focus:border-(--brand-600) focus:outline-none focus:ring-1 focus:ring-(--brand-600) disabled:cursor-not-allowed disabled:opacity-50",
        calendarInput && "[color-scheme:dark] font-[inherit] tabular-nums [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-80 [&::-webkit-calendar-picker-indicator]:transition-opacity hover:[&::-webkit-calendar-picker-indicator]:opacity-100",
        className,
      )}
      type={type}
      {...props}
    />
    );
  },
);
Input.displayName = "Input";

export { Input, type InputProps };
