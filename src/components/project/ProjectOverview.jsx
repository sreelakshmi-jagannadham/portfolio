import {
  FaMicrochip,
  FaCode,
  FaDesktop,
  FaDatabase,
  FaProjectDiagram,
  FaTools,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";

function ProjectOverview({ project }) {
  const overview = project.overview;

  const overviewItems = [
    {
      label: "Platform",
      value: overview.platform,
      icon: <FaMicrochip />,
    },
    {
      label: "Language",
      value: overview.language,
      icon: <FaCode />,
    },
    {
      label: "Display",
      value: overview.display,
      icon: <FaDesktop />,
    },
    {
      label: "Storage",
      value: overview.storage,
      icon: <FaDatabase />,
    },
    {
      label: "Simulation",
      value: overview.simulation,
      icon: <FaProjectDiagram />,
    },
    {
      label: "IDE",
      value: overview.ide,
      icon: <FaTools />,
    },
    {
      label: "Microcontroller",
      value: overview.microcontroller,
      icon: <FaCogs />,
    },
    {
      label: "Status",
      value: overview.status,
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Technical Specifications
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Project Overview
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-7">
            Core hardware, software, simulation tools, and system
            specifications used in the development of the project.
          </p>

        </div>

        {/* Specification Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {overviewItems.map((item) => (
            <div
              key={item.label}
              className="
                group
                relative
                overflow-hidden
                p-6
                rounded-2xl
                bg-slate-800/70
                backdrop-blur-md
                border border-slate-700
                hover:border-blue-500/50
                hover:-translate-y-2
                transition-all duration-300
              "
            >

              {/* Background Glow */}
              <div
                className="
                  absolute
                  -right-8
                  -top-8
                  w-24
                  h-24
                  rounded-full
                  bg-blue-500/5
                  group-hover:bg-blue-500/10
                  blur-2xl
                  transition
                "
              />

              {/* Icon */}
              <div
                className="
                  relative
                  w-12
                  h-12
                  rounded-xl
                  bg-blue-500/10
                  border border-blue-500/20
                  flex
                  items-center
                  justify-center
                  text-blue-400
                  text-xl
                  group-hover:bg-blue-500/20
                  transition
                "
              >
                {item.icon}
              </div>

              {/* Label */}
              <p className="text-slate-500 text-xs uppercase tracking-widest mt-6">
                {item.label}
              </p>

              {/* Value */}
              <p
                className={`mt-2 text-lg font-semibold ${
                  item.label === "Status"
                    ? "text-green-400"
                    : "text-white"
                }`}
              >
                {item.value}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectOverview;