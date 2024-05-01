export function MenuDesktop() {
  return (
    <ul className="hidden md:flex justify-between px-6 font-medium text-dark-20 gap-16">
      <li className="cursor-pointer hover:text-brand-color">Funcionalidades</li>
      <li className="cursor-pointer hover:text-brand-color">App</li>
      <li className="cursor-pointer hover:text-brand-color">Planos</li>
      <li className="cursor-pointer hover:text-brand-color">Contato</li>
    </ul>
  )
}