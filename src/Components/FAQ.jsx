import { useState } from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const outcomeTracks = [
  {
    title: "Child-centred rehabilitation programs",
    inputs:
      "A multidisciplinary team of occupational therapists, physiotherapists, speech and language therapists, and learning disability specialists.",
    activity:
      "Deliver early intervention services for developmental delays, learning disabilities, and communication challenges.",
    outputs:
      "Early intervention sessions for children with coordinated family support.",
    shortTerm:
      "Improved developmental milestones, communication, and school participation.",
    longTerm:
      "Lifelong independence and fewer disability-related barriers.",
  },
  {
    title: "Inclusive education support systems",
    inputs:
      "Inclusive education policy frameworks, school partnerships, and practical learning support tools.",
    activity:
      "Train teachers and caregivers while adapting learning materials for diverse learners.",
    outputs:
      "Teacher workshops, adapted curricula, and stronger classroom support plans.",
    shortTerm:
      "Increased teacher capacity for inclusive classrooms and better participation for children with diverse needs.",
    longTerm: "Sustainable inclusive education systems.",
  },
  {
    title: "Elderly care and active aging",
    inputs:
      "Rehabilitation equipment, therapy spaces, and community outreach resources.",
    activity:
      "Provide mobility, communication, and cognitive support through elderly-focused therapy programs.",
    outputs:
      "Therapy sessions that address stroke, dementia, mobility decline, and social participation.",
    shortTerm:
      "Enhanced mobility, communication, and social engagement among older adults.",
    longTerm: "Active aging and reduced institutionalization.",
  },
  {
    title: "Integrated interdisciplinary care pathways",
    inputs:
      "Shared collaboration protocols and coordinated assessment processes across disciplines.",
    activity:
      "Establish joint assessments and integrated care pathways among rehabilitation professionals.",
    outputs: "Integrated care plans grounded in interdisciplinary teamwork.",
    shortTerm:
      "Holistic treatment that responds to physical, cognitive, communication, and psychosocial needs.",
    longTerm: "A stronger interdisciplinary rehabilitation culture.",
  },
  {
    title: "Vocational and return-to-work services",
    inputs:
      "Vocational rehabilitation staff, employer partnerships, and workplace adaptation strategies.",
    activity:
      "Support adults with disabilities or post-injury conditions to return to education, work, or entrepreneurship.",
    outputs:
      "Job readiness training, workplace assessments, and inclusive employment planning.",
    shortTerm:
      "Increased employment and re-engagement opportunities for adults with disabilities.",
    longTerm: "Economic inclusion and reduced dependency.",
  },
  {
    title: "Caregiver empowerment and community engagement",
    inputs:
      "Community engagement resources, caregiver training modules, and public awareness efforts.",
    activity:
      "Offer caregiver education, family support, and community awareness campaigns.",
    outputs: "Caregiver workshops, practical resources, and community forums.",
    shortTerm: "Empowered families, stronger home support, and reduced stigma.",
    longTerm:
      "Inclusive communities that sustain rehabilitation across the lifespan.",
  },
];

const OutcomesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="outcomes"
      className="scroll-mt-24 border-t border-white/10 bg-[#080808] py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xl font-semibold tracking-widest uppercase text-yellow-300 font-[serif] ">
            Expected Outcomes
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-3">
            From coordinated inputs to{" "}
            <span className="font-[serif] font-semibold italic bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              long-term impact
            </span>
          </h2>

          <p className="text-white/68 text-base lg:text-lg">
            Each focus area is designed with clear inputs, practical activities,
            measurable outputs, and outcomes that strengthen independence over
            time.
          </p>
        </MotionDiv>

        <div className="max-w-4xl mx-auto space-y-3">
          {outcomeTracks.map((item, index) => (
            <div
              key={item.title}
              className="rounded-lg border border-white/10 bg-[#111111]"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center gap-4"
              >
                <span className="font-semibold text-white text-sm lg:text-base">
                  {item.title}
                </span>
                <span className="text-yellow-300 text-lg shrink-0">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-sm text-white/66 leading-relaxed space-y-3">
                  <p>
                    <span className="font-semibold text-white">Inputs:</span>{" "}
                    {item.inputs}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Activities:</span>{" "}
                    {item.activity}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Outputs:</span>{" "}
                    {item.outputs}
                  </p>
                  <p>
                    <span className="font-semibold text-white">
                      Short-term outcomes:
                    </span>{" "}
                    {item.shortTerm}
                  </p>
                  <p>
                    <span className="font-semibold text-white">
                      Long-term outcomes:
                    </span>{" "}
                    {item.longTerm}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
