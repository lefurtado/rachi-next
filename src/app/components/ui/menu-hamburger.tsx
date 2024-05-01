export function MenuHamburger() {
  return (
    <div className="md:hidden flex flex-col gap-1 cursor-pointer">
      <div className="h-[2px] w-6 bg-dark-10"></div>
      <div className="h-[2px] w-6 bg-dark-10"></div>
      <div className="h-[2px] w-3 bg-dark-10 self-end"></div>
    </div>
  );
}
