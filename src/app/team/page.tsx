import Hero from "@/components/team/Hero";
import React from "react";
import DreamTeam from "@/components/dreamTeam/DreamTeam";
import Coordinators from "@/components/coordinators/page";
import TeamLead from "@/components/teamLead/TeamLead";
import Mentor from "@/components/mentor/Mentor";


const page = () => {
  return (
    <main>
      <Hero />
      <Mentor />
      <Coordinators />
      <TeamLead />
      <DreamTeam />
    </main>
  );
};

export default page;
