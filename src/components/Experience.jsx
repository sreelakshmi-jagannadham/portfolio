import experience from "../data/experience";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl font-black text-white">
            My <span className="text-blue-500">Experience</span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            Internship, training programs, and practical engineering experience.
          </p>

        </div>

        {/* Experience Cards */}

        <div className="mt-16 space-y-8">

          {experience.map((item, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-blue-500 transition duration-300"
            >

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">

                <div>

                  <h3 className="text-3xl font-bold text-white">
                    {item.role}
                  </h3>

                  <div className="flex items-center gap-2 mt-3 text-blue-400">

                    <FaBriefcase />

                    <span>{item.company}</span>

                  </div>

                </div>

                <div className="text-slate-400 space-y-2">

                  <div className="flex items-center gap-2">

                    <FaCalendarAlt />

                    <span>{item.duration}</span>

                  </div>

                  <div className="flex items-center gap-2">

                    <FaMapMarkerAlt />

                    <span>{item.location}</span>

                  </div>

                </div>

              </div>

              {/* Description */}

              <ul className="mt-8 space-y-3">

                {item.description.map((point, i) => (

                  <li
                    key={i}
                    className="text-slate-300 flex gap-3"
                  >
                    <span className="text-blue-500">✔</span>

                    <span>{point}</span>

                  </li>

                ))}

              </ul>

              {/* Technologies */}

              <div className="mt-8 flex flex-wrap gap-3">

                {item.technologies.map((tech, i) => (

                  <span
                    key={i}
                    className="bg-blue-600 px-4 py-2 rounded-lg text-white"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;