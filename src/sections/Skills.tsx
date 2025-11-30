import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { SkillsTree } from "@/sections/skills-tree";
import Header from "@/components/ui/header";
import { cn } from "@/lib/utils";

function Skills({ className }: { className: string }) {
  return (
    <div id="skills" className={cn("", className)}>
      <Header text="Skills" align="center" />
      <div className="grid grid-cols-1 md:grid-cols-2 pt-[4vh] gap-4 items-start">
        <NeonGradientCard
          type="skill"
          className="max-w-md items-center justify-center text-center mx-auto h-auto"
          borderRadius={20}
          borderSize={1}
          neonColors={{
            firstColor: "rgba(74, 144, 226, 0.5)",
            secondColor: "rgba(107, 70, 193, 0.5)",
          }}
        >
          <SkillsTree type="soft" />
        </NeonGradientCard>
        <NeonGradientCard
          type="skill"
          className="max-w-md items-center justify-center text-center mx-auto h-auto"
          borderSize={1}
          borderRadius={20}
          neonColors={{
            firstColor: "rgba(107, 70, 193, 0.5)",
            secondColor: "rgba(74, 144, 226, 0.5)",
          }}
        >
          <SkillsTree type="hard" />
        </NeonGradientCard>
      </div>
    </div>
  );
}

export default Skills;
