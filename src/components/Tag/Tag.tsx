import { type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { CloseIcon } from "../../utils/icons";

const tagVariants = cva("inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium", {
  variants: {
    variant: {
      subtle: "border border-(--border) bg-[rgb(23_28_25/0.7)] text-(--muted)",
      solid: "bg-(--brand-600) text-[#111513]",
    },
  },
  defaultVariants: { variant: "subtle" },
});

type TagProps = VariantProps<typeof tagVariants> & {
  children: ReactNode;
  onClose?: () => void;
  className?: string;
};

function Tag({ children, onClose, variant, className }: TagProps) {
  return (
    <span className={cn(tagVariants({ variant }), className)}>
      {children}
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Remove" className="ml-0.5 hover:opacity-70">
          <CloseIcon size={12} />
        </button>
      )}
    </span>
  );
}

export { Tag, tagVariants, type TagProps };
