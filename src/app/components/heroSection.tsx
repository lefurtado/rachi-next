import { Button } from "./ui/button";
import illustration from "@/assets/images/illustration1.svg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-brand-color-light">
      <div className="mx-6 md:mx-auto h-svh lg:max-w-[970px] xl:max-w-[1170px] 2xl:max-w-screen-xl flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center">
        <div className="flex flex-col gap-4 lg:gap-12">
          <h1 className="font-sora font-semibold text-dark-10 text-2xl md:text-5xl 2xl:text-5xl mt-6">
            Rachi, <br />
            é tudo que você <br />
            precisa em um só lugar.
          </h1>
          <Button>Cadastrar-se</Button>
        </div>
        <Image
          src={illustration}
          priority
          alt="Um menino sentado em cima de uma pedra, numa floresta, com um notebook no colo, estilo cartoon"
        />
      </div>
    </div>
  );
}
