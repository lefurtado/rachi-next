import logo from "@/assets/images/logo.svg";
import Image from "next/image";

export function Logo() {
  return (
    <Image className="cursor-pointer" src={logo} alt="" />
  )
}