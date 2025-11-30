import { NeonGradientCard } from "./neon-gradient-card";

function CircleImage({ type = "hero" }: { type?: "hero" | "navbar" }) {
  const style =
    type === "hero"
      ? "absolute -left-[5vw] sm:left-[0vw] md:left-[5vw] -top-[20vh] sm:-top-[14vh] md:-top-[20vh] lg:-top-[15vh] xl:-top-[150px] size-[180px] scale-60 sm:scale-75 md:scale-100 rounded-full z-[999]"
      : "w-8 h-8 scale-100";

  return (
    <div className={style}>
      <NeonGradientCard
        type="quote"
        borderRadius={100}
        borderSize={1}
        className={type === "navbar" ? "aspect-square w-full h-full" : ""}
        neonColors={{
          firstColor: "rgba(74, 144, 226, 0.5)",
          secondColor: "rgba(107, 70, 193, 0.5)",
        }}
      >
        <div className="w-full h-full rounded-full overflow-clip aspect-square">
          <img
            className="object-cover w-full h-full rounded-full aspect-square"
            src="/me.png"
            width={192}
            height={192}
            alt=""
          />
        </div>
      </NeonGradientCard>
    </div>
  );
}

export default CircleImage;
