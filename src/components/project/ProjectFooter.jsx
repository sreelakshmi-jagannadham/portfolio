import { Link } from "react-router-dom";
import {
  FaGithub,
  FaArrowLeft,
  FaPlayCircle,
} from "react-icons/fa";

function ProjectFooter({ project }) {
  return (
    <section className="py-20 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto text-center">

        {/* Completion Message */}
        <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
          Project Completed
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Interested in the implementation?
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-7">
          Explore the source code and try the interactive simulation to
          understand the design and implementation of this project.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">

          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-500
              hover:-translate-y-1
              transition-all duration-300
              font-semibold
            "
          >
            <FaGithub />
            View Source Code
          </a>

          {/* Live Simulation */}
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-xl
              bg-green-600
              hover:bg-green-500
              hover:-translate-y-1
              transition-all duration-300
              font-semibold
            "
          >
            <FaPlayCircle />
            Live Simulation
          </a>

          {/* Back to Portfolio */}
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-xl
              bg-slate-800
              border border-slate-700
              hover:border-blue-500
              hover:text-blue-400
              hover:-translate-y-1
              transition-all duration-300
              font-semibold
            "
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>

        </div>

        {/* Bottom Divider */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <p className="text-slate-600 text-sm">
            Smart Electronic Voting Machine • Embedded Systems Project
          </p>
        </div>

      </div>
    </section>
  );
}

export default ProjectFooter;