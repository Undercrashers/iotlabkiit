"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Card from "../ui/Card";
import { fetchAllMembersData } from "@/actions/teams";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  domain?: string;
  avatar?: {
    url: string;
  };
  github?: string;
  linkedIn?: string;
  instagram?: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Card
        className="w-full max-w-[240px] aspect-[3/4] shadow-team-glow transition-all duration-500 hover:shadow-card-hover hover:scale-105 cursor-pointer border border-team-light-blue/20 overflow-hidden"
        padding="0"
      >
        <div className="relative w-full h-full">
          {/* Background Image */}
          {member.avatar?.url ? (
            <Image
              src={member.avatar.url}
              alt={member.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
              <span className="text-4xl font-bold text-white/50">
                {member.name.charAt(0)}
              </span>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-lg font-bold mb-1">{member.name}</h3>
            <p className="text-blue-200 text-sm">{member.position}</p>
          </div>
        </div>
      </Card>

      {/* Social Media Icons */}
      <div
        className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
      >
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-team-medium-blue/90 backdrop-blur-sm p-2 rounded-full hover:bg-team-accent-blue/90 transition-colors duration-200 shadow-lg"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
        )}
        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-team-medium-blue/90 backdrop-blur-sm p-2 rounded-full hover:bg-team-accent-blue/90 transition-colors duration-200 shadow-lg"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        )}
        {member.instagram && (
          <a
            href={member.instagram}
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

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const members = await fetchAllMembersData();
      if (members) {
        setTeamMembers(members);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="min-h-screen bg-team-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-team-glow-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-team-accent-blue rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-team-light-blue rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-6 ">
            MEET THE DREAM TEAM
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white max-w-4xl mx-auto leading-relaxed">
            &quot;Talent wins games, but teamwork and intelligence win
            championships.&quot;
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
