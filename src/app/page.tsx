import AppSection from "./components/appSection";
import ContactSection from "./components/contactSection";
import FooterSection from "./components/footerSection";
import HeaderSection from "./components/headerSection";
import HeroSection from "./components/heroSection";
import PlanSection from "./components/planSection";
import WorkSection from "./components/workSection";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <WorkSection />
      <AppSection />
      <PlanSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
