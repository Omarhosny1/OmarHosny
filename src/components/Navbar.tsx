import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";
import { cn } from "../lib/cn";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { ThemeToggle } from "./ui/ThemeToggle";

const sectionIds = ["home", ...navLinks.map((link) => link.id)] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function handleNavigate(id: string) {
    setOpen(false);
    scrollToId(id);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 transition-[background-color,border-color,padding,box-shadow,backdrop-filter] duration-500 sm:px-4",
          scrolled
            ? "border-line bg-bg/72 py-2 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-transparent bg-transparent py-2.5",
        )}
      >
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            handleNavigate("home");
          }}
          className="group flex items-center gap-2.5 rounded-xl pr-2 text-left"
          aria-label="Omar Mohamed Hosny — back to top"
        >
          <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl border border-line bg-accent font-display text-sm font-semibold text-[#0a0a0a] shadow-[0_8px_24px_-10px_rgba(34,197,94,0.9)]">
            OH
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-[0.82rem] font-semibold tracking-tight text-ink">
              Omar Hosny
            </span>
            <span className="font-mono text-[0.6rem] tracking-[0.16em] text-faint uppercase">
              Front-End Developer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-line-soft bg-card p-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigate(link.id);
                }}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-[0.82rem] font-medium transition-[color,background-color,border-color] duration-300",
                  isActive
                    ? "border-line bg-card-strong text-ink"
                    : "border-transparent text-muted hover:text-ink",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="hidden size-9 place-items-center rounded-xl border border-line bg-card-strong text-muted transition hover:-translate-y-0.5 hover:border-line-strong hover:text-ink sm:grid"
          >
            <GithubIcon className="size-6" aria-hidden="true" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="hidden size-9 place-items-center rounded-xl border border-line bg-card-strong text-muted transition hover:-translate-y-0.5 hover:border-line-strong hover:text-ink sm:grid"
          >
            <LinkedinIcon className="size-6" aria-hidden="true" />
          </a>

          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              handleNavigate("contact");
            }}
            className="group hidden items-center gap-1.5 rounded-xl border border-line bg-card-strong px-3.5 py-2 text-[0.8rem] font-medium text-ink transition hover:border-accent/40 hover:bg-accent/10 md:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight
              className="size-3.5 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              aria-hidden="true"
            />
          </a>

          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="relative grid size-9 place-items-center rounded-xl border border-line bg-card-strong text-ink md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative flex h-3 w-4 flex-col justify-between">
              <m.span
                animate={open ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[1.5px] w-full origin-center rounded-full bg-current"
              />
              <m.span
                animate={
                  open ? { opacity: 0, scaleX: 0.4 } : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] w-full rounded-full bg-current"
              />
              <m.span
                animate={open ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[1.5px] w-full origin-center rounded-full bg-current"
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-line bg-bg/92 p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <m.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + index * 0.045, duration: 0.3 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigate(link.id);
                    }}
                    aria-current={active === link.id ? "location" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium transition-colors",
                      active === link.id
                        ? "bg-card-strong text-ink"
                        : "text-muted hover:bg-card-strong hover:text-ink",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[0.65rem] text-faint">
                        0{index + 1}
                      </span>
                      {link.label}
                    </span>
                    <ArrowUpRight
                      className="size-4 opacity-40"
                      aria-hidden="true"
                    />
                  </a>
                </m.li>
              ))}
            </ul>

            <div className="mt-2 flex items-center gap-2 border-t border-line-soft pt-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-card-strong py-2.5 text-xs font-medium text-muted transition hover:text-ink"
              >
                <GithubIcon className="size-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-card-strong py-2.5 text-xs font-medium text-muted transition hover:text-ink"
              >
                <LinkedinIcon className="size-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
