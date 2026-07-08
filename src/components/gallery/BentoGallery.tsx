"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function SkeletonCard() {
  return (
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-gray-700/30 via-gray-600/20 to-gray-700/30 animate-pulse backdrop-blur-sm" />
  );
}

function ImageWithSkeleton({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className={`overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative group ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {!loaded && <SkeletonCard />}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-700 group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadingComplete={() => setLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

const BentoGallery = ({ images }: { images: string[] }) => {
  // Create different sized grid items for bento layout
  const getGridItemClass = (index: number): string => {
    const patterns = [
      // Pattern 1: Large, medium, small arrangements
      "col-span-2 row-span-2 h-80", // Large feature image
      "col-span-1 row-span-1 h-36", // Small image
      "col-span-1 row-span-1 h-36", // Small image
      "col-span-1 row-span-2 h-80", // Tall image
      "col-span-2 row-span-1 h-36", // Wide image
      "col-span-1 row-span-1 h-36", // Small image
      "col-span-1 row-span-1 h-36", // Small image
      "col-span-2 row-span-1 h-36", // Wide image
      "col-span-1 row-span-1 h-36", // Small image
      "col-span-1 row-span-1 h-36", // Small image
      "col-span-1 row-span-1 h-36", // Small image
    ];

    return patterns[index % patterns.length] || "col-span-1 row-span-1 h-36";
  };

  return (
    <motion.div
      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mt-6 auto-rows-min"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.08,
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
    >
      {images.slice(0, 10).map((src, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          className={getGridItemClass(idx)}
        >
          <ImageWithSkeleton
            src={src}
            alt={`gallery-${idx}`}
            className="w-full h-full"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

// Image lists remain the same
export const innovenceImages = Array.from(
  { length: 10 },
  (_, i) => `/images/INNOVENCE-3.0/${i + 1}.JPG`
);

export const pokedevImages = Array.from(
  { length: 10 },
  (_, i) => `/images/POKEDEV/${i + 1}.JPG`
);

export const encodeImages = Array.from(
  { length: 11 },
  (_, i) => `/images/ENCODE-4.0/${i + 1}.JPG`
);

export default BentoGallery;
