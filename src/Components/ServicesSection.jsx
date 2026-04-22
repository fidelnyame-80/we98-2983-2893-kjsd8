import { createElement } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Briefcase,
  HeartHandshake,
  Home,
  Users,
} from "lucide-react";
import { Images } from "../assets/Images/Images";

const services = [
  {
    icon: Brain,
    label: "Child & Family",
    title: "Child-centred rehabilitation programs",
    description:
      "Early intervention services for developmental delays, learning disabilities, and communication challenges built around each child and family.",
    focus: "Development, communication, and family-centred therapy plans.",
    image: Images.childRehab,
    imageAlt:
      "A child receiving guided rehabilitation support from a therapist.",
  },
  {
    icon: Users,
    label: "Inclusive Learning",
    title: "Inclusive education support",
    description:
      "Teacher and caregiver training, adapted learning materials, and school collaboration that strengthen participation in mainstream classrooms.",
    focus: "Caregiver coaching, classroom participation, and school inclusion.",
    image: Images.inclusiveEducation,
    imageAlt:
      "A learner receiving inclusive education support in a classroom setting.",
  },
  {
    icon: Activity,
    label: "Mobility & Aging",
    title: "Elderly care and functional independence",
    description:
      "Physiotherapy, occupational therapy, and speech therapy tailored to stroke, dementia, mobility decline, and other age-related conditions.",
    focus: "Mobility, cognition, communication, and everyday function.",
    image: Images.elderlyCare,
    imageAlt:
      "An older adult receiving rehabilitation support focused on mobility and care.",
  },
  {
    icon: HeartHandshake,
    label: "Integrated Care",
    title: "Interdisciplinary care pathways",
    description:
      "Joint assessments and coordinated service planning across occupational therapy, physiotherapy, speech therapy, and learning disability support.",
    focus:
      "Joined-up assessments and practical care planning across disciplines.",
    image: Images.interdisciplinaryCare,
    imageAlt:
      "Rehabilitation professionals collaborating on an interdisciplinary care plan.",
  },
  {
    icon: Briefcase,
    label: "Return To Work",
    title: "Vocational and return-to-work rehabilitation",
    description:
      "Support for adults re-entering education, employment, or entrepreneurship through job readiness and workplace adaptation strategies.",
    focus: "Education, employment, and workplace adaptation pathways.",
    image: Images.vocationalReintegrationImage,
    imageAlt:
      "An adult receiving rehabilitation support for work and vocational reintegration.",
  },
  {
    icon: Home,
    label: "Home & Community",
    title: "Caregiver empowerment and community engagement",
    description:
      "Training, awareness, and practical resources that help families and caregivers sustain rehabilitation gains at home, in school, and in the community.",
    focus: "Home routines, community inclusion, and caregiver confidence.",
    image: Images.caregiverEmpowerment,
    imageAlt:
      "A caregiver supporting rehabilitation activities in a home or community environment.",
  },
];

const MotionDiv = motion.div;

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-[#050505] py-16 lg:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.16),transparent_60%)]" />
      <div
        aria-hidden="true"
        className="absolute left-0 top-24 h-48 w-48 rounded-full bg-yellow-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-16 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl"
      />

      <div className="relative container mx-auto px-4 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-14"
        >
          <span className="text-xl font-semibold tracking-widest uppercase text-yellow-300">
            What We Do
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-3 leading-tight">
            Rehabilitation services that connect{" "}
            <span className="font-[serif] font-semibold italic bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              people, systems, and outcomes
            </span>
          </h2>

          <p className="text-white/68 text-base lg:text-lg">
            Our work combines direct therapy, school and workplace inclusion,
            collaborative care planning, and caregiver support to promote
            long-term functional independence.
          </p>
        </MotionDiv>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(
            ({ icon, label, title, description, focus, image, imageAlt }, i) => (
            <MotionDiv
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] shadow-[0_20px_70px_-42px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1 hover:border-yellow-300/70 hover:shadow-[0_28px_80px_-38px_rgba(234,179,8,0.32)]"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {label}
                </div>
                <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-black/80 text-yellow-300 shadow-lg ring-1 ring-yellow-300/25 backdrop-blur-sm">
                  {createElement(icon, {
                    className: "h-5 w-5",
                  })}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow-300">
                    Service {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-yellow-300/80 to-transparent" />
                </div>

                <h3 className="font-heading text-xl font-semibold leading-tight text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/64">
                  {description}
                </p>

                <div className="mt-5 rounded-2xl bg-black/45 px-4 py-3 ring-1 ring-white/10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-yellow-200/80">
                    Care Focus
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/72">
                    {focus}
                  </p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
