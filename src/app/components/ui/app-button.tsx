import googlePlay from "@/assets/images/google-play.svg";
import appStore from "@/assets/images/app-store.svg";
import Image from "next/image";

type Platform = "google" | "apple";

interface AppButtonProps {
  platform: Platform;
}

export function AppButton({ platform }: AppButtonProps) {
  return (
    <div>
      {platform === "google" && <Image className="cursor-pointer" src={googlePlay} alt="Google Play" />}
      {platform === "apple" && <Image className="cursor-pointer" src={appStore} alt="App Store" />}
    </div>
  );
}
