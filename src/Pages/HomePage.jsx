import AboutSection from "../Components/AboutUs";
import HeroSection from "../Components/Hero";
import OutcomesSection from "../Components/FAQ";
import ServicesSection from "../Components/ServicesSection";

const HomePage = () => {
  return (
    <main className="bg-[#050505] text-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OutcomesSection />
    </main>
  );
};

export default HomePage;
