import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBullseye,
  FaMicrochip,
  FaBrain,
  FaWifi,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
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
            Who I Am
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-7">
            Get to know more about me and my engineering journey.
          </p>
        </motion.div>


        {/* ================= MAIN CONTENT ================= */}

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Glow */}
              <div
                className="
                  absolute
                  -inset-4
                  bg-blue-500/10
                  rounded-3xl
                  blur-2xl
                "
              />

              {/* Engineering Card */}
              <div
                className="
                  relative
                  w-72
                  h-72
                  sm:w-80
                  sm:h-80
                  rounded-3xl
                  bg-slate-900
                  border
                  border-slate-800
                  shadow-2xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  p-8
                  hover:border-blue-500/50
                  transition-all duration-300
                "
              >

                <div
                  className="
                    w-20
                    h-20
                    rounded-2xl
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                    text-blue-400
                    text-4xl
                  "
                >
                  <FaMicrochip />
                </div>

                <h3 className="text-2xl font-bold mt-7">
                  ECE Engineer
                </h3>

                <p className="text-slate-400 mt-3 leading-6">
                  Building intelligent and practical electronic systems.
                </p>

                <div className="flex gap-3 mt-6">

                  <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300">
                    Embedded
                  </span>

                  <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300">
                    AI
                  </span>

                  <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300">
                    IoT
                  </span>

                </div>

              </div>

            </div>

          </motion.div>


          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-3xl md:text-4xl font-bold">
              Electronics & Communication
              <span className="text-blue-500"> Engineering Student</span>
            </h3>

            <p className="mt-6 text-slate-300 leading-8">
              I'm a passionate Electronics & Communication Engineering
              student with a strong interest in Embedded Systems,
              Semiconductor Technology, Artificial Intelligence, and IoT.
            </p>

            <p className="mt-5 text-slate-400 leading-8">
              I enjoy transforming ideas into real-world engineering
              projects through programming, electronics, system design,
              and continuous learning.
            </p>


            {/* ================= INTERESTS ================= */}

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                <FaMicrochip className="text-blue-400" />
                Embedded Systems
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                <FaMicrochip className="text-blue-400" />
                Semiconductor
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                <FaBrain className="text-blue-400" />
                Artificial Intelligence
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                <FaWifi className="text-blue-400" />
                IoT
              </span>

            </div>


            {/* ================= INFORMATION CARDS ================= */}

            <div className="mt-10 grid sm:grid-cols-2 gap-5">

              {/* Education */}
              <div
                className="
                  bg-slate-800/80
                  border
                  border-slate-700
                  p-6
                  rounded-2xl
                  hover:border-blue-500/50
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <FaGraduationCap />
                  </div>

                  <h4 className="text-blue-400 font-semibold">
                    Education
                  </h4>

                </div>

                <p className="mt-4 text-slate-300 leading-6">
                  B.Tech ECE
                  <br />
                  VR Siddhartha Engineering College
                </p>

              </div>


              {/* Goal */}
              <div
                className="
                  bg-slate-800/80
                  border
                  border-slate-700
                  p-6
                  rounded-2xl
                  hover:border-blue-500/50
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <FaBullseye />
                  </div>

                  <h4 className="text-blue-400 font-semibold">
                    Career Goal
                  </h4>

                </div>

                <p className="mt-4 text-slate-300 leading-6">
                  Embedded Systems &
                  <br />
                  Semiconductor Engineer
                </p>

              </div>

            </div>


            {/* Explore Link */}
            <a
              href="#skills"
              className="
                inline-flex
                items-center
                gap-2
                mt-8
                text-blue-400
                hover:text-blue-300
                font-semibold
                group
              "
            >
              Explore my technical skills
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;