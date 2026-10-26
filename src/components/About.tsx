import { m, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { aboutHighlights, profile } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { staggerContainer, staggerItem } from "../lib/motion";
import {
  AccessabilityIcon,
  CodeIcon,
  PerformanceOptimizationIcon,
  ReactIcon,
  ResponsiveIcon,
  SEOIcon,
} from "./ui/BrandIcons";

const highlightIcons = [
  CodeIcon,
  ResponsiveIcon,
  PerformanceOptimizationIcon,
  AccessabilityIcon,
  SEOIcon,
  ReactIcon,
];

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          kicker="About"
          title={
            <>
              Front-end craft, built with{" "}
              <span className="text-accent-gradient">intent</span>.
            </>
          }
          description="I care about the details most people never notice — the spacing, the timing of a transition, the keyboard path through a form."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="flex flex-col gap-8">
            <Reveal delay={0.05}>
              <p className="text-[1.02rem] leading-relaxed text-muted">
                I&apos;m Omar, a Front-End Developer focused on building modern,
                user-friendly web applications. I turn ideas and designs into
                interfaces that feel fast, considered and effortless to use.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[1.02rem] leading-relaxed text-muted">
                My work lives in the modern React and Next.js ecosystem:
                component-driven architecture, strong TypeScript, thoughtful
                motion, and a performance mindset that keeps every experience
                sharp on any device.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/50 p-5">
                <div className="relative flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-line bg-accent font-display text-base font-semibold text-[#0a0a0a]">
                    OH
                  </span>
                  <div>
                    <p className="font-display text-[0.98rem] font-semibold text-ink">
                      {profile.name}
                    </p>
                    <p className="mt-0.5 text-[0.82rem] text-muted">{profile.role}</p>
                    <p className="mt-2.5 inline-flex items-center gap-1.5 font-mono text-[0.66rem] tracking-wide text-faint">
                      <MapPin className="size-3 text-accent-soft" aria-hidden="true" />
                      {profile.location}
                    </p>
                  </div>
                </div>
                <div className="relative mt-5 grid grid-cols-3 divide-x divide-line border-t border-line-soft pt-4">
                  {[
                    { value: "5", label: "Projects" },
                    { value: "16", label: "Technologies" },
                    { value: "100%", label: "Responsive" },
                  ].map((stat) => (
                    <div key={stat.label} className="px-2 text-center first:pl-0 last:pr-0">
                      <p className="font-display text-lg font-semibold text-ink">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 font-mono text-[0.58rem] tracking-[0.14em] text-faint uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <m.ul
            variants={staggerContainer}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {aboutHighlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? CodeIcon;
              return (
                <m.li
                  key={item.title}
                  variants={staggerItem}
                  className="group relative overflow-hidden rounded-2xl border border-line bg-card p-5 transition-colors duration-300 hover:border-line-strong hover:bg-card-strong"
                >
                  <span className="relative grid size-9 place-items-center rounded-lg border border-line bg-card-strong text-accent-soft transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:text-accent-soft">
                    <Icon className="size-[1.05rem]" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-3.5 text-[0.92rem] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="relative mt-1.5 text-[0.8rem] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </m.li>
              );
            })}
          </m.ul>
        </div>
      </div>
    </section>
  );
}
