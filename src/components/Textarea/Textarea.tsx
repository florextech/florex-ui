import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-20 w-full rounded-xl border bg-(--surface) px-4 py-3 text-sm text-(--foreground) placeholder:text-(--muted) focus:border-(--brand-600) focus:outline-none focus:ring-1 focus:ring-(--brand-600) disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea, type TextareaProps };
