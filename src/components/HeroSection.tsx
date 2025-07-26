import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import About from "./About";

export function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const words = [
    "Full Stack Developer",
    "Problem Solver",
    "AIML Learner",
    "Designer",
  ];

  return (
    <div className="p-4 relative z-10 w-full text-center">
      <div className="md:flex">
        {/* Left Image */}
        <div className="w-full md:w-[40%] mb-10 md:mb-0 md:mt-25">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative w-56 h-56 md:w-80 md:h-80 mx-auto"
          >
            <div className="relative w-full h-full mt-15 md:mt-0 border-2 border-[#FF014F] animate-morph shadow-lg shadow-[#FF014F] overflow-hidden">
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-xl">
                Your Photo Here
              </div>
            </div>

            {/* Badges */}
            <div className=" bg-gradient-to-r from-[#FF014F]/7 to-[#FF014F]/15 text-black dark:text-white border-[#FF014F] dark:border-[#FF014F] absolute -top-5 -right-5 text-white px-3 py-1 rounded-full text-sm border ">
              Developer
            </div>

            <div className="bg-gradient-to-r from-[#FF014F]/7 to-[#FF014F]/15 text-black dark:text-white border-[#FF014F] dark:border-[#FF014F] absolute -bottom-3 -left-3 bg-black text-white px-3 py-1 rounded-full text-sm border">
              Designer
            </div>
          </motion.div>
        </div>
        <motion.div
        ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
          <div
            
          >
            <h1 className="mt-20 md:mt-40 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Hi, I'm Ankit Kumar
            </h1>
          </div>
          <div className=" flex justify-center items-center px-4">
            <motion.div
              
              className="md:text-4xl text-2xl font-normal text-neutral-600 dark:text-neutral-300 md:block hidden"
            >
              <FlipWords words={words} /> <br />
            </motion.div>
          </div>
          <div
          
          >
            <About
              text={
                "A passionate and adaptive developer with a strong foundation in full-stack web development. Always eager to learn, I turn ideas into functional, user-focused solutions with clean and scalable code."
              }
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
