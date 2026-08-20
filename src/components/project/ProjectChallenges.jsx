import { FaExclamationTriangle, FaLightbulb } from "react-icons/fa";

function ProjectChallenges({ project }) {
  return (
    <section className="py-20 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Engineering & Problem Solving
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Engineering <span className="text-red-400">Challenges</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-4 leading-7">
            Key technical challenges encountered during development and
            the solutions implemented to overcome them.
          </p>

        </div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {project.challenges?.map((challenge, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-slate-800/80
                border border-slate-700
                rounded-2xl
                p-7
                overflow-hidden
                hover:border-red-500/50
                hover:-translate-y-2
                transition-all duration-300
              "
            >

              {/* Background Number */}
              <div className="absolute top-4 right-6 text-6xl font-black text-slate-700/40 select-none">
                0{index + 1}
              </div>

              {/* Challenge Icon */}
              <div
                className="
                  relative
                  w-14
                  h-14
                  rounded-2xl
                  bg-red-500/10
                  border border-red-500/20
                  flex
                  items-center
                  justify-center
                  text-red-400
                  text-xl
                  group-hover:bg-red-500/20
                  group-hover:scale-110
                  transition-all duration-300
                "
              >
                <FaExclamationTriangle />
              </div>

              {/* Challenge */}
              <h3 className="relative text-xl md:text-2xl font-bold text-red-400 mt-7">
                {challenge.title}
              </h3>

              {/* Solution */}
              <div className="relative flex items-start gap-3 mt-5">

                <FaLightbulb className="text-yellow-400 mt-1 flex-shrink-0" />

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">
                    Solution
                  </p>

                  <p className="text-slate-300 leading-7">
                    {challenge.solution}
                  </p>
                </div>

              </div>

              {/* Accent */}
              <div className="mt-6 h-1 w-12 rounded-full bg-red-500 group-hover:w-20 transition-all duration-300" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectChallenges;