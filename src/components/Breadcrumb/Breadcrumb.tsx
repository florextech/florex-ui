import { type ReactNode, Children } from "react";
import { cn } from "../../utils/cn";
import { SlashIcon } from "../../utils/icons";

function Breadcrumb({ children, className }: { children: ReactNode; className?: string }) {
  const items = Children.toArray(children);
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex items-center gap-1.5">
        {items.map((child, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-[var(--muted)]"><SlashIcon size={12} /></span>}
            {child}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function BreadcrumbItem({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("text-[var(--muted)] last:text-[var(--foreground)]", className)}>{children}</span>;
}

function BreadcrumbLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={cn("inline-flex items-center gap-1 hover:text-[var(--brand-700)] transition-colors", className)}>
      {children}
    </a>
  );
}

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink };
