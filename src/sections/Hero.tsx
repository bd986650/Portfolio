import CircleImage from "@/components/ui/circle-image";
import LiquidChrome from "@/components/ui/liquid-chrome";
import Noise from "@/components/ui/noise";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = ({ className }: { className: string }) => {
  const config = {
    baseColor: {
      r: 15,
      g: 25,
      b: 45,
      a: 1,
    },
    speed: 0.2,
    amplitude: 0.4,
  };

  const line5 = [
    {
      text: "My",
      className: "",
    },
    {
      text: "name",
      className: "",
    },
    {
      text: "is",
      className: "",
    },
    {
      text: "Danil.",
      className: "",
    },
    {
      text: "I'm",
      className: "",
    },
    {
      text: "a",
      className: "",
    },
    {
      text: "frontend/fullstack",
      className: "text-accent-yellow font-semibold",
    },
    {
      text: "developer",
      className: "text-accent-yellow font-semibold",
    },
  ];

  return (
    <div id="home" className={className}>
      <div className="h-screen w-full relative flex items-center">
        <Noise
          className="h-full w-full top-0 z-[10]"
          type="hero"
        />

        <div className="hidden lg:block absolute h-full w-full top-0 z-0">
          <LiquidChrome
            baseColor={[
              Number((config.baseColor.r / 255).toFixed(1)),
              Number((config.baseColor.g / 255).toFixed(1)),
              Number((config.baseColor.b / 255).toFixed(1)),
            ]}
            speed={config.speed}
            amplitude={config.amplitude}
            interactive={true}
          />
        </div>
        <div className="pointer-events-none relative backdrop-blur-2xl bg-foreground/20 dark:bg-background/20 rounded-2xl gap-2 sm:gap-4 px-6 sm:px-10 lg:px-20 py-6 sm:py-10 lg:py-16 m-auto max-w-[90vw] sm:max-w-[70vw] w-full flex flex-col justify-center z-[10]">
          <CircleImage />
          <div className="flex text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold gap-4 items-center mb-2 md:mb-4">{`Hello`}</div>
          <div className="w-4/5 border-accent-yellow/40 border-t-2 border-dotted"></div>
          <TextGenerateEffect
            className="text-xs sm:text-md md:text-xl lg:text-2xl xl:text-3xl font-light -mb-2 md:-mb-3"
            words={line5}
            delay={0.1}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
