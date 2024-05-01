import { MenuHamburger } from "./ui/menu-hamburger";
import { MenuDesktop } from "./ui/menu-desktop";
import { Logo } from "./ui/logo";

export default function HeaderSection() {
  return (
    <header className="flex sticky top-0 h-16 bg-dark-40 items-center justify-between px-6 xl:px-36 2xl:px-80 z-10">
      <Logo />
      <MenuHamburger />
      <MenuDesktop />
    </header>
  );
}
