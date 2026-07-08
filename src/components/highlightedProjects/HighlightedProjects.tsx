"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { fetchHighlightedProjects } from "@/actions/projects";

export interface HighlightedProjectImage {
  fileName: string;
  handle: string;
  height: number;
  id: string;
  locale: string;
  mimeType: string;
  url: string;
  width: number;
  size: number;
}

export interface HighlightedProject {
  id: string;
  link: string;
  name: string;
  image: HighlightedProjectImage;
}

export default function HighlightedProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
      loop: true,
    },
    [Autoplay()]
  );
  const [projects, setProjects] = useState<HighlightedProject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    fetchHighlightedProjects()
      .then((data) => {
        setProjects(data);
        console.log("highlighted projects", data);

        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load highlighted projects");
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full py-16 text-white">
      <div className="">
        <div className="text-center mb-12 relative">
          <h1 className="text-6xl font-black text-white tracking-widest uppercase relative flex justify-center items-center">
            Our Projects
          </h1>
        </div>

        <div className="relative ml-12">
          <div className="flex justify-end px-12 gap-6">
            <button
              className="hidden md:block left-0 top-1/2 -translate-y-1/2 z-10 text-white bg-blue-300 rounded-full"
              onClick={scrollPrev}
            >
              <BiChevronLeft className="w-full text-4xl" />
            </button>

            <button
              className="hidden md:block right-0 top-1/2 -translate-y-1/2 z-10 text-white bg-blue-300 rounded-full"
              onClick={scrollNext}
            >
              <BiChevronRight className="w-full text-4xl" />
            </button>
          </div>
          <div className="flex">
            <div className="md:flex hidden w-1/2 justify-center items-center">
              <Image
                className="aspect-square "
                src={"/images/highlighted_projects.png"}
                alt="alt"
                height={500}
                width={500}
              />
            </div>
            <div className="overflow-hidden md:w-1/2" ref={emblaRef}>
              <div className="flex h-full items-center">
                {loading ? (
                  <div className="text-center w-full py-12">
                    Loading projects...
                  </div>
                ) : error ? (
                  <div className="text-center w-full py-12 text-red-400">
                    {error}
                  </div>
                ) : projects.length === 0 ? (
                  <div className="text-center w-full py-12">
                    No projects found.
                  </div>
                ) : (
                  projects.map((project) => (
                    <div key={project.id} className="flex-none w-80 mx-1">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="h-full rounded-xl bg-[#1B3599] transition-all duration-300 transform overflow-hidden p-2">
                          <div className="relative">
                            <div
                              className="h-[450px] bg-cover bg-center rounded-lg"
                              style={{
                                backgroundImage: `url(${project.image?.url})`,
                              }}
                            ></div>
                            {/*<div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 px-3 text-lg font-bold rounded-b-lg">
                              {project.name}
                            </div>*/}
                          </div>
                        </div>
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
