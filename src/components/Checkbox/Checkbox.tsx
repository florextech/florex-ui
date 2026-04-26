import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => (
    <label htmlFor={id} className={cn("inline-flex cursor-pointer items-center gap-2", className)}>
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className="size-4 rounded border-(--border) bg-(--surface-muted) text-(--brand-600) accent-[var(--brand-600)] focus:ring-(--brand-600)"
        {...props}
      />
      {label && <span className="text-sm text-(--foreground)">{label}</span>}
    </label>
  ),
);
Checkbox.displayName = "Checkbox";

export { Checkbox, type CheckboxProps };
