import { PlanCard } from "./ui/plan-card";

export default function PlanSection() {
  return (
    <section>
      <div className="lg:h-svh flex flex-col justify-evenly items-center py-10 md:py-0">
        <div className="text-center max-w-xs sm:max-w-xl flex flex-col gap-4 mb-10 md:my-0">
          <h2 className="text-2xl sm:text-[40px] font-semibold text-dark-10">
            Nossos Planos
          </h2>
          <p className="text-sm sm:text-lg text-dark-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </p>
        </div>
        <div className="flex justify-center gap-5 md:gap-0 flex-col md:flex-row lg:w-[970px] xl:w-[1170px] 2xl:w-[1280px] lg:justify-between">
          <PlanCard title="Bronze" price={28} />
          <PlanCard
            title="Prata"
            price={57}
            background="bg-dark-10"
            baseColor="dark-40"
            paragraphColor="dark-30"
            flag
          />
          <PlanCard title="Ouro" price={94} />
        </div>
      </div>
    </section>
  );
}
