"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-dvh w-full flex flex-col items-center justify-center overflow-x-hidden md:mt-[40px]">
      <div className="absolute z-10 text-center flex flex-col gap-2 items-center justify-center text-shadow-lg/20 text-shadow-black">
        <div className="text-5xl md:text-8xl font-black tracking-wider text-white">
          MEET
        </div>
        <div className="text-5xl md:text-8xl font-black tracking-wider text-white">
          IOT LAB TEAM
        </div>
      </div>
      {/*<div className="absolute w-full h-dvh bg-gradient-to-r from-black via-transparent to-black"></div>*/}
      <div className="">
        <Image
          src={`/images/group_photo.png`}
          width={1803}
          height={931}
          alt="hero1"
          className="object-cover opacity-90 rounded-lg h-dvh shadow-lg"
        />
      </div>
      {/*<div className="md:hidden flex flex-row flex-nowrap gap-[33px] md:gap-[33px] items-center justify-center w-full h-full">
        {["hero2", "hero3", "hero4"].map((hero, index) => (
          <Image
            key={index}
            src={`/images/${hero}.png`}
            width={334}
            height={1024}
            alt="hero1"
            className="object-cover opacity-90 rounded-lg h-dvh shadow-lg"
          />
        ))}
      </div>*/}
    </div>
  );
};

export default Hero;
