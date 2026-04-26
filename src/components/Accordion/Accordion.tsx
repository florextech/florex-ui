import { type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { ChevronDown } from "../../utils/icons";

function Accordion({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  return <div className={cn("divide-y divide-(--border)", className)}>{children}</div>;
}

function AccordionItem({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  return <details className={cn("group", className)}>{children}</details>;
}

function AccordionTrigger({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <summary
      className={cn(
        "flex cursor-pointer items-center justify-between py-3 text-sm font-medium text-(--foreground) hover:text-(--brand-700) [&::-webkit-details-marker]:hidden",
        className,
      )}
    >
      {children}
      <span className="transition-transform group-open:rotate-180"><ChevronDown size={14} /></span>
    </summary>
  );
}

function AccordionContent({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  return <div className={cn("pb-3 text-sm text-(--muted)", className)}>{children}</div>;
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
