import { forwardRef, type LabelHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => (
  <label ref={ref} className={cn("mb-1 inline-block text-sm font-medium text-[var(--foreground)]", className)} {...props} />
));
Label.displayName = "Label";

export { Label, type LabelProps };
