import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Images } from "../assets/Images/Images";

const MotionDiv = motion.div;

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-black text-white"
    >
      <img
        src={Images.heroImg}
        alt=""
        aria-hidden="true"
        className= "absolute inset-0 h-full w-full object-cover "
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/60 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.28),transparent_14%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.16),transparent_28%)]" />

      <div className="relative container mx-auto px-4 lg:px-8 min-h-[100svh] flex items-center py-28 lg:py-32">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl"
        >
         

          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl mb-4">
            i-Able{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic">
              Rehabilitation
            </span>
          </h1>

          <p className="text-sm uppercase tracking-[0.26em] text-yellow-100/80 mb-6">
            Functional independence across all age groups
          </p>

          <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            We advance holistic, interdisciplinary rehabilitation practices
            that promote functional independence across all age groups.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black/75 text-white font-semibold text-base backdrop-blur-sm hover:bg-black/90 transition"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </a>

            <Link
              to="/contact#appointment-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold text-base hover:opacity-90 transition"
            >
              Book an Appointment
            </Link>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HeroSection;
