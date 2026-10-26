import {
  m,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef } from "react";
import { journey } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";

export function Journey() {
  const reduce = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="journey"
      className="relative px-5 py-24 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            index="04"
            kicker="Journey"
            title={
              <>
                The path so{" "}
                <span className="text-accent-gradient">far</span>.
              </>
            }
            description="A deliberate progression — from first HTML tags to shipping full-stack React applications."
          />

          <div className="mt-8 rounded-2xl border border-line bg-surface/40 p-5">
            <div className="flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.16em] text-faint uppercase">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Right now
            </div>
            <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink">
              Building full-stack React applications with Supabase, and
              refining my craft in performance, accessibility and design
              systems.
            </p>
            <p className="mt-3 flex items-center gap-1.5 font-mono text-[0.62rem] text-accent-soft">
              <Sparkles className="size-3" aria-hidden="true" />
              Next: Next.js &amp; advanced architecture
            </p>
          </div>
        </div>

        <div ref={timelineRef} className="relative">
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-[7px] w-px bg-line"
          />
          <m.div
            aria-hidden="true"
            style={reduce ? { scaleY: 1 } : { scaleY }}
            className="absolute top-3 bottom-3 left-[7px] w-px origin-top bg-accent"
          />

          <ol className="space-y-4">
            {journey.map((item, index) => (
              <m.li
                key={item.title}
                initial={reduce ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-9"
              >
                <m.span
                  aria-hidden="true"
                  initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-3 left-0 grid size-[15px] place-items-center rounded-full border border-line bg-bg"
                >
                  <span className="size-1.5 rounded-full bg-accent-soft shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                </m.span>

                <div className="group rounded-2xl border border-line bg-card p-4 transition-colors duration-300 hover:border-line-strong hover:bg-card-strong sm:p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[0.98rem] font-semibold text-ink">
                      <span className="mr-2 font-mono text-[0.6rem] text-accent-soft/70">
                        0{index + 1}
                      </span>
                      {item.title}
                    </h3>
                    <span className="font-mono text-[0.58rem] tracking-[0.15em] text-faint uppercase">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </m.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
