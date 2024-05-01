import { Button } from "./button";

interface Props {
  background?: string;
  baseColor?: string;
  title: string;
  price: number;
  paragraphColor?: string;
  flag?: boolean;
}

export function PlanCard({
  background,
  baseColor,
  title,
  price,
  paragraphColor,
  flag,
}: Props) {
  return (
    <div className={`${background} bg-brand-color-light max-w-fit rounded-lg`}>
      <div className="flex flex-col items-center py-14 xl:px-9 gap-12 relative">
        <h3
          className={`text-${baseColor} text-dark-10 font-sora font-semibold text-2xl`}
        >
          {title}
        </h3>
        {flag && (
          <div className="uppercase absolute top-24 bg-brand-color rounded-2xl text-dark-40 font-semibold text-sm px-8 py-1 tracking-widest">
            Preferido
          </div>
        )}
        <div className={`text-${baseColor} text-dark-10 flex font-bold`}>
          <span className="text-xl">R$</span>
          <span className="text-5xl">{price}</span>
          <span className="text-2xl mt-4">/mês</span>
        </div>
        <p
          className={`text-${paragraphColor} text-dark-20 max-w-[300px] text-center`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          mi quis euismod ultrices.
        </p>
        <Button className="px-20 lg:px-24">Assinar</Button>
      </div>
    </div>
  );
}
