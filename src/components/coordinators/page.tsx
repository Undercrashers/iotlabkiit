"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import Card from "../ui/Card";
import { fetchCordinatorData } from "@/actions/teams";

export interface Coordinator {
  id: string;
  name: string;
  linkedIn?: string;
  position?: string;
  year?: string;
  github?: string;
  email?: string;
  domain?: string;
  instagram?: string;
  avatar?: {
    url: string;
  };
}

interface CoordinatorCardProps {
  member: Coordinator;
  idx: number;
}

const Coordinators = () => {
  const [coordinators, setCoordinators] = useState<Coordinator[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCordinatorData();
      if (data) setCoordinators(data);
    };
    fetchData();
  }, []);

  const CoordinatorCard = ({ member, idx }: CoordinatorCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={`relative group flex justify-center ${idx % 2 === 0 ? "sm:translate-y-6" : "sm:-translate-y-6"
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        id="coordinators"
      >
        <Card
          className="w-full max-w-[240px] aspect-[3/4] transition-all duration-500 group-hover:scale-105 cursor-pointer overflow-hidden"
          padding="0"
        >
          <div className="relative w-full h-full">
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
              <h3 className="text-lg font-bold mb-1 font-montserrat">
                {member.name}
              </h3>
              <p className="text-blue-200 text-sm font-montserrat">
                ~ {member.position}
              </p>
            </div>
          </div>
        </Card>

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
              <Github className="w-4 h-4 text-white" />
            </a>
          )}
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-team-medium-blue/90 backdrop-blur-sm p-2 rounded-full hover:bg-team-accent-blue/90 transition-colors duration-200 shadow-lg"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          )}
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-team-medium-blue/90 backdrop-blur-sm p-2 rounded-full hover:bg-team-accent-blue/90 transition-colors duration-200 shadow-lg"
            >
              <Instagram className="w-4 h-4 text-white" />
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="text-white py-16 px-6">
      <div className="text-center mb-28">
        <h2 className="text-3xl font-black font-montserrat mb-2">
          MEET OUR COORDINATORS
        </h2>
        <p className="text-2xl font-montserrat font-medium">
          &quot;Small steps, big vision—that&apos;s what makes a great
          coordinator.&quot;
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-screen-xl mx-auto">
        {coordinators.map((member, idx) => (
          <CoordinatorCard key={member.id} member={member} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Coordinators;
