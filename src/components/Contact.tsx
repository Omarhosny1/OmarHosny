import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Loader2, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import { EmailIcon, GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { Reveal } from "./ui/Reveal";
import { Magnetic } from "./ui/Magnetic";
import { SectionHeading } from "./ui/SectionHeading";

type Status = "idle" | "sending" | "sent";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: EmailIcon,
  },
  {
    label: "LinkedIn",
    value: "in/omar-hosny",
    href: profile.socials.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "@omar-hosny",
    href: profile.socials.github,
    icon: GithubIcon,
  },
];

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status !== "idle") return;

    setStatus("sending");
    timer.current = window.setTimeout(() => {
      setStatus("sent");
      timer.current = window.setTimeout(() => setStatus("idle"), 3200);
    }, 1100);
  }

  const disabled = status !== "idle";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-3xl border border-line bg-surface/55 p-5 backdrop-blur-xl sm:p-7"
      aria-label="Contact form"
    >
      <div className="relative flex items-center justify-between">
        <div>
          <h3 className="font-display text-[1.05rem] font-semibold text-ink">
            Send a message
          </h3>
          <p className="mt-0.5 text-[0.78rem] text-muted">
            I usually reply within a day.
          </p>
        </div>
        <span className="hidden items-center gap-1.5 rounded-full border border-line bg-card-strong px-2.5 py-1 font-mono text-[0.55rem] tracking-[0.12em] text-faint uppercase sm:flex">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          Online
        </span>
      </div>

      <div className="relative mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className="peer w-full rounded-xl border border-line bg-card-strong px-3.5 py-2.5 text-[0.85rem] text-ink transition placeholder:text-faint/70 focus:border-accent/50 focus:bg-card-strong focus:outline-none"
            />
          </Field>
          <Field label="Email" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="peer w-full rounded-xl border border-line bg-card-strong px-3.5 py-2.5 text-[0.85rem] text-ink transition placeholder:text-faint/70 focus:border-accent/50 focus:bg-card-strong focus:outline-none"
            />
          </Field>
        </div>

        <Field label="Subject" htmlFor="subject">
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Project, role, or idea"
            className="peer w-full rounded-xl border border-line bg-card-strong px-3.5 py-2.5 text-[0.85rem] text-ink transition placeholder:text-faint/70 focus:border-accent/50 focus:bg-card-strong focus:outline-none"
          />
        </Field>

        <Field label="Message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell me a little about what you're building…"
            className="peer w-full resize-none rounded-xl border border-line bg-card-strong px-3.5 py-2.5 text-[0.85rem] text-ink transition placeholder:text-faint/70 focus:border-accent/50 focus:bg-card-strong focus:outline-none"
          />
        </Field>

        <Magnetic strength={0.12} className="w-full">
          <button
            type="submit"
            disabled={disabled}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-[0.86rem] font-semibold text-[#0a0a0a] shadow-[0_16px_40px_-16px_rgba(34,197,94,0.9)] transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-80"
          >
            {status === "idle" ? (
              <>
                Send message
                <Send
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </>
            ) : null}
            {status === "sending" ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : null}
            {status === "sent" ? (
              <>
                <Check className="size-4" aria-hidden="true" />
                Message sent
              </>
            ) : null}
          </button>
        </Magnetic>

        <p
          aria-live="polite"
          className="min-h-[1rem] text-center font-mono text-[0.62rem] text-faint"
        >
          {status === "sent"
            ? "Thanks! This is a demo form — connect it to your inbox or a service."
            : ""}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="font-mono text-[0.6rem] tracking-[0.16em] text-faint uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function EmailButton() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-2 rounded-xl border border-line bg-card-strong px-4 py-2.5 text-[0.8rem] font-medium text-muted transition hover:border-line-strong hover:text-ink"
      aria-label={`Copy email address ${profile.email}`}
    >
      {copied ? (
        <Check className="size-4 text-accent-soft" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative px-5 py-24 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/50 px-5 py-12 sm:px-10 sm:py-16">
          <div className="grid-lines absolute inset-0 opacity-[0.35] mask-fade-b" />

          <div className="relative mx-auto max-w-2xl">
            <SectionHeading
              align="center"
              index="06"
              kicker="Contact"
              title={
                <>
                  Let&apos;s build something{" "}
                  <span className="text-accent-gradient">great</span> together.
                </>
              }
              description="Have a project, a role, or an idea worth building? My inbox is always open."
            />

            <Reveal delay={0.16} className="mt-7 flex justify-center">
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <Magnetic>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-[0.84rem] font-semibold text-[#0a0a0a] shadow-[0_16px_40px_-16px_rgba(34,197,94,0.9)] transition hover:bg-accent-soft"
                  >
                    <EmailIcon className="size-4" aria-hidden="true" />
                    {profile.email}
                  </a>
                </Magnetic>
                <EmailButton />
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-3">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <li key={channel.label}>
                      <a
                        href={channel.href}
                        target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noreferrer noopener"
                        className="group flex items-center gap-3 rounded-xl border border-line bg-card p-3 transition hover:-translate-y-0.5 hover:border-line-strong hover:bg-card-strong"
                      >
                        <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-card-strong text-muted transition group-hover:text-accent-soft">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-mono text-[0.55rem] tracking-[0.14em] text-faint uppercase">
                            {channel.label}
                          </span>
                          <span className="block truncate text-[0.78rem] font-medium text-ink">
                            {channel.value}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="ml-auto size-3.5 shrink-0 text-faint transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          <m.div
            initial={reduce ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-10 max-w-2xl"
          >
            <ContactForm />
          </m.div>
        </div>
      </div>
    </section>
  );
}
