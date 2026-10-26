import { Moon, Sun } from "lucide-react";
import type { Theme } from "../../hooks/useTheme";
import { cn } from "../../lib/cn";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
  className?: string;
};

export function ThemeToggle({ theme, onToggle, className }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "group relative grid size-9 place-items-center overflow-hidden rounded-xl border border-line bg-card-strong text-muted transition-[transform,border-color,background-color,color] duration-300 hover:border-line-strong hover:text-ink active:scale-95",
        className,
      )}
    >
      <span className="sr-only">
        {isDark ? "Light mode" : "Dark mode"}
      </span>
      <Sun
        className={cn(
          "absolute size-4 transition-all duration-300 ease-out",
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 text-accent opacity-100",
        )}
        aria-hidden="true"
      />
      <Moon
        className={cn(
          "absolute size-4 transition-all duration-300 ease-out",
          isDark
            ? "rotate-0 scale-100 text-accent opacity-100"
            : "-rotate-90 scale-0 opacity-0",
        )}
        aria-hidden="true"
      />
    </button>
  );
}
