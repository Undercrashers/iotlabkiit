import EventsPage from "@/components/events/EventsPage";
import MemoryBook from "@/components/MemoryBook";
import Hero from "@/components/main-hero/Hero";
import Domains from "@/components/Domains";
import HighlightedProjects from "@/components/highlightedProjects/HighlightedProjects";
import { BiPhotoAlbum } from "react-icons/bi";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Domains />

      {/* Events Section */}
      <section className="mb-20">
        <EventsPage />
      </section>

      {/* Memory Lane Section */}
      <section className="mb-20">
        <div className="w-full py-16 text-white">
          <div className="text-center mb-12 relative">
            <h1 className="text-6xl font-black text-white tracking-widest uppercase relative flex justify-center items-center">
              <BiPhotoAlbum className="text-9xl absolute opacity-15" />
              Memory Lane
            </h1>
          </div>
          <MemoryBook />
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-20">
        <HighlightedProjects />
      </section>
    </>
  );
}
