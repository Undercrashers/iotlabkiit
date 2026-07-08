import ProjectCustomisation from "@/components/project-customisation/ProjectCustomisation";
import ProjectCarousel from "@/components/project-carousel/ProjectCarousel";
import React from "react";
import Achievements from "@/components/achievements/Achievements";

const ProjectsPage = () => {
  return (
    <section>
      <ProjectCustomisation />
      <ProjectCarousel />
      <Achievements />
    </section>
  );
};

export default ProjectsPage;
