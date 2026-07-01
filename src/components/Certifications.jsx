import certifications from "../data/certifications";
import { FaCertificate } from "react-icons/fa";

function Certifications() {
  return (
    <section id="certifications" className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            My <span className="text-blue-500">Certifications</span>
          </h2>

          <p className="mt-5 text-slate-400 text-lg">
            Courses and certifications that strengthened my technical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-3xl p-8 transition duration-300"
            >
              <FaCertificate className="text-4xl text-blue-500" />

              <h3 className="mt-6 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {item.organization}
              </p>

              <p className="mt-2 text-blue-400">
                {item.year}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;