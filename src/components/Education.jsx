import education from "../data/education";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            My <span className="text-blue-500">Education</span>
          </h2>

          <p className="mt-5 text-slate-400 text-lg">
            My academic journey in Electronics & Communication Engineering.
          </p>
        </div>

        {education.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-3xl border border-slate-700 hover:border-blue-500 transition duration-300 p-10"
          >
            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-3xl">
                <FaGraduationCap />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  {item.degree}
                </h3>

                <p className="text-blue-400 mt-2">
                  {item.branch}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">

              <p className="text-xl text-slate-200 font-semibold">
                {item.college}
              </p>

              <div className="flex flex-wrap gap-8 text-slate-400">

                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  {item.duration}
                </div>

                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  {item.location}
                </div>

                <div className="flex items-center gap-2">
                  <FaStar />
                  CGPA: {item.cgpa}
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Education;