import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24 px-6 overflow-hidden"
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
            Technical Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="text-blue-500">Skills</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-7">
            Technologies and tools I use to build practical engineering
            solutions and intelligent electronic systems.
          </p>
        </motion.div>


        {/* ================= SKILL CARDS ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
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
                shadow-lg
                hover:-translate-y-2
                hover:border-blue-500/50
                hover:bg-slate-800
                hover:shadow-blue-500/10
                transition-all duration-300
              "
            >

              {/* Top Accent */}
              <div
                className="
                  absolute
                  top-0
                  left-8
                  right-8
                  h-1
                  rounded-b-full
                  bg-blue-500/0
                  group-hover:bg-blue-500
                  transition-all duration-300
                "
              />

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
                  text-5xl
                  group-hover:scale-110
                  transition-transform duration-300
                "
              >
                {skill.icon}
              </div>

              {/* Category */}
              <h3 className="text-2xl font-bold mt-6">
                {skill.category}
              </h3>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-3">

                {skill.technologies.map((tech, i) => (

                  <span
                    key={i}
                    className="
                      px-3
                      py-2
                      rounded-lg
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

export default Skills;