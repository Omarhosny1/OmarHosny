import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={
        isCenter
          ? "mx-auto flex max-w-2xl flex-col items-center text-center"
          : "flex flex-col items-start"
      }
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.22em] text-muted uppercase">
          <span className="text-accent-soft">{index}</span>
          <span className="h-px w-6 bg-line" aria-hidden="true" />
          {kicker}
        </span>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl md:text-[2.6rem] md:leading-[1.08]">
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.12}>
          <p className="mt-4 max-w-xl text-[0.975rem] leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
