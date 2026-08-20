import {
  FaFingerprint,
  FaIdCard,
  FaCloud,
  FaWifi,
  FaLock,
  FaMobileAlt,
} from "react-icons/fa";

function ProjectFutureScope({ project }) {
  const scopeIcons = [
    <FaFingerprint />,
    <FaIdCard />,
    <FaCloud />,
    <FaWifi />,
    <FaLock />,
    <FaMobileAlt />,
  ];

  return (
    <section className="py-20 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Future Development
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Future <span className="text-purple-400">Scope</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-4 leading-7">
            Potential enhancements that can improve the security,
            scalability, connectivity, and usability of the voting system.
          </p>

        </div>

        {/* Future Scope Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {project.futureScope?.map((item, index) => (
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
                hover:border-purple-500/50
                hover:-translate-y-2
                transition-all duration-300
              "
            >

              {/* Background Number */}
              <div className="absolute top-4 right-6 text-6xl font-black text-slate-700/40 select-none">
                0{index + 1}
              </div>

              {/* Icon */}
              <div
                className="
                  relative
                  w-14
                  h-14
                  rounded-2xl
                  bg-purple-500/10
                  border border-purple-500/20
                  flex
                  items-center
                  justify-center
                  text-purple-400
                  text-2xl
                  group-hover:bg-purple-500/20
                  group-hover:scale-110
                  transition-all duration-300
                "
              >
                {scopeIcons[index] || <FaCloud />}
              </div>

              {/* Title */}
              <h3 className="relative text-xl md:text-2xl font-bold text-purple-400 mt-7">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative text-slate-400 mt-4 leading-7">
                {item.description}
              </p>

              {/* Accent */}
              <div className="mt-6 h-1 w-12 rounded-full bg-purple-500 group-hover:w-20 transition-all duration-300" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectFutureScope;