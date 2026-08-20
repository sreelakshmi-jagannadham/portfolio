function ProjectWorkingFlow({ project }) {
  return (
    <section className="py-20 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
            System Process
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Working <span className="text-blue-500">Flow</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-4 leading-7">
            Step-by-step operation of the Smart Electronic Voting Machine.
          </p>
        </div>

        {/* Flow Steps */}
        <div className="space-y-6">

          {project.workingFlow?.map((item, index) => (
            <div
              key={index}
              className="
                group
                flex
                items-start
                gap-6
                bg-slate-800/80
                border
                border-slate-700
                rounded-2xl
                p-7
                hover:border-blue-500/50
                hover:bg-slate-800
                hover:-translate-y-1
                transition-all duration-300
              "
            >

              {/* Step Number */}
              <div
                className="
                  flex-shrink-0
                  w-14
                  h-14
                  rounded-full
                  bg-blue-600
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                  shadow-lg
                  shadow-blue-600/20
                "
              >
                {item.step}
              </div>

              {/* Step Content */}
              <div className="pt-1">

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-400 leading-7">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectWorkingFlow;