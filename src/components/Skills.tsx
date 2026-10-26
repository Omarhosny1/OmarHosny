import { m, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { skills, type Skill } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const reduce = useReducedMotion();
  const Icon = skill.icon;

  return (
    <m.li
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-card p-4 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-line-strong hover:bg-card-strong hover:shadow-[0_24px_50px_-30px_rgba(34,197,94,0.65)]"
    >
      <div className="relative flex items-start justify-between gap-3">
        <span className="grid size-10 place-items-center rounded-xl border border-line bg-card-strong text-ink transition-all duration-300 group-hover:-rotate-6 group-hover:scale-105 group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:text-accent-soft">
          <Icon className="size-[1.15rem]" aria-hidden="true" />
        </span>
        <span className="rounded-full border border-line-soft bg-card px-2 py-1 font-mono text-[0.55rem] tracking-[0.14em] text-faint uppercase">
          {skill.category}
        </span>
      </div>

      <h3 className="relative mt-4 text-[0.95rem] font-semibold text-ink">
        {skill.name}
      </h3>
      <p className="relative mt-1 text-[0.74rem] leading-relaxed text-muted">
        {skill.note}
      </p>

      <div className="relative mt-4">
        <div className="flex items-center justify-between font-mono text-[0.58rem] text-faint">
          <span>Proficiency</span>
          <span className="text-muted">{skill.level}%</span>
        </div>
        <div
          className="mt-1.5 h-1 overflow-hidden rounded-full bg-card-strong"
          role="progressbar"
          aria-label={`${skill.name} proficiency`}
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <m.div
            initial={reduce ? false : { width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 1.1,
              delay: 0.25 + (index % 3) * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full rounded-full bg-accent"
          />
        </div>
      </div>
    </m.li>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="02"
            kicker="Skills"
            title={
              <>
                The tools I use to{" "}
                <span className="text-accent-gradient">ship</span>.
              </>
            }
            description="A focused stack, used deeply — from semantic markup and modern CSS to typed React and Next.js applications."
          />
          <Reveal delay={0.1} className="hidden shrink-0 md:block">
            <div className="flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-2 font-mono text-[0.62rem] tracking-[0.14em] text-faint uppercase">
              <Sparkles className="size-3.5 text-accent-soft" aria-hidden="true" />
              Always exploring
            </div>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}

          <m.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-line bg-surface/40 p-4 transition-colors duration-300 hover:border-accent/30"
          >
            <div className="relative flex items-start justify-between">
              <span className="grid size-10 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent-soft">
                <Sparkles className="size-[1.15rem]" aria-hidden="true" />
              </span>
              <span className="rounded-full border border-line-soft bg-card px-2 py-1 font-mono text-[0.55rem] tracking-[0.14em] text-faint uppercase">
                Next
              </span>
            </div>
            <div className="relative mt-4">
              <h3 className="text-[0.95rem] font-semibold text-ink">
                Always learning
              </h3>
              <p className="mt-1 text-[0.74rem] leading-relaxed text-muted">
                Currently going deeper into advanced patterns, performance and
                design systems.
              </p>
            </div>
          </m.li>
        </ul>

        <div className="mask-fade-x mt-12 overflow-hidden border-y border-line-soft py-4">
          <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-8"
                aria-hidden={copy === 1}
              >
                {skills.map((skill) => (
                  <span
                    key={`${copy}-${skill.name}`}
                    className="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.16em] text-faint uppercase"
                  >
                    <span className="size-1 rounded-full bg-accent/60" />
                    {skill.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
