import {
  FaCode,
  FaMicrochip,
  FaProjectDiagram,
  FaMemory,
  FaDesktop,
  FaCogs,
  FaBug,
  FaLightbulb,
  FaPuzzlePiece,
  FaPaintBrush,
} from "react-icons/fa";

function ProjectSkillsUsed({ project }) {
  const skillIcons = [
    <FaCode />,
    <FaMicrochip />,
    <FaProjectDiagram />,
    <FaMemory />,
    <FaDesktop />,
    <FaCogs />,
    <FaBug />,
    <FaLightbulb />,
    <FaPuzzlePiece />,
    <FaPaintBrush />,
  ];

  return (
    <section className="py-20 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-green-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Technical Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Skills <span className="text-green-400">Demonstrated</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-4 leading-7">
            Technical and problem-solving skills applied throughout the
            development of the Smart Electronic Voting Machine.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

          {project.skillsUsed?.map((skill, index) => (
            <div
              key={skill}
              className="
                group
                min-h-[150px]
                flex
                flex-col
                items-center
                justify-center
                text-center
                gap-4
                p-6
                rounded-2xl
                bg-slate-800/80
                border border-slate-700
                hover:border-green-500/50
                hover:-translate-y-2
                hover:bg-slate-800
                transition-all duration-300
              "
            >

              {/* Icon */}
              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-green-500/10
                  border border-green-500/20
                  flex
                  items-center
                  justify-center
                  text-green-400
                  text-xl
                  group-hover:bg-green-500/20
                  group-hover:scale-110
                  transition-all duration-300
                "
              >
                {skillIcons[index] || <FaCogs />}
              </div>

              {/* Skill Name */}
              <span className="text-slate-200 font-medium">
                {skill}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectSkillsUsed;