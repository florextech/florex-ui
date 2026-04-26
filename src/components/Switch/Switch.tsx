import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, ...props }, ref) => (
    <label htmlFor={id} className={cn("inline-flex cursor-pointer items-center gap-2", className)}>
      <span className="relative inline-flex h-6 w-10">
        <input ref={ref} id={id} type="checkbox" className="peer sr-only" {...props} />
        <span className="absolute inset-0 rounded-full border border-(--border) bg-(--surface-muted) transition-colors peer-checked:border-[rgb(189_241_70/0.5)] peer-checked:bg-[rgb(189_241_70/0.25)] peer-focus-visible:ring-2 peer-focus-visible:ring-(--brand-600) peer-disabled:cursor-not-allowed peer-disabled:opacity-50" />
        <span className="absolute left-0.5 top-0.5 size-5 rounded-full bg-(--muted) transition-transform peer-checked:translate-x-4 peer-checked:bg-(--brand-600)" />
      </span>
      {label && <span className="text-sm text-(--foreground)">{label}</span>}
    </label>
  ),
);
Switch.displayName = "Switch";

export { Switch, type SwitchProps };
