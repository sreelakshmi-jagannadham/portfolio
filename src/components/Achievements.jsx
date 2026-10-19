import { motion } from "framer-motion";
import achievements from "../data/achievements";

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-slate-950 text-white py-24 px-6 overflow-hidden scroll-mt-24"
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
          <p className="text-yellow-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Milestones
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="text-blue-500">Achievements</span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto leading-7">
            Highlights from my academic, technical, and engineering journey.
          </p>
        </motion.div>


        {/* ================= ACHIEVEMENT CARDS ================= */}

        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item, index) => (

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
                overflow-hidden
                hover:border-yellow-500/40
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-yellow-500/5
                transition-all duration-300
              "
            >

              {/* Background Number */}
              <div className="absolute top-4 right-6 text-7xl font-black text-slate-700/30 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* Icon */}
              <div
                className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-yellow-500/10
                  border
                  border-yellow-500/20
                  flex
                  items-center
                  justify-center
                  text-4xl
                  group-hover:scale-110
                  transition-transform duration-300
                "
              >
                {item.icon}
              </div>


              {/* Title */}
              <h3 className="relative mt-7 text-2xl font-bold text-white">
                {item.title}
              </h3>


              {/* Description */}
              <p className="relative mt-4 text-slate-400 leading-7">
                {item.description}
              </p>


              {/* Accent */}
              <div
                className="
                  mt-7
                  h-1
                  w-12
                  rounded-full
                  bg-yellow-500
                  group-hover:w-20
                  transition-all duration-300
                "
              />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;