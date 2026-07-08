"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const memoryFont = Montserrat({ subsets: ["latin"] });

const MemoryBook = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <motion.div
        key="main"
        initial={{ height: "100%", opacity: 1, y: 0 }}
        animate={inView ? { height: 0 } : { height: "100%" }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-screen bg-white text-blue-600"
      >
        <motion.div
          className={`text-[100px] font-bold text-center mx-auto pt-40 leading-none ${memoryFont.className}`}
          initial={{ opacity: 1 }}
          animate={inView ? { opacity: 0 } : { opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.span className="block">Memory</motion.span>
          <motion.span className="block mt-1">Book</motion.span>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={inView ? { opacity: 0, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col gap-2 items-center w-full"
          >
            <motion.span className="bg-black text-orange-500 text-xl font-bold w-full text-center">
              APP DEV - WEB DEV - CP - CYBERSECURITY - MACHINE LEARNING
            </motion.span>
            <motion.span className="bg-blue-500 text-[#aefc3b] text-xl font-bold w-full text-center">
              MARKETING - DESIGNING - CONTENT - ADMINISTRATION - UI/UX
            </motion.span>
          </motion.div>
        </div>
      </motion.div>

      <div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#081444]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <motion.div
            className="max-sm:top-[55vh] top-[10vh] left-[35vw] absolute"
            initial={{ opacity: 0, y: 300 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
            transition={{ delay: 3, duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src="/assets/striver-1.png"
              alt="striver 1"
              width={400}
              height={200}
              className="relative rotate-y-180"
            />
          </motion.div>

          <motion.div
            className="max-sm:max-w-[70vw] max-sm:max-h-[80vh] top-[10vh] -right-[10vw] absolute"
            initial={{ opacity: 0, y: 600 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 600 }}
            transition={{ delay: 3.5, duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src="/assets/memorybook-1.jpg"
              alt="Description of image"
              width={600}
              height={400}
              className="relative object-fill rounded-4xl"
            />
          </motion.div>

          <motion.div
            className="max-sm:max-w-[70vw] max-sm:max-h-[80vh] -top-28 -left-[6vw] absolute"
            initial={{ opacity: 0, y: 600 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 600 }}
            transition={{ delay: 4, duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src="/assets/memorybook-2.jpg"
              alt="memorybook 2"
              width={600}
              height={150}
              className="relative object-fill rounded-4xl max-h-[70vh] grayscale"
            />
          </motion.div>

          <motion.div
            className="max-sm:max-w-[70vw] max-sm:max-h-[80vh] -top-36 right-[25vw] absolute"
            initial={{ opacity: 0, y: 600 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 600 }}
            transition={{ delay: 4.5, duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src="/assets/striver-2.jpg"
              alt="striver 2"
              width={200}
              height={100}
              className="relative object-contain rounded-4xl max-h-[70vh]"
            />
          </motion.div>

          <motion.div
            className="max-sm:max-w-[70vw] max-sm:max-h-[80vh] -left-[15vw] -bottom-6 absolute"
            initial={{ opacity: 0, y: 600 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 600 }}
            transition={{ delay: 5, duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src="/assets/memorybook-3.jpg"
              alt="memorybook 3"
              width={450}
              height={200}
              className="relative object-contain rounded-4xl"
            />
          </motion.div>

          <motion.div
            className="max-sm:max-w-[70vw] max-sm:max-h-[80vh] -bottom-5 -right-20 absolute"
            initial={{ opacity: 0, y: 600 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 600 }}
            transition={{ delay: 5.5, duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src="/assets/striver-3.jpg"
              alt="striver 3"
              width={400}
              height={200}
              className="relative object-contain grayscale rounded-4xl"
            />
          </motion.div>

          <motion.div
            className="max-sm:max-w-[70vw] max-sm:max-h-[80vh] bottom-4 right-[30vw] absolute"
            initial={{ opacity: 0, y: 600 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 600 }}
            transition={{ delay: 6, duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src="/assets/striver-4.jpg"
              alt="striver 4"
              width={250}
              height={10}
              className="relative object-contain rounded-4xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 1000 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 1000 }}
            transition={{ delay: 6.5, duration: 0.5, ease: "easeInOut" }}
            className="relative rounded-4xl w-full max-w-[30vw] h-fit top-[22vh] left-[7vw] bg-red-500 my-4 mx-4"
          >
            <motion.div className="mx-4 my-4 pt-8">
              <motion.h3 className="text-4xl font-extrabold tracking-tighter p-4 text-left mr-6 ml-1 text-black ">
                STRIVER x IOT
                <hr className="border-black border-2 mt-2" />
              </motion.h3>
              <motion.div className="p-4 text-black text-xl font-bold leading-4.5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facere eius harum recusandae quos ipsum tenetur minima quae
                earum optio voluptate officia dignissimos natus labore ipsa
                odit nostrum, perferendis laudantium facilis. harum recusandae
                quos ipsum tenetur minima quae earum optio
              </motion.div>
              <hr className="border-black border-1 " />
              <motion.div className="text-3xl tracking-tighter leading-4 font-extrabold text-black capitalize p-4">
                KNOW MORE
              </motion.div>
              <hr className="border-black border-1 mb-2" />
            </motion.div>
            <br />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MemoryBook;
