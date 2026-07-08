"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa";


const achievementLinks = [
  {
    url: "https://www.linkedin.com/posts/sohom-chandra-chandra-8212b7286_pentathonphase-1-2025-ctf-experience-activity-7314729278825238529-A5nl?utm_source=share&utm_medium=member_ios&rcm=ACoAAEM_Bc8BPPP9vKnG79Mwk-cnnvhJwM1N35I",
    title: "Pentathon (Phase-1) 2025",
    author: "Sohom Chandra Chandra",
  },
  {
    url: "https://www.linkedin.com/posts/bajinder-kumar-8139bb275_cybersecurity-hacktifybattle-tryhackme-activity-7308729270187565057-_Rgh?utm_source=share&utm_medium=member_ios&rcm=ACoAAEM_Bc8BPPP9vKnG79Mwk-cnnvhJwM1N35I",
    title: "Hacktify Battle on TryHackMe",
    author: "Bajinder Kumar",
  },
  {
    url: "https://www.linkedin.com/posts/parthyadav8_cybersecurity-pentathonchampions-teamwork-activity-7180971218244710400-MFRm?utm_medium=ios_app&rcm=ACoAAEM_Bc8BPPP9vKnG79Mwk-cnnvhJwM1N35I&utm_source=social_share_send&utm_campaign=whatsapp",
    title: "Pentathon",
    author: "Parth Yadav",
  },
];

export default function Achievements() {
  return (
    <div className="w-full relative py-20 my-20 text-white bg-gradient-to-br from-[#1B3599] via-[#0600E8] to-[#3b82f6]">
      <div className="absolute w-full h-48 -top-20 bg-clip-padding backdrop-filter backdrop-blur-2xl"></div>
      <div className="absolute w-full h-48 -bottom-24 bg-clip-padding backdrop-filter backdrop-blur-2xl"></div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 relative">
          <h1 className="text-3xl md:text-6xl font-black tracking-widest uppercase flex justify-center items-center mb-2">
            <span className="mr-3 text-blue-300 md:block hidden">
              <FaLinkedin className="inline-block text-6xl" />
            </span>
            Achievements
          </h1>
          <p className="text-base md:text-lg text-blue-100 mt-2 font-medium">
            Celebrating our members&apos; success and recognition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-center">
          {achievementLinks.map((ach) => (
            <span
              className="relative h-full m-auto md:m-0 w-[300px] min-h-[200px] md:w-[270px]"
              key={ach.url}
            >
              {/*<Image
                className="absolute z-10 bottom-5 left-[50%] h-[150px] -translate-x-[50%] filter brightness-125 sepia hue-rotate-[20deg] saturate-200"
                src={"/images/award.png"}
                width={900}
                height={900}
                alt=""
              />*/}
              <a
                key={ach.url}
                href={ach.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-clip-padding backdrop-filter backdrop-blur-xs relative z-20 h-full block rounded-2xl bg-white/10 border border-blue-300 shadow-lg p-6 transition-transform duration-200 hover:scale-105 hover:bg-blue-900/30 hover:border-blue-500"
              >
                {/*<Medal rank={1}/>*/}
                <div className="flex flex-col h-full justify-between">
                  <div className="flex flex-col">
                    <h2 className="text-xl font-bold mb-2 text-blue-200 group-hover:text-white transition-colors duration-200">
                      {ach.title}
                    </h2>
                    <p className="text-sm text-blue-100 mb-4 font-medium">
                      <span className="font-semibold text-blue-300">by</span>{" "}
                      {ach.author}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-center">
                    <span className="bg-blue-400/80 text-black px-4 py-2 rounded-full text-xs font-semibold shadow group-hover:bg-yellow-300 group-hover:text-blue-900 transition-colors duration-200">
                      View Achievement
                    </span>
                  </div>
                </div>
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
