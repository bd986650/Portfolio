/**
 * Utility function to wrap a value within a range
 * @param min - Minimum value of the range
 * @param max - Maximum value of the range
 * @param v - Value to wrap
 * @returns Wrapped value within the range
 */
export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

