import { TerminalDemo } from "@/components/ui/terminal";
import { ChevronRightIcon } from "@/components/ui/icons/chevron-right-icon";
import MyButton from "@/components/ui/my-button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useTerminalReady } from "@/hooks/use-terminal-ready";

export default function Home() {
  const { isReady } = useTerminalReady();

  return (
    <div className="bg-background">
      <div className="terminal h-screen flex justify-center items-center flex-col gap-10 md:gap-20">
        <div className="relative">
          <TerminalDemo />
        </div>

        <div className="h-[60px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isReady && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  opacity: { duration: 0.6 },
                  y: { duration: 0.8 },
                  scale: { duration: 0.8 }
                }}
              >
                <Link to="/me">
                  <MyButton
                    text="Get started"
                    size="large"
                    iconRight={<ChevronRightIcon size={28} className="p-0" />}
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
