export const whatsappContact = {
  display: "+233 20 986 5603",
  digits: "233209865603",
};

export const secondaryCallContact = {
  display: "+233 24 456 2172",
  digits: "233244562172",
};

export const callContacts = [whatsappContact, secondaryCallContact];

export const contactMethods = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    description:
      "Send us a WhatsApp message for appointment availability, service guidance, and quick support from the i-Able team.",
    actions: [
      {
        label: `WhatsApp ${whatsappContact.display}`,
        href: `https://wa.me/${whatsappContact.digits}`,
        isExternal: true,
      },
    ],
  },
  {
    key: "call",
    label: "Call",
    description:
      "Speak directly with our team for help choosing the right service and booking a convenient appointment time.",
    actions: callContacts.map(({ display, digits }) => ({
      label: `Call ${display}`,
      href: `tel:+${digits}`,
      isExternal: false,
    })),
  },
];

export const appointmentServices = [
  "Child-centred rehabilitation programs",
  "Inclusive education support",
  "Elderly care and functional independence",
  "Interdisciplinary care pathways",
  "Vocational and return-to-work rehabilitation",
  "Caregiver empowerment and community engagement",
];

export const appointmentSessionTypes = ["Online", "In person"];

export const bookingHighlights = [
  {
    title: "Flexible scheduling",
    description:
      "Share the date and time that work best for you, and we will follow up to confirm availability.",
  },
  {
    title: "Support for all age groups",
    description:
      "Appointments can be requested for children, adults, older adults, caregivers, and schools.",
  },
  {
    title: "Follow-up through your preferred channel",
    description:
      "We can continue the conversation by phone or WhatsApp after you submit your request.",
  },
];
