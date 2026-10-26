import {
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Check, ExternalLink, Star } from "lucide-react";
import { useRef } from "react";
import { projects, type Project } from "../data/portfolio";
import { cn } from "../lib/cn";
import { ProjectVisual } from "./ProjectVisual";
import { GithubIcon } from "./ui/BrandIcons";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const accentText: Record<Project["accent"], string> = {
  violet: "text-accent-soft",
  amber: "text-accent-soft",
  emerald: "text-accent-soft",
  sky: "text-accent-soft",
};

const accentDot: Record<Project["accent"], string> = {
  violet: "bg-[#7b6bff]",
  amber: "bg-[#f59e0b]",
  emerald: "bg-[#34d399]",
  sky: "bg-[#38bdf8]",
};

function useParallax(reduce: boolean | null) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  return { ref, y: reduce ? undefined : y };
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const { ref, y } = useParallax(reduce);

  return (
    <m.article
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="h-full lg:col-span-2"
    >
      <div className="group relative grid h-full overflow-hidden rounded-3xl border border-accent/25 bg-surface/55 transition-[transform,border-color,box-shadow,background-color] duration-500 hover:border-accent/45 hover:bg-surface/80 hover:shadow-[0_40px_90px_-45px_rgba(34,197,94,0.45)] lg:grid-cols-2">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 -top-px h-px bg-accent/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="dark-island relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] lg:aspect-auto lg:h-full lg:min-h-[24rem] lg:border-b-0 lg:border-r">
          <m.div
            style={y ? { y } : undefined}
            whileHover={reduce ? undefined : { scale: 1.035 }}
            transition={{ scale: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
            className="absolute -inset-[8%]"
          >
            <ProjectVisual id={project.id} accent={project.accent} />
          </m.div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent lg:bg-gradient-to-r"
          />

          <div className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between">
            <span className="flex items-center gap-1 rounded-full border border-accent/30 bg-black/40 px-2.5 py-1 font-mono text-[0.55rem] tracking-[0.12em] text-[#86efac] uppercase backdrop-blur">
              <Star className="size-2.5 fill-current" aria-hidden="true" />
              Featured
            </span>
            <span className="rounded-full border border-white/10 bg-black/35 px-2.5 py-1 font-mono text-[0.58rem] tracking-[0.14em] text-white/70 uppercase backdrop-blur">
              {project.year}
            </span>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <p className="font-mono text-[0.62rem] tracking-[0.16em] text-accent-soft uppercase">
            {project.tagline}
          </p>

          <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-[1.75rem]">
            {project.title}
          </h3>

          <p className="mt-3 text-[0.88rem] leading-relaxed text-muted">
            {project.description}
          </p>

          <p className="mt-4 font-mono text-[0.66rem] tracking-wide text-faint">
            {project.technologies.join("  •  ")}
          </p>

          {project.highlights ? (
            <ul className="mt-5 grid gap-x-5 gap-y-2 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-[0.78rem] leading-snug text-muted"
                >
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-accent/12 text-accent-soft">
                    <Check className="size-2.5" aria-hidden="true" />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {project.concepts ? (
            <div className="mt-6">
              <p className="font-mono text-[0.58rem] tracking-[0.16em] text-faint uppercase">
                Key concepts
              </p>
              <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label="Key concepts">
                {project.concepts.map((concept) => (
                  <li key={concept}>
                    <span className="inline-block rounded-md border border-accent/20 bg-accent/[0.07] px-2 py-1 font-mono text-[0.58rem] tracking-wide text-accent-soft transition-colors duration-300 hover:border-accent/40">
                      {concept}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-auto flex items-center gap-2 pt-6">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Live demo of ${project.title} (opens in a new tab)`}
              className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-accent/40 bg-accent px-3.5 py-2.5 text-[0.8rem] font-semibold text-[#04140b] transition-all duration-300 hover:bg-accent-soft"
            >
              <ExternalLink
                className="size-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                aria-hidden="true"
              />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
              className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-line bg-card-strong px-3.5 py-2.5 text-[0.8rem] font-semibold text-muted transition-all duration-300 hover:border-line-strong hover:text-ink"
            >
              <GithubIcon
                className="size-3.5 transition-transform duration-300 group-hover/btn:scale-110"
                aria-hidden="true"
              />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </m.article>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const { ref, y } = useParallax(reduce);

  return (
    <m.article
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/55 transition-[transform,border-color,box-shadow,background-color] duration-500 hover:-translate-y-1.5 hover:border-line-strong hover:bg-surface/80 hover:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 -top-px h-px bg-accent/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="dark-island relative aspect-[16/10] overflow-hidden border-b border-white/[0.06]">
          <m.div
            style={y ? { y } : undefined}
            whileHover={reduce ? undefined : { scale: 1.035 }}
            transition={{ scale: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
            className="absolute -inset-[8%]"
          >
            <ProjectVisual id={project.id} accent={project.accent} />
          </m.div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent"
          />

          <div className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/35 px-2.5 py-1 font-mono text-[0.58rem] tracking-[0.14em] text-white/70 uppercase backdrop-blur">
              <span
                className={cn("size-1.5 rounded-full", accentDot[project.accent])}
              />
              {project.year}
            </span>
          </div>

          <span className="pointer-events-none absolute right-4 bottom-4 grid size-8 place-items-center rounded-full border border-white/15 bg-black/30 text-white/70 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p
            className={cn(
              "font-mono text-[0.62rem] tracking-[0.16em] uppercase",
              accentText[project.accent],
            )}
          >
            {project.tagline}
          </p>

          <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-[1.35rem]">
            {project.title}
          </h3>

          <p className="mt-2.5 text-[0.85rem] leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.technologies.map((tech, techIndex) => (
              <li key={tech}>
                <span
                  style={{ transitionDelay: `${techIndex * 18}ms` }}
                  className="inline-block rounded-md border border-line bg-card-strong px-2 py-1 font-mono text-[0.6rem] tracking-wide text-muted transition-[transform,border-color,background-color,color] duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-accent/10 hover:text-accent-soft"
                >
                  {tech}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center gap-2 pt-5">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Live demo of ${project.title} (opens in a new tab)`}
              className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5 text-[0.78rem] font-semibold text-ink transition-all duration-300 hover:border-accent/60 hover:bg-accent hover:text-[#04140b]"
            >
              <ExternalLink
                className="size-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                aria-hidden="true"
              />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
              className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-line bg-card-strong px-3.5 py-2.5 text-[0.78rem] font-semibold text-muted transition-all duration-300 hover:border-line-strong hover:text-ink"
            >
              <GithubIcon
                className="size-3.5 transition-transform duration-300 group-hover/btn:scale-110"
                aria-hidden="true"
              />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </m.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-5 py-24 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="03"
            kicker="Projects"
            title={
              <>
                Selected{" "}
                <span className="text-accent-gradient">work</span>.
              </>
            }
            description="Real applications built end to end — from data layer and authentication to the last satisfying micro-interaction."
          />
          <Reveal delay={0.1} className="hidden shrink-0 md:block">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-[0.78rem] font-medium text-muted transition hover:border-line-strong hover:text-ink"
            >
              <GithubIcon className="size-4" aria-hidden="true" />
              All repositories
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:gap-5 lg:grid-cols-2">
          {projects.map((project, index) =>
            project.featured ? (
              <FeaturedCard key={project.id} project={project} index={index} />
            ) : (
              <ProjectCard key={project.id} project={project} index={index} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
