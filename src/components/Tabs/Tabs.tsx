import { createContext, useContext, useState, type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface TabsContextValue {
  value: string;
  onChange: (v: string) => void;
}

const TabsContext = createContext<TabsContextValue>({ value: "", onChange: () => {} });

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  className?: string;
}

function Tabs({ defaultValue, children, className }: Readonly<TabsProps>) {
  const [value, onChange] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, onChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

function TabsList({ children, className }: Readonly<TabsListProps>) {
  return (
    <div role="tablist" className={cn("inline-flex gap-1 rounded-xl border bg-(--surface) p-1", className)}>
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

function TabsTrigger({ value, children, className }: Readonly<TabsTriggerProps>) {
  const ctx = useContext(TabsContext);
  const active = ctx.value === value;
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={() => ctx.onChange(value)}
      className={cn(
        "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
        active
          ? "bg-(--surface-muted) text-(--foreground)"
          : "text-(--muted) hover:text-(--foreground)",
        className,
      )}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

function TabsContent({ value, children, className }: Readonly<TabsContentProps>) {
  const ctx = useContext(TabsContext);
  if (ctx.value !== value) return null;
  return <div role="tabpanel" className={cn("mt-3", className)}>{children}</div>;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
export type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps };
