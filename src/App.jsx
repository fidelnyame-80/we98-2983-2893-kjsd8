import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (hash) {
        const targetElement = document.querySelector(hash);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, hash]);

  return null;
};

const AppShell = () => {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
};

export default App;
