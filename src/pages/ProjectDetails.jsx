import votingMachine from "../data/votingMachine";

import ProjectHero from "../components/project/ProjectHero";
import ProjectOverview from "../components/project/ProjectOverview";
import ProjectFeatures from "../components/project/ProjectFeatures";
import ProjectHardware from "../components/project/ProjectHardware";
import ProjectWorkingFlow from "../components/project/ProjectWorkingFlow";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectChallenges from "../components/project/ProjectChallenges";
import ProjectFutureScope from "../components/project/ProjectFutureScope";
import ProjectSkillsUsed from "../components/project/ProjectSkillsUsed";
import ProjectFooter from "../components/project/ProjectFooter";

function ProjectDetails() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <ProjectHero project={votingMachine} />

      <ProjectOverview project={votingMachine} />

      <ProjectFeatures project={votingMachine} />

      <ProjectHardware project={votingMachine} />

      <ProjectWorkingFlow project={votingMachine} />

      <ProjectGallery project={votingMachine} />

      <ProjectChallenges project={votingMachine} />

      <ProjectFutureScope project={votingMachine} />

      <ProjectSkillsUsed project={votingMachine} />

      <ProjectFooter project={votingMachine} />

    </div>
  );
}

export default ProjectDetails;