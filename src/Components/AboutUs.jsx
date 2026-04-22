import { createElement } from "react";
import { motion } from "framer-motion";
import { Award, Leaf, TrendingUp, Users } from "lucide-react";
import { Images } from "../assets/Images/Images";

const focusAreas = [
  {
    title: "Child-centred rehabilitation",
    description:
      "Early intervention for developmental delays, learning disabilities, and communication challenges.",
    icon: Award,
    image: Images.childRehabImage,
    imageAlt:
      "A therapist assisting a patient during a rehabilitation session.",
  },
  {
    title: "Inclusive education support",
    description:
      "Teacher and caregiver training that helps children participate fully in mainstream classrooms.",
    icon: Users,
    image: Images.inclusiveEducation,
    imageAlt:
      "A caregiver supporting inclusive participation during rehabilitation.",
  },
  {
    title: "Elder care and mobility",
    description:
      "Therapy support for stroke, dementia, mobility decline, and age-related communication needs.",
    icon: Leaf,
    image: Images.elderCareImage,
    imageAlt:
      "A healthcare professional reviewing care plans with an older adult.",
  },
  {
    title: "Vocational reintegration",
    description:
      "Return-to-work and return-to-learning pathways for adults rebuilding independence after injury or disability.",
    icon: TrendingUp,
    image: Images.vocationalReintegrationImage,
    imageAlt:
      "A rehabilitation professional supporting an adult rebuilding independence.",
  },
];

const MotionDiv = motion.div;

const AboutSection = () => {
  return (
    <section id="aim" className="scroll-mt-24 py-16 lg:py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="lg:text-lg text-xl font-semibold tracking-widest uppercase text-yellow-600 ">
              Our Aim
            </span>

            <h2 className="lg:text-3xl text-4xl lg:text-5xl font-bold text-black mt-3 mb-5 leading-tight font-[serif] ">
              Advancing{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent italic">
                Functional Independence
              </span>{" "}
              Through Coordinated Rehabilitation
            </h2>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-5">
              i-Able Rehabilitation exists to advance holistic,
              interdisciplinary rehabilitation practices across the lifespan.
              We focus on meaningful participation at home, in school, at work,
              and in the community.
            </p>

            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-5">
              Our team brings together occupational therapists,
              physiotherapists, speech therapists, and learning disability
              specialists to design coordinated care pathways that respond to
              physical, cognitive, communicative, and psychosocial needs.
            </p>

            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-7">
              We work alongside families, schools, caregivers, and employers to
              create supportive environments where rehabilitation gains can be
              sustained beyond the clinic.
            </p>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-black text-sm">
                  Interdisciplinary teamwork at the core
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Integrated care pathways help each person receive support that
                  is connected, practical, and focused on real-life outcomes.
                </p>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {focusAreas.map(
              ({ title, description, icon, image, imageAlt }, i) => (
              <MotionDiv
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300 group "
              >
                <div className="relative h-28 overflow-hidden bg-gray-100">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 object-[0%30%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
                  <div className="absolute left-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm">
                    {createElement(icon, {
                      className:
                        "w-5 h-5 text-yellow-500 transition group-hover:scale-110",
                    })}
                  </div>
                </div>

                <div className="p-5 pt-4">
                  <p className="text-sm font-semibold text-black leading-snug">
                    {title}
                  </p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    {description}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
