import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TERMINAL_READY_DELAY = 4000;
const NAVIGATION_PATH = "/me";

/**
 * Hook to manage the terminal readiness state and navigation
 * @param delay - Delay before setting isReady to true (default 4000ms)
 * @param navigationPath - Path for navigation when Enter is pressed (default "/me")
 * @returns Object with the isReady state
 */
export function useTerminalReady(
  delay: number = TERMINAL_READY_DELAY,
  navigationPath: string = NAVIGATION_PATH
) {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isReady) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        navigate(navigationPath);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate, isReady, navigationPath]);

  return { isReady };
}

