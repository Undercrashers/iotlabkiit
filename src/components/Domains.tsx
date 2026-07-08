"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  BrainCircuit,
  Code2,
  ShieldAlert,
  Cpu,
  Briefcase,
  Megaphone,
  PenTool,
  Camera,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Data: all 12 domains with local images ---
const domains = [
  {
    id: "web",
    title: "Web Dev",
    icon: Globe,
    desc: "Building modern, responsive web apps with React, Next.js, and cutting-edge frontend/backend technologies.",
    img: "/images/domains/webdev.png",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "app",
    title: "App Dev",
    icon: Smartphone,
    desc: "Creating cross-platform mobile experiences using Flutter, React Native, and native development.",
    img: "/images/domains/appdev.png",
    color: "from-green-500 to-emerald-400",
  },
  {
    id: "uiux",
    title: "UI/UX",
    icon: Palette,
    desc: "Designing intuitive, delightful user interfaces and seamless experiences through research-driven design.",
    img: "/images/domains/uiux.png",
    color: "from-pink-500 to-rose-400",
  },
  {
    id: "aiml",
    title: "AI / ML",
    icon: BrainCircuit,
    desc: "Exploring deep learning, NLP, computer vision, and building intelligent systems that learn and adapt.",
    img: "/images/domains/aiml.png",
    color: "from-purple-500 to-violet-400",
  },
  {
    id: "cp",
    title: "Competitive Programming",
    icon: Code2,
    desc: "Sharpening algorithmic thinking and problem-solving skills through competitive coding and contests.",
    img: "/images/domains/cp.png",
    color: "from-yellow-500 to-amber-400",
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    icon: ShieldAlert,
    desc: "Defending digital systems through ethical hacking, penetration testing, and security research.",
    img: "/images/domains/cyber.png",
    color: "from-red-500 to-orange-400",
  },
  {
    id: "iot",
    title: "IoT",
    icon: Cpu,
    desc: "Connecting the physical and digital worlds through embedded systems, sensors, and smart automation.",
    img: "/images/domains/iot.png",
    color: "from-teal-500 to-cyan-400",
  },
  {
    id: "admin",
    title: "Administration",
    icon: Briefcase,
    desc: "Managing operations, events, logistics, and the backbone of the society's day-to-day functioning.",
    img: "/images/domains/admin.png",
    color: "from-slate-500 to-gray-400",
  },
  {
    id: "marketing",
    title: "Marketing & Sponsorship",
    icon: Megaphone,
    desc: "Driving outreach, partnerships, and creative campaigns to amplify the society's presence and impact.",
    img: "/images/domains/marketing.png",
    color: "from-orange-500 to-yellow-400",
  },
  {
    id: "content",
    title: "Content Writing",
    icon: PenTool,
    desc: "Crafting compelling stories, technical blogs, social media content, and event communications.",
    img: "/images/domains/content.png",
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: "photo",
    title: "Photography & Videography",
    icon: Camera,
    desc: "Documenting events, creating cinematic reels, and visual storytelling through the lens.",
    img: "/images/domains/photo.png",
    color: "from-fuchsia-500 to-pink-400",
  },
  {
    id: "digital",
    title: "Digital Marketing",
    icon: TrendingUp,
    desc: "Driving growth through SEO, analytics, social media, and data-driven marketing strategies.",
    img: "/images/domains/digital.png",
    color: "from-violet-500 to-purple-400",
  },
];

// --- Domain Card (single accordion sliver) ---
const DomainCard = ({
  domain,
  isActive,
  onActivate,
}: {
  domain: (typeof domains)[0];
  isActive: boolean;
  onActivate: () => void;
}) => {
  const Icon = domain.icon;

  return (
    <motion.div
      layout
      onClick={onActivate}
      onMouseEnter={onActivate}
      className={cn(
        "relative h-full rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer border border-white/10 group",
        "transition-[flex] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]",
        isActive ? "flex-[8]" : "flex-[1]"
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image with Parallax + Blur */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          scale: isActive ? 1.08 : 1.15,
          filter: isActive
            ? "brightness(0.55) blur(0px)"
            : "brightness(0.25) blur(3px)",
        }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={domain.img}
          alt={domain.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={domain.id === "web"}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/90 z-10" />

      {/* Accent glow at bottom when active */}
      {isActive && (
        <motion.div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-40 z-10 opacity-40 bg-gradient-to-t",
            domain.color
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 lg:p-10 z-20">
        <AnimatePresence mode="wait">
          {isActive ? (
            /* ---- EXPANDED STATE ---- */
            <motion.div
              key="active"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16, transition: { duration: 0.15 } }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="space-y-3 md:space-y-4"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white/90 w-fit">
                <Sparkles className="w-3 h-3 text-yellow-300" />
                <span>Explore Domain</span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                {domain.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-md line-clamp-3 md:line-clamp-none">
                {domain.desc}
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-bold text-white shadow-lg",
                  "bg-gradient-to-r hover:brightness-110 transition-all",
                  domain.color
                )}
              >
                View Projects <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
            </motion.div>
          ) : (
            /* ---- COLLAPSED STATE (vertical text + icon) ---- */
            <motion.div
              key="inactive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            >
              <div className="h-full flex flex-col items-center justify-center gap-6 md:gap-8 py-8 md:py-10">
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-white/40 group-hover:text-white/80 transition-colors duration-300" />
                <h3 className="text-lg md:text-2xl font-bold text-white/40 [writing-mode:vertical-rl] rotate-180 uppercase tracking-[0.2em] whitespace-nowrap group-hover:text-white/80 transition-colors duration-300">
                  {domain.title}
                </h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle border glow on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none transition-opacity duration-500 border-2 z-30",
          isActive ? "opacity-100 border-white/15" : "opacity-0 group-hover:opacity-30 border-white/10"
        )}
      />
    </motion.div>
  );
};

// --- Main Component ---
export default function Domains() {
  const [activeId, setActiveId] = useState<string>("web");

  return (
    <section className="relative flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-purple-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10 md:mb-14 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter"
        >
          Our Domains
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-400 mt-3 md:mt-4 max-w-xl mx-auto text-base md:text-lg"
        >
          Dive into the specialized guilds powering our innovation engine.
        </motion.p>
      </div>

      {/* The Kinetic Accordion */}
      <div className="w-full max-w-[1500px] h-[500px] sm:h-[550px] md:h-[650px] lg:h-[700px] flex flex-col md:flex-row gap-1.5 md:gap-3 p-3 md:p-4 rounded-2xl md:rounded-[2.5rem] bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden relative z-10">
        {domains.map((domain) => (
          <DomainCard
            key={domain.id}
            domain={domain}
            isActive={activeId === domain.id}
            onActivate={() => setActiveId(domain.id)}
          />
        ))}
      </div>

      {/* Mobile Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-6 md:hidden flex items-center gap-2 text-gray-500 text-sm"
      >
        <Smartphone className="w-4 h-4" />
        <span>Tap cards to expand</span>
      </motion.div>
    </section>
  );
}
