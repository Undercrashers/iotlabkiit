"use client";
import Image from "next/image";
import galleryEvents from "../../../public/data/gallery.json";
import BentoGallery, {
  encodeImages,
  pokedevImages,
  innovenceImages,
} from "@/components/gallery/BentoGallery";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function GalleryPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <div className="pt-24 bg-[#09164A] text-[#E4E4FF] px-6 md:px-12 py-8 max-w-[1440px] mx-auto min-h-screen">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8 mt-2">
        <div className="grid grid-rows-[auto_1fr] items-start">
          <span className="pb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-[#8B9FDE] font-mono">
            IOT LAB.
          </span>
          <p className="text-xs md:text-sm font-medium uppercase leading-relaxed max-w-[220px] mt-1 tracking-wide font-inter">
            Collection of the best moments, we lived together at our flagship
            events
          </p>
        </div>

        <div className="flex items-start justify-end">
          <h1 className="font-bold tracking-tight font-playfair leading-none text-[clamp(3rem,10vw,7.5rem)] bg-gradient-to-br from-[#E4E4FF] via-[#C1D0FF] to-[#8B9FDE] bg-clip-text text-transparent">
            GALLERY
          </h1>
        </div>
      </div>
      <div className="border-t border-[#E4E4FF]/30 mt-6"></div>

      <div className="mt-8 flex flex-col md:flex-row gap-6">
        <div className="flex items-start md:items-center justify-center md:justify-start md:w-[40px]">
          <span className="text-[10px] font-semibold md:rotate-[-90deg] whitespace-nowrap tracking-widest font-mono text-[#8B9FDE]">
            #momentsofIot
          </span>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-6"
            value={openAccordion || ""}
            onValueChange={setOpenAccordion}
          >
            {galleryEvents.map((event) => (
              <AccordionItem
                key={event.id}
                value={`event-${event.id}`}
                className="border-b border-[#E4E4FF]/20 pb-8"
              >
                <AccordionTrigger className="hover:no-underline p-0 [&>svg]:hidden group">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] items-center gap-8 w-full cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={event.coverImage}
                        alt={event.eventName}
                        width={600}
                        height={320}
                        className="w-full h-[240px] md:h-[280px] object-cover object-[50%_30%] transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="flex flex-col h-full justify-between space-y-6">
                      <div className="space-y-3">
                        <h2 className="text-3xl md:text-4xl font-bold text-left font-playfair leading-tight bg-gradient-to-r from-[#E4E4FF] to-[#C1D0FF] bg-clip-text text-transparent">
                          {event.eventName}
                        </h2>
                        <p className="text-sm text-left font-inter text-[#8B9FDE] tracking-wide">
                          {event.date}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="bg-gradient-to-r from-[#E4E4FF] to-[#C1D0FF] text-[#09164A] px-6 py-2.5 text-sm font-semibold rounded-lg hover:from-[#8B9FDE] hover:to-[#6B7FBE] hover:text-white transition-all duration-300 font-inter shadow-lg">
                          {openAccordion === `event-${event.id}`
                            ? "Minimize"
                            : "Explore"}
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-semibold text-[#8B9FDE] font-mono tracking-wider">
                            {event.photos} PHOTOS
                          </p>
                          <p className="text-xs font-semibold text-[#8B9FDE] font-mono tracking-wider">
                            {event.videos} VIDEOS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pt-8 pl-0">
                  <div className="border-l-2 border-[#E4E4FF]/20 pl-6 ml-4">
                    {event.id === 1 && <BentoGallery images={encodeImages} />}
                    {event.id === 2 && <BentoGallery images={pokedevImages} />}
                    {event.id === 3 && (
                      <BentoGallery images={innovenceImages} />
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
