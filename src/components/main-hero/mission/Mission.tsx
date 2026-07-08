"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, type: "spring", bounce: 0.3 },
    },
  };

  return (
    <section className="relative px-6 py-20 md:py-28 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Ambient Glows — matching site palette */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#1B3599]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-28 md:space-y-36">
        {/* Section Header */}
        <div className="text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-400 mt-3 md:mt-4 max-w-xl mx-auto text-base md:text-lg"
          >
            Our purpose and the story behind it all.
          </motion.p>
        </div>

        {/* Mission Block */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={imageVariants}
            className="flex justify-center relative group"
          >
            {/* Glow backdrop */}
            <div className="absolute inset-4 bg-[#1B3599]/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative w-full max-w-md aspect-square bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
              <Image
                src="/images/mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D64] via-transparent to-transparent opacity-70" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={textVariants}
            className="text-white space-y-5 relative z-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-wider uppercase">
              Our Purpose
            </span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">
              Mission.
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are dedicated to architecting the digital future. By bridging
              the gap between innovative ideas and flawless execution, we empower
              our community to build scalable, beautiful, and highly functional
              technologies that leave a lasting impact.
            </p>
          </motion.div>
        </div>

        {/* Founding Story Block */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={textVariants}
            className="text-white space-y-5 order-2 md:order-1 relative z-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-wider uppercase">
              How It Started
            </span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">
              Founding Story.
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              What began as a late-night brainstorming session quickly evolved
              into a unified movement. We recognized a gap in peer-to-peer
              technical development and set out to create a space where
              creativity meets code — a launchpad for the next generation of
              builders.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={imageVariants}
            className="flex justify-center order-1 md:order-2 relative group"
          >
            <div className="absolute inset-4 bg-[#1B3599]/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative w-full max-w-md aspect-square bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
              <Image
                src="/images/founding.png"
                alt="Our Founding Story"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D64] via-transparent to-transparent opacity-70" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
