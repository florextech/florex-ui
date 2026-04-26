import { cn } from "../../utils/cn";

interface HighlightProps {
  text: string;
  query: string;
  className?: string;
}

function Highlight({ text, query, className }: HighlightProps) {
  if (!query) return <span className={className}>{text}</span>;

  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));

  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className={cn("rounded-sm bg-[rgb(189_241_70/0.25)] px-0.5 text-[var(--brand-700)]")}>
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </span>
  );
}

export { Highlight, type HighlightProps };
