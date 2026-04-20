import AboutSection from "../Components/AboutUs";
import HeroSection from "../Components/Hero";
import OutcomesSection from "../Components/FAQ";
import ServicesSection from "../Components/ServicesSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OutcomesSection />
    </main>
  );
};

export default HomePage;
