import { TagType } from "@/lib/data";
import { useMouse } from "@/hooks/use-mouse";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { TerminalIcon } from "./icons/terminal-icon";
import Noise from "./noise";
import Tag from "./tag";

export const MainMenusGradientCard = ({
  title,
  description,
  type = "default",
  background = true,
  status,
  tags,
  circleSize = 400,
  className,
  children,
  link,
}: {
  title?: string;
  description?: string;
  background?: boolean;
  type?: "default" | "large" | "mobile" | "button";
  status?: string;
  tags?: TagType[];
  withArrow?: boolean;
  circleSize?: number;
  children?: ReactNode;
  className?: string;
  link?: string;
}) => {
  const [mouse, parentRef] = useMouse();

  if (type === "button") {
    return (
      <div
        className={cn(
          "group relative transform-gpu rounded-2xl transition-transform hover:scale-[1.01] bg-foreground/10",
          className
        )}
        ref={parentRef}
      >
        {background && (
          <Noise className={"overflow-clip rounded-2xl"} type={"projects"} />
        )}

        <div className="absolute h-full w-full overflow-hidden rounded-2xl -z-[1]">
          <div
            className={cn(
              "hidden lg:block -translate-x-1/2 -translate-y-1/2 absolute transform-gpu h-full rounded-full transition-transform duration-500 group-hover:scale-[3]",
              mouse.elementX === null || mouse.elementY === null
                ? "opacity-0"
                : "opacity-100"
            )}
            style={{
              maskImage: `radial-gradient(${
                circleSize / 2
              }px circle at center, white, transparent)`,
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              left: `${mouse.elementX}px`,
              top: `${mouse.elementY}px`,
              background:
                "linear-gradient(135deg, #4A90E2, #6B46C1, #06B6D4, #8B5CF6)",
            }}
          />
          <div className="absolute inset-px rounded-2xl bg-background/90" />
        </div>
        {children}
      </div>
    );
  }

  return (
    <div
      className="relative transform-gpu rounded-[20px] h-[230px] md:h-[250px] lg:h-[300px] bg-foreground/10 transition-transform hover:scale-[1.01]"
      ref={parentRef}
    >
      <Noise className="overflow-clip rounded-[20px]" type={"projects"} />
      <div className="absolute h-full w-full overflow-hidden rounded-[20px] -z-[1]">
        <div
          className={cn(
            "-translate-x-1/2 -translate-y-1/2 absolute transform-gpu h-full rounded-full transition-transform duration-500 group-hover:scale-[3]",
            mouse.elementX === null || mouse.elementY === null
              ? "opacity-0"
              : "opacity-100"
          )}
          style={{
            maskImage: `radial-gradient(${
              circleSize / 2
            }px circle at center, white, transparent)`,
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            left: `${mouse.elementX}px`,
            top: `${mouse.elementY}px`,
            background:
              "linear-gradient(135deg, #4A90E2, #6B46C1, #06B6D4, #8B5CF6)",
          }}
        />
        <div className="absolute inset-px rounded-[19px] bg-background/90 " />
      </div>
      <div className="flex justify-between w-full p-0 sm:p-2 sm:pr-0 h-full gap-2 sm:gap-5">
        <div
          className={cn(
            "relative p-4 pr-0 sm:p-4 flex flex-col",
            type === "large"
              ? "w-2/3 lg:w-1/2"
              : type === "mobile"
              ? "w-4/7 lg:w-4/7"
              : "w-5/7 lg:w-1/2"
          )}
        >
          <h3 className="font-semibold text-xs md:text-sm lg:text-lg text-foreground leading-tight">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-yellow transition-colors"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          {description && (
            <div className="mt-2 lg:mt-4 text-[0.6rem] md:text-[0.65rem] lg:text-[0.8rem] text-foreground/80 leading-[1] grow-1 whitespace-pre-wrap">
              {description}
            </div>
          )}
          {status && (
            <code className="mt-2 lg:mt-4 py-0.5 px-2 text-[0.6rem] lg:text-[0.7rem] text-accent-yellow tracking-tighter font-medium bg-accent-yellow/5 rounded-sm w-fit border-accent-yellow/20 border-[1px]">
              <TerminalIcon size={16}>{status}</TerminalIcon>
            </code>
          )}
          {tags && (
            <div className="mt-2 flex flex-wrap gap-0.5 md:gap-1 lg:gap-2 -mr-24 xs:mr-0">
              {tags.map((tag, index) => (
                <Tag
                  color={tag.color}
                  key={index}
                  rounded={tag.rounded}
                  size={tag.size}
                  border={tag.border}
                  icon={tag.icon}
                >
                  {tag.children}
                </Tag>
              ))}
            </div>
          )}
        </div>
        {children && (
          <div
            className={cn(
              "flex relative h-max w-full",
              className,
              type === "large"
                ? "w-1/2"
                : type === "mobile"
                ? "w-2/11"
                : "w-1/2"
            )}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
