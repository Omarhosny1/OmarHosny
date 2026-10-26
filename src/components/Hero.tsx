import { m, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio";
import { easeOut, staggerContainer, staggerItem } from "../lib/motion";
import { Magnetic } from "./ui/Magnetic";
import {
  GithubIcon,
  LinkedinIcon,
  ReactIcon,
  TailwindIcon,
} from "./ui/BrandIcons";

const titleWords = ["Front-End", "Developer"];

function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <m.div
      initial={reduce ? false : { opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.45, ease: easeOut }}
      className="relative mx-auto w-full max-w-[30rem] lg:max-w-none"
    >
      <m.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="glass-dark dark-island relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)]">
          <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
            <span
              className="size-2.5 rounded-full bg-[#ff5f57]"
              aria-hidden="true"
            />
            <span
              className="size-2.5 rounded-full bg-[#febc2e]"
              aria-hidden="true"
            />
            <span
              className="size-2.5 rounded-full bg-[#28c840]"
              aria-hidden="true"
            />
            <span className="ml-2 font-mono text-[0.68rem] tracking-wide text-faint">
              developer.ts
            </span>
            <span className="ml-auto flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 font-mono text-[0.58rem] tracking-wide text-emerald-300 uppercase">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              live
            </span>
          </div>

          <pre className="overflow-x-auto px-4 py-5 font-mono text-[0.7rem] leading-[1.85] sm:text-[0.76rem]">
            <code>
              <span className="text-[#6272a4]">01 </span>
              <span className="text-[#ff79c6]">const</span>{" "}
              <span className="text-[#8be9fd]">developer</span>{" "}
              <span className="text-[#ff79c6]">=</span>{" "}
              <span className="text-[#f8f8f2]">{"{"}</span>
              {"\n"}
              <span className="text-[#6272a4]">02 </span>
              {"  "}
              <span className="text-[#50fa7b]">name</span>
              <span className="text-[#f8f8f2]">:</span>{" "}
              <span className="text-[#f1fa8c]">&apos;Omar Hosny&apos;</span>
              <span className="text-[#f8f8f2]">,</span>
              {"\n"}
              <span className="text-[#6272a4]">03 </span>
              {"  "}
              <span className="text-[#50fa7b]">role</span>
              <span className="text-[#f8f8f2]">:</span>{" "}
              <span className="text-[#f1fa8c]">&apos;Front-End&apos;</span>
              <span className="text-[#f8f8f2]">,</span>
              {"\n"}
              <span className="text-[#6272a4]">04 </span>
              {"  "}
              <span className="text-[#50fa7b]">stack</span>
              <span className="text-[#f8f8f2]">: [</span>
              <span className="text-[#f1fa8c]">&apos;React&apos;</span>
              <span className="text-[#f8f8f2]">,</span>{" "}
              <span className="text-[#f1fa8c]">&apos;TS&apos;</span>
              <span className="text-[#f8f8f2]">,</span>{" "}
              <span className="text-[#f1fa8c]">&apos;Tailwind&apos;</span>
              <span className="text-[#f8f8f2]">],</span>
              {"\n"}
              <span className="text-[#6272a4]">05 </span>
              {"  "}
              <span className="text-[#50fa7b]">focus</span>
              <span className="text-[#f8f8f2]">: [</span>
              <span className="text-[#f1fa8c]">&apos;performance&apos;</span>
              <span className="text-[#f8f8f2]">,</span>{" "}
              <span className="text-[#f1fa8c]">&apos;a11y&apos;</span>
              <span className="text-[#f8f8f2]">],</span>
              {"\n"}
              <span className="text-[#6272a4]">06 </span>
              {"  "}
              <span className="text-[#50fa7b]">available</span>
              <span className="text-[#f8f8f2]">:</span>{" "}
              <span className="text-[#bd93f9]">true</span>
              <span className="text-[#f8f8f2]">,</span>
              {"\n"}
              <span className="text-[#6272a4]">07 </span>
              <span className="text-[#f8f8f2]">{"};"}</span>
              {"\n"}
              <span className="text-[#6272a4]">08</span>
              {"\n"}
              <span className="text-[#6272a4]">09 </span>
              <span className="text-[#6272a4]">
                {"// building for the modern web"}
              </span>
              <span className="ml-1 inline-block h-3.5 w-[2px] translate-y-[2px] animate-blink bg-accent-soft align-middle" />
            </code>
          </pre>
        </div>

        <m.div
          animate={reduce ? undefined : { y: [0, -12, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
          className="glass absolute -top-6 -left-3 hidden items-center gap-2 rounded-xl border border-line px-3 py-2 shadow-lg sm:flex lg:-left-8"
        >
          <span className="grid size-7 place-items-center rounded-lg bg-[#61dafb]/15 text-[#61dafb]">
            <ReactIcon className="size-4" aria-hidden="true" />
          </span>
          <span className="text-xs font-medium text-ink">React</span>
        </m.div>

        <m.div
          animate={reduce ? undefined : { y: [0, 12, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="glass absolute -top-5 -right-3 hidden items-center gap-2 rounded-xl border border-line px-3 py-2 shadow-lg sm:flex lg:-right-7"
        >
          <span className="grid size-7 place-items-center rounded-lg bg-[#3178c6]/20 font-mono text-[0.6rem] font-bold text-[#7cb6ef]">
            TS
          </span>
          <span className="text-xs font-medium text-ink">TypeScript</span>
        </m.div>

        <m.div
          animate={reduce ? undefined : { y: [0, -9, 0] }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.4,
          }}
          className="glass absolute -right-2 -bottom-6 hidden items-center gap-2 rounded-xl border border-line px-3 py-2 shadow-lg sm:flex lg:-right-5"
        >
          <span className="grid size-7 place-items-center rounded-lg bg-[#38bdf8]/15 text-[#38bdf8]">
            <TailwindIcon />
          </span>
          <span className="text-xs font-medium text-ink">Tailwind CSS</span>
        </m.div>

        <m.div
          animate={reduce ? undefined : { y: [0, 10, 0] }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="glass absolute -bottom-7 -left-3 hidden items-center gap-2.5 rounded-xl border border-line px-3 py-2.5 shadow-lg sm:flex lg:-left-8"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-ink">Open to work</span>
        </m.div>
      </m.div>
    </m.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-20 sm:px-8 lg:pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <m.div
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="max-w-xl"
        >
          <m.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card-strong py-1.5 pr-3.5 pl-2 text-[0.72rem] font-medium text-muted backdrop-blur">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-1.5 animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
              </span>
              Available for freelance &amp; full-time
            </span>
          </m.div>

          <m.p
            variants={staggerItem}
            className="mt-7 font-mono text-[0.72rem] tracking-[0.28em] text-accent-soft uppercase"
          >
            Hello, I&apos;m
          </m.p>

          <m.h1
            variants={staggerItem}
            className="mt-3 font-display text-[clamp(2.7rem,8.2vw,4.9rem)] leading-[0.98] font-semibold tracking-[-0.035em]"
          >
            Omar
            <span className="text-gradient"> Hosny.</span>
          </m.h1>

          <m.div
            variants={staggerItem}
            className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-display text-lg font-medium text-ink sm:text-xl"
            aria-label={profile.role}
          >
            {titleWords.map((word, index) => (
              <m.span
                key={word}
                initial={
                  reduce ? false : { opacity: 0, y: 12, filter: "blur(6px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.9 + index * 0.14,
                  ease: easeOut,
                }}
                className={index === 1 ? "text-accent-gradient" : "text-ink"}
              >
                {word}
              </m.span>
            ))}
            <m.span
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.35 }}
              className="ml-1 inline-block h-4 w-[2px] animate-blink rounded-full bg-accent-soft align-middle sm:h-5"
              aria-hidden="true"
            />
          </m.div>

          <m.p
            variants={staggerItem}
            className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-muted"
          >
            Building modern, responsive, and high-performance web experiences
            with React and Next.js.
          </m.p>

          <m.div
            variants={staggerItem}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-[#0a0a0a] shadow-[0_16px_40px_-16px_rgba(34,197,94,0.9)] transition hover:bg-accent-soft hover:shadow-[0_20px_50px_-14px_rgba(74,222,128,0.95)]"
              >
                View My Work
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-5 py-3 text-sm font-semibold text-ink transition hover:border-line-strong hover:bg-card-strong"
              >
                <Sparkles
                  className="size-4 text-accent-soft"
                  aria-hidden="true"
                />
                Contact Me
              </a>
            </Magnetic>
          </m.div>

          <m.div
            variants={staggerItem}
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-xl border border-line bg-card px-3.5 py-2 text-[0.78rem] font-medium text-muted transition hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
            >
              <GithubIcon
                className="size-4 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-xl border border-line bg-card px-3.5 py-2 text-[0.78rem] font-medium text-muted transition hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
            >
              <LinkedinIcon
                className="size-4 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              LinkedIn
            </a>
            <span className="ml-1 hidden items-center gap-1.5 font-mono text-[0.62rem] tracking-wider text-faint sm:flex">
              <span className="size-1 rounded-full bg-accent-soft" />
              REACT · TYPESCRIPT · TAILWIND
            </span>
          </m.div>
        </m.div>

        <HeroVisual />
      </div>

      <m.a
        href="#about"
        aria-label="Scroll to about section"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition hover:text-ink lg:flex"
      >
        <span className="font-mono text-[0.6rem] tracking-[0.24em] uppercase">
          Scroll
        </span>
        <span className="grid h-8 w-5 place-items-center rounded-full border border-line-strong">
          <m.span
            animate={reduce ? undefined : { y: [-3, 3, -3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-[2px] rounded-full bg-accent-soft"
          />
        </span>
        <ArrowDown className="size-3" aria-hidden="true" />
      </m.a>
    </section>
  );
}
