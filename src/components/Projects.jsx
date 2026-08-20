import { Link } from "react-router-dom";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center">

          <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-7">
            A selection of engineering and software projects I've worked on,
            combining electronics, embedded systems, and intelligent software.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project) => (

            <div
              key={project.id}
              className="
                group
                bg-slate-800/70
                backdrop-blur-md
                border border-slate-700
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:border-blue-500/50
                hover:-translate-y-2
                hover:shadow-blue-500/10
                transition-all duration-300
              "
            >

              {/* Project Image */}
              <div className="relative h-56 bg-slate-700 overflow-hidden">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition-transform duration-500
                    "
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl opacity-50">📷</span>
                  </div>
                )}

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-900/80
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />

              </div>

              {/* Project Content */}
              <div className="p-7">

                {/* Category */}
                {project.category && (
                  <p className="text-blue-400 text-xs uppercase tracking-widest font-semibold">
                    {project.category}
                  </p>
                )}

                {/* Title */}
                <h3 className="text-2xl font-bold mt-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-400 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        font-medium
                        bg-blue-500/10
                        border border-blue-500/20
                        text-blue-300
                        hover:bg-blue-500/20
                        transition
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Navigation Button */}
                {project.route ? (
                  <Link
                    to={project.route}
                    className="
                      mt-8
                      block
                      w-full
                      text-center
                      bg-blue-600
                      hover:bg-blue-500
                      hover:-translate-y-1
                      py-3
                      rounded-xl
                      font-semibold
                      transition-all duration-300
                    "
                  >
                    View Project →
                  </Link>
                ) : (
                  <button
                    disabled
                    className="
                      mt-8
                      w-full
                      bg-slate-700
                      text-slate-400
                      py-3
                      rounded-xl
                      cursor-not-allowed
                    "
                  >
                    Coming Soon
                  </button>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;