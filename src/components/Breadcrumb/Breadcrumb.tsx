import { type ReactNode, Children } from "react";
import { cn } from "../../utils/cn";
import { SlashIcon } from "../../utils/icons";

function Breadcrumb({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  const items = Children.toArray(children);
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex items-center gap-1.5">
        {items.map((child, i) => (
          <li key={typeof child === "object" && "key" in child ? child.key : `bc-${i}`} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-(--muted)"><SlashIcon size={12} /></span>}
            {child}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function BreadcrumbItem({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  return <span className={cn("text-(--muted) last:text-(--foreground)", className)}>{children}</span>;
}

function BreadcrumbLink({ href, children, className }: Readonly<{ href: string; children: ReactNode; className?: string }>) {
  return (
    <a href={href} className={cn("inline-flex items-center gap-1 transition-colors hover:text-(--brand-700)", className)}>
      {children}
    </a>
  );
}

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink };
