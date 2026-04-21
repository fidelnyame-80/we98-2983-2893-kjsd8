import { Link } from "react-router-dom";
import { Images } from "../assets/Images/Images";
import { contactMethods } from "../data/contactData";

const quickLinks = [
  { label: "Home", to: "/#home" },
  { label: "Aim", to: "/#aim" },
  { label: "Services", to: "/#services" },
  { label: "Outcomes", to: "/#outcomes" },
  { label: "Contact Us", to: "/contact" },
];

const coreFocus = [
  "Child-centred rehabilitation",
  "Inclusive education support",
  "Elderly care and mobility",
  "Vocational reintegration",
];

const collaborativeApproach = [
  "Occupational therapy",
  "Physiotherapy",
  "Speech therapy",
  "Learning disability support",
];

const footerContactLinks = [
  { label: "Book Appointment", to: "/contact#appointment-form", isInternal: true },
  ...contactMethods.map(({ key, label, href, isExternal }) => ({
    key,
    label,
    href,
    isExternal,
  })),
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-14 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={Images.logoImage}
                alt="i-Able Rehabilitation logo"
                className="h-10 w-10 rounded-full object-cover border border-yellow-500/30 shadow-sm"
              />
              <div>
                <span className="block text-lg font-semibold">
                  i-<span className="text-yellow-500">Able</span>
                </span>
              </div>
            </div>

            <p className="text-white/58 text-sm leading-relaxed max-w-xs">
              Holistic, interdisciplinary rehabilitation that promotes
              functional independence across all age groups.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-white/55 transition hover:text-yellow-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Core Focus</h4>
            <div className="flex flex-col gap-2">
              {coreFocus.map((item) => (
                <span key={item} className="text-sm text-white/55">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Collaborative Care</h4>
            <div className="flex flex-col gap-2">
              {collaborativeApproach.map((item) => (
                <span key={item} className="text-sm text-white/55">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact Us</h4>
            <div className="flex flex-col gap-2">
              {footerContactLinks.map((item) => {
                if (item.isInternal) {
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="text-sm text-white/55 transition hover:text-yellow-300"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noreferrer" : undefined}
                    className="text-sm text-white/55 transition hover:text-yellow-300"
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/42">
            Copyright {new Date().getFullYear()} i-Able Rehabilitation (Danpet
            Rehab Center). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
