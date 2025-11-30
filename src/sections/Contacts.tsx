import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import MyButton from "@/components/ui/my-button";
import { cn } from "@/lib/utils";
import { IconBrandTelegram } from "@tabler/icons-react";
import { GithubOriginal } from "devicons-react";

function Contacts({ className }: { className: string }) {
  return (
    <div id="contacts" className={cn("-mt-20", className)}>
      <div className="pt-28 pb-2">
          <NeonGradientCard
            type="contacts"
            borderSize={1}
            neonColors={{
              firstColor: "rgba(74, 144, 226, 0.5)",
              secondColor: "rgba(107, 70, 193, 0.5)",
            }}
          >
            <div className="px-2 py-4 md:p-6 lg:p-10 bg-background rounded-[20px] flex items-center justify-center gap-2 md:gap-8">
              <div className="flex items-center w-2/7">
                <a href="https://github.com/bd986650" target="_blank" rel="noopener noreferrer">
                  <MyButton
                    text="github"
                    iconLeft={
                      <GithubOriginal
                        size=""
                        strokeWidth={1.5}
                        id="github"
                        className="size-3 md:size-6"
                      />
                    }
                  />
                </a>
              </div>
              <div className="text-center flex items-center justify-center w-3/7">
                <div className="text-[1rem] sm:text-2xl md:text-4xl font-semibold">
                  Get&nbsp;in&nbsp;touch
                </div>
              </div>
              <div className="flex items-center justify-end w-2/7">
                <a href="https://t.me/chouqxx" target="_blank" rel="noopener noreferrer">
                  <MyButton
                    text="@chouqxx"
                    iconLeft={
                      <IconBrandTelegram
                        strokeWidth={1.5}
                        className="p-0 size-3 md:size-6"
                      />
                    }
                  />
                </a>
              </div>
            </div>
          </NeonGradientCard>
        </div>
    </div>
  );
}

export default Contacts;
