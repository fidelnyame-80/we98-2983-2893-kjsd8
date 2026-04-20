import { createElement, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Clock3,
  Globe,
  MapPin,
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
  facebook: Globe,
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
    <main className="relative overflow-x-clip bg-[#fffaf1] pt-24">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.22),transparent_58%)]" />
      <div
        aria-hidden="true"
        className="absolute left-0 top-40 h-52 w-52 rounded-full bg-yellow-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-28 h-64 w-64 rounded-full bg-amber-100/40 blur-3xl"
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
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/70 bg-yellow-100/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-700">
                Contact Us
              </span>

              <h1 className="mt-5 max-w-[12ch] text-[2.6rem] font-bold leading-[1.05] text-slate-950 sm:max-w-none sm:text-5xl lg:text-6xl">
                Book an appointment and reach us through the channels your
                clients already use.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 lg:text-lg">
                This page gives visitors a clear way to contact i-Able
                Rehabilitation, explore your social channels, and send an
                appointment request from one place.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-sm">
                  <CalendarDays className="h-5 w-5 text-yellow-600" />
                  <p className="mt-4 text-sm font-semibold text-slate-950">
                    Appointment-ready
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Visitors can submit a booking request without leaving the
                    site.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-sm">
                  <MessageCircle className="h-5 w-5 text-yellow-600" />
                  <p className="mt-4 text-sm font-semibold text-slate-950">
                    Social-first contact
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Facebook, WhatsApp, and call links are ready for your real
                    details.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-sm">
                  <Clock3 className="h-5 w-5 text-yellow-600" />
                  <p className="mt-4 text-sm font-semibold text-slate-950">
                    Fast follow-up
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Use the form to capture the basics before you confirm an
                    appointment.
                  </p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="min-w-0 overflow-hidden rounded-[32px] border border-black/5 bg-slate-950 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.55)]"
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
                    Contact Experience
                  </p>
                  <p className="mt-3 max-w-lg text-2xl font-semibold leading-tight text-white">
                    A dedicated booking page gives families, caregivers, and
                    partners one clear next step.
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
              <div className="rounded-[30px] border border-black/5 bg-white p-6 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.45)] sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-600">
                      Social Channels
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold text-slate-950">
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
                        className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-yellow-300 hover:bg-white hover:shadow-[0_20px_50px_-34px_rgba(217,119,6,0.45)]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0 flex gap-3">
                            <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-yellow-600 ring-1 ring-black/5">
                              {createElement(contactIcons[key], {
                                className: "h-5 w-5",
                              })}
                            </div>
                            <div className="min-w-0">
                              <p className="text-base font-semibold text-slate-950">
                                {label}
                              </p>
                              <p className="mt-1 break-words text-sm leading-6 text-slate-600">
                                {description}
                              </p>
                            </div>
                          </div>

                          <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-yellow-600" />
                        </div>

                        <p className="mt-4 text-sm font-medium text-yellow-700">
                          {actionLabel}
                        </p>
                      </a>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-[30px] border border-black/5 bg-slate-950 p-6 text-white shadow-[0_24px_70px_-40px_rgba(15,23,42,0.6)] sm:p-7">
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

                <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-yellow-300" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Contact page only
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/70">
                        Your placeholder links are already connected here, so you
                        can swap in your real Facebook, WhatsApp, and phone
                        details later without changing the layout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              id="appointment-form"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="min-w-0 scroll-mt-32 rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.45)] sm:p-8"
            >
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-600">
                    Book Appointment
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold leading-tight text-slate-950">
                    Request a session
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                    Collect the key details here, then follow up with the person
                    through phone or WhatsApp to confirm the appointment.
                  </p>
                </div>

                <Link
                  to="/#services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-yellow-700 transition hover:text-yellow-800"
                >
                  View services first
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <form className="mt-8" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    Full name
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Enter full name"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:bg-white"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    Phone number
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter phone number"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:bg-white"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    Email address
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:bg-white"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    Service needed
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:bg-white"
                    >
                      <option value="">Select a service</option>
                      {appointmentServices.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    Preferred date
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:bg-white"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    Preferred time
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:bg-white"
                    />
                  </label>
                </div>

                <label className="mt-5 flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Additional notes
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Share any details that would help us prepare for the appointment."
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition focus:border-yellow-400 focus:bg-white"
                  />
                </label>

                {isSubmitted && (
                  <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-800">
                    Appointment request captured. Replace this placeholder flow
                    with your real submission endpoint whenever you are ready.
                  </div>
                )}

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-slate-500">
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
