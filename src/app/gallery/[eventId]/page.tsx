import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="pt-20 bg-[#09164A] text-[#E4E4FF] px-6 md:px-12 py-8 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8 mt-2">
        <div className="grid grid-rows-[auto_1fr] items-start">
          <span className="pb-4 text-xs md:text-sm font-semibold tracking-[0.15em]">
            IOT LAB.
          </span>
          <p className="text-xs md:text-sm font-medium uppercase leading-snug max-w-[220px] mt-1">
            COLLECTION OF THE BEST MOMENTS, WE LIVED TOGETHER AT OUR FLAGSHIP
            EVENTS
          </p>
        </div>

        <div className="flex items-start justify-end">
          <h1 className="font-bold tracking-tight font-serif leading-none text-[clamp(3rem,10vw,7.5rem)]">
            GALLERY
          </h1>
        </div>
      </div>

      <div className="border-t-2 border-[#E4E4FF] mt-3"></div>

      <div className="mt-6 flex flex-col md:flex-row gap-6">
        <div className="w-full gap-3 grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-row md:flex-col gap-4 items-end">
            <div className="w-1/2 h-full">
              <Image
                src="/images/desktop-33/speaker.png"
                className="h-full object-cover"
                alt="title"
              />
            </div>
            <div className="w-11/12">
              <Image src="/images/desktop-33/grp-discussion.png" alt="title" />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div className="w-full">
                <Image src="/images/desktop-33/grp-of-ppl.png" alt="title" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full">
                  <Image
                    src="/images/desktop-33/teacher-teaching.png"
                    alt="title"
                    className="h-9/12 object-cover"
                  />
                </div>
                <div className="w-full">
                  <Image
                    src="/images/desktop-33/person-speaking.png"
                    alt="title"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="md:flex grid grid-cols-2 md:flex-col gap-4">
              <div className="md:w-3/5">
                <Image src="/images/desktop-33/person-pic.png" alt="title" />
              </div>
              <div className="md:w-9/12">
                <Image
                  src="/images/desktop-33/person-explaining.png"
                  alt="title"
                />
              </div>
              <div className="md:w-3/5 col-span-2">
                <Image
                  src="/images/desktop-33/grp-confused.png"
                  className="w-full"
                  alt="title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
