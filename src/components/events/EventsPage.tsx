"use client";

import { fetchEvents } from "@/actions/events";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";

export interface EventImage {
  fileName: string;
  handle: string;
  height: number;
  id: string;
  mimeType: string;
  size: number;
  url: string;
  width: number;
}

export interface Event {
  id: string;
  title: string;
  link: string;
  decription: string;
  startDate: string;
  endDate: string;
  year: string | null;
  type: string | null;
  image: EventImage;
}

const EventsPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    fetchEvents()
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load events");
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full py-16 text-white">
      <div className="">
        <div className="text-center mb-12 relative">
          <h1 className="text-6xl font-black text-white tracking-widest uppercase relative flex justify-center items-center">
            <IoTicketOutline className="text-9xl absolute opacity-15" />
            EVENTS
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

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {loading ? (
                <div className="text-center w-full py-12">
                  Loading events...
                </div>
              ) : error ? (
                <div className="text-center w-full py-12 text-red-400">
                  {error}
                </div>
              ) : events.length === 0 ? (
                <div className="text-center w-full py-12">No events found.</div>
              ) : (
                events.map((event) => {
                  const today = new Date();
                  const start = event.startDate
                    ? new Date(event.startDate)
                    : null;
                  const end = event.endDate ? new Date(event.endDate) : null;
                  let status = "Upcoming";
                  let badgeColor = "bg-yellow-400 text-black";
                  if (start && end) {
                    if (today > end) {
                      status = "Completed";
                      badgeColor = "bg-orange-400 text-black";
                    } else if (today >= start && today <= end) {
                      status = "Ongoing";
                      badgeColor = "bg-green-500 text-black";
                    }
                  } else if (start) {
                    if (today < start) {
                      status = "Upcoming";
                      badgeColor = "bg-yellow-400 text-black";
                    } else {
                      status = "Ongoing";
                      badgeColor = "bg-green-500 text-black";
                    }
                  }
                  return (
                    <div key={event.id} className="flex-none w-80">
                      <div className="h-full rounded-xl bg-[#1B3599] transition-all duration-300 transform overflow-hidden p-4">
                        <div className="relative">
                          <div
                            className="h-48 bg-cover mb-2 bg-center rounded-lg"
                            style={{
                              backgroundImage: `url(${event.image?.url})`,
                            }}
                          ></div>

                          <span
                            className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold shadow ${badgeColor}`}
                            style={{ zIndex: 2 }}
                          >
                            {status}
                          </span>
                        </div>
                        <div className="">
                          <h3 className="text-xl font-bold mb-2">
                            {event.title}
                          </h3>
                          <p className="text-sm leading-relaxed mb-2 line-clamp-4 min-h-[95px]">
                            {event.decription}
                          </p>
                          {event.link && (
                            <a
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-auto bg-white opacity-40 text-black w-fit hover:bg-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex justify-center items-center gap-1"
                            >
                              Know More
                              <BsArrowRight className="text-lg rotate-315 scale-120" />
                            </a>
                          )}
                        </div>
                      </div>
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

export default EventsPage;
