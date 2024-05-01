import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <section className="bg-pc-background bg-cover bg-center">
      <div className="bg-dark-10 bg-opacity-70 flex flex-col items-center text-dark-40 text-center pb-32">
        <div className="max-w-xs sm:max-w-lg flex flex-col gap-4 my-16">
          <h3 className="font-sora font-semibold text-2xl sm:text-[40px]">Contato</h3>
          <p className="text-dark-30 text-sm sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col gap-10">
          <input
            className="border-b-2 bg-dark-10 bg-opacity-0 text-dark-40 border-dark-40 focus:outline-none placeholder:text-dark-40 py-1 pr-10 text-sm sm:text-lg"
            type="email"
            placeholder="Seu melhor e-mail"
          />
          <Button className="w-full">Enviar</Button>
        </div>
      </div>
    </section>
  );
}
