import { useEffect, useState } from "react";

interface UseTypingEffectOptions {
  text: string;
  duration?: number;
  delay?: number;
}

/**
 * Hook to handle typing animation effect
 * @param options - Configuration options for the animation
 * @returns Object with displayedText and started state
 */
export function useTypingAnimation({
  text,
  duration = 60,
  delay = 0,
}: UseTypingEffectOptions) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [text, duration, started]);

  return { displayedText, started };
}

