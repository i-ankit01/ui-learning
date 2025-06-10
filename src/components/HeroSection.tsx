import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/moving-border";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HeroSection() {
  const words = [
    "Full Stack Developer",
    "Problem Solver",
    "AIML Learner",
    "Designer",
  ];

  return (
    <div className="p-4 relative z-10 w-full text-center">
      <div className="flex">
        {/* Left Image */}
        <div className="w-full md:w-[40%] mb-10 md:mb-0 md:mt-25">
          <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto">
            <div className="relative w-full h-full border-2 border-[#FF014F] animate-morph overflow-hidden">
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-xl">
                Your Photo Here
              </div>
            </div>

            {/* Badges */}
            <div className=" bg-white dark:bg-black text-black dark:text-white border-[#FF014F] dark:border-[#FF014F] absolute -top-5 -right-5 text-white px-3 py-1 rounded-full text-sm border ">
              Developer
            </div>

            <div className=" bg-white dark:bg-black text-black dark:text-white border-[#FF014F] dark:border-[#FF014F] absolute -bottom-3 -left-3 bg-black text-white px-3 py-1 rounded-full text-sm border">
              Designer
            </div>
          </div>
        </div>
        <div>
          <h1 className="mt-20 md:mt-40 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Hi, I'm Ankit Kumar
          </h1>
          <div className=" flex justify-center items-center px-4">
            <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-300">
              
              <FlipWords words={words} /> <br />
            </div>
          </div>
          {/* <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Dive into our comprehensive music courses and transform your musical
            journey today. Whether you're a beginner or looking to refine your
            skills, join us to unlock your true potential.
          </p> */}
          <div className="m-10 flex gap-10 justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="relative z-10 text-white cursor-pointer shadow-lg shadow-[0_0_20px_#3275F8] transition-all"
            >
              <span>About me</span>
            </HoverBorderGradient>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="relative z-10 text-white cursor-pointer shadow-lg shadow-[0_0_20px_#3275F8] transition-all"
            >
              <span>About me</span>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </div>
  );
}
