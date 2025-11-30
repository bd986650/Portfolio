import { useMemo, useState } from "react";

/**
 * Hook to manage testimonials carousel navigation
 * @param itemsCount - Total number of testimonials
 * @returns Object with active index, navigation handlers, and rotations array
 */
export function useTestimonialsNavigation(itemsCount: number) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % itemsCount);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + itemsCount) % itemsCount);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  // Generate deterministic rotation values based on index
  const rotations = useMemo(
    () =>
      Array.from({ length: itemsCount }, (_, index) => {
        // Use simple hash function for deterministic "random" value
        const seed = index * 9301 + 49297;
        return (seed % 21) - 10;
      }),
    [itemsCount]
  );

  return {
    active,
    handleNext,
    handlePrev,
    isActive,
    rotations,
  };
}

