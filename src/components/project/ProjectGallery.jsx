function ProjectGallery({ project }) {
  return (
    <section className="py-20 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Visual Showcase
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Project <span className="text-blue-500">Gallery</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-4 leading-7">
            Screenshots and simulation results from the Smart Electronic
            Voting Machine.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {project.gallery?.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-slate-800/80
                border border-slate-700
                rounded-2xl
                overflow-hidden
                hover:border-blue-500/50
                hover:-translate-y-2
                transition-all duration-300
              "
            >

              {/* Image */}
              <div className="relative h-64 bg-slate-900 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/80
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />

              </div>

              {/* Gallery Information */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-400 leading-6">
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

export default ProjectGallery;