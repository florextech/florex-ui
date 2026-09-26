import { type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type AnimatedGradientBackgroundProps = HTMLAttributes<HTMLDivElement> & {
  /** Custom orb colors — defaults to florex glass accents */
  orbs?: { color: string; position: string; size: string }[];
};

const defaultOrbs = [
  { color: "var(--accent-mint, rgba(52,211,153,0.1))", position: "-left-32 -top-32", size: "size-96" },
  { color: "var(--accent-lavender, rgba(167,139,250,0.12))", position: "-bottom-40 -right-40", size: "size-[28rem]" },
  { color: "var(--accent-rose, rgba(244,114,182,0.15))", position: "left-1/2 top-1/3 -translate-x-1/2", size: "size-72" },
];

function AnimatedGradientBackground({ className, orbs = defaultOrbs, ...props }: AnimatedGradientBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}
      aria-hidden
      {...props}
    >
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={cn("absolute rounded-full blur-[120px] opacity-60", orb.position, orb.size)}
          style={{ backgroundColor: orb.color }}
        />
      ))}
    </div>
  );
}

export { AnimatedGradientBackground, type AnimatedGradientBackgroundProps };
