import { stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

interface UseTextGenerateEffectOptions {
  words: {
    text: string;
    className?: string;
  }[];
  filter?: boolean;
  duration?: number;
  delay?: number;
}

/**
 * Hook to handle text generation animation effect
 * @param options - Configuration options for the animation
 * @returns Object with scope ref and animate function
 */
export function useTextGenerateEffect({
  words,
  filter = true,
  duration = 0.5,
  delay = 0,
}: UseTextGenerateEffectOptions) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;

    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2, { startDelay: delay }),
      }
    );
  }, [animate, delay, duration, filter, words, scope]);

  return { scope, animate };
}

