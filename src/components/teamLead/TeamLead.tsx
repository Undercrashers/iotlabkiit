"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";
import Card from "../ui/Card";
import { fetchLeadData } from "@/actions/teams";

interface TeamLead {
  id: string;
  name: string;
  position: string;
  domain: string;
  year: string;
  email?: string;
  github?: string;
  linkedIn?: string;
  instagram?: string;
  avatar?: {
    url: string;
  };
}

const TeamLead = () => {
  const [teamLeads, setTeamLeads] = useState<TeamLead[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const leads = await fetchLeadData();
      if (leads) {
        setTeamLeads(leads);
      }
    };
    fetchData();
  }, []);

  const TeamLeadCard = ({ lead }: { lead: TeamLead }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div id="leads" className="relative group flex justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <Card
          className="w-full max-w-[240px] aspect-[3/4] transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"

          padding="0"
        >
          <div className="relative w-full h-full">
            {lead.avatar?.url ? (
              <Image
                src={lead.avatar.url}
                alt={lead.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/50">
                  {lead.name.charAt(0)}
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-1">
                {lead.name} ({lead.domain})
              </h3>
              <p className="text-blue-200 text-sm">{lead.position}</p>
            </div>
          </div>
        </Card>

        <div
          className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
        >
          {lead.github && (
            <a
              href={lead.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-team-medium-blue/90 backdrop-blur-sm p-2 rounded-full hover:bg-team-accent-blue/90 transition-colors duration-200 shadow-lg"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          )}
          {lead.linkedIn && (
            <a
              href={lead.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-team-medium-blue/90 backdrop-blur-sm p-2 rounded-full hover:bg-team-accent-blue/90 transition-colors duration-200 shadow-lg"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          )}
          {lead.instagram && (
            <a
              href={lead.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-team-medium-blue/90 backdrop-blur-sm p-2 rounded-full hover:bg-team-accent-blue/90 transition-colors duration-200 shadow-lg"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="text-white px-10">
      <div className="max-w-7xl mx-auto py-10 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-3xl font-bold">MEET OUR TEAM LEADS</h1>
        <p className="font-bold text-xl text-center max-w-2xl">
          &quot;Leadership is not about being in charge. It is about taking care
          of those in your charge&quot;
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-10">
        {teamLeads.map((lead) => (
          <TeamLeadCard key={lead.id} lead={lead} />
        ))}
      </div>
    </section>
  );
};

export default TeamLead;
