import { motion } from "framer-motion";
import experience from "../data/experience";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Professional Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="text-blue-500">Experience</span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto leading-7">
            Internship, training programs, and practical engineering
            experience that have strengthened my technical skills.
          </p>
        </motion.div>


        {/* ================= EXPERIENCE CARDS ================= */}

        <div className="mt-16 space-y-8">

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                group
                relative
                bg-slate-800/80
                backdrop-blur-md
                border
                border-slate-700
                rounded-3xl
                p-8
                md:p-10
                hover:border-blue-500/50
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-blue-500/5
                transition-all duration-300
              "
            >

              {/* Top Accent */}
              <div
                className="
                  absolute
                  top-0
                  left-10
                  right-10
                  h-1
                  rounded-b-full
                  bg-blue-500/0
                  group-hover:bg-blue-500
                  transition-all duration-300
                "
              />

              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

                {/* Role & Company */}
                <div>

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-blue-500/10
                        border
                        border-blue-500/20
                        flex
                        items-center
                        justify-center
                        text-blue-400
                      "
                    >
                      <FaBriefcase />
                    </div>

                    <div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-blue-400 font-medium">
                        {item.company}
                      </p>

                    </div>

                  </div>

                </div>


                {/* Duration & Location */}
                <div className="text-slate-400 space-y-3">

                  <div className="flex items-center gap-3">

                    <FaCalendarAlt className="text-blue-400" />

                    <span>{item.duration}</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <FaMapMarkerAlt className="text-blue-400" />

                    <span>{item.location}</span>

                  </div>

                </div>

              </div>


              {/* Divider */}
              <div className="border-t border-slate-700 mt-8" />


              {/* Description */}
              <ul className="mt-8 space-y-4">

                {item.description.map((point, i) => (

                  <li
                    key={i}
                    className="text-slate-300 flex items-start gap-3 leading-7"
                  >

                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />

                    <span>{point}</span>

                  </li>

                ))}

              </ul>


              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-3">

                {item.technologies.map((tech, i) => (

                  <span
                    key={i}
                    className="
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-medium
                      bg-blue-500/10
                      border
                      border-blue-500/20
                      text-blue-300
                      hover:bg-blue-500/20
                      hover:border-blue-500/40
                      transition
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;