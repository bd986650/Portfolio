import { useEffect, useRef, useState } from "react";

interface Dimensions {
  width: number;
  height: number;
}

/**
 * Hook to track element dimensions using ResizeObserver
 * @param dependencies - Dependencies array to trigger recalculation
 * @returns Object with ref and dimensions
 */
export function useResizeObserver(dependencies: unknown[] = []) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Use ResizeObserver to track content size changes
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
      resizeObserver.disconnect();
    };
  }, dependencies);

  return { containerRef, dimensions };
}

