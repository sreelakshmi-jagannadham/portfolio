import ProjectHero from "../components/project/ProjectHero";
import ProjectGallery from "../components/project/ProjectGallery";

function ProjectDetails() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <ProjectHero />

      {/* Project Overview (we'll move this to its own component next) */}

      {/* Key Features */}

      {/* Project Gallery */}

      <ProjectGallery />

    </div>
  );
}

export default ProjectDetails;