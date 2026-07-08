"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function SkeletonCard() {
  return (
    <div className="w-full h-full rounded-lg bg-gradient-to-r from-gray-700/40 via-gray-600/40 to-gray-700/40 animate-pulse" />
  );
}

function ImageWithSkeleton({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="w-full h-40 md:h-48 overflow-hidden rounded-lg shadow-md relative"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {!loaded && <SkeletonCard />}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadingComplete={() => setLoaded(true)}
      />
    </motion.div>
  );
}

const GalleryCollage = ({ images }: { images: string[] }) => (
  <motion.div
    className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.05, duration: 0.3 },
      },
    }}
  >
    {images.map((src, idx) => (
      <motion.div
        key={idx}
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
      >
        <ImageWithSkeleton src={src} alt={`gallery-${idx}`} />
      </motion.div>
    ))}
  </motion.div>
);

function EventGallery({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
      >
        {open ? "Collapse" : `Explore ${title}`}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <GalleryCollage images={images} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Image lists
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

export const InnovenceGallery = () => (
  <EventGallery title="Innovence 3.0" images={innovenceImages} />
);
export const PokedevGallery = () => (
  <EventGallery title="Pokedev" images={pokedevImages} />
);
export const EncodeGallery = () => (
  <EventGallery title="Encode" images={encodeImages} />
);

export default GalleryCollage;