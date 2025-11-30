import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { MainMenusGradientCard } from "./gradient-card";

function MyButton({
  text,
  iconLeft,
  iconRight,
  align = "",
  type = "default",
  size = "large",
  background = true,
}: {
  text: string;
  background?: boolean;
  size?: "default" | "large" | "small";
  align?: "text-center" | "";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  type?: "default" | "simple";
}) {
  const content = (
    <div
      className={cn(
        "flex items-center justify-between ",
        size === "large"
          ? "px-2 sm:px-4 md:pl-6 py-2 sm:py-3 gap-1 md:gap-4"
          : size === "small"
          ? "py-2 px-2 text-sm flex gap-1.5"
          : "py-2 px-4 gap-4"
      )}
    >
      {iconLeft}
      <div
        className={cn(
          "grow-1 text-[0.6rem] sm:text-xs md:text-[0.9rem]",
          align
        )}
      >
        {text}
      </div>
      {iconRight}
    </div>
  );

  if (type === "simple") {
    return content;
  }
  return (
    <MainMenusGradientCard
      type="button"
      background={background}
      circleSize={!background ? 200 : 400}
    >
      {content}
    </MainMenusGradientCard>
  );
}

export default MyButton;
