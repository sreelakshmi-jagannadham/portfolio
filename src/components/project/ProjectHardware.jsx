function ProjectHardware({ project }) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Hardware <span className="text-blue-500">Used</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Hardware components used to build and implement the electronic
            voting system.
          </p>
        </div>

        {/* Hardware Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {project.hardware?.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-slate-800/80
                border border-slate-700
                rounded-2xl
                p-7
                hover:border-blue-500/50
                hover:-translate-y-2
                hover:bg-slate-800
                transition-all duration-300
              "
            >

              {/* Icon */}
              <div className="text-4xl mb-6">
                {item.icon}
              </div>

              {/* Hardware Name */}
              <h3 className="text-2xl font-bold text-white">
                {item.name}
              </h3>

              {/* Purpose */}
              <p className="mt-4 text-slate-400 leading-7">
                {item.purpose}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectHardware;