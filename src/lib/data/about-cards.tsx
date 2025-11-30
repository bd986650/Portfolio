import { UserRound } from "lucide-react";
import { ReactNode } from "react";
import { BookTextIcon } from "@/components/ui/icons/book-text-icon";
import { CoffeeIcon } from "@/components/ui/icons/coffee-icon";
import { FilePenLineIcon } from "@/components/ui/icons/file-pen-line-icon";
import { SparklesIcon } from "@/components/ui/icons/sparkles-icon";
import { CardType } from "./types";

export const aboutCards: CardType[] = [
  {
    title: "Education",
    icon: (
      <div className="transform-gpu text-xl h-full cursor-pointer transition-all group-hover:scale-50 group-focus:scale-50 duration-300">
        <div className="flex h-full w-full items-center justify-center relative px-8 border-dotted rounded-xl border-2 transition-colors border-accent-purple text-accent-yellow group-hover:text-accent-yellow/90 group-focus:text-accent-yellow/90">
          <FilePenLineIcon size={48} />
          <CoffeeIcon
            size={48}
            className="text-foreground/90 group-hover:text-foreground/80 group-focus:text-foreground/80"
          />
          <BookTextIcon size={48} />
        </div>
      </div>
    ),
    content: (
      <div>
        {`
        I'm a third-year student at Novosibirsk State University, specializing in Computer Science and Engineering.`}
      </div>
    ),
  },
  {
    title: "Additional Education",
    icon: (
      <div className="transform-gpu text-xl h-full cursor-pointer transition-all group-hover:scale-50 group-focus:scale-50 duration-300">
        <div className="flex h-full w-full items-center justify-center relative px-8 border-dotted rounded-xl border-2 transition-colors border-accent-purple text-accent-yellow group-hover:text-accent-yellow/90 group-focus:text-accent-yellow/90">
          <FilePenLineIcon size={48} />
        </div>
      </div>
    ),
    content: (
      <div>
        Also now I'm student of the Frontend School of the Kontur.
      </div>
    ),
  },
  {
    title: "Hackathons",
    icon: (
      <div className="transform-gpu text-xl h-full cursor-pointer transition-all group-hover:scale-[0.6] group-focus:scale-[0.6] duration-300">
        <div className="flex h-full w-full items-center justify-center relative">
          <SparklesIcon
            size={36}
            className="absolute top-4 left-12 -rotate-12 text-accent-yellow group-hover:text-accent-yellow/90 group-focus:text-accent-yellow/90"
          />
          <SparklesIcon
            size={28}
            className="absolute top-11 right-8 rotate-12 text-accent-yellow group-hover:text-accent-yellow/90 group-focus:text-accent-yellow/90"
          />
          <SparklesIcon
            size={32}
            className="absolute top-4 right-12 rotate-12 text-accent-purple group-hover:text-accent-purple/90 group-focus:text-accent-purple/90"
          />
          <SparklesIcon
            size={28}
            className="absolute top-13 left-7 rotate-6 text-accent-purple group-hover:text-accent-purple/90 group-focus:text-accent-purple/90"
          />
          <UserRound
            size={70}
            strokeWidth={1}
            className="mt-10 text-foreground/90 group-hover:text-foreground/80 group-focus:text-foreground/80"
          />
        </div>
      </div>
    ),
    content: (
      <div>
        I actively participated in hackathons and programming competitions. For example, I was a finalist in the VK Cup 22/23.
      </div>
    ),
  },
  {
    title: "Commercial Experience",
    icon: (
      <div className="cursor-pointer transform-gpu transition-all group-hover:scale-50 group-focus:scale-50 duration-300 leading-none justify-center flex border-dotted rounded-xl border-2 border-accent-purple text-foreground/90 group-hover:text-foreground/80 group-focus:text-foreground/80">
        <div className="text-lg font-medium flex flex-col py-2 transition-transform ">
          <div className="transform hover:scale-125 transition-transform">
            eat
            <span className="text-accent-yellow group-hover:text-accent-yellow/90 group-focus:text-accent-yellow/90">
              ();
            </span>
          </div>
          <div className="transform hover:scale-125 transition-transform">
            code
            <span className="text-accent-yellow group-hover:text-accent-yellow/90 group-focus:text-accent-yellow/90">
              ();
            </span>
          </div>
          <div className="transform hover:scale-125 transition-transform">
            sleep
            <span className="text-accent-yellow group-hover:text-accent-yellow/90 group-focus:text-accent-yellow/90">
              ();
            </span>
          </div>
          <div className="transform hover:scale-125 transition-transform">
            repeat
            <span className="text-accent-yellow group-hover:text-accent-yellow/90 group-focus:text-accent-yellow/90">
              ();
            </span>
          </div>
        </div>
      </div>
    ),
    content: (
      <div>
        Now I'm a full-stack developer at Enterteam. I'm involved in developing a web application using TypeScript, SvelteKit and other technologies.
      </div>
    ),
  },
];

