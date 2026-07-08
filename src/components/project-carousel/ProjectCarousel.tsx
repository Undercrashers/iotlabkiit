"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { fetchProjects } from "@/actions/projects";

export interface ProjectImage {
  fileName: string;
  handle: string;
  height: number;
  id: string;
  mimeType: string;
  url: string;
  width: number;
}

export interface Project {
  addr: string | null;
  description: string;
  id: string;
  link: string | null;
  linkText: string | null;
  name: string;
  type: string | null;
  image: ProjectImage;
  projectStatus: string | null;
}

const ProjectCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full py-16 text-white mt-12">
      <div className="">
        <div className="text-center mb-12 relative">
          <h1 className="font-bold text-5xl text-center mb-6">Projects</h1>
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

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
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
                projects.map((project) => {
                  const cardContent = (
                    <div className="relative">
                      <div
                        className="h-96 bg-cover mb-2 bg-center rounded-lg"
                        style={{
                          backgroundImage: `url(${project.image?.url})`,
                        }}
                      ></div>
                      <div className="absolute bottom-0 w-full p-2">
                        <div className="w-full max-h-[80px] min-h-[80px] overflow-y-auto p-2 px-3 text-justify backdrop-blur-xs glassmorphism text-xs rounded-md bg-opacity-80">
                          {project.description}
                        </div>
                      </div>
                    </div>
                  );
                  return project.link ? (
                    <a
                      key={project.id}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-none md:w-80 w-64 cursor-pointer hover:scale-95 transition-all duration-200"
                      style={{ textDecoration: "none" }}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div key={project.id} className="flex-none md:w-80 w-64">
                      {cardContent}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
