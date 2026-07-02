import { Link } from "react-router-dom";
import votingMachine from "../../data/votingMachine";

function ProjectHero() {
  return (
    <section className="py-20 px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-10"
        >
          ← Back to Portfolio
        </Link>

        {/* Category */}
        <p className="text-blue-400 uppercase tracking-widest font-semibold">
          {votingMachine.category}
        </p>

        {/* Title */}
        <h1 className="mt-4 text-5xl md:text-7xl font-black">
          {votingMachine.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-4xl text-slate-400 text-lg leading-8">
          {votingMachine.subtitle}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-3 mt-10">

          {votingMachine.technologies.map((tech) => (

            <span
              key={tech}
              className="bg-blue-600/20 border border-blue-500 text-blue-300 px-4 py-2 rounded-full"
            >
              {tech}
            </span>

          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectHero;