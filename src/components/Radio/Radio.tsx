import { createContext, useContext, type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface RadioGroupContext {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Ctx = createContext<RadioGroupContext>({ name: "" });

interface RadioGroupProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  children: ReactNode;
  className?: string;
}

function RadioGroup({ name, value, onChange, children, className }: Readonly<RadioGroupProps>) {
  return (
    <div role="radiogroup" className={cn("flex flex-col gap-2", className)}>
      <Ctx.Provider value={{ name, value, onChange }}>{children}</Ctx.Provider>
    </div>
  );
}

interface RadioItemProps {
  value: string;
  label: string;
  className?: string;
}

function RadioItem({ value, label, className }: Readonly<RadioItemProps>) {
  const ctx = useContext(Ctx);
  return (
    <label className={cn("inline-flex cursor-pointer items-center gap-2", className)}>
      <input
        type="radio"
        name={ctx.name}
        value={value}
        checked={ctx.value === value}
        onChange={() => ctx.onChange?.(value)}
        className="size-4 accent-[var(--brand-600)]"
      />
      <span className="text-sm text-(--foreground)">{label}</span>
    </label>
  );
}

export { RadioGroup, RadioItem };
