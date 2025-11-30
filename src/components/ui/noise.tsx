import { cn } from "@/lib/utils";

const Noise = ({
  className,
  type = "rounded",
}: {
  className?: string;
  type?: "rounded" | "hero" | "projects" | "skill";
}) => {
  const imgStyle =
    type === "skill"
      ? "h-auto w-full md:h-full md:w-auto object-cover"
      : type === "rounded"
      ? "h-full w-auto object-cover"
      : "h-auto w-full object-cover";
  return (
    <div
      className={cn(
        "absolute pointer-events-none h-full w-full opacity-[0.08] z-[1] overflow-clip invert-100 dark:invert-0",
        type === "projects" ? "bottom-0" : "top-1/2 -translate-y-1/2",
        className
      )}
    >
      <img
        src="/noise.svg"
        alt="noise"
        width={100}
        height={100}
        className={imgStyle}
      />
    </div>
  );
};

export default Noise;
