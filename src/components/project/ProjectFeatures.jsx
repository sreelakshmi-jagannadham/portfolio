import { FaArrowRight } from "react-icons/fa";

function ProjectFeatures({ project }) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
            System Capabilities
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Key Features
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-7">
            Core functionalities implemented to make the voting system
            secure, reliable, and user-friendly.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {project.features.map((feature, index) => (
            <div
              key={feature.title}
              className="
                group
                relative
                overflow-hidden
                bg-slate-800/70
                backdrop-blur-md
                border border-slate-700
                rounded-2xl
                p-7
                hover:border-blue-500/50
                hover:-translate-y-2
                transition-all duration-300
              "
            >

              {/* Feature Number */}
              <div className="absolute top-5 right-6 text-slate-700 text-5xl font-black select-none">
                0{index + 1}
              </div>

              {/* Icon */}
              <div
                className="
                  relative
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-500/10
                  border border-blue-500/20
                  flex
                  items-center
                  justify-center
                  text-3xl
                  group-hover:bg-blue-500/20
                  group-hover:scale-110
                  transition-all duration-300
                "
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mt-7">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 mt-3 leading-7">
                {feature.description}
              </p>

              {/* Bottom Accent */}
              <div className="flex items-center gap-2 mt-6 text-blue-400 text-sm font-semibold">
                <span>Implemented Feature</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectFeatures;