import { motion } from "framer-motion";
import education from "../data/education";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Academic Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="text-blue-500">Education</span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto leading-7">
            My academic journey in Electronics & Communication Engineering
            and the foundation behind my technical interests.
          </p>
        </motion.div>


        {/* ================= EDUCATION CARDS ================= */}

        <div className="space-y-8">

          {education.map((item, index) => (

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

              {/* Degree Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-6">

                {/* Icon */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                    text-blue-400
                    text-3xl
                    flex-shrink-0
                    group-hover:scale-110
                    transition-transform duration-300
                  "
                >
                  <FaGraduationCap />
                </div>

                {/* Degree Details */}
                <div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <p className="text-blue-400 mt-2 font-medium">
                    {item.branch}
                  </p>

                </div>

              </div>


              {/* College */}
              <div className="mt-8">

                <p className="text-xl md:text-2xl text-slate-200 font-semibold">
                  {item.college}
                </p>

              </div>


              {/* Details */}
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* Duration */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    bg-slate-900/60
                    border
                    border-slate-700
                    rounded-xl
                    p-4
                  "
                >
                  <FaCalendarAlt className="text-blue-400 flex-shrink-0" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Duration
                    </p>

                    <p className="text-slate-300 mt-1">
                      {item.duration}
                    </p>
                  </div>
                </div>


                {/* Location */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    bg-slate-900/60
                    border
                    border-slate-700
                    rounded-xl
                    p-4
                  "
                >
                  <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Location
                    </p>

                    <p className="text-slate-300 mt-1">
                      {item.location}
                    </p>
                  </div>
                </div>


                {/* CGPA */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    bg-slate-900/60
                    border
                    border-slate-700
                    rounded-xl
                    p-4
                  "
                >
                  <FaStar className="text-yellow-400 flex-shrink-0" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Academic Performance
                    </p>

                    <p className="text-slate-300 mt-1">
                      CGPA: {item.cgpa}
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;