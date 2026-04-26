import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title?: string;
  description?: string;
  glow?: boolean;
  children: ReactNode;
}

function Section({ eyebrow, title, description, glow, className, children, ...props }: SectionProps) {
  return (
    <section className={cn("relative py-16 sm:py-20", className)} {...props}>
      {glow && (
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 opacity-40"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgb(189 241 70 / 0.18), transparent)",
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-700)]">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>}
            {description && <p className="mt-4 text-[var(--muted)]">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export { Section, type SectionProps };
