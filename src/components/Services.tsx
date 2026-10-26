import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "../lib/motion";

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="relative px-5 py-24 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          kicker="Services"
          title={
            <>
              How I can{" "}
              <span className="text-accent-gradient">help</span>.
            </>
          }
          description="Focused front-end work — from a single page to a full interactive application."
        />

        <m.ul
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <m.li
                key={service.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-line bg-card p-5 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-line-strong hover:bg-card-strong hover:shadow-[0_30px_60px_-40px_rgba(34,197,94,0.7)]"
              >
                <div className="relative flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-xl border border-line bg-card-strong text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-6deg] group-hover:border-accent/35 group-hover:bg-accent/12 group-hover:text-accent-soft">
                    <Icon className="size-[1.2rem]" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="size-4 text-faint opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="relative mt-4 text-[1rem] font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-[0.83rem] leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="relative mt-4 space-y-1.5 border-t border-line-soft pt-3.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 font-mono text-[0.66rem] tracking-wide text-faint"
                    >
                      <Check
                        className="size-3 text-accent-soft/70"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </m.li>
            );
          })}
        </m.ul>
      </div>
    </section>
  );
}
