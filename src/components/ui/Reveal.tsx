import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut } from "../../lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
    >
      {children}
    </m.div>
  );
}
