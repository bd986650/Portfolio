import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useMemo } from "react";
import { useTextGenerateEffect } from "@/hooks/use-text-generate-effect";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
}) => {
  const { scope } = useTextGenerateEffect({
    words,
    filter,
    duration,
    delay,
  });

  const renderedWords = useMemo(
    () => (
      <motion.div ref={scope}>
        {words.map((word, idx) => (
          <motion.span
            key={word.text + idx}
            className={cn("opacity-0", word.className)}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word.text}{" "}
          </motion.span>
        ))}
      </motion.div>
    ),
    [words, filter, scope]
  );

  return (
    <div className={cn("", className)}>
      <div className="tracking-wide">{renderedWords}</div>
    </div>
  );
};
