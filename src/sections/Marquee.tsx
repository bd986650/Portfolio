import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { Asterisk } from "lucide-react";

function Marquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <VelocityScroll
        defaultVelocity={2}
        className="text-sm md:text-lg font-light tracking-widest lowercase hidden lg:block"
      >
        <span className="inline-flex text-center -ml-1">
          attention to details
        </span>
        <Asterisk
          className="inline-flex text-accent-yellow size-7 px-1"
          strokeWidth={2}
        />
        <span className="inline-flex text-center px-0.5">
          pixel-perfect design
        </span>
        <Asterisk
          className="inline-flex text-accent-purple size-7 px-1"
          strokeWidth={2}
        />
        <span className="inline-flex text-center px-0.5">
          performance-driven code
        </span>
        <Asterisk
          className="inline-flex text-accent-yellow size-7 px-1"
          strokeWidth={2}
        />
        <span className="inline-flex text-center px-0.5">
          digital solutions
        </span>
        <Asterisk
          className="inline-flex text-accent-purple size-7 px-1"
          strokeWidth={2}
        />
      </VelocityScroll>
      <div className="text-[0.6rem] font-light tracking-widest lowercase lg:hidden flex items-center justify-evenly w-full">
        <div className="text-center">attention&nbsp;to&nbsp;details</div>
        <Asterisk
          className="text-accent-yellow size-4 px-0.5 min-w-[20px]"
          strokeWidth={2}
        />
        <div className="text-center">pixel&#8209;perfect&nbsp;design</div>
        <Asterisk
          className="text-accent-purple size-4 px-0.5 min-w-[20px]"
          strokeWidth={2}
        />
        <div className="text-center">performance&#8209;driven&nbsp;code</div>
        <Asterisk
          className="text-accent-yellow size-4 px-0.5 min-w-[20px]"
          strokeWidth={2}
        />
        <div className="text-center">digital&nbsp;solutions</div>
        <Asterisk
          className="text-accent-purple size-4 px-0.5 min-w-[20px]"
          strokeWidth={2}
        />
      </div>
      <div className="text-[0.6rem] font-light tracking-widest lowercase lg:hidden flex items-center justify-evenly w-full">
        <div className="text-center">performance&#8209;driven&nbsp;code</div>
        <Asterisk
          className="text-accent-purple size-4 px-0.5 min-w-[20px]"
          strokeWidth={2}
        />
        <div className="text-center">digital&nbsp;solutions</div>
        <Asterisk
          className="text-accent-yellow size-4 px-0.5 min-w-[20px]"
          strokeWidth={2}
        />
        <div className="text-center">attention&nbsp;to&nbsp;details</div>
        <Asterisk
          className="text-accent-purple size-4 px-0.5 min-w-[20px]"
          strokeWidth={2}
        />
        <div className="text-center">pixel&#8209;perfect&nbsp;design</div>
        <Asterisk
          className="text-accent-yellow size-4 px-0.5 min-w-[20px]"
          strokeWidth={2}
        />
      </div>

      <div className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      <div className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
    </div>
  );
}

export default Marquee;
