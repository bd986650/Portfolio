import { type VariantProps, cva } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ColorType = keyof typeof badgeColorVariants;
const badgeColorVariants = {
  neutral: "text-foreground/80 bg-foreground/7 border-neutral-500/20",
  green: "text-foreground/80 bg-green-400/10 border-green-200/80",
  blue: "text-foreground/80 bg-blue-400/10 border-blue-200/80",
  red: "text-foreground/80 bg-red-400/10 border-red-200/80",
  orange: "text-foreground/80 bg-orange-400/10 border-orange-200/80",
  yellow: "text-foreground/80 bg-yellow-400/10 border-yellow-400/60",
  violet: "text-foreground/80 bg-violet-400/10 border-violet-200/80",
  // Add other colors here
};

const badgeSizeVariants = {
  sm: "py-0.5 px-1 lg:py-1 lg:px-2",
  md: "h-7 px-3",
  lg: "h-8 px-4",
  icon: "size-10",
};

const badgeRoundedVariants = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

// eslint-disable-next-line react-refresh/only-export-components
export const badgesVariants = cva(
  "inline-flex gap-1.5 lg:gap-2 items-center justify-center whitespace-nowrap rounded-md transition-colors",
  {
    variants: {
      color: badgeColorVariants,
      size: badgeSizeVariants,
      rounded: badgeRoundedVariants,
      border: {
        true: "border",
        false: "",
      },
    },
    defaultVariants: {
      color: "neutral",
      size: "sm",
      rounded: "sm",
      border: false,
    },
  }
);

function Tag({
  color,
  icon,
  size,
  rounded,
  border,
  children,
  className,
  ...props
}: Readonly<
  {
    className?: string;
    children: ReactNode;
    icon: ReactNode;
  } & VariantProps<typeof badgesVariants>
>) {
  return (
    <div
      className={cn(
        "text-[0.6rem] lg:text-xs tracking-tighter",
        badgesVariants({ color, rounded, size, border }),
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </div>
  );
}

export default Tag;
