import About from "@/sections/About";
import Contacts from "@/sections/Contacts";
import Hero from "@/sections/Hero";
import Marquee from "@/sections/Marquee";
import { NavBar } from "@/sections/NavBar";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Portfolio() {
  return (
    <div className="bg-background overflow-x-clip">
      <NavBar />
      <div className="flex w-full flex-col gap-30 xl:gap-48">
        <Hero className="-mb-[10vh] text-white" />
        <About className="max-w-[95vw] xl:max-w-[80vw] w-full mx-auto" />
        <Marquee />
        <Skills className="mx-[10vw]" />
        <Projects className="max-w-[98vw] sm:max-w-[80vw] mx-auto" />
        <Contacts className="w-[98vw] md:w-[90vw] xl:w-[1200px] mx-auto" />
      </div>
    </div>
  );
}
