import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const SCROLL_THRESHOLD = 0.04;

/**
 * Hook to manage floating navbar visibility based on scroll position
 * @param threshold - Scroll threshold to show/hide navbar (default 0.04)
 * @returns Boolean indicating if navbar should be visible
 */
export function useFloatingNavbar(threshold: number = SCROLL_THRESHOLD) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (scrollYProgress.get() < threshold) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });

  return visible;
}

