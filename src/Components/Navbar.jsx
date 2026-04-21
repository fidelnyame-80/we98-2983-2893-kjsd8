import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Images } from "../assets/Images/Images";

const navLinks = [
  { label: "Home", to: "/#home" },
  { label: "Aim", to: "/#aim" },
  { label: "Services", to: "/#services" },
  { label: "Outcomes", to: "/#outcomes" },
  { label: "Contact", to: "/contact" },
];

const MotionDiv = motion.div;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/#home"
            aria-label="i-Able Rehabilitation home"
            className="flex items-center"
          >
            <img
              src={Images.logoImage}
              alt="i-Able Rehabilitation logo"
              className="h-11 w-11 rounded-full object-cover border border-yellow-500/30 shadow-sm"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  (isContactPage && link.to === "/contact") ||
                  (!isContactPage &&
                    location.pathname === "/" &&
                    location.hash === link.to.replace("/", ""))
                    ? "text-yellow-300"
                    : "text-white/70 hover:text-yellow-300"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact#appointment-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-full border border-white/10 p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-b border-white/10 bg-black/95"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/10 py-2 text-lg font-medium text-white/75 hover:text-yellow-300"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact#appointment-form"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold text-base mt-2"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
