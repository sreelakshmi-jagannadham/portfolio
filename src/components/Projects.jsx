import { Link } from "react-router-dom";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <p className="text-slate-400 text-center mt-4">
          A selection of engineering and software projects I've worked on.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:bg-slate-700 transition duration-300"
            >

              <div className="h-52 bg-slate-700 flex items-center justify-center text-6xl">
                📷
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-300 leading-7">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech, index) => (

                    <span
                      key={index}
                      className="bg-blue-600 px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Navigation Button */}

                {project.route ? (
                  <Link
                     to={project.route}
                     className="mt-8 block w-full text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition"
  >
                     View Project
                    </Link>
                ) : (
                  <button
                     disabled
                     className="mt-8 w-full bg-slate-600 text-slate-300 py-3 rounded-xl cursor-not-allowed"
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