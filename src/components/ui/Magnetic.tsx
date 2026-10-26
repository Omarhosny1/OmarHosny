import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({
  children,
  className,
  strength = 0.35,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </m.div>
  );
}
