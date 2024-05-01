import cards from "@/app/data/cards.json";
import Image from "next/image";

export default function WorkSection() {
  return (
    <section className="h-svh sm:h-fit sm:py-16 sm:gap-24 flex flex-wrap items-center justify-center lg:justify-evenly max-w-48 lg:flex-col lg:max-w-full m-auto">
      <h2 className="font-sora text-center font-semibold text-2xl lg:text-4xl text-dark-10">
        Como funciona
      </h2>
      <div className="flex items-center flex-col justify-between lg:flex-row gap-9">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col items-center gap-4 lg:max-w-52">
            <Image src={`/assets/images/${card.image}`} width={60} height={60} alt="" />
            <div className="flex flex-col items-center justify-between gap-1 lg:gap-3">
              <h3 className="font-sora font-semibold lg:text-lg text-dark-10">
                {card.title}
              </h3>
              <p className="text-dark-20 text-sm text-center">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
