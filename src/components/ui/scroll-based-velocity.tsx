import { motion, useTransform } from "motion/react";
import React from "react";

import { cn } from "@/lib/utils";
import { wrap } from "@/lib/utils/wrap";
import { useParallaxText } from "@/hooks/use-parallax-text";

interface VelocityScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultVelocity?: number;
  className?: string;
  numRows?: number;
}

interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({
  children,
  baseVelocity = 100,
  ...props
}: ParallaxProps) {
  const { containerRef, textRef, baseX, repetitions } = useParallaxText(
    baseVelocity,
    children
  );

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden whitespace-nowrap"
      {...props}
    >
      <motion.div className="inline-block" style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} ref={i === 0 ? textRef : null}>
            {children}{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function VelocityScroll({
  defaultVelocity = 5,
  numRows = 2,
  children,
  className,
  ...props
}: VelocityScrollProps) {
  return (
    <div
      className={cn("relative w-full font-bold md:leading-[5rem]", className)}
      {...props}
    >
      {Array.from({ length: numRows }).map((_, i) => (
        <ParallaxText
          key={i}
          baseVelocity={defaultVelocity * (i % 2 === 0 ? 1 : -1)}
        >
          {children}
        </ParallaxText>
      ))}
    </div>
  );
}

