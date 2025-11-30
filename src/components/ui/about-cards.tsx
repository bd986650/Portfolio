import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { MainMenusGradientCard } from "./gradient-card";
import { aboutCards } from "@/lib/data/about-cards";

export function AboutCards() {
  return (
    <div className="flex relative w-full flex-wrap xl:flex-nowrap justify-center gap-4 md:gap-0">
      {aboutCards.map((card, index) => (
        <Card
          className={cn(
            "transform-gpu hover:rotate-0 hover:scale-110",
            index % 2 === 0 ? "rotate-12" : "-rotate-12",
            `-translate-x-[${index * 30}px]`
          )}
          content={card.content}
          icon={card.icon}
          description={`0${index}`}
          key={card.title}
          title={card.title}
          id={index}
        />
      ))}
    </div>
  );
}

export default AboutCards;

function Card({
  title,
  description,
  icon,
  content,
  className,
}: Readonly<{
  title: string;
  description: string;
  icon: ReactNode;
  content: ReactNode;
  className: string;
  id: number;
}>) {
  return (
    <div
      className={cn(
        "group transform-gpu transition-all duration-300 w-[220px] h-[215px] xl:w-[220px] xl:h-[215px]",
        className
      )}
    >
      <MainMenusGradientCard
        background={true}
        type="button"
        className="relative flex flex-col justify-between transform-gpu transition-all rounded-2xl h-full"
      >
        <div className="px-4 py-4 h-full overflow-clip rounded-2xl ">
          <div className="pointer-events-auto z-10 w-full flex transform-gpu flex-col gap-1 transition-all duration-400 group-hover:-translate-y-10 group-focus:-translate-y-10">
            <div className="pointer-events-auto transform-gpu transition-all group-hover:-mb-8 group-focus:-mb-8 h-[130px] tracking-tighter ">
              {icon}
            </div>
            <div className="text-accent-yellow text-xs mt-2">{description}</div>
            <div className="font-semibold text-foreground/80 text-sm -mt-1">
              {title}
            </div>
          </div>
          <div className="text-xs text-foreground/60 leading-[1.1] pointer-events-auto absolute bottom-5 flex w-5/6 translate-y-7 transform-gpu flex-row items-center opacity-0 transition-all duration-200 group-hover:translate-y-2 group-focus:translate-y-2 group-hover:opacity-100 group-focus:opacity-100">
            {content}
          </div>
        </div>
      </MainMenusGradientCard>
    </div>
  );
}
