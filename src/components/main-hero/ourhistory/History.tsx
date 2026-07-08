"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const timelineEvents = [
  {
    date: "Sep 2018",
    title: "The Inception",
    description:
      "Our journey began! We started brainstorming and laying the foundation of our vision to democratize IoT education at KIIT.",
  },
  {
    date: "Oct 2019",
    title: "Core Team Formed",
    description:
      "We formed our first core team and began building early prototypes, establishing the lab as a recognized student body.",
  },
  {
    date: "Mar 2021",
    title: "Project Scalex",
    description:
      "We launched our first major project — Scalex, an app for scaling your business. Available on PlayStore and AppStore.",
  },
  {
    date: "Nov 2022",
    title: "Global Expansion",
    description:
      "We expanded with more features, onboarded our first set of global collaborators, and diversified into multiple domains.",
  },
  {
    date: "Aug 2023",
    title: "1 Million Milestone",
    description:
      "Our user base grew significantly, and we hit a major milestone with 1M downloads across our portfolio of projects.",
  },
  {
    date: "Jul 2024",
    title: "The Future",
    description:
      "We are working on scaling to new verticals, onboarding fresh talent, and innovating for the future of connected technology.",
  },
];

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Ref for the tall scroll container
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to active index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Divide scroll range into equal segments for each event
    const totalEvents = timelineEvents.length;
    // Clamp index between 0 and last event
    const rawIndex = latest * (totalEvents - 1);
    const newIndex = Math.min(
      Math.max(Math.round(rawIndex), 0),
      totalEvents - 1
    );
    setActiveIndex(newIndex);
  });

  // Allow click/keyboard navigation to scroll to the correct position
  const scrollToIndex = React.useCallback(
    (index: number) => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const containerTop =
        container.getBoundingClientRect().top + window.scrollY;
      const containerHeight = container.scrollHeight - window.innerHeight;
      const targetScroll =
        containerTop +
        (index / (timelineEvents.length - 1)) * containerHeight;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    },
    []
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToIndex(index);
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        scrollToIndex(Math.min(index + 1, timelineEvents.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        scrollToIndex(Math.max(index - 1, 0));
      }
    },
    [scrollToIndex]
  );

  return (
    // Tall scroll container: each event gets 100vh of scroll space
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${timelineEvents.length * 100}vh` }}
    >
      {/* Sticky inner section — stays pinned while user scrolls through */}
      <section className="sticky top-0 h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1B3599]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter"
            >
              Our Timeline
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-400 mt-3 md:mt-4 max-w-xl mx-auto text-base md:text-lg"
            >
              Key milestones in our journey from a small idea to a thriving
              community.
            </motion.p>
          </div>

          {/* Content Area */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[240px] mb-16">
            {/* Left: Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center relative"
            >
              {/* Subtle glow behind circle */}
              <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-[#1B3599]/25 rounded-full blur-[50px]" />
              <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] bg-white/5 border border-white/10 rounded-full flex items-center justify-center p-8 backdrop-blur-sm">
                <Image
                  src="/images/circle.png"
                  alt="IoT Lab Timeline"
                  width={180}
                  height={180}
                  className="object-contain drop-shadow-[0_0_12px_rgba(27,53,153,0.4)]"
                />
              </div>
            </motion.div>

            {/* Right: Dynamic Text */}
            <div className="relative h-full flex flex-col justify-center text-center md:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="text-blue-300 font-mono text-lg mb-2 tracking-wide">
                    {timelineEvents[activeIndex].date}
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
                    {timelineEvents[activeIndex].title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {timelineEvents[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Timeline Bar */}
          <div className="relative px-2 md:px-0">
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div
                className="min-w-[700px] relative pt-6"
                role="tablist"
                aria-label="Timeline events"
              >
                {/* Background Track */}
                <div className="absolute top-1/2 left-0 w-full h-[3px] bg-white/10 -translate-y-1/2 rounded-full" />

                {/* Animated Progress Fill — driven by scroll */}
                <motion.div
                  className="absolute top-1/2 left-0 h-[3px] bg-gradient-to-r from-[#1B3599] to-blue-400 -translate-y-1/2 rounded-full"
                  style={{
                    boxShadow: "0 0 12px rgba(27,53,153,0.5)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${(activeIndex / (timelineEvents.length - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* Timeline Nodes */}
                <div className="relative flex justify-between z-10">
                  {timelineEvents.map((item, index) => {
                    const isActive = index === activeIndex;
                    const isPast = index < activeIndex;

                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center cursor-pointer group"
                        role="tab"
                        tabIndex={0}
                        aria-selected={isActive}
                        aria-label={`${item.date}: ${item.title}`}
                        onClick={() => scrollToIndex(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      >
                        {/* Node Dot */}
                        <motion.div
                          className={`relative w-4 h-4 md:w-5 md:h-5 rounded-full border-2 transition-colors duration-300 ${
                            isActive
                              ? "bg-blue-400 border-blue-400"
                              : isPast
                                ? "bg-[#1B3599] border-[#1B3599]"
                                : "bg-[#0B1D64] border-white/30 group-hover:border-white/60"
                          }`}
                          animate={{
                            scale: isActive ? 1.4 : 1,
                            boxShadow: isActive
                              ? "0 0 16px rgba(96,165,250,0.6)"
                              : "0 0 0px transparent",
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Node Label */}
                        <span
                          className={`mt-5 text-xs md:text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
                            isActive
                              ? "text-blue-300"
                              : isPast
                                ? "text-gray-300"
                                : "text-gray-500 group-hover:text-gray-300"
                          }`}
                        >
                          {item.date}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint indicator */}
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              className="flex flex-col items-center gap-1 text-gray-500 text-xs"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>Scroll to explore</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
