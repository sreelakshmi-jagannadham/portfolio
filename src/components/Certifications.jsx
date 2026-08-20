import { motion } from "framer-motion";
import certifications from "../data/certifications";
import {
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Certifications() {
  return (
    <section
      id="certifications"
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
            Credentials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="text-blue-500">Certifications</span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto leading-7">
            Courses and certifications that strengthened my technical
            knowledge and engineering skills.
          </p>
        </motion.div>


        {/* ================= CERTIFICATION CARDS ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((item, index) => (

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
                overflow-hidden
                hover:border-blue-500/50
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-blue-500/5
                transition-all duration-300
              "
            >

              {/* Background Number */}
              <div className="absolute top-4 right-6 text-7xl font-black text-slate-700/30 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* Certificate Icon */}
              <div
                className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  flex
                  items-center
                  justify-center
                  group-hover:scale-110
                  transition-transform duration-300
                "
              >
                <FaCertificate className="text-3xl text-blue-400" />
              </div>


              {/* Certification Title */}
              <h3 className="relative mt-7 text-xl md:text-2xl font-bold text-white">
                {item.title}
              </h3>


              {/* Organization */}
              <p className="relative mt-4 text-slate-400 leading-6">
                {item.organization}
              </p>


              {/* Year */}
              <div className="relative mt-5 inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-300 text-sm font-medium">
                  {item.year}
                </span>
              </div>


              {/* Optional Certificate Link */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    relative
                    inline-flex
                    items-center
                    gap-2
                    mt-6
                    text-blue-400
                    hover:text-blue-300
                    font-semibold
                    transition
                  "
                >
                  View Certificate
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}


              {/* Accent */}
              <div
                className="
                  mt-7
                  h-1
                  w-12
                  rounded-full
                  bg-blue-500
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

export default Certifications;