import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useMemo } from "react";
import { useTypingAnimation } from "@/hooks/use-typing-effect";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn(
      "grid text-[0.55rem] sm:text-[0.7rem] md:text-sm font-normal tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:");
  }

  const { displayedText } = useTypingAnimation({
    text: children,
    duration,
    delay,
  });

  const MotionComponent = useMemo(() => {
    if (Component === "span") return motion.span;
    if (Component === "div") return motion.div;
    if (Component === "p") return motion.p;
    return motion.span;
  }, [Component]);

  return (
    <MotionComponent
      className={cn(
        "text-[0.55rem] sm:text-[0.7rem] md:text-sm  font-normal tracking-tight",
        className
      )}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children?: React.ReactNode;
  className?: string;
  showDemo?: boolean;
}

export const Terminal = ({
  children,
  className,
  showDemo = false,
}: TerminalProps) => {
  const terminalContent = showDemo ? (
    <>
      <TypingAnimation duration={40}>&gt; bun run dev</TypingAnimation>

      <AnimatedSpan delay={800} className="text-blue-400">
        <span>$ vite</span>
      </AnimatedSpan>

      <AnimatedSpan delay={1200} className="text-gray-400">
        <span>  VITE v7.2.4  ready in 96 ms </span>
      </AnimatedSpan>

      <AnimatedSpan delay={1400} className="text-gray-400">
        <span>  ➜  Local:   http://localhost:5173/</span>
      </AnimatedSpan>

      <AnimatedSpan delay={1600} className="text-gray-400">
        <span>  ➜  Network: use --host to expose</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-gray-400">
        <span>✓ 156 modules transformed</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2200} className="text-green-500">
        <span>✓ Compiled successfully</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2400} className="text-green-500">
        <span>✓ Portfolio is ready! </span>
      </AnimatedSpan>

      <TypingAnimation
        delay={2800}
        className="text-gray-400"
        duration={40}
      >
        ➜ Ready in 0.5s. Press Enter to continue or click the button below...
      </TypingAnimation>
    </>
  ) : (
    children
  );

  return (
    <div
      className={cn(
        "z-0 h-full max-h-[400px] w-full max-w-sm md:max-w-xl rounded-xl border border-border bg-background",
        className
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-border p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">{terminalContent}</code>
      </pre>
    </div>
  );
};

export const TerminalDemo = () => {
  return <Terminal className="bg-foreground/2" showDemo={true} />;
};
