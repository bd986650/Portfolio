import { useEffect, useState } from "react";

const DESKTOP_MIN_WIDTH = 1050;

/**
 * Hook to check if the current screen width is desktop size
 * @param minWidth - Minimum width to consider as desktop (default 1050px)
 * @returns Boolean indicating if the screen is desktop size
 */
export function useDesktopCheck(minWidth: number = DESKTOP_MIN_WIDTH) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= minWidth);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [minWidth]);

  return isDesktop;
}

