import AboutCards from "@/components/ui/about-cards";
import Header from "@/components/ui/header";
import { cn } from "@/lib/utils";

function About({ className }: { className: string }) {
  return (
    <div id="about" className={cn("flex gap-16 flex-col", className)}>
      <Header text={"About me"} align={"center"} />
      <div className="flex justify-center xl:h-[28vh] pt-4 w-full">
        <AboutCards />
      </div>
    </div>
  );
}

export default About;
