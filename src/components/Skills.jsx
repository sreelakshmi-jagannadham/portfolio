import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <p className="text-slate-400 text-center mt-4">
          Technologies and tools I use to build engineering solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-3xl p-8 hover:-translate-y-2 hover:bg-slate-700 transition duration-300 shadow-lg"
            >

              <div className="text-5xl">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold mt-5">
                {skill.category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {skill.technologies.map((tech, i) => (

                  <span
                    key={i}
                    className="bg-blue-600 px-3 py-2 rounded-lg text-sm"
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

export default Skills;