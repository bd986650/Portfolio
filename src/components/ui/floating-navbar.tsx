/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import { JSX } from "react";
import MyButton from "./my-button";
import CircleImage from "@/components/ui/circle-image";
import { useFloatingNavbar } from "@/hooks/use-floating-navbar";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const visible = useFloatingNavbar();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex gap-4 max-w-[90vw] fixed top-1 inset-x-0 mx-auto border border-foreground/10 rounded-2xl bg-background/30 backdrop-blur-2xl z-[5000] px-6 py-1.5 items-center justify-between",
          className
        )}
      >
        <div className="px-4 font-semibold text-lg grow-1 lg:grow-0 flex items-center">
          <CircleImage type="navbar" />
        </div>
        <div className="hidden lg:flex max-w-fit grow-1 items-center justify-center">
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex text-foreground/60 hover:text-foreground text-sm"
              )}
            >
              <MyButton
                text={navItem.name}
                background={false}
                size="small"
                type="simple"
              />
            </a>
          ))}
        </div>
        <Link to="/" className={cn("relative items-center flex")}>
          <MyButton
            text="Back to terminal"
            background={false}
            iconRight={<SquareArrowOutUpRight size={16} />}
          />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
