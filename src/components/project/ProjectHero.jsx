import { Link } from "react-router-dom";
import { FaGithub, FaFilePdf, FaPlayCircle, FaArrowLeft } from "react-icons/fa";
import FadeInSection from "../animations/FadeInSection";

function ProjectHero({ project }) {
  return (
    <FadeInSection>
      <section className="relative overflow-hidden border-b border-slate-800">

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute -top-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">

          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-10"
          >
            <FaArrowLeft className="text-sm" />
            Back to Portfolio
          </Link>

          {/* Category */}
          <p className="text-blue-400 uppercase tracking-[0.25em] font-semibold text-sm">
            {project.category}
          </p>

          {/* Title */}
          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-tight">
            {project.title}
          </h1>

          {/* Gradient Accent */}
          <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

          {/* Subtitle */}
          <p className="mt-8 max-w-4xl text-slate-400 text-lg md:text-xl leading-8">
            {project.subtitle}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-3 mt-10">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  px-4 py-2
                  rounded-full
                  text-sm font-medium
                  bg-slate-800/80
                  border border-slate-700
                  text-slate-300
                  hover:border-blue-500
                  hover:text-blue-300
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-3
                px-6 py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                hover:-translate-y-1
                shadow-lg shadow-blue-600/20
                font-semibold
                transition-all duration-300
              "
            >
              <FaGithub />
              Source Code
            </a>

            <a
              href={project.report}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-3
                px-6 py-3
                rounded-xl
                bg-slate-800
                border border-slate-700
                hover:border-red-500
                hover:text-red-400
                hover:-translate-y-1
                font-semibold
                transition-all duration-300
              "
            >
              <FaFilePdf />
              Project Report
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-3
                px-6 py-3
                rounded-xl
                bg-slate-800
                border border-slate-700
                hover:border-green-500
                hover:text-green-400
                hover:-translate-y-1
                font-semibold
                transition-all duration-300
              "
            >
              <FaPlayCircle />
              Live Simulation
            </a>

          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-3 gap-5 mt-16">

            {/* Status */}
            <div
              className="
                p-6 rounded-2xl
                bg-slate-800/60
                backdrop-blur-md
                border border-slate-700
                hover:border-green-500/50
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Status
              </p>

              <h3 className="text-xl font-bold mt-3 text-green-400">
                {project.status}
              </h3>
            </div>

            {/* Duration */}
            <div
              className="
                p-6 rounded-2xl
                bg-slate-800/60
                backdrop-blur-md
                border border-slate-700
                hover:border-blue-500/50
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Duration
              </p>

              <h3 className="text-xl font-bold mt-3">
                {project.duration}
              </h3>
            </div>

            {/* Category */}
            <div
              className="
                p-6 rounded-2xl
                bg-slate-800/60
                backdrop-blur-md
                border border-slate-700
                hover:border-purple-500/50
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Category
              </p>

              <h3 className="text-xl font-bold mt-3">
                {project.category}
              </h3>
            </div>

          </div>

        </div>
      </section>
    </FadeInSection>
  );
}

export default ProjectHero;