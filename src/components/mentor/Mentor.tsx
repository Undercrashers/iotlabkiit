"use client";

import React, { useEffect, useState } from "react";
import Card from "../ui/Card";
import Image from "next/image";
import { fetchMentorData } from "@/actions/teams";
import { Mail } from "lucide-react";

export interface Mentor {
  id: string;
  name: string;
  linkedIn?: string;
  position?: string;
  year?: string;
  github?: string;
  email?: string;
  domain?: string;
  description?: string;
  about?: string;
  avatar?: {
    url: string;
  };
}

function MentorCard({ mentor }: { mentor: Mentor | null }): React.JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className="w-full max-w-[240px] aspect-[3/4] cursor-pointer overflow-hidden transition-all duration-500 hover:scale-105"
        padding="0"
      >
        <div className="relative h-full w-full">
          <Image
            src={mentor?.avatar?.url || "/images/ayush.png"}
            alt={mentor?.name || "Mentor"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="mb-1 text-center text-lg font-bold">
              {mentor?.name || "Sankalp Nayak"}
            </h3>
          </div>
        </div>
      </Card>

      <div
        className={`absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-3 transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
      >
        {mentor?.email && (
          <a
            href={`mailto:${mentor.email}`}
            className="bg-team-medium-blue/90 rounded-full p-2 shadow-lg backdrop-blur-sm transition-colors duration-200 hover:bg-team-accent-blue/90"
          >
            <Mail className="h-4 w-4 text-white" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Mentor(): React.JSX.Element {
  const [mentor, setMentor] = useState<Mentor | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMentorData();
      setMentor(data);
    };
    fetchData();
  }, []);

  return (
    <section className="text-white px-10">
      <div className="max-w-7xl mx-auto py-10 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-3xl font-bold">MEET OUR MENTOR, ADVISOR AND FIC</h1>
        <p className="font-bold text-xl text-center max-w-2xl">
          &quot;A mentor is someone who sees more talent and ability within you,
          than you see in yourself and helps bring it out of you.&quot;
        </p>
      </div>
      <div className="max-w-7xl mx-auto pb-10">
        <MentorCard mentor={mentor} />
      </div>
    </section>
  );
}
