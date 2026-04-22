import { createElement, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Clock3,
  MessageCircle,
  PhoneCall,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Images } from "../assets/Images/Images";
import {
  bookingHighlights,
  contactMethods,
  appointmentServices,
} from "../data/contactData";

const MotionDiv = motion.div;

const contactIcons = {
  whatsapp: MessageCircle,
  call: PhoneCall,
};

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  notes: "",
};

const ContactPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <main className="relative overflow-x-clip bg-[#050505] pt-24">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.16),transparent_58%)]" />
      <div
        aria-hidden="true"
        className="absolute left-0 top-40 h-52 w-52 rounded-full bg-yellow-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-28 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl"
      />

      <section className="relative pb-10 pt-8 lg:pb-14 lg:pt-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="min-w-0 max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
                Contact Us
              </span>

              <h1 className="mt-5 max-w-[12ch] font-heading text-[2.6rem] font-bold leading-[1.05] text-white sm:max-w-none sm:text-5xl lg:text-6xl">
                Book an appointment with{" "}
                <span className="font-[serif] font-semibold italic text-yellow-300">
                  i-Able Rehabilitation.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 lg:text-lg">
                Request a session, ask a question, or speak with our team
                directly by WhatsApp or phone.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-4 shadow-[0_20px_50px_-36px_rgba(0,0,0,0.9)] backdrop-blur-sm">
                  <CalendarDays className="h-5 w-5 text-yellow-300" />
                  <p className="mt-4 text-sm font-semibold text-white">
                    Direct booking
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Share the details we need to prepare for your first
                    conversation.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-4 shadow-[0_20px_50px_-36px_rgba(0,0,0,0.9)] backdrop-blur-sm">
                  <MessageCircle className="h-5 w-5 text-yellow-300" />
                  <p className="mt-4 text-sm font-semibold text-white">
                    WhatsApp support
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Message us at +233 20 986 5603 for quick appointment
                    support.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-4 shadow-[0_20px_50px_-36px_rgba(0,0,0,0.9)] backdrop-blur-sm">
                  <Clock3 className="h-5 w-5 text-yellow-300" />
                  <p className="mt-4 text-sm font-semibold text-white">
                    Fast follow-up
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Our team will contact you to confirm the best available
                    session time.
                  </p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="min-w-0 overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 shadow-[0_30px_80px_-38px_rgba(0,0,0,0.9)]"
            >
              <div className="relative h-72 overflow-hidden sm:h-80">
                <img
                  src={Images.interdisciplinaryCare}
                  alt="A rehabilitation team collaborating on care planning."
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute left-6 right-6 bottom-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
                    Book A Session
                  </p>
                  <p className="mt-3 max-w-lg text-2xl font-semibold leading-tight text-white">
                    Families, caregivers, and partners have one clear path to
                    begin care.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="relative pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] xl:gap-8">
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="min-w-0 space-y-6"
            >
              <div className="rounded-[30px] border border-white/10 bg-[#101010] p-6 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.95)] sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-300/12 text-yellow-300 ring-1 ring-yellow-300/20">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
                      Contact Channels
                    </p>
                    <h2 className="mt-1 font-heading text-2xl font-semibold text-white">
                      Reach us your way
                    </h2>
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {contactMethods.map(
                    ({ key, label, href, description, actionLabel, isExternal }) => (
                      <a
                        key={key}
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="group overflow-hidden rounded-3xl border border-white/10 bg-black/35 p-4 transition-all duration-300 hover:border-yellow-300/70 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_-34px_rgba(217,119,6,0.45)]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0 flex gap-3">
                            <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300 ring-1 ring-yellow-300/20">
                              {createElement(contactIcons[key], {
                                className: "h-5 w-5",
                              })}
                            </div>
                            <div className="min-w-0">
                              <p className="text-base font-semibold text-white">
                                {label}
                              </p>
                              <p className="mt-1 break-words text-sm leading-6 text-white/62">
                                {description}
                              </p>
                            </div>
                          </div>

                          <ArrowUpRight className="h-4 w-4 shrink-0 text-white/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-yellow-300" />
                        </div>

                        <p className="mt-4 text-sm font-medium text-yellow-300">
                          {actionLabel}
                        </p>
                      </a>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-black p-6 text-white shadow-[0_24px_70px_-40px_rgba(0,0,0,0.9)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
                  Booking Notes
                </p>

                <div className="mt-5 space-y-4">
                  {bookingHighlights.map(({ title, description }) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-yellow-300" />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-white/70">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+233209865603"
                  className="mt-6 flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-300/40 hover:bg-white/10"
                >
                  <PhoneCall className="mt-0.5 h-5 w-5 shrink-0 text-yellow-300" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      +233 20 986 5603
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      Use this number for both WhatsApp messages and direct
                      calls.
                    </p>
                  </div>
                </a>
              </div>
            </MotionDiv>

            <MotionDiv
              id="appointment-form"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="min-w-0 scroll-mt-32 rounded-[32px] border border-white/10 bg-[#101010] p-6 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.95)] sm:p-8"
            >
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
                    Book Appointment
                  </p>
                  <h2 className="mt-2 font-heading text-3xl font-semibold leading-tight text-white">
                    Request a session
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/64">
                    Share the key details here, and our team will follow up by
                    phone or WhatsApp to confirm the appointment.
                  </p>
                </div>

                <Link
                  to="/#services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-yellow-300 transition hover:text-yellow-200"
                >
                  View services first
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <form className="mt-8" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-white/72">
                    Full name
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-300 focus:bg-black/70"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-white/72">
                    Phone number
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-300 focus:bg-black/70"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-white/72">
                    Email address
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-300 focus:bg-black/70"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-white/72">
                    Service needed
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-300 focus:bg-black/70"
                    >
                      <option value="">Select a service</option>
                      {appointmentServices.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-white/72">
                    Preferred date
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-300 focus:bg-black/70"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-white/72">
                    Preferred time
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-300 focus:bg-black/70"
                    />
                  </label>
                </div>

                <label className="mt-5 flex flex-col gap-2 text-sm font-medium text-white/72">
                  Additional notes
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="5"
                    className="w-full rounded-3xl border border-white/10 bg-black/45 px-4 py-3 text-sm leading-6 text-white outline-none transition focus:border-yellow-300 focus:bg-black/70"
                  />
                </label>

                {isSubmitted && (
                  <div className="mt-6 rounded-3xl border border-yellow-300/30 bg-yellow-300/10 px-4 py-3 text-sm leading-6 text-yellow-100">
                    Appointment request received. Our team will contact you
                    shortly to confirm availability.
                  </div>
                )}

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-white/55">
                    Submit your request and our team will follow up quickly to
                    confirm availability, answer your questions, and help you
                    take the next step with confidence.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto"
                  >
                    Submit Request
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </MotionDiv>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
