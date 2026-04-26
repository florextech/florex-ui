import { useState, useRef, useEffect, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { ChevronDown } from "../../utils/icons";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

function Select({ options, value, onChange, placeholder = "Select…", disabled, className }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-xl border bg-(--surface) px-3 text-sm transition",
          "hover:border-[rgb(189_241_70/0.28)] focus:border-(--brand-600) focus:outline-none focus:ring-1 focus:ring-(--brand-600)",
          "disabled:cursor-not-allowed disabled:opacity-50",
          selected ? "text-(--foreground)" : "text-(--muted)",
        )}
      >
        <span className="truncate">{selected ? selected.label : placeholder}</span>
        <span className={cn("transition-transform", open && "rotate-180")}><ChevronDown size={14} /></span>
      </button>

      {open && (
        <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl border bg-(--surface) py-1 shadow-lg">
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                onClick={() => { onChange?.(opt.value); setOpen(false); }}
                className={cn(
                  "flex w-full px-3 py-2 text-left text-sm transition-colors",
                  opt.value === value
                    ? "bg-[rgb(189_241_70/0.1)] text-(--brand-700)"
                    : "text-(--foreground) hover:bg-[rgb(255_255_255/0.05)]",
                )}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { Select, type SelectProps, type SelectOption };
