import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { EmailIcon, GithubIcon, LinkedinIcon } from "./ui/BrandIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl border border-line bg-accent font-display text-sm font-semibold text-[#0a0a0a]">
                OH
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[0.85rem] font-semibold text-ink">
                  {profile.name}
                </span>
                <span className="font-mono text-[0.58rem] tracking-[0.16em] text-faint uppercase">
                  {profile.role}
                </span>
              </span>
            </a>
            <p className="mt-4 text-[0.8rem] leading-relaxed text-muted">
              Designing and building modern front-ends with React, TypeScript
              and Tailwind CSS.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="font-mono text-[0.58rem] tracking-[0.16em] text-faint uppercase">
              Navigate
            </span>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-[0.8rem] text-muted transition hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[0.58rem] tracking-[0.16em] text-faint uppercase">
              Elsewhere
            </span>
            <div className="flex items-center gap-2">
              {[
                { href: profile.socials.github, icon: GithubIcon, label: "GitHub" },
                {
                  href: profile.socials.linkedin,
                  icon: LinkedinIcon,
                  label: "LinkedIn",
                },
                { href: `mailto:${profile.email}`, icon: EmailIcon, label: "Email" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="grid size-9 place-items-center rounded-xl border border-line bg-card text-muted transition hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line-soft pt-6 sm:flex-row">
          <p className="font-mono text-[0.62rem] tracking-wide text-faint">
            © {year} {profile.name}. Built with React, TypeScript &amp; Tailwind
            CSS.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.14em] text-faint uppercase transition hover:text-ink"
          >
            Back to top
            <span className="grid size-6 place-items-center rounded-md border border-line transition group-hover:-translate-y-0.5 group-hover:border-line-strong">
              <ArrowUp className="size-3" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
