import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Images } from "../assets/Images/Images";

const MotionDiv = motion.div;

const leadershipTeam = [
  {
    role: "Director",
    title: "Director, i-Able Rehabilitation",
    image: Images.directorPortrait,
    imageAlt: "Portrait of the Director of i-Able Rehabilitation.",
    imageClassName: "object-[50%_82%]",
    summary:
      "The Director provides strategic leadership for i-Able Rehabilitation, advancing a standard of care centered on dignity, functional independence, and coordinated interdisciplinary service delivery across the lifespan.",
    emphasisTitle: "Strategic and clinical direction",
    emphasisText:
      "Organisational leadership remains focused on functional independence, community inclusion, and coordinated support for clients, families, and caregivers.",
  },
  {
    role: "Assistant Director",
    title: "Assistant Director, i-Able Rehabilitation",
    image: Images.assistantDirectorPortrait,
    imageAlt: "Portrait of the Assistant Director of i-Able Rehabilitation.",
    imageClassName: "object-top",
    summary:
      "The Assistant Director supports programme coordination and service delivery, helping ensure that rehabilitation pathways remain responsive, collaborative, and aligned with the organisation's standards of care.",
    emphasisTitle: "Operational and programme leadership",
    emphasisText:
      "Implementation across teams is guided with attention to continuity of care, multidisciplinary coordination, and service quality for clients and families.",
  },
];

const LeadershipSection = () => {
  return (
    <section
      id="leadership"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-[#050505] py-16 lg:py-20"
    >
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.14),transparent_60%)]" />
      <div className="container mx-auto px-4 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-14"
        >
          <span className="text-xl font-semibold tracking-widest uppercase text-yellow-300">
            Leadership
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Leadership with a{" "}
            <span className="font-[serif] font-semibold italic bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              clear rehabilitation mandate
            </span>
          </h2>

          <p className="mt-3 text-base text-white/68 lg:text-lg">
            The work of i-Able Rehabilitation is shaped by leadership that
            keeps dignity, inclusion, and functional independence at the
            center of every service pathway.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {leadershipTeam.map(
            (
              {
                role,
                title,
                image,
                imageAlt,
                imageClassName,
                summary,
                emphasisTitle,
                emphasisText,
              },
              index
            ) => (
              <MotionDiv
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_32px_90px_-52px_rgba(0,0,0,0.9)]"
              >
                <div className="grid items-center gap-8 p-5 sm:p-6">
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="absolute inset-6 rounded-full bg-yellow-400/10 blur-3xl"
                    />
                    <div className="relative mx-auto max-w-sm overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0c0c] p-2 shadow-[0_32px_80px_-44px_rgba(0,0,0,0.95)]">
                      <img
                        src={image}
                        alt={imageAlt}
                        className={`aspect-[5/5.4] w-full rounded-[22px] object-cover ${imageClassName}`}
                      />
                    </div>
                  </div>

                  <div>
                    <span className="inline-flex items-center rounded-full border border-yellow-300/30 bg-yellow-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-yellow-200">
                      {role}
                    </span>

                    <h3 className="mt-5 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                      {title}
                    </h3>

                    <p className="mt-5 text-sm leading-relaxed text-white/70 lg:text-base">
                      {summary}
                    </p>

                    <div className="mt-6 flex items-start gap-3 rounded-2xl bg-black/35 px-4 py-4 ring-1 ring-white/10">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {emphasisTitle}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/60 lg:text-sm">
                          {emphasisText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            )
          )}
        </MotionDiv>
      </div>
    </section>
  );
};

export default LeadershipSection;
